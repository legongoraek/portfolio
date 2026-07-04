import { Q as createAstro, T as createComponent, a0 as renderComponent, a7 as renderTemplate, _ as maybeRenderHead } from '../../chunks/astro/server_-LkitC-W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CQM1Q6lP.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://luisenriquegongoraek.com");
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const ADMIN_AUTH_COOKIE = "admin_auth";
  const ADMIN_PASSWORD = "admin123";
  const redirectTarget = Astro2.url.searchParams.get("redirect") || "/admin/projects";
  let errorMessage = "";
  if (Astro2.request.method === "POST") {
    let formData;
    try {
      formData = await Astro2.request.formData();
    } catch {
      formData = null;
    }
    if (!formData) {
      errorMessage = "No se pudo leer el formulario";
    } else {
      const password = String(formData.get("password") ?? "").trim();
      if (password && password === ADMIN_PASSWORD) {
        Astro2.cookies.set(ADMIN_AUTH_COOKIE, "1", {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
          secure: Astro2.url.protocol === "https:",
          maxAge: 60 * 60 * 8
        });
        return Astro2.redirect(redirectTarget);
      }
      errorMessage = "Contrasena incorrecta";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acceso Admin", "showChrome": false }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16"> <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8"> <div class="rounded-2xl bg-white border border-gray-200 shadow-lg p-8 mt-12"> <h1 class="text-2xl font-bold text-gray-900 mb-2">Acceso Admin</h1> <p class="text-sm text-gray-600 mb-6">Ingresa la contrasena para administrar proyectos y experiencias.</p> <form method="POST" class="space-y-4"> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contrasena</label> <input id="password" name="password" type="password" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu contrasena"> </div> ${errorMessage && renderTemplate`<div class="rounded-lg border border-red-300 bg-red-100 text-red-700 px-4 py-2 text-sm"> ${errorMessage} </div>`} <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
Entrar
</button> </form> </div> </div> </main> ` })}`;
}, "D:/Proyectos/portfolio/src/pages/admin/login.astro", void 0);
const $$file = "D:/Proyectos/portfolio/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
