<template>
    <div id="screen" class="">
        <section class="hero bg-[url('/header/back.webp')] bg-cover">
        </section>
    </div>

    <!--to top-->
    <span id="top"></span>
    <ToTop/>
    <div class="">
        <div class="p-0 absolute top-0 w-full z-10">
            <Navbar-lakeside/>
            <div class="h-[30vh] flex flex-col justify-center items-center text-center">
                <p class="title text-white lg:text-9xl">- Book Your Stay -</p>
                <p class=" text-xl font-bold text-white">Select the date range and category for which you want to obtain availability.</p>
              </div>
        </div>
    </div>

    <section class="content" style="top: 35vh;">
        <span id="top"></span>
        <NuxtLink id="to-top" href="#screen">
            <svg width="32px" class="ml-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path style="fill:#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </svg>
        </NuxtLink>
        <div class="px-4 lg:px-10 pb-10">
            <ClientOnly>
                <div ref="widgetContainer"></div>
            </ClientOnly>
        </div>
        <Footer/>
    </section>
  </template>

<script lang="ts" setup>
useSeo({
  title: 'Book Lakeside Aurora Cabins | Camp Alta Kiruna',
  description: 'Book your stay at the Lakeside Aurora Cabins at Camp Alta Kiruna. Premium lakefront cabins with stunning Northern Lights views on Lake Altajärvi in Swedish Lapland.',
  path: '/Booking-lakeside',
})
</script>
<script lang="ts">
export default {
  mounted() {
    this.$nextTick(() => {
      // Create the script element with the exact attributes
      const script = document.createElement('script');
      script.src = 'https://secured.sirvoy.com/widget/sirvoy.js';
      script.async = true;
      script.setAttribute('data-form-id', '80bf61cb7ac6ed2e');

      // Insert the script directly into the widget container
      // This mimics the behavior of having the script tag inline in HTML
      if (this.$refs.widgetContainer) {
        this.$refs.widgetContainer.appendChild(script);
      }
    });
  },
};
</script>