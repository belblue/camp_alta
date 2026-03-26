<template>
    <div id="screen">         
        <Navbar-lakeside/>    
         
  
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1  lg:px-10 pb-5 lg:pb-20 pt-10">
                <p class="title lg:text-8xl  text-center pb-4">Cabin 8B</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 lg:w-1/6"></p>                        
                </div>        
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 text-left px-2">
                        <p class="text-xl mt-4">This spacious cabin is located in a stunning setting by Lake Alttajärvi, offering tranquility and beautiful views all year round. With room for up to 8 guests, it's ideal for families or groups who want comfort, nature and authentic Lapland charm.</p>
                        <p class="text-xl mt-4">The cabin features three bedrooms, a living room, a dining area, and its own bathroom with a toilet and shower. The fully equipped kitchen includes pots, pans, plates, and all necessary kitchen utensils, such as a microwave, oven, fridge, freezer, and coffee maker. The first bedroom has one bunk bed, the second bedroom has two bunk beds and the third bedroom has one bunk bed. The spacious open-plan lounge and kitchen area includes a dining table, comfortable sofa, wood-burning fireplace, and a TV.</p>
                        <p class="text-xl mt-4">With a lovely balcony, guests can relax and enjoy the picturesque view of the lake, whether it's bathed in sunshine or covered in snow. The accommodation also provides a wood-fired sauna and fireplace.</p>
                        <p class="text-xl mt-4">Located in a remote area, this cabin provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Lakeside aurora cabins.</p>
                   </div>                     
                    <div class="mt-4 flex justify-center">
                      <swiper
                        id="8b-ext-swiper"
                        class="z-0 w-full"
                        :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
                        :rewind="true"
                        :lazy="true"
                        :navigation="true"
                        :autoplay="{ delay: 4000, disableOnInteraction: true }"
                        :keyboard="{ enabled: true }"
                        :pagination="{ dynamicBullets: true, clickable: true }"
                      >
                        <swiper-slide>
                          <img src="/lakeside/cabins/8b/8b_main.webp" alt="Cabin exterior" class="w-full aspect-[6/4.5] object-cover" loading="lazy" />
                        </swiper-slide>
                        <swiper-slide>
                          <img src="/lakeside/cabins/8b/8b_ext1.webp" alt="Cabin exterior" class="w-full aspect-[6/4.5] object-cover" loading="lazy" />
                        </swiper-slide>
                        <swiper-slide>
                          <img src="/lakeside/cabins/8b/8b_ext2.webp" alt="Cabin exterior" class="w-full aspect-[6/4.5] object-cover" loading="lazy" />
                        </swiper-slide>
                        <swiper-slide>
                          <img src="/lakeside/cabins/8b/8b_ext3.webp" alt="Cabin exterior" class="w-full aspect-[6/4.5] object-cover" loading="lazy" />
                        </swiper-slide>
                        <swiper-slide>
                          <img src="/lakeside/cabins/8b/8b_ext4.webp" alt="Cabin exterior" class="w-full aspect-[6/4.5] object-cover" loading="lazy" />
                        </swiper-slide>
                        <swiper-slide>
                          <img src="/lakeside/cabins/8b/8b_ext5.webp" alt="Cabin exterior" class="w-full aspect-[6/4.5] object-cover" loading="lazy" />
                        </swiper-slide>
                      </swiper>
                    </div>
                </div> 
        </div>     
        <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20">
            <p class="title-info">Information about the cabin:</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>          
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center">
                <ul class="ml-10 lg:ml-16 pt-4 ">
                    <li class="list-disc text-xl"><span class="font-bold">Accommodates:</span> 8 guests</li>
                    <li class="list-disc text-xl"><span class="font-bold">Area:</span> 80m<span class="superscript">2</span></li>
                    <li class="list-disc text-xl"><span class="font-bold">Bedrooms:</span> The cabin has 3 bedrooms, Bedroom 1 has one bunk bed, Bedroom 2 has two bunk beds , Bedroom 3 has one bunk bed.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Cabin amenities:</span> Refrigerator, water kettle, coffee maker, cable TV, electric heater, microwave, oven, cutlery, pots and pans.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Shower & WC:</span> Inside the cabin.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Kitchen:</span> Inside the cabin.</li>
                </ul>
                <ul class="ml-10 lg:ml-16 lg:pt-4 md:pt-4">
                    <li class="list-disc text-xl"><span class="font-bold">Heating:</span> The cabin is heated by electric heating, this ensures a comfortable stay all year round.</li>
                    <li class="list-disc text-xl"><span class="font-bold">WIFI:</span> Available in the cabin.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Parking:</span> Available free of charge.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Pet policy:</span> Unfortunately, we cannot allow pets in the cabin due to allergy concerns.</li>
                    <li class="list-disc text-xl"><span class="font-bold">Check in:</span> 15:00 pm</li>
                    <li class="list-disc text-xl"><span class="font-bold">Latest Check out:</span> 11:00 am</li>
                </ul>               
            </div>
             <div class="lg:mr-10 text-left px-2">
                <p class="text-xl mt-4">Bed linen and towels are included in the price of the cabin.</p>
                <p class="text-xl mt-4">To maintain affordable prices and to make our accommodation accessible to everyone, we are a self-cleaning accommodation. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 880 SEK. Cleaning products are provided in the cabin.</p>
             </div>
            <div class="grid justify-center mt-10">
                <NuxtLink to="/Booking-lakeside" class="btn bg-tertiary text-white mt-6 mb-6 text-xl py-2 px-20">Book here</NuxtLink>
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
            :keyboard="{ enabled: true }"
            :pagination="{ dynamicBullets: true, clickable: true }"
          >
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in1.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in2.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in3.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in4.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in5.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in6.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in8.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in9.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in10.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center">
                <img src="/lakeside/cabins/8b/8b_in11.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="grid lg:grid-cols-2">
                <div class="flex justify-center">
                  <img src="/lakeside/cabins/8b/8b_in12.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
                </div>
                <div class="flex justify-center">
                  <img src="/lakeside/cabins/8b/8b_in13.webp" alt="Cabin interior" class="h-screen" loading="lazy" />
                </div>
              </div>
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
            :keyboard="{ enabled: true }"
            :pagination="{ dynamicBullets: true, clickable: true }"
          >
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in1.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in2.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in3.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in4.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in5.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in6.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in8.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in9.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in10.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in11.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in12.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex justify-center h-[90vh]">
                <img src="/lakeside/cabins/8b/8b_in13.webp" alt="Cabin interior" class="object-cover" loading="lazy" />
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="bg-bg1 lg:px-10 pb-10 lg:pb-20">
            <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                <div class="px-2">
                    <p class="title-info">Getting here</p>                                         
                    <p class="line w-2/3 lg:w-1/3 ml-2"></p>      
                    <p class="text-xl pt-4 ml-2 ">The cabins are located in Etian 105, Kiruna – 98192. <NuxtLink href="https://maps.app.goo.gl/HDNHRPZfkkJxdeja9" title="link the google maps of the location" class="text-tertiary font-bold">(Link to Google maps)</NuxtLink> </p>
                    <p class="text-xl pt-4 ml-2 ">Our reception is located 1 km away from the cabins. <NuxtLink href="https://maps.app.goo.gl/DMWccF29NXfUd7Xb7" title="link the google maps of the location" class="text-tertiary font-bold">(Link to Google maps)</NuxtLink></p>
                    <p class="text-xl pt-4 ml-2 ">Our Shuttle service is available from 15th of November to 15th of April. You can easily book our transportation through our booking system to ensure a hassle-free experience.</p>
                    
                    <div class="grid justify-center my-5">
                        <NuxtLink to="/booking/Booking-LSextras" class="btn bg-tertiary text-white mt-6 text-xl py-2 px-20 font-bold">Book shuttle</NuxtLink>
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
  title: 'Cabin 8B - Lakeside Aurora - 80m2, Sleeps 8 | Camp Alta Kiruna',
  description: 'Spacious lakeside cabin with 3 bedrooms, private bathroom, fully equipped kitchen with oven, wood-burning fireplace and sauna. Sleeps up to 8 guests at Lakeside Aurora, Camp Alta Kiruna, Swedish Lapland.',
  path: '/cabins-lakeside/Cabin-8b',
  image: '/lakeside/cabins/8b/8b_main.webp',
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
        name: 'Cabin 8B - Lakeside Aurora',
        description: 'Spacious lakeside cabin with 3 bedrooms, private bathroom, fully equipped kitchen with oven, wood-burning fireplace and sauna. Sleeps up to 8 guests at Lakeside Aurora, Camp Alta Kiruna.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 8 },
        floorSize: { '@type': 'QuantitativeValue', value: 80, unitCode: 'MTK' },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
          { '@type': 'LocationFeatureSpecification', name: 'Heating' },
          { '@type': 'LocationFeatureSpecification', name: 'Fridge' },
          { '@type': 'LocationFeatureSpecification', name: 'Microwave' },
          { '@type': 'LocationFeatureSpecification', name: 'TV' },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen' },
          { '@type': 'LocationFeatureSpecification', name: 'Private bathroom' },
          { '@type': 'LocationFeatureSpecification', name: 'Fireplace' },
          { '@type': 'LocationFeatureSpecification', name: 'Sauna' },
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
<style>
/* Exterior carousel styles */
#\38 b-ext-swiper {
  width: 100%;
}

#\38 b-ext-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>