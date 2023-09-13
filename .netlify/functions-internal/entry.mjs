import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ab84bd32.mjs';
import './chunks/astro_f8d991ef.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_257abccf.mjs');
const _page1  = () => import('./chunks/admin-dashboard_f67a7975.mjs');
const _page2  = () => import('./chunks/index_3f4efcd3.mjs');
const _page3  = () => import('./chunks/accessible-components_de71dd06.mjs');
const _page4  = () => import('./chunks/markdown-page_d135046a.mjs');
const _page5  = () => import('./chunks/_post__609c1e31.mjs');
const _page6  = () => import('./chunks/_.._1580ffb3.mjs');
const _page7  = () => import('./chunks/404_b55b6ec7.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.10_sass@1.49.9/node_modules/astro/dist/assets/image-endpoint.js", _page0],["node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro", _page1],["src/pages/index.astro", _page2],["src/pages/accessible-components.astro", _page3],["src/pages/markdown-page.md", _page4],["src/pages/blog/[post].astro", _page5],["src/pages/blog/[...page].astro", _page6],["src/pages/404.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
