import { c as createAstro, b as createComponent, r as renderTemplate, h as renderHead } from '../astro_f8d991ef.mjs';
import 'clsx';
/* empty css                                     */import 'html-escaper';

const $$Astro = createAstro();
const $$AdminDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminDashboard;
  return renderTemplate`<html lang="en"><head><title>Content Manager</title><meta name="description" content="Admin dashboard for managing website content">${renderHead()}</head><body></body></html>`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro", void 0);

const $$file = "/home/ben/projects/nodejs/astro/astro-hladik/node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro";
const $$url = undefined;

export { $$AdminDashboard as default, $$file as file, $$url as url };
