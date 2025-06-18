import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { y as NOOP_MIDDLEWARE_HEADER, z as decodeKey } from './chunks/astro/server_Cpu_oEWi.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/","cacheDir":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/node_modules/.astro/","outDir":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/dist/","srcDir":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/src/","publicDir":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/public/","buildClientDir":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/dist/","buildServerDir":"file:///Users/antonpycarelle/Documents/Coding%20Projecten/kts-cleaning.be/ktscleaning.be/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"bedankt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bedankt","isIndex":false,"type":"page","pattern":"^\\/bedankt\\/?$","segments":[[{"content":"bedankt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bedankt.astro","pathname":"/bedankt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"diensten/crime-scene-cleaning/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/diensten/crime-scene-cleaning","isIndex":false,"type":"page","pattern":"^\\/diensten\\/crime-scene-cleaning\\/?$","segments":[[{"content":"diensten","dynamic":false,"spread":false}],[{"content":"crime-scene-cleaning","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/diensten/crime-scene-cleaning.astro","pathname":"/diensten/crime-scene-cleaning","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"diensten/gespecialiseerde-schoonmaak/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/diensten/gespecialiseerde-schoonmaak","isIndex":false,"type":"page","pattern":"^\\/diensten\\/gespecialiseerde-schoonmaak\\/?$","segments":[[{"content":"diensten","dynamic":false,"spread":false}],[{"content":"gespecialiseerde-schoonmaak","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/diensten/gespecialiseerde-schoonmaak.astro","pathname":"/diensten/gespecialiseerde-schoonmaak","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"diensten/industriele-reiniging/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/diensten/industriele-reiniging","isIndex":false,"type":"page","pattern":"^\\/diensten\\/industriele-reiniging\\/?$","segments":[[{"content":"diensten","dynamic":false,"spread":false}],[{"content":"industriele-reiniging","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/diensten/industriele-reiniging.astro","pathname":"/diensten/industriele-reiniging","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"reviews/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/reviews","isIndex":false,"type":"page","pattern":"^\\/reviews\\/?$","segments":[[{"content":"reviews","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reviews.astro","pathname":"/reviews","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.ktscleaning.be","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/FeaturedPost.astro",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/layouts/BlogPostLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/blog/[...post].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...post]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/layouts/BlogRecentArticlesWithSidebar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/bedankt.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/diensten/crime-scene-cleaning.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/diensten/gespecialiseerde-schoonmaak.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/diensten/industriele-reiniging.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/reviews.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/bedankt@_@astro":"pages/bedankt.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...post]@_@astro":"pages/blog/_---post_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/diensten/crime-scene-cleaning@_@astro":"pages/diensten/crime-scene-cleaning.astro.mjs","\u0000@astro-page:src/pages/diensten/gespecialiseerde-schoonmaak@_@astro":"pages/diensten/gespecialiseerde-schoonmaak.astro.mjs","\u0000@astro-page:src/pages/diensten/industriele-reiniging@_@astro":"pages/diensten/industriele-reiniging.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/reviews@_@astro":"pages/reviews.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bj0MdJUZ.mjs","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DvZ51Pha.mjs","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/.astro/content-assets.mjs":"chunks/content-assets_DK5bA-XT.mjs","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CNFT_UAo.mjs","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.8GawVDdX.js","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.vXIaAr4i.js","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/Diensten.astro?astro&type=script&index=0&lang.ts":"_astro/Diensten.astro_astro_type_script_index_0_lang.D3MUQQ6y.js","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/FAQ.astro?astro&type=script&index=0&lang.ts":"_astro/FAQ.astro_astro_type_script_index_0_lang.BM-fSIcd.js","/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/TemplateComponents/TableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/TableOfContents.astro_astro_type_script_index_0_lang.BOSj_ngF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){document.querySelectorAll(\".smooth-cursor\").forEach(t=>{let i;t.addEventListener(\"input\",function(e){clearTimeout(i),this.style.transition=\"all 0.1s cubic-bezier(0.4, 0, 0.2, 1)\",i=setTimeout(()=>{this.style.transition=\"\"},100)}),t.addEventListener(\"focus\",function(){this.style.caretColor=\"var(--primary)\",this.style.animation=\"caret-pulse 1.5s ease-in-out infinite\"}),t.addEventListener(\"blur\",function(){this.style.animation=\"\"}),t.addEventListener(\"keydown\",function(e){const s=e;[\"ArrowLeft\",\"ArrowRight\",\"Home\",\"End\"].includes(s.key)&&(this.style.transition=\"caret-color 0.2s ease\",setTimeout(()=>{this.style.transition=\"\"},200))})});function r(){const t=document.getElementById(\"name\"),i=document.getElementById(\"email\"),e=document.getElementById(\"phone\"),s=document.getElementById(\"service\"),n=document.getElementById(\"message\");t&&(t.addEventListener(\"invalid\",function(){this.validity.valueMissing?this.setCustomValidity(\"Vul uw naam in\"):this.setCustomValidity(\"\")}),t.addEventListener(\"input\",function(){this.setCustomValidity(\"\")})),i&&(i.addEventListener(\"invalid\",function(){this.validity.valueMissing?this.setCustomValidity(\"Vul uw e-mailadres in\"):this.validity.typeMismatch?this.setCustomValidity(\"Vul een geldig e-mailadres in\"):this.setCustomValidity(\"\")}),i.addEventListener(\"input\",function(){this.setCustomValidity(\"\")})),e&&(e.addEventListener(\"invalid\",function(){this.validity.valueMissing?this.setCustomValidity(\"Vul uw telefoonnummer in\"):this.setCustomValidity(\"\")}),e.addEventListener(\"input\",function(){this.setCustomValidity(\"\")})),s&&(s.addEventListener(\"invalid\",function(){this.validity.valueMissing?this.setCustomValidity(\"Selecteer een type dienst\"):this.setCustomValidity(\"\")}),s.addEventListener(\"change\",function(){this.setCustomValidity(\"\")})),n&&(n.addEventListener(\"invalid\",function(){this.validity.valueMissing?this.setCustomValidity(\"Vul uw bericht in\"):this.setCustomValidity(\"\")}),n.addEventListener(\"input\",function(){this.setCustomValidity(\"\")}))}r();const u=document.getElementById(\"cs-form\");u&&u.addEventListener(\"submit\",function(t){const i=document.getElementById(\"service\");if(i&&!i.value)return t.preventDefault(),i.setCustomValidity(\"Selecteer een type dienst\"),i.reportValidity(),!1;const e=document.getElementById(\"phone\");return e&&e.value&&!/^(\\+31|0)[1-9][0-9]{8}$/.test(e.value.replace(/\\s/g,\"\"))?(t.preventDefault(),e.setCustomValidity(\"Vul een geldig Nederlands telefoonnummer in\"),e.reportValidity(),!1):!0});const l=document.querySelectorAll(\"[data-dropdown]\");l.forEach(t=>{const i=t.querySelector(\"[data-trigger]\"),e=t.querySelector(\"[data-options]\"),s=t.querySelector('input[type=\"hidden\"]'),n=t.querySelector(\"[data-text]\"),d=t.querySelectorAll(\".cs-option\");!i||!e||!s||!n||(i.addEventListener(\"click\",function(c){c.preventDefault(),l.forEach(a=>{if(a!==t){a.classList.remove(\"active\");const o=a.querySelector(\"[data-options]\");o&&o.classList.remove(\"active\")}}),t.classList.toggle(\"active\"),e.classList.toggle(\"active\")}),d.forEach(c=>{c.addEventListener(\"click\",function(){const a=this.getAttribute(\"data-value\"),o=this.textContent;a&&o&&(s.value=a,n.textContent=o,n.classList.remove(\"placeholder\"),d.forEach(m=>m.classList.remove(\"selected\")),this.classList.add(\"selected\"),t.classList.remove(\"active\"),e.classList.remove(\"active\"),s.dispatchEvent(new Event(\"change\",{bubbles:!0})))})}))}),document.addEventListener(\"click\",function(t){const i=t.target;i&&!i.closest(\"[data-dropdown]\")&&l.forEach(e=>{e.classList.remove(\"active\");const s=e.querySelector(\"[data-options]\");s&&s.classList.remove(\"active\")})})});"],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const d=document.querySelector(\"body\"),a=document.getElementById(\"cs-navigation\");document.getElementById(\"cs-ul-wrapper\");const c=document.getElementById(\"mobile-menu-toggle\");function i(){c.classList.toggle(\"cs-active\"),a.classList.toggle(\"cs-active\"),d.classList.toggle(\"cs-open\")}c.addEventListener(\"click\",function(){i(),n(c)});function n(t){const s=t.getAttribute(\"aria-expanded\");t.setAttribute(\"aria-expanded\",s===\"false\"?\"true\":\"false\")}document.querySelectorAll(\".cs-dropdown\").forEach(t=>{let s=!1;t.addEventListener(\"focusout\",function(e){if(s){s=!1;return}if(!t.contains(e.relatedTarget)){t.classList.remove(\"cs-active\");const o=t.querySelector(\".cs-dropdown-button\");o&&n(o)}}),t.addEventListener(\"keydown\",function(e){const o=t.querySelector(\".cs-dropdown-button\");t.classList.contains(\"cs-active\")&&e.stopPropagation(),(e.key===\"Enter\"||e.key===\" \")&&(e.preventDefault(),t.classList.toggle(\"cs-active\"),o&&n(o)),e.key===\"Escape\"&&(s=!0,t.classList.remove(\"cs-active\"),o&&n(o))}),window.matchMedia(\"(max-width: 63.9375rem)\").matches&&(t.addEventListener(\"click\",e=>{t.classList.toggle(\"cs-active\");const o=t.querySelector(\".cs-dropdown-button\");o&&n(o)}),document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&c.classList.contains(\"cs-active\")&&i()}))}),document.querySelectorAll(\".cs-drop-li > .cs-li-link\").forEach(t=>{t.addEventListener(\"keydown\",function(s){s.key===\"Enter\"&&(window.location.href=this.href)})})});"],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/Diensten.astro?astro&type=script&index=0&lang.ts","function u(){const o=document.querySelectorAll(\"#services-1252 .cs-item\");function t(){o.forEach(e=>{const r=e.querySelector(\".cs-item-background img\"),i=e;if(!r||!i)return;const c=e.getBoundingClientRect(),s=c.top,l=c.height,a=window.innerHeight,v=s+l/2,f=a/2;if(s<a+100&&s+l>-100){const d=(f-v)/a,g=e.matches(\":hover\")?\"scale(1.1)\":\"scale(1)\",h=d*8;r.style.transform=`translateY(${-10+h}%) ${g}`;const w=d*12;i.style.transform=`translateY(${w}px)`}})}let n=!1;function m(){n||(requestAnimationFrame(t),n=!0,setTimeout(()=>{n=!1},8))}o.forEach(e=>{e.addEventListener(\"mouseenter\",t,{passive:!0}),e.addEventListener(\"mouseleave\",t,{passive:!0})}),t(),window.addEventListener(\"scroll\",m,{passive:!0}),window.addEventListener(\"resize\",t,{passive:!0})}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",u):u();"],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/FAQ.astro?astro&type=script&index=0&lang.ts","function n(){if(!document.querySelector(\".cs-faq-group\"))return;document.querySelectorAll(\".cs-faq-item\").forEach(t=>{if(t instanceof HTMLElement){const a=t.querySelector(\".cs-button\");a&&a.addEventListener(\"click\",c=>{c.preventDefault(),c.stopPropagation(),document.querySelectorAll(\".cs-faq-item\").forEach(e=>{e!==t&&e.classList.contains(\"active\")&&e.classList.remove(\"active\")}),t.classList.toggle(\"active\")})}})}n();document.addEventListener(\"astro:page-load\",n);"],["/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/src/components/TemplateComponents/TableOfContents.astro?astro&type=script&index=0&lang.ts","let i;window.matchMedia(\"(min-width: 1024px)\").matches;function a(){document.querySelectorAll(\".cs-toc-link\").forEach(t=>{t.addEventListener(\"click\",o=>{o.preventDefault();const c=t.getAttribute(\"href\")?.substring(1),n=document.getElementById(c||\"\");if(n){const d=n.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:d,behavior:\"smooth\"})}})})}function l(e){const t=document.querySelector(\"#desktop-toc\");if(!t)return;const o=t.querySelectorAll(\".cs-toc-link\");e.forEach(c=>{if(c.isIntersecting){o.forEach(s=>s.classList.remove(\"cs-toc-current\"));const n=t.querySelector(`a[href=\"#${c.target.id}\"].cs-toc-link`);n&&n.classList.add(\"cs-toc-current\")}})}function r(){if(a(),!window.matchMedia(\"(min-width: 64rem)\").matches)return;const e=document.querySelectorAll(\"[id]\");if(!e.length)return;let t={root:null,rootMargin:\"0px 0px -50% 0px\",threshold:[.1]};i=new IntersectionObserver(l,t),e.forEach(o=>i.observe(o))}r();document.addEventListener(\"astro:after-swap\",()=>{r()});window.matchMedia(\"(min-width: 64rem)\").addEventListener(\"change\",e=>{e.matches?r():(i&&i.disconnect(),a())});"]],"assets":["/_astro/landing.D_wYLIJw.jpg","/_astro/blog-cover.D_U89e6H.jpg","/_astro/4p2a1864-copy.DAW-w_bs.jpg","/_astro/_post_.Cqo7aDMS.css","/_astro/_post_.3PA5ubgn.css","/_astro/about.B4KQTA6Z.css","/_astro/about.3FngjiYs.css","/_astro/contact.CFUKdeXJ.css","/_astro/crime-scene-cleaning.DS2Z3AVj.css","/_astro/crime-scene-cleaning.BL7AGdkD.css","/_astro/index.DEM1XPrZ.css","/_astro/index.CErR1LsW.css","/_astro/index.BbRUuYHy.css","/_redirects","/blog-placeholder-1.jpg","/favicon.png","/favicon.svg","/robots.txt","/admin/config.yml","/admin/index.html","/admin/index.js","/assets/video-captions.vtt","/assets/favicons/android-chrome-192x192.png","/assets/favicons/android-chrome-384x384.png","/assets/favicons/apple-touch-icon.png","/assets/favicons/browserconfig.xml","/assets/favicons/favicon-16x16.png","/assets/favicons/favicon-32x32.png","/assets/favicons/favicon.ico","/assets/favicons/mstile-150x150.png","/assets/favicons/site.webmanifest","/assets/fonts/roboto-v29-latin-700.woff","/assets/fonts/roboto-v29-latin-700.woff2","/assets/fonts/roboto-v29-latin-900.woff","/assets/fonts/roboto-v29-latin-900.woff2","/assets/fonts/roboto-v29-latin-regular.woff","/assets/fonts/roboto-v29-latin-regular.woff2","/images/projects/ecommerce-platform.jpg","/images/projects/mobile-app.jpg","/assets/images/Middel 2@2x.png","/assets/images/Nieuw logo.png","/assets/images/about.jpg","/assets/images/binnenontmanteling.jpg","/assets/images/brandschade-reiniging.jpg","/assets/images/cabinets-m.jpg","/assets/images/cabinets2-m.jpg","/assets/images/cabinets2-m.webp","/assets/images/cabinets2.jpg","/assets/images/call.svg","/assets/images/construction-m.jpg","/assets/images/construction-m.webp","/assets/images/construction.jpg","/assets/images/crime-scene-cleaning-01.webp","/assets/images/gecontamineerde-voertuigen.webp","/assets/images/gespecialiseerde-schoonmaak-01.jpg","/assets/images/gevangeniscellen-reinigen.webp","/assets/images/hero-m.jpg","/assets/images/hero-m.webp","/assets/images/hero.jpg","/assets/images/hero.webp","/assets/images/industriele-reiniging-productielijnen.webp","/assets/images/kts-cleaning-logo.webp","/assets/images/lgo.svg","/assets/images/logo-optimized.png","/assets/images/logo-small.png","/assets/images/logo.svg","/assets/images/machinepark-onderhoud.jpg","/assets/images/na.png","/assets/images/ontmanteling-cannabisplantage.webp","/assets/images/periodieke-reiniging.jpg","/assets/images/reiniging-na-overlijden.jpg","/assets/images/skyscraper.jpg","/assets/images/voor.png","/assets/images/waterschade-herstel.jpg","/assets/svgs/check.svg","/assets/svgs/content-circles.svg","/assets/svgs/cta-squares.svg","/assets/svgs/logo-black.svg","/assets/svgs/logo-white.svg","/assets/svgs/moon.svg","/assets/svgs/profile-woman.svg","/assets/svgs/profile.svg","/assets/svgs/service1.svg","/assets/svgs/service2.svg","/assets/svgs/service3.svg","/assets/svgs/stars.svg","/assets/svgs/sun-icon.svg","/assets/svgs/sun.svg","/assets/readme-images/100-score.png","/assets/readme-images/decapbridge-dashboard.png","/assets/readme-images/github-permissions.png","/assets/images/icons/100 propor-hover.svg","/assets/images/icons/100 propor-normaal.svg","/assets/images/icons/13 jaar ervaring-hover.svg","/assets/images/icons/13 jaar ervaring-normaal.svg","/assets/images/icons/7-hover.svg","/assets/images/icons/7-normaal.svg","/assets/images/icons/betrouwbare partner-hover.svg","/assets/images/icons/betrouwbare partner-normal.svg","/about/index.html","/admin/index.html","/bedankt/index.html","/blog/index.html","/contact/index.html","/diensten/crime-scene-cleaning/index.html","/diensten/gespecialiseerde-schoonmaak/index.html","/diensten/industriele-reiniging/index.html","/projects/index.html","/reviews/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"hdCFovv3yOJ1kye7qDC+D4NXjO5i26W3WAJV88B35Uc=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/antonpycarelle/Documents/Coding Projecten/kts-cleaning.be/ktscleaning.be/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
