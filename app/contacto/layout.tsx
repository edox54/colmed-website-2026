import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Colmed Centro Médico Quito',
  description: 'Contáctanos en Colmed Centro Médico. Av. América y Vozandes, Edificio KENZEN piso 8, Quito. Tel: +593 2 224 0666. Lunes a viernes 8h00–19h00.',
  keywords: 'contacto colmed quito, teléfono colmed, dirección colmed quito, centro médico av. americana quito',
  openGraph: {
    title: 'Contacto — Colmed Centro Médico Quito',
    description: 'Edificio KENZEN piso 8, Av. América y Vozandes. Tel +593 2 224 0666. Lun–Vie 8h00–19h00.',
    url: 'https://colmed.com.ec/contacto',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/contacto' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
