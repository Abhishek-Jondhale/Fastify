import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

let users: { id: string; username: string; password: string }[] = [];

export const registerUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { username, password } = request.body as { username: string; password: string };

  if (!username || !password) {
    return reply.status(400).send({ message: 'Username and password are required' });
  }

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return reply.status(400).send({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: `${Date.now()}`, username, password: hashedPassword };
  users.push(newUser);

  return reply.status(201).send({ message: 'User registered successfully' });
};

export const loginUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { username, password } = request.body as { username: string; password: string };

  if (!username || !password) {
    return reply.status(400).send({ message: 'Username and password are required' });
  }

  const user = users.find(user => user.username === username);
  if (!user) {
    return reply.status(400).send({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return reply.status(400).send({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, 'secret', { expiresIn: '1h' });

  return reply.send({ message: 'Login successful', token });
};
