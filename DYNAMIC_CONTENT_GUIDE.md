# Sistema de Gestión Dinámica de Proyectos y Experiencia

## 📋 Descripción

Este sistema permite agregar, editar y eliminar proyectos y experiencias desde paneles de administración separados. Los datos se almacenan en archivos JSON.

## 🗂️ Estructura de Archivos

```
src/
├── data/
│   ├── projects.json       # Almacena todos los proyectos
│   └── experiences.json    # Almacena todas las experiencias
├── pages/
│   ├── admin/
│   │   ├── projects.astro     # Panel de admin para proyectos
│   │   └── experiences.astro  # Panel de admin para experiencias
│   └── api/
│       ├── projects.ts        # API POST/DELETE para proyectos
│       └── experiences.ts     # API POST/DELETE para experiencias
└── components/
    ├── Projects.astro      # Sección de proyectos (sin formulario)
    └── Experience.astro    # Sección de experiencia (sin formulario)
```

## 🚀 Cómo Usar

### 1. Panel de Gestión de Proyectos

Accede a: **`/admin/projects`**

En este panel puedes:
- **Agregar proyectos**: Completa el formulario con:
  - Título
  - Categoría
  - Descripción
  - Link
  - Icon (Material Design Icon)
  - Tecnologías (separadas por comas)
  - Impacto (separado por comas)

- **Ver proyectos actuales**: Lista completa de todos tus proyectos
- **Eliminar proyectos**: Usa el botón rojo de eliminar en cada proyecto

### 2. Panel de Gestión de Experiencias

Accede a: **`/admin/experiences`**

En este panel puedes:
- **Agregar experiencias**: Completa el formulario con:
  - Puesto/Rol
  - Empresa
  - Período
  - Logros (separados por comas)
  - Impacto (separado por comas)
  - Icon (Material Design Icon)

- **Ver experiencias actuales**: Lista completa de todas tus experiencias
- **Eliminar experiencias**: Usa el botón rojo de eliminar en cada experiencia

## 📁 Estructura de Datos

### projects.json
```json
[
  {
    "title": "Nombre del proyecto",
    "description": "Descripción detallada",
    "technologies": ["React", "Next.js"],
    "impact": ["Impacto 1", "Impacto 2"],
    "link": "https://ejemplo.com",
    "category": "Frontend",
    "icon": "mdi:web"
  }
]
```

### experiences.json
```json
[
  {
    "role": "Desarrollador Full Stack",
    "company": "Empresa",
    "period": "Enero 2024 - Actualidad",
    "achievements": ["Logro 1", "Logro 2"],
    "impact": ["Impacto 1", "Impacto 2"],
    "icon": "mdi:code-braces-box"
  }
]
```

## 🔧 Cómo Funciona

1. **Frontend**: Paneles de administración en `/admin/projects` y `/admin/experiences`
2. **Validación**: Se valida que los campos requeridos estén completos
3. **API**: Los datos se envían por POST para crear o DELETE para eliminar
4. **Backend**: Las APIs leen/escriben en los archivos JSON
5. **UX**: Mensajes de éxito/error y recarga automática

## 🎨 Iconos Disponibles

Usa iconos de Material Design Icon (MDI). Algunos ejemplos:
- `mdi:web` - Web
- `mdi:code-braces-box` - Código
- `mdi:cellphone` - Mobile
- `mdi:database` - Base de datos
- `mdi:rocket-launch-outline` - Rocket
- `mdi:briefcase-outline` - Briefcase
- Consulta más en: https://materialdesignicons.com/

## 📝 URLs de Acceso

- **Proyectos**: `/admin/projects`
- **Experiencias**: `/admin/experiences`
- **Portfolio Principal**: `/` (sin formularios visibles)

## ⚠️ Notas Importantes

- Los archivos JSON se guardan en el servidor
- Los cambios son persistentes después de que se guarden
- Asegúrate de mantener el formato JSON válido en los archivos
- Los campos `technologies`, `achievements` e `impact` deben ser arrays de strings
- Al eliminar, se pide confirmación
- Los formularios se limpian automáticamente después de agregar un item
- La página se recarga automáticamente después de agregar o eliminar
