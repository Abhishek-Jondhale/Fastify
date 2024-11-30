import { FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../config/db';
import { Order } from '../interfaces/orderInterface';

export const createOrder = async (request: FastifyRequest, reply: FastifyReply) => {
    const { user_id, product } = request.body as Order;
    try {
        const [result] = await db.query('INSERT INTO orders (user_id, product) VALUES (?, ?)', [user_id, product]);
        reply.code(201).send({ id: (result as any).insertId, user_id, product });
    } catch (error) {
            reply.code(500).send({ error: error.message });
    }
};
