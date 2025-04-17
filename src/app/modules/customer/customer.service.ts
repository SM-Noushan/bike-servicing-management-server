import prisma from '../utils/prisma';
import { Customer } from '../../../generated/prisma';

const createCustomer = async (
  payload: Pick<Customer, 'name' | 'email' | 'phone'>,
) => {
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

export const CustomerService = { createCustomer };
