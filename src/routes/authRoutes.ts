import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateJWT } from '../middlewares/jwtMiddleware';

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/register', registerUser);
  fastify.post('/login', loginUser);

  fastify.get('/protected', { preHandler: authenticateJWT }, async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'This is a protected route', user: request.user });
  });
}


