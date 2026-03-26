<template>
    <div id="screen">            
        <section class="bg-[url('/camp/general/general_1.webp')] bg-cover hero">
        </section>    
       

    <span id="top"></span> 
    <ToTop/>      
    <div class="">                      
        <div class="p-0 absolute top-0 h-[50vh] w-full z-10">
            <Navbar/>
            <div class="h-[60vh] flex flex-col justify-center items-center text-center">
                  <div class="absolute inset-0 bg-black/40" id="filter"></div>
                    <p class="title text-white md:text-9xl relative z-10 ">About us</p>                           
            </div>
        </div>  
    </div>
    <section class="content-cabins">     
        <div class="bg-bg1 lg:px-10 pb-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Our beginnings</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>                        
                        </div>
                        <p class="text-xl text-left">Camp Alta started with the visionary native of the nearby small village of Altajärvi, Leif Happalajnen, who wanted to share his deep love for his home and its natural surroundings with travelers from all over the world. He founded the Camp back in the early 2000s, building most of it himself. He is still around, always willing to offer advice and help out, as nobody knows this place like he does. Unless, of course, he is out there fishing.</p>
                        <p class="text-xl mt-4 text-left">Over the years, we have earned the trust of thousands of visitors, many of them returning regularly, who appreciated our hospitality and unique atmosphere. Today, we are proud to be one of the most popular and recognized tourist destinations in the area, offering unforgettable experiences and soothing relaxation in a truly beautiful setting.</p>
                    </div>                     
                    <div class=" mt-4 justify-center md:flex hidden w-full h-full">
                            <img src="/camp/general/general_7.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4  justify-center flex md:hidden">
                        <img src="/camp/general/general_7.webp" alt="" class="">
                    </div>  
                </div> 
            </div>      
            <div class="bg-bg2 lg:px-10 pb-10 lg:pt-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                    <div class="lg:flex mt-4 hidden justify-center w-full h-full">
                            <img src="/camp/general/general_16.webp" alt="" class="object-cover">
                    </div>   
                    
                    <div class="lg:ml-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Where your Arctic adventure begins</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line w-36 "></p>                        
                        </div>
                        <p class="text-xl mt-4 text-left  px-2">Our mission has always been to make the majestic nature and beauty of the Swedish Lapland accessible to every adventurer. We offer accommodation in simple yet comfortable cabins, perfect for those willing to explore the Arctic while staying within their budget. Dedicated to providing enriching experiences, we offer a variety of guided tours and activities that allow you to fully immerse yourself in local nature, culture and history.</p>                        
                        <div class="grid justify-center my-8">
                            <NuxtLink href="/Tours"  class="btn bg-primary flex">
                                Check our tours
                                <img src="/arrow-btn.svg" alt="Arrow icon for check our tours button" class="w-4 ml-3 pt-[2px]">
                            </NuxtLink>                                                 
                        </div>
                    </div>    
                    <div class="md:flex lg:hidden mt-4 hidden justify-center w-full h-full">
                            <img src="/camp/general/general_16.webp" alt="Camp Alta founder Leif Happalajnen enjoying the natural surroundings of Altajärvi village in Swedish Lapland" class="object-cover">
                    </div>   
                    <div class=" mt-4 flex justify-center md:hidden">
                            <img src="/camp/general/general_16.webp" alt="Camp Alta founder Leif Happalajnen enjoying the natural surroundings of Altajärvi village in Swedish Lapland" class="">
                    </div>   
                </div> 
            </div>              
           
            <div class="bg-bg1 lg:px-10 pb-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">What is a wilderness camp?</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>                        
                        </div>
                        <p class="text-xl text-left">A wilderness camp is a remote and rustic campsite located deep in the natural environment. In our case, we are nestled within the Arctic forests of the Swedish Lapland and located right by the beautiful Altajärvi lake. Wilderness camps are located away from the urban areas, providing its visitors with a chance to experience and connect with nature. Our remote location provides excellent Northern lights viewing opportunities. Wilderness camps offer basic amenities. Camp Alta is a perfect destination for nature enthusiasts, who can enjoy the quiet surroundings and outdoor activities, such as hiking, swimming or fishing during the summer, and skiing, wildlife observation or snowmobiling during the winter.</p>
                    </div>                     
                    <div class=" mt-4 justify-center md:flex hidden w-full h-full">
                            <img src="/camp/general/general_6.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4  justify-center flex md:hidden">
                        <img src="/camp/general/general_6.webp" alt="" class="">
                    </div>  
                </div> 
            </div>      
            <div class="bg-bg2 lg:px-10 pb-10 lg:pt-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">                                 
                    <div class="lg:flex mt-4 hidden justify-center w-full h-full">
                            <img src="/camp/general/general_21.webp" alt="" class="object-cover">
                    </div>   
                    
                    <div class="lg:ml-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">Meet our team</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line w-36 "></p>                        
                        </div>
                        <p class="text-xl mt-4 text-left  px-2">Our Camp is led by a team of passionate people, all brought together by the love of the great Arctic outdoors. Coming from various corners of the world, we speak many languages and bring the wealth of diverse perspectives that enrich our services. We are committed to providing our visitors with a warm welcome even in the midsts of the harshest frosts! We love to share our enthusiasm for outdoor adventure and local culture, with each member of our team bringing specialized skills that play a vital role in delivering experiences tailored to your needs. Our goal is to create a relaxed atmosphere where you can feel taken care of and, above all, have a fantastic time exploring.</p>                        
                    </div>    
                    <div class="md:flex lg:hidden mt-4 hidden justify-center w-full h-full">
                            <img src="/camp/general/general_21.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4 flex justify-center md:hidden">
                            <img src="/camp/general/general_21.webp" alt="" class="">
                    </div>   
                </div> 
            </div>       
            <div class="bg-bg1 lg:px-10 pb-10">               
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
                    <div class="lg:mr-10 pt-10">
                        <p class="lg:title-pages sm-title-pages text-center text-black">We are growing for you!</p>
                        <div class="flex justify-center pb-8">                        
                            <p class="line lg:w-1/4 md:w-1/3 w-1/2"></p>                        
                        </div>
                        <p class="text-xl text-left">We continuously improve our services to meet the diverse needs of our numerous visitors. Thanks to team workshops and training, gain new skills to serve our guests in the most hospitable way. We also expand our offer of tours and facilities to make sure you can get the most out of your vacation. We have recently undertaken significant renovations to our cabins and common areas, ensuring that your stay at Camp Alta is even more comfortable. These renovations were primarily conducted using second-hand materials and decorations coming from local artists, which aligns with our commitment to sustainability.</p>
                    </div>                     
                    <div class=" mt-4 justify-center md:flex hidden w-full h-full">
                            <img src="/camp/common/common_6.webp" alt="" class="object-cover">
                    </div>   
                    <div class=" mt-4  justify-center flex md:hidden">
                        <img src="/camp/common/common_6.webp" alt="" class="">
                    </div>  
                </div> 
            </div>  
            <div class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20 text-center ">    
                <div class="justify-center  flex p-3">    
                    <div id="TA_cdsscrollingravenarrow166" class="TA_cdsscrollingravenarrow"><ul id="z8xKoncgG" class="TA_links hdjGZZlt7RF"><li id="LnUJQIe" class="55X3NJ"><a target="_blank" href="https://www.tripadvisor.se/Hotel_Review-g189815-d944749-Reviews-Camp_Alta_Kiruna-Kiruna_Norrbotten_County.html"><img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg" alt="TripAdvisor" class="widEXCIMG" id="CDSWIDEXCLOGO"/></a></li></ul></div>
                </div>    
            </div>        
        <Footer/>  
    </section>
</div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'About Us - Meet the Camp Alta Team | Camp Alta Kiruna',
  description: 'Meet the passionate team behind Camp Alta Kiruna. Learn about our beginnings, our mission to share the beauty of Swedish Lapland, and the diverse team that makes your Arctic adventure unforgettable.',
  path: '/theCamp/AboutUs',
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