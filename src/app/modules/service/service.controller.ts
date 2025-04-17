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

const getServices = catchAsync(async (req, res) => {
  const result = await ServiceService.getServices();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message:
      result.length > 0
        ? 'Service records fetched successfully'
        : 'No service record found',
    data: result,
  });
});

const getService = catchAsync(async (req, res) => {
  const result = await ServiceService.getService(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message:
      result == null
        ? 'No service record found with this id'
        : 'Service record fetched successfully',
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const result = await ServiceService.updateService(req.params.id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service marked as completed',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getServices,
  getService,
  updateService,
};
