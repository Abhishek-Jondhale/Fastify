// routes/studentRoutes.ts

import { FastifyInstance } from 'fastify';
import { studentSchema } from '../models/hookModel';
import { findStudentById } from '../controllers/hookController';

export const hookRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/students/:id', { schema: studentSchema }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const student = findStudentById(parseInt(id));

    if (student) {
      reply.send(student);
    } else {
      reply.status(404).send({ message: 'Student not found' });
    }
  });
};
