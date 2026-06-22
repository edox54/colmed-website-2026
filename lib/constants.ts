import { Plan, Testimonial, ServiceDetail } from '@/types';

export const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Plan Colmedikal Básico',
    tagline: 'Cobertura médica esencial ambulatoria y hospitalaria.',
    basePrice: 8.0,
    maxCoverage: 2000,
    copayPercent: 0,
    hospitalNetwork: 'Red Colmedikal',
    features: [
      'Consultas y Especialidades con 100% de cobertura (Sin copago)',
      'Cobertura en Cuidados Intensivos hasta $2000',
      'Honorarios médicos cubiertos hasta $2000',
      'Exámenes de laboratorio e imagen elementales hasta $100',
      'Muerte por accidente y gastos de sepelio',
      'Ambulancia terrestre por accidente',
    ],
    color: 'emerald',
  },
  {
    id: 'esencial',
    name: 'Plan Colmedikal Esencial',
    tagline: 'Protección equilibrada y accesible para mayor tranquilidad.',
    basePrice: 12.0,
    maxCoverage: 3000,
    copayPercent: 0,
    hospitalNetwork: 'Red Colmedikal',
    features: [
      'Consultas y Especialidades con 100% de cobertura (Sin copago)',
      'Cobertura en Cuidados Intensivos hasta $3000',
      'Honorarios médicos cubiertos hasta $3000',
      'Exámenes de laboratorio e imagen elementales hasta $100',
      'Bono de maternidad estipulado hasta $500',
      'Muerte por accidente hasta $2500 y sepelio hasta $500',
    ],
    color: 'teal',
  },
  {
    id: 'premium',
    name: 'Plan Colmedikal Premium',
    tagline: 'Máxima cobertura para ti y tu familia en toda la red.',
    basePrice: 22.0,
    maxCoverage: 5000,
    copayPercent: 0,
    hospitalNetwork: 'Red Colmedikal',
    features: [
      'Consultas y Especialidades sin límite con 100% de cobertura',
      'Cobertura en Cuidados Intensivos hasta $5000',
      'Honorarios médicos sin límite',
      'Exámenes de laboratorio e imagen sin límite',
      'Bono de maternidad hasta $1000',
      'Muerte por accidente hasta $5000',
    ],
    color: 'blue',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Valentina Gómez',
    role: 'Profesional de Salud',
    content:
      'Colmedikal ha sido fundamental para mi familia. La atención médica es excelente y el proceso de afiliación muy simple. Recomiendo ampliamente sus servicios.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Elena',
    role: 'Empresario',
    content:
      'Como empleador, Colmedikal nos ha permitido ofrecer a nuestros empleados un excelente plan de salud. El servicio al cliente es responsivo y profesional.',
    rating: 5,
  },
  {
    id: '3',
    name: 'María Rodríguez',
    role: 'Madre de Familia',
    content:
      'Fue una decisión acertada elegir Colmedikal para mi familia. Los planes son accesibles y la cobertura es muy completa. Excelente servicio.',
    rating: 5,
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'consultas',
    title: 'Consultas Médicas',
    description:
      'Acceso a una amplia red de médicos especializados disponibles en horarios convenientes para ti.',
    features: [
      'Médicos de diferentes especialidades',
      'Disponibilidad en horarios extendidos',
      'Teleconsultas disponibles',
      'Recetas electrónicas',
    ],
  },
  {
    id: 'emergencias',
    title: 'Servicio de Emergencias',
    description:
      'Atención inmediata 24/7 para situaciones de emergencia médica con equipos especializados.',
    features: [
      'Atención 24 horas',
      'Ambulancia incluida',
      'Médicos de emergencia certificados',
      'Protocolos de atención rápida',
    ],
  },
  {
    id: 'hospitalizacion',
    title: 'Hospitalización',
    description:
      'Cobertura completa de hospitalización en clínicas y hospitales de la red Colmedikal.',
    features: [
      'Cuartos privados disponibles',
      'Cirugías cubiertas',
      'Recuperación postoperatoria',
      'Servicio de enfermería',
    ],
  },
  {
    id: 'laboratorio',
    title: 'Exámenes de Laboratorio',
    description:
      'Acceso a laboratorios equipados con tecnología de punta para análisis médicos precisos.',
    features: [
      'Pruebas de diagnóstico',
      'Análisis de sangre',
      'Estudios especializados',
      'Resultados rápidos',
    ],
  },
  {
    id: 'farmacia',
    title: 'Farmacia Beneficiada',
    description:
      'Red de farmacias afiliadas con descuentos especiales para nuestros afiliados.',
    features: [
      'Descuentos en medicamentos',
      'Farmacéuticos disponibles',
      'Medicinas genéricas y de marca',
      'Entrega a domicilio',
    ],
  },
  {
    id: 'dental',
    title: 'Servicios Dentales',
    description:
      'Planes dentales especializados con cobertura en tratamientos y limpiezas.',
    features: [
      'Limpiezas regulares',
      'Tratamientos restaurativos',
      'Ortodoncia',
      'Emergencias dentales',
    ],
  },
];

export const SITE_CONFIG = {
  name: 'Colmed Centro Médico',
  description: 'Centro de salud integral en Quito — consultas, especialidades, laboratorio, odontología y planes preventivos',
  url: 'https://colmed.com.ec',
  locale: 'es-EC',
  phone: '+593 2 224 0666',
  email: 'info@colmed.com.ec',
  address: 'Av. América y Vozandes, Edificio KENZEN piso 8, Quito',
};

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Directorio', href: '/directorio' },
  { name: 'Trámites', href: '/tramites' },
  { name: 'Agendamiento', href: '/agendamiento' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contacto', href: '/contacto' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/colmedikal' },
  { name: 'Instagram', url: 'https://instagram.com/colmedikal' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/colmedikal' },
  { name: 'Twitter', url: 'https://twitter.com/colmedikal' },
];
