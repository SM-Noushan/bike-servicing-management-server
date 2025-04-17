import express from 'express';
import { CustomerController } from './customer.controller';
import { CustomerValidation } from './customer.validation';
import validateRequest from '../middlewares/validateRequest';

const router = express.Router();

router
  .post(
    '/',
    validateRequest(CustomerValidation.createCustomerValidationSchema),
    CustomerController.createCustomer,
  )
  .get('/', CustomerController.getCustomers);

export const CustomerRoutes = router;
