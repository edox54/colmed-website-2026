import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'COLDENT Odontología | Implantes, Ortodoncia, Estética Dental — Quito',
  description: 'COLDENT: clínica dental de Colmed en Quito con todas las especialidades — implantología, ortodoncia, endodoncia, periodoncia, cirugía maxilofacial, odontopediatría. Planes desde $45.',
  keywords: 'odontología quito, implantes dentales quito, ortodoncia quito, clínica dental quito, COLDENT, blanqueamiento dental quito, cirugía oral quito',
  openGraph: {
    title: 'COLDENT Odontología — Colmed Quito',
    description: 'Todas las especialidades dentales en Quito. Planes odontológicos desde $45. Edificio KENZEN, piso 8.',
    url: 'https://colmed.com.ec/odontologia',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/odontologia' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
