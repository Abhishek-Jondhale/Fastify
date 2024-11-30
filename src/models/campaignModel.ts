import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'campaign_templates',
  timestamps: true,
})
export class CampaignTemplate extends Model<CampaignTemplate> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  campaignId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  enterpriseId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
  })
  medium!: string;

  @Column({
    type: DataType.STRING,
  })
  content!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  campaignName!: string;

  @Column({
    type: DataType.STRING,
  })
  senderName!: string;

  @Column({
    type: DataType.STRING,
  })
  emailFrom!: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  skills!: string[];

  @Column({
    type: DataType.STRING,
  })
  profileTitles!: string;

  @Column({
    type: DataType.STRING,
  })
  educations!: string;

  @Column({
    type: DataType.STRING,
  })
  universities!: string;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  locations!: object[];

  @Column({
    type: DataType.STRING,
  })
  talentPool!: string;

  @Column({
    type: DataType.INTEGER,
  })
  exclusion!: number;

  @Column({
    type: DataType.DATE,
  })
  scheduledTime!: Date;

  @Column({
    type: DataType.STRING,
  })
  status!: string;

  @Column({
    type: DataType.STRING,
  })
  boundary!: string;

  @Column({
    type: DataType.STRING,
  })
  createdBy!: string;

  @Column({
    type: DataType.DATE,
  })
  createdTimestamp!: Date;

  @Column({
    type: DataType.STRING,
  })
  lastUpdatedBy!: string;

  @Column({
    type: DataType.DATE,
  })
  lastUpdatedTimestamp!: Date;
}
