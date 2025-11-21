export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: string;
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface PortfolioData {
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  profile: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}