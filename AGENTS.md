# AGENTS.md
## Cierre de procesos al terminar

- Al ejecutar una tarea, identifica y conserva los PID, sesiones, contenedores o grupos de procesos que inicies y que puedan seguir activos después de que termine el comando (por ejemplo, servidores de desarrollo, watchers, workers, túneles, tareas en segundo plano o stacks de Docker Compose).
- Antes de dar por terminada la tarea, detén de forma ordenada todo proceso o servicio que hayas iniciado para ella y confirma que ya no siga activo. Usa `try/finally`, `trap` o el mecanismo equivalente del shell para garantizar la limpieza también si el comando falla o se interrumpe.
- Para Docker Compose, detén únicamente los servicios del proyecto que iniciaste para la tarea. No uses cierres globales ni mates procesos ajenos a la tarea; si no puedes atribuir con seguridad un proceso a tu ejecución, no lo termines.
- No dejes comandos en segundo plano, sesiones persistentes ni watchers activos al entregar el trabajo. Informa si algún proceso iniciado no pudo cerrarse y deja claro cuál es y por qué.

## Proyectos del portafolio

- Cada proyecto vive en dos lugares que deben coincidir en títulos y orden: `src/components/Projects.astro` (arreglo inline `const projects = [`, con `title:` y `link:` sin comillas en la clave) y `src/data/projects.json` (arrays en una sola línea). Al agregar, quitar, renombrar o reordenar un proyecto, edita ambos en el mismo cambio.
- Todo texto nuevo en `Projects.astro` o `Experience.astro` lleva también su versión en inglés en el campo `en` de la entrada (o en el objeto `t` del componente).

## Verificación

Antes de dar un cambio por terminado, corre (cada archivo por separado; `node --test test/` falla en Windows):

```bash
node --test test/projects.test.mjs
node --test test/i18n.test.mjs
npm run build
npm run verify:seo
```
