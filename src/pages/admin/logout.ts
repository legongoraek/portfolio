import type { APIRoute } from 'astro';

const ADMIN_AUTH_COOKIE = 'admin_auth';

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(ADMIN_AUTH_COOKIE, { path: '/' });
  return redirect('/admin/login');
};
