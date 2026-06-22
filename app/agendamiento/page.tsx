'use client';

import { useState } from 'react';
import {
  Calendar, Clock, User, Phone, CheckCircle2,
  MessageCircle, Stethoscope, ArrowRight,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const especialidades = [
  'Medicina General', 'Pediatría', 'Ginecología y Obstetricia',
  'Traumatología y Ortopedia', 'Cardiología', 'Dermatología',
  'Neurología', 'Oftalmología', 'Otorrinolaringología',
  'Gastroenterología', 'Endocrinología', 'Urología',
  'Reumatología', 'Psiquiatría y Salud Mental', 'Odontología (COLDENT)',
  'Laboratorio Clínico', 'Otro',
];

const inputCls = 'w-full px-4 py-3 rounded-input border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent';

export default function AgendamientoPage() {
  const [f, setF] = useState({ nombre: '', telefono: '', especialidad: '', fecha: '', hora: '', nota: '' });
  const [status, setStatus] = useState<'idle' | 'ok'>('idle');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // ponytail: admin panel not built yet — interim flow via phone/WhatsApp
    setStatus('ok');
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="container-custom relative z-10 max-w-page">
          <div className="max-w-2xl">
            <span className="section-tag">Colmed Centro Médico</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-4">
              Agenda tu<br /><span className="text-cyan-600">cita médica</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Completa el formulario y te contactamos por WhatsApp para confirmar horario y especialista. Respuesta inmediata en horario de atención.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {[
                { icon: <Clock size={14} />, txt: 'Lun–Vie 8h00–19h00' },
                { icon: <CheckCircle2 size={14} />, txt: 'Confirmación inmediata' },
                { icon: <Stethoscope size={14} />, txt: '15+ especialidades' },
              ].map((t) => (
                <span key={t.txt} className="flex items-center gap-1.5 text-cyan-700 font-medium">
                  {t.icon} {t.txt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Form card */}
            <div className="lg:col-span-2 bg-white rounded-card-lg border border-slate-100 shadow-hairline p-8">
              {status === 'ok' ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={52} className="mx-auto text-cyan-600 mb-4" />
                  <h2 className="text-xl font-black text-slate-900 mb-2">Solicitud recibida</h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Nos comunicaremos contigo pronto. Para atención inmediata, llámanos o escríbenos por WhatsApp.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="tel:+5932224066" className="btn-outline text-sm flex items-center gap-2"><Phone size={14}/> Llamar</a>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand text-sm flex items-center gap-2"><MessageCircle size={14}/> WhatsApp</a>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-card p-4 mb-2">
                    <Clock size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-amber-700 text-xs leading-relaxed">
                      <strong>Sistema de agendamiento en construcción.</strong> Por ahora, llama al <a href="tel:+5932224066" className="underline">+593 2 224 0666</a> o escríbenos por <a href={WA} target="_blank" rel="noopener noreferrer" className="underline">WhatsApp</a> para reservar tu cita.
                    </p>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 mb-1">Datos de la cita</h2>
                  <p className="text-slate-400 text-xs mb-6">Todos los campos marcados con * son requeridos.</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-caps block mb-1.5">Nombre completo *</label>
                      <input required type="text" placeholder="Tu nombre"
                        value={f.nombre} onChange={(e) => setF({ ...f, nombre: e.target.value })}
                        className={inputCls} />
                    </div>
                    <div>
                      <label className="label-caps block mb-1.5">Teléfono / WhatsApp *</label>
                      <input required type="tel" placeholder="+593 9 XXXX XXXX"
                        value={f.telefono} onChange={(e) => setF({ ...f, telefono: e.target.value })}
                        className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="label-caps block mb-1.5">Especialidad *</label>
                    <select required value={f.especialidad} onChange={(e) => setF({ ...f, especialidad: e.target.value })}
                      className={inputCls}>
                      <option value="">Selecciona una especialidad</option>
                      {especialidades.map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-caps block mb-1.5">Fecha preferida</label>
                      <input type="date" value={f.fecha} onChange={(e) => setF({ ...f, fecha: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className={inputCls} />
                    </div>
                    <div>
                      <label className="label-caps block mb-1.5">Hora preferida</label>
                      <input type="time" value={f.hora} onChange={(e) => setF({ ...f, hora: e.target.value })}
                        min="08:00" max="19:00" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="label-caps block mb-1.5">Nota adicional (opcional)</label>
                    <textarea rows={3} placeholder="Síntomas, motivo de consulta, nombre del médico, etc."
                      value={f.nota} onChange={(e) => setF({ ...f, nota: e.target.value })}
                      className={`${inputCls} resize-none`} />
                  </div>

                  <button type="submit" disabled className="w-full flex items-center justify-center gap-2 py-4 text-base font-bold rounded-pill bg-slate-100 text-slate-400 cursor-not-allowed">
                    <Clock size={18} /> Sistema de agendamiento — próximamente
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Mientras tanto, contáctanos por teléfono o WhatsApp para agendar tu cita.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="space-y-4">
              <div className="bg-white rounded-card border border-slate-100 p-5 shadow-hairline">
                <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                  <Clock size={15} className="text-cyan-600" /> Horario de atención
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { dia: 'Lunes – Viernes', h: '8h00 – 19h00' },
                    { dia: 'Sábados', h: '9h00 – 13h00' },
                    { dia: 'Domingos', h: 'Cerrado' },
                  ].map((r) => (
                    <div key={r.dia} className="flex justify-between">
                      <span className="text-slate-500">{r.dia}</span>
                      <span className={`font-semibold ${r.h === 'Cerrado' ? 'text-slate-300' : 'text-slate-800'}`}>{r.h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-card border border-slate-100 p-5 shadow-hairline">
                <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                  <Phone size={15} className="text-cyan-600" /> Contacto directo
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="tel:+5932224066" className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors">
                    <Phone size={13} /> +593 2 224 0666
                  </a>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors">
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-cyan-600 rounded-card p-5 text-white">
                <h3 className="font-bold text-sm mb-2">¿Urgencia?</h3>
                <p className="text-cyan-100 text-xs leading-relaxed mb-3">
                  Para atención urgente, llámanos directamente o escríbenos por WhatsApp.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-cyan-700 rounded-pill px-3 py-2 hover:bg-cyan-50 transition-colors">
                  <MessageCircle size={12} /> Escribir ahora <ArrowRight size={11} />
                </a>
              </div>

              <div className="bg-white rounded-card border border-slate-100 p-5 shadow-hairline">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <User size={15} className="text-cyan-600" /> Cómo funciona
                </h3>
                <ol className="space-y-3">
                  {[
                    'Llena el formulario con tus datos',
                    'Se abre WhatsApp con tu solicitud',
                    'Confirmamos horario y especialista',
                    '¡Listo! Te esperamos en Colmed',
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
