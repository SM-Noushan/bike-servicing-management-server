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

const getBikes = async () => {
  const result = await prisma.bike.findMany();

  return result;
};

const getBike = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({ where: { bikeId } });

  return result;
};

export const BikeService = {
  createBike,
  getBikes,
  getBike,
};
