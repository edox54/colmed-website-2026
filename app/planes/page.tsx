'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Phone, MessageCircle,
  Shield, Brain, Stethoscope, Baby, Heart, Microscope,
  Zap, Wind, Droplets, Bone, Activity, FlaskConical, Star,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

type Plan = {
  id: number;
  nombre: string;
  precio: number;
  cat: string;
  badge?: string;
  incluye: string[];
};

const CATS: { id: string; label: string; color: string; bg: string; icon: React.ReactNode }[] = [
  { id: 'todos',         label: 'Todos',             color: '#0891b2', bg: '#cffafe', icon: <Activity size={15}/> },
  { id: 'mujer',         label: 'Salud Mujer',       color: '#db2777', bg: '#fce7f3', icon: <Heart size={15}/> },
  { id: 'ninos',         label: 'Pediatría',         color: '#0284c7', bg: '#e0f2fe', icon: <Baby size={15}/> },
  { id: 'gastro',        label: 'Gastro',            color: '#d97706', bg: '#fef3c7', icon: <FlaskConical size={15}/> },
  { id: 'cardio',        label: 'Cardiología',       color: '#dc2626', bg: '#fee2e2', icon: <Heart size={15}/> },
  { id: 'mental',        label: 'Salud Mental',      color: '#7c3aed', bg: '#ede9fe', icon: <Brain size={15}/> },
  { id: 'diabetes',      label: 'Diabetes',          color: '#0891b2', bg: '#e0f7fa', icon: <Droplets size={15}/> },
  { id: 'tiroides',      label: 'Tiroides',          color: '#0d9488', bg: '#ccfbf1', icon: <Zap size={15}/> },
  { id: 'respiratorio',  label: 'Respiratorio',      color: '#0369a1', bg: '#e0f2fe', icon: <Wind size={15}/> },
  { id: 'dermato',       label: 'Dermatología',      color: '#e11d48', bg: '#ffe4e6', icon: <Stethoscope size={15}/> },
  { id: 'laboratorio',   label: 'Laboratorio',       color: '#4f46e5', bg: '#eef2ff', icon: <Microscope size={15}/> },
  { id: 'geriatria',     label: 'Geriatría',         color: '#92400e', bg: '#fef3c7', icon: <Shield size={15}/> },
  { id: 'vitaminac',     label: 'Vitamina C',        color: '#f59e0b', bg: '#fef9c3', icon: <Zap size={15}/> },
  { id: 'urologia',      label: 'Urología',          color: '#1d4ed8', bg: '#dbeafe', icon: <Droplets size={15}/> },
  { id: 'traumato',      label: 'Traumatología',     color: '#64748b', bg: '#f1f5f9', icon: <Bone size={15}/> },
  { id: 'general',       label: 'Chequeo Gral',      color: '#065f46', bg: '#d1fae5', icon: <Activity size={15}/> },
  { id: 'postcovid',     label: 'Post Covid',        color: '#374151', bg: '#f3f4f6', icon: <Shield size={15}/> },
];

const planes: Plan[] = [
  // MENTAL
  { id: 1,  cat: 'mental',       badge: 'Online',      nombre: 'Consulta Psicológica ×3',                precio: 110,
    incluye: ['3 consultas psicológicas online'] },

  // GASTRO
  { id: 2,  cat: 'gastro',       badge: 'Presencial',  nombre: 'Detección de Gastritis Plus',            precio: 100,
    incluye: ['Consulta gastroenterología','Coproparasitario concentración','Sangre oculta','H. Pylori IGM / IGG / heces'] },
  { id: 3,  cat: 'gastro',                             nombre: 'Chequeo Gastrointestinal',               precio: 100,
    incluye: ['Consulta gastroenterología','Sangre oculta','Coproparasitario simple','H. Pylori en heces'] },
  { id: 4,  cat: 'gastro',       badge: 'Sin consulta',nombre: 'Detección de Gastritis',                 precio: 70,
    incluye: ['Coproparasitario concentración','Sangre oculta','H. Pylori IGM / IGG / heces'] },

  // DERMATO
  { id: 5,  cat: 'dermato',                            nombre: 'Control Acné',                           precio: 115,
    incluye: ['2 consultas dermatología','SGPT (ALT)','SGOT (AST)','Glucosa en ayunas'] },

  // NIÑOS
  { id: 6,  cat: 'ninos',                              nombre: 'Niños Saludables + Laboratorio',         precio: 100,
    incluye: ['Screen agudeza visual bilateral','Coproparasitario simple','Biometría hemática','Anticuerpos SARS-CoV-2','Creatinina, Urea, Glucosa, EMO'] },
  { id: 7,  cat: 'ninos',        badge: 'Completo',    nombre: 'Chequeo Completo Kids',                  precio: 160,
    incluye: ['Consulta pediatría','Biometría hemática completa','Vitamina B12, GGT, SGPT, SGOT','Triglicéridos, Colesterol, LDL, HDL','Ácido Úrico, Creatinina, Urea, Glucosa, EMO'] },
  { id: 8,  cat: 'ninos',                              nombre: 'Creciendo Sanos / Kids',                 precio: 105,
    incluye: ['Consulta pediatría','Screen agudeza visual bilateral','Coproparasitario simple','Biometría hemática, EMO'] },
  { id: 9,  cat: 'ninos',        badge: '6to mes',     nombre: 'Control Niño Sano',                      precio: 50,
    incluye: ['Consulta pediatría','2 × Vitamina A 50.000UI'] },

  // MUJER
  { id: 10, cat: 'mujer',                              nombre: 'Chequeo Mujer Saludable',                precio: 105,
    incluye: ['2 consultas ginecología','Papanicolaou + toma de muestra'] },
  { id: 11, cat: 'mujer',        badge: 'Teen',        nombre: 'Chequeo Ginecológico Teen',              precio: 110,
    incluye: ['2 consultas ginecología','Cultivo de orina','Cultivo de secreción vaginal','EMO'] },
  { id: 12, cat: 'mujer',                              nombre: 'Control Ginecológico Básico',            precio: 120,
    incluye: ['Consulta ginecología','Ecografía transvaginal','Papanicolaou + toma de muestra'] },
  { id: 13, cat: 'mujer',        badge: 'Plata',       nombre: 'Plan Mujer Segura Plata',               precio: 160,
    incluye: ['Consulta medicina interna','Creatinina, Glucosa, Urea, EMO, VDRL','Papanicolaou + toma de muestra','Detartraje dental 2 arcadas'] },
  { id: 14, cat: 'mujer',        badge: 'Oro',         nombre: 'Plan Mujer Segura Oro',                 precio: 180,
    incluye: ['Consulta medicina interna','Papanicolaou + toma de muestra','Creatinina, Glucosa, Urea, EMO, VDRL','Detartraje dental 2 arcadas'] },
  { id: 15, cat: 'mujer',        badge: 'Bronce',      nombre: 'Chequeo Femenino Bronce',               precio: 180,
    incluye: ['Consulta ginecología','Ecografía de mama bilateral','Perfil lipídico, Creatinina, Urea, Glucosa, EMO','Detartraje dental 2 arcadas'] },
  { id: 16, cat: 'mujer',        badge: '> 40 años',   nombre: 'Control Completo Mujer Adulta +40',     precio: 180,
    incluye: ['2 consultas ginecología','Ecografía de mama bilateral','Mamografía bilateral','Papanicolaou + CA 153'] },
  { id: 17, cat: 'mujer',        badge: 'Premium',     nombre: 'Control Completo Mujer Adulta',         precio: 210,
    incluye: ['2 consultas ginecología','Ecografía de mama bilateral','Mamografía bilateral','Papanicolaou + CA 153'] },
  { id: 18, cat: 'mujer',        badge: '< 40 años',   nombre: 'Control Completo Mujer Adulta -40',     precio: 140,
    incluye: ['2 consultas ginecología','Ecografía de mama bilateral','Papanicolaou + toma de muestra'] },
  { id: 19, cat: 'mujer',                              nombre: 'Prevención Total — Cáncer de Mama -40', precio: 120,
    incluye: ['Consulta ginecológica','Ecografía de mama bilateral','CA 153'] },
  { id: 20, cat: 'mujer',        badge: '> 40 años',   nombre: 'Prevención Cáncer de Mama +40',         precio: 148,
    incluye: ['Consulta ginecología','Ecografía de mama bilateral','Mamografía bilateral'] },

  // CARDIO
  { id: 21, cat: 'cardio',       badge: 'Bronce',      nombre: 'Cuidado Riesgo Cardiovascular',         precio: 95,
    incluye: ['Consulta medicina interna','Colesterol, Creatinina, Triglicéridos, Urea, Glucosa'] },
  { id: 22, cat: 'cardio',                             nombre: 'Cuida tu Corazón — Ecocardiología',     precio: 160,
    incluye: ['Consulta cardiológica','Ecocardiografía transtorácia con Doppler (grabación)'] },

  // LABORATORIO
  { id: 23, cat: 'laboratorio',                        nombre: 'Laboratorio Básico Mujer + Consulta',   precio: 120,
    incluye: ['Consulta medicina general','Screen agudeza visual','Papanicolaou + toma de muestra','Creatinina, Glucosa, Urea, EMO','Detartraje dental'] },
  { id: 24, cat: 'laboratorio',  badge: 'Solo lab',    nombre: 'Sexualidad Responsable',               precio: 70,
    incluye: ['Herpes II IGM / IGG','HIV + 2 SIDA','VDRL'] },

  // GERIATRÍA
  { id: 25, cat: 'geriatria',                          nombre: 'Geriatría + Laboratorio',               precio: 120,
    incluye: ['Consulta geriatría','Biometría hemática, Creatinina, Triglicéridos, Urea, Glucosa, EMO','Terapia cervical antiestrés','Detartraje dental'] },

  // TIROIDES
  { id: 26, cat: 'tiroides',                           nombre: 'Cuida tu Tiroides',                     precio: 130,
    incluye: ['Consulta endocrinología','T3, T4, T3 Libre, T4 Libre, TSH','Glucosa, Triglicéridos, HDL, LDL, Colesterol'] },

  // DIABETES
  { id: 27, cat: 'diabetes',     badge: 'Solo lab',    nombre: 'Control de Diabetes Básico',            precio: 55,
    incluye: ['Triglicéridos, LDL, HDL, Colesterol','HB Glicosilada','Glucosa en ayunas'] },
  { id: 28, cat: 'diabetes',                           nombre: 'Control Diabetes',                      precio: 120,
    incluye: ['Consulta endocrinología','Biometría hemática, Homa IR, Ácido úrico','Perfil lipídico completo','HB Glicosilada, Glucosa, EMO'] },

  // POST COVID
  { id: 29, cat: 'postcovid',    badge: 'Bronce',      nombre: 'Post Covid Bronce',                     precio: 75,
    incluye: ['Biometría hemática + VSG','Anticuerpos SARS-CoV-2 IGM / IGG','Glucosa, Creatinina, Urea, SGPT, SGOT'] },

  // RESPIRATORIO
  { id: 30, cat: 'respiratorio', badge: 'Kids',        nombre: 'Panel Respiratorio Kids',               precio: 110,
    incluye: ['Consulta pediatría','Screen virus respiratorio Influenza A-B-VSR'] },
  { id: 31, cat: 'respiratorio',                       nombre: 'Panel Respiratorio Adulto',             precio: 90,
    incluye: ['Consulta medicina general','Screen virus respiratorio Influenza A-B-VSR'] },

  // VITAMINA C
  { id: 32, cat: 'vitaminac',                          nombre: 'Megadosis Vitamina C ×2',               precio: 100,
    incluye: ['Consulta medicina general','2 infusiones IV con Biomolec Vitamina C'] },
  { id: 33, cat: 'vitaminac',                          nombre: 'Megadosis de Vitamina C ×4',            precio: 110,
    incluye: ['Consulta medicina general','4 infusiones IV con Biomolec Vitamina C'] },

  // UROLOGÍA
  { id: 34, cat: 'urologia',                           nombre: 'Chequeo Urológico',                     precio: 50,
    incluye: ['EMO Uroanálisis de rutina','PSA Total y Libre'] },

  // GENERAL
  { id: 35, cat: 'general',      badge: 'Completo',    nombre: 'Chequeo Saludable',                     precio: 170,
    incluye: ['Consulta medicina interna','Biometría hemática completa','Perfil lipídico, Ácido úrico, Urea, Creatinina','GGT, SGPT, SGOT, Glucosa','Historia clínica dental'] },

  // TRAUMATO
  { id: 36, cat: 'traumato',                           nombre: 'Traumatología + Terapia Física',        precio: 110,
    incluye: ['Consulta traumatología','10 sesiones de terapia física'] },
];

function catFor(id: string) {
  return CATS.find((c) => c.id === id) ?? CATS[0];
}

export default function PlanesPage() {
  const heroRef  = useRef<HTMLElement>(null);
  const gridRef  = useRef<HTMLDivElement>(null);
  const [filtro, setFiltro] = useState('todos');

  const filtrados = filtro === 'todos' ? planes : planes.filter((p) => p.cat === filtro);

  useEffect(() => {
    const run = () => {
      const anime = (window as any).anime;
      if (!anime) return;
      anime({ targets: '.ph-word', translateY: [60, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(80), easing: 'easeOutExpo' });
    };
    if ((window as any).anime) run();
    else { const t = setInterval(() => { if ((window as any).anime) { clearInterval(t); run(); } }, 50); setTimeout(() => clearInterval(t), 3000); }
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const anime = (window as any).anime;
        if (anime) anime({ targets: '.plan-card', opacity: [0, 1], translateY: [30, 0], duration: 600, delay: anime.stagger(40), easing: 'easeOutExpo' });
        obs.disconnect();
      });
    }, { threshold: 0.04 });
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, [filtrados]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="blob blob-reverse absolute bottom-0 left-0 w-80 h-80 bg-teal-100 translate-y-1/3 -translate-x-1/4 opacity-40" />
        <div className="container-custom relative z-10 max-w-page">
          <span className="section-tag">36 planes disponibles</span>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-6 max-w-2xl">
            {['Planes', 'Preventivos'].map((w, i) => (
              <span key={i} className="block overflow-hidden">
                <span className={`ph-word inline-block ${i === 1 ? 'text-cyan-600' : ''}`}
                  style={{ opacity: 0, transform: 'translateY(60px)' }}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="text-slate-500 text-lg max-w-prose-tight mb-10 leading-relaxed">
            Adquiere nuestros planes de salud en cualquiera de nuestras especialidades. Atención presencial y online, a precios razonables.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand flex items-center gap-2">
              <MessageCircle size={16} /> Solicitar por WhatsApp
            </a>
            <a href="tel:+5932224066" className="btn-outline flex items-center gap-2">
              <Phone size={16} /> +593 2 224 0666
            </a>
          </div>
        </div>
      </section>

      {/* ─── PROOF POINTS ─── */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container-custom max-w-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '36', label: 'Planes disponibles' },
              { num: '$50', label: 'Desde', suffix: '' },
              { num: '10', label: 'Años de experiencia', suffix: ' años' },
              { num: 'ISO', label: 'Laboratorio certificado', suffix: ' 9001' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {s.num}<span className="text-cyan-600">{s.suffix ?? ''}</span>
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILTER + GRID ─── */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom max-w-page">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map((cat) => {
              const active = filtro === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFiltro(cat.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-pill border transition-all duration-150"
                  style={active
                    ? { background: cat.color, color: '#fff', borderColor: cat.color }
                    : { background: cat.bg, color: cat.color, borderColor: 'transparent' }
                  }
                >
                  {cat.icon}
                  {cat.label}
                  {cat.id !== 'todos' && (
                    <span className="ml-0.5 opacity-70">
                      ({planes.filter(p => p.cat === cat.id).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtrados.map((plan) => {
              const cat = catFor(plan.cat);
              return (
                <div
                  key={plan.id}
                  className="plan-card group relative bg-white rounded-card border border-slate-100 hover:border-slate-200 hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden"
                  style={{ opacity: 0 }}
                >
                  {/* Top color stripe */}
                  <div className="h-1 w-full" style={{ background: cat.color }} />

                  <div className="p-5 flex flex-col flex-1">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div
                        className="w-9 h-9 rounded-icon flex items-center justify-center shrink-0 text-white"
                        style={{ background: cat.color }}
                      >
                        {cat.icon}
                      </div>
                      {plan.badge && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-pill shrink-0"
                          style={{ background: cat.bg, color: cat.color }}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Category label */}
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: cat.color }}>
                      {cat.label}
                    </p>

                    {/* Plan name */}
                    <h3 className="text-slate-900 font-bold text-sm leading-snug mb-3 group-hover:text-cyan-700 transition-colors min-h-[2.5rem]">
                      {plan.nombre}
                    </h3>

                    {/* Price — prominent */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-black text-slate-900 tracking-tight">${plan.precio}</span>
                      <span className="text-slate-400 text-xs">/ plan</span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-100 mb-4" />

                    {/* Includes */}
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {plan.incluye.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: cat.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-white rounded-pill transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
                      style={{ background: cat.color }}
                    >
                      Solicitar plan <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-xs mt-6 tracking-wide">
            {filtrados.length} plan{filtrados.length !== 1 ? 'es' : ''} · todos los precios incluyen IVA
          </p>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container-custom max-w-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-icon bg-cyan-600 flex items-center justify-center shrink-0">
                <Shield size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Certificación ISO 9001</p>
                <p className="text-slate-500 text-xs mt-0.5">Laboratorio con certificado de calidad internacional</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-icon bg-teal-600 flex items-center justify-center shrink-0">
                <Star size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">+7,000 clientes satisfechos</p>
                <p className="text-slate-500 text-xs mt-0.5">10 años al cuidado de tu bienestar en Quito</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-icon bg-slate-900 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Lun–Vie · 8h00–19h00</p>
                <a href="tel:+5932224066" className="text-cyan-600 text-xs font-medium hover:text-cyan-700">+593 2 224 0666</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center">
        <div className="container-custom max-w-page">
          <p className="section-tag text-cyan-200 mb-3">Colmed Centro Médico · Quito</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            ¿No encuentras el plan que necesitas?
          </h2>
          <p className="text-cyan-100 mb-8 text-lg max-w-prose-tight mx-auto">
            Cuéntanos tu caso y armaremos un plan a tu medida. Presencial y online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-black rounded-pill text-sm hover:bg-cyan-50 transition-all shadow-subtle hover:-translate-y-0.5">
              <MessageCircle size={18} /> Escribir por WhatsApp
            </a>
            <Link href="/especialidades"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/60 text-white font-semibold rounded-pill text-sm hover:bg-white/10 transition-all">
              Ver especialidades <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
