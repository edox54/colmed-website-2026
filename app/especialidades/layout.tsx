import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Especialidades Médicas | Colmed Centro Médico Quito',
  description: 'Más de 15 especialidades médicas en Colmed Quito: cardiología, pediatría, ginecología, traumatología, neurología, dermatología y más. Agenda tu cita hoy.',
  keywords: 'especialidades médicas quito, médicos especialistas quito, cardiología quito, pediatría quito, ginecología quito, colmed especialidades',
  openGraph: {
    title: 'Especialidades Médicas — Colmed Quito',
    description: 'Atención especializada en más de 15 especialidades médicas. Edificio KENZEN, Quito.',
    url: 'https://colmed.com.ec/especialidades',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/especialidades' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
