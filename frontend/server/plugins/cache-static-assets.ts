import { defineNitroPlugin } from "nitropack/runtime";

// Sets Cache-Control on static assets served from public/ via the Nitro
// `beforeResponse` hook. We can't use server middleware (the static handler
// runs first and skips middleware) and we can't use routeRules glob patterns
// like /**/*.{ext} (rou3 doesn't support brace-expanded extensions).
//
// `beforeResponse` fires after the static handler has set the response body
// but before headers are flushed, so we can add Cache-Control here.
//
// We OVERRIDE any cache-control header that other layers (routeRules) may
// have set, because routeRules like `/cabins/**` (intended for HTML sub-pages
// such as /cabins/Cabin-D123) also match images in public/cabins/ and would
// otherwise downgrade them from 1yr-immutable to the HTML's 1h cache.
//
// The regex only matches asset extensions, so /sw.js (no .js in the regex)
// keeps its routeRule-set `max-age=0, must-revalidate`.

const STATIC_ASSET_EXT =
  /\.(png|jpe?g|gif|webp|svg|ico|avif|woff2?|ttf|eot|otf|mp4|webm|ogg|pdf)$/i;

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event) => {
    const path = (event.path || "").split("?")[0];
    if (!STATIC_ASSET_EXT.test(path)) return;
    event.node.res.setHeader(
      "cache-control",
      "public, max-age=31536000, s-maxage=31536000, immutable",
    );
  });
});
