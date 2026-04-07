export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  clientCode?: string;
  serverCode?: string;
  featured?: boolean;
  year: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level?: number; // 1-5
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "languages";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  socials: SocialLink[];
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  roles: string[];
  bio: string;
  aboutLong: string;
  avatar: string;
  resumeUrl: string;
  yearsExp: number;
  projectsDone: number;
  clients: number;
}
