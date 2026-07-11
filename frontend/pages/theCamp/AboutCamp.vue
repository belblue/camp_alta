<template>
  <div id="screen">
    <section
      class="hero bg-[url('/header/header_aboutcamp.webp')] bg-cover"
    ></section>
  </div>
  <!-- spinner  bg-[url('/header/header_aboutcamp.webp')] bg-cover-->

  <!--to top-->
  <span id="top"></span>
  <ToTop />
  <div class="">
    <div class="p-0 absolute top-0 h-[50vh] w-full z-10">
      <Navbar />
      <div
        class="h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <p class="title lg:text-9xl text-white">About the Camp</p>
      </div>
    </div>
  </div>
  <section class="content-cabins">
    <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-10">
      <p class="barlow text-3xl lg:text-6xl mt-8 text-center">
        Discover the Magic of Swedish Lapland at Camp Alta Kiruna
      </p>
      <p class="text-xl mt-8">
        Immerse yourself in the beauty of Camp Alta Kiruna, located just 17 km
        from Kiruna and easily accessible from the E10 road, situated 200 km
        above the Arctic Circle. This serene campsite is enveloped in a mystical
        forest, offering the calming sounds of silence and the whispers of
        nature. In summer, take a dip in the majestic Altajärvi lake, and in
        winter, enjoy long walks while witnessing the Northern Lights.
        Experience nature's serenity at its finest here.
      </p>
      <p class="text-xl mt-4">
        Nestled in the heart of Swedish Lapland, Camp Alta Kiruna is a unique
        destination for nature lovers and outdoor enthusiasts. Our cozy cabins
        provide a perfect home base for exploring the stunning wilderness of
        Swedish Lapland, whether you're into hiking, skiing, snowmobiling, or
        simply soaking up the tranquility of the outdoors.
      </p>
      <p class="text-xl mt-4">
        With our prime location, you'll have easy access to iconic sights,
        including the Northern Lights ( Aurora Borealis), often seen dancing in
        the sky above during the winter months. Our knowledgeable guides offer
        insights into the history and culture of this fascinating region, from
        the traditional Sami way of life to the science behind the Aurora
        Borealis.
      </p>
      <p class="text-xl mt-4">
        At Camp Alta Kiruna, we pride ourselves on providing an authentic and
        personalized experience tailored to each guest's interests. Whether
        seeking a quiet retreat or an adrenaline-fueled adventure, our team will
        help create the perfect itinerary, comfortable accommodations, and
        unforgettable experiences. Book your stay at Camp Alta Kiruna today and
        discover the magic of Swedish Lapland for yourself.
      </p>
    </div>

    <!--phone carousel-->
    <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20 lg:hidden block">
      <swiper
        class="z-0"
        :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
        :rewind="true"
        :spaceBetween="30"
        :slidesPerView="1"
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
              src="/camp/general/general_7.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_2.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_3.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_1.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_6.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_8.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_10.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_11.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_12.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_13.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_16.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_17.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_18.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_19.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_20.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_21.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_22.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center w-full h-[70vh]">
            <img
              src="/camp/general/general_23.webp"
              alt=""
              class="object-cover"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
      </swiper>
    </div>

    <!--desktop-->
    <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20 hidden lg:block pt-4">
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
          <div class="flex justify-center">
            <img
              src="/camp/general/general_7.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_1.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_3.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_2.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_6.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_8.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_10.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_11.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_12.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_14.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_15.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_16.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_17.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_18.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_19.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_20.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_21.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_22.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <img
              src="/camp/general/general_23.webp"
              alt=""
              class="max-h-screen"
              loading="lazy"
            />
            <!--w-auto -->
          </div>
          <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
        </swiper-slide>
      </swiper>
    </div>

    <div class="bg-bg2 px-2 lg:px-10 pb-5 lg:pb-20">
      <p class="title lg:text-8xl lg:text-left text-center">Facilities -</p>
      <p class="text-xl mt-4 text-left">
        Our campsite offers a range of accommodation options to suit everyone.
        For a truly unique Arctic wilderness experience, choose one of our
        wilderness facilities and enjoy a night around the campfire. Or, for the
        best of both worlds, select one of our cabin options that combine a
        wilderness feeling with modern amenities. Whichever you choose, you're
        sure to have an unforgettable stay.
      </p>
      <p class="text-xl mt-4 text-left">
        At Camp Alta, we have different accommodations and facilities. Let us
        guide you to your best choice of accommodation. Scroll down to see the
        area overview or open the map in a separate window.
      </p>

      <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
        <!-- <div class="lg:flex mt-4 hidden  justify-center">
                      <img src="/tours/dogsled/dogsled_3.webp" alt="" class="">
                  </div>-->
        <div class="lg:mr-10">
          <p class="text-xl mt-4 text-left">
            Our camp includes the following facilities:
          </p>
          <ul class="ml-10 lg:ml-16 pt-4">
            <li class="list-disc text-xl">
              <span class="font-bold">Electrically Heated Cabins:</span>Ranging
              from 2 beds to 14 beds.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Saunas:</span> A public floating sauna on
              Altajärvi Lake and two private saunas.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Arctic Fireplace Teepee Tents:</span
              >Perfect for cozy gatherings.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Scenic Setting:</span>Ideal for spotting
              the Northern Lights.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Service Building:</span>Equipped with
              Wi-Fi, kitchen, dining area, laundry room, separate showers & WC
              for men and women. You can see the pictures here.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Campsites:</span>With electricity for
              caravans and campervans.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Transfers:</span> From Kiruna to the camp.
            </li>
            <li class="list-disc text-xl">
              <span class="font-bold">Rentals:</span> Warm Arctic clothing and
              bags of firewood.
            </li>
          </ul>
        </div>
        <!--phone carousel-->
        <div class="lg:hidden block pt-4">
          <swiper
            class="z-0"
            :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
            :rewind="true"
            :spaceBetween="30"
            :slidesPerView="1"
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
                  src="/camp/general/general_9.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>

            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_1.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_2.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_3.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_4.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>

            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_5.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_6.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_7.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_8.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_9.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_10.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/common/common_11.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
          </swiper>
        </div>

        <!--desktop-->
        <div class="hidden lg:block pt-4">
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
              <div class="flex justify-center">
                <img
                  src="/camp/general/general_9.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_1.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="grid lg:grid-cols-2">
                <div class="flex justify-center">
                  <img
                    src="/camp/common/common_2.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <div class="flex justify-center">
                  <img
                    src="/camp/common/common_3.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_4.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_5.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_6.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_7.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="grid lg:grid-cols-2">
                <div class="flex justify-center">
                  <img
                    src="/camp/common/common_8.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <div class="flex justify-center">
                  <img
                    src="/camp/common/common_9.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_10.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/common/common_11.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
      <p class="title lg:text-8xl lg:text-left text-center">Things to do -</p>
      <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4 py-10">
        <!--desktop-->
        <div class="hidden lg:block">
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
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_17.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_1.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>

            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_4.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_2.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_5.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_6.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_12.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img
                  src="/camp/sauna/sauna_14.webp"
                  alt=""
                  class="max-h-screen"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
          </swiper>
        </div>
        <div class="lg:ml-10">
          <p class="title-info pl-0">Arctic Sauna</p>
          <p class="line w-2/3"></p>
          <p class="text-xl mt-4 text-left">
            Experience the ultimate relaxation with our complimentary saunas,
            heated with firewood. Our largest sauna, the floating sauna, is open
            to all guests and can accommodate 16 - 24 people. Situated on the
            shores of Lake Altajärvi, you can take an arctic dip in the lake
            through the ice hole in the sauna. It also features a heated relax
            room and an outdoor fireplace.
          </p>
          <p class="text-xl mt-4 text-left">
            For a more private experience, you can book our private sauna, which
            can accommodate 4 - 5 people. This sauna is available for free, and
            you can order your bag of wood at the reception for 110 SEK/ bag to
            heat the saunas during opening hours. Enjoy the perfect combination
            of relaxation and rejuvenation with our saunas!
          </p>
        </div>
        <!--phone carousel-->
        <div class="lg:hidden block pt-4">
          <swiper
            class="z-0"
            :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
            :rewind="true"
            :spaceBetween="30"
            :slidesPerView="1"
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
                  src="/camp/sauna/sauna_17.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_1.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_2.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_5.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_6.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>

            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_8.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_12.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_13.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_14.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center w-full h-[70vh]">
                <img
                  src="/camp/sauna/sauna_16.webp"
                  alt=""
                  class="object-cover"
                  loading="lazy"
                />
                <!--w-auto -->
              </div>
              <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="px-2 lg:px-10 pb-5 lg:pb-20">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
          <div class="lg:mr-10">
            <p class="title-info pl-0">Arctic Fireplace</p>
            <p class="line w-2/3"></p>
            <p class="text-xl mt-4 text-left">
              The Arctic Fireplace Tent is the perfect cozy common area for all
              our guests to relax, socialize, and have a campfire. With space
              for up to 30 people around the fire and benches with reindeer fur
              for seating, it's the perfect spot to enjoy the warmth of the
              flames and the company of friends. And, you can even use the
              fireplace as a grill to cook up some delicious treats!
            </p>
          </div>
          <!--phone carousel-->
          <div class="lg:hidden block pt-4">
            <swiper
              class="z-0"
              :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
              :rewind="true"
              :spaceBetween="30"
              :slidesPerView="1"
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
                    src="/camp/firehut/fire_hut_4.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/firehut/fire_hut_3.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/firehut/fire_hut_2.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>

              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/firehut/fire_hut_5.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/firehut/fire_hut_6.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/firehut/fire_hut_7.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/firehut/fire_hut_8.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
            </swiper>
          </div>

          <!--desktop-->
          <div class="hidden lg:block">
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
                <div class="flex justify-center">
                  <img
                    src="/camp/firehut/fire_hut_2.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center h-full">
                  <img
                    src="/camp/firehut/fire_hut_3.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/firehut/fire_hut_4.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/firehut/fire_hut_5.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/firehut/fire_hut_8.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="px-2 lg:px-10 pb-5 lg:pb-20">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4">
          <!--desktop-->
          <div class="hidden lg:block">
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
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_10.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_1.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_2.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_3.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_4.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>

              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_7.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center">
                  <img
                    src="/camp/lake/lake_8.webp"
                    alt=""
                    class="max-h-screen"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
            </swiper>
          </div>
          <div class="lg:ml-10">
            <p class="title-info pl-0">Altajärvi Lake</p>
            <p class="line w-2/3"></p>
            <p class="text-xl mt-4 text-left">
              Summer is the perfect time to take a dip in the lake, but if
              you're feeling adventurous, why not try cross country skiing on
              the frozen lake at Camp Alta? This popular Swedish sport is a
              great way to explore the frozen lake and the surrounding forest.
              All the necessary equipment is available for rent at the camp, so
              you can get started right away! And don't forget to try your hand
              at ice-fishing while you're there - a great way to spend a winter
              day.
            </p>
          </div>
          <!--phone carousel-->
          <div class="lg:hidden block pt-4">
            <swiper
              class="z-0"
              :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
              :rewind="true"
              :spaceBetween="30"
              :slidesPerView="1"
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
                    src="/camp/lake/lake_11.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/lake/lake_5.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/lake/lake_6.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>

              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/lake/lake_9.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/lake/lake_1.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/lake/lake_2.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
              <swiper-slide>
                <div class="flex justify-center w-full h-[70vh]">
                  <img
                    src="/camp/lake/lake_3.webp"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <!--w-auto -->
                </div>
                <!--<p class="text-center mt-3 mb-6 text-2xl">Tour</p>-->
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'About the Camp - Facilities & Amenities | Camp Alta Kiruna',
  description: 'Discover Camp Alta Kiruna, a wilderness camp nestled in the Arctic forests of Swedish Lapland by Lake Altajärvi. Explore our cabins, saunas, common areas, and outdoor facilities just 17 km from Kiruna.',
  path: '/theCamp/AboutCamp',
  image: '/header/header_aboutcamp.webp',
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
