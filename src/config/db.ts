import { Sequelize } from 'sequelize-typescript';
import { CampaignTemplate } from '../models/campaignModel';

const sequelize = new Sequelize({
  dialect: 'postgres',  // Replace with your DB dialect (mysql, sqlite, etc.)
  host: 'localhost',
  username: 'your-username',
  password: 'your-password',
  database: 'your-database',
  models: [CampaignTemplate],  // Add models here
});

export default sequelize;
