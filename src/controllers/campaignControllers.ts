import { FastifyRequest, FastifyReply } from 'fastify';
import { CampaignTemplate } from '../models/campaignModel';
import { CampaignTemplateInput } from '../interfaces/campaignInterface';

export async function createCampaign(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const campaignData: CampaignTemplateInput = request.body as CampaignTemplateInput;

  try {
    // Cast campaignData to CampaignTemplate type which includes all necessary properties for Sequelize
    const newCampaign = await CampaignTemplate.create(campaignData as any); // Using `as any` to bypass the type mismatch for Sequelize

    reply.status(201).send({ message: 'Campaign created successfully', data: newCampaign });
  } catch (error) {
    reply.status(500).send({ message: 'Error creating campaign', error});
  }
}

export async function getCampaigns(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const campaigns = await CampaignTemplate.findAll();
    reply.status(200).send({ data: campaigns });
  } catch (error) {
    reply.status(500).send({ message: 'Error fetching campaigns', error});
  }
}
