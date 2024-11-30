import { FastifyInstance } from 'fastify';
import { createCampaign, getCampaigns } from '../controllers/campaignControllers';

export async function campaignRoute(fastify: FastifyInstance) {
  // Route to create a campaign
  fastify.post('/api/campaigns', createCampaign);

  // Route to fetch all campaigns
  fastify.get('/api/campaigns', getCampaigns);
}
