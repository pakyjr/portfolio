export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
}
