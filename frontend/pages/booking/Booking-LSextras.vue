<template>
    <div class="overflow-x-hidden">
        <Navbar-lakeside/>
        <section class="">
            <div class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
                <p class="pt-24 font-bold">Select your dates and complete your booking.</p>
                <ClientOnly>
                    <div v-if="loading" class="flex justify-center items-center py-20">
                        <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-primary"></div>
                    </div>
                    <div v-if="error" class="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-6 my-10 text-center">
                        <p class="text-xl font-bold mb-2">Booking system temporarily unavailable</p>
                        <p class="text-gray-700">Sorry, it looks like there is a problem with our booking provider. You can contact us at <EmailLink link-class="text-primary font-bold underline" /> with your booking request. Sorry for the inconvenience.</p>
                    </div>
                    <div ref="widgetContainer"></div>
                </ClientOnly>
            </div>
            <Footer/>
        </section>
    </div>
  </template>
<script lang="ts" setup>
useHead({
  link: [{ rel: 'preconnect', href: 'https://secured.sirvoy.com' }],
})

useSeo({
  title: 'Lakeside Cabin Extras | Camp Alta Kiruna',
  description: 'Book extra services and add-ons for your Lakeside Aurora Cabin stay at Camp Alta Kiruna. Enhance your premium lakefront experience in Swedish Lapland.',
  path: '/booking/Booking-LSextras',
})

const { loading, error, widgetContainer } = useBookingWidget({
  provider: 'sirvoy',
  trackingTag: 'booking_lsextras',
  formId: 'afdb2acb6ef362e0',
})
</script>