<template>
    <div id="screen">         
        <Navbar/>    
        
       
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">Cabin 6A-C</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 lg:w-1/12"></p>                        
                </div>        
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2">
                        <p class="text-xl mt-4">This cabin is perfect for guests looking for a comfortable accommodation during their stay in Lapland. This cabin also features a balcony, equipped with a table and chairs (during the summer season), providing a charming spot to enjoy a cup of coffee while admiring the peaceful lake views.</p>
                        <p class="text-xl mt-4">This cabin will be comfortable for 4 people, but it can accommodate up to 6 guests, if you turn the sofa into a bed. Inside you will find 2 bedrooms, one with 2 single beds and another with a bunk bed. The sofa bed located in the living room can sleep two additional guests. The cabin has its own bathroom with a toilet and shower and a fully-equipped kitchen with a microwave, fridge, freezer, stovetop, toaster, and a french press, as well as pots, pans and all necessary kitchen utensils. The dining table seats six people.</p>
                        <p class="text-xl mt-4">We have two identical cabins in this category located next to each other: 6A and 6C.</p>
                        <p class="text-xl mt-4">You can enhance your stay with a truly unique experience: unwind in our wood-fired saunas, including one that floats on the lake, or gather around in the cozy fire hut, all available to our guests free of charge. You can purchase a bag of wood at the reception for 110 SEK.</p>      
                        <p class="text-xl mt-4">Located in a remote area, our Camp provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Camp Alta.</p>  
                    </div>                     
                    <div class="mt-4 flex  justify-center">
                        <img src="/cabins/main/6ac.webp" alt="" class="w-full object-cover">
                    </div>
                </div> 
        </div>     
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>          
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Accommodates:</span> 4 guests (max. 6 guests)</li>
                    <li class="list-disc text-xl"><span class="font-bold">Area:</span> 40m<span class="superscript">2</span></li>
                    <li class="list-disc text-xl"><span class="font-bold">Bedroom:</span> The cabin has 2 bedrooms, one of which has 2 single beds and another which has a bunk bed. The sofa can be turned into a sofa bed, which can sleep two other guests.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Cabin amenities:</span> Refrigerator, water kettle, coffee maker, cable TV, electric heater, microwave, cutlery, pots and pans.</li>
                    <li class="list-disc text-xl"><span class="font-bold">WC & shower:</span> Inside the cabin.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Kitchen:</span> Inside the cabin.</li>
                </ul>
                <ul class="ml-10 lg:ml-16 lg:pt-4 md:pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Heating:</span> The cabin is heated by an electric heater, this ensures a comfortable stay all year round</li>
                    <li class="list-disc text-xl"><span class="font-bold">WIFI:</span> Available in the cabin and common service building</li>
                    <li class="list-disc text-xl"><span class="font-bold">Parking:</span> Available free of charge</li>
                    <li class="list-disc text-xl"><span class="font-bold">Pet policy:</span> Unfortunately, we cannot allow pets in the cabin due to allergy concerns</li>
                    <li class="list-disc text-xl"><span class="font-bold">Check in:</span> 15:00 pm</li>
                    <li class="list-disc text-xl"><span class="font-bold">Latest Check out:</span> 11:00 am</li>
                </ul>               
            </div>
            <div class="grid justify-center mt-10">
                <NuxtLink to="/booking/Booking-cabins" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
            </div>
            <div class="lg:mr-10 text-left">
                <p class="text-xl mt-4">Bed linen and towels are not included in the price of the cabin, and their use is required to maintain hygienic conditions. You have the option to bring your own, or you can rent them at the reception for the duration of your stay. The rental fee per person is 80 SEK for bed linen and 30 SEK for a towel.</p>
                <p class="text-xl mt-4">To maintain affordable prices and to make our camp accessible to everyone, we are a self-cleaning camp. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 790 SEK. Cleaning products are provided in the cabin.</p>
            </div>
        </div>     
         <!--desktop-->
         <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 hidden lg:block">     
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
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_12.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_2.webp" alt="Living room with a sofa bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Living room with a sofa bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_3.webp" alt="Two bedrooms" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Two bedrooms</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_4.webp" alt="Bedroom 1 with 2 single beds" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 1 with 2 single beds</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_5.webp" alt="Bedroom 2 with a bunk bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 2 with a bunk bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_6.webp" alt="Dining area" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Dining area</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_7.webp" alt="Kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_8.webp" alt="View from the cabin" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_9.webp" alt="Cabin interior" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide> 
                    <swiper-slide class="" >                            
                        <div class="grid lg:grid-cols-2 ">
                            <div class="flex justify-center">
                                <img src="/cabins/6ac/pc/6ac_pc_10.webp" alt="Bathroom with shower" class="max-h-screen " loading="lazy">  <!--w-auto -->
                            </div>
                            <div class="flex justify-center">
                                <img src="/cabins/6ac/pc/6ac_pc_11.webp" alt="Bathroom with shower" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                        </div>
                        <p class="text-center mt-3 mb-6 text-2xl">Bathroom with shower</p>
                    </swiper-slide>     
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/6ac/pc/6ac_pc_1.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>    
            </swiper>
        </div>

        <!--phone carousel-->
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 lg:hidden block">     
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
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_1.webp" alt="Living room with a sofa bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Living room with a sofa bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_2.webp" alt="Two bedrooms" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Two bedrooms</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_3.webp" alt="Cabin interior" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide>   

                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_4.webp" alt="Bedroom 1 with 2 single beds" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 1 with 2 single beds</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_5.webp" alt="Bedroom 2 with a bunk bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 2 with a bunk bed</p>
                    </swiper-slide>     
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_6.webp" alt="Bathroom with shower" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bathroom with shower</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_7.webp" alt="Bathroom with shower" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bathroom with shower</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_8.webp" alt="Dining area" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Dining area</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_9.webp" alt="View from the cabin" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/6ac/mob/6ac_mob_10.webp" alt="Cabin from the outside" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>   
                   
            </swiper>
        </div>
        <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20">
            <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                <div class="px-2">
                    <p class="title-info">Getting here</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>      
                    <p class="text-xl pt-4 ml-2 ">Our Shuttle service is available from 15th November to 15th April. You can easily book our transportation through our booking system to ensure a hassle-free experience.</p>
                    <div class="grid justify-center my-5">
                        <NuxtLink to="/booking/Booking-services" class="btn bg-primary mt-6 text-xl py-2 px-20">Book shuttle</NuxtLink>
                    </div>
                    <p class="text-xl mt-8 ml-2" > During the summer months, you will need to arrange your own transportation to reach us.</p>
                </div>
                <div class="px-2">
                    <p class="title-info">Need help with the booking? </p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>      
                    <p class="text-xl ml-2 pt-4">If you want help with your reservation, please contact us via email at info@campalta.se</p>    
                </div>
            </div>
        </div>
        <Footer/>  
    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Cabin 6A-C - 40m2, Sleeps 6 | Camp Alta Kiruna',
  description: 'Comfortable cabin with 2 bedrooms, private bathroom, fully equipped kitchen and lake-view balcony. Sleeps up to 6 guests at Camp Alta Kiruna, Swedish Lapland.',
  path: '/cabins/Cabin-6ac',
  image: '/cabins/main/6ac.webp',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: 'Camp Alta Kiruna',
      url: 'https://campalta.net',
      containsPlace: {
        '@type': 'Accommodation',
        name: 'Cabin 6A-C',
        description: 'Comfortable cabin with 2 bedrooms, private bathroom, fully equipped kitchen and lake-view balcony. Sleeps up to 6 guests at Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 6 },
        floorSize: { '@type': 'QuantitativeValue', value: 40, unitCode: 'MTK' },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
          { '@type': 'LocationFeatureSpecification', name: 'Heating' },
          { '@type': 'LocationFeatureSpecification', name: 'Fridge' },
          { '@type': 'LocationFeatureSpecification', name: 'Microwave' },
          { '@type': 'LocationFeatureSpecification', name: 'TV' },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen' },
          { '@type': 'LocationFeatureSpecification', name: 'Private bathroom' },
        ],
      },
    }),
  }],
})

import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Keyboard, Lazy} from 'swiper';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


onMounted(() => {
  
 
});


</script>