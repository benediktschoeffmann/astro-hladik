import { c as createAstro, b as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_f8d991ef.mjs';
import 'clsx';
import { b as $$DefaultLayout, c as $$Breadcrumbs, d as $$BreadcrumbsItem } from './404_6fe4301b.mjs';
/* empty css                            */import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                                   *//* empty css                           */import 'svgo';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
  return data.map((post) => {
    return {
      params: { post: post.title.replaceAll(" ", "-").toLowerCase() },
      props: { post }
    };
  });
}
const $$post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$post;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": post.title, "description": post.body, "url": post.title, "data-astro-cid-relfimn4": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-relfimn4><div class="mt-12" data-astro-cid-relfimn4>${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "data-astro-cid-relfimn4": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/", "label": "Home", "data-astro-cid-relfimn4": true })}${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/blog", "label": "Blog", "data-astro-cid-relfimn4": true })}${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "currentPage": true, "label": post.title, "data-astro-cid-relfimn4": true })}` })}</div></div><section class="my-12" data-astro-cid-relfimn4><div class="container" data-astro-cid-relfimn4><h1 data-astro-cid-relfimn4>${post.title}</h1><br data-astro-cid-relfimn4><p data-astro-cid-relfimn4>By userId: ${post.userId}</p></div></section><section class="my-12" data-astro-cid-relfimn4><div class="container" data-astro-cid-relfimn4><p class="text-2xl" data-astro-cid-relfimn4>${post.body}</p></div></section>` })}`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/blog/[post].astro", void 0);

const $$file = "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/blog/[post].astro";
const $$url = "/blog/[post]";

export { $$post as default, $$file as file, getStaticPaths, $$url as url };
