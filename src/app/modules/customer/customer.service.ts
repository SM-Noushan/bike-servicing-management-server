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

const getCustomers = async () => {
  const result = await prisma.customer.findMany({});

  return result;
};

export const CustomerService = { createCustomer, getCustomers };
