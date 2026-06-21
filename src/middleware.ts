import { defineMiddleware } from 'astro:middleware';

const ADMIN_AUTH_COOKIE = 'admin_auth';
const PROTECTED_API_PATHS = new Set(['/api/projects', '/api/experiences']);

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;
  const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login';
  const isProtectedApi = PROTECTED_API_PATHS.has(pathname);
  const isAuthenticated = context.cookies.get(ADMIN_AUTH_COOKIE)?.value === '1';

  if (!isAuthenticated && (isAdminPage || isProtectedApi)) {
    if (isProtectedApi) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const redirectTo = encodeURIComponent(pathname);
    return context.redirect(`/admin/login?redirect=${redirectTo}`);
  }

  return next();
});
