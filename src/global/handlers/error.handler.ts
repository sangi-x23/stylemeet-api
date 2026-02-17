import { HttpException, HttpStatus, Logger } from '@nestjs/common';

const logger = new Logger('ErrorHandler');

/**
 * Centralized error handler for consistent API responses.
 * Formats errors as: { status: false, message: string }
 */
export const errorHandler = (service: string, err: unknown): never => {
  let message = 'Internal Server Error';
  let status = HttpStatus.INTERNAL_SERVER_ERROR;

  // Handle HttpException (custom Nest errors)
  if (err instanceof HttpException) {
    const response = err.getResponse();

    message =
      typeof response === 'string'
        ? response
        : (response as any)?.message || err.message;

    status = err.getStatus();
  }

  // Handle standard JS errors
  else if (err instanceof Error) {
    message = err.message || message;
  }

  // Log the error (for debugging)
  logger.error(`[${service}]`, {
    message,
    status,
    stack: err instanceof Error ? err.stack : undefined,
  });

  // Throw uniform response
  throw new HttpException(
    {
      status: false,
      message,
    },
    status,
  );
};

