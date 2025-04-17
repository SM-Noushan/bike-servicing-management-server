import express from 'express';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import validateRequest from '../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

export const ServiceRoutes = router;
