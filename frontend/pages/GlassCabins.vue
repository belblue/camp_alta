<template>
  <div id="screen" class="max-h-screen">
    <section class="relative hero h-screen w-full overflow-hidden">
      <picture>
        <source
          media="(max-width: 640px)"
          srcset="/cabins/glass_cabin/mob/glass_14.webp"
          type="image/webp"
        />
        <img
          src="/cabins/glass_cabin/pc/glass_14.webp"
          alt="The two glass cabins among the trees on the lake shore at dusk"
          class="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="2400"
          height="1351"
        />
      </picture>
      <div class="absolute inset-0 bg-black/30"></div>
    </section>

    <!--to top-->
    <span id="top"></span>
    <ToTop />
    <div class="">
      <div class="p-0 absolute top-0 h-screen w-full z-10">
        <Navbar />

        <div
          class="h-full flex flex-col justify-center items-center text-center relative"
        >
          <p
            class="title-init relative z-10 lg:text-9xl md:text-8xl text-6xl text-white px-4"
          >
            Glass Cabins
          </p>
          <p class="barlow text-white text-2xl lg:text-4xl px-4">
            The Northern Lights from your bed
          </p>
          <!-- .btn is flex: 1 1 auto; wrapped so it does not grow to fill the flex-col hero -->
          <div class="mt-8">
            <NuxtLink
              :to="cabin.bookCtaTo"
              class="btn bg-secondary text-black text-xl py-2 px-10 font-bold"
              >Book here</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <section class="content-index">
      <!-- Intro -->
      <div class="bg-bg1 lg:px-10 pb-10">
        <div
          class="pt-4 section grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center"
        >
          <div class="px-4 lg:px-8">
            <p class="title lg:text-5xl text-center text-black">
              Two glass-roofed cabins in the forest, by the lake
            </p>
            <div class="flex justify-center pb-8">
              <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>
            </div>
            <p
              v-for="(paragraph, i) in cabin.intro.slice(0, 3)"
              :key="i"
              class="text-xl text-center mx-2 mt-4"
            >
              {{ paragraph }}
            </p>
          </div>
          <div class="w-full flex justify-center">
            <video
              class="h-[300px] md:h-[400px] lg:h-[500px] w-auto rounded-lg"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              poster="/cabins/glass_cabin/video_poster.webp"
            >
              <source src="/cabins/glass_cabin/glass_cabin.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <!-- Inside: interior carousel and the essentials -->
      <div class="bg-bg2 lg:px-10 pb-10 lg:pb-20" id="inside">
        <div class="title lg:text-9xl text-left ml-8">Inside -</div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-8"
        >
          <div class="w-full">
            <swiper
              id="glass-inside-swiper"
              class="z-0"
              :spaceBetween="10"
              :rewind="true"
              :lazy="true"
              :navigation="true"
              :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
              }"
              :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
              :keyboard="{
                enabled: true,
              }"
              :pagination="{
                dynamicBullets: true,
                clickable: true,
              }"
              :slidesPerView="1"
            >
              <swiper-slide v-for="slide in insideSlides" :key="slide.src">
                <img
                  :src="slide.src"
                  :alt="slide.alt"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
            </swiper>
          </div>
          <div>
            <!-- intro[3] is the "Inside, the cabin provides..." paragraph in data/cabins.ts -->
            <p class="text-xl mx-2">{{ cabin.intro[3] }}</p>
            <ul class="ml-10 mt-6">
              <li v-for="item in essentials" :key="item" class="list-disc text-xl">
                {{ item }}
              </li>
            </ul>
            <div class="grid justify-center mt-8">
              <NuxtLink
                to="/cabins/Glass-cabin"
                class="btn bg-primary text-xl py-2 px-10"
                >Full details and all photos</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Curated gallery -->
      <div class="bg-bg1 lg:px-10 py-10">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4">
          <NuxtLink
            v-for="shot in galleryShots"
            :key="shot.src"
            to="/cabins/Glass-cabin"
            class="block overflow-hidden rounded-lg"
          >
            <img
              :src="shot.src"
              :alt="shot.alt"
              class="w-full h-[300px] object-cover transition-transform hover:scale-105"
              loading="lazy"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Around the cabin -->
      <div class="bg-bg2 lg:px-10 pb-10 lg:pb-20" id="around">
        <div class="title lg:text-9xl text-left ml-8">Around the cabin -</div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4">
          <div v-for="card in aroundCards" :key="card.title" class="card-cabin">
            <NuxtLink class="card w-full block" :to="card.to">
              <span
                class="card__image relative block overflow-hidden rounded-t-lg"
              >
                <img
                  :src="card.src"
                  :alt="card.alt"
                  class="w-full h-[200px] md:h-[280px] object-cover"
                  loading="lazy"
                />
              </span>
              <span class="block pl-3 pb-4">
                <p class="text-4xl caption text-black mt-4">{{ card.title }}</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">{{ card.text }}</p>
                <button class="btn flex bg-primary mt-4">
                  Discover more<img
                    src="/arrow-btn.svg"
                    alt=""
                    class="w-5 mt-1 ml-3"
                  />
                </button>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Booking and getting here -->
      <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20 pt-10">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
          <div class="px-2">
            <p class="title-info">Ready to book?</p>
            <p class="line w-2/3 lg:w-1/3 ml-2"></p>
            <div class="grid justify-center my-5">
              <NuxtLink
                :to="cabin.bookCtaTo"
                class="btn bg-primary mt-6 text-xl py-2 px-20"
                >Book here</NuxtLink
              >
            </div>
            <p
              v-for="(paragraph, i) in cabin.outro"
              :key="i"
              class="text-xl mt-4 ml-2"
            >
              {{ paragraph }}
            </p>
          </div>
          <div class="px-2">
            <p class="title-info">Getting here</p>
            <p class="line w-2/3 lg:w-1/3 ml-2"></p>
            <p class="text-xl pt-4 ml-2">
              Our Shuttle service is available from 15th November to 15th
              April. You can easily book our transportation through our booking
              system to ensure a hassle-free experience.
            </p>
            <div class="grid justify-center my-5">
              <NuxtLink
                to="/booking/Booking-services"
                class="btn bg-primary mt-6 text-xl py-2 px-20"
                >Book shuttle</NuxtLink
              >
            </div>
            <p class="text-xl mt-8 ml-2">
              During the summer months, you will need to arrange your own
              transportation to reach us.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="bg-bg2 lg:px-10 pb-10 lg:pb-20" id="Contact">
        <p class="title lg:text-9xl text-center">- Contact -</p>
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div class="mb-8">
            <p class="text-xl text-left flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                height="32"
                class="mb-2 ml-1 mr-4"
              >
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  style="fill: #007984"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              105 ETIAN, 981 92 Kiruna, Sweden
            </p>
            <p class="text-xl text-center flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                class="mb-2 mr-4"
              >
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  fill="#007984"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <EmailLink />
            </p>
            <p class="text-xl text-left flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                class="mr-2 mb-4"
                xmlns:v="https://vecta.io/nano"
              >
                <path
                  d="M170.639 39.174c-7.215-17.429-26.236-26.705-44.415-21.739L43.767 39.923c-16.304 4.498-27.642 19.303-27.642 36.169 0 231.818 187.965 419.783 419.783 419.783 16.866 0 31.671-11.338 36.169-27.642l22.488-82.457c4.966-18.178-4.31-37.2-21.739-44.415l-89.954-37.481c-15.273-6.372-32.983-1.968-43.384 10.869l-37.855 46.195c-65.966-31.203-119.376-84.613-150.578-150.579l46.195-37.762c12.837-10.495 17.241-28.11 10.869-43.384l-37.481-89.954z"
                  fill="#007984"
                  stroke="none"
                  stroke-width="30"
                />
              </svg>
              +46 (0) 706 529 374
            </p>
            <div class="flex justify-center mt-8">
              <iframe
                class="mb-4 w-full max-w-[400px]"
                style="border: 0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771125.8104534644!2d19.95197992395521!3d67.82188320000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0c7dcfface7c5%3A0x8ac9956e5888d6e3!2sCamp%20Alta!5e0!3m2!1ses!2sad!4v1681807724425!5m2!1ses!2sad"
                loading="lazy"
                title="Camp Alta location on Google Maps"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { campCabins, findCabin } from "~/data/cabins";

// The landing sells the cabin; the copy, booking link and outro come from the
// same data entry that renders the technical page at /cabins/Glass-cabin.
const cabin = findCabin(campCabins, "Glass-cabin");
if (!cabin) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

useSeo({
  title: "Glass Cabins - Northern Lights from Bed | Camp Alta Kiruna",
  description:
    "Two glass-roofed cabins for two at Camp Alta Kiruna. Watch the Northern Lights from bed, warm up by the wood-burning fireplace and wake up beside Lake Altajärvi in Swedish Lapland.",
  path: "/GlassCabins",
  image: "/cabins/glass_cabin/pc/glass_14.webp",
});

// Interior shots for the "Inside" carousel; the exteriors go in the gallery below
const insideSlides = [
  { src: "/cabins/glass_cabin/pc/glass_6.webp", alt: "View of the forest and lake from the bed" },
  { src: "/cabins/glass_cabin/pc/glass_5.webp", alt: "Double bed with reading lights and round window" },
  { src: "/cabins/glass_cabin/pc/glass_7.webp", alt: "Seating area with two chairs and the fireplace" },
  { src: "/cabins/glass_cabin/pc/glass_8.webp", alt: "Table with two chairs beside the glass wall" },
  { src: "/cabins/glass_cabin/pc/glass_9.webp", alt: "Fridge, heater and wood-burning fireplace" },
  { src: "/cabins/glass_cabin/pc/glass_10.webp", alt: "Shelf with drinking water tank and the fireplace" },
];

const essentials = [
  "Sleeps 2",
  "10 m², open plan",
  "Double bed (140 cm)",
  "Wood-burning fireplace, electric and diesel heating",
  "Fridge, kettle, drinking water, DAB radio with Bluetooth",
  "WiFi",
  "Bed linen and towels included",
];

const galleryShots = [
  { src: "/cabins/glass_cabin/mob/glass_1.webp", alt: "Glass cabin exterior beside the lake" },
  { src: "/cabins/glass_cabin/mob/glass_3.webp", alt: "Glass cabin entrance with the door open" },
  { src: "/cabins/glass_cabin/mob/glass_12.webp", alt: "Aerial view of the glass cabin at the water's edge" },
  { src: "/cabins/glass_cabin/mob/glass_13.webp", alt: "Aerial view of the glass roof and terrace" },
];

const aroundCards = [
  {
    title: "Wood-fired saunas",
    text: "Wood-fired saunas, including one that floats on the lake. Free for all our guests.",
    src: "/camp/sauna/sauna_1.webp",
    alt: "The floating sauna on the frozen lake at Camp Alta",
    to: "/TheCamp",
  },
  {
    title: "Fire hut and barbecue",
    text: "Barbecue pits and a fire hut for grilling under the Midnight Sun or the Northern Lights.",
    src: "/camp/firehut/fire_hut_4.webp",
    alt: "The fire hut at Camp Alta at sunset",
    to: "/TheCamp",
  },
  {
    title: "Service building",
    text: "Kitchen, WC and showers in the common service building, 90 m from the cabin.",
    src: "/cabins/common_areas/kitchen_pc_1.webp",
    alt: "The common kitchen in the service building",
    to: "/cabins/Glass-cabin",
  },
];
</script>
