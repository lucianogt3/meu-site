
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  status?: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  heroPitch: string;
  about: string[];
  focusAreas: string[];
  email: string;
  phone: string;
  phoneSecondary?: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  experiences: Experience[];
  education: Education[];
  courses: string[];
  healthSkills: string[];
  gestaoSkills: string[];
  techSkills: string[];
  projects: Project[];
}
