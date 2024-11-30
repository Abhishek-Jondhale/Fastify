import mongoose, { Schema, Document } from 'mongoose';
import { ICandidate } from '../interfaces/candidateInterface';

interface ICandidateModel extends ICandidate, Document {}

const candidateSchema: Schema = new Schema(
  {
    campaignId: { type: String, required: true },
    enterprise_id: { type: String, required: true },
    title: { type: String, required: true },
    medium: { type: String, required: true },
    content: { type: String, required: true },
    campaign_name: { type: String },
    sender_name: { type: String },
    email_from: { type: String },
    skills: { type: [String] },
    profile_titles: { type: String },
    educations: { type: String },
    universities: { type: String },
    locations: [
      {
        city: { type: String },
        state: { type: String },
        country: { type: String },
      },
    ],
    talent_pool: { type: String },
    exclusion: { type: Number },
    scheduled_time: { type: Date },
    status: { type: String },
    boundary: { type: String },
    created_by: { type: String },
    created_timestamp: { type: Date, default: Date.now },
    last_updated_by: { type: String },
    last_updated_timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const CandidateModel = mongoose.model<ICandidateModel>('Candidate', candidateSchema);

export default CandidateModel;
