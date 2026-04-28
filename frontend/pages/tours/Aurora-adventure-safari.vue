<template>
  <div id="screen">
    <section class="hero bg-[url('/tours/safari/safari_1.webp')] bg-cover">
    </section>

    <!--to top-->
    <span id="top"></span>
    <ToTop />
    <div class="">
      <div class="p-0 absolute top-0 h-[50vh] w-full z-10">
        <Navbar />
        <div
          class="h-[60vh] flex flex-col justify-center items-center text-center"
        >
          <p class="title md:text-8xl text-white">
            Aurora Adventure Safari
          </p>
        </div>
      </div>
    </div>
    <section class="content-cabins">
      <div class="bg-bg1 px-2 lg:px-10 pb-10">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center mt-4">
          <div class="lg:mr-10 md:pt-10">
            <p class="text-xl lg:mt-8 text-left">
              Join us on a magical two-hour evening adventure through the Arctic wilderness.
            </p>
            <p class="text-xl lg:mt-8 text-left mt-4">
              Sit back in a comfortable sled pulled by your guide's snowmobile as we leave the lights of Kiruna behind and journey into the silent, snowy landscapes. With clear skies, you'll have the chance to witness the Northern Lights dancing above, while your guide shares stories of Lapland and the forests of the north and helps capture the moment.
            </p>
            <div class="md:hidden my-4 flex justify-center">
              <img
                src="/tours/safari/safari_2.webp"
                alt="Aurora Adventure Safari experience in Swedish Lapland"
                class=""
              />
            </div>
            <p class="text-xl lg:mt-8 text-left">
              This experience is designed for guests who want to enjoy the beauty of the Arctic night without driving themselves — a safe, cozy, and unforgettable way to hunt for the Aurora Borealis.
            </p>
          </div>
          <div class="mt-4 hidden md:flex justify-center w-full h-full">
            <img
              src="/tours/safari/safari_2.webp"
              alt="Northern Lights safari expedition from Camp Alta Kiruna"
              class="object-cover"
            />
          </div>
          <div class="mt-4 md:hidden flex justify-center w-full h-[70vh]">
            <img
              src="/tours/safari/safari_1.webp"
              alt="Arctic wilderness safari under the Northern Lights"
              class="object-cover"
            />
          </div>
        </div>
      </div>

      <div class="bg-bg2 px-2 lg:px-10 pb-10">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
          <div
            class="lg:flex md:hidden hidden mt-4 justify-center w-full h-full"
          >
            <img
              src="/tours/safari/safari_3.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="lg:ml-10 md:pt-10">
            <p class="title-info pl-0">Tour details</p>
            <p class="line w-1/2"></p>
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Starting point:</span> Camp Alta
              (Jullebovägen 2, Kiruna)
            </p>
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Time: </span>21:00 – 23:00
            </p>
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Duration: </span>2 hours (without transfers)
            </p>
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Distance covered: </span>18km
            </p>
            <p class="text-xl mt-4 text-left font-bold">Prices per person:</p>
            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">Adult: 800 SEK per person</li>
              <li class="list-disc text-xl">Child: 500 SEK (4-12 years old)</li>
            </ul>
            <div class="grid justify-center mt-5">
              <NuxtLink
                to="/booking/Booking-tours"
                class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20"
                >Book here</NuxtLink
              >
            </div>
          </div>
          <div
            class="md:flex lg:hidden hidden mt-4 justify-center w-full h-full"
          >
            <img
              src="/tours/safari/safari_3.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="md:hidden mt-4 flex justify-center">
            <img src="/tours/safari/safari_4.webp" alt="" class="" />
          </div>
        </div>
      </div>
      <div class="bg-bg1 px-2 lg:px-10 pb-10">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4">
          <div class="lg:mr-10">
            <p class="title-info pl-0">Additional information</p>
            <p class="line w-1/2"></p>
            <p class="text-xl mt-4 text-left">
              Our guides will provide all necessary equipment, training, and ensure your safety throughout the journey.
            </p>
            <p class="text-xl mt-4 text-left font-bold">
              Included in the price of the tour:
            </p>
            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">
                Round-trip transfer to/from Kiruna
              </li>
              <li class="list-disc text-xl">
                Warm winter clothes (winter overall, boots, hats, mittens) and helmets
              </li>
              <li class="list-disc text-xl">
                A picture of you in the wilderness
              </li>
            </ul>
            <p class="text-xl mt-4 text-left font-bold">What to Bring:</p>

            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">
                Contact lenses instead of glasses are recommended
              </li>
              <li class="list-disc text-xl">
                Warm base layers (thermoactive underwear, warm socks)
              </li>
            </ul>
          </div>
          <div class="mt-4 flex md:hidden justify-center">
            <img src="/tours/safari/safari_5.webp" alt="" class="" />
          </div>
          <div class="mt-4 md:flex hidden justify-center w-full h-full">
            <img
              src="/tours/safari/safari_4.webp"
              alt=""
              class="object-cover"
            />
          </div>
        </div>
      </div>
      <div class="bg-bg2 px-2 lg:px-10 pb-5">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
          <div class="lg:flex mt-4 hidden justify-center w-full h-full">
            <img
              src="/tours/safari/safari_1.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="lg:ml-10 md:pt-10">
            <p class="title-info pl-0">Transport options</p>
            <p class="line w-2/3"></p>
            <p class="text-xl mt-8 text-left">
              <span class="font-bold">Self-Drive:</span> Camp Alta Kiruna,
              Jullebovägen 2, 981-92 Kiruna (approximately a 15-minute drive from Kiruna).
            </p>
            <p class="text-xl mt-8 text-left">
              <span class="font-bold">Shuttle Service:</span> We offer
              round-trip transfers from/to Kiruna Tourist Office with our shuttle service.
            </p>
            <p class="text-xl mt-4 text-left font-bold">Pick-up time:</p>
            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">
                20:30 from Kiruna in Swedish Lapland Tourist Office (New City Centre)
              </li>
            </ul>
            <p class="text-xl mt-4 text-left">
              For further information or to make any special
              arrangements, please contact us by email or call.
            </p>

            <div class="grid justify-center mt-5">
              <NuxtLink
                to="/booking/Booking-tours"
                class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20"
                >Book here
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!--phone-->
      <div class="bg-bg1 px-2 lg:px-10 pb-10 block lg:hidden pt-4">
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
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="https://campalta.se/tours/safari/safari_5.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/safari/safari_2.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/safari/safari_3.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/safari/safari_4.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/safari/safari_5.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
        </swiper>
      </div>
            <!--desktop-->
      <div class="bg-bg1 px-2 lg:px-10 pb-10 hidden lg:block pt-4">
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
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="https://campalta.se/tours/safari/safari_5.webp"
                alt=""
                class=""
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/safari/safari_2.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/safari/safari_3.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/safari/safari_4.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/safari/safari_5.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Safari</p>
          </swiper-slide>
        </swiper>
      </div>
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Aurora Adventure Safari - Northern Lights by Snowmobile Sled | Camp Alta',
  description: 'A 2-hour evening snowmobile-sled safari through Arctic wilderness hunting for Northern Lights. Departs from Camp Alta Kiruna. 850 SEK per adult.',
  path: '/tours/Aurora-adventure-safari',
  image: '/tours/safari/safari_1.webp',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Aurora Adventure Safari',
      description: '2-hour evening snowmobile-sled safari through Arctic wilderness for Northern Lights viewing. 18km journey from Camp Alta.',
      touristType: 'Nature Tourism',
      image: 'https://campalta.net/tours/safari/safari_1.webp',
      duration: 'PT2H',
      provider: { '@type': 'LodgingBusiness', name: 'Camp Alta Kiruna', url: 'https://campalta.net' },
      offers: [
        { '@type': 'Offer', name: 'Aurora Adventure Safari (adult)', price: '800', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Aurora Adventure Safari (child 4-12)', price: '500', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
      ],
      location: { '@type': 'Place', name: 'Camp Alta, Kiruna', address: { '@type': 'PostalAddress', streetAddress: 'Jullebovägen 2', addressLocality: 'Kiruna', postalCode: '981 92', addressCountry: 'SE' } },
    }),
  }],
})

import { onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

let ticking = false;
function parallax() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector(".hero") as HTMLElement;
      const heroText = document.querySelector(".hero-text") as HTMLElement;

      if (heroImage != null && heroText != null) {
        heroText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        const opacity = 1 - scrollPosition / heroImage.offsetHeight;
        heroImage.style.opacity = opacity.toString();
      }
      ticking = false;
    });
    ticking = true;
  }
}

onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});
</script>
