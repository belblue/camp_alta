<template>

      <!--to top-->
    <span id="top"></span>
    <ToTop/>
    <div class="">


        <section class="">
            <Navbar/>
            <div class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
                <h1 class="lg:text-6xl text-4xl pt-20">Experience the Magic of Campalta: Hear Inspiring Stories from Our Guests!</h1>
                <div ref="juicerContainer" class="min-h-[200px]">
                  <ul v-if="juicerLoaded" class="juicer-feed" data-feed-id="campalta_kiruna"></ul>
                  <div v-else class="flex justify-center items-center py-20">
                    <svg class="w-8 h-8 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                </div>
            </div>
            <Footer/>
        </section>
    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Be Inspired - Arctic Adventures & Experiences | Camp Alta Kiruna',
  description: 'Get inspired by stories and experiences shared by Camp Alta guests. Discover the magic of Arctic Lapland through the eyes of travelers from around the world.',
  path: '/theCamp/BeInspired',
})

import { onMounted, ref } from 'vue';

const juicerContainer = ref<HTMLElement | null>(null);
const juicerLoaded = ref(false);

// Dynamically load Juicer script
const loadJuicer = () => {
  if (juicerLoaded.value) return;

  const script = document.createElement('script');
  script.src = 'https://www.juicer.io/embed/campalta_kiruna/embed-code.js';
  script.async = true;

  script.onload = () => {
    juicerLoaded.value = true;
  };

  document.head.appendChild(script);
};

onMounted(() => {
  // Use Intersection Observer to lazy load Juicer when section comes into view
  if (juicerContainer.value && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadJuicer();
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before it comes into view
        threshold: 0
      }
    );

    observer.observe(juicerContainer.value);
  } else {
    // Fallback for browsers without IntersectionObserver
    loadJuicer();
  }
});

</script>