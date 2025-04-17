import express from 'express';
import { BikeValidation } from './bike.validation';
import { BikeController } from './bike.controller';
import validateRequest from '../middlewares/validateRequest';
import validateRequestParam from '../middlewares/validateRequestParam';

const router = express.Router();

router
  .post(
    '/',
    validateRequest(BikeValidation.createBikeValidationSchema),
    BikeController.createBike,
  )
  .get('/', BikeController.getBikes)
  .get('/:id', validateRequestParam(), BikeController.getBike);

export const BikeRoutes = router;
