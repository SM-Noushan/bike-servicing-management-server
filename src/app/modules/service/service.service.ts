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

export const ServiceService = {
  createService,
};
