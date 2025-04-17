import prisma from '../utils/prisma';
import { TCreateService } from './service.type';

const createService = async (payload: TCreateService) => {
  const { bikeId, ...serviceData } = payload;

  const result = await prisma.serviceRecord.create({
    data: {
      ...serviceData,
      bike: {
        connect: {
          bikeId,
        },
      },
    },
  });

  return result;
};

const getServices = async () => {
  const result = await prisma.serviceRecord.findMany();

  return result;
};

const getService = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: { serviceId },
  });

  return result;
};

export const ServiceService = {
  createService,
  getServices,
  getService,
};
