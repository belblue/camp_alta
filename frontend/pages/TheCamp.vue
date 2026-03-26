<template>
    <div id="screen">            
        <section class="bg-[url('/header/header_camp.webp')] bg-cover hero">
        </section>    
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="p-0 absolute top-0 h-[50vh] w-full z-10 ">
            <Navbar/>
            <div class="h-[60vh] flex flex-col justify-center items-center text-center">
                <div class="absolute inset-0 bg-black/30" id="filter"></div>
                <p class="title text-white lg:text-9xl relative z-10 ">The Camp</p>
                
            </div>
        </div>
        <section class="content-cabins">     
            <p class="barlow text-3xl lg:text-4xl my-4 text-center">Discover the Magic of Swedish Lapland at Camp Alta Kiruna</p>                    
            <div class="bg-bg1 lg:px-10 pb-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 ">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">About the Camp</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>                        
                        </div>
                        <p class="text-xl text-left">Camp Alta offers affordable accommodation in 18 cabins right on the foot of the stunning Altajärvi Lake surrounded by the Arctic forests. Situated just a 15-minute drive from Kiruna, our Camp is the perfect place to admire the beauty of the Swedish Lapland in any season. Enjoy winter sports and marvel at the Northern Lights or jump into an Arctic lake under the Midnight Sun. We are open year-round, ready to offer you a magical experience in one of the planet's most extraordinary locations. If you are looking for adventure, you are in the right place!</p>
                       <!-- <p class="text-xl mt-4 text-left">Nestled in the heart of Swedish Lapland, Camp Alta Kiruna is a unique destination for nature lovers and outdoor enthusiasts. Our cozy cabins provide a perfect home base for exploring the stunning wilderness of Swedish Lapland, whether you're into hiking, skiing, snowmobiling, or simply soaking up the tranquility of the outdoors.</p>
                        <p class="text-xl mt-4 text-left">With our prime location, you'll have easy access to iconic sights, including the Northern Lights ( Aurora Borealis), often seen dancing in the sky above during the winter months. Our knowledgeable guides offer insights into the history and culture of this fascinating region, from the traditional Sami way of life to the science behind the Aurora Borealis.</p>
                        <p class="text-xl mt-4 text-left">At Camp Alta Kiruna, we pride ourselves on providing an authentic and personalized experience tailored to each guest's interests. Whether seeking a quiet retreat or an adrenaline-fueled adventure, our team will help create the perfect itinerary, comfortable accommodations, and unforgettable experiences. Book your stay at Camp Alta Kiruna today and discover the magic of Swedish Lapland for yourself.</p>
                       -->
                       <div class="grid justify-center my-8">
                            <NuxtLink href="/theCamp/AboutCamp"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>   
                                                                          
                        </div>
                        <div class="flex justify-center lg:justify-end items-center  mt-8 ">
                            <img src="/camp/tap.webp"  alt="Tap to enlarge" class="w-[25%] lg:flex  hidden"  @click="openModal('/camp/map-v9.webp')">
                            <img src="/camp/tap-mob.webp"  alt="Tap to enlarge" class="w-1/2 md:w-1/3 lg:hidden"  @click="openModal('/camp/map-v9.webp')">
                        </div>                    
                    </div>                     
                    <div class=" mt-4 justify-center md:flex hidden  w-full h-full">
                        <img src="/camp/map-thumb-v9.webp" alt="" class="object-cover "  @click="openModal('/camp/map-v9.webp')">
                    </div>   
                    <div class=" mt-4  justify-center flex md:hidden">
                        <img src="/camp/map-thumb-v9.webp" alt="" class=""  @click="openModal('/camp/map-v9.webp')">
                    </div>  
                </div> 
            </div>    
                <!-- Overlay Lightbox -->
   

            <div class="bg-bg2 lg:px-10 pb-10 lg:pt-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                    <div class="lg:flex mt-4 hidden justify-center w-full h-full">
                            <img src="/camp/camp_2.webp" alt="" class="object-cover">
                    </div>   
                    
                    <div class="lg:ml-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">About us</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line w-36 "></p>                        
                        </div>
                        <p class="text-xl mt-4 text-left  px-2">Started in the early 2000s, Camp Alta is one of the most popular and recognized tourist destinations in the area, offering unforgettable experiences and soothing relaxation in a truly beautiful setting. Our mission has always been to make the majestic nature and beauty of the Swedish Lapland accessible to every adventurer. Our goal is to create a relaxed atmosphere where you can feel taken care of and, above all, have a fantastic time exploring. We promise to offer you a warm welcome even amidst the harshest frosts!</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/theCamp/AboutUs"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>    
                    <div class="md:flex lg:hidden mt-4 hidden justify-center w-full h-full">
                            <img src="/camp/camp_2.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4 flex justify-center md:hidden">
                            <img src="/camp/camp_2.webp" alt="" class="">
                    </div>   
                </div> 
            </div>  
            <div class="bg-bg1 lg:px-10 pb-10 lg:pt-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center min-h-[70vh]">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">How to get here</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>                        
                        </div>
                        <p class="text-xl text-left">Planning your trip to our camp? Whether you prefer to travel by plane, train, or car, we've got you covered with detailed directions to ensure you arrive with ease. </p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/theCamp/GetHere"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>                     
                    <div class=" mt-4 justify-center md:flex hidden w-full h-full">
                            <img src="/camp/camp_1.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4  justify-center flex md:hidden">
                        <img src="/camp/camp_1.webp" alt="" class="">
                    </div>  
                </div> 
            </div>   
            <NuxtLink href="/theCamp/BeInspired" class="pb-10">
                <div >
                    <div class="lg:hidden md:hidden flex h-[70vh] justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-[url('public/camp/general/general_10.webp')] bg-cover bg-center  scale-110"></div>
                        <div class="absolute top-1/4 text-center text-white z-10">
                            <h1 class="text-white text-6xl uppercase">Be inspired</h1>
                            <button>                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-16 mt-8 ml-6" fill="#fff"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </button>

                        </div>
                    </div>
                   <div class="inspired lg:flex md:flex hidden justify-center relative h-[70vh] overflow-hidden">
                        <div class="absolute inset-0 bg-[url('public/camp/general/general_10.webp')] bg-cover bg-center scale-110"></div>
                        <!--<img class="object-fit lg:w-screen lg:h-screen" src="/cabin-land.jpeg" alt="Image">-->
                        <div class="absolute top-1/3 text-center text-white z-10">
                            <h1 class="text-white lg:text-9xl block text-8xl uppercase">Be inspired</h1>
                            <button class="mt-4 opacity-0 md:hidden  button-swiper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-24 mt-1 ml-6" fill="#fff"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </button>
                            <button class="mt-4 opacity-1 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-28 mt-8 ml-6" fill="#fff"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </button>
                        </div>
                    </div>    
                </div>
            </NuxtLink>
            <div class="bg-bg2 lg:px-10 pb-10 lg:pt-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:flex mt-4 hidden justify-center h-full">
                        <img src="/camping.webp" alt="Summer at Camp Alta" class="object-cover">
                    </div>

                    <div class="lg:ml-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Summer</p>
                        <div class="flex justify-center pb-8">
                            <p class="line w-36"></p>
                        </div>
                        <p class="text-xl mt-4 text-left px-2">Started in the early 2000s, Camp Alta is one of the most popular and recognized tourist destinations in the area, offering unforgettable experiences and soothing relaxation in a truly beautiful setting. Our mission has always been to make the majestic nature and beauty of the Swedish Lapland accessible to every adventurer. Our goal is to create a relaxed atmosphere where you can feel taken care of and, above all, have a fantastic time exploring. We promise to offer you a warm welcome even amidst the harshest frosts!</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/theCamp/Summer" class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="mt-4 justify-center md:flex lg:hidden hidden w-full h-full">
                        <img src="/camping.webp" alt="Summer at Camp Alta" class="object-cover">
                    </div>
                    <div class="mt-4 justify-center flex md:hidden">
                        <img src="/camping.webp" alt="Summer at Camp Alta" class="">
                    </div>
                </div> 
            </div>  
            <div class="bg-bg1 lg:px-10 pb-10 lg:pt-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center min-h-[70vh]">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Kiruna</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>                        
                        </div>
                        <p class="text-xl mt-4">Lapland is for adventurers and Sweden's northernmost town, Kiruna, is an ultimate destination for a real Arctic adventure. Located about 200 km above the Arctic circle, Kiruna is a place where you can experience all the exciting things about the Arctic – the extreme cold, the polar night, the Midnight sun, the vast wilderness, the Northern lights. No matter the season, with the tourist infrastructure Kiruna has to offer, you can plan a holiday packed with extraordinary experiences that will allow you to explore Lapland in the best way possible.</p>
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/theCamp/Kiruna"  class="btn bg-primary flex">
                                Discover more
                                <img src="/arrow-btn.svg" alt="" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>                     
                    <div class=" mt-4 justify-center md:flex hidden w-full h-full">
                            <img src="/camp/general/general_12.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4  justify-center flex md:hidden">
                        <img src="/camp/general/general_12.webp" alt="" class="">
                    </div>  
                </div> 
            </div> 
           

            <div class="bg-bg2 px-2 lg:px-10 pb-10 lg:pb-20">               
                <div class="lg:mr-10">
                    <p class="lg:title-pages sm-title-pages text-center">What can you do at Camp Alta?</p>
                    <p class="text-xl mt-4">Camp Alta is in a remarkable location 145km north of the Arctic Circle and is relatively close is Kiruna City (15km) where you have easy access to all local amenities and shops.</p>
                    <p class="text-xl mt-4">In the winter Camp Alta is one of Lapland's best places to view the Northern Lights (made famous worldwide by our reviews on Tripadvisor) and in summer you have the fantastic opportunity to stare with delightful fascination at Lapland's eloquent Midnight Sun.</p>
                    <p class="text-xl mt-4">The world famous Ice Hotel is only 10 mins drive away in the quaint historical village of Jukkasjarvi. Here you can also visit the Nutti Sami Centre, taste some traditional Sami cuisine, see the history of the Sami and visit the oldest standing Sami church in Lapland which is over 400 years old.</p>
                    <p class="text-xl mt-4">In the winter season at Camp Alta you can also enjoy our amazing Dog Sledding and Snowmobile tours, cross-country skiing and snowshoeing <a href="">(see our tour page for more details)</a>.</p>
                    <p class="text-xl mt-4">Of course on Camp Alta's doorstep, there are also some fantastic fishing opportunities at our lake Altajärvi and with the mighty Torne River, also known as The Tornio. Not forgetting another fishing paradise, the Kalix River (Kalixälven) both of which are home to an abundant amount of Salmon, Trout, Grayling, Whitefish & Perch depending on the season.</p>
                    <p class="text-xl mt-4"> In the summer, visitors can witness the awe-inspiring midnight sun, and from September to April, the remarkable northern lights dancing right outside the cabins.</p>
                </div> 
            </div> 
            <Footer/>  
        </section>
        <div
      v-if="isModalOpen"
      class="scroll-hidden fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60"
      @click="closeModal"
    >
    <div  class="relative">
        <img :src="modalImage" class="w-full h-full max-h-screen" />
        <p class="absolute top-0 left-1/3 md:left-1/2 -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded text-black lg:text-3xl text-xl shadow-md text-center whitespace-nowrap">
      Tap again to close
    </p>
    </div>
   
    </div>
    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'About Camp Alta - Wilderness Camp in Kiruna, Swedish Lapland',
  description: 'Learn about Camp Alta Kiruna, an Arctic wilderness camp on Lake Altajärvi. Discover our facilities, location, and how to get here from Kiruna city center.',
  path: '/TheCamp',
  image: '/camp/camp_1.webp',
})

import { onMounted, onUnmounted } from 'vue';

const isModalOpen = ref(false)
const modalImage = ref('')

const openModal = (imgUrl:string) => {
  modalImage.value = imgUrl
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

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

/*let train =ref(false)
let car =ref(true)
let plane =ref(false)
let transport =ref('')
function showTransport(transport: string){
    //console.log(transport)
    //return transport
    train.value=false
    car.value=false
    plane.value=false
    console.log(transport);
    if (transport=='train'){
        train.value=true

    }else if (transport =='plane'){
        plane.value=true
    }else{
        car.value=true
    }
}

function acc() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header") as HTMLElement;

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
    });
}
*/



function sendForm(){
    //console.log('miau')
}

onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});

</script>
<style>
    .activated{
        background-color: #007984;
        fill:white;
    }
    .not{
        background-color: #fff;
        fill:#007984;
    }
</style>