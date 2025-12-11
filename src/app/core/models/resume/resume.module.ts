export interface ResumeLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  period?: string;
  linkLabel?: string;
  linkHref?: string;
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability?: string;
}

export interface Resume {
  name: string;
  role: string;
  location: string;
  summary: string;
  links: ResumeLink[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  contact: ContactInfo;
}
