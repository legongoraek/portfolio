import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_mZSVPat9.mjs';
import 'es-module-lexer';
import { W as decodeKey } from './chunks/astro/server_-LkitC-W.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DsZDo7j9.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DX9hQRew.js"}],"styles":[{"type":"external","src":"/_astro/experiences.BYOlqcmx.css"}],"routeData":{"route":"/admin/experiences","isIndex":false,"type":"page","pattern":"^\\/admin\\/experiences\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/experiences.astro","pathname":"/admin/experiences","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CkNJGPE2.js"}],"styles":[{"type":"external","src":"/_astro/experiences.BYOlqcmx.css"}],"routeData":{"route":"/admin/login","isIndex":false,"type":"page","pattern":"^\\/admin\\/login\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/login.astro","pathname":"/admin/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/logout","isIndex":false,"type":"endpoint","pattern":"^\\/admin\\/logout\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/logout.ts","pathname":"/admin/logout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BbPpbejv.js"}],"styles":[{"type":"external","src":"/_astro/experiences.BYOlqcmx.css"}],"routeData":{"route":"/admin/projects","isIndex":false,"type":"page","pattern":"^\\/admin\\/projects\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/projects.astro","pathname":"/admin/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/experiences","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/experiences\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/experiences.ts","pathname":"/api/experiences","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/projects","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/projects\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/projects.ts","pathname":"/api/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://luisenriquegongoraek.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/user/portfolio/src/pages/admin/experiences.astro",{"propagation":"none","containsHead":true}],["/home/user/portfolio/src/pages/admin/login.astro",{"propagation":"none","containsHead":true}],["/home/user/portfolio/src/pages/admin/projects.astro",{"propagation":"none","containsHead":true}],["/home/user/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/admin/login@_@astro":"pages/admin/login.astro.mjs","\u0000@astro-page:src/pages/admin/logout@_@ts":"pages/admin/logout.astro.mjs","\u0000@astro-page:src/pages/api/experiences@_@ts":"pages/api/experiences.astro.mjs","\u0000@astro-page:src/pages/api/projects@_@ts":"pages/api/projects.astro.mjs","\u0000@astro-page:src/pages/admin/experiences@_@astro":"pages/admin/experiences.astro.mjs","\u0000@astro-page:src/pages/admin/projects@_@astro":"pages/admin/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/user/portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_C6Z9RXH-.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DX9hQRew.js","/astro/hoisted.js?q=1":"_astro/hoisted.BbPpbejv.js","/astro/hoisted.js?q=3":"_astro/hoisted.Cm8Q-AhJ.js","/astro/hoisted.js?q=2":"_astro/hoisted.CkNJGPE2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/experiences.BYOlqcmx.css","/_astro/index.BGbvkZv-.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/_astro/hoisted.BbPpbejv.js","/_astro/hoisted.CkNJGPE2.js","/_astro/hoisted.Cm8Q-AhJ.js","/_astro/hoisted.DX9hQRew.js","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"GVLkyBevCPIToGriOlpd2A1fCO/Mn6TvuXhslagzVJ8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
