import { Metadata } from 'next';
import { FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trámites Online | Colmedikal',
  description: 'Realiza trámites online de forma rápida y segura',
};

export default function TramitesPage() {
  const tramites = [
    { id: 1, nombre: 'Afiliación', descripcion: 'Afíliate al plan de tu preferencia' },
    { id: 2, nombre: 'Cambio de Plan', descripcion: 'Cambiar de plan médico' },
    { id: 3, nombre: 'Solicitud de Autorización', descripcion: 'Autorizar procedimientos especiales' },
    { id: 4, nombre: 'Comprobante de Afiliación', descripcion: 'Descargar tu comprobante de afiliación' },
    { id: 5, nombre: 'Reporte de Siniestro', descripcion: 'Reportar un siniestro médico' },
    { id: 6, nombre: 'Cambio de Beneficiarios', descripcion: 'Modificar información de beneficiarios' },
  ];

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Trámites Online</h1>
          <p className="text-xl opacity-90">Gestiona todo desde la comodidad de tu hogar</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tramites.map((tramite) => (
              <div key={tramite.id} className="card p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 text-cyan-600">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{tramite.nombre}</h3>
                <p className="text-slate-600 mb-6">{tramite.descripcion}</p>
                <button className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-2">
                  Iniciar <CheckCircle size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
