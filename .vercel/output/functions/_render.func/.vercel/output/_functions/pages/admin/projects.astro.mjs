import { V as createAstro, W as createComponent, a4 as renderComponent, ab as renderTemplate, a1 as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_IzRBvuLC.mjs';
import { $ as $$Icon } from '../../chunks/Icon_DfZcN8pB.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cxy8ifsO.mjs';
import { p as projectsData } from '../../chunks/projects_YVpFaeY-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://luisenriquegongoraek.com");
const prerender = false;
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = projectsData;
  const isAuthenticated = Astro2.cookies.get("admin_auth")?.value === "1";
  if (!isAuthenticated) {
    return Astro2.redirect("/admin/login?redirect=%2Fadmin%2Fprojects");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin - Proyectos", "showChrome": false }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">  <div class="mb-12"> <div class="flex items-center justify-between gap-4 mb-6"> <a href="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-left", "class": "w-5 h-5" })}
Volver al inicio
</a> <a href="/admin/logout" class="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:logout", "class": "w-5 h-5" })}
Cerrar sesion
</a> </div> <h1 class="text-3xl font-bold text-gray-900 mb-2 mt-8">Gestionar Proyectos</h1> <p class="text-gray-600">Agrega, edita o elimina proyectos de tu portafolio</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">  <div class="lg:col-span-1"> <div class="sticky top-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200"> <h3 class="text-2xl font-bold text-gray-900 mb-6">Agregar Proyecto</h3> <form id="projectForm" class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Título</label> <input type="text" name="title" placeholder="Título del proyecto" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label> <input type="text" name="category" placeholder="Frontend, Full Stack, etc" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label> <textarea name="description" placeholder="Descripción del proyecto" rows="3" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Link</label> <input type="url" name="link" placeholder="https://ejemplo.com" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Icon (MDI)</label> <input type="text" name="icon" placeholder="mdi:web" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Tecnologías</label> <input type="text" name="technologies" placeholder="React, Next.js, Tailwind (separadas por coma)" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Impacto</label> <input type="text" name="impact" placeholder="Impacto 1, Impacto 2 (separados por coma)" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
Agregar Proyecto
</button> </form> <div id="formMessage" class="mt-4 p-4 rounded-lg hidden text-sm"></div> </div> </div>  <div class="lg:col-span-2"> <div class="space-y-4"> <h3 class="text-2xl font-bold text-gray-900 mb-6">Proyectos Actuales (${projects.length})</h3> ${projects.length === 0 ? renderTemplate`<div class="p-8 rounded-2xl bg-white border-2 border-dashed border-gray-300 text-center"> <p class="text-gray-600">No hay proyectos aún</p> </div>` : renderTemplate`<div class="space-y-4"> ${projects.map((project, index) => renderTemplate`<div class="p-6 rounded-2xl bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow"> <div class="flex items-start justify-between gap-4"> <div class="flex-1"> <h3 class="text-lg font-bold text-gray-900">${project.title}</h3> <p class="text-sm text-gray-600 mt-1">${project.description}</p> <div class="mt-4 flex flex-wrap gap-2"> <span class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold"> ${project.category} </span> ${project.technologies.map((tech) => renderTemplate`<span class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold"> ${tech} </span>`)} </div> <div class="mt-3 text-xs text-gray-500"> <a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"> ${project.link} </a> </div> </div> <button type="button"${addAttribute(`deleteProject('${project.title}')`, "onclick")} class="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 font-semibold transition-colors shrink-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:delete", "class": "w-5 h-5 inline-block" })} </button> </div> </div>`)} </div>`} </div> </div> </div> </div> </main> ` })} `;
}, "D:/Proyectos/portfolio/src/pages/admin/projects.astro", void 0);

const $$file = "D:/Proyectos/portfolio/src/pages/admin/projects.astro";
const $$url = "/admin/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
