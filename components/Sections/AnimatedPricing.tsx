'use client';

import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const featured = [
  {
    nombre: 'Chequeo Saludable',
    badge: 'Completo',
    precio: 170,
    cat: 'Chequeo General',
    incluye: ['Consulta medicina interna', 'Biometría hemática completa', 'Perfil lipídico, Ácido úrico, Urea, Creatinina', 'GGT, SGPT, SGOT, Glucosa', 'Historia clínica dental'],
    accent: '#0891b2',
    light: '#cffafe',
    text: '#0e7490',
  },
  {
    nombre: 'Chequeo Completo Kids',
    badge: 'Pediatría',
    precio: 160,
    cat: 'Niños',
    popular: true,
    incluye: ['Consulta pediatría', 'Biometría hemática completa', 'Vitamina B12, GGT, SGPT, SGOT', 'Triglicéridos, Colesterol, LDL, HDL', 'Glucosa, Creatinina, Urea, EMO'],
    accent: '#0284c7',
    light: '#e0f2fe',
    text: '#0369a1',
  },
  {
    nombre: 'Plan Mujer Segura Oro',
    badge: 'Mujer',
    precio: 180,
    cat: 'Salud Mujer',
    incluye: ['Consulta medicina interna', 'Papanicolaou + toma de muestra', 'Creatinina, Glucosa, Urea, EMO, VDRL', 'Detartraje dental 2 arcadas'],
    accent: '#db2777',
    light: '#fce7f3',
    text: '#be185d',
  },
  {
    nombre: 'Cuida tu Corazón',
    badge: 'Cardiología',
    precio: 160,
    cat: 'Cardiología',
    incluye: ['Consulta cardiológica', 'Ecocardiografía transtorácica con Doppler', 'Grabación incluida'],
    accent: '#dc2626',
    light: '#fee2e2',
    text: '#b91c1c',
  },
];

export default function AnimatedPricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) return;
          const anime = await (await import('@/lib/anime-helper')).waitForAnime();
          anime({ targets: '.price-word', opacity: [0, 1], translateY: [35, 0], duration: 700, delay: anime.stagger(80), easing: 'easeOutExpo' });
          anime({ targets: '.plan-card', opacity: [0, 1], scale: [0.88, 1], duration: 900, delay: anime.stagger(100, { start: 250 }), easing: 'easeOutExpo' });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-slate-50">
      <div className="container-custom max-w-page">
        <div className="text-center mb-16">
          <span className="section-tag">36 planes disponibles</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tight mb-4">
            {['Planes', 'preventivos', 'para', 'toda', 'la', 'familia'].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mx-1">
                <span className={`price-word inline-block ${i >= 4 ? 'text-cyan-600' : ''}`}
                  style={{ opacity: 0, transform: 'translateY(35px)' }}>{w}</span>
              </span>
            ))}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Tratamientos combinados al mejor precio. Atención presencial, especialidades reales, sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((plan) => (
            <div key={plan.nombre}
              className={`plan-card relative bg-white rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-offset-2' : 'border-slate-200'
              }`}
              style={{
                opacity: 0,
                transform: 'scale(0.88)',
                borderColor: plan.popular ? plan.accent : undefined,
              }}>
              {/* Color stripe */}
              <div className="h-1.5" style={{ background: plan.accent }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                <span className="self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-pill mb-3 text-white"
                  style={{ background: plan.accent }}>
                  {plan.badge}
                </span>

                {plan.popular && (
                  <span className="self-start text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: plan.accent }}>
                    ⭐ Más solicitado
                  </span>
                )}

                <h3 className="text-base font-black text-slate-900 leading-snug mb-3">{plan.nombre}</h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl font-black" style={{ color: plan.accent }}>${plan.precio}</span>
                  <span className="text-slate-400 text-sm">/plan</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.incluye.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: plan.light, color: plan.text }}>
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="block text-center py-2.5 px-4 rounded-2xl font-bold text-xs transition-all duration-200 hover:opacity-90 text-white"
                  style={{ background: plan.accent }}>
                  Adquirir plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/planes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-bold rounded-pill text-sm hover:bg-cyan-700 transition-all shadow-hairline hover:shadow-lift">
            Ver los 36 planes <ArrowRight size={15} />
          </Link>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 font-semibold rounded-pill text-sm hover:border-cyan-300 hover:text-cyan-600 transition-all">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
