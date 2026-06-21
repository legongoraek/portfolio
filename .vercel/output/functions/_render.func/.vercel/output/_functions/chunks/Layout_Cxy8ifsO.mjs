import { W as createComponent, a1 as maybeRenderHead, H as addAttribute, ab as renderTemplate, V as createAstro, a4 as renderComponent, a9 as renderSlot, a6 as renderHead } from './astro/server_IzRBvuLC.mjs';
/* empty css                               */
import 'clsx';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "Sobre m\xED", href: "#sobre-mi" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Contacto", href: "#contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"> <div class="
      rounded-3xl
      border border-white/10
      bg-white/65
      backdrop-blur-2xl
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    "> <div class="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div> <div class="relative max-w-7xl mx-auto px-5 lg:px-8"> <div class="flex items-center justify-between h-16 md:h-20">  <a href="/" class="flex items-center gap-3 group shrink-0"> <div class="block"> <p class="text-xs md:text-sm text-gray-500">
Full Stack Developer
</p> <p class="font-bold text-primary-900 leading-none text-sm md:text-base">
Luis Enrique
</p> </div> </a>  <div class="hidden md:flex items-center gap-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="
                relative px-4 py-2 rounded-xl
                text-sm font-semibold

                text-slate-800

                hover:text-primary-600

                hover:bg-white/70

                transition-all duration-300

                after:absolute
                after:left-4
                after:right-4
                after:-bottom-0.5
                after:h-[2px]
                after:scale-x-0
                after:origin-left
                after:bg-primary-600
                after:transition-transform
                after:duration-300

                hover:after:scale-x-100
              "> ${item.label} </a>`)} </div>  <button id="mobile-menu-btn" class="
            md:hidden
            p-2.5
            rounded-2xl
            border border-black/5
            bg-white/50
            hover:bg-white
            transition-all
            shrink-0
          " aria-label="Abrir menú"> <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div>  <div id="mobile-menu" class="
          hidden md:hidden
          pb-5 pt-2
          space-y-2
        "> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="
              block
              px-4 py-3
              rounded-2xl
              text-gray-700
              hover:bg-white/50
              transition-all
              font-medium
            "> ${item.label} </a>`)} </div> </div> </div> </nav> `;
}, "D:/Proyectos/portfolio/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="relative py-12 md:py-16 overflow-hidden">  <div class="absolute inset-0 pointer-events-none"> <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-10"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10"></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  <div class="
        rounded-3xl
        border border-white/20
        bg-white/60
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        p-8 md:p-12
      "> <div class="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none"></div> <div class="relative"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">  <div> <h3 class="text-lg font-bold text-primary-900 mb-4">Luis Enrique Góngora Ek</h3> <p class="text-gray-600 text-sm leading-relaxed">
Full Stack Developer especializado en web, mobile y automatización de procesos.
</p> </div>  <div> <h3 class="text-lg font-bold text-primary-900 mb-4">Enlaces</h3> <ul class="space-y-2 text-sm"> <li> <a href="#sobre-mi" class="text-gray-700 hover:text-primary-600 transition font-medium">
Sobre mí
</a> </li> <li> <a href="#proyectos" class="text-gray-700 hover:text-primary-600 transition font-medium">
Proyectos
</a> </li> <li> <a href="#experiencia" class="text-gray-700 hover:text-primary-600 transition font-medium">
Experiencia
</a> </li> <li> <a href="#contacto" class="text-gray-700 hover:text-primary-600 transition font-medium">
Contacto
</a> </li> </ul> </div>  <div> <h3 class="text-lg font-bold text-primary-900 mb-4">Conecta conmigo</h3> <div class="flex gap-3"> <a href="https://github.com/legongoraek" target="_blank" rel="noopener noreferrer" class="
                  w-10 h-10
                  rounded-xl
                  border border-gray-200
                  bg-white
                  flex items-center justify-center
                  text-gray-700
                  hover:bg-primary-50
                  hover:text-primary-600
                  hover:border-primary-200
                  transition
                  group
                " aria-label="GitHub"> <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </a> <a href="https://www.linkedin.com/in/luisenriquegongoraek" target="_blank" rel="noopener noreferrer" class="
                  w-10 h-10
                  rounded-xl
                  border border-gray-200
                  bg-white
                  flex items-center justify-center
                  text-gray-700
                  hover:bg-primary-50
                  hover:text-primary-600
                  hover:border-primary-200
                  transition
                  group
                " aria-label="LinkedIn"> <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path> </svg> </a> <a href="https://wa.me/529994231687" target="_blank" rel="noopener noreferrer" class="
                  w-10 h-10
                  rounded-xl
                  border border-gray-200
                  bg-white
                  flex items-center justify-center
                  text-gray-700
                  hover:bg-green-50
                  hover:text-green-600
                  hover:border-green-200
                  transition
                  group
                " aria-label="WhatsApp"> <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.6915026,13.4744748 C17.5772231,13.3474531 17.3972231,13.2899899 17.2,13.2899899 C17.0027765,13.2899899 16.8227765,13.3474531 16.7084970,13.4744748 L15.5587348,14.5744589 C15.4573006,14.6624699 15.3139598,14.6931765 15.1871925,14.6372722 C14.0152461,14.0987857 12.7256705,13.1339244 11.3454545,11.7316017 C10.8043244,11.1765035 10.3898501,10.5980394 10.0751879,10.0130164 C9.97374589,9.81503317 10.000436,9.64533286 10.0943407,9.53939484 L11.204159,8.32896056 C11.3185703,8.20193886 11.3761256,8.01969126 11.3761256,7.82231053 C11.3761256,7.62492980 11.3185703,7.44268220 11.204159,7.31566051 L7.30356,3.18772295 C7.18927049,3.06070124 7.00927049,3.00323806 6.8120471,3.00323806 C6.61481373,3.00323806 6.43481373,3.06070124 6.32052423,3.18772295 L5.05156364,4.51077751 C4.74844848,4.82492146 4.61788311,5.27252477 4.68943894,5.71375706 C5.36969697,9.73410898 7.28502239,13.5163841 10.4768307,16.6619744 C13.4816667,19.6075646 16.9902098,21.4372725 20.6563168,22.1495409 C21.0681066,22.2240226 21.4969697,22.0906349 21.7788554,21.7915301 L23.0456585,20.4380725 C23.1599480,20.3110509 23.2174944,20.1288033 23.2174944,20.9311226 C23.2174944,19.7528749 23.1599480,19.5706273 23.0456585,19.4436056 L17.6915026,13.4744748 Z"></path> </svg> </a> <a href="https://legongoraek.github.io" target="_blank" rel="noopener noreferrer" class="
                  w-10 h-10
                  rounded-xl
                  border border-gray-200
                  bg-white
                  flex items-center justify-center
                  text-gray-700
                  hover:bg-primary-50
                  hover:text-primary-600
                  hover:border-primary-200
                  transition
                  group
                " aria-label="Portafolio"> <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 5m3 6a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13 19"></path> </svg> </a> </div> </div> </div>  <div class="border-t border-gray-200 pt-8 mt-8 text-center"> <p class="text-gray-600 text-sm font-medium">
&copy; ${currentYear} Luis Enrique Góngora Ek. Todos los derechos reservados.
</p> </div> </div> </div> </div> </footer>`;
}, "D:/Proyectos/portfolio/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://luisenriquegongoraek.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Luis Enrique G\xF3ngora Ek | Full Stack Developer",
    description = "Portafolio profesional de Luis Enrique G\xF3ngora Ek, Full Stack Developer especializado en desarrollo web, mobile y automatizaci\xF3n de procesos.",
    showChrome = true
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords" content="Full Stack Developer, Django, React, React Native, Vue.js, APIs, Automatizaci\xF3n, M\xE9xico"><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', `><meta property="og:type" content="website"><meta property="og:url" content="https://luisenriquegongoraek.com/"><meta property="og:image" content="https://luisenriquegongoraek.com/og-image.jpg"><!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-Q7V1V88QR9"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q7V1V88QR9');
    <\/script><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-Y78BK6KXF1"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Y78BK6KXF1');
    <\/script><title>`, "</title>", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK4WR7H3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', " <main> ", " </main> ", "  </body> </html>"])), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead(), showChrome && renderTemplate`${renderComponent($$result, "Navigation", $$Navigation, {})}`, renderSlot($$result, $$slots["default"]), showChrome && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`);
}, "D:/Proyectos/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
