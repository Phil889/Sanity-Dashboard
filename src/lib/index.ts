/**
 * ADVISORI Sanity Pipeline - Shared Library
 *
 * Re-exports shared utilities used across the pipeline.
 */

export { config } from './config.js';
export type { Config, SanityConfig } from './config.js';
export { sanityClient, getClient } from './sanity-client.js';
