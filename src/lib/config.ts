/**
 * Centralized configuration for the ADVISORI Sanity Pipeline.
 *
 * Loads environment variables from .env via dotenv and exports
 * a typed, validated config object. Throws immediately on import
 * if required credentials (SANITY_API_TOKEN) are missing.
 */

import 'dotenv/config';

/** Sanity-specific configuration fields. */
export interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token: string;
}

/** Top-level pipeline configuration. */
export interface Config {
  sanity: SanityConfig;
}

// --- Validation -----------------------------------------------------------

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  throw new Error(
    'SANITY_API_TOKEN is not set. ' +
      'Set SANITY_API_TOKEN in the .env file at the project root.',
  );
}

// --- Config object --------------------------------------------------------

export const config: Config = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
    token,
  },
};
