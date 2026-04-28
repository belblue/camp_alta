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
        <div v-if="loading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-primary"></div>
        </div>
        <div v-if="error" class="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-6 my-10 text-center">
          <p class="text-xl font-bold mb-2">Booking system temporarily unavailable</p>
          <p class="text-gray-700">Sorry, it looks like there is a problem with our booking provider. You can contact us at <a href="mailto:info@campalta.se" class="text-primary font-bold underline">info@campalta.se</a> with your booking request. Sorry for the inconvenience.</p>
        </div>
        <div id="CHECKFRONT_WIDGET_01" ref="widgetContainer"></div>
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

const widgetOptions: Record<string, string> = {
  category_id: "2",
  options: "category_select",
  provider: "droplet",
};
const itemId = route.query.item_id as string | undefined;
if (itemId) widgetOptions.item_id = itemId;

const { loading, error, widgetContainer } = useBookingWidget({
  provider: "checkfront",
  trackingTag: "booking_cabins",
  widgetOptions,
});
</script>
