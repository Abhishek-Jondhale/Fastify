import fastifyPlugin from 'fastify-plugin';
import mysql from 'mysql2/promise';

declare module 'fastify' {
  interface FastifyInstance {
    db: mysql.Pool;
  }
}

const dbPlugin = fastifyPlugin(async (fastify) => {
  const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'password', 
    database: 'my_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  fastify.decorate('db', pool);

  fastify.addHook('onClose', async (instance) => {
    await instance.db.end();
  });
});

export { dbPlugin };
