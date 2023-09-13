import { c as createAstro, b as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../astro_f8d991ef.mjs';
import 'clsx';
import { b as $$DefaultLayout } from './404_6fe4301b.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                                   *//* empty css                           */import 'svgo';

const $$Astro = createAstro();
const $$MarkdownLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container"><div class="space-content my-12">${renderSlot($$result2, $$slots["default"])}</div></div>` })}`;
}, "/home/ben/projects/nodejs/astro/astro-hladik/src/layouts/MarkdownLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"markdown-page\">Markdown Page</h1>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">'Hello Accessible World!'</span><span style=\"color: #E1E4E8\">)</span></span></code></pre>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.</p>\n<p><a href=\"https://github.com/markteekman/accessible-astro-starter\">Get this theme on GitHub</a></p>");

				const frontmatter = {"layout":"../layouts/MarkdownLayout.astro","title":"Markdown Page"};
				const file = "/home/ben/projects/nodejs/astro/astro-hladik/src/pages/markdown-page.md";
				const url = "/markdown-page";
				function rawContent() {
					return "\n# Markdown Page\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.\n\n```js\nconsole.log('Hello Accessible World!')\n```\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.\n\n[Get this theme on GitHub](https://github.com/markteekman/accessible-astro-starter)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"markdown-page","text":"Markdown Page"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
