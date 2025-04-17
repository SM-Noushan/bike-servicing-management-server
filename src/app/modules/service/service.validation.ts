import { z } from 'zod';
import { $Enums } from '../../../generated/prisma';
import { trimmedString, validUuid } from '../utils/commonValidation';

const statusSchema = z.preprocess(
  (val) => {
    if (typeof val === 'string')
      switch (val) {
        case 'pending':
          return 'PENDING';
        case 'in-progress':
          return 'IN_PROGRESS';
        case 'done':
          return 'DONE';
      }
    return val;
  },
  z.nativeEnum($Enums.ServiceStatus, {
    required_error: 'Status is required',
    invalid_type_error: 'Must be one of: pending, in‑progress, done',
  }),
);

const createServiceValidationSchemaBody = z.object({
  bikeId: validUuid,
  serviceDate: z.coerce.date(),
  description: trimmedString,
  status: statusSchema,
});

const createServiceValidationSchema = z.object({
  body: createServiceValidationSchemaBody,
});

export const ServiceValidation = {
  createServiceValidationSchemaBody,
  createServiceValidationSchema,
};
