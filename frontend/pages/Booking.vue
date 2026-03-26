<template>
    <div id="screen">
      <section class="hero bg-[url('/header/header_aboutcamp.webp')] bg-cover bg-center" style="height: 40vh;">
      </section>
    </div>
    <div class="">
      <div class="p-0 absolute top-0 w-full z-10">
        <Navbar/>
        <div class="h-[60vh] flex flex-col justify-center items-center text-center">
          <p class="title text-white lg:text-9xl relative z-10">Booking</p>
        </div>
      </div>
    </div>
    <section class="content-cabins">
      <!-- Breadcrumbs -->
      <nav class="bg-bg2 px-4 lg:px-10 pt-4 pb-2 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-black font-semibold">Booking</span>
      </nav>

      <div class="bg-bg2 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
        <p class="pt-4 font-bold text-xl">Select the date range for which you want to obtain availability.</p>
        <ClientOnly>
          <div id="CHECKFRONT_WIDGET_01"><p id="CHECKFRONT_LOADER" style="background: url('//camp-alta.checkfront.com/images/loader.gif') left center no-repeat; padding: 5px 5px 5px 20px">Searching Availability...</p></div>
        </ClientOnly>
      </div>

      <!-- Lakeside Aurora Cabins -->
      <div class="bg-bg2 px-4 lg:px-10 pb-10 text-center">
        <div class="bg-white rounded-lg shadow-md max-w-2xl mx-auto overflow-hidden md:flex">
          <img src="/lakeside/general/gen_9.webp" alt="Lakeside Aurora Cabins" class="w-full md:w-1/2 h-48 md:h-auto object-cover"/>
          <div class="p-6 flex flex-col justify-center">
            <p class="text-xl font-bold">Looking for Lakeside Aurora Cabins?</p>
            <p class="text-gray-600 mt-2">Our premium lakefront cabins have a separate booking system.</p>
            <NuxtLink to="/Booking-lakeside" class="btn bg-tertiary text-white mt-4 inline-block text-lg py-2 px-10">Book Lakeside Cabins</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Trust signals -->
      <div class="bg-bg1 px-4 lg:px-10 py-10">
        <div class="flex flex-col items-center justify-center text-center">
          <a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g189815-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg" alt="TripAdvisor" class="h-12 mb-2"/>
          </a>
          <p class="text-sm text-gray-600">Excellent reviews on TripAdvisor</p>
        </div>
      </div>

      <Footer/>
    </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Book Your Stay - Cabins & Tours | Camp Alta Kiruna',
  description: 'Book your stay at Camp Alta Kiruna. Browse availability for cabins, tours, caravan spots, and extra services in the heart of Swedish Lapland.',
  path: '/Booking',
})
</script>
<script lang="ts">
export default {
  methods: {
    initializeWidget() {
      new DROPLET.Widget({
        host: 'camp-alta.checkfront.com',
        target: 'CHECKFRONT_WIDGET_01',
        options: 'category_select',
        category_id: '2,3,7,6,4,9',
        provider: 'droplet',
      }).render();
    },
  },
  mounted() {
    const script = document.createElement('script');
    script.src = '//camp-alta.checkfront.com/lib/interface--0.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = this.initializeWidget;
    document.head.appendChild(script);
  },
};
</script>
