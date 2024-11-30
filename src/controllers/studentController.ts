import { FastifyReply, FastifyRequest } from 'fastify';
import { StudentModel } from '../models/studentModel';

export const getStudentById = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const student = StudentModel.getStudentById(parseInt(id));

  if (student) {
    return reply.send(student);
  } else {
    return reply.status(404).send({ message: 'Student not found' });
  }
};

export const getStudentsByClass = async (request: FastifyRequest, reply: FastifyReply) => {
  const { class: className } = request.query as { class?: string };
  const students = className
    ? StudentModel.getStudentsByClass(className)
    : StudentModel.getAllStudents();

  return reply.send(students);
};
