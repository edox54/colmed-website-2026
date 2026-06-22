'use client';
import { useEffect, useRef } from 'react';
import { waitForAnime } from '@/lib/anime-helper';

const stats = [
  { value: 10, suffix: '+', label: 'Años en el mercado' },
  { value: 7000, suffix: '+', label: 'Clientes satisfechos' },
  { value: 25, suffix: '+', label: 'Especialidades' },
  { value: 100, suffix: '%', label: 'Calidad y eficiencia' },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) return;
        try {
          const anime = await waitForAnime();
          entry.target.querySelectorAll('.stat-num').forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            anime({ targets: el, innerHTML: [0, target], round: 1, duration: 2200, easing: 'easeOutExpo' });
          });
          anime({ targets: '.stat-item', opacity: [0, 1], translateY: [30, 0], delay: anime.stagger(100), duration: 700, easing: 'easeOutCubic' });
        } catch {}
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white border-y border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="stat-item text-center" style={{ opacity: 0, transform: 'translateY(30px)' }}>
              <p className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                <span className="stat-num" data-target={s.value}>0</span>
                <span className="text-cyan-500">{s.suffix}</span>
              </p>
              <p className="text-sm text-slate-400 mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
