<template>
  <div id="screen">
    <section
      class="hero bg-[url('/header/header_aboutcamp.webp')] bg-cover bg-center"
      style="height: 40vh"
    ></section>
  </div>
  <div class="">
    <div class="p-0 absolute top-0 w-full z-10">
      <Navbar />
      <div
        class="h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <p class="title text-white lg:text-9xl relative z-10">Book a Cabin</p>
      </div>
    </div>
  </div>
  <section class="content-cabins">
    <!-- Breadcrumbs -->
    <nav class="bg-bg2 px-4 lg:px-10 pt-4 pb-2 text-sm text-gray-500">
      <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/Cabins" class="hover:text-primary">Cabins</NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-black font-semibold">Book</span>
    </nav>

    <div class="bg-bg2 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
      <p class="pt-4 font-bold text-xl">
        <template v-if="cabinName">
          Book <span class="text-primary">{{ cabinName }}</span> — select your
          dates below
        </template>
        <template v-else>
          Select the date range for which you want to obtain availability.
        </template>
      </p>
      <p v-if="cabinName" class="text-sm text-gray-500 mt-1">
        <NuxtLink to="/Cabins" class="underline hover:text-primary"
          >← Browse all cabins</NuxtLink
        >
      </p>
      <ClientOnly>
      <div id="CHECKFRONT_WIDGET_01">
        <p
          id="CHECKFRONT_LOADER"
          style="
            background: url(&quot;//camp-alta.checkfront.com/images/loader.gif&quot;)
              left center no-repeat;
            padding: 5px 5px 5px 20px;
          "
        >
          Searching Availability...
        </p>
      </div>
      </ClientOnly>
    </div>

    <!-- Trust signals -->
    <div class="bg-bg1 px-4 lg:px-10 py-10">
      <div class="flex flex-col items-center justify-center text-center">
        <a
          target="_blank"
          href="https://www.tripadvisor.com/Hotel_Review-g189815-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html"
        >
          <img
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg"
            alt="TripAdvisor"
            class="h-12 mb-2"
          />
        </a>
        <p class="text-sm text-gray-600">Excellent reviews on TripAdvisor</p>
      </div>
    </div>

    <Footer />
  </section>
</template>
<script lang="ts" setup>
useSeo({
  title: "Book a Cabin in Kiruna | Camp Alta",
  description:
    "Book a cozy cabin at Camp Alta Kiruna. Choose from a variety of cabin types for your Arctic getaway in Swedish Lapland, from small couples cabins to larger family cottages.",
  path: "/booking/Booking-cabins",
});

const route = useRoute();
const cabinName = computed(() => {
  const name = route.query.cabin as string | undefined;
  return name || "";
});
</script>
<script lang="ts">
export default {
  methods: {
    initializeWidget() {
      const widgetOptions: Record<string, string> = {
        host: "camp-alta.checkfront.com",
        target: "CHECKFRONT_WIDGET_01",
        category_id: "2",
        options: "category_select",
        provider: "droplet",
      };

      // If an item_id is provided via query param, pre-select that item
      const itemId = new URLSearchParams(window.location.search).get("item_id");
      if (itemId) {
        widgetOptions.item_id = itemId;
      }

      new DROPLET.Widget(widgetOptions).render();
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "//camp-alta.checkfront.com/lib/interface--0.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = this.initializeWidget;
    document.head.appendChild(script);
  },
};
</script>
