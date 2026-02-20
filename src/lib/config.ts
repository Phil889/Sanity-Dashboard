/**
 * Centralized configuration for the ADVISORI Sanity Pipeline.
 *
 * Loads environment variables from .env via dotenv and exports
 * a typed, validated config object. Throws immediately on import
 * if required credentials (SANITY_API_TOKEN) are missing.
 *
 * Anthropic (Claude) configuration is lazily validated — only when
 * the `anthropic` getter is first accessed, since many pipeline tools
 * (extract, detect, etc.) do not need the Claude API.
 */

import 'dotenv/config';
import { ConfigError } from './errors.js';

/** Sanity-specific configuration fields. */
export interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token: string;
}

/** Anthropic Claude API configuration fields. */
export interface AnthropicConfig {
  apiKey: string;
  model: string;
}

/** Top-level pipeline configuration. */
export interface Config {
  sanity: SanityConfig;
  /** Lazily validated — throws ConfigError on first access if ANTHROPIC_API_KEY is missing. */
  readonly anthropic: AnthropicConfig;
}

// --- Validation -----------------------------------------------------------

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  throw new Error(
    'SANITY_API_TOKEN is not set. ' +
      'Set SANITY_API_TOKEN in the .env file at the project root.',
  );
}

// --- Lazy Anthropic config ------------------------------------------------

let _anthropicConfig: AnthropicConfig | undefined;

function getAnthropicConfig(): AnthropicConfig {
  if (_anthropicConfig) return _anthropicConfig;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new ConfigError(
      'ANTHROPIC_API_KEY is not set. ' +
        'Set ANTHROPIC_API_KEY in the .env file at the project root.',
      { context: { variable: 'ANTHROPIC_API_KEY' } },
    );
  }

  _anthropicConfig = {
    apiKey,
    model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5-20250514',
  };

  return _anthropicConfig;
}

// --- Config object --------------------------------------------------------

export const config: Config = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
    token,
  },
  get anthropic(): AnthropicConfig {
    return getAnthropicConfig();
  },
};
