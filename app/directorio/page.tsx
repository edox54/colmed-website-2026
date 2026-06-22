import { Metadata } from 'next';
import { MapPin, Phone, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Directorio Médico | Colmedikal',
  description: 'Directorio de médicos especialistas disponibles',
};

export default function DirectorioPage() {
  const medicos = [
    { id: 1, nombre: 'Dr. Juan Pérez', especialidad: 'Medicina General', ubicacion: 'Centro Médico Colmedikal' },
    { id: 2, nombre: 'Dra. María González', especialidad: 'Pediatría', ubicacion: 'Centro Médico Colmedikal' },
    { id: 3, nombre: 'Dr. Carlos López', especialidad: 'Ginecología', ubicacion: 'Centro Médico Colmedikal' },
    { id: 4, nombre: 'Dr. Fernando Rodríguez', especialidad: 'Traumatología', ubicacion: 'Centro Médico Colmedikal' },
  ];

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Directorio Médico</h1>
          <p className="text-xl opacity-90">Nuestros médicos especialistas</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicos.map((medico) => (
              <div key={medico.id} className="card p-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-600">
                  <User size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">{medico.nombre}</h3>
                <p className="text-cyan-600 text-sm text-center mb-4 font-semibold">{medico.especialidad}</p>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <MapPin size={14} />
                  <span>{medico.ubicacion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
