'use client';

import Link from 'next/link';
import { MessageCircle, Calendar, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* ── DESKTOP: vertical rail right side ── */}
      <div className="hidden md:flex fixed right-5 bottom-8 z-40 flex-col gap-3 items-center">
        {/* WhatsApp with pulsing aura */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 scale-110" />
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Charla por WhatsApp"
            className="relative w-12 h-12 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lift hover:shadow-card transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle size={22} />
          </a>
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp
          </span>
        </div>

        {/* Agendar */}
        <div className="relative group">
          <Link
            href="/agendamiento"
            aria-label="Agendar cita"
            className={`w-12 h-12 flex items-center justify-center text-white rounded-full shadow-lift hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 ${isActive('/agendamiento') ? 'bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700'}`}
          >
            <Calendar size={20} />
          </Link>
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Agendar cita
          </span>
        </div>

        {/* Teléfono */}
        <div className="relative group">
          <a
            href="tel:+5932224066"
            aria-label="Llamar"
            className="w-12 h-12 flex items-center justify-center bg-slate-700 hover:bg-slate-800 text-white rounded-full shadow-lift hover:shadow-card transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone size={18} />
          </a>
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            +593 2 224 0666
          </span>
        </div>
      </div>

      {/* ── MOBILE: horizontal dock bottom center ── */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div
          className="flex items-center divide-x divide-white/20 rounded-2xl shadow-card overflow-hidden"
          style={{ background: '#0C4169' }}
        >
          {/* WhatsApp */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="relative flex flex-col items-center justify-center w-24 py-3 text-white hover:brightness-110 transition-all active:scale-95"
          >
            <span className="absolute top-2 right-5 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute top-2 right-5 w-2 h-2 bg-emerald-400 rounded-full" />
            <MessageCircle size={20} />
            <span className="text-[10px] font-semibold mt-1 opacity-90">WhatsApp</span>
          </a>

          {/* Agendar */}
          <Link
            href="/agendamiento"
            aria-label="Agendar"
            className={`flex flex-col items-center justify-center w-24 py-3 text-white hover:brightness-110 transition-all active:scale-95 ${isActive('/agendamiento') ? 'brightness-125' : ''}`}
          >
            <Calendar size={20} />
            <span className="text-[10px] font-semibold mt-1 opacity-90">Agendar</span>
          </Link>

          {/* Teléfono */}
          <a
            href="tel:+5932224066"
            aria-label="Llamar"
            className="flex flex-col items-center justify-center w-24 py-3 text-white hover:brightness-110 transition-all active:scale-95"
          >
            <Phone size={20} />
            <span className="text-[10px] font-semibold mt-1 opacity-90">Llamar</span>
          </a>
        </div>
      </div>
    </>
  );
}
