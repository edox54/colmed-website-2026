import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planes Preventivos de Salud | Colmed Centro Médico Quito',
  description: 'Explora los 36 planes preventivos de Colmed: medicina general, pediatría, ginecología, odontología, nutrición y más. Precios accesibles desde $12. Quito, Ecuador.',
  keywords: 'planes preventivos salud quito, plan médico ecuador, planes colmed, seguro médico familiar quito, planes preventivos ecuador',
  openGraph: {
    title: 'Planes Preventivos de Salud — Colmed Quito',
    description: '36 planes preventivos para toda la familia. Desde $12/mes. Centro médico en Quito, Ecuador.',
    url: 'https://colmed.com.ec/planes',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/planes' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
