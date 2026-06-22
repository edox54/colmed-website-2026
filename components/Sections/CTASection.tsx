'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) return;
        const anime = await (await import("@/lib/anime-helper")).waitForAnime();
        anime({ targets: '.cta-word', opacity: [0, 1], translateY: [30, 0], duration: 700, delay: anime.stagger(80), easing: 'easeOutExpo' });
        anime({ targets: '.cta-btn', opacity: [0, 1], scale: [0.9, 1], duration: 600, delay: anime.stagger(100, { start: 700 }), easing: 'easeOutExpo' });
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 -translate-y-1/2 translate-x-1/4" />
      <div className="blob blob-reverse absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom relative z-10 text-center">
        <span className="section-tag !text-cyan-400">Empieza Hoy</span>
        <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-8">
          {['Tu', 'salud', 'merece', 'lo', 'mejor'].map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mx-1">
              <span className={`cta-word inline-block ${w === 'mejor' ? 'text-cyan-400' : ''}`}
                style={{ opacity: 0, transform: 'translateY(30px)' }}>{w}</span>
            </span>
          ))}
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Únete a más de 7.000 familias ecuatorianas que ya confían en Colmedikal para su bienestar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/agendamiento"
            className="cta-btn px-10 py-4 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30 hover:-translate-y-0.5"
            style={{ opacity: 0 }}>
            Agendar mi primera consulta
          </Link>
          <Link href="/servicios"
            className="cta-btn px-10 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:border-white hover:text-white transition-all"
            style={{ opacity: 0 }}>
            Explorar servicios
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-slate-800">
          {[
            { icon: '📍', text: 'Av. América y Vozandes, Quito' },
            { icon: '📞', text: '+593 2 224 0666' },
            { icon: '🕐', text: 'Lun–Vie 8h00–19h00' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-slate-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
