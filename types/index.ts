export interface Plan {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  maxCoverage: number;
  copayPercent: number;
  hospitalNetwork: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface AgendamientoData {
  nombrePaciente: string;
  email: string;
  telefono: string;
  tipoConsulta: string;
  especialidad: string;
  fechaPreferida: string;
  horaPreferida: string;
  mensaje?: string;
}
