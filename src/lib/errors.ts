/**
 * Error handling utilities for the ADVISORI Sanity Translation Pipeline.
 *
 * Provides typed error classes for the three failure modes in the pipeline:
 * - SanityApiError: Sanity API failures (network, rate limits, server errors)
 * - ValidationError: Content or schema validation failures
 * - ConfigError: Missing environment variables or bad configuration
 *
 * Also provides withRetry<T> for automatic retry with exponential backoff.
 */

// ─── Error Codes ─────────────────────────────────────────────────────────────

export type PipelineErrorCode =
  | 'SANITY_API_ERROR'
  | 'VALIDATION_ERROR'
  | 'CONFIG_ERROR';

// ─── Base Error Class ────────────────────────────────────────────────────────

/**
 * Base error class for all pipeline errors.
 * Provides structured error information: code, context, and retryable flag.
 */
export class PipelineError extends Error {
  public readonly code: PipelineErrorCode;
  public readonly context: Record<string, unknown>;
  public readonly retryable: boolean;

  constructor(
    message: string,
    code: PipelineErrorCode,
    options: {
      context?: Record<string, unknown>;
      retryable?: boolean;
      cause?: Error;
    } = {}
  ) {
    super(message, { cause: options.cause });
    this.name = 'PipelineError';
    this.code = code;
    this.context = options.context ?? {};
    this.retryable = options.retryable ?? false;

    // Fix prototype chain for instanceof checks with TypeScript class inheritance
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// ─── Specific Error Classes ──────────────────────────────────────────────────

/**
 * Error for Sanity API failures.
 * Automatically sets retryable based on HTTP status code:
 * - 429 (rate limit) and 5xx (server errors): retryable
 * - 4xx (client errors): not retryable
 */
export class SanityApiError extends PipelineError {
  public readonly statusCode: number | undefined;

  constructor(
    message: string,
    options: {
      statusCode?: number;
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    const statusCode = options.statusCode;
    const retryable = statusCode !== undefined
      ? statusCode === 429 || statusCode >= 500
      : true; // Unknown status — assume retryable (network error, timeout, etc.)

    super(message, 'SANITY_API_ERROR', {
      context: { ...options.context, statusCode },
      retryable,
      cause: options.cause,
    });

    this.name = 'SanityApiError';
    this.statusCode = statusCode;
  }
}

/**
 * Error for content or schema validation failures.
 * Never retryable — invalid content won't become valid on retry.
 */
export class ValidationError extends PipelineError {
  constructor(
    message: string,
    options: {
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(message, 'VALIDATION_ERROR', {
      context: options.context,
      retryable: false,
      cause: options.cause,
    });

    this.name = 'ValidationError';
  }
}

/**
 * Error for missing environment variables or bad configuration.
 * Never retryable — config issues require manual intervention.
 */
export class ConfigError extends PipelineError {
  constructor(
    message: string,
    options: {
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(message, 'CONFIG_ERROR', {
      context: options.context,
      retryable: false,
      cause: options.cause,
    });

    this.name = 'ConfigError';
  }
}

// ─── Retry Utility ───────────────────────────────────────────────────────────

export interface RetryOptions {
  /** Maximum number of retry attempts (default: 3) */
  maxRetries?: number;
  /** Initial delay between retries in milliseconds (default: 1000) */
  delayMs?: number;
  /** Multiplier applied to delay after each retry (default: 2) */
  backoffMultiplier?: number;
}

/**
 * Executes a function with automatic retry and exponential backoff.
 *
 * - If the error is a PipelineError with retryable === false, throws immediately.
 * - If the error is a PipelineError with retryable === true, retries.
 * - If the error is an unknown error (not PipelineError), retries (conservative approach).
 * - Logs each retry attempt via console.warn.
 *
 * @param fn - Async function to execute
 * @param options - Retry configuration
 * @returns The result of fn() on success
 * @throws The last error after all retries are exhausted
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxRetries = 3,
    delayMs = 1000,
    backoffMultiplier = 2,
  } = options;

  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error(String(error));
      lastError = err;

      // If the error is a PipelineError and explicitly not retryable, throw immediately
      if (err instanceof PipelineError && !err.retryable) {
        throw err;
      }

      // If we've exhausted all retries, throw
      if (attempt >= maxRetries) {
        throw err;
      }

      // Calculate delay with exponential backoff
      const currentDelay = delayMs * Math.pow(backoffMultiplier, attempt);

      console.warn(
        `\u26A0\uFE0F  Retry ${attempt + 1}/${maxRetries} after ${currentDelay}ms: ${err.message}`
      );

      // Wait before next attempt
      await new Promise((resolve) => setTimeout(resolve, currentDelay));
    }
  }

  // This should never be reached, but TypeScript needs it for completeness
  throw lastError ?? new Error('withRetry: unexpected state');
}
