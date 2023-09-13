import { c as createAstro, b as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_f8d991ef.mjs';
import 'clsx';
import { $ as $$Card, a as $$Pagination, b as $$DefaultLayout } from './404_6fe4301b.mjs';
/* empty css                               */import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                                   *//* empty css                           */import 'svgo';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return paginate(data, { pageSize: 6 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Blog", "description": "An example of a blog with dynamic content fetched from JSONPlaceholder using the title, body and userId.", "data-astro-cid-a7wiyce3": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="my-12" data-astro-cid-a7wiyce3><div class="space-content container" data-astro-cid-a7wiyce3><h1 data-astro-cid-a7wiyce3>Blog</h1><p class="text-2xl" data-astro-cid-a7wiyce3>
An example of a blog with dynamic content fetched from <a href="https://jsonplaceholder.typicode.com/posts" data-astro-cid-a7wiyce3>JSONPlaceholder</a> using the title, body and userId. The Accessible Astro Card Component is used here to display al the posts.
</p></div></section><section class="my-12" data-astro-cid-a7wiyce3><div class="container" data-astro-cid-a7wiyce3><p class="text-sm" data-astro-cid-a7wiyce3><em data-astro-cid-a7wiyce3>Post ${page.start + 1} through ${page.end + 1} of ${page.total} total posts</em></p><ul class="my-3" data-astro-cid-a7wiyce3>${page.data.map((post) => renderTemplate`<li data-astro-cid-a7wiyce3>${renderComponent($$result2, "Card", $$Card, { "url": "/blog/" + post.title.replaceAll(" ", "-").toLowerCase(), "title": post.title, "footer": "userId:" + post.userId, "data-astro-cid-a7wiyce3": true }, { "default": ($$result3) => renderTemplate`${post.body}` })}</li>`)}</ul><div class="mt-12 grid place-content-center" data-astro-cid-a7wiyce3>${renderComponent($$result2, "Pagination", $$Pagination, { "firstPage": page.url.prev ? "/blog" : null, "previousPage": page.url.prev ? page.url.prev : null, "nextPage": page.url.next ? page.url.next : null, "lastPage": page.url.next ? `/blog/${Math.round(page.total / page.size)}` : null, "currentPage": page.currentPage, "totalPages": Math.round(page.total / page.size), "data-astro-cid-a7wiyce3": true })}</div></div></section>` })}`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/blog/[...page].astro", void 0);

const $$file = "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
