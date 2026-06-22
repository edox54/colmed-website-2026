# 🚀 Checklist para Despliegue - Colmedikal Website 2026

## Antes de Desplegar

- [ ] Revisar y actualizar contenido
- [ ] Cambiar URLs de desarrollo a producción
- [ ] Actualizar datos de contacto
- [ ] Agregar Google Analytics
- [ ] Verificar formularios funcionan
- [ ] Probar en diferentes navegadores
- [ ] Optimizar imágenes
- [ ] Configurar SSL/HTTPS

## Datos a Actualizar Antes de Deploy

### 1. Información de Contacto (`lib/constants.ts`)
```typescript
export const SITE_CONFIG = {
  name: 'Colmedikal',
  description: 'Tu portal de servicios médicos integral',
  url: 'https://colmed.com.ec',  // ← ACTUALIZAR
  locale: 'es-EC',
  phone: '+593 9 XXXX-XXXX',      // ← ACTUALIZAR
  email: 'info@colmed.com.ec',     // ← ACTUALIZAR
  address: 'Quito, Ecuador',       // ← ACTUALIZAR
};
```

### 2. Links de Redes Sociales (`lib/constants.ts`)
```typescript
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/colmedikal' },
  { name: 'Instagram', url: 'https://instagram.com/colmedikal' },
  // ← ACTUALIZAR CON URLS REALES
];
```

### 3. Planes y Precios
Actualiza en `lib/constants.ts` el array `PLANS` con precios reales

### 4. Equipo Médico
Actualiza en `app/directorio/page.tsx` el listado de médicos

## Pasos de Despliegue en Vercel

```bash
# 1. Conecta tu repositorio GitHub a Vercel
# (O usa Vercel CLI)

# 2. Instala Vercel CLI (si no lo tienes)
npm i -g vercel

# 3. Deploy
vercel

# 4. Configura variables de entorno si es necesario
# En Vercel Dashboard → Settings → Environment Variables
```

## Pasos de Despliegue en Netlify

```bash
# 1. Compila el proyecto
npm run build

# 2. Instala Netlify CLI
npm i -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=.next
```

## Post-Deploy Checklist

- [ ] Verificar que el sitio carga correctamente
- [ ] Probar todos los formularios
- [ ] Verificar enlaces internos funcionan
- [ ] Probar en dispositivos móviles
- [ ] Verificar Google Analytics funciona
- [ ] Verificar meta tags en redes sociales
- [ ] Probar contacto y agendamiento
- [ ] Solicitar indexación en Google Search Console

## Monitoreo Post-Deploy

- Configurar alertas de errores
- Monitorear performance
- Revisar logs de servidor
- Verificar emails de contacto
- Monitorear tráfico

## Dominios

### Apuntar dominio a Vercel
En tu registrador de dominio, actualiza los nameservers:
```
ns1.vercel.com
ns2.vercel.com
```

### O configura DNS personalizado
Si prefieres mantener tu registrador, crea registros A o CNAME apuntando a Vercel.

## SSL/HTTPS

Vercel automáticamente configura HTTPS. Si usas otro hosting:
- Usar Let's Encrypt (gratuito)
- O certificado pagado

## Performance Optimization

- Verificar Lighthouse score
- Optimizar imágenes
- Activar compresión gzip
- Cachear recursos estáticos
- Usar CDN

## Mantenimiento Continuo

- Actualizar dependencias regularmente
- Monitorear uptime
- Revisar logs de errores
- Actualizar contenido
- Responder contactos

---

**Recuerda: Prueba en staging antes de producción**
