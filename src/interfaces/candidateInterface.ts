export interface ICandidate {
    campaignId: string;
    enterprise_id: string;
    title: string;
    medium: string;
    content: string;
    campaign_name?: string;
    sender_name?: string;
    email_from?: string;
    skills?: string[];
    profile_titles?: string;
    educations?: string;
    universities?: string;
    locations?: Array<LocationDto>;
    talent_pool?: string;
    exclusion?: number;
    scheduled_time?: Date;
    status?: string;
    boundary?: string;
    created_by?: string;
    created_timestamp?: Date;
    last_updated_by?: string;
    last_updated_timestamp?: Date;
  }
  
  export interface LocationDto {
    city: string;
    state: string;
    country: string;
  }
  