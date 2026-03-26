<template>
    <div id="screen">         
        <Navbar/>    
         
        
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">Cabin 4C</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 lg:w-1/12"></p>                        
                </div>        
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2 ">
                        <p class="text-xl mt-4">Enjoy a warm welcome at this cabin, boasting an exceptional view of lake Alttajärvi. Relax on your private balcony, savoring the surroundings with a hot beverage in hand. Perfect for escaping into the serenity of Swedish Lapland.</p>
                        <p class="text-xl mt-4">This open-plan cabin comfortably accommodates 4 guests. It features two bunk beds, a sofa bed and a small kitchenette with a microwave, refrigerator, freezer and a water kettle. For additional facilities, guests can access the common kitchen and bathrooms in the service building located just 20 meters away.</p>
                        <p class="text-xl mt-4">We have only one cabin in this category: 4C.</p>
                        <p class="text-xl mt-4">You can enhance your stay with a truly unique experience: unwind in our wood-fired saunas, including one that floats on the lake, or gather around in the cozy fire hut, all available to our guests free of charge. You can purchase a bag of wood at the reception for 110 SEK.</p>      
                        <p class="text-xl mt-4">Located in a remote area, our Camp provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Camp Alta.</p>  
                    </div>                     
                    <div class="mt-4 flex  justify-center">
                        <img src="/cabins/main/4c.webp" alt="Cabin 4C exterior view with private balcony overlooking Lake Alttajärvi at Camp Alta Kiruna" class="w-full object-cover">
                    </div>
                </div> 
        </div>     
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>          
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Accommodates:</span> 4 guests</li>
                    <li class="list-disc text-xl"><span class="font-bold">Area:</span> 18m<span class="superscript">2</span></li>
                    <li class="list-disc text-xl"><span class="font-bold">Bedroom:</span> The cabin has an open plan layout which has 2 bunk beds.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Cabin amenities:</span> Refrigerator, water kettle, microwave, drinking water tank, cable TV, electric heater.</li>
                    <li class="list-disc text-xl"><span class="font-bold">WC & showers:</span> situated in the common service building 20 meters from the cabin.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Kitchen:</span> in the common service building situated 20 meters from the cabin.</li>
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
                            <img src="/cabins/4c/pc/4c_pc_1.webp" alt="Bunk beds sleeping four" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bunk beds sleeping four</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_2.webp" alt="Kitchenette with a microwave, kettle and fridge" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Kitchenette with a microwave, kettle and fridge</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_3.webp" alt="Comfortable sofa bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Comfortable sofa bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_4.webp" alt="Cabin 4C interior dining area with table and chairs for 4 guests" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl"> Cabin interior</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_5.webp" alt="Cabin 4C interior storage and organization solutions for guests" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl"> Cabin interior</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_6.webp" alt="Cabin rules" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin rules</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_7.webp" alt="Cabin 4C window view showcasing the pristine Swedish Lapland wilderness" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl"> Bedside pocket</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_8.webp" alt="Cabin 4C entrance area with coat storage and welcome amenities" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_9.webp" alt="Northern lights above the cabin" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Northern lights above the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_10.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/4c/pc/4c_pc_11.webp" alt="Cabin 4C surrounded by snow-covered pine trees in winter at Camp Alta Kiruna" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from outside</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/common_areas/kitchen_pc_1.webp" alt="Common kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Common kitchen</p>
                    </swiper-slide> 
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/common_areas/showers_women_pc_1.webp" alt="Common bathrooms" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Common bathrooms</p>

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
                            <img src="/cabins/4c/mob/4c_mob_1.webp" alt="Bunk beds sleeping four" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bunk beds sleeping four</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_2.webp" alt="Comfortable sofa bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Comfortable sofa bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_3.webp" alt="Cabin interior" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide>   

                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_4.webp" alt="Kitchenette with a microwave, kettle and fridge" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Kitchenette with a microwave, kettle and fridge</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_5.webp" alt="Bedside pocket" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedside pocket</p>
                    </swiper-slide>     
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_6.webp" alt="Bunk beds" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bunk beds</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_7.webp" alt="Cabin interior" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_8.webp" alt="View from the cabin" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_9.webp" alt="Cabin interior" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin rules</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/4c/mob/4c_mob_10.webp" alt="Northern lights above the cabin" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Northern lights above the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/common_areas/kitchen_mob_1.webp" alt="Shared kitchen facility at Camp Alta with modern appliances and dining area for all guests" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Common kitchen</p>
                    </swiper-slide> 
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/common_areas/showers_women_mob_1.webp" alt="Clean shared bathroom facilities with modern showers and amenities at Camp Alta Kiruna" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Common bathrooms</p>

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
  title: 'Cabin 4C - 18m2, Sleeps 4 | Camp Alta Kiruna',
  description: 'Open-plan cabin with exceptional lake views and private balcony. Features two bunk beds, sofa bed and kitchenette. Sleeps 4 guests at Camp Alta Kiruna, Swedish Lapland.',
  path: '/cabins/Cabin-4c',
  image: '/cabins/main/4c.webp',
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
        name: 'Cabin 4C',
        description: 'Open-plan cabin with exceptional lake views and private balcony. Features two bunk beds, sofa bed and kitchenette. Sleeps 4 guests at Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
        floorSize: { '@type': 'QuantitativeValue', value: 18, unitCode: 'MTK' },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
          { '@type': 'LocationFeatureSpecification', name: 'Heating' },
          { '@type': 'LocationFeatureSpecification', name: 'Fridge' },
          { '@type': 'LocationFeatureSpecification', name: 'Microwave' },
          { '@type': 'LocationFeatureSpecification', name: 'TV' },
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