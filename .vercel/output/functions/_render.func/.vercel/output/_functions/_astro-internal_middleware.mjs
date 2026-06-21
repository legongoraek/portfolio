import { d as defineMiddleware, s as sequence } from './chunks/index_9bSHIIJa.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DiSq-BtN.mjs';

const ADMIN_AUTH_COOKIE = "admin_auth";
const PROTECTED_API_PATHS = /* @__PURE__ */ new Set(["/api/projects", "/api/experiences"]);
const onRequest$1 = defineMiddleware((context, next) => {
  if (context.isPrerendered) {
    return next();
  }
  const pathname = context.url.pathname;
  const isAdminPage = pathname.startsWith("/admin") && pathname !== "/admin/login";
  const isProtectedApi = PROTECTED_API_PATHS.has(pathname);
  if (!isAdminPage && !isProtectedApi) {
    return next();
  }
  const isAuthenticated = context.cookies.get(ADMIN_AUTH_COOKIE)?.value === "1";
  if (!isAuthenticated && (isAdminPage || isProtectedApi)) {
    if (isProtectedApi) {
      return new Response(JSON.stringify({ error: "No autorizado" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const redirectTo = encodeURIComponent(pathname);
    return context.redirect(`/admin/login?redirect=${redirectTo}`);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
