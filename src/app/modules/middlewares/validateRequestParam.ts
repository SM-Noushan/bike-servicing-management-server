import catchAsync from '../utils/catchAsync';
import { validUuid } from '../utils/commonValidation';
import { NextFunction, Request, Response } from 'express';

const validateRequestParam = () =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await validUuid.parseAsync(req.params.id);
    return next();
  });

export default validateRequestParam;
