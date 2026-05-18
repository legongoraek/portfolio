# Portafolio Luis Enrique Góngora Ek

Portafolio profesional moderno construido con Astro, Tailwind CSS y deployado en Vercel.

## Características

- **Ultra rápido** - Astro con optimizaciones de rendimiento
- **Diseño moderno** - Tailwind CSS + Paleta azul profesional
- **Dark mode** - Toggle de tema claro/oscuro
- **Responsive** - Perfecto en móvil, tablet y desktop
- **SEO optimizado** - Meta tags, Open Graph, Sitemap
- **Accesible** - WCAG compliant
- **Animaciones suaves** - Fade-in, slide-up, scale-in

## Stack Tecnológico

- **Framework**: Astro
- **Estilos**: Tailwind CSS
- **Hosting**: Vercel
- **Analíticas**: Google Analytics
- **Versionamiento**: Git + GitHub

## Instalación Local

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/legongoraek/portafolio-astro.git
cd portafolio-astro
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Editar Contenido

### Actualizar información personal
- **Hero**: `src/components/Hero.astro`
- **Stack**: `src/components/TechStack.astro`
- **Proyectos**: `src/components/Projects.astro`
- **Experiencia**: `src/components/Experience.astro`
- **Contacto**: `src/components/Contact.astro`

### Cambiar colores
Edita `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    600: '#0057B8',  // Cambiar aquí
    700: '#003D82',
    // ...
  }
}
```

## 🚀 Deployment en Vercel

### Opción 1: Conexión con GitHub (Recomendado)

1. **Subir código a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/legongoraek/portafolio-astro.git
git push -u origin main
```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Selecciona tu repositorio de GitHub
   - Framework: Astro (detectado automáticamente)
   - Click "Deploy"

3. **Configurar dominio personalizado** (opcional)
   - En Vercel: Settings > Domains
   - Agrega tu dominio personalizado

### Opción 2: Deploy directo

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones del CLI.

## Optimizaciones de rendimiento

- Astro Island Architecture (carga mínima de JS)
- Lazy loading de imágenes
- CSS purificado (solo lo necesario)
- Animaciones solo en CSS (no JS)
- Compresión de assets

### Verificar performance
```bash
npm run build
npm run preview
```

Luego abre Chrome DevTools > Lighthouse

## Analíticas

El sitio incluye Google Analytics. Para cambiar el ID:

`src/layouts/Layout.astro`:
```astro
<!-- Cambiar ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

## Estructura del proyecto

```
src/
├── components/        # Componentes reutilizables
│   ├── Navigation.astro
│   ├── Hero.astro
│   ├── TechStack.astro
│   ├── Projects.astro
│   ├── Experience.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/          # Layouts principales
│   └── Layout.astro
├── pages/            # Páginas (rutas)
│   └── index.astro
└── styles/           # Estilos globales
    └── global.css
```

## Scripts disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Limpiar cache
npm run astro -- --verbose
```

## Personalización

### Cambiar paleta de colores
En `tailwind.config.mjs`, actualiza `theme.colors.primary`

### Agregar nuevas secciones
1. Crea un nuevo archivo en `src/components/`
2. Importa en `src/pages/index.astro`
3. Agrega el link en `Navigation.astro`

### Cambiar tipografía
En `tailwind.config.mjs`:
```javascript
fontFamily: {
  sans: ['Tu-Fuente', 'system-ui'],
}
```

## Troubleshooting

### El sitio no carga
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Cambios no se reflejan
- Limpia el cache del navegador (Ctrl+Shift+Del)
- Reinicia el servidor: Ctrl+C, luego `npm run dev`

### Error de build
```bash
npm run build -- --verbose
```

## Documentación útil

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## Licencia

Este proyecto es código abierto y está disponible bajo la licencia MIT.

## Mejoras futuras

- [ ] Agregar blog/articulos
- [ ] Formulario de contacto funcional
- [ ] Versión en inglés automática
- [ ] API de proyectos dinámicos
- [ ] Modo offline PWA

---

**¿Necesitas ayuda?** Contáctame en [enriquegongora45@gmail.com](mailto:enriquegongora45@gmail.com)