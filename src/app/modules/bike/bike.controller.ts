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

export const BikeController = {
  createBike,
};
