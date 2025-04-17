import status from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { CustomerService } from './customer.service';

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.createCustomer(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

export const CustomerController = { createCustomer };
