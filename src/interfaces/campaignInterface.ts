export interface LocationDto {
    city: string;
    country: string;
  }
  
  export interface CampaignTemplateInput {
    campaignId: string;
    enterpriseId: string;
    title: string;
    medium?: string;
    content?: string;
    campaignName: string;
    senderName?: string;
    emailFrom?: string;
    skills: string[];
    profileTitles?: string;
    educations?: string;
    universities?: string;
    locations: LocationDto[];
    talentPool?: string;
    exclusion?: number;
    scheduledTime: Date;
    status: string;
    boundary?: string;
    createdBy: string;
    createdTimestamp: Date;
    lastUpdatedBy: string;
    lastUpdatedTimestamp: Date;
  }
  