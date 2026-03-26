<template>
  <div id="screen">
    <section
      class="hero bg-cover bg-center"
      style="
        height: 40vh;
        background-image:
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url(&quot;/tours/snowmobile/snowmobile_1b.webp&quot;);
      "
    ></section>
  </div>
  <div class="">
    <div class="p-0 absolute top-0 w-full z-10">
      <Navbar />
      <div
        class="h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <p class="title text-white lg:text-9xl relative z-10">Book Tours</p>
      </div>
    </div>
  </div>
  <section class="content-cabins">
    <!-- Breadcrumbs -->
    <nav class="bg-bg2 px-4 lg:px-10 pt-4 pb-2 text-sm text-gray-500">
      <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/Booking" class="hover:text-primary">Booking</NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-black font-semibold">Tours</span>
    </nav>

    <div class="bg-bg2 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
      <p class="pt-4 font-bold text-xl">
        Select the date range for which you want to obtain availability.
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
  title: "Book Arctic Tours | Camp Alta Kiruna",
  description:
    "Book guided Arctic tours from Camp Alta Kiruna. Experience dog sledding, Northern Lights expeditions, snowmobile adventures, and more in Swedish Lapland.",
  path: "/booking/Booking-tours",
});
</script>
<script lang="ts">
export default {
  methods: {
    initializeWidget() {
      new DROPLET.Widget({
        host: "camp-alta.checkfront.com",
        target: "CHECKFRONT_WIDGET_01",
        category_id: "3",
        options: "category_select",
        provider: "droplet",
      }).render();
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
