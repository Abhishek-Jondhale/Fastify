import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

const secretKey = 'baap@123';

interface JwtPayload {
  userId: string;
  username: string;
}

export const authenticateJWT = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    request.user = decoded;
  } catch (error) {
    return reply.status(401).send({ message: 'Invalid token' });
  }
};
