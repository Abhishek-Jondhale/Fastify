import { FastifyInstance } from 'fastify';
import { getStudentById, getStudentsByClass } from '../controllers/studentController';

export async function studentRoutes(fastify: FastifyInstance) {
  fastify.get('/student/:id', getStudentById);
  fastify.get('/students', getStudentsByClass);
}
