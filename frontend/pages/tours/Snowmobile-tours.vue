<template>
    <div id="screen" class="">            
        <section class=" hero lg:bg-[url('/tours/snowmobile/pc/snowmobile_main.webp')] bg-[url('/tours/snowmobile/mob/snowmobile_hero_mob.webp')] bg-cover"><!---->
        </section>    
        <section class="block md:hidden hero-snowmobile-mob">
        </section>    
   
        
       
        <!--to top-->
        <span id="top"></span> 
        <ToTop/>   
        <div class="">                      
            <div class="p-0 absolute top-0 h-[50vh] w-full z-10 ">
                <Navbar/>
                <div class="h-[60vh] flex flex-col justify-center items-center text-center">
                     <div class="absolute inset-0 bg-black/40" id="filter"></div>
                    <p class="title text-white md:text-8xl relative z-10 ">32 KM SNOWMOBILE TOUR THROUGH LAPLAND’S WILDERNESS</p>                
                </div>
            </div>
        </div>
        <section class="content-cabins ">     
            <div class="bg-bg1 px-2 lg:px-10 pb-8 ">   
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center mt-2">
                    <div class="lg:mr-10">
                        <p class="text-2xl mb-4 md:mt-8 lg:text-left text-center">Embark on an thrilling adventure and drive a snowmobile through the stunning winter landscapes of Northern Sweden!</p>
                        <p class="text-xl lg:mt-8 text-left">You will gear up in warm overalls, gloves, snow boots and hats, to make sure that the freezing temperatures are just another part of your winter adventure. The tour will begin with a careful introduction, where we will teach you how to use the snowmobile. Accompanied by a guide, you will start with some practice laps around the frozen Altajärvi Lake, only to soon drive through snow-capped birch and pine forests and the incredible Arctic scenery.</p>
                        <div class="mt-4 flex md:hidden justify-center my-4">
                            <img src="/tours/snowmobile/mob/snowmobile_mob_1.webp" alt="" class="max-h-screen">
                        </div>
                        <p class="text-xl lg:mt-8 text-left">If you choose to share a snowmobile with another person, you will now change the driver and continue back to Camp Alta as a passenger, taking a slightly different route. If you choose a self-driven option, you will then continue on your own. From time to time, you’ll be able to speed up a little and feel the thrill of the ride. Keep an eye out for local wildlife, such as reindeer and moose, as we may see them along the way!</p>
                        
                    </div>                     
                
                    <div class="md:flex mt-4 hidden  justify-center  w-full h-full">
                        <img src="/tours/snowmobile/pc/snowmobile_1.webp" alt="" class="object-cover">
                    </div>
                    <div class="mt-4 flex md:hidden justify-center my-4">
                        <img src="/tours/snowmobile/mob/snowmobile_mob_3.webp" alt="" class="max-h-screen">
                    </div>
                </div> 
            </div>     

            <div class="bg-bg2 px-2 lg:px-10 pb-8">       
                <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
                    <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                        <div class="lg:flex md:hidden hidden mt-4  justify-center  w-full h-full">
                            <img src="/tours/snowmobile/pc/snowmobile_2.webp" alt="" class="object-cover">
                        </div>
                        <div class="lg:ml-10">
                            <p class="title-info pl-0">Tour details</p>
                            <p class="line w-1/2"></p>     
                                  
                            <p class="text-xl mt-4 text-left"> <span class=" font-bold">Starting point:</span> Camp Alta  (Jullebovägen 2, Kiruna)</p>
                            <p class="text-xl mt-4 text-left"> <span class=" font-bold">Time:</span> </p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Everyday from 09:00 AM to 12:00 PM </li>
                                <li class="list-disc text-xl">Everyday from 13:30 PM to 16:30 PM </li>

                            </ul>
                            <p class="text-xl mt-4 text-left"> <span class=" font-bold">Duration:</span> 3 hours (without transfers) </p>
                            <p class="text-xl mt-4 text-left"> <span class=" font-bold">Distance covered:</span> 32km</p>
                            <p class="text-xl mt-4 text-left font-bold">Prices per person:</p>
                            <p class="text-xl mt-4 text-left">Two people sharing a snowmobile:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Adult: 1500 SEK per person</li>
                                <li class="list-disc text-xl">Child: 850 SEK (4-12 years old)</li>
                            </ul>
                            <p class="text-xl mt-4 text-left">One person on a snowmobile:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Adult: 1900 SEK per person </li>
                            </ul>
                            <p class="text-xl mt-4 text-left">This tour is suitable for both beginners and experienced riders. Our guides will provide all necessary equipment, training, and ensure your safety throughout the journey.</p>

                            <p class="text-xl mt-4 text-left">For larger groups, please contact us for special arrangements.</p>
                            
                           
                        </div>    
                        <div class="md:flex lg:hidden hidden mt-4  justify-center  w-full h-full">
                            <img src="/tours/snowmobile/pc/snowmobile_2.webp" alt="" class="object-cover">
                        </div>
                        <div class="md:hidden mt-4 flex  justify-center">
                            <img src="/tours/snowmobile/mob/snowmobile_mob_2.webp" alt="" class="">
                        </div> 
                    </div> 
                
                </div>  
            <div class="bg-bg1 px-2 lg:px-10 pb-8 ">   
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center ">
                    <div class="lg:mr-10">
                        <p class="title-info pl-0">Additional information</p>
                            <p class="line w-1/2"></p>           

                        <p class="text-xl mt-4 text-left">Please note that you need to have a valid driving license (car/moped/motorcycle) to be allowed to drive a snowmobile. If you don’t have a driving license, you can join the tour as a passenger.</p>
                        <p class="text-xl mt-4 text-left font-bold">Included in the price of the tour:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Round-trip transfer to/from Kiruna</li>
                                <li class="list-disc text-xl">Optional round-trip transfer to/from Jukkasjärvi</li>
                                <li class="list-disc text-xl">Warm winter clothes (winter overall, boots, hats, mittens) and helmets</li>
                                <li class="list-disc text-xl">Short training and instructions</li>
                            </ul>
                            <p class="text-xl mt-4 text-left font-bold"> What to bring:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Valid driving license (car/moped/motorcycle)</li>
                                <li class="list-disc text-xl">Contact lenses instead of glasses are recommended.</li>
                                <li class="list-disc text-xl">Warm base layer clothing (thermoactive underwear, warm socks)</li>
                            </ul>
                            <p class="text-xl mt-4 text-left font-bold">Especial options on the tour:</p>
                                <ul class="ml-10 lg:ml-16 pt-4">
                                    <li class="list-disc text-xl"><span class="font-bold">LUNCH: </span>Tour that include lunch with options like salmon soup or mushroom soup, made from locally sourced organic ingredients. Please contact us by email to book this option. Check the prices in our 'PRICES' section. </li>
                                    <li class="list-disc text-xl"><span  class="font-bold">TRANSFER TO THE ICEHOTEL: </span>Tour that include transfer to the icehotel and return. *Entrance to the icehotel not included. Booking available in the booking section.</li>

                                </ul>
                         
                              <!--    <p class="text-xl mt-4 text-left font-bold">Two people sharing a snowmobile with lunch:</p>
                        <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Adult: 1620 SEK per person</li>
                                <li class="list-disc text-xl">Child: 900 SEK (4-12 years old)</li>
                            </ul>
                            <p class="text-xl mt-4 text-left">One person on a snowmobile with lunch:</p>
                            <ul class="ml-10 lg:ml-16 pt-4">
                                <li class="list-disc text-xl">Adult: 2140 SEK per person </li>
                            </ul>-->
                            <div class="grid justify-center">
                                <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                            </div>
                        </div>      
                                    
                    <div class="mt-4 flex md:hidden justify-center ">
                        <img src="/tours/snowmobile/mob/snowmobile_mob_4.webp" alt="" class="">
                    </div>
                    <div class="mt-4 md:flex hidden justify-center  w-full h-full">
                        <img src="/tours/snowmobile/pc/snowmobile_3.webp" alt="" class="object-cover">
                    </div>
                </div> 
                
            </div>     

            <div class="bg-bg2 px-2 lg:px-10 pb-8 ">   
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:flex mt-4 hidden  justify-center  w-full h-full">
                        <img src="/tours/snowmobile/pc/snowmobile_4.webp" alt="" class="object-cover">
                    </div>
                    <div class="lg:ml-10">
                        <p class="title-info pl-0">Transport options</p>
                        <p class="line w-2/3"></p>      
                        <p class="text-xl mt-8 text-left"><span class="font-bold">Self-drive:</span> Camp Alta Kiruna, Jullebovägen 2 (approximately a 15-minute drive from Kiruna). Please check in at least 10 minutes before the tour starts.</p>   
                        <p class="text-xl mt-8 text-left"><span class="font-bold">Shuttle Service:</span> We offer round-trip transfers from/to Kiruna with our shuttle services from your accommodation in Kiruna/Jukkasjärvi. Please be ready 10 minutes before the pick-up time.</p>
                        <p class="text-xl mt-8 text-left"><span class="font-bold">Pick-up time:</span> (morning slot/afternoon slot)</p>
                        <ul class="ml-10 lg:ml-16 pt-4">
                            <li class="list-disc text-xl">08:20am / 12:50pm from Camp Ripan</li>
                            <li class="list-disc text-xl">08:30am / 13:00pm from the Tourist Office (New City Centre)</li>
                            <li class="list-disc text-xl">Other locations/times to be determined individually</li>
                        </ul>
                        <p class="text-xl mt-8 text-left">Please make sure to indicate your preferred pick up location when booking the trip. For further information or to make any special arrangements, please contact us by email or call.</p>

                        
                    </div>                     
                </div> 
            </div>  
  
            <div class="bg-bg1 px-2 lg:px-10 pb-8 ">   
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center ">
                    <div class="mt-4 flex md:hidden justify-center ">
                        <img src="/tours/snowmobile/mob/snowmobile_mob_5.webp" alt="" class="">
                    </div>
                    <div class="mt-4 md:flex hidden lg:hidden  justify-center w-full h-full ">
                        <img src="/tours/snowmobile/pc/snowmobile_11.webp" alt="" class="object-cover">
                    </div>

                    <div class="lg:mr-10">
                        <p class="title-info pl-0">Tour to Jukkasjärvi</p>
                        <p class="line w-2/3"></p>  
                            <p class="text-xl mt-4 text-left">After your snowmobile tour, you can also choose to join our mini-van tour to Jukkasjärvi, where you can visit the world-famous ICE HOTEL and the open-air Sámi museum Nutti Sámi Siida. Round-trip transfers to/from Jukkasjärvi are included in the price of the tour and will start directly after the snowmobile tour.</p>
                            <p class="text-xl mt-4 text-left">The entry tickets to the ICE HOTEL and Nutti Sámi Siida are <span class="font-bold">not included</span>  in the price of the tour; you can purchase them individually at the entry. For more information about the prices and opening times, see the respective websites of the <a href="https://www.icehotel.com/tickets-opening-hours">ICE HOTEL</a> and <a href="https://nutti.se/museum-cafe/">Nutti Sámi Siida</a> .</p>
                            <p class="text-xl mt-4 text-left font-bold">Learn about the Sámi at the award-winning Nutti Sámi Siida</p>
                            <p class="text-xl mt-4 text-left">Explore the outdoor exhibitions to learn about the history and culture of the Sámi people, the only indigenous people of Europe. Pet the reindeers, try traditional local dishes and buy handcrafted souvenirs.</p>
                            <p class="text-xl mt-4 text-left font-bold">Marvel at ice sculptures at the world-famous ICE HOTEL</p>
                            <p class="text-xl mt-4 text-left">Visit the world’s largest hotel sculpted entirely from ice and snow. Explore unique rooms, designed and crafted by artists from around the world, and enjoy a drink served in an ice glass at the iconic ICEBAR.</p>
                            <div class="grid justify-center mt-10">
                                <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                            </div>
                        </div>      
                                    
                    
                    <div class="mt-4 lg:flex hidden justify-center  w-full h-full">
                        <img src="/tours/snowmobile/pc/snowmobile_11.webp" alt="" class="object-cover">
                    </div>
                </div> 
                
            </div>   

         
            <!--phone carousel-->
            <div class="bg-bg2 px-2 lg:px-10 pb-5 lg:pb-20 lg:hidden block">     
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
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_5.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/mob/snowmobile_mob_4b.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_6.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_7.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   

                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_8.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_9.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>     
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_10.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_12.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-[70vh]">  
                                <img src="/tours/snowmobile/pc/snowmobile_13.webp" alt="" class="object-cover" loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                    
                </swiper>
            </div>

            <div class="bg-bg2 px-2 lg:px-10 pb-10  accordion">   
                    <p class="title-info pl-0">Booking terms and conditions</p>
                    <p class="line w-2/3"></p>         
                    <p class="text-xl mt-8 text-left">Your safety and the safety of others is an essential aspect of our operations. Please read and follow these guidelines and restrictions:</p>
                    <ul class="ml-10 lg:ml-16 pt-4 ">
                        <li class="list-disc text-xl">All participants must arrive on time, as all our tours are guided and you’ll be most likely joining a bigger group.</li>
                        <li class="list-disc text-xl">Participants are required to attend and carefully listen to the instructions on snowmobile safety and basic driving skills provided by our guides.</li>
                        <li class="list-disc text-xl">Participants must be able to understand the instructions provided by our guides, which are given in English.</li>
                        <li class="list-disc text-xl">All participants must follow the guide’s instructions. Failure to comply may result in the tour being terminated.</li>
                        <li class="list-disc text-xl">In case of damage caused by the snowmobile driver, they will be charged with a maximum of 6000 SEK for insurance prime cost. All guests must sign a waiver of liability prior to tour departure.</li>
                        <li class="list-disc text-xl">We provide helmets, snowsuits, insulated boots, ski goggles and mittens free of charge. Participants must return all rented gear at the end of the tour.</li>
                        <li class="list-disc text-xl">A valid driving license (car/ tractor/ scooter/ moped/ motorcycle) is required to be able to drive the snowmobile. Participants who do not have a driving license can only join the tour as a passenger.</li>
                        <li class="list-disc text-xl">Drivers must be at least 18 years old to carry a passenger.</li>
                        <li class="list-disc text-xl">The minimum age for participation is 4 years old (weather permitting).</li>
                        <li class="list-disc text-xl">Children must be accompanied by an adult at all times.</li>
                        <li class="list-disc text-xl">Children must be at least 150 cm tall to be able to sit on a snowmobile. Smaller children can join the tour in a sled carried by the guide.</li>
                        <li class="list-disc text-xl">Due to safety precautions, pregnant women cannot join the tour.</li>
                        <li class="list-disc text-xl">Each snowmobile can carry a maximum of two people (driver and passenger) for safety reasons.</li>
                        <li class="list-disc text-xl">Participants must be aware of the inherent risks of snowmobiling and understand that they participate in the tour at their own risk. The organizer is not responsible for any accidents or damage (injury, death, etc.) caused by the driver through no fault of the organizer.</li>
                        <li class="list-disc text-xl">Participants have to be in good health and be ready to spend 3 hours + in weather conditions typical of the Arctic winter (frost, snow, wind). All guests must inform the organizer about any pre-existing medical conditions for the organizer to be able to provide accurate help in case of emergency.</li>
                        <li class="list-disc text-xl">The maximum speed limit is 70 km/h.</li> 
                        <li class="list-disc text-xl">Anyone suspected of being under the influence of drugs or alcohol will not be allowed to participate.</li>
                        <li class="list-disc text-xl">Participants must drive in one line and maintain a safe distance. Zigzag driving, reckless overtaking, racing and excessive speed will result in termination of the tour.</li>
                        <li class="list-disc text-xl">Snowmobile tours have a 48-hour cancellation policy. If the cancellation is made less than 48 hours before arrival, the participant will be charged 100% of the total amount.</li>
                        <li class="list-disc text-xl">The organizer reserves the right to cancel the tour due to unfavorable weather conditions, such as strong winds, snow storms, icy conditions, extreme temperatures, and impassable roads.</li>
                        <li class="list-disc text-xl">The organizer cannot accept liability for failure when the improper performance is due to the actions of our guests, someone else not connected with the provision of our services, or unusual/unforeseeable circumstances beyond our control.</li>
                        <li class="list-disc text-xl">Participants must report any discrepancies and complaints to our guides at the soonest practicable opportunity so we have an opportunity to rectify the problem.</li>
                        <li class="list-disc text-xl">Entry ticket to the ICE HOTEL/Nutti Sámi Siida is not included.</li>
                        <li class="list-disc text-xl">We reserve the right to deny participation to any individual, who does not comply with our terms and conditions.</li>
                    </ul>   
                    
                    <p class="text-center text-2xl mt-10">We look forward to having you and we promise that this snowmobile adventure in the heart of Kiruna's winter wonderland will be a highlight of your visit! </p>              
                    <div class="grid justify-center mt-6">
                        <NuxtLink to="/booking/Booking-tours" class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20">Book here </NuxtLink>
                    </div>   
                </div> 
            <!--desktop-->
            <div class="bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20 hidden lg:block pt-4">     
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
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_5.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_6.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_7.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_8.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>  
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_9.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_10.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_12.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                        <swiper-slide>                                           
                            <div  class="flex justify-center h-screen">  
                                <img src="/tours/snowmobile/pc/snowmobile_13.webp" alt=""  loading="lazy">  <!--w-auto -->
                            </div> 
                            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
                        </swiper-slide>   
                </swiper>
            </div>
            <Footer/>  
        </section>
    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Snowmobile Tours in Kiruna - 32km Arctic Adventure | Camp Alta',
  description: 'Drive a snowmobile through 32km of stunning Lapland wilderness. Tours from Camp Alta Kiruna include warm winter gear, training, and transfers. From 1520 SEK.',
  path: '/tours/Snowmobile-tours',
  image: '/tours/snowmobile/pc/snowmobile_main.webp',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: '32km Snowmobile Tour Through Lapland Wilderness',
      description: 'Drive a snowmobile through 32km of stunning Arctic scenery including snow-covered forests and frozen lakes. Starting from Camp Alta Kiruna.',
      touristType: 'Adventure Tourism',
      provider: { '@type': 'LodgingBusiness', name: 'Camp Alta Kiruna', url: 'https://campalta.net' },
      offers: [
        { '@type': 'Offer', name: 'Two sharing a snowmobile', price: '1500', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'One person per snowmobile', price: '1900', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
      ],
      location: { '@type': 'Place', name: 'Camp Alta, Kiruna', address: { '@type': 'PostalAddress', streetAddress: 'Jullebovägen 2', addressLocality: 'Kiruna', postalCode: '981 92', addressCountry: 'SE' } },
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