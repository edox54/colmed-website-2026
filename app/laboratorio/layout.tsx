import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laboratorio Clínico ISO 9001 | Colmed Centro Médico Quito',
  description: 'Laboratorio clínico certificado ISO 9001 en Quito. Hematología, bioquímica, endocrinología, oncología, uroanálisis y más. Resultados en 24 horas.',
  keywords: 'laboratorio clínico quito, exámenes de laboratorio quito, laboratorio iso 9001 ecuador, análisis clínicos quito, laboratorio colmed',
  openGraph: {
    title: 'Laboratorio Clínico ISO 9001 — Colmed Quito',
    description: 'Exámenes de laboratorio con certificación ISO 9001. Resultados en 24 horas. Edificio KENZEN, Quito.',
    url: 'https://colmed.com.ec/laboratorio',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/laboratorio' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
