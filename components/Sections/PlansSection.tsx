'use client';

import { useEffect } from 'react';
import anime from 'animejs';
import { PLANS } from '@/lib/constants';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PlansSection() {
  useEffect(() => {
    anime({
      targets: '.plan-card',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutQuad',
    });

    anime({
      targets: '.plan-card:hover',
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Nuestros Planes</h2>
          <p className="section-subtitle">
            Elige el plan que mejor se adapte a tus necesidades y la de tu familia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <div
              key={plan.id}
              className="plan-card card relative overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {index === 1 && (
                <div className="absolute top-0 left-0 right-0 bg-cyan-600 text-white py-2 text-center text-sm font-semibold">
                  ⭐ MÁS POPULAR
                </div>
              )}

              <div className={`pt-8 pb-4 px-6 ${index === 1 ? 'mt-8' : ''}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6">{plan.tagline}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-slate-900">
                    ${plan.basePrice}
                    <span className="text-lg text-slate-600">/mes</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-2">
                    Cobertura hasta: ${plan.maxCoverage.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contacto"
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 block text-center ${
                    index === 1
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                  }`}
                >
                  Solicitar Información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
