'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import anime from 'animejs';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    // Anime.js animations
    anime.timeline()
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad',
      })
      .add(
        {
          targets: '.hero-subtitle',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          easing: 'easeOutQuad',
        },
        '-=600'
      )
      .add(
        {
          targets: '.hero-cta',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          easing: 'easeOutQuad',
        },
        '-=600'
      )
      .add(
        {
          targets: '.hero-features li',
          opacity: [0, 1],
          translateX: [-20, 0],
          duration: 600,
          delay: anime.stagger(100),
          easing: 'easeOutQuad',
        },
        '-=400'
      );

    // Float animation for background elements
    anime({
      targets: '.float-element',
      translateY: [-20, 20],
      duration: 3000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-element"></div>
      <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-element"></div>

      <div className="container-custom z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="hero-title section-title leading-tight">
            Tu salud es nuestra{' '}
            <span className="text-cyan-600">prioridad</span>
          </h1>

          <p className="hero-subtitle section-subtitle text-slate-600">
            Acceso integral a servicios médicos de calidad con planes
            accesibles y cobertura en toda la red hospitalaria ecuatoriana.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <Link href="/servicios" className="btn-primary inline-flex items-center justify-center gap-2">
              Explorar Servicios
              <ArrowRight size={20} />
            </Link>
            <Link href="/contacto" className="btn-secondary inline-flex items-center justify-center">
              Obtener Cotización
            </Link>
          </div>

          <ul className="hero-features space-y-4 pt-4">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <Heart size={16} className="text-cyan-600" />
              </div>
              <span className="text-slate-700 font-medium">Cobertura médica completa</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <Shield size={16} className="text-cyan-600" />
              </div>
              <span className="text-slate-700 font-medium">Planes seguros y protegidos</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <Users size={16} className="text-cyan-600" />
              </div>
              <span className="text-slate-700 font-medium">Atención personalizada</span>
            </li>
          </ul>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 lg:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl shadow-2xl float-element"></div>
          <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={48} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                +50,000
              </h3>
              <p className="text-slate-600">Pacientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
