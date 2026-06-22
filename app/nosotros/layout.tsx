import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos | Colmed Centro Médico Quito',
  description: 'Conoce Colmed Centro Médico: 10 años de experiencia en salud integral en Quito. Misión, visión, valores y equipo médico. Av. América y Vozandes, Edificio KENZEN.',
  keywords: 'colmed centro médico quito, clínica médica quito, historia colmed, quiénes somos colmed, centro médico quito norte',
  openGraph: {
    title: 'Quiénes Somos — Colmed Centro Médico',
    description: '10 años al cuidado de tu salud en Quito. Centro médico integral en el Edificio KENZEN.',
    url: 'https://colmed.com.ec/nosotros',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/nosotros' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
