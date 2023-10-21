import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_28319d77.mjs';
import './chunks/astro_f8d991ef.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_574fd03a.mjs');
const _page1  = () => import('./chunks/admin-dashboard_f67a7975.mjs');
const _page2  = () => import('./chunks/index_32a5c183.mjs');
const _page3  = () => import('./chunks/accessible-components_57e4043a.mjs');
const _page4  = () => import('./chunks/markdown-page_03727551.mjs');
const _page5  = () => import('./chunks/index_fe03b230.mjs');
const _page6  = () => import('./chunks/psychologischeberatung_d4434317.mjs');
const _page7  = () => import('./chunks/offenesatelier_1640b91f.mjs');
const _page8  = () => import('./chunks/kunsttherapie_c964c4a1.mjs');
const _page9  = () => import('./chunks/modusoperandi_54654b3b.mjs');
const _page10  = () => import('./chunks/frischerwind_343ae7bb.mjs');
const _page11  = () => import('./chunks/walkntalk_ac579c43.mjs');
const _page12  = () => import('./chunks/wasbinich_b9f9a7f9.mjs');
const _page13  = () => import('./chunks/werbinich_eef558c8.mjs');
const _page14  = () => import('./chunks/wiebinich_f84acd94.mjs');
const _page15  = () => import('./chunks/ablauf_6dde117b.mjs');
const _page16  = () => import('./chunks/vision_840cfc66.mjs');
const _page17  = () => import('./chunks/was_0bd54da9.mjs');
const _page18  = () => import('./chunks/wie_c2705915.mjs');
const _page19  = () => import('./chunks/index_ef7d9655.mjs');
const _page20  = () => import('./chunks/this-is-a-test_e0fca377.mjs');
const _page21  = () => import('./chunks/new-york_c0cbedeb.mjs');
const _page22  = () => import('./chunks/houston_37babd4f.mjs');
const _page23  = () => import('./chunks/dallas_2ab27e3c.mjs');
const _page24  = () => import('./chunks/_post__f1f0ac7d.mjs');
const _page25  = () => import('./chunks/_.._7fc77be5.mjs');
const _page26  = () => import('./chunks/404_1400c10e.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.10_sass@1.49.9/node_modules/astro/dist/assets/image-endpoint.js", _page0],["node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro", _page1],["src/pages/index.astro", _page2],["src/pages/accessible-components.astro", _page3],["src/pages/markdown-page.md", _page4],["src/pages/articles/index.astro", _page5],["src/pages/articles/psychologischeberatung.md", _page6],["src/pages/articles/offenesatelier.md", _page7],["src/pages/articles/kunsttherapie.md", _page8],["src/pages/articles/modusoperandi.md", _page9],["src/pages/articles/frischerwind.md", _page10],["src/pages/articles/walkntalk.md", _page11],["src/pages/articles/wasbinich.md", _page12],["src/pages/articles/werbinich.md", _page13],["src/pages/articles/wiebinich.md", _page14],["src/pages/articles/ablauf.md", _page15],["src/pages/articles/vision.md", _page16],["src/pages/articles/was.md", _page17],["src/pages/articles/wie.md", _page18],["src/pages/posts/index.md", _page19],["src/pages/posts/this-is-a-test.md", _page20],["src/pages/posts/new-york.md", _page21],["src/pages/posts/houston.md", _page22],["src/pages/posts/dallas.md", _page23],["src/pages/blog/[post].astro", _page24],["src/pages/blog/[...page].astro", _page25],["src/pages/404.astro", _page26]]);
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
