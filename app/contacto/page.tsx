'use client';

import { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, MessageCircle,
  CheckCircle2, ArrowRight, Instagram, Facebook,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const inputCls = 'w-full px-4 py-3 rounded-input border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent';

export default function ContactoPage() {
  const [f, setF] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'ok'>('idle');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${f.nombre}` + (f.telefono ? `\nTeléfono: ${f.telefono}` : '') + `\n\n${f.mensaje}`
    );
    window.location.href = `mailto:info@colmed.com.ec?subject=${encodeURIComponent(f.asunto)}&body=${body}`;
    setStatus('ok');
    setF({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="container-custom relative z-10 max-w-page">
          <div className="max-w-2xl">
            <span className="section-tag">Colmed Centro Médico — Quito</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-4">
              Estamos para<br /><span className="text-cyan-600">ayudarte</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Escríbenos, llámanos o visítanos. Nuestro equipo responde a la brevedad para orientarte sobre servicios, planes y especialidades.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-card-lg border border-slate-100 shadow-hairline p-8">
              {status === 'ok' ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={52} className="mx-auto text-cyan-600 mb-4" />
                  <h2 className="text-xl font-black text-slate-900 mb-2">¡Mensaje enviado!</h2>
                  <p className="text-slate-500 text-sm mb-6">Te contactaremos a la brevedad. ¡Gracias por escribirnos!</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-sm">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <h2 className="text-xl font-black text-slate-900 mb-1">Envíanos un mensaje</h2>
                  <p className="text-slate-400 text-xs mb-5">Te respondemos por WhatsApp o por el canal que prefieras.</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-caps block mb-1.5">Nombre *</label>
                      <input required type="text" placeholder="Tu nombre completo"
                        value={f.nombre} onChange={(e) => setF({ ...f, nombre: e.target.value })}
                        className={inputCls} />
                    </div>
                    <div>
                      <label className="label-caps block mb-1.5">Teléfono</label>
                      <input type="tel" placeholder="+593 9 XXXX XXXX"
                        value={f.telefono} onChange={(e) => setF({ ...f, telefono: e.target.value })}
                        className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="label-caps block mb-1.5">Correo electrónico *</label>
                    <input required type="email" placeholder="tu@correo.com"
                      value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })}
                      className={inputCls} />
                  </div>

                  <div>
                    <label className="label-caps block mb-1.5">Asunto *</label>
                    <input required type="text" placeholder="¿En qué podemos ayudarte?"
                      value={f.asunto} onChange={(e) => setF({ ...f, asunto: e.target.value })}
                      className={inputCls} />
                  </div>

                  <div>
                    <label className="label-caps block mb-1.5">Mensaje *</label>
                    <textarea required rows={5} placeholder="Cuéntanos tu consulta con el mayor detalle posible."
                      value={f.mensaje} onChange={(e) => setF({ ...f, mensaje: e.target.value })}
                      className={`${inputCls} resize-none`} />
                  </div>

                  <button type="submit" className="btn-brand w-full flex items-center justify-center gap-2 py-4 font-bold">
                    <Mail size={17} /> Enviar mensaje
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Se abrirá tu cliente de correo con el mensaje listo para enviar a info@colmed.com.ec
                  </p>
                </form>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: <Phone size={18} />,
                  titulo: 'Teléfono',
                  lineas: ['+593 2 224 0666', '+593 98 192 2078'],
                  href: 'tel:+5932224066',
                },
                {
                  icon: <MessageCircle size={18} />,
                  titulo: 'WhatsApp',
                  lineas: ['Respuesta inmediata', 'en horario de atención'],
                  href: WA,
                },
                {
                  icon: <Mail size={18} />,
                  titulo: 'Correo electrónico',
                  lineas: ['info@colmed.com.ec'],
                  href: 'mailto:info@colmed.com.ec',
                },
                {
                  icon: <MapPin size={18} />,
                  titulo: 'Dirección',
                  lineas: ['Av. América y Vozandes', 'Edificio KENZEN, piso 8', 'Sector La Y — Quito'],
                  href: 'https://maps.app.goo.gl/colmed',
                },
                {
                  icon: <Clock size={18} />,
                  titulo: 'Horario',
                  lineas: ['Lun–Vie: 8h00 – 19h00', 'Sáb: 9h00 – 13h00'],
                },
              ].map((item) => (
                <div key={item.titulo} className="bg-white rounded-card border border-slate-100 p-5 shadow-hairline hover:border-cyan-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="label-caps mb-1">{item.titulo}</p>
                      {item.lineas.map((l) => (
                        <p key={l} className="text-slate-700 text-sm font-medium leading-snug">{l}</p>
                      ))}
                      {item.href && (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-cyan-600 font-semibold mt-1.5 hover:underline">
                          Ver <ArrowRight size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="bg-white rounded-card border border-slate-100 p-5 shadow-hairline">
                <p className="label-caps mb-3">Redes sociales</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.facebook.com/Colmed.ec', icon: <Facebook size={15} />, label: 'Facebook' },
                    { href: 'https://www.instagram.com/colmed.ecu/', icon: <Instagram size={15} />, label: 'Instagram' },
                    { href: 'https://vm.tiktok.com/ZM8EWBnpN/', icon: <span className="text-xs font-bold">TK</span>, label: 'TikTok' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-cyan-600 hover:text-white rounded-pill px-3 py-2 transition-all">
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP PLACEHOLDER ─── */}
      <section className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center border-t border-slate-200">
        <div className="text-center text-slate-400">
          <MapPin size={32} className="mx-auto mb-2 opacity-30" />
          <p className="text-sm font-medium">Av. América y Vozandes · Edificio KENZEN piso 8 · Quito</p>
          <a href="https://maps.google.com/?q=Av.+América+y+Vozandes+Quito+Ecuador"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-cyan-600 hover:underline">
            Abrir en Google Maps <ArrowRight size={11} />
          </a>
        </div>
      </section>
    </>
  );
}
