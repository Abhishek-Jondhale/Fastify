export interface Certification {
    name: string;
    issuingOrganization: string;
    issueDate: Date;
    expirationDate?: Date;
    link?: string;
    certificateId?: string;
  }
  
  export interface Profile {
    id?: number;
    userId: number;
    profileTitle?: string;
    phone?: string;
    location?: string;
    zipCode?: string;
    experienceLevel?: 'entry' | 'junior' | 'mid' | 'senior';
    skills?: string[];
    certifications?: Certification[];
  }
  