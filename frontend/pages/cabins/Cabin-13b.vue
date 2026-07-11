<template>
    <div id="screen">         
        <Navbar/>    
        
       
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">Cabin 13B</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 lg:w-1/12"></p>                        
                </div>        
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2 ">
                        <p class="text-xl mt-4">This two-story cabin can comfortably accommodate 13 people. The lower floor features two 3-people bedrooms, each with a bunk bed and a single bed. Upstairs, there's a spacious open-plan bedroom with seven single beds, which can be divided into smaller areas using curtains. The upper-floor bedroom has access to a private balcony with an amazing view of the lake.</p>
                        <p class="text-xl mt-4">On the lower floor of the cabin, guests can relax in a spacious open-plan lounge with a big dining table, a comfortable sofa, charming wood-burning fireplace, and a TV. The cabin also has access to its own bathroom with a toilet and shower. The fully equipped kitchen provides access to all necessary kitchen equipment, such as a microwave, fridge, freezer, oven, toaster, dishwasher, drip coffee maker, stovetop, pots, pans, plates and all basic kitchen utensils.</p>
                        <p class="text-xl mt-4">From a large terrace on the ground floor, guests can enjoy the picturesque view of the lake, whether it's bathed in sunshine or covered in snow. The terrace features a table and chairs all year-round, providing a charming spot to enjoy a cup of coffee while admiring the peaceful lake views.</p>
                        <p class="text-xl mt-4">We have only one cabin in this category: 13B.</p>
                        <p class="text-xl mt-4">As part of the camp amenities, there are several wood-fired saunas available for free use, including one that floats on the lake. If you wish to enjoy the sauna experience, you can easily order a bag of wood at the reception for 110 SEK per bag.</p>      
                        <p class="text-xl mt-4">Located in a remote area, our Camp provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Camp Alta.</p>      
                    </div>                     
                    <div class="mt-4 flex  justify-center">
                        <img src="/cabins/main/13b.webp" alt="" class="w-full object-cover">
                    </div>
                </div> 
        </div>     
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>          
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Accommodates:</span> 13 guests</li>
                    <li class="list-disc text-xl"><span class="font-bold">Area:</span> 90m<span class="superscript">2</span></li>
                    <li class="list-disc text-xl"><span class="font-bold">Bedroom:</span> The cabin has 3 bedrooms. Bedroom 1and 2 has one bunk beds and a single bed. Bedroom 3 has an open floor plan with seven single beds.</li>
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
                <p class="text-xl mt-4">To maintain affordable prices and to make our camp accessible to everyone, we are a self-cleaning camp. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 1940 SEK. Cleaning products are provided in the cabin.</p>
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
                            <img src="/cabins/13b/pc/13b_pc_1.webp" alt="Main entrance hall" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Main entrance hall</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_2.webp" alt="Open-plan lounge with a fireplace" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Open-plan lounge with a fireplace</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_3.webp" alt="Open-plan lounge" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Open-plan lounge</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_4.webp" alt="Fully-furnished kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully-furnished kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_5.webp" alt="Fully-furnished kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully-furnished kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_6.webp" alt="Open-plan lounge" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Open-plan lounge</p>
                    </swiper-slide>   
                    <swiper-slide class="" >                            
                        <div class="grid lg:grid-cols-2 ">
                            <div class="flex justify-center">
                                <img src="/cabins/13b/pc/13b_pc_7.webp" alt="dinning area" class="max-h-screen " loading="lazy">  <!--w-auto -->
                            </div>
                            <div class="flex justify-center">
                                <img src="/cabins/13b/pc/13b_pc_8.webp" alt="Fully-furnished kitchen" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                        </div>
                        <p class="text-center mt-3 mb-6 text-2xl">Fully-furnished kitchen and dinning area</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_9.webp" alt="Bedroom 1 with a bunk bed and a single bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 1 with a bunk bed and a single bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_10.webp" alt="Bedroom 1 with a bunk bed and a single bed" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 1 with a bunk bed and a single bed</p>
                    </swiper-slide>   
                    <swiper-slide class="" >                            
                        <div class="grid lg:grid-cols-2 ">
                            <div class="flex justify-center">
                                <img src="/cabins/13b/pc/13b_pc_11.webp" alt="Bathroom with a shower" class="max-h-screen " loading="lazy">  <!--w-auto -->
                            </div>
                            <div class="flex justify-center">
                                <img src="/cabins/13b/pc/13b_pc_12.webp" alt="Bathroom with a shower" class="max-h-screen" loading="lazy">  <!--w-auto -->
                            </div>
                        </div>
                        <p class="text-center mt-3 mb-6 text-2xl">Bathroom with a shower</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_13.webp" alt="Upstairs bedroom with seven single beds" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Upstairs bedroom with seven single beds</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_14.webp" alt="Upstairs bedroom with seven single beds" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Upstairs bedroom with seven single beds</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_15.webp" alt="Upstairs bedroom with seven single beds" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Upstairs bedroom with seven single beds</p>
                    </swiper-slide>  
                 
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_16.webp" alt="Upstairs bedroom with seven single beds" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Upstairs bedroom with seven single beds</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_17.webp" alt="Coffee table with chairs" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Coffee table with chairs</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_18.webp" alt="Traditional Sámi decorations" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Traditional Sámi decorations</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_19.webp" alt="Fireplace" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fireplace</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_20.webp" alt="Fireplace" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fireplace</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_21.webp" alt="Large terrace" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Large terrace</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_22.webp" alt="View from the terrace" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">View from the terrace</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_23.webp" alt="Large terrace with outdoor furniture" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Large terrace with outdoor furniture</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_24.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Cabin from the outside</p>
                    </swiper-slide>  
                    <swiper-slide>                                           
                        <div  class="flex justify-center">  
                            <img src="/cabins/13b/pc/13b_pc_25.webp" alt="Cabin from the outside" class="max-h-screen" loading="lazy">  <!--w-auto -->
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
                            <img src="/cabins/13b/mob/13b_mob_1.webp" alt="Open-plan lounge with a fireplace" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Open-plan lounge with a fireplace</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_2.webp" alt="Main entrance hall" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Main entrance hall</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_3.webp" alt="Open-plan lounge" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Open-plan lounge</p>
                    </swiper-slide>   

                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_4.webp" alt="Fully-furnished kitchen" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully-furnished kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_5.webp" alt="Dining area" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Dining area</p>
                    </swiper-slide>     
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_6.webp" alt="Kitchen decor" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Kitchen decor</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_7.webp" alt="Fully-furnished kitchen" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully-furnished kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_8.webp" alt="Bedroom 2 with a bunk bed and a single bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 2 with a bunk bed and a single bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_9.webp" alt="Bedroom 2 with a bunk bed and a single bed" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bedroom 2 with a bunk bed and a single bed</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_10.webp" alt="Bathroom with shower" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bathroom with shower</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_11.webp" alt="Bathroom with shower" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Bathroom with shower</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_12.webp" alt="Upstairs bedroom with seven single beds" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Upstairs bedroom with seven single beds</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_13.webp" alt="Upstairs balcony" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Upstairs balcony</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_14.webp" alt="Coffee table with chairs" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Coffee table with chairs</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_15.webp" alt="Fireplace" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fireplace</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_16.webp" alt="Fully-furnished kitchen" class="object-cover" loading="lazy">  <!--w-auto -->
                        </div> 
                        <p class="text-center mt-3 mb-6 text-2xl">Fully-furnished kitchen</p>
                    </swiper-slide>   
                    <swiper-slide>                                           
                        <div  class="flex justify-center h-[90vh]">  
                            <img src="/cabins/13b/mob/13b_mob_17.webp" alt="Cabin from the outside" class="object-cover" loading="lazy">  <!--w-auto -->
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
                    <p class="text-xl ml-2 pt-4">If you want help with your reservation, please contact us via email at <EmailLink /></p>    
                </div>
            </div>
        </div>
        <Footer/>  
    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Cabin 13B - 90m2, Sleeps 13 | Camp Alta Kiruna',
  description: 'Two-story cabin with 3 bedrooms, private bathroom, fully equipped kitchen with dishwasher, fireplace, large terrace and lake-view balcony. Sleeps up to 13 guests at Camp Alta Kiruna, Swedish Lapland.',
  path: '/cabins/Cabin-13b',
  image: '/cabins/main/13b.webp',
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
        name: 'Cabin 13B',
        description: 'Two-story cabin with 3 bedrooms, private bathroom, fully equipped kitchen with dishwasher, fireplace, large terrace and lake-view balcony. Sleeps up to 13 guests at Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 13 },
        floorSize: { '@type': 'QuantitativeValue', value: 90, unitCode: 'MTK' },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
          { '@type': 'LocationFeatureSpecification', name: 'Heating' },
          { '@type': 'LocationFeatureSpecification', name: 'Fridge' },
          { '@type': 'LocationFeatureSpecification', name: 'Microwave' },
          { '@type': 'LocationFeatureSpecification', name: 'TV' },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen' },
          { '@type': 'LocationFeatureSpecification', name: 'Private bathroom' },
          { '@type': 'LocationFeatureSpecification', name: 'Fireplace' },
          { '@type': 'LocationFeatureSpecification', name: 'Dishwasher' },
          { '@type': 'LocationFeatureSpecification', name: 'Oven' },
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