import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Colmedikal',
  description: 'Respuestas a las preguntas más frecuentes',
};

export default function FAQsPage() {
  const faqs = [
    { q: '¿Cuál es el proceso de afiliación?', a: 'El proceso es simple: completa el formulario, selecciona tu plan y realiza el pago.' },
    { q: '¿Qué cubre el plan básico?', a: 'Consultas, especialidades, hospitalizacion y exámenes básicos.' },
    { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes cambiar de plan en cualquier momento mediante trámites online.' },
    { q: '¿Hay periodo de espera?', a: 'No, la cobertura inicia desde el momento de la afiliación.' },
    { q: '¿Cómo agendo una cita?', a: 'Puedes agendar citas desde nuestra plataforma online las 24 horas.' },
    { q: '¿Qué debo hacer en caso de emergencia?', a: 'Llama a nuestro número de emergencias disponible 24/7.' },
  ];

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl opacity-90">Respuestas a tus dudas comunes</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
