import express from 'express';
import { BikeRoutes } from '../modules/bike/bike.route';
import { CustomerRoutes } from '../modules/customer/customer.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: CustomerRoutes,
  },
  {
    path: '/bikes',
    route: BikeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
