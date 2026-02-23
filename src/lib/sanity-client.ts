/**
 * Shared Sanity client singleton for the ADVISORI Sanity Pipeline.
 *
 * All pipeline scripts should import `sanityClient` (or `getClient()`)
 * from this module instead of creating their own client instances.
 *
 * - Uses centralized config (./config.ts) for credentials.
 * - useCdn is false because this is a write-heavy migration pipeline.
 * - No retry logic here -- that belongs in the error handling module.
 */

import { createClient, type SanityClient } from '@sanity/client';
import { config } from './config.js';

/**
 * Pre-configured Sanity client instance (singleton).
 *
 * Ready for both reads (GROQ queries) and writes (mutations).
 */
export const sanityClient: SanityClient = createClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  apiVersion: config.sanity.apiVersion,
  token: config.sanity.token,
  useCdn: false,
});

/**
 * Returns the singleton Sanity client.
 *
 * Useful when a lazy / function-based access pattern is preferred,
 * or for passing into higher-order utilities.
 */
export function getClient(): SanityClient {
  return sanityClient;
}
