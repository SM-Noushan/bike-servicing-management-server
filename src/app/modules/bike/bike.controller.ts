import status from 'http-status';
import catchAsync from '../utils/catchAsync';
import { BikeService } from './bike.service';
import sendResponse from '../utils/sendResponse';

const createBike = catchAsync(async (req, res) => {
  const result = await BikeService.createBike(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

const getBikes = catchAsync(async (req, res) => {
  const result = await BikeService.getBikes();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: result.length > 0 ? 'Bikes fetched successfully' : 'No bike found',
    data: result,
  });
});

const getBike = catchAsync(async (req, res) => {
  const result = await BikeService.getBike(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message:
      result == null
        ? 'No bike found with this id'
        : 'Bike fetched successfully',
    data: result,
  });
});

export const BikeController = {
  createBike,
  getBikes,
  getBike,
};
