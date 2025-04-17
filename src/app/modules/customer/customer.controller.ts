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

const getCustomers = catchAsync(async (req, res) => {
  const result = await CustomerService.getCustomers();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message:
      result.length > 0
        ? 'Customers fetched successfully'
        : 'No customer found',
    data: result,
  });
});

const getCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.getCustomer(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message:
      result == null
        ? 'No customer found with this id'
        : 'Customer fetched successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.updateCustomer(req.params.id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  await CustomerService.deleteCustomer(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer deleted successfully',
    data: null,
  });
});

export const CustomerController = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
