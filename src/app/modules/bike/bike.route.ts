import express from 'express';
import { BikeValidation } from './bike.validation';
import { BikeController } from './bike.controller';
import validateRequest from '../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(BikeValidation.createBikeValidationSchema),
  BikeController.createBike,
);

export const BikeRoutes = router;
