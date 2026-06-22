'use client';

import { useEffect } from 'react';
import anime from 'animejs';
import { TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  useEffect(() => {
    anime({
      targets: '.testimonial-card',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      delay: anime.stagger(150),
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">
            Testimonios de pacientes satisfechos con nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-slate-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
