//const{i18nOptions} =require('./locales/nuxt-i18n-config')

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  experimental: {
    appManifest: false, // Disable to prevent builds/meta/*.json 404 errors on cache mismatch
  },
  runtimeConfig: {
    apiBackendUrl: process.env.NUXT_API_BACKEND_URL || 'http://localhost:8000',
    public: {
      cacheVersion: "2026052002", // Update this when you need to bust cache
    },
  },
  ssr: true,
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // Block old WordPress paths - return 404 immediately
      "/wp-content/**": { redirect: { to: "/", statusCode: 301 } },
      "/wp-admin/**": { redirect: { to: "/", statusCode: 301 } },
      "/wp-includes/**": { redirect: { to: "/", statusCode: 301 } },

      // Only apply cache headers in production
      ...(process.env.NODE_ENV === "production"
        ? {
            // HTML pages - short cache for freshness
            "/": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/cabins/**": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/tours/**": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/theCamp/**": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },

            // HTML pages - top-level PascalCase routes (actual paths in pages/)
            "/Cabins": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/TheCamp": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/Tours": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/Prices": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/Booking": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/Booking-lakeside": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/FaQ": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/LakesideAuroraCabins": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },

            // HTML pages - sub-route folders
            "/booking/**": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/cabins-lakeside/**": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },
            "/docs/**": {
              headers: {
                "cache-control": "public, max-age=3600, s-maxage=7200",
              },
            },

            // API routes - very short cache
            "/api/**": {
              headers: { "cache-control": "public, max-age=60, s-maxage=300" },
            },

            // Nuxt-generated chunks - immutable, versioned by Nuxt
            "/_nuxt/**": {
              headers: {
                "cache-control":
                  "public, max-age=31536000, s-maxage=31536000, immutable",
              },
            },

            // Note: cache-control for static files in public/ (images, fonts,
            // svgs, etc.) is set by server/plugins/cache-static-assets.ts.
            // Nitro's rou3 router doesn't reliably support glob patterns like
            // /**/*.{ext} for routeRules.

            // Manifest and service worker - short cache
            "/favicon/site.webmanifest": {
              headers: { "cache-control": "public, max-age=3600" },
            },
            "/sw.js": {
              headers: {
                "cache-control": "public, max-age=0, must-revalidate",
              },
            },
            // No /** fallback: it would override the long-cache header set by
            // server/plugins/cache-static-assets.ts on files in /public. New
            // page routes must be listed explicitly above.
          }
        : {
            // Dev mode - no caching
            "/**": {
              headers: {
                "cache-control": "no-cache, no-store, must-revalidate",
              },
            },
          }),
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=5.0",
      title: "Camp Alta Kiruna - Arctic Wilderness Camp.",
      meta: [
        {
          name: "description",
          content:
            "Discover the beauty of Lapland from our cozy, affordable cabins. Dive into real winter adventure with our snowmobile, dogsled, and Northern Lights tours",
        },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },
        { name: "author", content: "Belen Acin" },
        { name: "publisher", content: "Belen Acin" },
        { name: "copyright", content: "Belen Acin" },
        {
          name: "keywords",
          content:
            "holidays, camp, kiruna, Lapland, Camp Alta, Tours, cabin, arctic, sami, northern lights, snowmobile, dogsled, Sweden, wilderness, accommodation",
        },
        { name: "page-topic", content: "Camping" },
        { name: "robots", content: "index, follow" },
        { name: "geo.region", content: "SE-BD" },
        { name: "geo.placename", content: "Kiruna, Sweden" },
        { name: "geo.position", content: "67.855800;20.225282" },
        { name: "ICBM", content: "67.855800, 20.225282" },

        // Cache optimization meta tags
        { "http-equiv": "Cache-Control", content: "public, max-age=3600" },
        { "http-equiv": "Pragma", content: "public" },
        {
          "http-equiv": "Expires",
          content: new Date(Date.now() + 3600000).toUTCString(),
        },

        // Open Graph tags for social media
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Camp Alta Kiruna - Arctic Wilderness Camp",
        },
        {
          property: "og:description",
          content:
            "Discover the beauty of Lapland from our cozy, affordable cabins. Dive into real winter adventure with our snowmobile, dogsled, and Northern Lights tours",
        },
        {
          property: "og:image",
          content: "https://campalta.net/index/index_3.webp",
        },
        { property: "og:url", content: "https://campalta.net" },
        { property: "og:site_name", content: "Camp Alta Kiruna" },
        { property: "og:locale", content: "en_US" },

        // Twitter Card tags
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Camp Alta Kiruna - Arctic Wilderness Camp",
        },
        {
          name: "twitter:description",
          content:
            "Discover the beauty of Lapland from our cozy, affordable cabins. Dive into real winter adventure with our snowmobile, dogsled, and Northern Lights tours",
        },
        {
          name: "twitter:image",
          content: "https://campalta.net/index/index_3.webp",
        },

        // Business/Local SEO
        {
          name: "business:contact_data:street_address",
          content: "Jullebovägen 2",
        },
        { name: "business:contact_data:locality", content: "Kiruna" },
        { name: "business:contact_data:postal_code", content: "981 92" },
        { name: "business:contact_data:country_name", content: "Sweden" },
        {
          name: "business:contact_data:phone_number",
          content: "+46 (0) 706 529 374",
        },
        { name: "business:contact_data:email", content: "info@campalta.se" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          type: "image/x-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          color: "#2667f7",
          href: "/favicon/safari-pinned-tab.svg",
        },
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
        { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
        {
          rel: "preload",
          href: "/logo.svg",
          as: "image",
          type: "image/svg+xml",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
      style: [
        {
          innerHTML: `
              .hero{position:relative!important;height:100vh;width:100vw;z-index:1}
              .hero img{object-fit:cover;width:100%;height:100%}
              body{font-family:'Quicksand',sans-serif;margin:0;padding:0}
              .relative{position:relative}
              .absolute{position:absolute}
              .inset-0{top:0;right:0;bottom:0;left:0}
              .w-full{width:100%}
              .h-full{height:100%}
              .h-screen{height:100vh}
              .object-cover{object-fit:cover}
              .overflow-hidden{overflow:hidden}
              .title-init{font-family:'Arial Narrow','Helvetica Condensed',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Helvetica Neue',Arial,sans-serif!important;text-transform:uppercase;color:white!important;font-weight:400;font-stretch:condensed;letter-spacing:-0.02em;opacity:1!important;visibility:visible!important}
              .z-10{z-index:10}
              .text-white{color:white}
              .px-4{padding-left:1rem;padding-right:1rem}
              .text-6xl{font-size:3.75rem;line-height:1}
              @media(min-width:768px){.md\\:text-8xl{font-size:6rem}}
              @media(min-width:1024px){.lg\\:text-9xl{font-size:8rem}}
            `,
          type: "text/css",
        },
      ],
      script: [
        // GA4 / GTM. Loaded once here (manually) because nuxt-gtag's own
        // injection emits both <link rel=preload> and <script>, which Chrome
        // fetches as two separate requests for the same URL.
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-HGKXFJ0CPJ",
          defer: true,
          "data-gtag": "",
          key: "gtag-js",
        },
        // Auto-reload on chunk loading errors (handles stale cache)
        {
          type: "text/javascript",
          innerHTML: `
                (function() {
                  function clearAllAndReload() {
                    if (sessionStorage.getItem('chunk_reload')) return;
                    sessionStorage.setItem('chunk_reload', '1');

                    var promises = [];

                    // Unregister service workers
                    if ('serviceWorker' in navigator) {
                      promises.push(
                        navigator.serviceWorker.getRegistrations().then(function(regs) {
                          return Promise.all(regs.map(function(r) { return r.unregister(); }));
                        })
                      );
                    }

                    // Clear all caches
                    if ('caches' in window) {
                      promises.push(
                        caches.keys().then(function(names) {
                          return Promise.all(names.map(function(n) { return caches.delete(n); }));
                        })
                      );
                    }

                    Promise.all(promises).finally(function() {
                      window.location.href = window.location.href.split('?')[0] + '?v=' + Date.now();
                    });
                  }

                  window.addEventListener('error', function(e) {
                    if (e.message && (e.message.includes('dynamically imported module') || e.message.includes('chunk'))) {
                      clearAllAndReload();
                    }
                  });

                  window.addEventListener('unhandledrejection', function(e) {
                    var msg = e.reason && (e.reason.message || String(e.reason));
                    if (msg && (msg.includes('dynamically imported module') || msg.includes('chunk'))) {
                      clearAllAndReload();
                    }
                  });

                  window.addEventListener('load', function() {
                    sessionStorage.removeItem('chunk_reload');
                  });
                })();
              `,
        },
        // Juicer and reCAPTCHA are now lazy-loaded on the pages that need them
        {
          type: "text/javascript",
          src: "//camp-alta.checkfront.com/lib/interface--0.js",
          defer: true,
        },
        {
          type: "text/javascript",
          src: "https://www.jscache.com/wejs?wtype=excellent&amp;uniq=250&amp;locationId=944749&amp;lang=en_US&amp;display_version=2",
          defer: true,
        },
        {
          type: "text/javascript",
          src: "https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=792&amp;locationId=944749&amp;lang=en_US&amp;border=true&amp;display_version=2",
          defer: true,
        },
        {
          type: "text/javascript",
          src: "https://www.jscache.com/wejs?wtype=cdsscrollingravenarrow&amp;uniq=166&amp;locationId=944749&amp;lang=sv&amp;border=true&amp;display_version=2",
          defer: true,
        },
        {
          type: "text/javascript",
          innerHTML: `
              // Aggressive font loading timeout
              setTimeout(function() {
                if (document.fonts && document.fonts.ready) {
                  document.fonts.ready.then(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  });
                }
                // Force fallback after 100ms
                setTimeout(function() {
                  document.documentElement.classList.add('fonts-loaded');
                }, 100);
              }, 0);
            `,
        },
        {
          type: "text/javascript",
          innerHTML: `
              (function() {
                var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
                if (!('serviceWorker' in navigator)) return;
                if (isLocal) {
                  // Dev mode: actively unregister any existing SW to prevent
                  // stale cache from serving wrong MIME types on chunked JS.
                  navigator.serviceWorker.getRegistrations().then(function(regs) {
                    regs.forEach(function(r) { r.unregister(); });
                  });
                  return;
                }
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('ServiceWorker registration successful');
                      setInterval(function() {
                        registration.active && registration.active.postMessage({type: 'CLEANUP_CACHE'});
                      }, 60000);
                    })
                    .catch(function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    });
                });
              })();
            `,
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Camp Alta Kiruna",
            description:
              "Arctic wilderness camp offering cozy cabins and adventure tours including snowmobile, dogsled, and Northern Lights experiences in Swedish Lapland.",
            url: "https://campalta.net",
            image: "https://campalta.net/index/index_3.webp",
            logo: "https://campalta.net/logo.svg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jullebovägen 2",
              addressLocality: "Kiruna",
              postalCode: "981 92",
              addressCountry: "SE",
              addressRegion: "Norrbotten",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 67.8558,
              longitude: 20.225282,
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+46-706-529-374",
              contactType: "reservations",
              email: "info@campalta.se",
            },
            openingHours: "Mo-Su 00:00-24:00",
            sameAs: [
              "https://www.instagram.com/campalta_kiruna",
              "https://www.facebook.com/campalta",
            ],
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "Cabins" },
              { "@type": "LocationFeatureSpecification", name: "Sauna" },
              {
                "@type": "LocationFeatureSpecification",
                name: "Kitchen facilities",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Shared bathrooms",
              },
              { "@type": "LocationFeatureSpecification", name: "Parking" },
            ],
            tourBookingPage: "https://campalta.net/booking/Booking-tours",
            accommodationBookingPage:
              "https://campalta.net/booking/Booking-cabins",
          }),
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2025-05-28",
  modules: ["nuxt-gtag", "@nuxt/image"],
  image: {
    quality: 85,
    format: ["webp", "jpg"],
    domains: ["campalta.net"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      default: {
        modifiers: {
          format: "webp",
          quality: 85,
        },
      },
      logo: {
        modifiers: {
          format: "webp",
          quality: 90,
        },
      },
      hero: {
        modifiers: {
          format: "webp",
          quality: 85,
          fit: "cover",
        },
      },
    },
    densities: [1, 2],
    provider: "ipx",
    ipx: {
      maxAge: 31536000,
    },
  },

  gtag: {
    id: "G-HGKXFJ0CPJ",
    // Manual mode: nuxt-gtag still queues gtag('js')/gtag('config') into
    // dataLayer, but skips its own <link rel=preload> + <script> pair (which
    // caused gtag/js?id=G-HGKXFJ0CPJ to download twice). We inject the
    // <script> ourselves below in app.head.script.
    initMode: "manual",
    config: {
      consent: {
        analytics_storage: "denied",
        ad_storage: "denied",
        wait_for_update: 500,
      },
    },
  },
});
