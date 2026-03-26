<template>
  <div id="screen">
    <Navbar-lakeside />

    <!--to top-->
    <span id="top"></span>
    <ToTop />
    <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
      <p class="title lg:text-8xl text-center pb-4">Cabin 4F</p>
      <div class="flex justify-center pb-8">
        <p class="line w-1/2 lg:w-1/6"></p>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
        <div class="lg:mr-10 text-left px-2" id="intro-4f">
          <p class="text-xl mt-4">
            Welcome to this charming cabin, offering breathtaking views of Lake
            Alttajärvi. Unwind on your private balcony and immerse yourself in
            the tranquil beauty of Swedish Lapland with a hot drink. It's the
            perfect escape.
          </p>
          <p class="text-xl mt-4">
            This cozy cabin is suitable for up to 4 guests. It features a double
            bed in the bedroom and a sofa bed in the living room where two
            additional guests can sleep. A compact kitchen is equipped with a
            microwave, fridge, freezer, stovetop, toaster, and a french press,
            as well as pots, pans and all necessary kitchen utensils. A private
            bathroom and toilet dedicated to this cabin is located only 10
            meters from the cabin.
          </p>
          <p class="text-xl mt-4">
            With a lovely balcony, guests can relax and enjoy the picturesque
            view of the lake, providing a charming spot to enjoy a cup of coffee
            while admiring the peaceful lake views. Whether it's bathed in
            sunshine or covered in snow. The accommodation also provides a
            wood-fired sauna and fireplace.
          </p>
          <p class="text-xl mt-4">
            Located in a remote area, this cabin provides a perfect opportunity
            to witness the breathtaking Northern Lights in the winter or the
            enchanting Midnight Sun in the summer. Come and enjoy a tranquil
            retreat in nature at Lakeside Aurora cabins.
          </p>
          <!--<p class="text-xl mt-4">Although this cabin is small, it is cozy and offers the perfect getaway. The cabin is located in a lovely place offering an uninterrupted view of the lake. Take a moment to relax and enjoy the peaceful surroundings while enjoying a cup of coffee out on the balcony in front of the cabin.</p>
                        <p class="text-xl mt-4">This cabin is perfect for two people. Inside you can find a double bed, as well as a table with two chairs. Along with this there is a small kitchenette, completed with a microwave, refrigerator and a kettle. Guests can use the common kitchen and bathrooms in the service building situated around 20 meters from the cabin.</p>
                        <p class="text-xl mt-4">Camp Alta guests can enjoy a truly unique experience with our wood-fired saunas - one of which even floats on the lake! As well as the possibility to use the cozy fire hut free of charge! You can order a bag of wood at the reception for 110 SEK.</p>      
                        <p class="text-xl mt-4">The remote location of the camp provides the perfect space to witness the breathtaking northern lights during the winter season, or the beauty of the midnight sun during the summer season!</p>  
                    -->
        </div>
        <div class="mt-4 flex justify-center">
          <swiper
            id="4f-ext-swiper"
            class="z-0 w-full"
            :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
            :rewind="true"
            :lazy="true"
            :navigation="true"
            :autoplay="{ delay: 4000, disableOnInteraction: true }"
            :keyboard="{ enabled: true }"
            :pagination="{ dynamicBullets: true, clickable: true }"
          >
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_main.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_ext1.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_ext2.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_ext3.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_ext4.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_ext5.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/lakeside/cabins/4f/4f_ext6.webp"
                alt="Cabin exterior"
                class="w-full aspect-[6/4.5] object-cover"
                loading="lazy"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
      <p class="title-info">Information about the cabin:</p>
      <p class="line w-2/3 lg:w-1/3 ml-2"></p>
      <div
        class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center"
      >
        <ul class="ml-10 lg:ml-16 pt-4">
          <li class="list-disc text-xl">
            <span class="font-bold">Accommodates:</span> 2 guests
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Area:</span> 22m<span class="superscript"
              >2</span
            >
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Bed:</span> The cabin has one bedroom which
            has a double bed and a living room which has a sofa that doubles
            into a sofa bed, which can sleep two other guests.
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Cabin amenities:</span> Refrigerator, water
            kettle, coffee maker, cable TV, electric heater, microwave, cutlery,
            pots and pans.
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">WC & showers:</span> situated 10 meters from
            the cabin
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Kitchen:</span> Inside the cabin.
          </li>
        </ul>
        <ul class="ml-10 lg:ml-16 lg:pt-4 md:pt-4">
          <li class="list-disc text-xl">
            <span class="font-bold">Heating:</span> The cabin is heated by
            electric heating, this ensures a comfortable stay all year round.
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">WIFI:</span> Available in the cabin
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Parking:</span> Available free of charge
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Pet policy:</span> Unfortunately, we cannot
            allow pets in the cabin due to allergy concerns
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Check in:</span> 15:00 pm
          </li>
          <li class="list-disc text-xl">
            <span class="font-bold">Latest Check out:</span> 11:00 am
          </li>
        </ul>
      </div>
      <div class="lg:mr-10 text-left px-2">
        <p class="text-xl mt-4">
          Bed linen and towels are included in the price of the cabin.
        </p>
        <p class="text-xl mt-4">
          To maintain affordable prices and to make our accommodation accessible
          to everyone, we are a self-cleaning accommodation. You are expected to
          restore your cabin to the same condition you found it in at your
          arrival or, alternatively, you can order our cleaning service for a
          fee of 540 SEK. Cleaning products are provided in the cabin.
        </p>
      </div>
      <div class="grid justify-center mt-10">
        <NuxtLink
          to="/Booking-lakeside"
          class="btn bg-tertiary mt-6 mb-6 text-white text-xl py-2 px-20"
          >Book here</NuxtLink
        >
      </div>
      <div class="lg:mr-10 text-left">
        <p class="text-xl mt-4">
          Bed linen and towels are included in the price of the cabin.
        </p>
        <p class="text-xl mt-4">
          To maintain affordable prices and to make our camp accessible to
          everyone, we are a self-cleaning camp. You are expected to restore
          your cabin to the same condition you found it in at your arrival or,
          alternatively, you can order our cleaning service for a fee of 260
          SEK. Cleaning products are provided in the cabin.
        </p>
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
        :keyboard="{ enabled: true }"
        :pagination="{ dynamicBullets: true, clickable: true }"
      >
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_1.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_2.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_3.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_4.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_5.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_6.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid lg:grid-cols-2">
            <div class="flex justify-center">
              <img src="/lakeside/cabins/4f/4f_7.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
            </div>
            <div class="flex justify-center">
              <img src="/lakeside/cabins/4f/4f_8.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid lg:grid-cols-2">
            <div class="flex justify-center">
              <img src="/lakeside/cabins/4f/4f_9.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
            </div>
            <div class="flex justify-center">
              <img src="/lakeside/cabins/4f/4f_10.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img src="/lakeside/cabins/4f/4f_11.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
          </div>
        </swiper-slide>
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
        :keyboard="{ enabled: true }"
        :pagination="{ dynamicBullets: true, clickable: true }"
      >
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_1.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_2.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_3.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_4.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_5.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_6.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_7.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_8.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_9.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_10.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center h-[90vh]">
            <img src="/lakeside/cabins/4f/4f_11.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20">
      <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
        <div class="px-2">
          <p class="title-info">Getting here</p>
          <p class="line w-2/3 lg:w-1/3 ml-2"></p>
          <p class="text-xl pt-4 ml-2">
            The cabins are located in Etian 105, Kiruna – 98192.
            <NuxtLink
              href="https://maps.app.goo.gl/HDNHRPZfkkJxdeja9"
              title="link the google maps of the location"
              class="text-tertiary font-bold"
              >(Link to Google maps)</NuxtLink
            >
          </p>
          <p class="text-xl pt-4 ml-2">
            Our reception is located 1 km away from the cabins.
            <NuxtLink
              href="https://maps.app.goo.gl/DMWccF29NXfUd7Xb7"
              title="link the google maps of the location"
              class="text-tertiary font-bold"
              >(Link to Google maps)</NuxtLink
            >
          </p>
          <p class="text-xl pt-4 ml-2">
            Our Shuttle service is available from 15th of November to 15th of
            April. You can easily book our transportation through our booking
            system to ensure a hassle-free experience.
          </p>

          <div class="grid justify-center my-5">
            <NuxtLink
              to="/booking/Booking-LSextras"
              class="btn bg-tertiary text-white mt-6 text-xl py-2 px-20 font-bold"
              >Book shuttle</NuxtLink
            >
          </div>
          <p class="text-xl mt-8 ml-2">
            During the summer months, you will need to arrange your own
            transportation to reach us.
          </p>
        </div>
        <div class="px-2">
          <p class="title-info">Need help with the booking?</p>
          <p class="line w-2/3 lg:w-1/3 ml-2"></p>
          <p class="text-xl ml-2 pt-4">
            If you want help with your reservation, please contact us via email
            at info@campalta.se
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Cabin 4F - Lakeside Aurora - 22m2, Sleeps 4 | Camp Alta Kiruna',
  description: 'Charming lakeside cabin with breathtaking views of Lake Altajarvi. Features a double bed, sofa bed, fully equipped kitchen and private balcony. Sleeps up to 4 guests at Lakeside Aurora, Camp Alta Kiruna.',
  path: '/cabins-lakeside/Cabin-4f',
  image: '/lakeside/cabins/4f/4f_main.webp',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: 'Camp Alta Kiruna',
      url: 'https://campalta.net',
      containsPlace: {
        '@type': 'Accommodation',
        name: 'Cabin 4F - Lakeside Aurora',
        description: 'Charming lakeside cabin with breathtaking views of Lake Altajarvi. Features a double bed, sofa bed, fully equipped kitchen and private balcony. Sleeps up to 4 guests at Lakeside Aurora, Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
        floorSize: { '@type': 'QuantitativeValue', value: 22, unitCode: 'MTK' },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
          { '@type': 'LocationFeatureSpecification', name: 'Heating' },
          { '@type': 'LocationFeatureSpecification', name: 'Fridge' },
          { '@type': 'LocationFeatureSpecification', name: 'Microwave' },
          { '@type': 'LocationFeatureSpecification', name: 'TV' },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen' },
        ],
      },
    }),
  }],
})

import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

onMounted(() => {});
</script>
<style>
/* Exterior carousel styles */
#\34 f-ext-swiper {
  width: 100%;
}

#\34 f-ext-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
