<template>
    <div id="screen">            
        <section class="hero lg:bg-[url('/tours/snowmobile/snowmobile_1b.webp')] bg-[url('/tours/snowmobile/snowmobile_1b_mob.webp')] bg-cover ">
        </section>    
    </div>
     

    <!--to top-->
    <span id="top"></span> 
    <ToTop/>      
    <div class="">                      
        <div class="p-0 absolute top-0 h-[50vh] w-full z-10 ">
            <Navbar/>
            <div class="h-[60vh] flex flex-col justify-center items-center text-center">
                <div class="absolute inset-0 bg-black/40" id="filter"></div>
                <p class="title text-white lg:text-9xl relative z-10 ">Tours</p>
                
            </div>
            </div>
        </div>
        <section class="content-cabins">        
            <div class="bg-bg2 lg:px-10 pb-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Snowmobile tours</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line w-1/2"></p>                        
                        </div>
                        <p class="text-xl mt-4 text-left px-2">Feel the adrenaline rush as you drive a snowmobile on a frozen lake! We’ll provide warm winter gear, making the extreme cold just another part of the adventure. Our professional guides will give you a quick driving lesson before you set off. You’ll start with a few practice laps on the frozen lake, Then the real journey begins! Embark on a 32km adventure through magical, snow-covered forests and enjoy the breathtaking winter landscape. Join us for this thrilling experience you'll never forget!</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/tours/Snowmobile-tours"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>                     
                    <div class="lg:pt-10 flex  justify-center  w-full h-full">
                        <img src="/tours/snowmobile/pc/snowmobile_5.webp" alt="" class="object-cover">
                    </div>
                </div> 
            </div>      
            <div class="bg-bg1 lg:px-10 pb-10 ">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                    <div class="lg:flex pt-10 hidden  justify-center  w-full h-full">
                        <img src="/tours/dogsled/main_dogsled.webp" alt="" class="object-cover">
                    </div>
                    <div class="lg:ml-10 lg:pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Dogsled tours</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line w-1/2 lg:w-1/3 "></p>                        
                        </div>
                        <p class="text-xl mt-4 text-left px-2">Are you looking for a relaxing way to enjoy a dog sledding adventure driven by a professional musher?Look no further! During this dog sledding adventure your professional musher will drive a team of dogs while you sit comfortably in a relaxed position on warm reindeer skins in a big wooden sled. During this incredible dog sledding adventure, you will silently travel through a sparkling frozen winter wonderland with ancient pine tree forests, spectacular frozen lakes and beautiful wetlands.</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/Tours/Dogsled-tour"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>    
                    <div class="lg:hidden  flex  justify-center">
                        <img src="/tours/dogsled/main_dogsled.webp" alt="" class="">
                    </div>   
                </div> 
            </div>  
            <div class="bg-bg2 lg:px-10 pb-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 lg:pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Northern lights tours</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line w-1/2 lg:w-2/3"></p>                        
                        </div>
                        <p class="text-xl mt-4 text-left px-2">Join an unforgettable journey to witness the breathtaking Northern Lights and create memories that will last a lifetime! Let us take you to prime viewing spots and explore Abisko’s unique winter landscapes. Your guides will share fascinating stories and facts about the Northern Lights, taking care of every detail, from transportation and professional winter gear to snacks and warm drinks, so you can relax and marvel at the stunning night sky. Don’t miss the chance to experience one of nature’s most magical shows!</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/Tours/Northern-lights-tour"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>                     
                    <div class="flex lg:pt-10 justify-center  w-full h-full">
                        <img src="/tours/northern/northern_15.webp" alt="" class="object-cover">
                    </div>
                </div>
            </div>
            <div class="bg-bg1 lg:px-10 pb-10 ">
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:flex pt-10 hidden  justify-center  w-full h-full">
                        <img src="/tours/safari/safari_5.webp" alt="" class="object-cover">
                    </div>
                    <div class="lg:ml-10 lg:pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Aurora Adventure Safari</p>
                        <div class="flex justify-center pb-8">
                            <p class="line w-1/2 lg:w-2/3 "></p>
                        </div>
                        <p class="text-xl mt-4 text-left px-2">Join us on a magical two-hour evening adventure through the Arctic wilderness. Sit back in a comfortable sled pulled by your guide's snowmobile as we leave the lights of Kiruna behind and journey into the silent, snowy landscapes. With clear skies, you'll have the chance to witness the Northern Lights dancing above — a safe, cozy, and unforgettable way to hunt for the Aurora Borealis.</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/tours/Aurora-adventure-safari"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="lg:hidden  flex  justify-center">
                        <img src="/tours/safari/safari_5.webp" alt="" class="">
                    </div>
                </div>
            </div>
            <Footer/>  
        </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Arctic Tours - Dogsled, Snowmobile & Northern Lights | Camp Alta',
  description: 'Experience Arctic adventures in Kiruna, Swedish Lapland. Snowmobile tours, dogsled rides, Northern Lights safaris, and aurora hunting trips from Camp Alta.',
  path: '/Tours',
  image: '/tours/snowmobile/snowmobile_1b.webp',
})

import { onMounted, onUnmounted } from 'vue';

let ticking = false;
function parallax() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero') as HTMLElement;
      const heroText = document.querySelector('.hero-text') as HTMLElement;

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