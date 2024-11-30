import { FastifyRequest, FastifyReply } from 'fastify';

export const onRequestHook = async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(`Request received: ${request.method} ${request.url}`);
};

export const preHandlerHook = async (request: FastifyRequest, reply: FastifyReply) => {
  const apiKey = request.headers['x-api-key'];
  if (apiKey !== 'secret-key') {
    reply.status(401).send({ message: 'Unauthorized' });
  }
};

export const onSendHook = async (request: FastifyRequest, reply: FastifyReply, payload: string | object) => {
  let response;
  if (typeof payload === 'string') {
    try {
      response = JSON.parse(payload);
    } catch (error) {
      return payload;
    }
  } else {
    response = payload;
  }

  response.modified = true;
  return JSON.stringify(response);
};
