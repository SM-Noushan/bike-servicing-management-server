import { z } from 'zod';
import { trimmedString } from '../utils/commonValidation';

const createCustomerValidationSchema = z.object({
  body: z.object({
    name: trimmedString,
    email: trimmedString.email({
      message: 'Invalid email format',
    }),
    phone: trimmedString,
  }),
});

export const CustomerValidation = {
  createCustomerValidationSchema,
};
