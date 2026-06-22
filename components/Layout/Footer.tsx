'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/colmed-logo.svg"
                alt="Colmed Centro Médico"
                width={160}
                height={41}
                className="invert opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Centro de servicios integrales en salud. 10 años al cuidado de tu bienestar y el de tu familia.
            </p>
            <div className="flex gap-4 mt-5">
              {[
                { name: 'FB', url: 'https://www.facebook.com/Colmed.ec' },
                { name: 'IG', url: 'https://www.instagram.com/colmed.ecu/' },
                { name: 'TK', url: 'https://vm.tiktok.com/ZM8EWBnpN/' },
              ].map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs hover:bg-cyan-600 hover:text-white transition-all">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Servicios</p>
            <ul className="space-y-2 text-sm">
              {['Medicina General', 'Especialidades', 'Laboratorio', 'Imágenes', 'Odontología', 'Quirófano'].map((s) => (
                <li key={s}><Link href="/servicios" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Contacto</p>
            <ul className="space-y-2 text-sm">
              <li>+593 2 224 0666</li>
              <li>+593 98 192 2078</li>
              <li className="break-all">info@colmed.com.ec</li>
              <li className="leading-relaxed">Av. América y Vozandes, Edif. KENZEN, Piso 8</li>
              <li className="text-slate-500">Lun–Vie 8h00–19h00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>© 2026 Colmed Centro Médico. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacidad</Link>
            <Link href="/faqs" className="hover:text-slate-400 transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
