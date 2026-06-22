'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-xl text-slate-900 hidden sm:block">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-cyan-600 transition duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="btn-primary"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-custom py-4 flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-cyan-600 transition duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
