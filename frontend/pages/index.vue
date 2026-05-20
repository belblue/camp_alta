<template>
  <div id="screen" class="max-h-screen">
    <section class="relative hero h-screen w-full overflow-hidden">
      <picture>
        <source
          media="(max-width: 640px)"
          :srcset="heroImageSrc"
          type="image/webp"
        />
        <source
          media="(max-width: 1024px)"
          :srcset="heroImageSrc"
          type="image/webp"
        />
        <img
          :src="heroImageSrc"
          alt="Camp Alta Kiruna - Arctic wilderness camp in Swedish Lapland"
          class="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      </picture>
    </section>
    <!-- <div class="">
            <div class="background-carousel ">
                
                <div class="carousel-overlay"></div>
                <swiper                             
                    :modules="[ Autoplay, Lazy]"
                    :rewind="true"
                    :lazy="true"
                    :navigation="false"
                    :autoplay="{ delay: 5000 }"
                    >
                    
                    <swiper-slide class="">                                           
                        <img src="/index/index_2.webp" alt="" class="carousel-image" loading="lazy">  
                    </swiper-slide>   
                    <swiper-slide class="">                                           
                        <img src="/index/index_1.webp" alt="" class="carousel-image" loading="lazy"> 
                    </swiper-slide>   
                </swiper>
            </div>
        </div>-->

    <!--to top-->
    <span id="top"></span>
    <ToTop />
    <div class="">
      <div class="p-0 absolute top-0 h-screen w-full z-10">
        <Navbar />
        <!-- <div class="h-full flex flex-col justify-center items-center text-center">
                    <p class="title-init lg:text-9xl md:text-8xl text-6xl text-white ">Artic wilderness camp</p>
                    <div class="hidden lg:grid lg:grid-cols-2 bg-white border-white border-2 rounded-3xl text-black w-1/4">
                        <div class="dropdown inline-block relative  ">
                             
                            <NuxtLink class="uppercase p-3  inline-flex items-center" to="/booking/Booking-cabins">
                            <span class="mr-1 font-bold">Cabins</span>
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </NuxtLink>
                            <ul class="dropdown-menu absolute hidden text-gray-700 bg-bg1 rounded-3xl w-full">
                                <li class=""><NuxtLink class="font-bold hover:bg-[#00849234] py-2 px-4 block whitespace-no-wrap" to="/booking/Booking-tours">Tours</NuxtLink></li>
                                <li class=""><NuxtLink class="font-bold rounded-b-2xl  hover:bg-[#00849234] py-2 px-4 block whitespace-no-wrap" to="/booking/Booking-cabins">Services</NuxtLink></li>
                                <li class=""><NuxtLink class="font-bold rounded-t-2xl  hover:bg-[#00849234] py-2 px-4 block whitespace-no-wrap" to="/booking/Booking-cabins">Cabins</NuxtLink></li>

                            </ul>                   
                        </div>
                        <NuxtLink class="bg-primary text-white  rounded-3xl ml-2 p-3 font-bold" to="/Booking">Book here</NuxtLink>
                    </div>
                    <NuxtLink class=" lg:hidden bg-white text-black rounded-br-2xl rounded-tr-2xl rounded-3xl ml-2 p-3 font-bold" to="/Booking">Book here</NuxtLink>
                </div>-->
        <div
          class="h-full flex flex-col justify-between items-center text-center relative"
        >
          <div></div>
          <!-- Background rectangle behind the title -->
          <div
            class="absolute inset-0 flex justify-center items-center pointer-events-none"
          >
            <div
              class="bg-primary rounded-md"
              style="height: 5%; width: 100%; z-index: 0"
            ></div>
          </div>

          <!-- Title text on top -->
          <p
            class="title-init relative z-10 lg:text-9xl md:text-8xl text-6xl text-white px-4"
          >
            Arctic wilderness camp
          </p>

          <!-- Booking pills -->
          <div class="flex flex-col items-center gap-2 lg:gap-3 pb-8 px-4">
            <div class="flex flex-wrap justify-center gap-2 lg:gap-3">
              <NuxtLink
                to="/booking/Booking-cabins"
                class="bg-white text-black rounded-full py-2 px-5 font-bold text-sm lg:text-base hover:bg-secondary transition"
                >Camp Alta Cabins</NuxtLink
              >
              <NuxtLink
                to="/Booking-lakeside"
                class="bg-tertiary text-black rounded-full py-2 px-5 font-bold text-sm lg:text-base hover:opacity-90 transition"
                >Lakeside Cabins</NuxtLink
              >
            </div>
            <div class="flex flex-wrap justify-center gap-2 lg:gap-3">
              <NuxtLink
                to="/booking/Booking-tours"
                class="bg-white text-black rounded-full py-2 px-5 font-bold text-sm lg:text-base hover:bg-secondary transition"
                >Tours</NuxtLink
              >
              <NuxtLink
                to="/booking/Booking-services"
                class="bg-white text-black rounded-full py-2 px-5 font-bold text-sm lg:text-base hover:bg-secondary transition"
                >Services</NuxtLink
              >
              <NuxtLink
                to="/booking/Booking-caravans"
                class="bg-white text-black rounded-full py-2 px-5 font-bold text-sm lg:text-base hover:bg-secondary transition"
                >Caravans</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="content-index">
      <div class="bg-bg1 lg:px-10 pb-10">
        <p class="title lg:text-9xl text-center text-black">- The Camp -</p>
        <p class="barlow text-3xl lg:text-4xl my-4 text-center">
          Discover the Magic of Swedish Lapland at Camp Alta Kiruna
        </p>
        <NuxtLink
          to="/TheCamp"
          class="pt-4 section grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center"
        >
          <div class="">
            <div class="flex justify-center">
              <img src="/index/index_3.webp" alt="" class="" />
            </div>
            <p class="text-xl mt-8 text-left mx-2">
              Nestled in the heart of Swedish Lapland, Camp Alta Kiruna is a
              unique destination for nature lovers and outdoor enthusiasts. Our
              cozy cabins provide a perfect home base for exploring the stunning
              wilderness of Swedish Lapland, whether you're into hiking, skiing,
              snowmobiling, or simply soaking up the tranquility of the
              outdoors.
            </p>
            <div class="grid justify-center md:mb-8 mt-8">
              <button class="btn flex bg-primary lg:hidden">
                Discover more<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#fff"
                  class="w-4 mt-1 ml-3"
                >
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </button>
              <button
                class="btn flex bg-primary button-swiper opacity-0 button-swiper"
              >
                Discover more<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#fff"
                  class="w-5 mt-1 ml-3"
                >
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex justify-center w-full lg:h-[90vh] md:h-[70vh]">
            <img
              src="/index/index_5.webp"
              alt=""
              class="object-cover md:ml-4 lg:ml-8"
            />
          </div>
        </NuxtLink>
      </div>
      <div class="bg-bg2 lg:px-10 pb-10 lg:pb-10">
        <NuxtLink to="/cabins"
          ><p class="title lg:text-9xl text-left ml-8">Cabins -</p></NuxtLink
        >
        <swiper
          class="z-0"
          id="cabins-swiper"
          :spaceBetween="30"
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
              spaceBetween: 40,
            },
            '1025': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
        >
          <swiper-slide class="card-cabin">
            <NuxtLink class="card w-full" to="/cabins/Cabin-D123">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/d.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin D1-2-3</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink to="/cabins/Cabin-2ab" class="card w-full">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/2ab.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 2A-B</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-2c">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/2c.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 2C</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-3">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/3.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 3</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" href="/cabins/Cabin-4ab">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/4ab.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 4A-B</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-4c">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/4c.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 4C</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-4d">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/4d.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 4D</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-4d">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/5.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 5</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">1 bedroom, 12m2, 1 double bed</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-4d">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/6ac.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 6A-C</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-lg">
                  1 bedroom, 40m2, 2 single beds and 1 double sofa bed
                </p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-6b">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/6b.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Cabin 6B</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-lg">
                  1 bedroom, 25m2, 1 double bed and 1 bunk bed
                </p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-13a">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/13a.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-3xl caption mt-4">Cabin 13A</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-lg">
                  1 bedroom, 90m2, 3 bedrooms and 1 bathroom
                </p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-13b">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/13b.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-3xl caption mt-4">Cabin 13B</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-lg">
                  1 bedroom, 130m2, 2 bedrooms and 1 bathroom
                </p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink class="card w-full" to="/cabins/Cabin-14">
              <span class="card__image relative block">
                <img
                  src="/cabins/main/14.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-3xl caption mt-4">Cabin 14</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-lg">
                  1 bedroom, 162m2, 4 bedrooms and 1 bathroom
                </p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
      </div>
      <div class="bg-bg1 lg:px-10 pb-10">
        <p class="title lg:text-9xl text-center text-black ml-8">
          - Lakeside Aurora Cabins -
        </p>
        <p class="barlow text-3xl lg:text-4xl my-4 text-center">
          A cozy gateaway far from the noise
        </p>
        <NuxtLink
          to="/LakesideAuroraCabins"
          class="pt-4 section grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center"
        >
          <div class="">
            <div class="flex justify-center">
              <img src="/lakeside/lakeside.webp" alt="" class="" />
            </div>
            <p class="text-xl mt-8 text-left mx-2">
              Nestled in the heart of Swedish Lapland, Camp Alta Kiruna is a
              unique destination for nature lovers and outdoor enthusiasts. Our
              cozy cabins provide a perfect home base for exploring the stunning
              wilderness of Swedish Lapland, whether you're into hiking, skiing,
              snowmobiling, or simply soaking up the tranquility of the
              outdoors.
            </p>
            <div class="grid justify-center md:mb-8 mt-8">
              <button
                class="btn flex bg-secondary text-black lg:hidden font-bold"
              >
                Discover more<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#000"
                  class="w-4 mt-1 ml-3"
                >
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </button>
              <button
                class="btn flex bg-secondary text-black button-swiper opacity-0 button-swiper"
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
            </div>
          </div>
          <div
            class="flex justify-center w-full lg:h-[90vh] md:h-[70vh] md:ml-2 lg:ml-4"
          >
            <img
              src="/lakeside/aurora.webp"
              alt="aurora"
              class="w-full object-cover"
            />
          </div>
        </NuxtLink>
      </div>
      <div class="bg-bg2 lg:px-10 pb-10">
        <p class="title lg:text-9xl text-left text-black ml-8">Tours -</p>
        <swiper
          class="z-0"
          :spaceBetween="30"
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
              spaceBetween: 40,
            },
            '1025': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
        >
          <swiper-slide class="card-cabin">
            <NuxtLink to="/tours/Snowmobile-tours" class="card w-full">
              <span class="card__image relative block">
                <img
                  src="/tours/snowmobile/mob/snowmobile_mob_1.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Snowmobile tour</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">32 km to the icehotel</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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

          <swiper-slide class="card-cabin" to>
            <NuxtLink to="/tours/Dogsled-tour" class="card w-full">
              <span class="card__image relative block">
                <img
                  src="/tours/dogsled/dogsled_6b.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">Dogsled tour</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">With coffee</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink to="/tours/Northern-lights-tour" class="card w-full">
              <span class="card__image relative block">
                <img
                  src="/tours/northern/northern_16.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block h-48 pl-3">
                <p class="text-4xl caption text-black mt-4">
                  Northern lights tour
                </p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">In Abisko National Park</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
            <NuxtLink to="/tours/Aurora-adventure-safari" class="card w-full">
              <span class="card__image relative block">
                <img
                  src="/tours/safari/safari_10.webp"
                  alt=""
                  class="z-10"
                  loading="lazy"
                />
              </span>
              <span class="block lg:h-56 pl-3">
                <p class="text-4xl caption text-black mt-4">
                  Aurora Adventure Safari
                </p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">Evening aurora hunting</p>
                <button class="btn flex bg-primary mt-4 lg:hidden">
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    class="w-5 mt-1 ml-3"
                  >
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn flex bg-primary mt-4 opacity-0 button-swiper"
                >
                  Discover more<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
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
      </div>
      <!-- <div class="bg-bg2 lg:px-10 pb-10 lg:pb-20">
                <p class="title lg:text-9xl text-center">- Discover -</p>
                <p class="text-4xl text-center">Europe's Last Great Wilderness</p>
                <div class="zoom-container  mt-4" style="max-width: 100%;">
                    <video class="zoom-video"  autoplay="true" >
                        <source src="banner.mp4" type="video/mp4">
                    </video>
                </div>
            </div>-->
      <!--
                    video?
                    <div class="dinamic-video overflow-hidden w-full mx-auto mt-16" style="width: 100%;">
                    <video class="h-screen w-screen  object-cover" autoplay >
                        <source src="banner.mp4" type="video/mp4">
                    </video>
                </div>-->

      <!-- Guest Reviews Section -->
      <div class="lg:px-10 pb-10 lg:pb-20 min-h-[70vh] relative" id="Reviews">
        <img
          src="/bg-guests.webp"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <!--<div class="absolute inset-0 bg-[#000000]/10"></div>-->
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
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <!-- TripAdvisor Reviews -->
            <div
              class="bg-white/70 backdrop-blur-sm p-6 rounded-[50px] shadow-lg"
            >
              <div class="space-y-6">
                <div class="text-center mb-6">
                  <h3
                    class="text-2xl font-bold text-primary flex items-center justify-center gap-2"
                  >
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="#00AA6C">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                    TripAdvisor Reviews
                  </h3>
                  <div class="flex justify-center items-center gap-1 mt-2">
                    <span class="text-lg font-semibold">4.7/5</span>
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

                <!-- Individual TripAdvisor Reviews -->
                <div
                  class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-primary"
                >
                  <div class="flex items-center gap-2 mb-3">
                    <div class="flex text-yellow-400">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800">SlyEighty</span>
                    <span class="text-gray-500 text-sm">• April 2024</span>
                  </div>
                  <p class="text-gray-700 italic">
                    "Structure in a wonderful position in front of a frozen
                    lake… well heated and with everything you need."
                  </p>
                </div>

                <div
                  class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-primary"
                >
                  <div class="flex items-center gap-2 mb-3">
                    <div class="flex text-yellow-400">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800"
                      >Guest Review</span
                    >
                    <span class="text-gray-500 text-sm">• February 2024</span>
                  </div>
                  <p class="text-gray-700 italic">
                    "Picturesque place with many great trips, lovely and helpful
                    staff and lots of local experiences to do! The camp is very
                    clean and it is located by the beautiful lake. It has
                    saunas, fireplace, lots of equipment to rent and pretty
                    cabins. Best for 2–7 days at any time of the year!"
                  </p>
                </div>
              </div>
              <div class="text-center mt-6">
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g189826-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html"
                  target="_blank"
                  class="text-xl font-bold text-black hover:text-primary flex items-center justify-center w-full sm:w-1/3"
                >
                  + Read more reviews
                </a>
              </div>
            </div>
            <!-- Google Maps Reviews -->
            <div
              class="bg-white/70 backdrop-blur-sm p-6 rounded-[50px] shadow-lg"
            >
              <div class="space-y-6">
                <div class="text-center mb-6">
                  <h3
                    class="text-2xl font-bold text-primary flex items-center justify-center gap-2"
                  >
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="#4285F4">
                      <path
                        d="M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13C19,5.13 15.87,2 12,2z"
                      />
                      <circle cx="12" cy="9" r="2.5" fill="white" />
                    </svg>
                    Google Reviews
                  </h3>
                  <div class="flex justify-center items-center gap-1 mt-2">
                    <span class="text-lg font-semibold">4.3/5</span>
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
                        class="w-5 h-5 fill-current opacity-30"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Individual Google Reviews -->
                <div
                  class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-blue-500"
                >
                  <div class="flex items-center gap-2 mb-3">
                    <div class="flex text-yellow-400">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800"
                      >Tadeusz Markito</span
                    >
                    <span class="text-gray-500 text-sm">• July 2025</span>
                  </div>
                  <p class="text-gray-700 italic">
                    "A cozy and comfortable campsite, clean and equipped with
                    all amenities. For sauna lovers, there are several types of
                    saunas (we didn't use them), and the showers are included in
                    the price."
                  </p>
                </div>

                <div
                  class="bg-white p-6 rounded-[50px] shadow-md border-l-4 border-blue-500"
                >
                  <div class="flex items-center gap-2 mb-3">
                    <div class="flex text-yellow-400">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                    <span class="font-semibold text-gray-800">Yuandy</span>
                    <span class="text-gray-500 text-sm">• June 2025</span>
                  </div>
                  <p class="text-gray-700 italic">
                    "Warmly welcomed by the French! You can enjoy the sauna if
                    you have firewood; otherwise, it's sold at reception for €8.
                    A kitchen with everything you need. A perfect place for a
                    road trip."
                  </p>
                </div>
              </div>
              <div class="text-center mt-6">
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g189826-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html"
                  target="_blank"
                  class="text-xl font-bold text-black hover:text-primary flex items-center justify-center w-full sm:w-1/3"
                >
                  + Read more reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20">
        <p class="title lg:text-9xl text-center">- FAQ -</p>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 justify-center md:pt-8">
          <!--flex justify-center grid lg:grid-cols-4 md:grid-cols-2-->
          <div class="my-3 md:mx-6 flex justify-center">
            <NuxtLink
              to="/FaQ#booking"
              class="px-7 py-3 rounded-[50px] bg-[#ffffffdb] w-full text-center shadow hover:bg-primary hover:text-white duration-600"
            >
              <div class="flex justify-center mb-6">
                <svg
                  class="md:w-[200px] md:h-[200px] w-14 h-14"
                  viewBox="0 0 463 527"
                  version="1.1"
                  id="svg17757"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <defs id="defs17761" />
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="m 135.5,7.5000009 c 13.3,0 24,10.7000001 24,24.0000001 v 40.000003 h 144 V 31.500001 c 0,-13.3 10.7,-24.0000001 24,-24.0000001 13.3,0 24,10.7000001 24,24.0000001 v 40.000003 h 40 c 35.3,0 64,28.699996 64,63.999996 v 16 48 256 c 0,35.3 -28.7,64 -64,64 H 71.500003 c -35.3,0 -64.0000038,-28.7 -64.0000038,-64 v -256 -48 -16 c 0,-35.3 28.7000038,-63.999996 64.0000038,-63.999996 H 111.5 V 31.500001 c 0,-13.3 10.7,-24.0000001 24,-24.0000001 z M 407.5,199.5 H 55.500003 v 256 c 0,8.8 7.2,16 16,16 H 391.5 c 8.8,0 16,-7.2 16,-16 z m -71,105 -112,112 c -9.4,9.4 -24.6,9.4 -33.9,0 l -64,-64 c -9.4,-9.4 -9.4,-24.6 0,-33.9 9.4,-9.3 24.6,-9.4 33.9,0 l 47,47 95,-95 c 9.4,-9.4 24.6,-9.4 33.9,0 9.3,9.4 9.4,24.6 0,33.9 z"
                    id="path17755"
                    style="
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: #007984;
                      stroke-width: 15;
                      stroke-dasharray: none;
                      stroke-opacity: 1;
                    "
                  />
                </svg>
              </div>
              <p class="text-4xl">Bookings</p>
            </NuxtLink>
          </div>
          <div class="my-3 md:mx-6 flex justify-center">
            <NuxtLink
              to="/FaQ#cabins"
              class="px-7 py-3 rounded-[50px] bg-[#ffffffdb] w-full hover:text-white text-center shadow hover:bg-primary duration-600"
            >
              <div class="flex justify-center mb-6">
                <svg
                  class="md:w-[200px] md:h-[200px] w-14 h-14"
                  viewBox="0 0 590.93933 527.09998"
                  version="1.1"
                  id="svg15765"
                  sodipodi:docname="house-user-solid.svg"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <defs id="defs15769" />

                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="m 583.3,263 c 0,18 -15,32.1 -32,32.1 h -32 l 0.7,160.2 c 0.2,35.5 -28.5,64.3 -64,64.3 H 135.6 c -35.3,0 -64,-28.7 -64,-64 V 295.1 H 39.5 C 21.5,295.1 7.4999998,281.1 7.4999998,263 7.4999998,254 10.5,246 17.5,239 L 273.9,15.5 c 7,-7.0000004 15,-8.0000004 22,-8.0000004 7,0 15,2 21,7.0000004 L 572.3,239 c 8,7 12,15 11,24 z M 359.5,231.5 a 64,64 0 1 0 -128,0 64,64 0 1 0 128,0 z m -96,96 c -44.2,0 -80,35.8 -80,80 0,8.8 7.2,16 16,16 h 192 c 8.8,0 16,-7.2 16,-16 0,-44.2 -35.8,-80 -80,-80 z"
                    id="path15763"
                    style="
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: #007984;
                      stroke-width: 15;
                      stroke-dasharray: none;
                      stroke-opacity: 1;
                    "
                    inkscape:export-filename="check.svg"
                    inkscape:export-xdpi="96"
                    inkscape:export-ydpi="96"
                  />
                </svg>
              </div>
              <p class="text-4xl">Cabins</p>
            </NuxtLink>
          </div>
          <div class="my-3 md:mx-6 flex justify-center">
            <NuxtLink
              to="/FaQ#camp"
              class="px-7 py-3 rounded-[50px] bg-[#ffffffdb] w-full text-center shadow hover:text-white hover:bg-primary duration-600"
            >
              <div class="flex justify-center mb-6">
                <svg
                  class="md:w-[200px] md:h-[200px] w-14 h-14"
                  viewBox="0 0 600 600"
                  version="1.1"
                  id="svg11797"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <defs id="defs11801" />
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="m 390.01695,93.220339 c 11,-13.8 8.8,-33.9 -5,-45 -13.8,-11.1 -33.9,-8.8 -45,5 l -39,48.800001 -39,-48.800001 c -11,-13.8 -31.2,-16 -45,-5 -13.8,11 -16,31.2 -5,45 l 48,60.000001 -234.700001,293.4 c -8,10 -12.3,22.3 -12.3,35 v 23.6 c 0,26.5 21.5,48 48,48 h 240.000001 240 c 26.5,0 48,-21.5 48,-48 v -23.6 c 0,-12.7 -4.3,-25.1 -12.3,-35 l -234.7,-293.4 z m -89,396.000001 h -119.5 l 119.5,-156.3 119.5,156.3 z"
                    id="path11795"
                    style="
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: #007984;
                      stroke-width: 15;
                      stroke-dasharray: none;
                      stroke-opacity: 1;
                    "
                  />
                </svg>
              </div>
              <p class="md:text-4xl text-3xl">Camp services</p>
            </NuxtLink>
          </div>
          <div class="my-3 md:mx-6 flex justify-center">
            <NuxtLink
              to="/FaQ#arrivals"
              class="px-7 py-3 rounded-[50px] bg-[#ffffffdb] w-full text-center shadow hover:bg-primary hover:text-white duration-600"
            >
              <div class="flex justify-center mb-6">
                <svg
                  class="md:w-[200px] md:h-[200px] w-14 h-14"
                  viewBox="0 0 414 540.36444"
                  version="1.1"
                  id="svg7050"
                  sodipodi:docname="location-dot-solid.svg"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <defs id="defs7054" />

                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M 230.7,514.2 C 282,450 399,294.4 399,207 399,101 313,14.999999 207,14.999999 101,14.999999 15,101 15,207 c 0,87.4 117,243 168.3,307.2 12.3,15.3 35.1,15.3 47.4,0 z M 207,143 a 64,64 0 1 1 0,128 64,64 0 1 1 0,-128 z"
                    id="path7048"
                    style="
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: #007984;
                      stroke-width: 15;
                      stroke-dasharray: none;
                      stroke-opacity: 1;
                    "
                    inkscape:label="path7048"
                  />
                </svg>
              </div>
              <p class="text-4xl">Getting here</p>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20" id="Contact">
        <p class="title lg:text-9xl text-center">- Contact -</p>
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div class="mb-8">
            <p class="text-xl text-left flex mx-2 lg:ml-20 mb-2">
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
              Jullebovägen 2, 981 92 Kiruna, Sweden
            </p>
            <p class="text-xl text-left flex mx-2 lg:ml-20 mb-2">
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
              info@campalta.se
            </p>
            <p class="text-xl text-left flex mx-2 lg:ml-20 mb-2">
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
                class="mb-4 w-200 lg:w-[400px]"
                style="border: 0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771125.8104534644!2d19.95197992395521!3d67.82188320000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0c7dcfface7c5%3A0x8ac9956e5888d6e3!2sCamp%20Alta!5e0!3m2!1ses!2sad!4v1681807724425!5m2!1ses!2sad"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <ContactForm />
          <!-- <div class="pb-3 ">
                        <div class="grid lg:grid-cols-2 md:grid-cols-2">
                            <div class="lg:mx-12 mx-2">
                                <label for="name" class="text-xl pl-1">Name</label><br>
                                <input type="text" name="name" id="name" class="w-full mt-2 rounded-2xl shadow hover:border-[1px] hover:border-[#007984] outline-0 px-3 py-1">
                            </div>
                            <div class="lg:mx-12 mx-2">
                                <label for="email" class="text-xl pl-1">Email</label><br>
                                <input type="text" name="email" id="email" class="w-full mt-2 rounded-2xl border-black shadow hover:border-[1px] hover:border-[#007984] outline-0 px-3 py-1">

                            </div>
                        </div>      
                        <div class="lg:mx-12  mt-6 mx-2">
                            <label for="message" class="text-xl pl-1">Message</label><br>
                            <textarea name="message" id="message" cols="30" rows="10" class="w-full mt-2 rounded-2xl shadow  hover:border-[1px] hover:border-[#007984] outline-0 px-3 py-1"></textarea>
                        </div>                 
                        <div class="grid justify-center mt-4">
                            <button v-if="sending==true" class="btn bg-primary disabled" ><img src="/hamburger.svg" alt="abrir menu">Sending...</button>
                            <button v-else @click="sendForm()" class="btn bg-primary flex">
                                <img src="/email.svg" alt="" class="w-6 mr-3 pt-[2px]">
                                Send
                            </button>
                        </div>
                    </div>                                   
                   <div>
                        <recaptcha v-model="recaptchaResponse"></recaptcha>
                        <button @click="submitForm">Submit</button>
                    </div>-->
        </div>
      </div>
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
useSeo({
  title: "Camp Alta Kiruna - Arctic Wilderness Camp in Swedish Lapland",
  description:
    "Discover the beauty of Lapland from our cozy, affordable cabins. Dive into real winter adventure with our snowmobile, dogsled, and Northern Lights tours in Kiruna, Sweden.",
  path: "/",
  image: "/index/index_1.webp",
});

const heroPreloadHref = (() => {
  const today = new Date();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const isSummer = (m >= 4 && m <= 8) || (m === 9 && d < 15);
  return isSummer ? "/index/index_1.webp" : "/index/index_2.webp";
})();

useHead({
  link: [
    {
      rel: "preload",
      href: heroPreloadHref,
      as: "image",
      type: "image/webp",
      fetchpriority: "high",
    },
  ],
  script: [{
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": "https://campalta.net/#lodging",
      name: "Camp Alta Kiruna",
      alternateName: "Camp Alta",
      description: "Arctic wilderness camp in Kiruna, Swedish Lapland. Cozy cabin accommodation on the shores of Lake Altajärvi, 7 km from Kiruna city centre and 200 km north of the Arctic Circle. Year-round destination for Northern Lights, dog sledding, snowmobile tours, and midnight sun experiences.",
      url: "https://campalta.net",
      logo: "https://campalta.net/logo.svg",
      image: [
        "https://campalta.net/index/index_1.webp",
        "https://campalta.net/index/index_2.webp",
        "https://campalta.net/index/index_3.webp",
      ],
      telephone: "+46706529374",
      email: "info@campalta.se",
      priceRange: "$$",
      currenciesAccepted: "SEK, EUR",
      paymentAccepted: "Cash, Credit Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jullebovägen 2",
        addressLocality: "Kiruna",
        postalCode: "981 92",
        addressRegion: "Norrbotten",
        addressCountry: "SE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 67.8558,
        longitude: 20.2253,
      },
      areaServed: {
        "@type": "Place",
        name: "Swedish Lapland",
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      petsAllowed: true,
      smokingAllowed: false,
      numberOfRooms: 17,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wood-fired sauna", value: true },
        { "@type": "LocationFeatureSpecification", name: "Floating lake sauna", value: true },
        { "@type": "LocationFeatureSpecification", name: "Fire hut with grill", value: true },
        { "@type": "LocationFeatureSpecification", name: "Northern Lights viewing", value: true },
        { "@type": "LocationFeatureSpecification", name: "Lake access", value: true },
        { "@type": "LocationFeatureSpecification", name: "Pet friendly", value: true },
        { "@type": "LocationFeatureSpecification", name: "Heating", value: true },
        { "@type": "LocationFeatureSpecification", name: "Cable TV", value: true },
      ],
      makesOffer: [
        { "@type": "Offer", name: "Forest cabin (small, 12m²)", priceCurrency: "SEK", category: "Accommodation" },
        { "@type": "Offer", name: "Forest cabin (medium, 25-40m²)", priceCurrency: "SEK", category: "Accommodation" },
        { "@type": "Offer", name: "Forest house (large, 90-162m²)", priceCurrency: "SEK", category: "Accommodation" },
        { "@type": "Offer", name: "Lakeside Aurora Cabin (premium)", priceCurrency: "SEK", category: "Accommodation" },
        { "@type": "Offer", name: "Caravan / motorhome pitch", priceCurrency: "SEK", category: "Camping" },
        { "@type": "Offer", name: "Snowmobile tour", priceCurrency: "SEK", category: "Tour" },
        { "@type": "Offer", name: "Dog sledding tour", priceCurrency: "SEK", category: "Tour" },
        { "@type": "Offer", name: "Northern Lights tour to Abisko", priceCurrency: "SEK", category: "Tour" },
        { "@type": "Offer", name: "Aurora Adventure Safari", priceCurrency: "SEK", category: "Tour" },
      ],
      sameAs: [
        "https://www.tripadvisor.com/Hotel_Review-g189815-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html",
      ],
    }),
  }],
});

import { onMounted, onUnmounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sending = ref(false);

// Computed property to determine hero image based on current date
// Summer (April 1 - September 14): index_1.webp
// Winter (September 15 - March 31): index_2.webp
const heroImageSrc = computed(() => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const isSummer =
    (month >= 4 && month <= 8) ||
    (month === 9 && day < 15);

  return isSummer ? "/index/index_1.webp" : "/index/index_2.webp";
});

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
</style>
