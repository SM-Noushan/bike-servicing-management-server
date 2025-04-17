import { z } from 'zod';
// import { ServiceStatus } from '../../../generated/prisma/client';
import { trimmedString, validUuid } from '../utils/commonValidation';
import { ServiceStatus } from '@prisma/client';


const createServiceValidationSchemaBody = z.object({
  bikeId: validUuid,
  serviceDate: z.coerce.date(),
  description: trimmedString,
  status: z.nativeEnum(ServiceStatus, {
    required_error: 'Status is required',
    invalid_type_error: 'Invalid status type',
  }),
});

const createServiceValidationSchema = z.object({
  body: createServiceValidationSchemaBody,
});

export const ServiceValidation = {
  createServiceValidationSchemaBody,
  createServiceValidationSchema,
};
