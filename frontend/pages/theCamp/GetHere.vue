<template>
    <div id="screen" class="">            
      <section class="hero bg-[url('/camp/travel_1.webp')] bg-cover ">
      </section>     
    </div>
     

    <!--to top-->
    <span id="top"></span> 
    <ToTop/>      
  <div class="">                      
        <div class="p-0 absolute top-0 h-[50vh] w-full z-10 ">
            <Navbar/>
            <div class="h-[60vh] flex flex-col justify-center items-center text-center">
                <p class="title md:text-9xl text-white">How to get here</p>                
            </div>
        </div>
  </div>
  <section class="content-cabins">     
      <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">       
          <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
              <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                 <!-- <div class="lg:flex mt-4 hidden  justify-center">
                      <img src="/tours/dogsled/dogsled_3.webp" alt="" class="">
                  </div>-->
                  <div class="lg:mr-10">
                      <p class="title-info pl-0">By flight</p>
                      <p class="line w-1/2"></p>         
                      <p class="text-xl mt-4 text-left"><span class="font-bold">Nearest Airport:</span> Kiruna Airport (12 km from Camp Alta).</p>
                      <p class="text-xl mt-4 text-left"><span class="font-bold">Airlines:</span> <a target="_blank" href="https://www.sas.se" class="text-blue-500">SAS Scandinavian Airlines</a> and <a target="_blank" href="https://www.norwegian.com/se/" class="text-blue-500">Norwegian Airlines</a> offer 90-minute flights from Stockholm Arlanda Airport.</p>
                      <p class="text-xl mt-4 text-left font-bold">Transportation to the Camp:</p>
                      <ul class="ml-10 lg:ml-16 pt-4">
                          <li class="list-disc text-xl">Taxi or airport bus: We recommend taking a taxi or the <a target="_blank" href="https://www.swedavia.com/kiruna/bus/" class="text-blue-500">the airport bus</a> from the airport to the city center. </li>
                          <li class="list-disc text-xl">Shuttle Service: Book our shuttle service, and we will pick you up from town after your grocery shopping.</li>
                      </ul>
                        <div class="grid justify-center mt-2">
                            <NuxtLink to="/booking/Booking-services" class="btn bg-primary mt-6 text-xl py-2 px-20">Book here</NuxtLink>
                        </div>
                  </div>    
                  <div class="bg-[#070908] mt-4 justify-center md:flex hidden w-full h-[70vh]">
                          <img src="/camp/travel/travel_3.webp" alt="" class="object-cover">
                  </div>   
                  <div class=" mt-4 justify-center flex md:hidden">
                      <img src="/camp/travel/travel_3.webp" alt="" class="">
                  </div>  
              </div> 
          </div>  
          <div class="bg-bg2 px-2 lg:px-10 pb-5 lg:pb-20">   
              <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4">
                  <div class="lg:flex mt-4 hidden justify-center w-full h-full">
                          <img src="/camp/travel/travel_2.webp" alt="" class="object-cover">
                  </div>   
               
                  <div class="lg:ml-10">
                      <p class="title-info pl-0">By train</p>
                      <p class="line w-2/3"></p>         
                      <p class="text-xl mt-4 text-left"><span class="font-bold">Nearest train station:</span> Kiruna Train Station (20 km from Camp Alta).</p>
                      <p class="text-xl mt-4 text-left"><span class="font-bold">Routes:</span> You can get to Kiruna by train from Stockholm, Boden, Luleå or Narvik.</p>
                      <ul class="ml-10 lg:ml-16 pt-4">
                          <li class="list-disc text-xl">Stockholm: daily <a target="_blank" href="https://www.vy.se/en/buy-tickets/bus-and-train-tickets" class="text-blue-500">Vy’s night trains</a> from Stockholm Central Station, Arlanda Airport and Narvik.</li>
                          <li class="list-disc text-xl">Boden and Luleå: Daily trains available.</li>
                      </ul>
                      <p class="text-xl mt-4 text-left font-bold">Transportation:</p>
                      <ul class="ml-10 lg:ml-16 pt-4">
                          <li class="list-disc text-xl">Free Shuttle: use a free shuttle service from the train station to the city center available for every train arrival and departure. d</li>
                          <li class="list-disc text-xl">Shuttle Service: Book our shuttle service, and we will pick you up from town after your grocery shopping.</li>
                      </ul>
                        <div class="grid justify-center mt-2">
                            <NuxtLink to="/booking/Booking-services" class="btn bg-primary mt-6 text-xl py-2 px-20">Book here</NuxtLink>
                        </div>
                  </div>                     
                  <div class="md:flex lg:hidden mt-4 hidden justify-center w-full h-full">
                          <img src="/camp/travel/travel_2.webp" alt="" class="object-cover">
                  </div>   
                  <div class=" mt-4 flex justify-center md:hidden w-full h-[70vh]">
                          <img src="/camp/travel/travel_2.webp" alt="" class="object-cover">
                  </div>   
              </div> 
               
          </div>       
          <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">       
          <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
              <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                 <!-- <div class="lg:flex mt-4 hidden  justify-center">
                      <img src="/tours/dogsled/dogsled_3.webp" alt="" class="">
                  </div>-->
                  <div class="lg:mr-10">
                      <p class="title-info pl-0">By car</p>
                      <p class="line w-2/3"></p>         
                      <p class="text-xl mt-4 text-left font-bold">From Kiruna:</p>
                      <ul class="ml-10 lg:ml-16 pt-4">
                          <li class="list-disc text-xl">Camp Alta is located 15 km from Kiruna city center. Take the E10 road south towards Luleå and drive for approximately 15 km, following signs to Camp Alta. Look for the entrance sign on your right and follow the designated road to the campsite.</li>
                      </ul>
                      <p class="text-xl mt-4 text-left font-bold">Towards Kiruna:</p>
                      <ul class="ml-10 lg:ml-16 pt-4">
                          <li class="list-disc text-xl">If coming from the south, Camp Alta is 15 km before Kiruna city center. Follow the E10 road north, looking for signs for Camp Alta. Look for the entrance sign on your left and follow the designated road to the campsite.</li>
                      </ul>
                  </div>    
                  <div class=" mt-4 justify-center md:flex hidden w-full h-full">
                          <img src="/camp/travel/travel_1b.webp" alt="" class="object-cover">
                  </div>   
                  <div class=" mt-4  justify-center flex md:hidden  w-full h-[70vh]">
                      <img src="/camp/travel/travel_1b.webp" alt="" class="object-cover">
                  </div>    
              </div> 
          </div>  


      <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-10 -mt-1">  
         <div class="">
                <p class="title-info pl-0">Address</p>
                <p class="line w-1/2"></p>  
                <p class="text-xl text-left flex mx-2 mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  height="32" class="mb-2 ml-1 mr-4"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    Jullebovägen 2, 981 92 Kiruna, Sweden
                </p>
               <div class="flex justify-center mt-8">
                    <iframe class="mb-4 w-200  lg:w-[600px] h-[40vh]" title="Camp Alta location on Google Maps" style="border:0;"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771125.8104534644!2d19.95197992395521!3d67.82188320000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0c7dcfface7c5%3A0x8ac9956e5888d6e3!2sCamp%20Alta!5e0!3m2!1ses!2sad!4v1681807724425!5m2!1ses!2sad"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        
    <div class="bg-bg2 px-2 lg:px-10 pb-5 lg:pb-20">   
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4">
            <div class="lg:mr-10">
                <p class="title-info pl-0">Shuttle service</p>
                <p class="line w-2/3"></p>         
                <p class="text-xl mt-8 text-left">Our shuttle service provides you with the opportunity to get picked up and get dropped off from Kiruna.</p>   
                <p class="text-xl mt-4 text-left font-bold">Pick-up & Drop-off Points::</p>
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl">Kiruna Airport</li>
                    <li class="list-disc text-xl">Kiruna train/bus station</li>
                    <li class="list-disc text-xl">Scandic Kiruna</li>
                    <li class="list-disc text-xl">Stora Coop/ ICA MAXI</li>
                    <li class="list-disc text-xl">Kiruna Tourist office</li>
                    <li class="list-disc text-xl">Spis Hotel & Hostel</li>
                </ul>
            <p class="text-xl mt-4 text-left">You can find more information about the shuttle service and book them here.</p>
            <div class="grid justify-center">
                <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
            </div> 
            <p class="text-xl mt-4 text-left">Contact us at info@campalta.se for group bookings that need a bus transfer.</p>
            <p class="text-xl mt-4 text-left">If you are looking into traveling in a group and don't want to bother with organizing the trip on your own, contact our partners <a target="_blank" href="https://www.90degreesnorth.se" class="text-blue-500">90degreesnorth AB</a> who organize tours from Stockholm to Camp Alta with the transportation, accommodation and all activities included.</p>
            </div>
        <div class="md:flex hidden mt-4 justify-center w-full h-full">
            <img src="/camp/travel/travel_4.webp" alt="" class="object-cover">
        </div>   
        <div class=" mt-4 flex justify-center md:hidden  w-full h-[70vh]">
            <img src="/camp/travel/travel_4.webp" alt="" class="object-cover">
        </div>   
           
        </div>   
    </div>

      <Footer/>  
  </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'How to Get to Camp Alta - Directions & Transport | Camp Alta Kiruna',
  description: 'Find out how to reach Camp Alta Kiruna by flight, train, or car. Located 15 km from Kiruna on the E10 road, with shuttle service available from the airport and train station.',
  path: '/theCamp/GetHere',
  image: '/camp/travel_1.webp',
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