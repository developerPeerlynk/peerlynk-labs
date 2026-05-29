export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessPhase {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "mobile" | "devops" | "apis";
  iconName: string;
  level: string; // e.g. "Advanced", "Expert"
}

export interface ProjectItem {
  id: string;
  name: string;
  clientType: string;
  category: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  duration: string;
  result: string;
  imageAlt: string;
  imageUrl?: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSeed: string; // For creating beautiful fallback avatar icon identifiers
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "services" | "pricing" | "tech" | "process";
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceNeeded: string;
  projectType: string;
  budgetRange: string;
  description: string;
  timestamp: string;
}
