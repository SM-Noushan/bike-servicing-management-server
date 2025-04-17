import { z } from 'zod';

export const trimmedString = z.string().trim();

export const alphaString = trimmedString.regex(
  /^[A-Za-z\s]+$/,
  'Must be valid text',
);

export const validUuid = z.string().uuid({ message: 'Invalid uuid format' });
