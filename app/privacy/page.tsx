import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Colmedikal',
  description: 'Conoce nuestros términos y condiciones',
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Política de Privacidad</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="card p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Recopilación de Datos</h2>
              <p className="text-slate-600">
                Colmedikal recopila información personal cuando te registras, realizas transacciones o te comunicas con nosotros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso de la Información</h2>
              <p className="text-slate-600">
                Utilizamos tu información para procesar solicitudes, mejorar nuestros servicios y garantizar tu seguridad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Protección de Datos</h2>
              <p className="text-slate-600">
                Implementamos medidas de seguridad estrictas para proteger tus datos personales contra acceso no autorizado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Derechos del Usuario</h2>
              <p className="text-slate-600">
                Tienes derecho a acceder, modificar o eliminar tu información personal en cualquier momento.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <p className="text-slate-600">
                Para más información o inquietudes sobre privacidad, contáctanos a info@colmed.com.ec
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
