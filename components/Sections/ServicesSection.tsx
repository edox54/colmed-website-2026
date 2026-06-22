'use client';

import { useEffect } from 'react';
import anime from 'animejs';
import { SERVICES } from '@/lib/constants';
import {
  Stethoscope,
  Ambulance,
  Hospital,
  Beaker,
  Pill,
  Smile,
} from 'lucide-react';
import Link from 'next/link';

const ICONS: Record<string, React.ReactNode> = {
  consultas: <Stethoscope size={32} />,
  emergencias: <Ambulance size={32} />,
  hospitalizacion: <Hospital size={32} />,
  laboratorio: <Beaker size={32} />,
  farmacia: <Pill size={32} />,
  dental: <Smile size={32} />,
};

export default function ServicesSection() {
  useEffect(() => {
    anime({
      targets: '.service-item',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Acceso completo a servicios médicos de calidad en toda la red
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-item card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
                {ICONS[service.id]}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>

              {service.features && (
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-slate-600 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href="/servicios"
                className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm inline-flex items-center gap-2"
              >
                Conocer más →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
