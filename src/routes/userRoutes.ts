import { FastifyInstance } from 'fastify';
import { userSchema } from '../models/userSchema';
import { createUser } from '../controllers/userController';
import { User } from '../interfaces/userInterface';

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/add', { schema: userSchema }, async (request, reply) => {
    const user = request.body as User; 
    const result = await createUser(user); 
    reply.send(result); 
  });
};
