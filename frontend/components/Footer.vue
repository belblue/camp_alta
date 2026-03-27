<template>
  <div class="bg-white pt-8">
    <div class="grid lg:grid-cols-4 justify-center items-justify">
      <div class="flex justify-center">
        <NuxtLink class="p-2" title="back to main" to="/">
          <img src="/campalta.webp" alt="logo campalta" class="w-52" />
        </NuxtLink>
      </div>
      <div class="text-center">
        <p class="flex m-4 text-xl text-primary font-bold">Need help?</p>
        <p class="flex m-4 text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlns:v="https://vecta.io/nano"
            class="h-6 pr-2 mt-1"
          >
            <path
              d="M61.101 64c-24.831 0-44.977 21.5-44.977 48 0 15.1 6.653 29.3 17.991 38.4l203.894 163.2c10.682 8.5 25.299 8.5 35.981 0l203.894-163.2c11.338-9.1 17.991-23.3 17.991-38.4 0-26.5-20.146-48-44.977-48zM16.125 176v208c0 35.3 26.892 64 59.969 64h359.813c33.077 0 59.969-28.7 59.969-64V176L291.981 339.2c-21.364 17.1-50.599 17.1-71.963 0z"
              fill="none"
              stroke="#000"
              stroke-width="30"
            />
          </svg>
          info@campalta.se
        </p>
        <p class="flex m-4 text-xl">
          <img src="/phone.svg" alt="" class="h-6 pr-2 mt-1" />+46 (0) 706 529
          374
        </p>
      </div>
      <div class="justify-center flex">
        <!--<NuxtLink class="m-4"><img src="/media/face.svg" alt="" class="h-10 pr-2"></NuxtLink>-->
        <NuxtLink class="m-4"
          ><img src="/media/insta.svg" alt="" class="h-10 pr-2"
        /></NuxtLink>
        <!-- <NuxtLink class="m-4 "><img src="/media/youtube.svg" alt="" class="h-10 pr-2"></NuxtLink>-->
      </div>

      <div class="text-center lg:text-left">
        <p>
          <NuxtLink
            to="/docs/Privacy"
            title="privacy policy"
            class="m-4 text-xl hover:text-primary"
            target="_blank"
            >Privacy policy</NuxtLink
          >
        </p>
        <p>
          <NuxtLink
            to="/docs/Environmental"
            title="Environmental policy"
            class="m-4 text-xl hover:text-primary"
            target="_blank"
            >Environmental policy</NuxtLink
          >
        </p>
        <p>
          <NuxtLink
            to="/docs/Legal"
            title="Legal warning"
            class="m-4 text-xl hover:text-primary"
            target="_blank"
            >Legal warning</NuxtLink
          >
        </p>
      </div>
    </div>
    <div>
      <div class="m-2 text-center">
        <!--<a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>-->
        <NuxtLink class="hover:text-primary" href="https://belblue.vercel.app/">
          Design by BelBLue</NuxtLink
        >
        <p>© Alta resorts AB 2023 - All rights reserved</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*.footer {
        padding-top: 5px;
        text-align: center;
        background-color: #CCE0F2;
        padding-bottom: 5px;
    }*/
</style>
