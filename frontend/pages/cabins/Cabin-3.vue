<template>
    <div id="screen">         
        <Navbar/>    
         
        
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">Cabin 3</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 lg:w-1/12"></p>                        
                </div>        
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2">
                        <p class="text-xl mt-4">Situated right on the shore of Lake Altajärvi, this cabin offers a private and uninterrupted views from its spacious balcony. It provides an ideal setting to enjoy a cup of coffee, tea, or wine in peaceful solitude, surrounded by the natural beauty of Swedish Lapland. </p>
                        <p class="text-xl mt-4">This cabin can accommodate three people. It features one double bed and one single bed, a coffee table with two chairs, and a small kitchenette equipped with a microwave, refrigerator, freezer and a water kettle. For additional facilities, guests can access the common kitchen and bathrooms in the service building located just 20 meters away.</p>
                        <p class="text-xl mt-4">We have only one cabin in this category: 3.</p>
                        <p class="text-xl mt-4">You can enhance your stay with a truly unique experience: unwind in our wood-fired saunas, including one that floats on the lake, or gather around in the cozy fire hut, all available to our guests free of charge. You can purchase a bag of wood at the reception for 110 SEK.</p>
                        <p class="text-xl mt-4">Located in a remote area, our Camp provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Camp Alta.</p>
                        <!--<p class="text-xl mt-4">Located right next to the beautiful lake Alttajärvi, this lakefront cabin features its own private and uninterrupted view of the water from the charming balcony. The cabin provides a cozy space to enjoy a cup of coffee, tea or wine in peace. This makes this cabin the perfect place to escape and enjoy the serenity of Swedish Lapland.</p>
                        <p class="text-xl mt-4">This cabin is perfect for three people. Inside you can find one double bed and one single bed, as well as a table with three chairs.  Along with that there is a small kitchenette, completed with a microwave, refrigerator and a kettle. Guests can use the common kitchen and bathrooms in the service building situated around 20 meters from the cabin.</p>
                        <p class="text-xl mt-4">Camp Alta guests can enjoy a truly unique experience with our wood-fired saunas - one of which even floats on the lake! As well as the possibility to use the cozy fire hut free of charge! You can order a bag of wood at the reception for 110 SEK.</p>      
                        <p class="text-xl mt-4">The remote location of the camp provides the perfect space to witness the breathtaking northern lights during the winter season, or the beauty of the midnight sun during the summer season!</p>  -->
                    </div>                     
                    <div class="mt-4 flex  justify-center">
                        <img src="/cabins/3/pc/3_pc_10.webp" alt="" class="w-full object-cover">
                    </div>
                </div> 
        </div>     
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>          
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Accommodates:</span> 3 guests</li>
                    <li class="list-disc text-xl"><span class="font-bold">Area:</span> 15m<span class="superscript">2</span></li>
                    <li class="list-disc text-xl"><span class="font-bold">Beds:</span> A single bed (90 cm) and a double bed (140 cm)</li>
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
                <NuxtLink to="/booking/Booking-cabins" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here</NuxtLink>
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
                            <img src="/cabins/3/pc/3_pc_1.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_2.webp" alt="Double bed and single bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Double bed and single bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_3.webp" alt="Kitchenette with a microwave, kettle and fridge" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Kitchenette with a microwave, kettle and fridge</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_4.webp" alt="Cabin interior" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_5.webp" alt="Traditional Sámi decoration" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Traditional Sámi decoration</p>
                    </swiper-slide>   
                   
                  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_6.webp" alt="Double bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Double bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_7.webp" alt="View from the cabin" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                     
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_8.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/3/pc/3_pc_9.webp" alt="View from the cabin (if you’re lucky! ;))" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin, if you’re lucky! ;)</p>
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
                            <img src="/cabins/3/mob/3_mob_1.webp" alt="Double bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Double bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_2.webp" alt="Single bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Single bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_3.webp" alt="Kitchenette with a microwave, kettle and fridge" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Kitchenette with a microwave, kettle and fridge</p>
                    </swiper-slide>   

                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_4.webp" alt="View from the cabin" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_5.webp" alt="Cabin from the outside" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>     
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_6.webp" alt="Northern lights above the cabin" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Northern lights above the cabin</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_7.webp" alt="Traditional Sámi decoration" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Traditional Sámi decoration</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_8.webp" alt="Cabin interior" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin interior</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_9.webp" alt="Lakefront porch" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Lakefront porch</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/3/mob/3_mob_10.webp" alt="View from the cabin, if you’re lucky! ;)" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the cabin, if you’re lucky! ;) </p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/common_areas/kitchen_mob_1.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Common kitchen</p>
                    </swiper-slide> 
                    <swiper-slide>                                           
                        <div class="flex justify-center h-[90vh]">  
                            <img src="/cabins/common_areas/showers_women_mob_1.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
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
  title: 'Cabin 3 - 15m2, Sleeps 3 | Camp Alta Kiruna',
  description: 'Lakefront cabin on the shore of Lake Altajarvi with a spacious balcony. Features a double bed and single bed, kitchenette with microwave, fridge and kettle. Sleeps 3 at Camp Alta Kiruna, Swedish Lapland.',
  path: '/cabins/Cabin-3',
  image: '/cabins/3/pc/3_pc_10.webp',
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
        name: 'Cabin 3',
        description: 'Lakefront cabin on the shore of Lake Altajarvi with a spacious balcony. Features a double bed and single bed, kitchenette with microwave, fridge and kettle. Sleeps 3 at Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 3 },
        floorSize: { '@type': 'QuantitativeValue', value: 15, unitCode: 'MTK' },
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