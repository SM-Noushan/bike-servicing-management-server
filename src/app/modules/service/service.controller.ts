import status from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { ServiceService } from './service.service';

const createService = catchAsync(async (req, res) => {
  const result = await ServiceService.createService(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Service record created successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
};
