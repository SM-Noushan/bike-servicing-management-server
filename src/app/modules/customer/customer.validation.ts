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

const updateCustomerValidationSchema = z.object({
  body: createCustomerValidationSchema.shape.body
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
      message: 'At least one valid field must be provided for update.',
    }),
});

export const CustomerValidation = {
  createCustomerValidationSchema,
  updateCustomerValidationSchema,
};
