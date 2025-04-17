import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '../../../generated/prisma/runtime/library';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';

const prismaClientKnownRequestError = (
  err: PrismaClientKnownRequestError,
): TGenericErrorResponse => {
  // console.log(err);
  let statusCode: number;
  const errorSources: TErrorSource = [
    {
      path: err.meta?.modelName as string,
      message: err?.meta?.cause ? (err?.meta?.cause as string) : err.message,
    },
  ];
  switch (err.code) {
    case 'P2002':
      statusCode = 409;
      errorSources[0].message = `Unique constraint failed on the ${err.meta?.target} field`;
      break;
    case 'P2001':
    case 'P2025':
      statusCode = 404;
      break;
    case 'P2003':
    case 'P2000':
    case 'P2006':
    case 'P2011':
      statusCode = 400;
      break;
    default:
      statusCode = 500;
  }

  return {
    statusCode,
    message: err.name || 'PrismaClientKnownRequestError',
    errorSources: errorSources,
  };
};

const prismaClientValidationError = (
  err: PrismaClientValidationError,
): TGenericErrorResponse => {
  const statusCode = 404;
  const errMsg = err.message.match(/Invalid.*\.$/);

  const errorSources: TErrorSource = [
    {
      path: 'err',
      message: errMsg ? errMsg[0].split('.')[0] : 'PrismaClientValidationError',
    },
  ];

  return {
    statusCode,
    message: err.name || 'PrismaClientValidationError',
    errorSources,
  };
};

export const PrismaError = {
  prismaClientValidationError,
  prismaClientKnownRequestError,
};
