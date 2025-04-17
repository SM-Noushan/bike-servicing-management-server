import prisma from '../utils/prisma';
import { TCreateService, TUpdateService } from './service.type';

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

const updateService = async (serviceId: string, payload: TUpdateService) => {
  const result = await prisma.serviceRecord.update({
    where: { serviceId },
    data: {
      completionDate: payload.completionDate
        ? new Date(payload.completionDate).toISOString()
        : new Date().toISOString(),
      status: 'DONE',
    },
  });

  return result;
};

export const ServiceService = {
  createService,
  getServices,
  getService,
  updateService,
};
