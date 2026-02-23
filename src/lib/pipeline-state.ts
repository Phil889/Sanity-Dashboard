/**
 * Pipeline State Management
 *
 * Tracks the progress of each page through the end-to-end pipeline stages.
 * Persists state to disk after each stage transition for crash-safe resume.
 *
 * Stages (in order):
 *   detected → extracted → translated → validated → fixed → uploaded → linked → verified
 *
 * Usage:
 *   import { PipelineStateManager } from '../lib/pipeline-state.js'
 *   const state = await PipelineStateManager.load()
 *   state.setStage('access-governance', 'extracted')
 *   await state.save()
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'

// ─── Types ──────────────────────────────────────────────────────────────────

/** Ordered pipeline stages. Each page progresses through these sequentially. */
export const PIPELINE_STAGES = [
  'detected',
  'extracted',
  'translated',
  'validated',
  'fixed',
  'uploaded',
  'linked',
  'verified',
] as const

export type PipelineStage = typeof PIPELINE_STAGES[number]

/** Per-page tracking entry. */
export interface PageState {
  germanId: string
  englishId: string
  slug: string
  stage: PipelineStage
  error?: string
  updatedAt: string
  stageTimings: Partial<Record<PipelineStage, number>>
}

/** Serialized pipeline state. */
export interface PipelineStateData {
  version: number
  createdAt: string
  updatedAt: string
  pages: Record<string, PageState>
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function stageIndex(stage: PipelineStage): number {
  return PIPELINE_STAGES.indexOf(stage)
}

/** Returns true if `current` is at or past `target` in the pipeline. */
export function isAtOrPast(current: PipelineStage, target: PipelineStage): boolean {
  return stageIndex(current) >= stageIndex(target)
}

/** Returns the next stage after `current`, or null if at the end. */
export function nextStage(current: PipelineStage): PipelineStage | null {
  const idx = stageIndex(current)
  return idx < PIPELINE_STAGES.length - 1 ? PIPELINE_STAGES[idx + 1] : null
}

// ─── State Manager ──────────────────────────────────────────────────────────

const DEFAULT_STATE_PATH = resolve('src/data/pipeline-state.json')

export class PipelineStateManager {
  private data: PipelineStateData
  private filePath: string

  private constructor(data: PipelineStateData, filePath: string) {
    this.data = data
    this.filePath = filePath
  }

  /** Load state from disk, or create empty state if file doesn't exist. */
  static async load(filePath?: string): Promise<PipelineStateManager> {
    const path = filePath ? resolve(filePath) : DEFAULT_STATE_PATH
    try {
      const content = await readFile(path, 'utf-8')
      const data = JSON.parse(content) as PipelineStateData
      return new PipelineStateManager(data, path)
    } catch {
      const data: PipelineStateData = {
        version: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        pages: {},
      }
      return new PipelineStateManager(data, path)
    }
  }

  /** Save state to disk. */
  async save(): Promise<void> {
    this.data.updatedAt = new Date().toISOString()
    await mkdir(dirname(this.filePath), { recursive: true })
    await writeFile(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8')
  }

  /** Get the state for a page, or null if not tracked. */
  getPage(germanId: string): PageState | null {
    return this.data.pages[germanId] ?? null
  }

  /** Get all tracked pages. */
  getAllPages(): PageState[] {
    return Object.values(this.data.pages)
  }

  /** Register a page (typically at the 'detected' stage). */
  registerPage(germanId: string, slug: string): void {
    if (!this.data.pages[germanId]) {
      this.data.pages[germanId] = {
        germanId,
        englishId: `${germanId}-en`,
        slug,
        stage: 'detected',
        updatedAt: new Date().toISOString(),
        stageTimings: {},
      }
    }
  }

  /** Advance a page to a new stage with optional timing. */
  setStage(germanId: string, stage: PipelineStage, durationMs?: number): void {
    const page = this.data.pages[germanId]
    if (!page) return

    page.stage = stage
    page.updatedAt = new Date().toISOString()
    delete page.error

    if (durationMs !== undefined) {
      page.stageTimings[stage] = durationMs
    }
  }

  /** Mark a page as failed at its current stage. */
  setError(germanId: string, error: string): void {
    const page = this.data.pages[germanId]
    if (!page) return

    page.error = error
    page.updatedAt = new Date().toISOString()
  }

  /**
   * Get all pages that need processing from `fromStage` onward.
   * Returns pages whose current stage is before `fromStage`.
   */
  getPagesNeedingStage(targetStage: PipelineStage): string[] {
    return Object.values(this.data.pages)
      .filter((p) => !isAtOrPast(p.stage, targetStage) && !p.error)
      .map((p) => p.germanId)
  }

  /** Get pages that failed (have errors). */
  getFailedPages(): PageState[] {
    return Object.values(this.data.pages).filter((p) => p.error !== undefined)
  }

  /** Get a summary of pages by stage. */
  getStageCounts(): Record<PipelineStage, number> {
    const counts = {} as Record<PipelineStage, number>
    for (const stage of PIPELINE_STAGES) {
      counts[stage] = 0
    }
    for (const page of Object.values(this.data.pages)) {
      counts[page.stage]++
    }
    return counts
  }

  /** Total number of tracked pages. */
  get totalPages(): number {
    return Object.keys(this.data.pages).length
  }

  /** Number of pages that completed all stages. */
  get completedPages(): number {
    return Object.values(this.data.pages).filter((p) => p.stage === 'verified').length
  }

  /** Number of pages with errors. */
  get errorCount(): number {
    return Object.values(this.data.pages).filter((p) => p.error !== undefined).length
  }
}
