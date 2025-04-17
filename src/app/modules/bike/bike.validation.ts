import { z } from 'zod';
import { trimmedString, validUuid } from '../utils/commonValidation';

const createBikeValidationSchema = z.object({
  body: z.object({
    brand: trimmedString,
    model: trimmedString,
    year: z
      .number()
      .refine((num) => num >= 1900 && num <= new Date().getFullYear() + 10, {
        message: `Year must be between 1900 and ${new Date().getFullYear() + 10}`,
      }),
    customerId: validUuid,
  }),
});

export const BikeValidation = {
  createBikeValidationSchema,
};
