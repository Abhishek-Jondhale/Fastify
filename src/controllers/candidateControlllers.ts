import { Request, Response } from 'express';
import { CampaignTemplate } from '../models/campaignModel';
import { CampaignTemplateInput } from '../interfaces/campaignInterface';

export class CampaignController {
  static async createCampaign(req: Request, res: Response): Promise<void> {
    const campaignData: CampaignTemplateInput = req.body;

    try {
      const newCampaign = await CampaignTemplate.create(campaignData as CampaignTemplate);
      res.status(201).json({ message: 'Campaign created successfully', data: newCampaign });
    } catch (error) {
      res.status(500).json({ message: 'Error creating campaign', error });
    }
  }

  static async getCampaigns(req: Request, res: Response): Promise<void> {
    try {
      const campaigns = await CampaignTemplate.findAll();
      res.status(200).json({ data: campaigns });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching campaigns', error });
    }
  }
}
