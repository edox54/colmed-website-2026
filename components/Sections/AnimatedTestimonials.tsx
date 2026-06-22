'use client';
import { useRef, useState } from 'react';

const testimonials = [
  { quote: 'La atención en Colmed es excepcional. Los médicos son muy profesionales y el proceso de agendamiento es súper fácil.', name: 'Valentina G.', role: 'Afiliada desde 2021' },
  { quote: 'Llevamos 3 años con el plan familiar. Ha sido una de las mejores decisiones para proteger la salud de mis hijos.', name: 'Carlos E.', role: 'Plan Premium' },
  { quote: 'El laboratorio entrega resultados en pocas horas. Muy eficientes y el personal siempre amable.', name: 'María R.', role: 'Paciente habitual' },
];

export default function AnimatedTestimonials() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const transition = (next: number) => {
    if (!cardRef.current) return;
    const anime = (window as any).anime;
    if (!anime) { setActive(next); return; }
    anime({
      targets: cardRef.current, opacity: [1, 0], translateX: [0, -40], duration: 350, easing: 'easeInQuad',
      complete: () => {
        setActive(next);
        anime({ targets: cardRef.current, opacity: [0, 1], translateX: [40, 0], duration: 500, easing: 'easeOutExpo' });
      },
    });
  };

  const t = testimonials[active];

  return (
    <section className="py-28 bg-white">
      <div className="container-custom max-w-4xl">
        <span className="section-tag">Testimonios</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 leading-tight">
          Lo que dicen<br /><span className="text-cyan-600">nuestros pacientes</span>
        </h2>

        <div ref={cardRef} className="bg-slate-50 rounded-3xl p-10 md:p-14 border border-slate-100">
          <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10 italic">"{t.quote}"</p>
          <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-black text-lg">{t.name[0]}</div>
            <div><p className="font-bold text-slate-900">{t.name}</p><p className="text-sm text-slate-400">{t.role}</p></div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => transition(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2 bg-cyan-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'}`} />
          ))}
          <div className="ml-auto flex gap-3">
            <button onClick={() => transition((active - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-cyan-500 hover:text-cyan-500 transition-all text-lg">←</button>
            <button onClick={() => transition((active + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-cyan-600 transition-all text-lg">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
