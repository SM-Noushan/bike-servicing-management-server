import { z } from 'zod';
import { trimmedString, validUuid } from '../utils/commonValidation';

const statusSchema = z
  .enum(['pending', 'in-progress', 'done'] as const, {
    required_error: 'Status is required',
    invalid_type_error: 'Status must be one of: pending, in‑progress, done',
  })
  .transform((val) => {
    switch (val) {
      case 'pending':
        return 'PENDING';
      case 'in-progress':
        return 'IN_PROGRESS';
      case 'done':
        return 'DONE';
    }
  });

const createServiceValidationSchemaBody = z.object({
  bikeId: validUuid,
  serviceDate: z.coerce.date(),
  description: trimmedString,
  status: statusSchema,
});

const createServiceValidationSchema = z.object({
  body: createServiceValidationSchemaBody,
});

const updateServiceValidationSchemaBody = z.object({
  completionDate: z.coerce.date().optional(),
});

const updateServiceValidationSchema = z.object({
  body: updateServiceValidationSchemaBody,
});

export const ServiceValidation = {
  createServiceValidationSchemaBody,
  createServiceValidationSchema,
  updateServiceValidationSchemaBody,
  updateServiceValidationSchema,
};
