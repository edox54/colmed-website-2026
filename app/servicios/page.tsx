'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Stethoscope, Ambulance, Hospital, FlaskConical, Pill, Smile,
  CheckCircle2, ArrowRight, MessageCircle, Phone,
  Clock, Shield, Award, Users, Microscope, Heart,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const servicios = [
  {
    id: 'consultas',
    icon: <Stethoscope size={26} />,
    color: '#0891b2',
    bg: '#cffafe',
    titulo: 'Consultas Médicas',
    descripcion: 'Acceso a una amplia red de médicos especializados con horarios convenientes y atención personalizada para ti y tu familia.',
    features: ['Más de 15 especialidades', 'Horarios extendidos Lun–Sáb', 'Teleconsultas disponibles', 'Historia clínica digital'],
    href: '/especialidades',
  },
  {
    id: 'emergencias',
    icon: <Ambulance size={26} />,
    color: '#dc2626',
    bg: '#fee2e2',
    titulo: 'Servicio de Emergencias',
    descripcion: 'Atención inmediata con protocolos de respuesta rápida y médicos certificados disponibles para situaciones urgentes.',
    features: ['Atención prioritaria', 'Protocolos de triaje', 'Comunicación directa 24/7', 'Coordinación con hospitales'],
    href: '/contacto',
  },
  {
    id: 'hospitalizacion',
    icon: <Hospital size={26} />,
    color: '#7c3aed',
    bg: '#ede9fe',
    titulo: 'Hospitalización',
    descripcion: 'Cobertura completa de hospitalización en clínicas y hospitales de la red Colmed con seguimiento médico continuo.',
    features: ['Cuartos privados disponibles', 'Cirugías ambulatorias', 'Recuperación postoperatoria', 'Enfermería especializada'],
    href: '/planes',
  },
  {
    id: 'laboratorio',
    icon: <Microscope size={26} />,
    color: '#4f46e5',
    bg: '#eef2ff',
    titulo: 'Laboratorio Clínico',
    descripcion: 'Laboratorio certificado ISO 9001 con equipos de alta tecnología para análisis precisos y resultados en 24 horas.',
    features: ['Certificación ISO 9001', 'Resultados en 24 horas', 'Hematología, bioquímica, hormonas', 'Personal especializado'],
    href: '/laboratorio',
  },
  {
    id: 'farmacia',
    icon: <Pill size={26} />,
    color: '#059669',
    bg: '#d1fae5',
    titulo: 'Farmacia',
    descripcion: 'Red de farmacias afiliadas con acceso a medicamentos genéricos y de marca con atención farmacéutica personalizada.',
    features: ['Medicamentos genéricos y de marca', 'Farmacéuticos disponibles', 'Dispensación con receta', 'Orientación de uso'],
    href: '/contacto',
  },
  {
    id: 'dental',
    icon: <Smile size={26} />,
    color: '#0284c7',
    bg: '#e0f2fe',
    titulo: 'Odontología COLDENT',
    descripcion: 'Clínica dental integral con todas las especialidades: implantología, ortodoncia, endodoncia, cirugía oral y estética dental.',
    features: ['7 especialidades dentales', 'Implantes y ortodoncia', 'Planes COLDENT desde $45', 'Equipos de última generación'],
    href: '/odontologia',
  },
];

const stats = [
  { num: '15+', label: 'Especialidades', icon: <Stethoscope size={18} /> },
  { num: '10', label: 'Años de experiencia', icon: <Award size={18} /> },
  { num: '24h', label: 'Resultados de lab', icon: <Clock size={18} /> },
  { num: 'ISO', label: '9001 Certificado', icon: <Shield size={18} /> },
];

export default function ServiciosPage() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = () => {
      const anime = (window as any).anime;
      if (!anime) return;
      anime({ targets: '.srv-word', translateY: [60, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(70), easing: 'easeOutExpo' });
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
        if (anime) anime({ targets: '.srv-card', opacity: [0, 1], translateY: [40, 0], duration: 700, delay: anime.stagger(80), easing: 'easeOutExpo' });
        obs.disconnect();
      });
    }, { threshold: 0.05 });
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="blob blob-reverse absolute bottom-0 left-0 w-80 h-80 bg-teal-100 translate-y-1/3 -translate-x-1/4 opacity-30" />

        <div className="container-custom max-w-page relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Colmed Centro Médico — Quito</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-5 overflow-hidden">
                <span className="srv-word inline-block" style={{ opacity: 0, transform: 'translateY(60px)' }}>
                  Salud integral
                </span><br />
                <span className="srv-word inline-block text-cyan-600" style={{ opacity: 0, transform: 'translateY(60px)' }}>
                  bajo un solo techo
                </span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-prose-tight">
                Medicina general, especialidades, laboratorio ISO 9001, odontología y más — todo en el Edificio KENZEN, Quito.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/agendamiento" className="btn-brand flex items-center gap-2">
                  <MessageCircle size={16} /> Agendar cita
                </Link>
                <a href="tel:+5932224066" className="btn-outline flex items-center gap-2">
                  <Phone size={16} /> +593 2 224 0666
                </a>
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-card border border-slate-100 shadow-hairline p-6 flex flex-col items-start gap-3 hover:border-cyan-200 hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900">{s.num}</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLAIM BAR ─── */}
      <section className="py-4 bg-cyan-600">
        <div className="container-custom max-w-page">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-white text-xs font-medium">
            {['Consultas sin largas esperas', 'Laboratorio con resultados en 24 h', 'Odontología completa COLDENT', 'Planes preventivos desde $50'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-cyan-200" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS GRID ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="text-center mb-14">
            <span className="section-tag">Lo que ofrecemos</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Servicios diseñados<br /><span className="text-cyan-600">para tu bienestar</span>
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((srv) => (
              <div key={srv.id} className="srv-card group relative bg-white rounded-card-lg border border-slate-100 overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{ opacity: 0 }}>
                {/* Color stripe */}
                <div className="h-1.5 transition-all duration-300" style={{ background: srv.color }} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-card flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ background: srv.bg, color: srv.color }}>
                      {srv.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-black text-slate-900 text-base leading-snug">{srv.titulo}</h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{srv.descripcion}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {srv.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: srv.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={srv.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold mt-auto self-start rounded-pill px-4 py-2 text-white hover:opacity-90 transition-opacity"
                    style={{ background: srv.color }}>
                    Ver más <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="text-center mb-14">
            <span className="section-tag">¿Cómo funciona?</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Atención en <span className="text-cyan-600">3 pasos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-slate-200 z-0" />
            {[
              { n: '01', t: 'Agenda tu cita', d: 'Llámanos, escríbenos por WhatsApp o completa el formulario de agendamiento. Confirmamos el mismo día.' },
              { n: '02', t: 'Visítanos', d: 'Encuéntranos en el Edificio KENZEN piso 8, Av. América y Vozandes. Zona norte de Quito, fácil acceso.' },
              { n: '03', t: 'Recibe atención', d: 'Nuestro equipo médico te atiende con calidez y profesionalismo. Resultados y seguimiento garantizados.' },
            ].map((s) => (
              <div key={s.n} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xl font-black mb-5 shadow-lift shrink-0">
                  {s.n}
                </div>
                <h3 className="font-black text-slate-900 mb-2 text-lg">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">¿Por qué Colmed?</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                Un equipo médico que<br /><span className="text-cyan-600">realmente te cuida</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                En Colmed Centro Médico llevamos más de 10 años brindando atención integral en salud con precios accesibles, tecnología actualizada y el mismo trato humano desde el primer día.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users size={16} />, t: 'Especialistas certificados' },
                  { icon: <Shield size={16} />, t: 'Laboratorio ISO 9001' },
                  { icon: <Heart size={16} />, t: 'Atención personalizada' },
                  { icon: <Award size={16} />, t: '10 años de experiencia' },
                ].map((v) => (
                  <div key={v.t} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="w-8 h-8 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">{v.icon}</div>
                    {v.t}
                  </div>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="bg-slate-50 rounded-card-lg border border-slate-100 p-8">
              <p className="label-caps mb-5">Encuéntranos</p>
              <div className="space-y-4">
                {[
                  { icon: <MessageCircle size={16} />, t: 'Av. América y Vozandes', sub: 'Edificio KENZEN, piso 8 · Quito' },
                  { icon: <Phone size={16} />, t: '+593 2 224 0666', sub: '+593 98 192 2078' },
                  { icon: <Clock size={16} />, t: 'Lun–Vie: 8h00–19h00', sub: 'Sáb: 9h00–13h00' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-icon bg-cyan-600 text-white flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.t}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://maps.google.com/?q=Av.+América+y+Vozandes+Edificio+KENZEN+Quito"
                target="_blank" rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 border border-slate-200 text-slate-600 font-semibold rounded-pill text-sm hover:border-cyan-300 hover:text-cyan-600 transition-colors">
                <ArrowRight size={14} /> Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center">
        <div className="container-custom max-w-page">
          <Heart size={40} className="mx-auto mb-4 text-cyan-200" />
          <p className="section-tag text-cyan-200 mb-3">Colmed Centro Médico</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Tu salud, nuestra<br />prioridad
          </h2>
          <p className="text-cyan-100 mb-8 text-lg max-w-prose-tight mx-auto">
            Agenda tu cita hoy y experimenta la diferencia de un centro médico que te conoce por tu nombre.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/agendamiento"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-black rounded-pill text-sm hover:bg-cyan-50 transition-all hover:-translate-y-0.5">
              <MessageCircle size={18} /> Agendar cita
            </Link>
            <Link href="/planes"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/60 text-white font-semibold rounded-pill text-sm hover:bg-white/10 transition-all">
              Ver planes preventivos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
