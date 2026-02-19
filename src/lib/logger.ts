/**
 * Logging utilities for the ADVISORI Sanity Translation Pipeline.
 *
 * Provides leveled, emoji-prefixed logging matching existing codebase conventions.
 * Thin wrappers around console.log/console.error/console.warn.
 */

let timestampsEnabled = false

function getTimestamp(): string {
  if (!timestampsEnabled) return ''
  return `[${new Date().toISOString()}] `
}

export const logger = {
  /** Enable timestamp prefix for all log messages */
  enableTimestamps(): void {
    timestampsEnabled = true
  },

  /** Disable timestamp prefix */
  disableTimestamps(): void {
    timestampsEnabled = false
  },

  /** General info message (no emoji prefix) */
  info(message: string, ...args: unknown[]): void {
    console.log(`${getTimestamp()}${message}`, ...args)
  },

  /** Success message — ✅ */
  success(message: string, ...args: unknown[]): void {
    console.log(`${getTimestamp()}✅ ${message}`, ...args)
  },

  /** Error message — ❌ */
  error(message: string, ...args: unknown[]): void {
    console.error(`${getTimestamp()}❌ ${message}`, ...args)
  },

  /** Warning message — ⚠️ */
  warn(message: string, ...args: unknown[]): void {
    console.warn(`${getTimestamp()}⚠️  ${message}`, ...args)
  },

  /** Search/query operation — 🔍 */
  search(message: string, ...args: unknown[]): void {
    console.log(`${getTimestamp()}🔍 ${message}`, ...args)
  },

  /** File operation — 💾 */
  file(message: string, ...args: unknown[]): void {
    console.log(`${getTimestamp()}💾 ${message}`, ...args)
  },

  /** Statistics/metrics — 📊 */
  stats(message: string, ...args: unknown[]): void {
    console.log(`${getTimestamp()}📊 ${message}`, ...args)
  },

  /** Progress indicator — [current/total] message */
  progress(current: number, total: number, message: string): void {
    console.log(`${getTimestamp()}[${current}/${total}] ${message}`)
  },
}
