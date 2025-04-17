import prisma from '../utils/prisma';
import { Bike } from '../../../generated/prisma';

const createBike = async (payload: Omit<Bike, 'bikeId'>) => {
  const { customerId, ...bikeData } = payload;

  const result = await prisma.bike.create({
    data: {
      ...bikeData,
      customer: {
        connect: {
          customerId,
        },
      },
    },
  });

  return result;
};

export const BikeService = {
  createBike,
};
