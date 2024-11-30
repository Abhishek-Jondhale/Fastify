// import { FastifyRequest, FastifyReply } from 'fastify';
// import sequelize  from '../config/db';
// import { User } from '../interfaces/UsersInterface';

// export const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
//     const { name, email } = request.body as User;
//     try {
//         const [result] = await sequelize.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
//         reply.code(201).send({ id: (result as any).insertId, name, email });
//     } catch (error) {
//         const message = error instanceof Error ? error.message : 'An unknown error occurred';
//         reply.code(500).send({ error: message });
//     }
// };

// export const getAllUsers = async (request: FastifyRequest, reply: FastifyReply) => {
//     try {
//         const [users] = await sequelize.query('SELECT * FROM users');
//         reply.send(users);
//     } catch (error) {
//         const message = error instanceof Error ? error.message : 'An unknown error occurred';
//         reply.code(500).send({ error: message });
//     }
// };

// export const getUsersWithOrders = async (request: FastifyRequest, reply: FastifyReply) => {
//     try {
//         const [data] = await sequelize.query(`
//             SELECT users.id, users.name, users.email, orders.product 
//             FROM users 
//             LEFT JOIN orders ON users.id = orders.user_id
//         `);
//         reply.send(data);
//     } catch (error) {
//         const message = error instanceof Error ? error.message : 'An unknown error occurred';
//         reply.code(500).send({ error: message });
//     }
// };
