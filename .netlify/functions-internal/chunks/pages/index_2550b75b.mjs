import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, g as renderComponent, e as addAttribute } from '../astro_f8d991ef.mjs';
import 'clsx';
import { j as $$Icon, g as $$Media, b as $$DefaultLayout } from './404_6fe4301b.mjs';
/* empty css                           */import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                                   *//* empty css                           */import 'svgo';

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { src = "/astronaut-hero-img.webp" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero my-24" data-astro-cid-bbe6dxrz><div class="container" data-astro-cid-bbe6dxrz><div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-bbe6dxrz><div class="flex flex-col items-center gap-8 md:items-start" data-astro-cid-bbe6dxrz><h1 class="text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-bbe6dxrz>${renderSlot($$result, $$slots["default"], renderTemplate`<span class="text-gradient" data-astro-cid-bbe6dxrz>Accessible</span> Starter for Astro`)}</h1><div class="flex flex-col gap-3 min-[500px]:flex-row" data-astro-cid-bbe6dxrz><a class="button has-icon" href="https://github.com/markteekman/accessible-astro-starter" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Icon", $$Icon, { "pack": "ion", "name": "star-outline", "data-astro-cid-bbe6dxrz": true })}
Star on GitHub
</a><a class="button has-icon color-secondary" href="https://github.com/markteekman/accessible-astro-starter/blob/main/README.md" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Icon", $$Icon, { "pack": "ion", "name": "bookmark-outline", "data-astro-cid-bbe6dxrz": true })}
Read the Docs
</a></div></div><img class="hidden lg:block"${addAttribute(src, "src")} alt="" decoding="async" data-astro-cid-bbe6dxrz></div></div></section>`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Feature;
  const { icon = "mdi:rocket", title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4" data-astro-cid-ezsi7upz>${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-ezsi7upz": true })}<div class="content" data-astro-cid-ezsi7upz><h3 data-astro-cid-ezsi7upz>${title}</h3><p data-astro-cid-ezsi7upz>${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)}</p></div></div>`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/components/Feature.astro", void 0);

const $$Astro$2 = createAstro();
const $$Counter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Counter;
  const { count, title, sub } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="animate text-center" data-astro-cid-x63rdsgb><p class="text-6xl font-bold" data-astro-cid-x63rdsgb>${count}</p><p class="text-4xl font-semibold" data-astro-cid-x63rdsgb>${title}</p><p class="text-2xl" data-astro-cid-x63rdsgb>${sub}</p></div>`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/components/Counter.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentMedia;
  const { imgSrc, reverseImg = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-64"><div class="container"><div class="grid grid-cols-1 gap-24 md:grid-cols-2">${!reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""}<div class="space-content flex flex-col justify-center">${renderSlot($$result, $$slots["default"])}</div>${reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""}</div></div></section>`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/components/ContentMedia.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${maybeRenderHead()}<section class="my-64"><div class="container"><h2 class="mb-16 text-6xl">Features</h2><div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:tailwind", "title": "Tailwind CSS" }, { "default": ($$result3) => renderTemplate`
Use the power of Tailwind to greatly improve your productivity and enhance your developer workflow.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:wheelchair-accessibility", "title": "a11y Components" }, { "default": ($$result3) => renderTemplate`
17 components and counting, all tried and tested for the most optimal accessible experience for your visitors.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:looks", "title": "Prettier" }, { "default": ($$result3) => renderTemplate`
Less worry about formatting your code, let the Astro Prettier integration do the heavy lifting.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:eslint", "title": "ESLint" }, { "default": ($$result3) => renderTemplate`
Lint your code with strict a11y settings to ensure you stay on track with the WCAG standards.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:book-open-page-variant", "title": "Blog" }, { "default": ($$result3) => renderTemplate`
This theme comes with a fully integrated blog, dynamic pages and SEO optimization.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:language-markdown", "title": "Markdown & MDX" }, { "default": ($$result3) => renderTemplate`
Easily use .md and .mdx pages to build your websites or use it with Netlify CMS.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:theme-light-dark", "title": "Dark mode" }, { "default": ($$result3) => renderTemplate`
Fully integrated Dark mode gives your users the choice for their favorite viewing mode.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:cog", "title": "Design System" }, { "default": ($$result3) => renderTemplate`
The theme offers some very handy utilities to help you build your website faster.
` })}${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:lighthouse", "title": "Lighthouse Scores" }, { "default": ($$result3) => renderTemplate`
Excellent lighthouse scores means your website will load faster and get better SEO rankings.
` })}</div></div></section>${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/accessible-components.webp" }, { "default": ($$result3) => renderTemplate`<h2>Accessible Components</h2><p class="text-2xl">
This theme provides plenty of tried and tested Accessible Astro Components. Some are native to this theme and a
      lot of others are integrated using a <a href="https://github.com/markteekman/accessible-astro-components">separate package</a>. They'll get you up and running in building an accessible solution for your visitors.
</p>` })}${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/wcag-compliant.webp", "reverseImg": true }, { "default": ($$result3) => renderTemplate`<h2>WCAG 2.1 AA Compliant</h2><p class="text-2xl">
Using semantic HTML, landmarks, skip links, screen reader friendly content, aria-labels, keyboard accessible
      navigation and components, clear outlines and tab indicators and the right color contrast, you're more certain of
      reaching WCAG AA compliance.
</p>` })}<section class="mt-64 mb-32"><div class="container"><h2 class="mb-16 text-6xl">Counters</h2><div class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">${renderComponent($$result2, "Counter", $$Counter, { "count": "130", "title": "Stars", "sub": "On GitHub" })}${renderComponent($$result2, "Counter", $$Counter, { "count": "17", "title": "Accessible", "sub": "Components" })}${renderComponent($$result2, "Counter", $$Counter, { "count": "500", "title": "Commits", "sub": "Merged" })}${renderComponent($$result2, "Counter", $$Counter, { "count": "18+", "title": "Months", "sub": "Since launch" })}</div></div></section>` })}`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/index.astro", void 0);

const $$file = "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
