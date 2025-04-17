import express from 'express';
import { CustomerController } from './customer.controller';
import { CustomerValidation } from './customer.validation';
import validateRequest from '../middlewares/validateRequest';
import validateRequestParam from '../middlewares/validateRequestParam';

const router = express.Router();

router
  .post(
    '/',
    validateRequest(CustomerValidation.createCustomerValidationSchema),
    CustomerController.createCustomer,
  )
  .get('/', CustomerController.getCustomers)
  .get('/:id', validateRequestParam(), CustomerController.getCustomer)
  .put(
    '/:id',
    validateRequestParam(),
    validateRequest(CustomerValidation.updateCustomerValidationSchema),
    CustomerController.updateCustomer,
  )
  .delete('/:id', validateRequestParam(), CustomerController.deleteCustomer);

export const CustomerRoutes = router;
