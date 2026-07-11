<template>
  <div id="screen" class="max-h-screen">
    <section class="relative hero h-screen w-full overflow-hidden">
      <picture>
        <source
          media="(max-width: 640px)"
          srcset="/lakeside/hero_landing.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 1024px)"
          srcset="/lakeside/hero_landing.webp"
          type="image/webp"
        />
        <img
          src="/lakeside/hero_landing.webp"
          alt="Lakeside Aurora Cabins"
          class="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      </picture>
    </section>

    <!--to top-->
    <span id="top"></span>
    <ToTop />
    <div class="">
      <div class="p-0 absolute top-0 h-screen w-full z-10">
        <NavbarLakeside />

        <div
          class="h-full flex flex-col justify-center items-center text-center relative"
        >
          <!-- Background rectangle behind the title -->
          <div
            class="absolute inset-0 flex justify-center items-center pointer-events-none"
          >
            <div
              class="bg-[#04b684] rounded-md mt-16"
              style="height: 3%; width: 100%; z-index: 0"
            ></div>
          </div>

          <!-- Title text on top -->
          <p
            class="title-init relative z-10 lg:text-9xl md:text-8xl text-secondary text-6xl px-4"
          >
            Lakeside Aurora Cabins
          </p>
        </div>
      </div>
    </div>
    <section class="content-index">
      <div class="bg-bg1 lg:px-10 pb-10">
        <div
          class="pt-4 section grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center"
        >
          <div class="px-4 lg:px-8">
            <p class="title lg:text-5xl text-center text-black">
              Welcome to our peaceful lakeside retreat just minutes from Kiruna
            </p>
            <div class="flex justify-center pb-8">
              <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>
            </div>
            <p class="text-xl text-center mx-2">
              Surrounded by untouched Lapland nature, our cozy cabins offer the
              perfect balance of comfort and wilderness. All guests have access
              to our traditional wood-fired sauna and a warm, inviting fireplace
              lounge – ideal for relaxing after a day of exploring. In winter,
              you can simply walk outside and watch the Northern Lights dance
              across the sky. In summer, the midnight sun shines over the lake
              while you enjoy fishing, canoeing or hiking in the calm
              surroundings.
            </p>
          </div>
          <div class="w-full">
            <swiper
              id="lakeside-intro-swiper"
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
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_1.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_2.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_3.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_4.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_6.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_7.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_8.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_9.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/general/gen_11.webp"
                  alt="Lakeside cabins"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="bg-bg2 lg:px-10 pb-10 lg:pb-0" id="cabins-lakeside">
        <div class="title lg:text-9xl text-left ml-8">Cabins -</div>
        <swiper
          id="cabins-lake-swiper"
          class="z-0 md:hidden lg:block"
          :rewind="true"
          :lazy="true"
          :navigation="true"
          :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
          :keyboard="{
            enabled: true,
          }"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1025': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
        >
          <swiper-slide class="card-cabin">
            <NuxtLink class="card w-full" to="/cabins-lakeside/Cabin-4e">
              <span class="card__image relative block">
                <img
                  src="/lakeside/cabins/4e/4e_ext2.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-72 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 4E</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  4 pax. Kitchen, shower and toilet inside. Bed linens and
                  towels included
                </p>
                <button class="btn flex text-black bg-secondary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex text-black bg-secondary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide class="card-cabin">
            <NuxtLink class="card w-full" to="/cabins-lakeside/Cabin-4f">
              <span class="card__image relative block">
                <img
                  src="/lakeside/cabins/4f/4f_main.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-72 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 4F</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  4 pax. Kitchen inside. Shower and toilet OUTSIDE (private).
                  Bed linens and towels included
                </p>
                <button class="btn flex text-black bg-secondary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex text-black bg-secondary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </swiper-slide>

          <swiper-slide class="card-cabin">
            <NuxtLink class="card w-full" to="/cabins-lakeside/Cabin-6d">
              <span class="card__image relative block">
                <img
                  src="/lakeside/cabins/6d/6d_main.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-72 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 6D</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  6 pax.kitchen, sauna, shower inside. toilet OUTSIDE. Bed
                  linens and towels included.
                </p>
                <button class="btn flex text-black bg-secondary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex text-black bg-secondary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide class="card-cabin">
            <NuxtLink class="card w-full" to="/cabins-lakeside/Cabin-8b">
              <span class="card__image relative block">
                <img
                  src="/lakeside/cabins/8b/8b_main.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-72 pl-3">
                <p class="text-3xl caption mt-4">Cabin 8B</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  8 pax. kitchen, shower, toilet inside. Bed linens and towels
                  included.
                </p>
                <button class="btn flex text-black bg-secondary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex text-black bg-secondary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </swiper-slide>
        </swiper>

        <!--phone carousel-->
        <div class="lg:hidden block px-4 space-y-6 mt-6">
          <!-- Cabin 4E -->
          <div class="card-cabin">
            <NuxtLink class="card w-full block" to="/cabins-lakeside/Cabin-4e">
              <span
                class="card__image relative block overflow-hidden rounded-t-lg"
              >
                <img
                  src="/lakeside/cabins/4e/4e_ext2.webp"
                  alt="Cabin 4E"
                  class="w-full h-[200px] md:h-[400px] object-cover"
                  loading="lazy"
                />
              </span>
              <span class="block pl-3 pb-4">
                <p class="text-4xl caption text-black mt-4">Cabin 4E</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  4 pax. Kitchen, shower and toilet inside. Bed linens and
                  towels included
                </p>
                <button class="btn flex text-black bg-secondary mt-4">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </div>

          <!-- Cabin 4F -->
          <div class="card-cabin">
            <NuxtLink class="card w-full block" to="/cabins-lakeside/Cabin-4f">
              <span
                class="card__image relative block overflow-hidden rounded-t-lg"
              >
                <img
                  src="/lakeside/cabins/4f/4f_main.webp"
                  alt="Cabin 4F"
                  class="w-full h-[200px] md:h-[400px] object-cover"
                  loading="lazy"
                />
              </span>
              <span class="block pl-3 pb-4">
                <p class="text-4xl caption text-black mt-4">Cabin 4F</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  4 pax. Kitchen inside . Shower and toilet OUTSIDE (private).
                  Bed linens and towels included
                </p>
                <button class="btn flex text-black bg-secondary mt-4">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </div>

          <!-- Cabin 6D -->
          <div class="card-cabin">
            <NuxtLink class="card w-full block" to="/cabins-lakeside/Cabin-6d">
              <span
                class="card__image relative block overflow-hidden rounded-t-lg"
              >
                <img
                  src="/lakeside/cabins/6d/6d_main.webp"
                  alt="Cabin 6D"
                  class="w-full h-[200px] md:h-[400px] object-cover"
                  loading="lazy"
                />
              </span>
              <span class="block pl-3 pb-4">
                <p class="text-4xl caption text-black mt-4">Cabin 6D</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  6 pax. Kitchen, sauna, shower inside. Toilet OUTSIDE. Bed
                  linens and towels included.
                </p>
                <button class="btn flex text-black bg-secondary mt-4">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </div>

          <!-- Cabin 8B -->
          <div class="card-cabin">
            <NuxtLink class="card w-full block" to="/cabins-lakeside/Cabin-8b">
              <span
                class="card__image relative block overflow-hidden rounded-t-lg"
              >
                <img
                  src="/lakeside/cabins/8b/8b_main.webp"
                  alt="Cabin 8B"
                  class="w-full h-[200px] md:h-[400px] object-cover"
                  loading="lazy"
                />
              </span>
              <span class="block pl-3 pb-4">
                <p class="text-4xl caption text-black mt-4">Cabin 8B</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  8 pax. Kitchen, shower, toilet inside. Bed linens and towels
                  included.
                </p>
                <button class="btn flex text-black bg-secondary mt-4">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#000"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- BBQ and Sauna Section -->
      <div class="bg-bg1 lg:px-10 py-10 lg:pb-20" id="bbq-sauna">
        <div class="title lg:text-9xl text-left ml-8">BBQ & Sauna -</div>
        <div
          class="pt-4 section grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center"
        >
          <div class="w-full order-2 md:order-2">
            <swiper
              id="bbq-sauna-swiper"
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
              <swiper-slide>
                <img
                  src="/lakeside/bbq/bbq_1.webp"
                  alt="BBQ area"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/bbq/bbq_2.webp"
                  alt="BBQ area"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/bbq/bbq_3.webp"
                  alt="BBQ area"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/bbq/bbq_4.webp"
                  alt="BBQ area"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/bbq/bbq_5.webp"
                  alt="BBQ area"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/lakeside/bbq/bbq_6.webp"
                  alt="BBQ area"
                  class="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </swiper-slide>
            </swiper>
          </div>
          <div class="px-4 lg:px-8 order-1 md:order-1">
            <p class="text-xl text-center mx-2">
              Relax and unwind in our traditional wood-fired sauna after a day
              of Arctic adventures. Gather with friends and family at our
              outdoor BBQ area, where you can grill under the midnight sun in
              summer or beneath the dancing Northern Lights in winter. Our cozy
              common area provides the perfect space to share stories and warm
              up by the fireplace.
            </p>
          </div>
        </div>
      </div>

      <!-- Guest Reviews Section -->
      <div class="lg:px-10 pb-10 lg:pb-20 min-h-[70vh] relative" id="Reviews">
        <img
          src="/lakeside/general/bg-guest.webp"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-[#F6F5EE]/20"></div>
        <div class="lg:mr-10 relative z-10">
          <p
            class="title text-white lg:text-9xl text-center"
            style="
              text-shadow:
                2px 2px 8px rgba(0, 0, 0, 0.7),
                0 0 20px rgba(0, 0, 0, 0.5);
            "
          >
            - Guests Experiences -
          </p>

          <!--<p class="text-xl mt-4 text-center text-gray-700">Discover why Camp Alta is loved by travelers from around the world</p>-->

          <!-- Reviews Grid -->
          <div class="mt-8">
            <!-- TripAdvisor Reviews -->
            <div
              class="bg-white/70 backdrop-blur-sm p-6 rounded-[50px] shadow-lg"
            >
              <div class="space-y-6">
                <div class="text-center mb-6">
                  <h3
                    class="text-2xl font-bold text-blue-800 flex items-center justify-center gap-2"
                  >
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="#013B94">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                    Booking.com Reviews
                  </h3>
                  <div class="flex justify-center items-center gap-1 mt-2">
                    <span class="text-lg font-semibold">8.3/10</span>
                    <div class="flex text-yellow-400">
                      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 fill-current opacity-70"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">
                  <!-- Individual TripAdvisor Reviews -->
                  <div
                    class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-[#04b684]"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <p class="text-[#04b684] font-bold">10/10</p>
                      <span class="font-semibold text-gray-800"
                        >Radu - Romania</span
                      >
                      <span class="text-gray-500 text-sm">• February 2025</span>
                    </div>
                    <p class="text-gray-700 italic">
                      "Fantastic location in the middle of the nature. Aurora
                      included."
                    </p>
                  </div>

                  <div
                    class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-[#04b684]"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <p class="text-[#04b684] font-bold">9/10</p>
                      <span class="font-semibold text-gray-800"
                        >Rossana - Italy</span
                      >
                      <span class="text-gray-500 text-sm">• August 2025</span>
                    </div>
                    <p class="text-gray-700 italic">
                      "Spectacular lakeside location! Very comfortable cabins
                      for 4, heated and with all the amenities."
                    </p>
                  </div>
                  <div
                    class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-[#04b684]"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <p class="text-[#04b684] font-bold">9/10</p>
                      <span class="font-semibold text-gray-800"
                        >Ahmed - Egypt</span
                      >
                      <span class="text-gray-500 text-sm">• August 2025</span>
                    </div>
                    <p class="text-gray-700 italic">
                      "Great location for summer and I think even better for
                      winter aurora watching. The view is amazing, it is
                      directly on the lake. Transparent cabins on the lake,
                      would be great for aurora watching in winter. The rooms
                      were big."
                    </p>
                  </div>
                  <div
                    class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-[#04b684]"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <p class="text-[#04b684] font-bold">10/10</p>
                      <span class="font-semibold text-gray-800"
                        >Lisa - Germany</span
                      >
                      <span class="text-gray-500 text-sm">• March 2025</span>
                    </div>
                    <p class="text-gray-700 italic">
                      "Excellent Location for watching Auroras! And the host is
                      amazing, we had such a nice stay! 😊"
                    </p>
                  </div>
                </div>
              </div>

              <div class="text-center mt-6">
                <a
                  href="https://www.booking.com/hotel/se/lakeside-aurora-cabins.es.html?aid=356980&label=gog235jc-10CAsoyAFCFmxha2VzaWRlLWF1cm9yYS1jYWJpbnNICVgDaAGIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4Au6L4MUGwAIB0gIkODdkNjY1ZTMtNjc2Yy00OWQ4LTkwZjMtMjc0NjdkMjhjNTg52AIB4AIB&sid=f04db10e5db7d78a8704363bf2a10d58&dest_id=-2494657&dest_type=city&dist=0&group_adults=4&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=4&req_children=0&room1=A%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&srepoch=1756890612&srpvid=03ce4078168303bf&type=total&ucfs=1&"
                  target="_blank"
                  class="text-xl font-bold text-black hover:text-[#04b684] flex items-center justify-center w-full sm:w-1/3"
                >
                  + Read more reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  </div>
</template>
<script lang="ts" setup>
useSeo({
  title: "Lakeside Aurora Cabins - Premium Lakefront Stays | Camp Alta Kiruna",
  description:
    "Premium lakeside cabins with aurora views on Lake Altajärvi. Private saunas, fully equipped kitchens, and stunning Northern Lights views in Kiruna, Swedish Lapland.",
  path: "/LakesideAuroraCabins",
  image: "/lakeside/hero_landing.webp",
});

import { onMounted, onUnmounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sending = ref(false);

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

let currentWidth = 20;

function handleScroll(event: Event) {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const image = document.querySelector(".zoom-video") as HTMLElement;
  const container = document.querySelector(".zoom-container") as HTMLElement;
  const containerTop = container.offsetTop;
  const containerHeight = container.offsetHeight;
  const containerBottom = containerTop + containerHeight;

  if (
    scrollPosition + windowHeight > containerTop &&
    scrollPosition < containerBottom
  ) {
    const newWidth =
      20 + ((scrollPosition - containerTop) / containerHeight) * 80;
    // Make sure the new width is within a reasonable range
    currentWidth = Math.min(Math.max(newWidth, 20), 100);
    // Apply the new width to the image
    image.style.width = `${currentWidth}%`;
  }
}

onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});
</script>
<style>
.background-carousel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it stays behind other content */
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Black filter with 50% opacity */
  z-index: 1; /* Ensure the overlay is above the images but below the navbar */
}

/* Make cabin swiper images landscape orientation */
#cabins-lake-swiper .card__image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

#cabins-lake-swiper .card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive heights for different screens - landscape orientation */
@media (max-width: 768px) {
  #cabins-lake-swiper .card__image {
    height: 200px;
  }
}

@media (min-width: 1024px) {
  #cabins-lake-swiper .card__image {
    height: 280px;
  }
}
</style>
