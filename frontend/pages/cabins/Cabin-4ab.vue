<template>
    <div id="screen">         
        <Navbar/>    
         
        
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">Cabin 4A-B</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 lg:w-1/12"></p>                        
                </div>        
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2">
                        <p class="text-xl mt-4">Located just 90 meters from the lake Alttajärvi, this newly built cabin is a popular choice among families and friend groups, as it offers all amenities needed for a comfortable and enjoyable stay. Relax and take in the views from the cabin's balcony, or take a walk to the nearby lake.</p>
                        <p class="text-xl mt-4">This cabin features a bedroom with two bunk beds and can accommodate up to 4 people. It has its own bathroom with a toilet and shower, a fully equipped kitchen with pots, pans, plates, and all necessary kitchen utensils, including a microwave, fridge, freezer, stovetop, toaster, and a french press. The dining table seats four people.</p>
                        <p class="text-xl mt-4">We have two identical cabins in this category located next to each other: 4A and 4B.</p>      
                        <p class="text-xl mt-4">You can enhance your stay with a truly unique experience: unwind in our wood-fired saunas, including one that floats on the lake, or gather around in the cozy fire hut, all available to our guests free of charge. You can purchase a bag of wood at the reception for 110 SEK.</p>  
                        <p class="text-xl mt-4">Located in a remote area, our Camp provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Camp Alta.</p>
                    </div>                     
                    <div class="mt-4 flex  justify-center">
                        <img src="/cabins/4ab/pc/4ab_pc_15.webp" alt="" class="w-full object-cover">
                    </div>
                </div> 
        </div>     
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>          
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Accommodates:</span> 4 guests</li>
                    <li class="list-disc text-xl"><span class="font-bold">Area:</span> 20m<span class="superscript">2</span></li>
                    <li class="list-disc text-xl"><span class="font-bold">Bedroom:</span> The cabin has one bedroom which has 2 bunk beds and sleeps 4 people.</li>
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
                <NuxtLink to="/booking/Booking-cabins" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book now!</NuxtLink>
            </div>
            <div class="lg:mr-10 text-left">
                <p class="text-xl mt-4">Bed linen and towels are not included in the price of the cabin, and their use is required to maintain hygienic conditions. You have the option to bring your own, or you can rent them at the reception for the duration of your stay. The rental fee per person is 80 SEK for bed linen and 30 SEK for a towel.</p>
                <p class="text-xl mt-4">To maintain affordable prices and to make our camp accessible to everyone, we are a self-cleaning camp. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 540 SEK. Cleaning products are provided in the cabin.</p>
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
                            <img src="/cabins/4ab/pc/4ab_pc_1.webp" alt="Bedroom with two bunk beds" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom with two bunk beds</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_2.webp" alt="Cabin interior" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_3.webp" alt="Living room" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Living room</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_4.webp" alt="Fully equipped kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully equipped kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_5.webp" alt="Private bathroom" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Private bathroom</p>
                    </swiper-slide>   
                    <swiper-slide class="" >                            
                        <div class="grid lg:grid-cols-2 ">
                            <div class="flex justify-center">
                                <img src="/cabins/4ab/pc/4ab_pc_6.webp" alt="Dining area" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                            <div class="flex justify-center">
                                <img src="/cabins/4ab/pc/4ab_pc_7.webp" alt="Dining area" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                        </div>
                        <p class="text-center mt-3 mb-6 text-2xl">Dining area</p>
                    </swiper-slide>   

                    <swiper-slide class="" >                            
                        <div class="grid lg:grid-cols-2 ">
                            <div class="flex justify-center">
                                <img src="/cabins/4ab/pc/4ab_pc_8.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                            <div class="flex justify-center">
                                <img src="/cabins/4ab/pc/4ab_pc_9.webp" alt="" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                        </div>
                        <p class="text-center mt-3 mb-6 text-2xl">Fully equipped kitchen</p>
                    </swiper-slide>   
                    
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_10.webp" alt="Fully equipped kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully equipped kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_11.webp" alt="Hallway" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Hallway</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_12.webp" alt="Wall decoration" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Wall decoration</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_13.webp" alt="View from the cabin" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4ab/pc/4ab_pc_14.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
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
                            <img src="/cabins/4ab/mob/4ab_mob_1.webp" alt="Bedroom with two bunk beds" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom with two bunk beds</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_2.webp" alt="Dining area" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Dining area</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_3.webp" alt="Traditional Sámi decoration" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Traditional Sámi decoration</p>
                    </swiper-slide>   

                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_4.webp" alt="Fully equipped kitchen" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully equipped kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_5.webp" alt="Fully equipped kitchen" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully equipped kitchen</p>
                    </swiper-slide>     
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_6.webp" alt="Private bathroom " class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Private bathroom </p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_7.webp" alt="Wall decoration" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Wall decoration</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_8.webp" alt="Private bathroom" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Private bathroom</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_9.webp" alt="Hallway" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Hallway</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_10.webp" alt="View from the cabin" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4ab/mob/4ab_mob_11.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
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
  title: 'Cabin 4A-B - 20m2, Sleeps 4 | Camp Alta Kiruna',
  description: 'Newly built cabin near Lake Altajarvi with private bathroom, fully equipped kitchen and two bunk beds. Sleeps 4 guests at Camp Alta Kiruna, Swedish Lapland.',
  path: '/cabins/Cabin-4ab',
  image: '/cabins/4ab/pc/4ab_pc_15.webp',
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
        name: 'Cabin 4A-B',
        description: 'Newly built cabin near Lake Altajarvi with private bathroom, fully equipped kitchen and two bunk beds. Sleeps 4 guests at Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
        floorSize: { '@type': 'QuantitativeValue', value: 20, unitCode: 'MTK' },
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