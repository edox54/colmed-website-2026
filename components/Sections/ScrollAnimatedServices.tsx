'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  { emoji: '🫀', title: 'Medicina General', desc: 'Consultas con médicos de familia, diagnóstico preventivo y seguimiento continuo.' },
  { emoji: '🦷', title: 'Odontología', desc: 'Tratamientos dentales completos: limpieza, ortodoncia, implantes y estética dental.' },
  { emoji: '🔬', title: 'Laboratorio', desc: 'Análisis clínicos de alta precisión con resultados rápidos y tecnología de punta.' },
  { emoji: '📡', title: 'Imágenes', desc: 'Radiografías, ecografías, tomografías y resonancias en nuestra red.' },
  { emoji: '🏥', title: 'Quirófano', desc: 'Procedimientos quirúrgicos con equipos certificados y recuperación incluida.' },
  { emoji: '👶', title: 'Pediatría', desc: 'Atención integral para niños desde el nacimiento hasta la adolescencia.' },
];

export default function ScrollAnimatedServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) return;
          const anime = await (await import("@/lib/anime-helper")).waitForAnime();

          anime({
            targets: '.svc-card',
            opacity: [0, 1],
            translateY: [60, 0],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
          });

          anime({
            targets: '.svc-word',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            delay: anime.stagger(70),
            easing: 'easeOutExpo',
          });

          // Hover tilt
          document.querySelectorAll('.svc-card').forEach((card) => {
            card.addEventListener('mousemove', async (e) => {
              const a = (window as any).anime; if (!a) return;
              const rect = (card as HTMLElement).getBoundingClientRect();
              const mx = ((e as MouseEvent).clientX - rect.left) / rect.width - 0.5;
              const my = ((e as MouseEvent).clientY - rect.top) / rect.height - 0.5;
              a({ targets: card, rotateY: mx * 10, rotateX: -my * 10, duration: 200, easing: 'easeOutQuad' });
            });
            card.addEventListener('mouseleave', async () => {
              const a = (window as any).anime; if (!a) return;
              a({ targets: card, rotateY: 0, rotateX: 0, duration: 600, easing: 'easeOutElastic(1,.6)' });
            });
          });

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="section-tag">Servicios Médicos</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tight">
              {['Todo', 'lo', 'que', 'necesitas'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-2">
                  <span className="svc-word inline-block" style={{ opacity: 0, transform: 'translateY(30px)' }}>{w}</span>
                </span>
              ))}
              <br />
              {['en', 'un', 'solo', 'lugar'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-2">
                  <span className="svc-word inline-block text-cyan-600" style={{ opacity: 0, transform: 'translateY(30px)' }}>{w}</span>
                </span>
              ))}
            </h2>
          </div>
          <Link href="/servicios"
            className="flex-shrink-0 text-sm font-semibold text-cyan-600 hover:text-cyan-700 border-b-2 border-cyan-200 hover:border-cyan-600 pb-1 transition-all">
            Ver todos los servicios →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {services.map((s, i) => (
            <Link key={i} href="/servicios"
              className="svc-card group bg-slate-50 hover:bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-slate-200"
              style={{ opacity: 0, transform: 'translateY(60px)' }}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.emoji}</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <span className="text-cyan-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saber más →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
