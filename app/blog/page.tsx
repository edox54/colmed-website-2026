import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Colmedikal',
  description: 'Artículos y noticias sobre salud',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      titulo: '10 Consejos para una Vida Saludable',
      excerpt: 'Descubre las mejores prácticas para mantener tu salud en óptimas condiciones.',
      fecha: '2024-06-05',
      categoria: 'Salud',
    },
    {
      id: 2,
      titulo: 'Importancia de los Chequeos Médicos Regulares',
      excerpt: 'Prevención es la mejor medicina. Realiza tus chequeos regularmente.',
      fecha: '2024-06-01',
      categoria: 'Prevención',
    },
    {
      id: 3,
      titulo: 'Nutrición: Claves para una Buena Alimentación',
      excerpt: 'Aprende cómo una dieta balanceada impacta tu bienestar.',
      fecha: '2024-05-28',
      categoria: 'Nutrición',
    },
  ];

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Blog Colmedikal</h1>
          <p className="text-xl opacity-90">Artículos sobre salud y bienestar</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      {post.categoria}
                    </span>
                    <span className="text-xs text-slate-600">{new Date(post.fecha).toLocaleDateString('es-ES')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{post.titulo}</h3>
                  <p className="text-slate-600 mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-cyan-600 hover:text-cyan-700 font-semibold">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
