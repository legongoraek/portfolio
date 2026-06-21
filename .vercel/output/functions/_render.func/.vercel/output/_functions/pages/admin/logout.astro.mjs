export { renderers } from '../../renderers.mjs';

const ADMIN_AUTH_COOKIE = "admin_auth";
const prerender = false;
const GET = async ({ cookies, redirect }) => {
  cookies.delete(ADMIN_AUTH_COOKIE, { path: "/" });
  return redirect("/admin/login");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
