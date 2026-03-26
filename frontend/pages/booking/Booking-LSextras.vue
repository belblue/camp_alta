<template>

    <div class="">
        <Navbar-lakeside/> 
        <section class="">
            <div class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
                <p class="pt-24 font-bold">Select your dates and complete your booking.</p>
                <ClientOnly>
                    <div ref="widgetContainer"></div>
                </ClientOnly>
            </div>
            <Footer/>
        </section>
    </div>
  </template>
<script lang="ts" setup>
useSeo({
  title: 'Lakeside Cabin Extras | Camp Alta Kiruna',
  description: 'Book extra services and add-ons for your Lakeside Aurora Cabin stay at Camp Alta Kiruna. Enhance your premium lakefront experience in Swedish Lapland.',
  path: '/booking/Booking-LSextras',
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
      script.setAttribute('data-form-id', 'afdb2acb6ef362e0');

      // Insert the script directly into the widget container
      // This mimics the behavior of having the script tag inline in HTML
      if (this.$refs.widgetContainer) {
        this.$refs.widgetContainer.appendChild(script);
      }
    });
  },
};
</script>