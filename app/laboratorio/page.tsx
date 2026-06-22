'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Microscope, ShieldCheck, Clock, ArrowRight, MessageCircle,
  Phone, CheckCircle2, Droplets, FlaskConical, Dna, HeartPulse,
  Activity, Stethoscope, Baby, Award,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const examenes = [
  {
    grupo: 'Hematología',
    icon: <Droplets size={20} />,
    color: '#dc2626',
    bg: '#fee2e2',
    items: ['Biometría hemática completa', 'Hemoglobina glicosilada (HbA1c)', 'Velocidad de sedimentación globular (VSG)', 'Grupo sanguíneo y factor Rh', 'Tiempo de coagulación y sangría'],
  },
  {
    grupo: 'Bioquímica general',
    icon: <FlaskConical size={20} />,
    color: '#0891b2',
    bg: '#cffafe',
    items: ['Glucosa en ayunas y posprandial', 'Perfil lipídico (colesterol, HDL, LDL, triglicéridos)', 'Creatinina, Urea, Ácido úrico', 'SGPT (ALT), SGOT (AST), GGT', 'Proteína C reactiva (PCR)'],
  },
  {
    grupo: 'Endocrinología',
    icon: <Activity size={20} />,
    color: '#0d9488',
    bg: '#ccfbf1',
    items: ['T3, T4, TSH (función tiroidea)', 'T3 Libre, T4 Libre', 'Insulina basal, Homa IR', 'Cortisol sérico', 'Hormona de crecimiento (GH)'],
  },
  {
    grupo: 'Inmunología y serología',
    icon: <ShieldCheck size={20} />,
    color: '#7c3aed',
    bg: '#ede9fe',
    items: ['VDRL (sífilis)', 'HIV + 2 SIDA', 'Herpes II IGM / IGG', 'Anticuerpos SARS-CoV-2 IGM / IGG', 'Helicobacter pylori IGM, IGG, heces'],
  },
  {
    grupo: 'Uroanálisis y copro',
    icon: <Dna size={20} />,
    color: '#d97706',
    bg: '#fef3c7',
    items: ['EMO (uroanálisis de rutina)', 'Cultivo de orina', 'Coproparasitario simple y de concentración', 'Sangre oculta en heces', 'Cultivo de secreción vaginal'],
  },
  {
    grupo: 'Oncología',
    icon: <HeartPulse size={20} />,
    color: '#e11d48',
    bg: '#ffe4e6',
    items: ['CA 153 (mama)', 'PSA Total y Libre (próstata)', 'Papanicolaou — lectura e interpretación', 'Marcadores tumorales bajo pedido médico'],
  },
  {
    grupo: 'Vitaminas y nutrición',
    icon: <Stethoscope size={20} />,
    color: '#059669',
    bg: '#d1fae5',
    items: ['Vitamina B12 (dosificación)', 'Vitamina D', 'Ácido fólico', 'Hierro sérico y ferritina', 'Zinc y magnesio sérico'],
  },
  {
    grupo: 'Microbiología',
    icon: <Microscope size={20} />,
    color: '#4f46e5',
    bg: '#eef2ff',
    items: ['Screen virus respiratorio Influenza A-B-VSR', 'Cultivo de esputo', 'Antibiograma', 'Gram de secreciones', 'Cultivos varios bajo pedido'],
  },
];

const ventajas = [
  { icon: <Award size={22} />, titulo: 'ISO 9001 certificado', texto: 'Nuestro laboratorio cuenta con certificación internacional de calidad en todos sus procesos.' },
  { icon: <Clock size={22} />, titulo: 'Resultados en 24 h', texto: 'La mayoría de exámenes están disponibles en 24 horas. Resultados urgentes en el día.' },
  { icon: <Microscope size={22} />, titulo: 'Tecnología de punta', texto: 'Equipos de alta tecnología médica y personal altamente especializado para cada análisis.' },
  { icon: <Baby size={22} />, titulo: 'Para todas las edades', texto: 'Atendemos desde neonatos hasta adultos mayores con protocolos adaptados a cada etapa de vida.' },
];

export default function LaboratorioPage() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ventRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = () => {
      const anime = (window as any).anime;
      if (!anime) return;
      anime({ targets: '.lab-word', translateY: [60, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(80), easing: 'easeOutExpo' });
    };
    if ((window as any).anime) run();
    else { const t = setInterval(() => { if ((window as any).anime) { clearInterval(t); run(); } }, 50); setTimeout(() => clearInterval(t), 3000); }
  }, []);

  useEffect(() => {
    const targets = [
      { ref: gridRef, selector: '.exam-card' },
      { ref: ventRef, selector: '.vent-card' },
    ];
    targets.forEach(({ ref, selector }) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const anime = (window as any).anime;
          if (anime) anime({ targets: selector, opacity: [0, 1], translateY: [30, 0], duration: 600, delay: anime.stagger(50), easing: 'easeOutExpo' });
          obs.disconnect();
        });
      }, { threshold: 0.05 });
      obs.observe(ref.current);
    });
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="blob blob-reverse absolute bottom-0 left-0 w-72 h-72 bg-teal-100 translate-y-1/3 -translate-x-1/4 opacity-40" />

        <div className="container-custom relative z-10 max-w-page">
          <span className="section-tag">Certificación ISO 9001</span>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-6 max-w-2xl">
            {['Servicio de', 'Laboratorio'].map((w, i) => (
              <span key={i} className="block overflow-hidden">
                <span className={`lab-word inline-block ${i === 1 ? 'text-cyan-600' : ''}`}
                  style={{ opacity: 0, transform: 'translateY(60px)' }}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="text-slate-500 text-lg max-w-prose-tight mb-10 leading-relaxed">
            Contamos con un servicio de laboratorio eficiente y confiable. Equipos de alta tecnología médica y personal especializado para el diagnóstico preciso de nuestros pacientes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand flex items-center gap-2">
              <MessageCircle size={16} /> Agendar examen
            </a>
            <a href="tel:+5932224066" className="btn-outline flex items-center gap-2">
              <Phone size={16} /> +593 2 224 0666
            </a>
          </div>
        </div>
      </section>

      {/* ─── ISO BANNER ─── */}
      <section className="py-5 bg-cyan-600">
        <div className="container-custom max-w-page">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white text-sm font-medium">
            {['Laboratorio clínico certificado ISO 9001', 'Resultados en 24 horas', 'Personal especializado', 'Tecnología de punta'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-200" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VENTAJAS ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="text-center mb-12">
            <span className="section-tag">¿Por qué elegirnos?</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Tecnología de punta,<br />
              <span className="text-cyan-600">resultados confiables</span>
            </h2>
          </div>
          <div ref={ventRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ventajas.map((v) => (
              <div key={v.titulo} className="vent-card bg-slate-50 rounded-card p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-card transition-all duration-300" style={{ opacity: 0 }}>
                <div className="w-11 h-11 rounded-icon bg-cyan-600 flex items-center justify-center text-white mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{v.titulo}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXÁMENES DISPONIBLES ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="text-center mb-12">
            <span className="section-tag">Catálogo de exámenes</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Exámenes disponibles
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Estudiamos muestras de sangre, orina y tejidos corporales. Nuestro equipo analiza cada muestra para determinar si los resultados están dentro de los límites normales.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {examenes.map((grupo) => (
              <div
                key={grupo.grupo}
                className="exam-card group bg-white rounded-card border border-slate-100 hover:border-slate-200 hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col"
                style={{ opacity: 0 }}
              >
                {/* Color top */}
                <div className="h-1" style={{ background: grupo.color }} />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-icon flex items-center justify-center text-white shrink-0"
                      style={{ background: grupo.color }}>
                      {grupo.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">{grupo.grupo}</h3>
                  </div>

                  <ul className="space-y-1.5 flex-1">
                    {grupo.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: grupo.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-6">
            Lista referencial — consulta disponibilidad de examen específico por WhatsApp o teléfono
          </p>
        </div>
      </section>

      {/* ─── PROCESO ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="text-center mb-12">
            <span className="section-tag">¿Cómo funciona?</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Proceso simple en <span className="text-cyan-600">3 pasos</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-slate-200 z-0" />

            {[
              { paso: '01', titulo: 'Agenda tu cita', texto: 'Llámanos, escríbenos por WhatsApp o visítanos directamente en nuestras instalaciones en el Edificio KENZEN, sector La Y.' },
              { paso: '02', titulo: 'Toma de muestra', texto: 'Nuestro personal especializado realiza la toma de muestra (sangre, orina u otro tejido) con los más altos estándares de higiene y cuidado.' },
              { paso: '03', titulo: 'Resultados en 24 h', texto: 'Recibes tus resultados en 24 horas con interpretación médica. Para exámenes urgentes, consulta disponibilidad el mismo día.' },
            ].map((s) => (
              <div key={s.paso} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xl font-black mb-4 shadow-lift">
                  {s.paso}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center">
        <div className="container-custom max-w-page">
          <p className="section-tag text-cyan-200 mb-3">Laboratorio Colmed · ISO 9001</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Lo hacemos por servicio,<br />lo hacemos por usted.
          </h2>
          <p className="text-cyan-100 mb-8 text-lg max-w-prose-tight mx-auto">
            Av. América y Vozandes, Edificio KENZEN, piso 8 · Lunes a viernes 8h00–19h00
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-black rounded-pill text-sm hover:bg-cyan-50 transition-all hover:-translate-y-0.5">
              <MessageCircle size={18} /> Agendar examen
            </a>
            <Link href="/planes"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/60 text-white font-semibold rounded-pill text-sm hover:bg-white/10 transition-all">
              Ver planes con laboratorio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
