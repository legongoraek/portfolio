import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D0Qnj_rl.mjs';
import { manifest } from './manifest_CEZq4SA2.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/experiences.astro.mjs');
const _page2 = () => import('./pages/admin/login.astro.mjs');
const _page3 = () => import('./pages/admin/logout.astro.mjs');
const _page4 = () => import('./pages/admin/projects.astro.mjs');
const _page5 = () => import('./pages/api/experiences.astro.mjs');
const _page6 = () => import('./pages/api/projects.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/experiences.astro", _page1],
    ["src/pages/admin/login.astro", _page2],
    ["src/pages/admin/logout.ts", _page3],
    ["src/pages/admin/projects.astro", _page4],
    ["src/pages/api/experiences.ts", _page5],
    ["src/pages/api/projects.ts", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "1def12ac-bbab-415b-9ad7-39e893f1ad6d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
