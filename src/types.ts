export interface Job {
  id: number;
  name: string;
}

export interface Applicant {
  id: number;
  name: string;
  email: string;
  website: string;
  cover_letter: string;
  job_id: number;
}

export interface Skill {
  id: number;
  name: string;
  applicant_id: number;
}
