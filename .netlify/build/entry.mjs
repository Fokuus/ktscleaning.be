import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Bj0MdJUZ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/bedankt.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---post_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/diensten/crime-scene-cleaning.astro.mjs');
const _page7 = () => import('./pages/diensten/gespecialiseerde-schoonmaak.astro.mjs');
const _page8 = () => import('./pages/diensten/industriele-reiniging.astro.mjs');
const _page9 = () => import('./pages/projects.astro.mjs');
const _page10 = () => import('./pages/reviews.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/admin.astro", _page1],
    ["src/pages/bedankt.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...post].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/diensten/crime-scene-cleaning.astro", _page6],
    ["src/pages/diensten/gespecialiseerde-schoonmaak.astro", _page7],
    ["src/pages/diensten/industriele-reiniging.astro", _page8],
    ["src/pages/projects/index.astro", _page9],
    ["src/pages/reviews.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "01482c6e-7fde-448f-92f0-a4a30631158c"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
