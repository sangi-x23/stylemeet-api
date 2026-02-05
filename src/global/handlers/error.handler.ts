import { HttpException, HttpStatus, Logger } from '@nestjs/common';

const logger = new Logger('ErrorHandler');

export const errorHandler = (service: string, err: unknown): never => {
  let message = 'Internal Server Error';
  let status = HttpStatus.INTERNAL_SERVER_ERROR;

  // If its an HttpException instance, do nothing
  if (err instanceof HttpException) {
    const response = err.getResponse();

    message = typeof response === 'string' ? response : (response as any)?.message || err.message;

    status = err.getStatus();
  }

  // Standar error
  if (err instanceof Error) message = err.message || message;

  logger.error(`[${service}]`, {
    message,
    status,
    stack: err instanceof Error ? err.stack : undefined,
  });

  throw new HttpException(message, status);
};
