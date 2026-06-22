'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const especialidades = [
  { nombre: 'Medicina General', emoji: '🩺', desc: 'Consulta médica general, diagnóstico y seguimiento continuo.' },
  { nombre: 'Medicina Interna', emoji: '🫁', desc: 'Diagnóstico y tratamiento de enfermedades del adulto.' },
  { nombre: 'Traumatología', emoji: '🦴', desc: 'Lesiones del sistema músculo-esquelético y rehabilitación.' },
  { nombre: 'Otorrinolaringología', emoji: '👂', desc: 'Enfermedades de oído, nariz y garganta.' },
  { nombre: 'Hematología', emoji: '🩸', desc: 'Trastornos de la sangre y enfermedades hematológicas.' },
  { nombre: 'Neurología', emoji: '🧠', desc: 'Sistema nervioso central y periférico.' },
  { nombre: 'Psicología', emoji: '💭', desc: 'Salud mental, terapia cognitiva y apoyo emocional.' },
  { nombre: 'Neumología', emoji: '🫁', desc: 'Enfermedades del aparato respiratorio y pulmones.' },
  { nombre: 'Nutrición', emoji: '🥗', desc: 'Planes alimenticios personalizados y control de peso.' },
  { nombre: 'Odontología', emoji: '🦷', desc: 'Salud dental integral: limpieza, ortodoncia y estética.' },
  { nombre: 'Odontopediatría', emoji: '👶', desc: 'Cuidado dental especializado para niños.' },
  { nombre: 'Pediatría', emoji: '🧒', desc: 'Atención integral de salud infantil y adolescente.' },
  { nombre: 'Obstetricia', emoji: '🤰', desc: 'Seguimiento de embarazo, parto y puerperio.' },
  { nombre: 'Endocrinología', emoji: '⚗️', desc: 'Diabetes, tiroides y trastornos hormonales.' },
  { nombre: 'Oftalmología', emoji: '👁️', desc: 'Salud visual y cirugías oculares.' },
  { nombre: 'Optometría', emoji: '🔭', desc: 'Evaluación visual y prescripción de lentes.' },
  { nombre: 'Cardiología', emoji: '❤️', desc: 'Enfermedades del corazón y sistema cardiovascular.' },
  { nombre: 'Gastroenterología', emoji: '🫃', desc: 'Enfermedades digestivas, hígado y páncreas.' },
  { nombre: 'Urología', emoji: '🫘', desc: 'Sistema urinario y salud masculina.' },
  { nombre: 'Dermatología', emoji: '🧴', desc: 'Enfermedades de la piel, cabello y uñas.' },
  { nombre: 'Ginecología', emoji: '🌸', desc: 'Salud femenina, control reproductivo y preventivo.' },
  { nombre: 'Cirugía Pediátrica', emoji: '🏥', desc: 'Procedimientos quirúrgicos en neonatos y niños.' },
  { nombre: 'Psicología Infantil', emoji: '🎈', desc: 'Desarrollo emocional y conductual en la infancia.' },
  { nombre: 'Inmunología', emoji: '🛡️', desc: 'Sistema inmune, alergias complejas y autoinmunidad.' },
  { nombre: 'Alergología', emoji: '🌿', desc: 'Diagnóstico y tratamiento de alergias e intolerancias.' },
  { nombre: 'Geriatría', emoji: '👴', desc: 'Atención integral al adulto mayor.' },
  { nombre: 'Nefrología', emoji: '🫘', desc: 'Enfermedades del riñón e insuficiencia renal.' },
  { nombre: 'Psiquiatría', emoji: '🧩', desc: 'Trastornos mentales, medicación y seguimiento.' },
  { nombre: 'Oncología', emoji: '🎗️', desc: 'Detección, diagnóstico y tratamiento del cáncer.' },
  { nombre: 'Cirugía General', emoji: '🔪', desc: 'Procedimientos quirúrgicos abdominales y de tejidos.' },
  { nombre: 'Cirugía Vascular', emoji: '🩹', desc: 'Enfermedades de venas, arterias y sistema linfático.' },
  { nombre: 'Cirugía Plástica', emoji: '✨', desc: 'Reconstrucción y corrección estética y funcional.' },
  { nombre: 'Cirugía Estética', emoji: '💎', desc: 'Procedimientos estéticos para mejorar la apariencia.' },
  { nombre: 'Neurocirugía', emoji: '🧬', desc: 'Cirugía del cerebro, columna y sistema nervioso.' },
  { nombre: 'Cosmetología', emoji: '💆', desc: 'Tratamientos faciales y cuidado de la piel.' },
  { nombre: 'Medicina Estética', emoji: '🌟', desc: 'Procedimientos no invasivos de rejuvenecimiento.' },
];

export default function EspecialidadesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? especialidades.filter((e) =>
        e.nombre.toLowerCase().includes(query.toLowerCase())
      )
    : especialidades;

  useEffect(() => {
    const run = () => {
      const anime = (window as any).anime;
      if (!anime) return;
      anime({
        targets: '.esp-hero-word',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 900,
        delay: anime.stagger(80),
        easing: 'easeOutExpo',
      });
    };
    if ((window as any).anime) run();
    else {
      const t = setInterval(() => { if ((window as any).anime) { clearInterval(t); run(); } }, 50);
      setTimeout(() => clearInterval(t), 3000);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const anime = (window as any).anime;
          if (!anime) return;
          anime({
            targets: '.esp-card',
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            delay: anime.stagger(40),
            easing: 'easeOutExpo',
          });
          observer.disconnect();
        });
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-60" />
        <div className="blob blob-reverse absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 translate-y-1/3 -translate-x-1/4 opacity-60" />
        <div className="container-custom relative z-10">
          <span className="section-tag">Especialidades Médicas</span>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-6 max-w-2xl">
            {['Nuestras', 'Especialidades'].map((w, i) => (
              <span key={i} className="block overflow-hidden">
                <span className={`esp-hero-word inline-block ${i === 1 ? 'text-cyan-600' : ''}`}
                  style={{ opacity: 0, transform: 'translateY(50px)' }}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mb-10">
            Conoce nuestras especialidades médicas y servicios. Más de 36 especialidades bajo un mismo techo.
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar especialidad..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-20">No se encontró ninguna especialidad.</p>
          )}
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {filtered.map((esp, i) => (
              <Link
                key={esp.nombre}
                href="/agendamiento"
                className="esp-card group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col gap-3"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{esp.emoji}</div>
                <h3 className="font-black text-slate-900 text-sm leading-tight group-hover:text-cyan-600 transition-colors">{esp.nombre}</h3>
                <p className="text-xs text-slate-400 leading-relaxed hidden group-hover:block">{esp.desc}</p>
                <span className="text-xs font-semibold text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                  Agendar →
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">{filtered.length} especialidades disponibles</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-black mb-4">¿Listo para agendar tu cita?</h2>
          <p className="text-cyan-100 mb-8 text-lg">Atención de lunes a viernes, 8h00 – 19h00</p>
          <Link
            href="/agendamiento"
            className="inline-block px-10 py-4 bg-white text-cyan-700 font-black rounded-full text-sm hover:bg-cyan-50 transition-all shadow-2xl shadow-cyan-700/30 hover:-translate-y-0.5">
            SOLICITAR CITA
          </Link>
        </div>
      </section>
    </>
  );
}
