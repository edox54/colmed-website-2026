'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Target, Eye, Heart, ShieldCheck, Award, Users, MapPin,
  ArrowRight, MessageCircle, Phone, Send, CheckCircle2,
  Stethoscope, Microscope, Zap, Building2,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const valores = [
  { icon: <ShieldCheck size={20} />, titulo: 'Calidad', texto: 'Estándares internacionales en cada servicio médico que prestamos.' },
  { icon: <Zap size={20} />,         titulo: 'Eficiencia', texto: 'Diagnóstico rápido y oportuno sin sacrificar precisión ni cuidado.' },
  { icon: <Heart size={20} />,       titulo: 'Vocación', texto: 'Equipo humano comprometido con el bienestar integral del paciente.' },
  { icon: <Award size={20} />,       titulo: 'Innovación', texto: 'Tecnología de vanguardia para ofrecer la mejor atención posible.' },
  { icon: <Users size={20} />,       titulo: 'Comunidad', texto: 'Trabajamos por el bienestar de Quito y sus familias desde hace 10 años.' },
  { icon: <CheckCircle2 size={20} />,titulo: 'Confianza', texto: 'Más de 7,000 pacientes satisfechos nos respaldan con su confianza.' },
];

const serviciosDestacados = [
  { icon: <Stethoscope size={22} />, label: '+36 especialidades médicas', href: '/especialidades' },
  { icon: <Microscope size={22} />,  label: 'Laboratorio clínico ISO 9001', href: '/laboratorio' },
  { icon: <Zap size={22} />,         label: 'Imágenes: rayos X, resonancia, tomografía', href: '/especialidades' },
  { icon: <Heart size={22} />,       label: 'Quirófano y cirugía especializada', href: '/especialidades' },
  { icon: <Users size={22} />,       label: 'Planes preventivos personalizados', href: '/planes' },
  { icon: <Building2 size={22} />,   label: 'COLDENT — servicios odontológicos', href: '/especialidades' },
];

type FormState = { nombre: string; correo: string; mensaje: string };
type Status = 'idle' | 'sending' | 'ok' | 'err';

export default function NosotrosPage() {
  const heroRef   = useRef<HTMLElement>(null);
  const misionRef = useRef<HTMLDivElement>(null);
  const valRef    = useRef<HTMLDivElement>(null);
  const [form, setForm]   = useState<FormState>({ nombre: '', correo: '', mensaje: '' });
  const [status, setStatus] = useState<Status>('idle');

  // Hero animation
  useEffect(() => {
    const run = () => {
      const anime = (window as any).anime;
      if (!anime) return;
      anime({ targets: '.nos-word', translateY: [60, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(80), easing: 'easeOutExpo' });
    };
    if ((window as any).anime) run();
    else { const t = setInterval(() => { if ((window as any).anime) { clearInterval(t); run(); } }, 50); setTimeout(() => clearInterval(t), 3000); }
  }, []);

  // Scroll animations
  useEffect(() => {
    const pairs = [
      { ref: misionRef, selector: '.mis-item' },
      { ref: valRef,    selector: '.val-card' },
    ];
    pairs.forEach(({ ref, selector }) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const anime = (window as any).anime;
          if (anime) anime({ targets: selector, opacity: [0, 1], translateY: [30, 0], duration: 700, delay: anime.stagger(80), easing: 'easeOutExpo' });
          obs.disconnect();
        });
      }, { threshold: 0.05 });
      obs.observe(ref.current);
    });
  }, []);

  // Fake form submit — opens WhatsApp with message
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.mensaje) { setStatus('err'); return; }
    setStatus('sending');
    const msg = encodeURIComponent(`Hola Colmed! Soy ${form.nombre} (${form.correo}).\n\n${form.mensaje}`);
    setTimeout(() => {
      window.open(`https://wa.me/message/WKF5BKS2WPY3K1?text=${msg}`, '_blank');
      setStatus('ok');
      setForm({ nombre: '', correo: '', mensaje: '' });
    }, 800);
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="blob blob-reverse absolute bottom-0 left-0 w-72 h-72 bg-teal-100 translate-y-1/3 -translate-x-1/4 opacity-40" />

        <div className="container-custom relative z-10 max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="section-tag">10 años en Quito</span>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-6">
                {['Quiénes', 'somos'].map((w, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span className={`nos-word inline-block ${i === 1 ? 'text-cyan-600' : ''}`}
                      style={{ opacity: 0, transform: 'translateY(60px)' }}>{w}</span>
                  </span>
                ))}
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-prose-tight mb-8">
                COLMED es un Centro Médico ubicado en el corazón comercial de Quito, en el Edificio KENZEN, sector La Y. Trabajamos por el bienestar de nuestros pacientes a través de servicios integrados en toda la cadena de valor, con calidad técnica, servicio de primera y a precios razonables.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand flex items-center gap-2">
                  <MessageCircle size={16} /> Contáctanos
                </a>
                <Link href="/especialidades" className="btn-outline flex items-center gap-2">
                  Ver especialidades <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right — image placeholder */}
            <div className="relative rounded-card-lg overflow-hidden bg-slate-100 aspect-[4/3] flex items-center justify-center border border-slate-200">
              {/* Replace src with a real photo of the Colmed facilities */}
              <div className="text-center text-slate-400">
                <Building2 size={48} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm font-medium">Edificio KENZEN, Quito</p>
                <p className="text-xs mt-1 opacity-60">Av. América y Vozandes, sector La Y</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-10 bg-cyan-600">
        <div className="container-custom max-w-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { num: '10', suf: ' años', label: 'En el mercado' },
              { num: '+7,000', suf: '', label: 'Clientes satisfechos' },
              { num: '+36', suf: '', label: 'Especialidades médicas' },
              { num: '100%', suf: '', label: 'Calidad y eficiencia' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black tracking-tight">{s.num}<span className="text-cyan-200">{s.suf}</span></p>
                <p className="text-xs uppercase tracking-widest text-cyan-200 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISIÓN / VISIÓN / POR QUÉ ─── */}
      <section className="py-24 bg-white">
        <div ref={misionRef} className="container-custom max-w-page">

          {/* Misión */}
          <div className="mis-item grid lg:grid-cols-2 gap-12 items-center mb-24" style={{ opacity: 0 }}>
            <div className="order-2 lg:order-1">
              <div className="w-12 h-12 rounded-icon bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5">
                <Target size={24} />
              </div>
              <span className="section-tag">Misión</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                Cuidado de la salud<br /><span className="text-cyan-600">con calidad humana</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-base">
                Contribuir al cuidado de la salud y la vida de las personas, prestando servicios de alta calidad; con un equipo humano calificado para ofrecer atención clínica especializada, buscando de manera continua la satisfacción de nuestros clientes.
              </p>
            </div>
            {/* Image placeholder */}
            <div className="order-1 lg:order-2 rounded-card-lg bg-slate-50 border border-slate-100 aspect-[4/3] flex items-center justify-center text-slate-300">
              <div className="text-center">
                <Target size={40} className="mx-auto mb-2 opacity-30" />
                <p className="text-xs text-slate-400">Imagen equipo médico Colmed</p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="mis-item grid lg:grid-cols-2 gap-12 items-center mb-24" style={{ opacity: 0 }}>
            {/* Image placeholder */}
            <div className="rounded-card-lg bg-slate-50 border border-slate-100 aspect-[4/3] flex items-center justify-center text-slate-300">
              <div className="text-center">
                <Eye size={40} className="mx-auto mb-2 opacity-30" />
                <p className="text-xs text-slate-400">Imagen instalaciones KENZEN</p>
              </div>
            </div>
            <div>
              <div className="w-12 h-12 rounded-icon bg-teal-50 flex items-center justify-center text-teal-600 mb-5">
                <Eye size={24} />
              </div>
              <span className="section-tag">Visión</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                Líderes en atención<br /><span className="text-cyan-600">clínica integral</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-base">
                Ser una clínica reconocida por la atención y cuidado clínico de nuestros pacientes, consolidándose como una institución con altos estándares de calidad, innovación y desarrollo tecnológico, convirtiéndose además en el lugar ideal para trabajar.
              </p>
            </div>
          </div>

          {/* Por qué elegir Colmed */}
          <div className="mis-item bg-slate-50 rounded-card-lg border border-slate-100 p-10 lg:p-14" style={{ opacity: 0 }}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 rounded-icon bg-cyan-100 flex items-center justify-center text-cyan-600 mb-5">
                  <Heart size={24} />
                </div>
                <span className="section-tag">¿Por qué elegirnos?</span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                  Todo lo que necesitas<br /><span className="text-cyan-600">en un solo lugar</span>
                </h2>
                <p className="text-slate-500 leading-relaxed text-base mb-6">
                  Somos un centro especializado que brinda atención integral a sus pacientes, ofreciendo la facilidad de realizar todos sus requerimientos médicos en un solo lugar, en instalaciones cómodas y seguras, con personal profesional y herramientas tecnológicas de vanguardia.
                </p>
                <p className="text-slate-500 leading-relaxed text-base mb-6">
                  Ubicados estratégicamente en el sector norte de Quito, Colmed se convierte en la opción más adecuada para atender de manera eficiente y eficaz a todos sus pacientes.
                </p>
                <p className="text-cyan-700 font-black text-lg italic">"Lo hacemos por servicio, lo hacemos por usted."</p>
              </div>

              {/* Services list */}
              <ul className="space-y-3">
                {serviciosDestacados.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href}
                      className="flex items-center gap-3 p-3 rounded-card bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-hairline transition-all group">
                      <div className="w-9 h-9 rounded-icon bg-cyan-600 text-white flex items-center justify-center shrink-0 group-hover:bg-cyan-700 transition-colors">
                        {s.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-cyan-700 transition-colors">{s.label}</span>
                      <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-cyan-500 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="text-center mb-12">
            <span className="section-tag">Nuestros valores</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Lo que nos <span className="text-cyan-600">define</span>
            </h2>
          </div>
          <div ref={valRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {valores.map((v) => (
              <div key={v.titulo}
                className="val-card bg-white rounded-card border border-slate-100 p-6 hover:border-cyan-200 hover:shadow-card transition-all duration-300"
                style={{ opacity: 0 }}>
                <div className="w-10 h-10 rounded-icon bg-cyan-600 text-white flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{v.titulo}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UBICACIÓN ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Encuéntranos</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6">
                Estamos en el<br /><span className="text-cyan-600">corazón de Quito</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <MapPin size={18} />, label: 'Dirección', value: 'Av. América y Vozandes, Edificio KENZEN, piso 8, sector La Y' },
                  { icon: <Phone size={18} />,  label: 'Teléfonos', value: '+593 2 224 0666 · +593 98 192 2078' },
                  { icon: <MessageCircle size={18} />, label: 'Correo', value: 'info@colmed.com.ec' },
                  { icon: <CheckCircle2 size={18} />, label: 'Horario', value: 'Lunes a viernes: 8h00 – 19h00' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">{item.label}</p>
                      <p className="text-slate-700 text-sm font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand inline-flex items-center gap-2">
                <MessageCircle size={16} /> Agendar por WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-card-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin size={40} className="mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Mapa de ubicación</p>
                <p className="text-xs mt-1 opacity-60">Av. América y Vozandes, Edificio KENZEN</p>
                <a
                  href="https://maps.google.com/?q=Edificio+KENZEN+Av+America+y+Vozandes+Quito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs text-cyan-600 font-semibold hover:text-cyan-700"
                >
                  Ver en Google Maps <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="hidden lg:flex rounded-card-lg bg-white border border-slate-100 aspect-[4/3] items-center justify-center text-slate-300">
              <div className="text-center">
                <Users size={44} className="mx-auto mb-2 opacity-30" />
                <p className="text-xs text-slate-400">Equipo Colmed Centro Médico</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-card-lg border border-slate-100 p-8 shadow-hairline">
              <span className="section-tag">Contáctanos</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                ¡Estamos para ayudarte!
              </h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Escríbenos y te responderemos a la brevedad. También puedes contactarnos directamente por WhatsApp.
              </p>

              {status === 'ok' ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={48} className="mx-auto text-cyan-600 mb-4" />
                  <p className="font-bold text-slate-900 text-lg">¡Mensaje enviado!</p>
                  <p className="text-slate-500 text-sm mt-1">Te contactaremos pronto.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline mt-6 text-sm">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label-caps block mb-1.5">Nombre completo</label>
                    <input
                      type="text"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-input border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="label-caps block mb-1.5">Correo electrónico</label>
                    <input
                      type="email"
                      value={form.correo}
                      onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-input border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="label-caps block mb-1.5">Mensaje</label>
                    <textarea
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full px-4 py-3 rounded-input border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none bg-slate-50"
                    />
                  </div>
                  {status === 'err' && (
                    <p className="text-red-500 text-xs">Por favor completa todos los campos.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-brand w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Enviando…' : <><Send size={15} /> Enviar mensaje</>}
                  </button>
                  <p className="text-center text-slate-400 text-xs">
                    O escríbenos directamente por{' '}
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-medium hover:underline">
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center">
        <div className="container-custom max-w-page">
          <p className="section-tag text-cyan-200 mb-3">Colmed Centro Médico · Quito, Ecuador</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Tu salud, nuestra misión
          </h2>
          <p className="text-cyan-100 mb-8 text-lg max-w-prose-tight mx-auto">
            Lunes a viernes · 8h00 – 19h00 · Edificio KENZEN, Av. América y Vozandes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/planes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-black rounded-pill text-sm hover:bg-cyan-50 transition-all hover:-translate-y-0.5">
              Ver planes preventivos <ArrowRight size={16} />
            </Link>
            <Link href="/especialidades"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/60 text-white font-semibold rounded-pill text-sm hover:bg-white/10 transition-all">
              Nuestras especialidades <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
