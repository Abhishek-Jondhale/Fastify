// schemas/userSchema.ts

import { FastifySchema } from 'fastify';

export const userSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['email', 'username'],
    properties: {
      email: { type: 'string', format: 'email' },
      username: { type: 'string', minLength: 3 },
    },
  },
};
