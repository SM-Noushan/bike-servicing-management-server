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
  .get('/status', ServiceController.getServiceStatus)
  .get('/:id', validateRequestParam(), ServiceController.getService)
  .put('/:id', validateRequestParam(), ServiceController.updateService);

export const ServiceRoutes = router;
