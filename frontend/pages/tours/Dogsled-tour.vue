<template>
    <div id="screen" class="">            
        <section class="hero lg:bg-[url('/tours/dogsled/dogsled_1b.webp')] bg-[url('/tours/dogsled/dogsled_7.webp')] bg-cover"><!---->
        </section>    

 
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>   
        <div class="">                      
            <div class="p-0 absolute top-0 h-[50vh] w-full z-10 ">
                <Navbar/>
                <div class="h-[60vh] flex flex-col justify-center items-center text-center">
                     <div class="absolute inset-0 bg-black/40" id="filter"></div>
                    <p class="title md:text-9xl text-white relative z-10">Dogsled tours</p>
                </div>
            </div>
        </div>
        <section class="content-cabins">     
            <div class="bg-bg1 lg:px-10 pb-10">    
                <div class="px-2">          
                    <p class=" text-xl mt-8 ">Explore Lapland's wild side by dog sled pulled by a team of Alaskan & Siberian Huskies. Join us for 3 hours of unforgettable dog sledding in Jukkasjärvi. This isn't just a ride on a dog sled. The dog sledding team loves talking about their 4-legged family members. Every tour includes commentary from your local guide / musher.</p>                
                    <p class="text-xl ">All the beautiful Alaskan Huskies are raised as puppies and cared for by the elite team of mushers / guides. Our Huskies are an intricate part of a family and are an important part of living a subsistence lifestyle.</p>
                    <p class="text-xl">We have different adventure options to choose from for this Dog Sled experience. We want you to have the experience you want which allows us to provide the best dog sledding experience possible.</p>
                    <p class="text-xl">Book your tour today and create unforgettable memories with our friendly and energetic huskies.</p>
                </div>
                <div class=" mt-4 flex justify-center md:hidden">
                        <img src="/tours/dogsled/dogsled_8.webp" alt="" class="">
                </div>  
            </div>     
            <div class="bg-bg2 lg:px-10 pb-10">       
                <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
                    <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                    <!-- <div class="lg:flex mt-4 hidden  justify-center">
                            <img src="/tours/dogsled/dogsled_3.webp" alt="" class="">
                        </div>-->
                        <div class="lg:ml-10 md:pt-10 px-2">
                            <p class="title-info pl-0">Dog Sled Tour with Coffee</p>
                            <p class="line w-1/2"></p>         
                            <p class="text-xl mt-4 text-left">Guests ride on a large sled driven by our guide. A tour of 2 – 3 hours, with a break in a beautiful place for coffee/tea and sandwiches over an open fire. A minimum of 2 people are required to start a tour, single occupants can always accompany a booked group.</p>
                            <p class="text-xl mt-4 text-left font-bold">Prices:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">1525 SEK per person</li>
                                <li class="list-disc text-xl">768 SEK per child under 12 years</li>
                            </ul>
                            <p class="text-xl mt-4 text-left"><span class="font-bold">Timing:</span> 10:00</p>
                            <p class="text-xl mt-4 text-left"><span class="font-bold">Minimum age:</span> 6 years old</p>

                            <p class="text-xl mt-4 text-left font-bold">Included in the tour:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Transfers from Kiruna and Camp Alta</li>
                                <li class="list-disc text-xl">Warm winter clothes</li>
                                <li class="list-disc text-xl">Coffee/tea with swedish Fika</li>
                            </ul>
                            <div class="grid justify-center pt-10">
                                <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                            </div>  
                        </div>    
                        <div class=" pt-10 justify-center md:flex hidden w-full h-full">
                                <img src="/tours/dogsled/dogsled_5.webp" alt="" class="object-cover">
                        </div>   
                        <div class=" pt-10  justify-center flex md:hidden">
                            <img src="/tours/dogsled/dogsled_1.webp" alt="" class="">
                        </div>  
                    </div> 
                </div>  
                <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">   
                    <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4">
                        <div class="lg:flex mt-4 hidden justify-center w-full h-full">
                                <img src="/tours/dogsled/dogsled_2.webp" alt="" class="object-cover">
                        </div>   
                    
                        <div class="lg:ml-10 md:pt-10">
                            <p class="title-info pl-0">Dog Sled Lunch tour</p>
                            <p class="line w-2/3"></p>         
                            <p class="text-xl mt-4 text-left">Guests can choose to share a 5-6 dog sled with another participant or drive their own sled with 3-4 dogs. When sharing a sled, one sits and the other drives the sled - you switch after the lunch stop. The tour takes about 4-5 hours (including transfer) with hot lunch. A minimum of 2 people are required to start a tour, single bookers can always join a booked group.</p>
                            <p class="text-xl mt-4 text-left font-bold">Prices:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">2095 SEK per person</li>
                                <li class="list-disc text-xl">1048 SEK per child under 12 years</li>
                            </ul>
                            <p class="text-xl mt-4 text-left"><span class="font-bold">Timing:</span> 09:00</p>
                            <p class="text-xl mt-4 text-left"><span class="font-bold">Minimum age:</span> 9 years old</p>

                            <p class="text-xl mt-4 text-left font-bold">Included in the tour:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Transfers from Kiruna and Camp Alta</li>
                                <li class="list-disc text-xl">Warm winter clothes </li>
                                <li class="list-disc text-xl">Coffee/tea with warm lunch</li>
                            </ul>
                            <div class="grid justify-center pt-10">
                                    <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                            </div> 
                        </div>                     
                        <div class="md:flex lg:hidden pt-10 hidden justify-center w-full h-full">
                                <img src="/tours/dogsled/dogsled_2.webp" alt="" class="object-cover">
                        </div>   
                        <div class=" pt-10 flex justify-center md:hidden">
                                <img src="/tours/dogsled/dogsled_7.webp" alt="" class="">
                        </div>   
                    </div> 
                    
                </div>       
                <div class="bg-bg2 px-2 lg:px-10 pb-5 lg:pb-20">       
                <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
                    <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                    <!-- <div class="lg:flex mt-4 hidden  justify-center">
                            <img src="/tours/dogsled/dogsled_3.webp" alt="" class="">
                        </div>-->
                        <div class="lg:ml-10 md:pt-10 px-2">
                            <p class="title-info pl-0">Northern lights dogsled tour/ Evening tour</p>
                            <p class="line w-2/3"></p>         
                            <p class="text-xl mt-4 text-left">Guests ride on a large sled driven by our guide. A tour of 2 – 3 hours, with a break in a beautiful place for coffee/tea and sandwiches over an open fire. With clear skies, you have the possibility to see the northern lights*! A minimum of 2 people are required to start a tour, single occupants can always accompany a booked group. </p>
                            <p class="text-xl mt-4 text-left">*from the 11th of March, chances to see auroras are low due to increased sun exposure.</p>
                            <p class="text-xl mt-4 text-left font-bold">Prices:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">1655 SEK per person (from March 11th to April 14th, price is 1630 SEK)</li>
                                <li class="list-disc text-xl">828 SEK per child under 12 years (from March 11th to April 14th, price is 815 SEK) </li>
                            </ul>
                            <p class="text-xl mt-4 text-left"><span class="font-bold">Timing:</span> 17:00</p>
                            <p class="text-xl mt-4 text-left"><span class="font-bold">Minimum age:</span> 6 years old</p>

                            <p class="text-xl mt-4 text-left font-bold">Included in the tour:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Transfers from Kiruna and Camp Alta</li>
                                <li class="list-disc text-xl">Warm winter clothes</li>
                                <li class="list-disc text-xl">Coffee/tea with swedish Fika</li>
                            </ul>
                            <div class="grid justify-center pt-10">
                                <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                            </div>  
                        </div>    
                        <div class=" pt-10 justify-center md:flex hidden w-full h-full">
                                <img src="/tours/dogsled/main_dogsled.webp" alt="" class="object-cover">
                        </div>   
                        <div class=" pt-10 justify-center flex md:hidden">
                            <img src="/tours/dogsled/dogsled_13.webp" alt="" class="">
                        </div>    
                    </div> 
                </div>  


            <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20 md:pt-10">  
            <div class="lg:pb-10">
                    <p class="title-info pl-0">What to bring</p>
                    <p class="line w-1/2"></p>  
                    <ul class="ml-10 lg:ml-16 pt-4">
                        <li class="list-disc text-xl">Contact lenses instead of glasses are recommended.</li>
                        <li class="list-disc text-xl">Warm base layer clothing and socks</li>
                    </ul> 
                </div>
                <p class="title-info pl-0">Transport options</p>
                <p class="line w-2/3"></p>         
                <p class="text-xl mt-8 text-left">Complimentary shuttle service for all the dogsled tour departures. Meeting point is the reception area of your accommodation. Be ready 10 minutes before the start of the tour.</p>   
                <div class="grid lg:grid-cols-2 md:grid-cols-2 justify-center pt-4">
                    <div>
                        <p class="text-xl mt-4 text-left font-bold">Dogsled coffee tour:</p>
                        <ul class="ml-10 lg:ml-16 pt-4">
                            <li class="list-disc text-xl">09:50am from Ripan Camping</li>
                            <li class="list-disc text-xl">10:00am from Camp Alta, the guide will collect you from the reception of the Camp Alta.</li>
                            <li class="list-disc text-xl">10:00am from Tourist office</li>
                            <li class="list-disc text-xl">10:00am from Ice Hotel</li>
                        </ul>
                    </div> 
                    <div>
                        <p class="text-xl mt-4 text-left font-bold">Dogsled lunch tour:</p>
                        <ul class="ml-10 lg:ml-16 pt-4">
                            <li class="list-disc text-xl">08:50am from Ripan Camping</li>
                            <li class="list-disc text-xl">09:00am from Camp Alta Kiruna, the guide will collect you from the reception of the Camp Alta</li>
                            <li class="list-disc text-xl">09:00am from Tourist office</li>
                            <li class="list-disc text-xl">09:00am from Ice Hotel</li>
                        </ul>  
                    </div>
                    <div>
                        <p class="text-xl mt-4 text-left font-bold">Dogsled Northern lights tour:</p>
                        <ul class="ml-10 lg:ml-16 pt-4">
                            <li class="list-disc text-xl">16:50 from Ripan Camping</li>
                            <li class="list-disc text-xl">17:00 from Camp Alta Kiruna, the guide will collect you from the reception of the Camp Alta</li>
                            <li class="list-disc text-xl">17:00 from Tourist office</li>
                            <li class="list-disc text-xl">17:00 from Ice Hotel</li>
                            
                        </ul>  
                    </div>
                </div>
                <div class="grid justify-center pt-10">
                    <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                </div>  
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
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_3.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_4.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_9.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_10.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_11.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_12.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                    
                </swiper>
            </div>


            <div class="bg-bg2 px-2 lg:px-10 pb-5 lg:pb-20">              
                <p class="title-info pl-0 md:pt-10">Terms and conditions</p>
                <p class="line w-2/3"></p>         
                <p class="text-xl mt-8 text-left">IMPORTANT: Your safety and the safety of others is an essential aspect for the organizing company and for us.  For this reason, they have the following guidelines and restrictions.</p>
                <p class="text-xl mt-4 text-left font-bold">Booking:</p>
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl">We generally do not recommend our tours for children as they are designed for adults. Minimum age requirements: Coffee tour and Northern Lights/Evening tour: 6 years old. Lunch tour: 9 years old. Children under 18 years old can join the trip only under parents protection. Parents are fully responsible for their children.</li>
                    <li class="list-disc text-xl">The aurora borealis is a natural occurrence so we can not make any form of guarantee that you will see the lights during our northern lights dog sled tour. </li>
                    <li class="list-disc text-xl">It is a condition of participation in any of our tours that you agree to accept the authority and decisions of our employees and Guides whilst on holiday with us: they are there to ensure the safety and well-being of the whole group.</li>
                </ul>


                <p class="text-xl mt-4 text-left "><span class="font-bold">Cancellation policy:</span> Cancellations made more than 30 days before arrival will be charged 30% of the total amount. Cancellations between 29 and 15 days before arrival will be charged 75% of the total price. Cancellation less than 14 days before arrival will be charged at 100 % of the total price.</p>
                <p class="text-xl mt-4 text-left font-bold">Health:</p>
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl">You as the Client are taking full responsibility for your health during the trip. you have to be in good health, which means that he is ready to spend some time in special weather conditions (particularly frost, snow, wind). </li>
                    <li class="list-disc text-xl">ou as the Client have to inform us about any pre-existing medical condition to better help the Client in case of emergency. If we decide before the trip that Client is not ready for the trip, we can cancel this booking with a 100% refund.</li>
                    <li class="list-disc text-xl">Under no circumstances will we tolerate ill treatment of our dogs. If we feel any guest is ill treating our dogs we reserve the right to immediately end the tour. No further dog activities will be permitted for that guest during the rest of their stay. No refund will be given in these circumstances.</li>
                </ul>
            

                <p class="text-xl mt-4 text-left"><span class=" font-bold">Liability:</span>  We are not responsible in case of force majeure (particular weather conditions like temperature, snow, wind, storm, delays during travelling, blocked roads,).</p>
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl">We hold  no responsibility for any accidents or damages (injures, deaths etc) if that damage was caused by no fault  of the organizer.</li>
                    <li class="list-disc text-xl">Client is liable for costs incurred due to damage by us. However, we cannot accept liability for failure when the improper performance is due to the actions of our guests, someone else not connected with the provision of our services, or unusual/unforeseeable circumstances beyond our control.</li>
                </ul>
                <p class="text-xl mt-4 text-left"><span class=" font-bold">Complaints:</span> We continually strive to give guests the best possible experience during your time with us but in the unlikely event you have a complaint about any part of your tour, please report it to one of our guides at the soonest practicable opportunity so we have an opportunity to rectify the problem. Failure to make us aware of any problems may reduce the amount of compensation to which you would otherwise be entitled.</p>
                <div class="grid justify-center mt-10">
                    <NuxtLink to="/booking/Booking-cabins" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                </div>
            </div>   
                <!--desktop-->
                <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20 hidden lg:block pt-4">     
                <swiper                             
                        class="z-0"                     
                        :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
                        :rewind="true"
                        :spaceBetween="30"   
                        :slidesPerView="3"
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
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_1.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_3.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_4.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_7.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>  
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_8.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_9.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_10.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_11.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center">  
                                <img src="/tours/dogsled/dogsled_12.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl lg:hidden">Tour</p>
                        </swiper-slide>   
                    
                </swiper>
            </div>

            <Footer/>  
        </section>
    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Dogsled Tour in Kiruna - Husky Sledding in Lapland | Camp Alta',
  description: 'Experience dog sledding with Alaskan & Siberian Huskies in Jukkasjärvi. Choose from 2-3 hour coffee tour or 4-5 hour lunch tour. From 1525 SEK per person.',
  path: '/tours/Dogsled-tour',
  image: '/tours/dogsled/dogsled_1b.webp',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Dogsled Tours with Alaskan & Siberian Huskies',
      description: 'Dog sledding adventure in Jukkasjärvi with professional mushers. Choose coffee tour (2-3h) or lunch tour (4-5h).',
      touristType: 'Adventure Tourism',
      provider: { '@type': 'LodgingBusiness', name: 'Camp Alta Kiruna', url: 'https://campalta.net' },
      offers: [
        { '@type': 'Offer', name: 'Dog Sled Tour with Coffee (2-3h)', price: '1525', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Dog Sled Lunch Tour (4-5h)', price: '2095', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Northern Lights Dog Sled Tour (2-3h)', price: '1655', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
      ],
      location: { '@type': 'Place', name: 'Jukkasjärvi, Swedish Lapland', address: { '@type': 'PostalAddress', addressLocality: 'Kiruna', addressCountry: 'SE' } },
    }),
  }],
})

import { onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Keyboard, Lazy} from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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