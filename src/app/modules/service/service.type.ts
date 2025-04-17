import { z } from 'zod';
import { ServiceValidation } from './service.validation';

export type TCreateService = z.infer<
  typeof ServiceValidation.createServiceValidationSchemaBody
>;
