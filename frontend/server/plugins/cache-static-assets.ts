// Sets Cache-Control on static assets served from public/ via the Nitro
// `beforeResponse` hook. We can't use server middleware (the static handler
// runs first and skips middleware) and we can't use routeRules glob patterns
// like /**/*.{ext} (rou3 doesn't support brace-expanded extensions).
//
// `beforeResponse` fires after the static handler has set the response body
// but before headers are flushed, so we can add Cache-Control here.
//
// /sw.js is excluded (handled by an explicit routeRule with max-age=0).

const STATIC_ASSET_EXT =
  /\.(png|jpe?g|gif|webp|svg|ico|avif|woff2?|ttf|eot|otf|mp4|webm|ogg|pdf)$/i;

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event) => {
    const path = (event.path || "").split("?")[0];
    if (!STATIC_ASSET_EXT.test(path)) return;
    if (event.node.res.getHeader("cache-control")) return;
    event.node.res.setHeader(
      "cache-control",
      "public, max-age=31536000, s-maxage=31536000, immutable",
    );
  });
});
