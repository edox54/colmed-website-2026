'use client';

import { useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window { anime: any; }
}

export default function AdvancedHero() {
  useEffect(() => {
    const run = () => {
      const anime = window.anime;
      if (!anime) return;

      // Word-by-word reveal
      anime({ targets: '.hero-word', translateY: [40, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(90), easing: 'easeOutExpo' });

      // Sub + CTAs
      anime({ targets: ['.hero-sub', '.hero-actions'], opacity: [0, 1], translateY: [24, 0], duration: 800, delay: anime.stagger(150, { start: 700 }), easing: 'easeOutCubic' });

      // Stats
      anime({ targets: '.hero-stat-block', opacity: [0, 1], translateY: [20, 0], duration: 700, delay: anime.stagger(80, { start: 1200 }), easing: 'easeOutCubic' });

      // Blob morphing
      anime({ targets: '.hero-blob-1', borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '50% 60% 30% 60% / 30% 40% 70% 50%', '60% 40% 30% 70% / 60% 30% 70% 40%'], duration: 8000, loop: true, easing: 'linear' });
      anime({ targets: '.hero-blob-2', borderRadius: ['40% 60% 60% 40% / 60% 30% 60% 40%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '40% 60% 60% 40% / 60% 30% 60% 40%'], duration: 10000, loop: true, easing: 'linear' });

      // SVG line draw
      const line = document.querySelector('.hero-svg-line');
      if (line) anime({ targets: line, strokeDashoffset: [anime.setDashoffset, 0], duration: 2500, delay: 600, easing: 'easeInOutSine' });

      // Stat counters
      document.querySelectorAll('.stat-count').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        anime({ targets: el, innerHTML: [0, target], round: 1, duration: 2000, delay: 1400, easing: 'easeOutExpo' });
      });
    };

    // Wait for anime.js CDN script to load
    if (window.anime) {
      run();
    } else {
      const check = setInterval(() => {
        if (window.anime) { clearInterval(check); run(); }
      }, 50);
      setTimeout(() => clearInterval(check), 3000);
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden pt-28 pb-12">
      <div className="hero-blob-1 absolute top-10 right-[5%] w-[500px] h-[500px] bg-cyan-100/70 -z-0 pointer-events-none" />
      <div className="hero-blob-2 absolute bottom-0 left-[3%] w-[360px] h-[360px] bg-teal-100/60 -z-0 pointer-events-none" />

      <svg className="absolute top-28 left-0 w-full h-24 opacity-10 -z-0" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path className="hero-svg-line" d="M0 40 C240 10 480 70 720 40 C960 10 1200 70 1440 40"
          stroke="#0891b2" strokeWidth="2.5" fill="none" strokeDasharray="2000" strokeDashoffset="2000" />
      </svg>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="section-tag">Centro Médico · Quito, Ecuador</span>

            <h1 className="font-black leading-[0.92] text-slate-900 tracking-tight mb-6"
                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
              {['Salud', 'integral'].map((w, i) => (
                <span key={i} className="hero-word inline-block mr-[0.2em]"
                  style={{ opacity: 0, transform: 'translateY(40px)', color: w === 'integral' ? '#0891b2' : undefined }}>
                  {w}
                </span>
              ))}
              <br />
              {['para', 'toda', 'tu'].map((w, i) => (
                <span key={i} className="hero-word inline-block mr-[0.2em]"
                  style={{ opacity: 0, transform: 'translateY(40px)' }}>{w}</span>
              ))}
              <br />
              <span className="hero-word inline-block" style={{ opacity: 0, transform: 'translateY(40px)' }}>familia</span>
            </h1>

            <p className="hero-sub text-lg text-slate-500 leading-relaxed max-w-md mb-10" style={{ opacity: 0 }}>
              10 años comprometidos con tu bienestar. Consultas médicas, especialidades, laboratorio, imágenes y odontología.
            </p>

            <div className="hero-actions flex flex-wrap gap-4" style={{ opacity: 0 }}>
              <Link href="/agendamiento"
                className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100 hover:shadow-cyan-200 hover:-translate-y-0.5">
                Agendar Consulta
              </Link>
              <Link href="/servicios"
                className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-600 transition-all">
                Ver Servicios
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-slate-100">
              {[{ value: 10, suffix: '+', label: 'Años de experiencia' }, { value: 7000, suffix: '+', label: 'Pacientes satisfechos' }, { value: 100, suffix: '%', label: 'Calidad garantizada' }].map((s, i) => (
                <div key={i} className="hero-stat-block" style={{ opacity: 0 }}>
                  <p className="text-3xl font-black text-slate-900">
                    <span className="stat-count" data-target={s.value}>0</span>
                    <span className="text-cyan-500">{s.suffix}</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating cards */}
          <div className="relative h-[520px] hidden lg:block">
            <div className="float absolute left-6 top-4 w-56 bg-white rounded-3xl shadow-2xl p-6 z-20">
              <div className="w-10 h-10 bg-cyan-50 rounded-2xl flex items-center justify-center mb-3 text-2xl">🫀</div>
              <p className="font-bold text-slate-900">Cardiología</p>
              <p className="text-xs text-slate-400 mt-1">Especialistas certificados</p>
            </div>
            <div className="float-slow absolute right-0 top-12 w-48 bg-cyan-600 text-white rounded-3xl shadow-2xl p-6 z-20">
              <p className="text-3xl font-black mb-1">+7k</p>
              <p className="text-sm opacity-80">Pacientes satisfechos</p>
            </div>
            <div className="float-alt absolute left-14 bottom-16 w-52 bg-slate-900 text-white rounded-3xl shadow-2xl p-6 z-20">
              <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Próxima cita</p>
              <p className="font-bold">Medicina General</p>
              <p className="text-xs text-slate-400 mt-1">Disponible hoy</p>
            </div>
            <div className="float absolute right-6 bottom-8 w-44 bg-teal-50 border border-teal-100 rounded-3xl p-5 z-20">
              <div className="flex gap-0.5 mb-2 text-sm">⭐⭐⭐⭐⭐</div>
              <p className="text-xs font-bold text-slate-900">Excelente atención</p>
              <p className="text-xs text-slate-400">— María R.</p>
            </div>
            <div className="absolute inset-x-14 top-20 bottom-20 bg-gradient-to-br from-cyan-50 to-teal-100 rounded-[3rem] z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-3 text-4xl">⚕️</div>
                <p className="text-sm font-bold text-slate-700">COLMED</p>
                <p className="text-xs text-slate-400">Centro Integral</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 border-y border-slate-100 py-3 overflow-hidden">
        <div className="marquee-track text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {Array(4).fill(['Medicina General', '·', 'Pediatría', '·', 'Ginecología', '·', 'Odontología', '·', 'Laboratorio', '·', 'Imágenes', '·', 'Quirófano', '·', 'Urgencias', '·']).flat().map((item, i) => (
            <span key={i} className="mx-6 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
