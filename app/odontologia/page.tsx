'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, MessageCircle, Phone,
  Smile, Shield, Clock, Heart, Sparkles, Zap,
  Users, Award, ChevronDown, Send,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

/* ── ESPECIALIDADES ─────────────────────────────────────── */
const col1 = [
  {
    id: 'implantologia',
    nombre: 'Implantología',
    icon: <Zap size={18} />,
    color: '#0891b2',
    texto: 'Los implantes son un producto en forma de un pequeño tornillo, el cual está diseñado para sustituir la raíz del diente dentro del hueso, estos están hechos de titanio, por la biocompatibilidad de este material con el cuerpo.\n\nEsta es la mejor opción al momento de recuperar las piezas dentales pérdidas ya que con este tratamiento se evita el desgaste de dientes adyacentes como puentes y coronas, y ayuda a mantener el estímulo del hueso para que este no pierda su altura.',
  },
  {
    id: 'cirugia-oral',
    nombre: 'Cirugía Oral y Maxilofacial',
    icon: <Shield size={18} />,
    color: '#7c3aed',
    texto: 'El cirujano maxilofacial cuenta con amplios conocimientos en cirugía oral y maxilofacial que le permiten realizar todo tipo de extracciones y poder solventar las complicaciones que se presenten, injertos óseos e implantes dentales, entre muchos otros tratamientos.\n\nPor esta y muchas otras razones es importante que los procedimientos quirúrgicos de tu boca sean realizados por los especialistas.',
  },
  {
    id: 'rehabilitacion',
    nombre: 'Rehabilitación Oral',
    icon: <Heart size={18} />,
    color: '#0d9488',
    texto: 'Es la rama de la odontología que se encarga de restaurar las piezas dentales, para devolver su función y armonía. La rehabilitación oral se compone de un tratamiento integral a partir de prótesis fijas, removibles, oclusión e implantes dentales. La rehabilitación oral va de la mano de otras especialidades dentales como la ortodoncia, periodoncia, endodoncia, etc.',
  },
  {
    id: 'odontopediatria',
    nombre: 'Odontopediatría',
    icon: <Users size={18} />,
    color: '#0284c7',
    texto: 'La odontopediatría es la rama de la odontología que se encarga de tratar a los niños de 0 a 12 años, es decir que atiende y trata las distintas enfermedades bucodentales desde la infancia más temprana hasta finalizar el crecimiento, con el fin de evitar que los niños padezcan problemas más graves en la edad adulta.',
  },
];

const col2 = [
  {
    id: 'periodoncia',
    nombre: 'Periodoncia',
    icon: <CheckCircle2 size={18} />,
    color: '#059669',
    texto: 'La Periodoncia es la rama de la Odontología que trabaja con las enfermedades de los tejidos de soporte del diente así como, las encías y el hueso que sostiene los dientes, también trata la parte de los tejidos blandos de la boca. Y es que las enfermedades de las encías como la gingivitis y periodontitis son de las causas más comunes de pérdida de dientes, y su control es fundamental.',
  },
  {
    id: 'endodoncia',
    nombre: 'Endodoncia',
    icon: <Award size={18} />,
    color: '#dc2626',
    texto: 'La endodoncia es una especialidad odontológica que consiste en realizar tratamientos en la parte interna de los dientes. El procedimiento tiene como finalidad preservar las piezas dentales dañadas para evitar su pérdida. Para ello, se extrae el nervio del diente y la cavidad resultante se rellena y sella con material inerte y biocompatible, quedando listo para el tratamiento restaurador.',
  },
  {
    id: 'ortodoncia',
    nombre: 'Ortodoncia',
    icon: <Sparkles size={18} />,
    color: '#d97706',
    texto: 'Los dientes en mala posición y los que no muerden correctamente son difíciles de mantener limpios, corren riesgos de pérdida precoz debido a caries y enfermedades periodontales, y ocasionan tensión extra sobre los músculos de la masticación.\n\nLos tratamientos ortodóncicos tienen la ventaja de proporcionarnos una boca sana, una sonrisa de aspecto agradable y dientes con mayores posibilidades de durar toda la vida. Actualmente hay varios tipos de ortodoncia, por lo cual es necesario que acudas a tu cita de diagnóstico.',
  },
];

/* ── PLANES COLDENT ─────────────────────────────────────── */
type Plan = { nombre: string; precio: string; cuota?: string; color: string; badge?: string; items: string[] };

const planesGenerales: Plan[] = [
  {
    nombre: 'Salud Bucal', precio: '$45', color: '#0891b2',
    items: ['Diagnóstico', 'Profilaxis', 'Retiro de cálculos', 'Flúor'],
  },
  {
    nombre: 'De Vuelta a la Salud', precio: '$46.50', color: '#0891b2',
    items: ['Diagnóstico dental para pacientes con enfermedades crónicas', 'Profilaxis profunda', 'Remoción de cálculos con ultrasonido y cepillado'],
  },
  {
    nombre: 'Regreso a Clases', precio: '$56.99', color: '#0284c7',
    items: ['Diagnóstico', 'Profilaxis', '4 Sellantes', 'Flúor'],
  },
  {
    nombre: 'Dulce Espera', precio: '$50.80', color: '#0d9488', badge: 'Mamás',
    items: ['Diagnóstico para futuras mamás', 'Profilaxis profunda', 'Remoción de cálculos con ultrasonido', 'Aplicación de flúor'],
  },
  {
    nombre: 'Ortodoncia Convencional', precio: '$980', color: '#7c3aed', cuota: 'Cuotas desde $25/mes',
    items: ['1era y 2da instalación', 'Controles x 24 meses', 'Estudios de ortodoncia', 'Retiro + Profilaxis + Retenedores'],
  },
  {
    nombre: 'Ortodoncia Estética', precio: '$1,240', color: '#7c3aed', cuota: 'Cuotas desde $38/mes', badge: 'Popular',
    items: ['1era y 2da instalación', 'Controles x 20 meses', 'Estudios de ortodoncia', 'Retiro + Profilaxis + Retenedores'],
  },
  {
    nombre: 'Blanca Sonrisa', precio: '$199.90', color: '#0891b2',
    items: ['1 sesión de blanqueamiento en consultorio', '1 sesión de blanqueamiento casero'],
  },
  {
    nombre: 'Sonrisa de Estrella', precio: '$669.90', color: '#0284c7', badge: 'Premium',
    items: ['Diseño de sonrisa en resina', 'Profilaxis', 'Blanqueamiento'],
  },
  {
    nombre: 'Plan Quirúrgico para Ortodoncia', precio: '$140', color: '#dc2626',
    items: ['Exodoncia de 4 premolares por indicación ortodóntica', 'Especialidad de Cirugía Maxilofacial', 'Control incluido'],
  },
  {
    nombre: 'Plan Sin Terceros Molares', precio: '$300', color: '#dc2626',
    items: ['Extracción de 4 terceros molares erupcionados', 'Especialidad de Cirugía Maxilofacial', 'Control incluido'],
  },
  {
    nombre: 'Plan Sin Terceros Molares II', precio: '$368.57', color: '#b91c1c',
    items: ['Extracción de 4 terceros molares incluidos', 'Especialidad de Cirugía Maxilofacial', 'Suturas + Control'],
  },
];

const planesEsteticos: Plan[] = [
  {
    nombre: 'Joven por Siempre', precio: '$90', color: '#db2777', badge: 'Estético',
    items: ['Aplicación de plasma rico en plaquetas', 'Tratamiento facial'],
  },
  {
    nombre: 'Eternamente Bella', precio: '$460', color: '#9333ea', badge: 'Estético',
    items: ['Hilos tensores faciales', 'Tratamiento para rostro'],
  },
];

/* ── PLAN CARD ──────────────────────────────────────────── */
function PlanCard({ plan }: { plan: Plan }) {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-card border border-slate-100 overflow-hidden hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Color stripe */}
      <div className="h-1.5" style={{ background: plan.color }} />

      <div className="p-5 flex flex-col flex-1">
        {/* Badge */}
        {plan.badge && (
          <span className="self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-pill mb-2 text-white"
            style={{ background: plan.color }}>
            {plan.badge}
          </span>
        )}

        {/* Nombre */}
        <h4 className="font-bold text-slate-900 text-sm leading-snug mb-3">{plan.nombre}</h4>

        {/* Items */}
        <ul className="space-y-1.5 flex-1 mb-4">
          {plan.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
              <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
              {item}
            </li>
          ))}
        </ul>

        {/* Cuota */}
        {plan.cuota && (
          <p className="text-[11px] font-semibold text-slate-400 mb-3">{plan.cuota}</p>
        )}

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-slate-100">
          <span className="text-2xl font-black text-slate-900">{plan.precio}</span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-white rounded-pill px-3 py-1.5 group-hover:opacity-90 transition-opacity"
            style={{ background: plan.color }}>
            Comprar <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── ACCORDION ITEM ─────────────────────────────────────── */
function AccordionItem({ esp, defaultOpen = false }: { esp: (typeof col1)[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`rounded-card border transition-all duration-200 overflow-hidden ${open ? 'border-slate-200 shadow-hairline' : 'border-slate-100'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div
          className="w-9 h-9 rounded-icon flex items-center justify-center text-white shrink-0"
          style={{ background: esp.color }}
        >
          {esp.icon}
        </div>
        <span className="font-bold text-slate-900 text-sm flex-1">{esp.nombre}</span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-slate-100">
          <div className="pt-4 pl-12">
            {esp.texto.split('\n\n').map((p, i) => (
              <p key={i} className="text-slate-500 text-sm leading-relaxed mb-3 last:mb-0">{p}</p>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-white rounded-pill px-4 py-2 hover:opacity-90 transition-opacity"
              style={{ background: esp.color }}
            >
              Agendar consulta <ArrowRight size={12} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── MAIN PAGE ──────────────────────────────────────────── */
export default function OdontologiaPage() {
  const heroRef  = useRef<HTMLElement>(null);
  const planRef  = useRef<HTMLDivElement>(null);
  const [form, setForm]     = useState({ nombre: '', correo: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  useEffect(() => {
    const run = () => {
      const anime = (window as any).anime;
      if (!anime) return;
      anime({ targets: '.odont-word', translateY: [60, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(80), easing: 'easeOutExpo' });
    };
    if ((window as any).anime) run();
    else { const t = setInterval(() => { if ((window as any).anime) { clearInterval(t); run(); } }, 50); setTimeout(() => clearInterval(t), 3000); }
  }, []);

  useEffect(() => {
    if (!planRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const anime = (window as any).anime;
        if (anime) anime({ targets: '.plan-pill', opacity: [0, 1], translateY: [20, 0], duration: 500, delay: anime.stagger(40), easing: 'easeOutExpo' });
        obs.disconnect();
      });
    }, { threshold: 0.05 });
    obs.observe(planRef.current);
    return () => obs.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.mensaje) { setStatus('err'); return; }
    setStatus('sending');
    const msg = encodeURIComponent(`Hola COLDENT! Soy ${form.nombre} (${form.correo}).\n\n${form.mensaje}`);
    setTimeout(() => { window.open(`https://wa.me/593981922078?text=${msg}`, '_blank'); setStatus('ok'); setForm({ nombre: '', correo: '', mensaje: '' }); }, 800);
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="blob blob-slow absolute top-0 right-0 w-96 h-96 bg-cyan-100 -translate-y-1/3 translate-x-1/4 opacity-40" />
        <div className="blob blob-reverse absolute bottom-0 left-0 w-80 h-80 bg-teal-100 translate-y-1/3 -translate-x-1/4 opacity-40" />

        <div className="container-custom relative z-10 max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">COLDENT — Colmed Centro Médico</span>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-4">
                {['Al cuidado', 'de tu'].map((w, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span className="odont-word inline-block" style={{ opacity: 0, transform: 'translateY(60px)' }}>{w}</span>
                  </span>
                ))}
                <span className="block overflow-hidden">
                  <span className="odont-word inline-block text-cyan-600" style={{ opacity: 0, transform: 'translateY(60px)' }}>Sonrisa</span>
                </span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-prose-tight mb-8">
                <strong className="text-slate-700">COLDENT</strong> tiene toda una línea dedicada al cuidado de tu salud bucal y la de tu familia. Contamos con los equipos más actualizados para darte el servicio que te mereces, con la mayor calidez para que te sientas como en casa.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand flex items-center gap-2">
                  <MessageCircle size={16} /> Agendar cita dental
                </a>
                <a href="tel:+5932224066" className="btn-outline flex items-center gap-2">
                  <Phone size={16} /> +593 2 224 0666
                </a>
              </div>
            </div>

            {/* Right: image + floating badge */}
            <div className="relative rounded-card-lg overflow-hidden bg-gradient-to-br from-cyan-50 to-slate-100 aspect-[4/3] flex items-center justify-center border border-slate-200">
              <div className="text-center text-slate-400">
                <Smile size={56} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm font-medium">COLDENT — Consultorio dental</p>
                <p className="text-xs mt-1 opacity-60">Edificio KENZEN, piso 8</p>
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-pill px-3 py-1.5 shadow-hairline flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Atendiendo ahora</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-cyan-600 text-white rounded-pill px-3 py-1.5 flex items-center gap-2">
                <Smile size={13} />
                <span className="text-xs font-bold">Todas las especialidades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLAIM BANNER ─── */}
      <section className="py-5 bg-cyan-600">
        <div className="container-custom max-w-page">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white text-sm font-medium">
            {[
              { icon: <Smile size={14} />, txt: 'Nuestra especialidad es cuidar de tu sonrisa' },
              { icon: <Award size={14} />, txt: 'Equipos de última generación' },
              { icon: <Clock size={14} />, txt: 'Lun–Vie 8h00–19h00' },
              { icon: <Heart size={14} />, txt: 'Todas las edades' },
            ].map((t) => (
              <span key={t.txt} className="flex items-center gap-2">
                <span className="text-cyan-200">{t.icon}</span> {t.txt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="rounded-card-lg bg-slate-50 border border-slate-100 aspect-[4/3] flex items-center justify-center text-slate-300">
              <div className="text-center">
                <Users size={44} className="mx-auto mb-2 opacity-25" />
                <p className="text-xs text-slate-400">Equipo odontológico COLDENT</p>
              </div>
            </div>
            <div>
              <span className="section-tag">¿Por qué COLDENT?</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                Nuestra especialidad es<br /><span className="text-cyan-600">cuidar de tu sonrisa</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                COLDENT tiene toda una línea que se dedica al cuidado de tu salud bucal y la de tu familia. Realizamos tratamientos de estética dental. Contamos con los equipos más actualizados para darte el servicio que te mereces.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Manejamos todas las especialidades a los mejores precios, tenemos ofertas en todos los tratamientos. Nuestros odontólogos te tratarán con la mayor calidez para que te sientas como en casa.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Award size={16} />, txt: 'Especialistas certificados' },
                  { icon: <Sparkles size={16} />, txt: 'Estética dental' },
                  { icon: <Shield size={16} />, txt: 'Equipos actualizados' },
                  { icon: <Heart size={16} />, txt: 'Precios accesibles' },
                ].map((v) => (
                  <div key={v.txt} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-7 h-7 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">{v.icon}</div>
                    {v.txt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ESPECIALIDADES ACORDEÓN ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-page">
          <div className="text-center mb-12">
            <span className="section-tag">Servicios odontológicos</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
              Conoce nuestras especialidades
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Tratamientos completos de salud y estética bucal para toda la familia, realizados por especialistas certificados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-3">
            {/* Columna izquierda */}
            <div className="space-y-3">
              {col1.map((esp, i) => <AccordionItem key={esp.id} esp={esp} defaultOpen={i === 0} />)}
            </div>
            {/* Columna derecha */}
            <div className="space-y-3">
              {col2.map((esp) => <AccordionItem key={esp.id} esp={esp} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ODONTOLOGÍA GENERAL ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Primer paso</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                Odontología<br /><span className="text-cyan-600">General</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                La odontología general es el primer paso para empezar un tratamiento dental, ya que primero se debe hacer una evaluación integral de la salud bucal de cada uno, para establecer un plan de tratamiento de todo lo necesario y hacer la respectiva derivación a los diferentes especialistas.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Sin mencionar que para seguir con los especialistas es necesario realizarse diferentes tratamientos para asegurar la salud dental como: limpieza dental, fluorización, entre otros tratamientos los cuales corresponden a odontología general.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-brand inline-flex items-center gap-2">
                <MessageCircle size={16} /> Agendar evaluación
              </a>
            </div>
            {/* Image placeholder */}
            <div className="rounded-card-lg bg-slate-50 border border-slate-100 aspect-[4/3] flex items-center justify-center text-slate-300">
              <div className="text-center">
                <Smile size={44} className="mx-auto mb-2 opacity-25" />
                <p className="text-xs text-slate-400">Consulta odontología general</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PLANES COLDENT ─── */}
      <section className="py-20 bg-slate-50">
        <div ref={planRef} className="container-custom max-w-page">
          <div className="text-center mb-12">
            <span className="section-tag">COLDENT</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
              Planes odontológicos
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Tratamientos completos al mejor precio. Todos los planes se adquieren directamente por WhatsApp.
            </p>
          </div>

          {/* Planes generales */}
          <h3 className="label-caps mb-5">Planes generales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {planesGenerales.map((plan) => (
              <PlanCard key={plan.nombre} plan={plan} />
            ))}
          </div>

          {/* Planes estéticos */}
          <h3 className="label-caps mb-5">Planes estéticos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg">
            {planesEsteticos.map((plan) => (
              <PlanCard key={plan.nombre} plan={plan} />
            ))}
          </div>

          <div className="bg-white rounded-card border border-slate-100 p-6 flex flex-col sm:flex-row items-center gap-5 shadow-hairline">
            <div className="w-12 h-12 rounded-icon bg-cyan-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle size={22} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-slate-900 text-sm">¿Tienes preguntas sobre un plan?</p>
              <p className="text-slate-500 text-xs mt-0.5">Escríbenos por WhatsApp, te respondemos de inmediato con todos los detalles.</p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-brand whitespace-nowrap flex items-center gap-2 text-sm shrink-0">
              <MessageCircle size={15} /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <div>
              <span className="section-tag">Contáctanos</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                ¡Estamos para<br /><span className="text-cyan-600">ayudarte!</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Phone size={16} />, label: 'Teléfonos', value: '+593 2 224 0666 · +593 98 192 2078' },
                  { icon: <MessageCircle size={16} />, label: 'Correo', value: 'info@colmed.com.ec' },
                  { icon: <Clock size={16} />, label: 'Horario', value: 'Lunes a viernes: 8h00 – 19h00' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="label-caps">{item.label}</p>
                      <p className="text-slate-700 text-sm font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {[
                  { name: 'FB', url: 'https://www.facebook.com/Colmed.ec' },
                  { name: 'IG', url: 'https://www.instagram.com/colmed.ecu/' },
                  { name: 'TK', url: 'https://vm.tiktok.com/ZM8EWBnpN/' },
                ].map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-cyan-600 hover:text-white transition-all">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 rounded-card-lg border border-slate-100 p-8">
              {status === 'ok' ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={48} className="mx-auto text-cyan-600 mb-4" />
                  <p className="font-bold text-slate-900 text-lg">¡Mensaje enviado!</p>
                  <p className="text-slate-500 text-sm mt-1">Te contactaremos a la brevedad.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline mt-6 text-sm">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label-caps block mb-1.5">Nombre</label>
                    <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-input border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="label-caps block mb-1.5">Correo electrónico</label>
                    <input type="email" value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-input border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="label-caps block mb-1.5">Mensaje</label>
                    <textarea rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full px-4 py-3 rounded-input border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none" />
                  </div>
                  {status === 'err' && <p className="text-red-500 text-xs">Por favor completa todos los campos.</p>}
                  <button type="submit" disabled={status === 'sending'}
                    className="btn-brand w-full flex items-center justify-center gap-2 disabled:opacity-60">
                    {status === 'sending' ? 'Enviando…' : <><Send size={15} /> Enviar</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center">
        <div className="container-custom max-w-page">
          <Smile size={40} className="mx-auto mb-4 text-cyan-200" />
          <p className="section-tag text-cyan-200 mb-3">COLDENT · Colmed Centro Médico</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Nuestra especialidad<br />es cuidar de tu sonrisa
          </h2>
          <p className="text-cyan-100 mb-8 text-lg max-w-prose-tight mx-auto">
            Av. América y Vozandes, Edificio KENZEN, piso 8 · Quito · Lun–Vie 8h00–19h00
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-black rounded-pill text-sm hover:bg-cyan-50 transition-all hover:-translate-y-0.5">
              <MessageCircle size={18} /> Agendar por WhatsApp
            </a>
            <Link href="/planes"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/60 text-white font-semibold rounded-pill text-sm hover:bg-white/10 transition-all">
              Ver planes odontológicos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
