/* eslint-disable no-unused-vars */
import { ZodError } from 'zod';
import { ErrorRequestHandler } from 'express';
import { TErrorSource } from '../interface/error';
import handleZodError from '../errors/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Something went wrong!';
  let errorSources: TErrorSource = [
    {
      path: '',
      message,
    },
  ];

  let simplifiedError;

  if (error instanceof ZodError) simplifiedError = handleZodError(error);

  if (simplifiedError) {
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: process.env.NODE_ENV === 'development' ? error.stack : '🥞',
    // myError: error,
  });
};

export default globalErrorHandler;
