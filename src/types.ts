export interface Project {
  title: string;
  tech: string[];
  description: string[];
  github?: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Achievement {
  title: string;
  event: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
