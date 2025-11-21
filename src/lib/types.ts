export interface Skill {
  id: string;
  school: string;
  location: string;
  startDate: string;
  field: string;
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