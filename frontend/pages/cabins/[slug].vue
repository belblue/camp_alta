<template>
    <div id="screen">
        <Navbar/>


        <!--to top-->
        <span id="top"></span>
        <ToTop/>
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">{{ cabin.heading }}</p>
                <div class="flex justify-center pb-8">
                    <p :class="cabin.titleLineClass"></p>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2">
                        <p v-for="(paragraph, i) in cabin.intro" :key="i" class="text-xl mt-4">{{ paragraph }}</p>
                    </div>
                    <div :class="cabin.heroWrapperClass ?? 'mt-4 flex  justify-center'">
                        <img :src="cabin.heroImage.src" :alt="cabin.heroImage.alt" :class="cabin.heroImage.imgClass">
                    </div>
                </div>
        </div>
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li v-for="item in cabin.infoLeft" :key="item.label" class="list-disc text-xl"><span class="font-bold">{{ item.label }}</span>{{ item.text }}<span v-if="item.superscript" class="superscript">2</span></li>
                </ul>
                <ul class="ml-10 lg:ml-16 lg:pt-4 md:pt-4">
                    <li v-for="item in cabin.infoRight" :key="item.label" class="list-disc text-xl"><span class="font-bold">{{ item.label }}</span>{{ item.text }}<span v-if="item.superscript" class="superscript">2</span></li>
                </ul>
            </div>
            <div class="grid justify-center mt-10">
                <NuxtLink :to="cabin.bookCtaTo" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">{{ cabin.bookCtaLabel }}</NuxtLink>
            </div>
            <div class="lg:mr-10 text-left">
                <p v-for="(paragraph, i) in cabin.outro" :key="i" class="text-xl mt-4">{{ paragraph }}</p>
            </div>
        </div>
          <!--desktop-->
          <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 hidden lg:block">
            <swiper
                    class="z-0"
                    :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
                    :rewind="true"
                    :lazy="true"
                    :navigation="true"
                    :keyboard="{
                        enabled: true,
                    }"
                    :pagination="{
                        dynamicBullets: true,
                        clickable: true,
                    }"
                    >
                    <template v-for="(slide, i) in cabin.galleryDesktop" :key="i">
                        <swiper-slide v-if="slide.images.length === 2" class="" >
                            <div class="grid lg:grid-cols-2 ">
                                <div class="flex justify-center">
                                    <img :src="slide.images[0].src" :alt="slide.images[0].alt" :class="slide.images[0].imgClass" loading="lazy">
                                </div>
                                <div class="flex justify-center">
                                    <img :src="slide.images[1].src" :alt="slide.images[1].alt" :class="slide.images[1].imgClass" loading="lazy">
                                </div>
                            </div>
                            <p class="text-center mt-3 mb-6 text-2xl">{{ slide.caption }}</p>
                        </swiper-slide>
                        <swiper-slide v-else>
                            <div  class="flex justify-center">
                                <img :src="slide.images[0].src" :alt="slide.images[0].alt" :class="slide.images[0].imgClass" loading="lazy">
                            </div>
                            <p class="text-center mt-3 mb-6 text-2xl">{{ slide.caption }}</p>
                        </swiper-slide>
                    </template>
            </swiper>
        </div>

        <!--phone carousel-->
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 lg:hidden block">
            <swiper
                    class="z-0"
                    :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
                    :rewind="true"
                    :lazy="true"
                    :navigation="true"
                    :keyboard="{
                        enabled: true,
                    }"
                    :pagination="{
                        dynamicBullets: true,
                        clickable: true,
                    }"
                    >
                    <swiper-slide v-for="(slide, i) in cabin.galleryMobile" :key="i">
                        <div  class="flex justify-center h-[90vh]">
                            <img :src="slide.images[0].src" :alt="slide.images[0].alt" :class="slide.images[0].imgClass" loading="lazy">
                        </div>
                        <p class="text-center mt-3 mb-6 text-2xl">{{ slide.caption }}</p>
                    </swiper-slide>
            </swiper>
        </div>
        <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20">
            <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                <div class="px-2">
                    <p class="title-info">Getting here</p>
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>
                    <p class="text-xl pt-4 ml-2 ">Our Shuttle service is available from 15th November to 15th April. You can easily book our transportation through our booking system to ensure a hassle-free experience.</p>
                    <div class="grid justify-center my-5">
                        <NuxtLink to="/booking/Booking-services" class="btn bg-primary mt-6 text-xl py-2 px-20">Book shuttle</NuxtLink>
                    </div>
                    <p class="text-xl mt-8 ml-2" > During the summer months, you will need to arrange your own transportation to reach us.</p>
                </div>
                <div class="px-2">
                    <p class="title-info">Need help with the booking? </p>
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>
                    <p class="text-xl ml-2 pt-4">If you want help with your reservation, please contact us via email at <EmailLink /></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Keyboard, Lazy} from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { campCabins, findCabin, buildCabinJsonLd } from '~/data/cabins';

// Remount the component on every cabin change so Swiper state cannot leak
definePageMeta({ key: (route) => route.fullPath })

const route = useRoute()
const cabin = findCabin(campCabins, String(route.params.slug))
if (!cabin) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Canonical path and JSON-LD are always built from the data slug (exact
// casing), never from the request params.
useSeo({
  title: cabin.seo.title,
  description: cabin.seo.description,
  path: `/cabins/${cabin.slug}`,
  image: cabin.seo.image,
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify(buildCabinJsonLd(cabin.jsonLd)),
  }],
})
</script>
