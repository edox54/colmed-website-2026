import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Cita Médica | Colmed Centro Médico Quito',
  description: 'Agenda tu cita médica en Colmed Quito fácil y rápido. Medicina general, especialidades, odontología, laboratorio. Respuesta inmediata por WhatsApp.',
  keywords: 'agendar cita médica quito, reservar consulta médica quito, cita médica colmed, turno médico quito',
  openGraph: {
    title: 'Agendar Cita — Colmed Centro Médico Quito',
    description: 'Reserva tu consulta médica en Colmed. Más de 15 especialidades. Confirmación inmediata.',
    url: 'https://colmed.com.ec/agendamiento',
    type: 'website',
  },
  alternates: { canonical: 'https://colmed.com.ec/agendamiento' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
