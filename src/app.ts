import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
const fastify: FastifyInstance = Fastify({
  logger: false,
});

import registerRoutes from "./routes";
fastify.register(registerRoutes);
fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply) => {
  reply.status(201).send({
    code: 200,
    message: "hello world",
  });
});
// import { onRequestHook, preHandlerHook, onSendHook } from './hooks/requestHooks';
// fastify.addHook('onRequest', onRequestHook);
// fastify.addHook('preHandler', preHandlerHook);
// fastify.addHook('onSend', onSendHook);
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server is running on port 3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
