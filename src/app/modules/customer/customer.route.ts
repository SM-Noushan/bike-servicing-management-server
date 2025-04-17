import express from 'express';
import { CustomerController } from './customer.controller';
import { CustomerValidation } from './customer.validation';
import validateRequest from '../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(CustomerValidation.createCustomerValidationSchema),
  CustomerController.createCustomer,
);

export const CustomerRoutes = router;
