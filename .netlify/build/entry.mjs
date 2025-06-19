import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DxFKj72P.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/algemene-voorwaarden.astro.mjs');
const _page4 = () => import('./pages/bedankt.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blog/_---post_.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/diensten/crime-scene-cleaning.astro.mjs');
const _page9 = () => import('./pages/diensten/gespecialiseerde-schoonmaak.astro.mjs');
const _page10 = () => import('./pages/diensten/industriele-reiniging.astro.mjs');
const _page11 = () => import('./pages/privacybeleid.astro.mjs');
const _page12 = () => import('./pages/projects.astro.mjs');
const _page13 = () => import('./pages/reviews.astro.mjs');
const _page14 = () => import('./pages/sitemap.xml.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin.astro", _page2],
    ["src/pages/algemene-voorwaarden.astro", _page3],
    ["src/pages/bedankt.astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/blog/[...post].astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/diensten/crime-scene-cleaning.astro", _page8],
    ["src/pages/diensten/gespecialiseerde-schoonmaak.astro", _page9],
    ["src/pages/diensten/industriele-reiniging.astro", _page10],
    ["src/pages/privacybeleid.astro", _page11],
    ["src/pages/projects/index.astro", _page12],
    ["src/pages/reviews.astro", _page13],
    ["src/pages/sitemap.xml.ts", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "55ffda82-c5b6-4837-943a-83645ba7352f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
