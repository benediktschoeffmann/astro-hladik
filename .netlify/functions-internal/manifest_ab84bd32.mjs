import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_f8d991ef.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@3.0.10_sass@1.49.9/node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8665a748.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"inline","content":"[data-slate-editor]{-webkit-user-modify:read-write!important}\n"}],"routeData":{"type":"page","route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro","pathname":"/admin","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68e253f7.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.adcebc2c.css"},{"type":"inline","content":".text-gradient[data-astro-cid-bbe6dxrz]{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-500));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.darkmode .text-gradient{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-400));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.feature[data-astro-cid-ezsi7upz]{position:relative;width:calc(100% - .5rem);padding:2rem}.feature[data-astro-cid-ezsi7upz]>[data-astro-cid-ezsi7upz]{position:relative;z-index:2}@media (min-width: 75em){.feature[data-astro-cid-ezsi7upz]{width:100%}}.feature[data-astro-cid-ezsi7upz]:before,.feature[data-astro-cid-ezsi7upz]:after{content:\"\";position:absolute}.feature[data-astro-cid-ezsi7upz]:before{inset:0;background-color:var(--neutral-100);border:3px solid var(--neutral-700);border-radius:1rem;box-shadow:0 0 0 6px var(--neutral-100);z-index:1}.feature[data-astro-cid-ezsi7upz]:after{background-color:var(--action-color);inset:1rem -.85rem -.85rem 1rem;border-radius:1rem;z-index:0}.feature [astro-icon]{width:4rem;color:var(--action-color)}.darkmode .feature:before{background-color:var(--dark-100);box-shadow:0 0 0 6px var(--dark-100)}div[data-astro-cid-x63rdsgb]>p[data-astro-cid-x63rdsgb]:first-child{color:var(--action-color)}\n"},{"type":"external","src":"/_astro/index.9335b13e.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68e253f7.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.adcebc2c.css"},{"type":"external","src":"/_astro/index.9335b13e.css"}],"routeData":{"route":"/accessible-components","type":"page","pattern":"^\\/accessible-components\\/?$","segments":[[{"content":"accessible-components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accessible-components.astro","pathname":"/accessible-components","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68e253f7.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.adcebc2c.css"},{"type":"external","src":"/_astro/index.9335b13e.css"}],"routeData":{"route":"/markdown-page","type":"page","pattern":"^\\/markdown-page\\/?$","segments":[[{"content":"markdown-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/markdown-page.md","pathname":"/markdown-page","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68e253f7.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.adcebc2c.css"},{"type":"inline","content":"ul[data-astro-cid-relfimn4]{display:grid;grid-template-columns:1fr;grid-gap:4rem}@media (min-width: 550px){ul[data-astro-cid-relfimn4]{grid-template-columns:repeat(2,1fr);grid-gap:2rem}}@media (min-width: 950px){ul[data-astro-cid-relfimn4]{grid-template-columns:repeat(3,1fr)}}\n"},{"type":"external","src":"/_astro/index.9335b13e.css"}],"routeData":{"route":"/blog/[post]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post","dynamic":true,"spread":false}]],"params":["post"],"component":"src/pages/blog/[post].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68e253f7.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.adcebc2c.css"},{"type":"inline","content":"ul[data-astro-cid-a7wiyce3]{display:grid;grid-template-columns:1fr;grid-gap:4rem}@media (min-width: 550px){ul[data-astro-cid-a7wiyce3]{grid-template-columns:repeat(2,1fr);grid-gap:2rem}}@media (min-width: 950px){ul[data-astro-cid-a7wiyce3]{grid-template-columns:repeat(3,1fr)}}\n"},{"type":"external","src":"/_astro/index.9335b13e.css"}],"routeData":{"route":"/blog/[...page]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/blog/[...page].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68e253f7.js"},{"type":"external","value":"/_astro/page.da31267c.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.adcebc2c.css"},{"type":"external","src":"/_astro/index.9335b13e.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/home/ben/projects/nodejs/astro/astro-hladik/src/pages/markdown-page.md",{"propagation":"none","containsHead":true}],["/home/ben/projects/nodejs/astro/astro-hladik/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ben/projects/nodejs/astro/astro-hladik/src/pages/accessible-components.astro",{"propagation":"none","containsHead":true}],["/home/ben/projects/nodejs/astro/astro-hladik/src/pages/blog/[...page].astro",{"propagation":"none","containsHead":true}],["/home/ben/projects/nodejs/astro/astro-hladik/src/pages/blog/[post].astro",{"propagation":"none","containsHead":true}],["/home/ben/projects/nodejs/astro/astro-hladik/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ben/projects/nodejs/astro/astro-hladik/node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog/[...page].astro":"chunks/pages/__55ce157b.mjs","/src/pages/blog/[post].astro":"chunks/pages/_post__01c43574.mjs","/src/pages/accessible-components.astro":"chunks/pages/accessible-components_a626893e.mjs","/node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard.astro":"chunks/pages/admin-dashboard_a59354d4.mjs","/node_modules/.pnpm/astro@3.0.10_sass@1.49.9/node_modules/astro/dist/assets/image-endpoint.js":"chunks/pages/image-endpoint_d0c1b279.mjs","/src/pages/index.astro":"chunks/pages/index_2550b75b.mjs","/src/pages/markdown-page.md":"chunks/pages/markdown-page_28dcf3b3.mjs","\u0000@astrojs-manifest":"manifest_ab84bd32.mjs","\u0000@astro-page:node_modules/.pnpm/astro@3.0.10_sass@1.49.9/node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_257abccf.mjs","\u0000@astro-page:node_modules/.pnpm/astro-netlify-cms@0.5.4_astro@3.0.10_graphql@15.8.0/node_modules/astro-netlify-cms/admin-dashboard@_@astro":"chunks/admin-dashboard_f67a7975.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_3f4efcd3.mjs","\u0000@astro-page:src/pages/accessible-components@_@astro":"chunks/accessible-components_de71dd06.mjs","\u0000@astro-page:src/pages/markdown-page@_@md":"chunks/markdown-page_d135046a.mjs","\u0000@astro-page:src/pages/blog/[post]@_@astro":"chunks/_post__609c1e31.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._1580ffb3.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_b55b6ec7.mjs","/home/ben/projects/nodejs/astro/astro-hladik/node_modules/.pnpm/astro@3.0.10_sass@1.49.9/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_c5cb9728.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.68e253f7.js","astro:scripts/page.js":"_astro/page.da31267c.js","/astro/hoisted.js?q=0":"_astro/hoisted.8665a748.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/logo.7a72b47d.svg","/_astro/_...page_.163e7abd.css","/_astro/_post_.83a134dc.css","/_astro/admin-dashboard.559020a4.css","/_astro/index.ac719ee5.css","/_astro/index.9335b13e.css","/_astro/markdown-page.adcebc2c.css","/accessible-components.webp","/astronaut-hero-img.webp","/favicon.svg","/social-preview-image.png","/wcag-compliant.webp","/_astro/_commonjsHelpers.725317a4.js","/_astro/hoisted.68e253f7.js","/_astro/hoisted.8665a748.js","/_astro/page.da31267c.js","/fonts/OpenSans-Bold.woff","/fonts/OpenSans-Bold.woff2","/fonts/OpenSans-ExtraBold.woff","/fonts/OpenSans-ExtraBold.woff2","/fonts/OpenSans-Italic.woff","/fonts/OpenSans-Italic.woff2","/fonts/OpenSans-Regular.woff","/fonts/OpenSans-Regular.woff2","/_astro/page.da31267c.js"]});

export { manifest };
