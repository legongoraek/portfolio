import { Q as createAstro, T as createComponent, a0 as renderComponent, a7 as renderTemplate, _ as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_-LkitC-W.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../../chunks/Icon_Bmu1_G8v.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CwmwB1GU.mjs';
export { renderers } from '../../renderers.mjs';

const projectsData = [
	{
		title: "Fidelyt – Plataforma de Fidelización",
		description: "Plataforma completa de fidelización para negocios con backend escalable, aplicaciones web y apps móviles.",
		technologies: [
			"Django",
			"PostgreSQL",
			"React",
			"React Native"
		],
		impact: [
			"Backend escalable",
			"APIs REST seguras",
			"Autenticación JWT"
		],
		link: "https://app.fidelyt.com",
		category: "Full Stack",
		icon: "mdi:gift-outline"
	},
	{
		title: "Fidelyt – Sitio Web",
		description: "Sitio web corporativo optimizado para conversión y posicionamiento SEO, construido con tecnologías modernas.",
		technologies: [
			"React",
			"Next.js",
			"Tailwind CSS"
		],
		impact: [
			"SEO optimizado",
			"Performance excelente",
			"Conversión mejorada"
		],
		link: "https://fidelyt.com",
		category: "Frontend",
		icon: "mdi:web"
	},
	{
		title: "Horizonte Inmobiliario",
		description: "Plataforma inmobiliaria con integración directa a sistemas de gestión de propiedades con sincronización automática.",
		technologies: [
			"WordPress",
			"PHP",
			"APIs externas"
		],
		impact: [
			"Integración EasyBroker",
			"Sincronización automática",
			"Gestión eficiente"
		],
		link: "https://horizonteinmobiliario.com",
		category: "WordPress",
		icon: "mdi:home-city-outline"
	},
	{
		title: "Fidelyt – App iOS & Android",
		description: "Aplicación móvil multiplataforma para usuarios del sistema de fidelización con interfaz intuitiva.",
		technologies: [
			"React Native",
			"Expo",
			"APIs REST"
		],
		impact: [
			"iOS & Android",
			"UX optimizada",
			"Performance nativa"
		],
		link: "https://linktr.ee/fidelyt",
		category: "Mobile",
		icon: "mdi:cellphone"
	},
	{
		title: "Fidelyt – Intranet para Negocios",
		description: "Intranet personalizada para negocios con panel de control, gestión de clientes y reportes detallados.",
		technologies: [
			"Django",
			"React",
			"Tailwind CSS"
		],
		impact: [
			"Gestión eficiente",
			"Panel de control personalizado",
			"Reportes detallados"
		],
		link: "https://intranet.fidelyt.com",
		category: "Full Stack",
		icon: "mdi:office-building"
	},
	{
		title: "Fidelyt – Testing Playground",
		description: "Entorno de pruebas con testing E2E, validación de flujos de negocio y sandbox para QA.",
		technologies: [
			"Playwright",
			"Testing E2E",
			"Automatización"
		],
		impact: [
			"Testing automatizado",
			"Validación de flujos",
			"Sandbox QA"
		],
		link: "https://fidelyt-testing.netlify.app/",
		category: "QA/Testing",
		icon: "mdi:test-tube"
	},
	{
		title: "Medicar – Sitio Web",
		description: "Sitio web corporativo para clínica médica con diseño moderno y optimización SEO.",
		technologies: [
			"React",
			"Next.js",
			"Tailwind CSS"
		],
		impact: [
			"SEO optimizado",
			"Diseño moderno",
			"Performance excelente"
		],
		link: "https://medicar-react.netlify.app/",
		category: "Frontend",
		icon: "mdi:stethoscope"
	},
	{
		title: "SuperListApp – En Desarrollo",
		description: "Web App para gestión de listas inventarios y alacenas con sincronización en tiempo real.",
		technologies: [
			"React",
			"Supabase",
			"Tailwind CSS"
		],
		impact: [
			"Sincronización en tiempo real",
			"Gestión eficiente",
			"Interfaz intuitiva"
		],
		link: "https://super-list-app.vercel.app/",
		category: "Frontend",
		icon: "mdi:format-list-bulleted"
	},
	{
		title: "ProBike - Sitio Web",
		description: "Sitio web corporativo para tienda de bicicletas con diseño moderno y optimización SEO.",
		technologies: [
			"Angular",
			"Tailwind CSS",
			"SEO"
		],
		impact: [
			"SEO optimizado",
			"Diseño moderno",
			"Performance excelente"
		],
		link: "https://probike.vercel.app/",
		category: "Frontend",
		icon: "mdi:bike"
	},
	{
		title: "Dashboard SpaceX - Amerisa Logistics",
		description: "Dashboard de seguimiento de lanzamientos espaciales con datos en tiempo real y visualizaciones interactivas.",
		technologies: [
			"React",
			"APIs REST",
			"Leaflet.js"
		],
		impact: [
			"Datos en tiempo real",
			"Visualizaciones interactivas",
			"Seguimiento de lanzamientos",
			"Prueba Técnica"
		],
		link: "https://amerisa-spacex-dashboard.vercel.app/",
		category: "Frontend",
		icon: "mdi:rocket-launch-outline"
	},
	{
		title: "Dashboard Crypto - Dinametra",
		description: "Monitorea precios, volumen y capitalización de mercado de criptomonedas usando datos públicos de CoinGecko.",
		technologies: [
			"Angular",
			"TypeScript",
			"Chart.js"
		],
		impact: [
			"Datos en tiempo real",
			"Visualizaciones dinámicas",
			"Monitoreo de criptomonedas",
			"Prueba Técnica"
		],
		link: "https://dinametra-crypto.vercel.app/",
		category: "Frontend",
		icon: "mdi:bitcoin"
	},
	{
		title: "Query Converter AI",
		description: "Herramienta web para convertir, corregir, optimizar y explicar queries SQL, ORM, MongoDB, GraphQL y otros formatos, con modo local y opción de consulta con AI.",
		technologies: [
			"React",
			"Tailwind CSS",
			"Gemini AI"
		],
		impact: [
			"Conversión entre formatos de consulta",
			"Optimización de queries",
			"Explicación detallada",
			"Modo local y AI"
		],
		link: "https://query-converter-ai.vercel.app/",
		category: "Full Stack",
		icon: "mdi:database-search"
	},
	{
		title: "Dashboard Garmin Connect",
		description: "Dashboard para visualizar datos de Garmin Connect con gráficos interactivos y estadísticas detalladas.",
		technologies: [
			"React",
			"Chart.js",
			"APIs REST"
		],
		impact: [
			"Visualización de datos de Garmin Connect",
			"Gráficos interactivos",
			"Estadísticas detalladas"
		],
		link: "https://dashboard-garmin-azure.vercel.app/",
		category: "Full Stack",
		icon: "mdi:watch"
	},
	{
		title: "KYB Customs Platform",
		description: "Plataforma para la gestión de procesos de conocimiento del cliente (KYB) y cumplimiento de regulaciones aduaneras, con un panel de control completo.",
		technologies: [
			"React",
			"Express",
			"PostgreSQL"
		],
		impact: [
			"Gestión de procesos KYB",
			"Cumplimiento de regulaciones aduaneras",
			"Panel de control"
		],
		link: "https://kyb-customs-platform.vercel.app/",
		category: "Full Stack",
		icon: "mdi:account-box-multiple-outline"
	}
];

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin - Proyectos", "showChrome": false }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-slate-50 py-12"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">  <div class="mb-12"> <div class="flex items-center justify-between gap-4 mb-6"> <a href="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-left", "class": "w-5 h-5" })}
Volver al inicio
</a> <a href="/admin/logout" class="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:logout", "class": "w-5 h-5" })}
Cerrar sesion
</a> </div> <h1 class="text-3xl font-bold text-gray-900 mb-2 mt-8">Gestionar Proyectos</h1> <p class="text-gray-600">Agrega, edita o elimina proyectos de tu portafolio</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">  <div class="lg:col-span-1"> <div class="sticky top-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200"> <h3 class="text-2xl font-bold text-gray-900 mb-6">Agregar Proyecto</h3> <form id="projectForm" class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Título</label> <input type="text" name="title" placeholder="Título del proyecto" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label> <input type="text" name="category" placeholder="Frontend, Full Stack, etc" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label> <textarea name="description" placeholder="Descripción del proyecto" rows="3" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Link</label> <input type="url" name="link" placeholder="https://ejemplo.com" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Icon (MDI)</label> <input type="text" name="icon" placeholder="mdi:web" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Tecnologías</label> <input type="text" name="technologies" placeholder="React, Next.js, Tailwind (separadas por coma)" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Impacto</label> <input type="text" name="impact" placeholder="Impacto 1, Impacto 2 (separados por coma)" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <button type="submit" class="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
Agregar Proyecto
</button> </form> <div id="formMessage" class="mt-4 p-4 rounded-lg hidden text-sm"></div> </div> </div>  <div class="lg:col-span-2"> <div class="space-y-4"> <h3 class="text-2xl font-bold text-gray-900 mb-6">Proyectos Actuales (${projects.length})</h3> ${projects.length === 0 ? renderTemplate`<div class="p-8 rounded-2xl bg-white border-2 border-dashed border-gray-300 text-center"> <p class="text-gray-600">No hay proyectos aún</p> </div>` : renderTemplate`<div class="space-y-4"> ${projects.map((project, index) => renderTemplate`<div class="p-6 rounded-2xl bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow"> <div class="flex items-start justify-between gap-4"> <div class="flex-1"> <h3 class="text-lg font-bold text-gray-900">${project.title}</h3> <p class="text-sm text-gray-600 mt-1">${project.description}</p> <div class="mt-4 flex flex-wrap gap-2"> <span class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold"> ${project.category} </span> ${project.technologies.map((tech) => renderTemplate`<span class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold"> ${tech} </span>`)} </div> <div class="mt-3 text-xs text-gray-500"> <a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"> ${project.link} </a> </div> </div> <button type="button"${addAttribute(`deleteProject('${project.title}')`, "onclick")} class="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 font-semibold transition-colors shrink-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:delete", "class": "w-5 h-5 inline-block" })} </button> </div> </div>`)} </div>`} </div> </div> </div> </div> </main> ` })} `;
}, "/home/user/portfolio/src/pages/admin/projects.astro", void 0);

const $$file = "/home/user/portfolio/src/pages/admin/projects.astro";
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
