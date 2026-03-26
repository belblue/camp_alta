<template>
  <div id="screen">
    <section class="bg-[url('/camping.webp')] bg-cover hero"></section>
  </div>

  <!--to top-->
  <span id="top"></span>
  <ToTop />
  <div class="">
    <div class="p-0 absolute h-[50vh] top-0 w-full z-10">
      <Navbar />
      <div
        class="h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <div class="absolute inset-0 bg-black/30" id="filter"></div>
        <p class="title text-white lg:text-9xl relative z-10">
          Summer in the camp
        </p>
      </div>
    </div>
  </div>
  <section class="content-cabins">
    <p class="bg-bg1 px-2 lg:px-10 pb-2 text-2xl mt-8">
      Most people associate Arctic Lapland with cold winters, northern lights,
      dog sledding and snowmobiles. However summer in Kiruna, whilst short is an
      eclectic vibrant time. Complete with 24 hour midnight sun, fantastic
      hiking opportunities, superb fishing days, Ice Hotel 365 and LKAB the
      largest underground Iron ore mine in the world to visit, You'll find
      plenty to do in Kiruna.
    </p>
    <div class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 justify-center mt-4">
        <div class="lg:mr-10">
          <p class="text-xl mt-8">
            Here at Camp Alta we provide a fantastic relaxed base for you.
            Situated next to the atmospheric Lake Altajärvi, only 15km drive
            from the town centre in a lovely peaceful forest, there are few
            place in Kiruna as Idyllic.
          </p>
          <p class="text-xl mt-8">
            We have a mix of accommodations to suit everyone, from fairytale
            esque, two people lakeside cabins up to larger 12 bed cottages with
            kitchens, showers, lounge etc. Camper vans, mobile homes or husbils
            as they are known in Sweden are also welcome to our quaint lakeside
            pitches. Or if you just want to pitch your tent we have a nice area
            set aside for this also.
          </p>
          <p class="text-xl mt-8">
            Camping in Kiruna, Lapland does get more relaxing than here in Camp
            Alta. Drinking a nice glass of wine at 00:00 hours with the midnight
            sun high in the sky, taking out of our boats or canoes across the
            lake, maybe try a little fishing or just enjoy the breathtaking
            ethereal views of Lapland’s midnight sun lighting up the Kiruna city
            and surrounding wilderness.
          </p>
        </div>
        <div class="mt-4 flex justify-center">
          <img src="/lakeside/general/lakeview.webp" alt="" class="" />
        </div>
      </div>
    </div>
    <div class="bg-bg2 px-2 lg:px-10 pb-10 lg:pb-20">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 justify-center">
        <div class="lg:flex mt-4 hidden justify-center">
          <img src="/camp/sauna/sauna_2.webp" alt="" class="" />
        </div>
        <div class="lg:ml-10">
          <p class="text-xl mt-8">
            Of course, you may choose to relax with a healthy sauna in one of
            our three saunas. One of which floats on the beautiful lake so you
            can treat your body to some healthy hot and cold therapy. We also
            offer you several splendid areas for barbecues, two of which are
            inside and one can hold up to 40 people. We also have a small play
            area for children, all of this you can use free of charge.
          </p>
          <p class="text-xl mt-8">
            Come and visit us for a few relaxing days. If you need advice on
            what to do, or where to go to book an organised tour speak with us
            at reception. We are only an hours drive from Nikkaluokta – The
            gateway to the mountains and Sweden’s highest mountain Kebnekaise.
            Also a popular entry to Sweden's world famous long distance hiking
            trail “The Kungsleden” or Kings Trail.
          </p>
          <p class="text-xl mt-8">
            You can also take a short drive to visit the Nutti Sami centre,
            learn about the indigenous sami culture, taste their delightful
            local cuisine, feed the Reindeer, visit the oldest standing Sami
            church in Lapland. You can't go Dog Sledding but maybe you can
            organise a visit to one of the local Husky Kennels and meet the
            puppies, go for a short ride on a “Husky Cart” or even help feed the
            Huskies.
          </p>
        </div>
        <div class="lg:hidden mt-4 flex justify-center">
          <img src="/camp/sauna/sauna_2.webp" alt="" class="" />
        </div>
      </div>
      <p class="pb-2 text-2xl mt-8">
        Whilst we relax here in the nature with a wilderness around full of
        reindeers and moose, there is plenty of things to do either here in Camp
        Alta or a very short drive away. Get in touch with us should you have
        any questions or just drop in if you’re driving up the E-10, our door is
        always open during reasonable hours.
      </p>
    </div>
    <Footer />
  </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Summer in Kiruna - Midnight Sun & Nature | Camp Alta',
  description: 'Experience summer at Camp Alta Kiruna with 24-hour midnight sun, lakeside relaxation, fishing, hiking, and saunas. The perfect base for exploring Arctic Lapland in the warm months.',
  path: '/theCamp/Summer',
})

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

onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});
</script>
