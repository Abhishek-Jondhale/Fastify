import { FastifyPluginAsync } from 'fastify';
import { createOrder } from '../controllers/orderController';
import { createUserSchema } from '../models/UserModel';

const orderRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.post('/orders', { schema: createUserSchema }, createOrder);
};

export default orderRoutes;
