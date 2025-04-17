import express from 'express';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import validateRequest from '../middlewares/validateRequest';
import validateRequestParam from '../middlewares/validateRequestParam';

const router = express.Router();

router
  .post(
    '/',
    validateRequest(ServiceValidation.createServiceValidationSchema),
    ServiceController.createService,
  )
  .get('/', ServiceController.getServices)
  .get('/:id', validateRequestParam(), ServiceController.getService);

export const ServiceRoutes = router;
