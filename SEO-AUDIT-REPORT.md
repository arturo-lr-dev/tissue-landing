# Informe de Auditoria SEO - Tissue Therapy

**Fecha:** 31 de marzo de 2026
**Sitio:** Tissue Therapy - Masaje Profesional en Naron
**Tipo:** Landing page (single-page con navegacion hash)

---

## Resumen Ejecutivo

| Estado | Cantidad |
|--------|----------|
| OK | 8 |
| Necesita mejora | 4 |
| No implementado (critico) | 3 |

---

## 1. Metadata y Etiquetas Head

**Estado: OK con gaps menores**

| Elemento | Estado | Detalle |
|----------|--------|---------|
| Title | OK | "Tissue Therapy - Masaje Profesional en Naron" |
| Meta Description | OK | Descripcion completa en espanol |
| Keywords | OK | 7 keywords relevantes |
| Author | OK | "Tissue Therapy" |
| og:title | OK | Presente |
| og:description | OK | Presente |
| og:type | OK | "website" |
| og:locale | OK | "es_ES" |
| og:image | OK | "/og-image-min.png" (69KB optimizada) |
| og:url | FALTA | No especificado |
| Twitter Cards | FALTA | No hay twitter:card, twitter:title, twitter:description, twitter:image |
| Canonical URL | FALTA | No definida |

**Archivo:** `app/layout.tsx` (lineas 22-39)

### Recomendacion

Anadir al metadata en `app/layout.tsx`:

```typescript
twitter: {
  card: "summary_large_image",
  title: "Tissue Therapy - Masaje Profesional en Naron",
  description: "...",
  images: ["/og-image-min.png"],
},
alternates: {
  canonical: "https://tu-dominio.com",
},
openGraph: {
  // ... existente + anadir:
  url: "https://tu-dominio.com",
},
```

---

## 2. Datos Estructurados (JSON-LD)

**Estado: NO IMPLEMENTADO - CRITICO**

No se encontro ninguna implementacion de schema.org / JSON-LD en todo el proyecto.

### Schemas necesarios para un negocio local de masajes:

| Schema | Importancia | Motivo |
|--------|-------------|--------|
| LocalBusiness | CRITICA | Aparecer en Google Maps y busquedas locales |
| Service | ALTA | Rich snippets para cada tipo de masaje |
| AggregateRating | ALTA | Mostrar estrellas en resultados (ya muestran 5.0 en la UI) |
| FAQPage | MEDIA | Rich snippets de FAQ (ya existe seccion FAQ) |
| Organization | MEDIA | Identidad de marca en Google |

### Ejemplo de implementacion sugerida:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tissue Therapy",
  "description": "Masaje profesional en Naron",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Naron",
    "addressRegion": "A Coruna",
    "addressCountry": "ES"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "..."
  }
}
```

---

## 3. Sitemap

**Estado: OK**

- **Archivo:** `app/sitemap.ts`
- Genera sitemap.xml dinamico
- URL base desde variable de entorno `NEXT_PUBLIC_SITE_URL`
- Frecuencia: semanal
- Prioridad: 1.0

---

## 4. Robots.txt

**Estado: OK**

- **Archivo:** `app/robots.ts`
- Permite rastreo de `/`
- Bloquea `/api/` y `/private/`
- Referencia correcta al sitemap

---

## 5. Imagenes

**Estado: NECESITA MEJORA**

| Imagen | Alt text | Formato | Optimizacion Next.js | Problema |
|--------|----------|---------|---------------------|----------|
| Hero (hero-massage.webp) | OK | WebP | **DESACTIVADA** (`unoptimized={true}`) | No se optimiza |
| About (therapist-portrait.webp) | OK | WebP | **DESACTIVADA** (`unoptimized={true}`) | No se optimiza |
| Avatares testimonios | OK | Externo (ui-avatars.com) | N/A | Sin width/height |
| Logo (logo.png) | - | PNG | N/A | **692KB sin optimizar** |
| OG Image | - | PNG | N/A | Version mini usada (69KB) OK |

**Archivos afectados:**
- `components/sections/Hero.tsx` (linea 21): `unoptimized={true}`
- `components/sections/About.tsx` (linea 28): `unoptimized={true}`

### Recomendacion
- Eliminar `unoptimized={true}` de ambos componentes Image
- Optimizar `logo.png` (692KB -> deberia ser <50KB en WebP/SVG)
- Eliminar JPGs originales del `/public/images/` (610KB + 557KB innecesarios)

---

## 6. Jerarquia de Encabezados

**Estado: OK**

```
H1: "El arte de sanar con las manos" (Hero.tsx) - Unico por pagina
  H2: "Nuestros Servicios" (Services.tsx)
    H3: [Titulos de cada servicio]
  H2: "Por Que Elegir Tissue Therapy" (Benefits.tsx)
    H3: [Titulos de beneficios]
  H2: "Sobre Tissue Therapy" (About.tsx)
  H2: "Que es el masaje de tejido profundo?" (DeepTissueInfo.tsx)
  H2: "Como Funciona?" (Process.tsx)
    H3: [Pasos del proceso]
  H2: "Lo que dicen nuestros clientes" (Testimonials.tsx)
  H2: "Nuestras Tarifas" (Pricing.tsx)
  H2: "Preguntas Frecuentes" (FAQ.tsx)
    H3: [Preguntas individuales]
  H2: "Como Llegar" (Location.tsx)
    H3: [Direccion, Telefono, Horario]
  H2: "Listo para recuperar tu bienestar?" (CTA.tsx)
```

Jerarquia correcta: 1x H1, multiples H2 por seccion, H3 para subsecciones.

---

## 7. Enlaces

**Estado: OK**

| Tipo | Atributos | Estado |
|------|-----------|--------|
| Instagram (Footer) | `rel="noopener noreferrer"` `target="_blank"` | OK |
| Facebook (Footer) | `rel="noopener noreferrer"` `target="_blank"` | OK |
| WhatsApp (boton flotante) | `rel="noopener noreferrer"` `target="_blank"` | OK |
| WhatsApp (Header) | `rel="noopener noreferrer"` | OK |
| WhatsApp (CTA) | `rel="noopener noreferrer"` | OK |
| Google Maps (iframe) | `referrerPolicy="no-referrer-when-downgrade"` | OK |
| Navegacion interna | Links con hash (#servicios, etc.) | OK |

---

## 8. Rendimiento

**Estado: NECESITA MEJORA**

### Puntos positivos
- Fuentes Google con `display: "swap"` (no bloquean renderizado)
- Google Maps iframe con `loading="lazy"`
- Imagen Hero con `priority={true}`
- Subsets de fuentes limitados a "latin"

### Puntos de mejora

| Problema | Impacto | Ubicacion |
|----------|---------|-----------|
| `unoptimized={true}` en imagenes | Alto - desactiva optimizacion | Hero.tsx, About.tsx |
| Framer Motion (12.23.26) | Medio - bundle grande | Multiples componentes |
| Lucide React completo | Bajo-Medio - carga iconos no usados | Multiples componentes |
| Animaciones scroll no respetan `prefers-reduced-motion` | Bajo | FadeIn.tsx |
| logo.png sin optimizar (692KB) | Medio | /public/images/ |

---

## 9. Idioma e Internacionalizacion

**Estado: OK**

- `<html lang="es">` correctamente configurado (`app/layout.tsx`, linea 47)
- `og:locale: "es_ES"` en Open Graph
- Contenido consistente en espanol
- No se necesitan etiquetas hreflang (sitio monolingue)

---

## 10. Favicon e Iconos

**Estado: OK (manifest incompleto)**

| Archivo | Estado |
|---------|--------|
| favicon.ico | OK (15KB) |
| apple-touch-icon.png | OK (24KB) |
| android-chrome-192x192.png | OK (27KB) |
| android-chrome-512x512.png | OK (143KB) |
| favicon-16x16.png | OK |
| favicon-32x32.png | OK |
| site.webmanifest | **INCOMPLETO** |

### Problema en site.webmanifest

El archivo actual tiene `name` y `short_name` vacios:
```json
{ "name": "", "short_name": "", "icons": [...] }
```

Deberia ser:
```json
{
  "name": "Tissue Therapy",
  "short_name": "Tissue",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "icons": [...]
}
```

---

## 11. Pagina 404

**Estado: NO IMPLEMENTADO**

No existe `app/not-found.tsx` ni `app/error.tsx`.

Aunque es una SPA con navegacion hash, es buena practica tener una pagina 404 personalizada para URLs invalidas.

---

## 12. Cabeceras de Seguridad

**Estado: NO IMPLEMENTADO**

El archivo `next.config.ts` no tiene configuracion de headers.

### Headers recomendados para anadir:

```typescript
// next.config.ts
headers: async () => [{
  source: "/:path*",
  headers: [
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-XSS-Protection", value: "1; mode=block" },
    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  ],
}]
```

---

## 13. Analytics y Search Console

**Estado: NO IMPLEMENTADO - CRITICO**

| Herramienta | Estado |
|-------------|--------|
| Google Analytics 4 | NO |
| Google Search Console | NO (sin meta de verificacion) |
| Google Tag Manager | NO |

**Sin analytics no se puede:**
- Medir el trafico del sitio
- Analizar el comportamiento del usuario
- Monitorizar Core Web Vitals
- Verificar indexacion en Google

---

## 14. Accesibilidad (impacto SEO)

**Estado: PARCIAL**

### Implementado
- ARIA labels en botones (menu, WhatsApp, redes sociales, scroll)
- HTML semantico (`<header>`, `<footer>`, `<main>`, `<section>`, `<nav>`)
- Jerarquia de encabezados correcta
- Alt text en imagenes

### Falta
- **Skip-to-content link** para navegacion con teclado
- **`prefers-reduced-motion`** no respetado en animaciones Framer Motion
- No hay focus styles visibles personalizados (depende de defaults del navegador)

---

## 15. Estructura de URLs

**Estado: OK**

- URL raiz limpia: `/`
- Anchors descriptivos en espanol: `#servicios`, `#beneficios`, `#sobre-nosotros`, `#precios`, `#faq`, `#contacto`
- Sin parametros de tracking ni query strings
- Estructura simple y clara para SPA

---

## Priorizacion de Mejoras

### Prioridad CRITICA (impacto SEO alto)
1. **Anadir JSON-LD / Datos Estructurados** - LocalBusiness, Service, AggregateRating, FAQPage
2. **Configurar Google Analytics 4 + Search Console** - Sin esto no hay visibilidad
3. **Anadir Twitter Cards** al metadata

### Prioridad ALTA (impacto medio-alto)
4. **Eliminar `unoptimized={true}`** de componentes Image
5. **Optimizar logo.png** (692KB es excesivo)
6. **Anadir canonical URL** y og:url
7. **Completar site.webmanifest** con nombre y colores

### Prioridad MEDIA (mejora incremental)
8. **Anadir cabeceras de seguridad** en next.config.ts
9. **Crear pagina 404 personalizada**
10. **Anadir skip-to-content link**
11. **Soportar prefers-reduced-motion** en animaciones

### Prioridad BAJA (optimizacion fina)
12. Eliminar JPGs originales innecesarios de /public/images/
13. Evaluar tree-shaking de Lucide React
14. Considerar paginas separadas para servicios (SEO a largo plazo)

---

## Checklist Rapido

- [x] Title tag
- [x] Meta description
- [x] Keywords
- [x] Open Graph basico
- [ ] Twitter Cards
- [ ] Canonical URL
- [ ] og:url
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Lang attribute (es)
- [x] Heading hierarchy (H1 unico)
- [x] Alt text en imagenes
- [ ] Imagenes optimizadas (unoptimized=true activo)
- [x] Enlaces externos seguros (rel attributes)
- [x] Fuentes optimizadas (display swap)
- [x] Favicon completo
- [ ] Web manifest completo
- [ ] JSON-LD / Datos estructurados
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Cabeceras de seguridad
- [ ] Pagina 404 personalizada
- [ ] Skip-to-content link
- [ ] prefers-reduced-motion
