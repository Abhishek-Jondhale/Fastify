import { FastifyPluginAsync } from 'fastify';
import { db } from '../config/db';

const mysqlPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.decorate('db', db);
};


export default mysqlPlugin;
