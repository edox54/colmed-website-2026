'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Phone, ChevronDown, ChevronRight,
  Microscope, Smile, Stethoscope, Heart,
  FlaskConical, Baby, Shield, MapPin, Calendar,
  MessageCircle, Users, Zap, Clock,
} from 'lucide-react';

const WA = 'https://wa.me/message/WKF5BKS2WPY3K1';

const TICKER = [
  '📍 Edificio KENZEN piso 8 · Av. América y Vozandes',
  '⏰ Lun–Vie 8h00–19h00 · Sáb 9h00–13h00',
  '📞 +593 2 224 0666',
  '💬 WhatsApp disponible ahora',
];

/* ── MEGA MENU DATA ─────────────────────────────────────── */
const SERVICIOS_COLS = [
  {
    titulo: 'Atención médica',
    items: [
      { name: 'Medicina General', href: '/especialidades', icon: <Stethoscope size={14} /> },
      { name: 'Pediatría', href: '/especialidades', icon: <Baby size={14} /> },
      { name: 'Ginecología', href: '/especialidades', icon: <Heart size={14} /> },
      { name: 'Traumatología', href: '/especialidades', icon: <Shield size={14} /> },
    ],
  },
  {
    titulo: 'Diagnóstico',
    items: [
      { name: 'Laboratorio Clínico', href: '/laboratorio', icon: <Microscope size={14} /> },
      { name: 'Imágenes Médicas', href: '/especialidades', icon: <FlaskConical size={14} /> },
      { name: 'Odontología COLDENT', href: '/odontologia', icon: <Smile size={14} /> },
      { name: 'Ver todo', href: '/especialidades', icon: <ChevronRight size={14} /> },
    ],
  },
  {
    titulo: 'Destacado',
    highlight: true,
    cta: {
      titulo: 'Planes preventivos',
      desc: '36 planes para toda la familia desde $12/mes',
      href: '/planes',
      icon: <Heart size={20} />,
    },
  },
];

const PLANES_ITEMS = [
  { name: 'Todos los planes', href: '/planes', icon: <Heart size={14} />, desc: '36 planes preventivos' },
  { name: 'Planes COLDENT', href: '/odontologia', icon: <Smile size={14} />, desc: '13 planes odontológicos' },
];

/* ── MOBILE TICKER ──────────────────────────────────────── */
function MobileTicker() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => { setIdx((i) => (i + 1) % TICKER.length); setFade(true); }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden bg-cyan-600 text-white text-xs py-1.5 text-center overflow-hidden">
      <span className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {TICKER[idx]}
      </span>
    </div>
  );
}

/* ── MEGA MENU ──────────────────────────────────────────── */
function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-card-lg border border-slate-100 shadow-card py-4 z-50">
      <div className="absolute -top-1.5 left-16 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
      <div className="grid grid-cols-3 gap-0 divide-x divide-slate-100">
        {SERVICIOS_COLS.map((col, ci) => (
          <div key={ci} className="px-4">
            {col.highlight && col.cta ? (
              <div className="h-full flex flex-col justify-center">
                <p className="label-caps mb-3">{col.titulo}</p>
                <Link href={col.cta.href} onClick={onClose}
                  className="group block bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200 rounded-card p-4 hover:border-cyan-400 hover:shadow-hairline transition-all">
                  <div className="w-10 h-10 rounded-icon bg-cyan-600 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {col.cta.icon}
                  </div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{col.cta.titulo}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{col.cta.desc}</p>
                </Link>
              </div>
            ) : (
              <>
                <p className="label-caps mb-2">{col.titulo}</p>
                <ul className="space-y-0.5">
                  {col.items!.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} onClick={onClose}
                        className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-colors group">
                        <span className="text-slate-400 group-hover:text-cyan-500 transition-colors">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SMALL DROPDOWN ─────────────────────────────────────── */
function SmallDropdown({ items, onClose }: { items: typeof PLANES_ITEMS; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-card-lg border border-slate-100 shadow-card py-2 z-50">
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
      {items.map((item) => (
        <Link key={item.name} href={item.href} onClick={onClose}
          className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
          <div className="w-7 h-7 rounded-icon bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all">
            {item.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">{item.name}</p>
            <p className="text-xs text-slate-400">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ── MAIN HEADER ────────────────────────────────────────── */
export default function PremiumHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); setMobileOpen(null); }, [pathname]);

  const openMenu = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const keepOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const isActive = (href: string) => href !== '#' && (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <MobileTicker />
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 backdrop-blur-md shadow-hairline' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        {/* Desktop top bar */}
        <div className="hidden md:block border-b border-slate-100">
          <div className="container-custom max-w-page flex justify-between items-center h-8 text-[11px] text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><MapPin size={11} className="text-cyan-600" /> Av. América y Vozandes · Edificio KENZEN piso 8 · Quito</span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1"><Clock size={11} className="text-cyan-600" /> Lun–Vie 8h00–19h00 · Sáb 9h00–13h00</span>
            </div>
            <a href="tel:+5932224066" className="flex items-center gap-1.5 font-semibold hover:text-cyan-600 transition-colors">
              <Phone size={11} /> +593 2 224 0666
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="container-custom max-w-page flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/colmed-logo.svg" alt="Colmed Centro Médico"
              className={`h-12 w-auto transition-all duration-300 hover:opacity-90 ${scrolled ? 'scale-95' : 'scale-100'}`} />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Inicio */}
            <Link href="/"
              className={`text-sm font-medium transition-colors relative group ${isActive('/') ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`}>
              Inicio
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-cyan-500 rounded-full transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            {/* Servicios mega */}
            <div className="relative"
              onMouseEnter={() => openMenu('servicios')}
              onMouseLeave={closeMenu}>
              <button
                onMouseEnter={() => openMenu('servicios')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeMenu === 'servicios' ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`}>
                Servicios <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === 'servicios' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'servicios' && (
                <div onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                  <MegaMenu onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </div>

            {/* Planes dropdown */}
            <div className="relative"
              onMouseEnter={() => openMenu('planes')}
              onMouseLeave={closeMenu}>
              <Link href="/planes"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive('/planes') ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`}>
                Planes <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === 'planes' ? 'rotate-180' : ''}`} />
              </Link>
              {activeMenu === 'planes' && (
                <div onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                  <SmallDropdown items={PLANES_ITEMS} onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </div>

            {/* Nosotros */}
            <Link href="/nosotros"
              className={`text-sm font-medium transition-colors relative group ${isActive('/nosotros') ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`}>
              Nosotros
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-cyan-500 rounded-full transition-all duration-300 ${isActive('/nosotros') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            {/* Contacto */}
            <Link href="/contacto"
              className={`text-sm font-medium transition-colors relative group ${isActive('/contacto') ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`}>
              Contacto
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-cyan-500 rounded-full transition-all duration-300 ${isActive('/contacto') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 border border-emerald-200 hover:border-emerald-400 rounded-pill px-3 py-2 transition-all">
              <MessageCircle size={13} /> WhatsApp
            </a>
            <Link href="/agendamiento"
              className="flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 bg-cyan-600 text-white rounded-pill hover:bg-cyan-700 transition-all shadow-hairline hover:shadow-lift">
              <Calendar size={14} /> Agendar cita
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menú"
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer — OUTSIDE header to avoid backdrop-filter containing block bug */}
      {isOpen && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/40 z-[60]" onClick={() => setIsOpen(false)} />
          <div className="lg:hidden fixed inset-0 bg-white z-[70] overflow-y-auto flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 shrink-0">
              <img src="/colmed-logo.svg" alt="Colmed" className="h-10 w-auto" />
              <button onClick={() => setIsOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Contacto', href: '/contacto' },
              ].map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive(item.href) ? 'bg-cyan-50 text-cyan-600' : 'text-slate-700 hover:bg-slate-50'}`}>
                  {item.name}
                </Link>
              ))}

              {/* Servicios accordion */}
              <div>
                <button onClick={() => setMobileOpen(mobileOpen === 'servicios' ? null : 'servicios')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                  Servicios <ChevronDown size={15} className={`transition-transform ${mobileOpen === 'servicios' ? 'rotate-180' : ''}`} />
                </button>
                {mobileOpen === 'servicios' && (
                  <div className="ml-4 pl-3 border-l-2 border-cyan-100 space-y-0.5 mt-1 mb-2">
                    {SERVICIOS_COLS.flatMap((c) => c.items ?? []).map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors">
                        <span className="text-cyan-500">{item.icon}</span> {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Planes accordion */}
              <div>
                <button onClick={() => setMobileOpen(mobileOpen === 'planes' ? null : 'planes')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                  Planes <ChevronDown size={15} className={`transition-transform ${mobileOpen === 'planes' ? 'rotate-180' : ''}`} />
                </button>
                {mobileOpen === 'planes' && (
                  <div className="ml-4 pl-3 border-l-2 border-cyan-100 space-y-0.5 mt-1 mb-2">
                    {PLANES_ITEMS.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors">
                        <span className="text-cyan-500">{item.icon}</span> {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile bottom CTAs */}
              <div className="shrink-0 px-4 pb-6 pt-4 border-t border-slate-100 space-y-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-500 text-white font-bold rounded-pill text-sm hover:bg-emerald-600 transition-colors">
                  <MessageCircle size={17} /> Escribir por WhatsApp
                </a>
                <Link href="/agendamiento" onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-cyan-600 text-white font-bold rounded-pill text-sm hover:bg-cyan-700 transition-colors">
                  <Calendar size={17} /> Agendar cita
                </Link>
                <div className="text-center text-xs text-slate-400 pt-1">
                  +593 2 224 0666 · info@colmed.com.ec
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}
