export const createOrderSchema = {
    body: {
        type: 'object',
        required: ['user_id', 'product'],
        properties: {
            user_id: { type: 'number' },
            product: { type: 'string' },
        },
    },
};
