# 🏥 Colmedikal Website 2026

Sitio web profesional de Colmedikal con diseño moderno, animaciones fluidas y cobertura completa de servicios médicos.

## 🚀 Características

- ✨ **Diseño Moderno** - Interfaz limpia y profesional con Tailwind CSS
- 🎬 **Animaciones Fluidas** - Implementadas con Anime.js
- 📱 **Responsive** - Optimizado para todos los dispositivos
- ⚡ **Rendimiento** - Construcción optimizada con Next.js
- 🔍 **SEO** - Metadatos y estructura SEO amigable
- 📝 **Múltiples Páginas** - Home, Servicios, Contacto, Blog, Agendamiento, y más

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 3.4
- **Animations**: Anime.js
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## 📋 Páginas Incluidas

1. **Home** (`/`) - Página principal con hero, planes, servicios y testimonios
2. **Servicios** (`/servicios`) - Detalle de servicios médicos
3. **Directorio Médico** (`/directorio`) - Listado de especialistas
4. **Trámites** (`/tramites`) - Servicios disponibles online
5. **Agendamiento** (`/agendamiento`) - Formulario de citas
6. **Blog** (`/blog`) - Artículos de salud
7. **FAQs** (`/faqs`) - Preguntas frecuentes
8. **Nosotros** (`/nosotros`) - Información de la empresa
9. **Contacto** (`/contacto`) - Formulario de contacto
10. **Privacy** (`/privacy`) - Política de privacidad

## 🚀 Primeros Pasos

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# 1. Navega al directorio del proyecto
cd colmed-website-2026

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Compilación para producción
npm run build

# Ejecutar versión compilada
npm start

# Verificación de tipos TypeScript
npm run type-check

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
colmed-website-2026/
├── app/                    # Páginas y layout de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home
│   ├── servicios/
│   ├── contacto/
│   ├── agendamiento/
│   ├── directorio/
│   ├── tramites/
│   ├── blog/
│   ├── faqs/
│   ├── nosotros/
│   └── privacy/
├── components/            # Componentes React
│   ├── Layout/           # Header, Footer
│   └── Sections/         # Secciones (Hero, Plans, Services, etc.)
├── lib/                  # Funciones y utilidades
│   ├── constants.ts      # Datos constantes
│   └── hooks/
├── types/                # Definiciones TypeScript
├── styles/               # Estilos globales
├── public/               # Assets estáticos
├── tailwind.config.ts    # Configuración Tailwind
├── tsconfig.json         # Configuración TypeScript
└── next.config.js        # Configuración Next.js
```

## 🎨 Personalización

### Colores Primarios

Los colores de Colmedikal están definidos en `tailwind.config.ts`:

```typescript
colmedikal: {
  primary: '#0891b2',   // Cyan
  secondary: '#06b6d4',  // Cyan claro
  accent: '#10b981',     // Emerald
}
```

### Contenido

Los datos como planes, servicios y testimonios se encuentran en:
- `lib/constants.ts` - Todos los datos estáticos

### Datos de Contacto

Actualiza el archivo `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  phone: '+593 9 XXXX-XXXX',
  email: 'info@colmed.com.ec',
  address: 'Quito, Ecuador',
}
```

## 🎬 Animaciones

El proyecto utiliza **Anime.js** para animaciones fluidas:

- Hero section con fade-in y slide
- Cards con stagger animation
- Elementos flotantes con movimiento continuo
- CTAs con transiciones suaves

## 📱 Responsive Design

Breakpoints de Tailwind:
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

Todas las páginas son completamente responsivas.

## 🔐 SEO

- Metadatos dinámicos con Next.js Metadata API
- Open Graph tags
- Estructura semántica HTML
- Sitemap automático

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Otros Hosting

```bash
# Build para producción
npm run build

# Ejecuta el servidor
npm start
```

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Anime.js](https://animejs.com)
- [Lucide React Icons](https://lucide.dev)

## 🤝 Contribuciones

Para actualizar contenido o agregar nuevas páginas:

1. Crea una rama feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios
3. Commit: `git commit -m "Agregar nueva funcionalidad"`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📝 Licencia

© 2026 Colmedikal. Todos los derechos reservados.

## ✉️ Soporte

Para soporte técnico o preguntas:
- Email: info@colmed.com.ec
- Teléfono: +593 9 XXXX-XXXX

---

**Desarrollado con ❤️ usando Next.js, Tailwind CSS y Anime.js**
