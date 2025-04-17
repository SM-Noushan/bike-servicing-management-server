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
  const result = await prisma.customer.findMany();

  return result;
};

const getCustomer = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId },
  });

  return result;
};

const updateCustomer = async (
  customerId: string,
  payload: Partial<Customer>,
) => {
  const result = await prisma.customer.update({
    where: { customerId },
    data: payload,
  });
  return result;
};

export const CustomerService = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
};
