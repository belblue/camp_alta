<template>
  <div id="screen">
    <section
      class="hero bg-[url('/camp/general/general_22.webp')] bg-cover"
    ></section>
  </div>
  <span id="top"></span>
  <ToTop />
  <div class="">
    <div class="p-0 absolute top-0 h-[50vh] w-full z-10">
      <Navbar />
      <div
        class="h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <p class="title text-white lg:text-9xl">Prices</p>
      </div>
    </div>
  </div>
  <section class="content-cabins">
    <div class="bg-bg2 px-2 lg:px-10 pb-20" id="summer">
      <!--v-if="season=='summer'" -->
      <p class="title-pages text-center text-black pt-8">- Cabins -</p>

      <div class="flex justify-center">
        <div class="w-full md:mx-8 bg-white rounded-xl text-center py-12">
          <div class="lg:mx-6 my-3">
            <p class="text-xl px-4">
              You can check the current prices directly in our booking widget
            </p>
            <div class="grid justify-center mt-8">
              <NuxtLink
                to="/booking/Booking-cabins"
                class="bg-primary text-white py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all"
                >Check prices</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bg1 px-2 lg:px-10 pb-20">
      <p class="title-pages text-center text-black">- Camping -</p>
      <p class="text-center text-xl mt-6">
        During the winter season (15th November - 15th April), electricity is
        not provided for campervans. The use of the dump station may not be
        possible as soon as temperatures drop to minus.
      </p>
      <div class="flex justify-center mt-8 mb-10">
        <div class="bg-white md:md:mx-8 rounded-xl w-full">
          <div class="lg:mx-6 my-3">
            <div class="grid grid-cols-3 text-center">
              <p class="text-xl font-bold">Service</p>
              <p class="text-xl font-bold">Rate</p>
              <p class="text-xl font-bold">Additional person</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">With electricity</p>
              <p class="text-xl">390 SEK</p>
              <p class="text-xl">50 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Without electricity</p>
              <p class="text-xl">350 SEK</p>
              <p class="text-xl">50 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Tent</p>
              <p class="text-xl">300 SEK (max 2 people)</p>
              <p class="text-xl">50 SEK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bg2 px-2 lg:px-10 pb-20">
      <p class="title-pages text-center text-black pt-10">- Tours -</p>
      <p class="text-center text-xl mt-8">
        Only available during the winter season. From 15th November till 15th
        April. All prices include 6% VAT.
      </p>
      <div class="mb-10">
        <div class="mt-4">
          <p class="title-info text-primary">Snowmobile tour (32 km)</p>
          <p class="line border-primary w-full mb-8"></p>
          <div class="lg:px-6 py-3 md:mx-8 bg-white rounded-xl">
            <div class="grid grid-cols-3 text-center">
              <p class="text-xl font-bold">Category</p>
              <p class="text-xl font-bold">Person</p>
              <p class="text-xl font-bold">Rate</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">2 people per snowmobile</p>
              <p class="text-xl">Adult</p>
              <p class="text-xl">1500 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">2 people per snowmobile</p>
              <p class="text-xl">Child</p>
              <p class="text-xl">850 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">1 person per snowmobile</p>
              <p class="text-xl">Adult</p>
              <p class="text-xl">1900 SEK</p>
            </div>
          </div>
          <p class="text-center text-xl mt-4">
            2 people on one snowmobile will be driving on a shared basis. All
            prices are given per person.
          </p>

          <p class="text-xl mt-4 text-primary font-bold">
            Tour including LUNCH:
          </p>
          <div class="lg:px-6 py-3 md:mx-8 bg-white rounded-xl mt-4">
            <div class="grid grid-cols-3 text-center">
              <p class="text-xl font-bold">Category</p>
              <p class="text-xl font-bold">Person</p>
              <p class="text-xl font-bold">Rate</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">2 people per snowmobile</p>
              <p class="text-xl">Adult</p>
              <p class="text-xl">1580 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">2 people per snowmobile</p>
              <p class="text-xl">Child</p>
              <p class="text-xl">960 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">1 person per snowmobile</p>
              <p class="text-xl">Adult</p>
              <p class="text-xl">2100 SEK</p>
            </div>
          </div>
          <p class="text-xl mt-4 text-primary font-bold">
            Tour including TRANSFER TO THE ICEHOTEL AND RETURN:
          </p>
          <div class="lg:px-6 py-3 md:mx-8 bg-white rounded-xl mt-4">
            <div class="grid grid-cols-3 text-center">
              <p class="text-xl font-bold">Category</p>
              <p class="text-xl font-bold">Person</p>
              <p class="text-xl font-bold">Rate</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">2 people per snowmobile</p>
              <p class="text-xl">Adult</p>
              <p class="text-xl">1550 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">2 people per snowmobile</p>
              <p class="text-xl">Child</p>
              <p class="text-xl">880 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">1 person per snowmobile</p>
              <p class="text-xl">Adult</p>
              <p class="text-xl">1950 SEK</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-10">
        <p class="title-info text-primary">Northern Lights tour to Abisko</p>
        <p class="line border-primary w-full mb-8"></p>
        <div class="lg:px-6 py-3 md:mx-8 bg-white rounded-xl">
          <div class="grid grid-cols-2 text-center">
            <p class="text-xl font-bold">Person</p>
            <p class="text-xl font-bold">Rate</p>
          </div>
          <div class="flex justify-center py-2">
            <p class="line w-full border-[1px]"></p>
          </div>
          <div class="grid grid-cols-2 text-center pb-3">
            <p class="text-xl">Adult</p>
            <p class="text-xl">1600 SEK</p>
          </div>
          <div class="grid grid-cols-2 text-center pb-3">
            <p class="text-xl">Child</p>
            <p class="text-xl">800 SEK</p>
          </div>
        </div>
      </div>
      <div class="my-10">
        <p class="title-info text-primary">Dog sledding tours</p>
        <p class="line border-primary w-full mb-8"></p>
        <div class="lg:px-6 md:mx-8 py-3 bg-white rounded-xl">
          <div class="grid grid-cols-3 text-center">
            <p class="text-xl font-bold">Name</p>
            <p class="text-xl font-bold">Per adult</p>
            <p class="text-xl font-bold">Per child</p>
          </div>
          <div class="flex justify-center py-2">
            <p class="line w-full border-[1px]"></p>
          </div>
          <div class="grid grid-cols-3 text-center pb-3">
            <p class="text-xl">Lunch tour</p>
            <p class="text-xl">1995 SEK</p>
            <p class="text-xl">990 SEK</p>
          </div>
          <div class="grid grid-cols-3 text-center pb-3">
            <p class="text-xl">Coffee tour</p>
            <p class="text-xl">1465 SEK</p>
            <p class="text-xl">800 SEK</p>
          </div>
          <div class="grid grid-cols-3 text-center pb-3">
            <p class="text-xl">Northern Lights tour</p>
            <p class="text-xl">1580 SEK</p>
            <p class="text-xl">800 SEK</p>
          </div>
          <div class="grid grid-cols-3 text-center pb-3">
            <p class="text-xl">Evening tour</p>
            <p class="text-xl">1495 SEK</p>
            <p class="text-xl">748 SEK</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-bg1 px-2 lg:px-10 pb-20">
      <p class="title-pages text-center text-black pt-10">- Rentals -</p>
      <div class="flex justify-center mt-8 mb-10">
        <div class="md:mx-8 bg-white rounded-xl">
          <div class="lg:mx-6 my-3">
            <div class="grid grid-cols-3 text-center">
              <p class="text-xl font-bold">Article</p>
              <p class="text-xl font-bold">Description</p>
              <p class="text-xl font-bold">Price</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Bed linen</p>
              <p class="text-xl">Pillow cover, bedsheet and duvet cover</p>
              <p class="text-xl">70 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Towel</p>
              <p class="text-xl">-</p>
              <p class="text-xl">30 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Bag of wood</p>
              <p class="text-xl">
                40L bag to use on the sauna or the fireplace.
              </p>
              <p class="text-xl">100 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Washing machine rental</p>
              <p class="text-xl">One time usage</p>
              <p class="text-xl">50 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Electricity of plug-in car</p>
              <p class="text-xl">-</p>
              <p class="text-xl">200 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Private sauna rental</p>
              <p class="text-xl">Private sauna&grill with a bagof wood</p>
              <p class="text-xl">350 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Child cot</p>
              <p class="text-xl">Child Cot with bed, duvet and pillow</p>
              <p class="text-xl">100 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Snow overall</p>
              <p class="text-xl">24 hours</p>
              <p class="text-xl">200 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Snow overall</p>
              <p class="text-xl">Entire stay</p>
              <p class="text-xl">350 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Snow boots</p>
              <p class="text-xl">24 hours</p>
              <p class="text-xl">150 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Snow boots</p>
              <p class="text-xl">Entire stay</p>
              <p class="text-xl">300 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Snow gloves</p>
              <p class="text-xl">24 hours</p>
              <p class="text-xl">150 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Snow gloves</p>
              <p class="text-xl">Entire stay</p>
              <p class="text-xl">300 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Winter hat</p>
              <p class="text-xl">24 hours</p>
              <p class="text-xl">50 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Winter hat</p>
              <p class="text-xl">Entire stay</p>
              <p class="text-xl">250 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Cross country skis/snowshoes</p>
              <p class="text-xl">3 hours</p>
              <p class="text-xl">250 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Cross country skis/snowshoes</p>
              <p class="text-xl">Entire stay</p>
              <p class="text-xl">500 SEK</p>
            </div>
            <div class="grid grid-cols-3 text-center pb-3">
              <p class="text-xl">Ice-fishing set</p>
              <p class="text-xl">3 hours</p>
              <p class="text-xl">300 SEK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bg2 px-2 lg:px-10 pb-20">
      <p class="title-pages text-center text-black pt-10">
        - Cleaning services -
      </p>
      <div class="flex justify-center mt-8 mb-10">
        <div class="w-full md:mx-8 bg-white rounded-xl">
          <div class="lg:mx-6 my-3">
            <div class="grid grid-cols-2 text-center">
              <p class="text-xl font-bold">Cabin</p>
              <p class="text-xl font-bold">Price</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>
            <!-- <div class="grid grid-cols-3 text-center pb-3">
                                    <p class="text-xl">Pick up and drop off service (winter only)</p>
                                    <p class="text-xl">420 SEK</p>
                                    <p class="text-xl">Round trip from our location in Kiruna</p>
                                </div>-->

            <div class="grid grid-cols-2 text-center pb-3">
              <p class="text-xl">2A, 2B, 2C, D1, D2, D3</p>
              <p class="text-xl">260 SEK</p>
            </div>
            <div class="grid grid-cols-2 text-center pb-3">
              <p class="text-xl">3, 4A, 4B, 4C, 4D, 5</p>
              <p class="text-xl">510 SEK</p>
            </div>
            <div class="grid grid-cols-2 text-center pb-3">
              <p class="text-xl">6A, 6B, 6C</p>
              <p class="text-xl">760 SEK</p>
            </div>
            <div class="grid grid-cols-2 text-center pb-3">
              <p class="text-xl">13A, 13B, 14</p>
              <p class="text-xl">1890 SEK</p>
            </div>
          </div>
        </div>
      </div>
      <p class="title-pages text-center text-black pt-10">- Winter Shuttle -</p>
      <div class="flex justify-center mt-8 mb-10">
        <div class="w-full md:mx-8 bg-white rounded-xl">
          <div class="lg:mx-6 my-3">
            <div class="grid grid-cols-2 text-center">
              <p class="text-xl font-bold">Service</p>
              <p class="text-xl font-bold">Price</p>
            </div>
            <div class="flex justify-center py-2">
              <p class="line w-full border-[1px]"></p>
            </div>

            <div class="grid grid-cols-2 text-center pb-3">
              <p class="text-xl">One way (up to 4 people)</p>
              <p class="text-xl">450 SEK</p>
            </div>
            <div class="grid grid-cols-2 text-center pb-3">
              <p class="text-xl">One way (up to 5-8 people)</p>
              <p class="text-xl">900 SEK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>
<script lang="ts" setup>
useSeo({
  title: "Prices - Cabins & Tours | Camp Alta Kiruna",
  description:
    "View prices for cabins and Arctic tours at Camp Alta Kiruna. Affordable wilderness accommodation and adventure tours in Swedish Lapland.",
  path: "/Prices",
});

import { onMounted, onUnmounted } from "vue";

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

let season = ref("winter");
let winter = ref(true);
function changeSeason(winter: boolean) {
  //console.log(transport)
  //return transport
  console.log(winter);
  if (winter == false) {
    season.value = "summer";
    console.log(winter);
  } else {
    season.value = "winter";
    console.log(winter);
  }
}

onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});
</script>
