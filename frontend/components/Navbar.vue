<template>
    <div  class="nav fixed top-0 z-2000 w-full" :class="headerClass">
        <div class=" py-2 px-4 flex mt-1 mx-2 flex-row " :class="bgClass" >
            <NuxtLink to="/" class="bg-white top-2 left-2 p-2 absolute lg:block hidden" title="back to mainpage">
                <img src="/logo.svg" alt="logo campalta" class="w-28">
            </NuxtLink>
            <NuxtLink to="/" class="block lg:hidden bg-white top-2 left-2 p-2 absolute"  title="back to mainpage">
                <img src="/logo.svg" alt="logo camp alta" class="w-20">
            </NuxtLink>
            <div class="hidden md:flex lg:hidden w-24 text-white">.</div>
            <div class="ml-28 pt-1 mr-auto hidden lg:block">
                <NuxtLink v-for="link in links.desktop" :key="link.to + link.label" :class="link.class" :to="link.to">{{ link.label }}</NuxtLink>
            </div>
            <div class="hidden md:block lg:hidden mx-auto mt-2">
                <NuxtLink :class="tabletCta.class" :to="tabletCta.to">Book here</NuxtLink>
            </div>
            <div class="flex md:ml-0 ml-auto">
                <a href="https://open-meteo.com/" title="Weather data by Open-Meteo.com" v-if="weather!=null " class="mr-12 pt-1 flex" target="_blank">
                    <div class="pt-2">
                            <img v-if="weather.weathercode[0]==0" src="/weather/sun.svg" class="h-6" alt="">
                            <img v-else-if="weather.weathercode[0]==1 || weather.weathercode[0]==2 || weather.weathercode[0]==3" src="/weather/sun-cloud.svg" class="lg:h-6 h-8" alt="">
                            <img v-else-if="weather.weathercode[0]==45 || weather.weathercode[0]==48" src="/weather/cloud.svg" class="h-6" alt="">
                            <img v-else-if="weather.weathercode[0]==71 || weather.weathercode[0]==73 || weather.weathercode[0]==75 || weather.weathercode[0]==77 || weather.weathercode[0]==85 || weather.weathercode[0]==86" src="/weather/snow.svg" class="h-6" alt="">
                            <img v-else src="/weather/rain.svg" class="w-6" alt="">
                        </div>
                    <p class="text-xl pt-1 pl-3 hidden lg:block">{{weather.temperature_2m_min[0]}}ºC / {{weather.temperature_2m_max[0]}}ºC </p>
                </a>
                <NuxtLink v-if="variant === 'lakeside'" class="btn bg-primary text-white font-bold hidden lg:block mr-4" to="/booking/Guest-portal">
                    <span class="line-link2">Guest Portal</span>
                </NuxtLink>
                <NuxtLink v-if="variant === 'lakeside'" class="btn bg-secondary font-bold hidden lg:block" to="/Booking-lakeside">
                    <span class="line-link2 text-black"> Book here</span>
                </NuxtLink>
                <NuxtLink v-else class="btn bg-primary text-white font-bold hidden lg:block" to="/Booking">
                    <span class="line-link2"> Book here</span>
                   </NuxtLink>
                <div class="lg:hidden mt-2">
                    <button v-if="open==false" @click="openMenu()"><img src="/hamburger.svg" alt="open menu"></button>
                    <button v-else  @click="openMenu()"><img src="/close.svg" class="w-6 ml-2" alt="close menu"></button>
                </div>
            </div>
        </div>
        <div v-if="open==true" :class="mobileMenuClass">
            <NuxtLink v-for="link in links.mobile" :key="link.to + link.label" :class="link.class" :to="link.to">{{ link.label }}</NuxtLink>
            <template v-if="variant === 'lakeside'">
                <NuxtLink class="md:hidden p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1 font-bold" to="/booking/Guest-portal">Guest Portal</NuxtLink>
                <NuxtLink class="md:block w-1/2 mx-auto hidden lg:hidden btn bg-primary text-white font-bold" to="/booking/Guest-portal">
                    <span class="line-link2">Guest Portal</span>
                </NuxtLink>
                <span class="md:hidden bg-white p-2.5 mx-2"><NuxtLink class="btn bg-secondary text-black mx-4" to="/Booking-lakeside">Book here</NuxtLink></span>
            </template>
            <span v-else class="md:hidden bg-white p-2.5 mx-2"><NuxtLink class="btn bg-primary  mx-4 " to="/Booking">Book here</NuxtLink></span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

    const props = withDefaults(defineProps<{ variant?: 'camp' | 'lakeside' }>(), {
        variant: 'camp',
    })
    const variant = props.variant

    type NavLink = { label: string; to: string; class: string }

    // Per-variant link sets. Class strings are kept verbatim from the two
    // previous navbar components so rendered markup is unchanged.
    const NAV_LINKS: Record<'camp' | 'lakeside', { desktop: NavLink[]; mobile: NavLink[] }> = {
        camp: {
            desktop: [
                { label: 'The Camp', to: '/TheCamp', class: 'pr-8 py-1.5 text-xl ml-2.5 line-link font-bold' },
                { label: 'Cabins', to: '/Cabins', class: 'pr-8 py-1.5 text-xl ml-2.5  line-link font-bold' },
                { label: 'Tours', to: '/Tours', class: 'pr-8 py-1.5 text-xl ml-2.5  line-link font-bold' },
                { label: 'Lakeside Aurora Cabins', to: '/LakesideAuroraCabins', class: 'pr-8 py-1.5 text-xl ml-2.5 text-[#04b684] line-link font-bold' },
                { label: 'Prices', to: '/Prices', class: 'pr-8 py-1.5 text-xl ml-2.5  line-link font-bold' },
                { label: 'FAQ', to: '/FaQ', class: 'pr-8 py-1.5 text-xl ml-2.5  line-link font-bold' },
                { label: 'Contact', to: '/#Contact', class: 'pr-8 py-1.5 text-xl ml-2.5  line-link font-bold' },
            ],
            mobile: [
                { label: 'The Camp', to: '/TheCamp', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Cabins', to: '/Cabins', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Tours', to: '/Tours', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Lakeside Aurora Cabins', to: '/LakesideAuroraCabins', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1 text-[#04b684]' },
                { label: 'Prices', to: '/Prices', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'FAQ', to: '/FAQ', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Contact', to: '/#Contact', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
            ],
        },
        lakeside: {
            desktop: [
                { label: 'Cabins', to: '/LakesideAuroraCabins/#cabins-lakeside', class: 'pr-8 py-1.5 text-xl ml-2.5 line-link font-bold' },
                { label: 'Reviews', to: '/LakesideAuroraCabins/#Reviews', class: 'pr-8 py-1.5 text-xl ml-2.5 line-link font-bold' },
                { label: 'FAQ', to: '/FaQ', class: 'pr-8 py-1.5 text-xl ml-2.5 line-link font-bold' },
                { label: 'Contact', to: '/LakesideAuroraCabins/#Contact', class: 'pr-8 py-1.5 text-xl ml-2.5 line-link font-bold' },
                { label: 'Camp Alta', to: '/', class: 'pr-8 py-1.5 text-xl ml-2.5 text-primary line-link font-bold' },
            ],
            mobile: [
                { label: 'Cabins', to: '/LakesideAuroraCabins/#cabins-lakeside', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Reviews', to: '/LakesideAuroraCabins/#Reviews', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'FAQ', to: '/FaQ', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Contact', to: '/LakesideAuroraCabins/#Contact', class: 'p-2.5 hover:bg-bg2 text-xl bg-white mx-2 -mt-1' },
                { label: 'Camp Alta', to: '/', class: 'p-2.5 hover:bg-bg2 text-primary text-xl bg-white mx-2 -mt-1 font-bold' },
            ],
        },
    }

    const links = NAV_LINKS[variant]
    const tabletCta = variant === 'lakeside'
        ? { to: '/Booking-lakeside', class: 'btn bg-secondary text-black w-20' }
        : { to: '/Booking', class: 'btn bg-secondary w-20' }
    const mobileMenuClass = variant === 'lakeside'
        ? 'bg-white pb-2 absolute top-16 grid w-full z-10 text-center drop-shadow-xl pt-4'
        : 'absolute top-12 grid w-full z-10 text-center  drop-shadow-xl pt-4'

    const open=ref(false)
    const lastScrollTop=ref(0)
    const headerClass = ref('')
    const bgClass = ref('bg-white')
    interface DailyWeather{
        'weathercode':number[];
        'temperature_2m_max':number[];
        'temperature_2m_min':number[];
        'time':number[];
    }
    interface Weather{
        'daily': DailyWeather
    }
    let weather = ref<DailyWeather>()

    async function openMenu() {
        if(open.value==true){
            open.value=false
        }else{
            open.value=true
        }
    }

    async function navScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > lastScrollTop.value) {
            headerClass.value = 'hide'
        }
        else {
            headerClass.value = ''
        }
        if(scrollTop>0){
            bgClass.value = 'opacity'
        } else{
            bgClass.value = 'bg-white'
        }
        lastScrollTop.value = scrollTop
    }

    async function translateWeatherCode(){
        const response:Weather = await $fetch('https://api.open-meteo.com/v1/forecast?latitude=67.86&longitude=20.23&daily=weathercode,temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Europe%2FBerlin')
        weather.value=response.daily
    }

    onMounted(async () => {
        window.addEventListener("scroll", navScroll);

        await translateWeatherCode()
    });
</script>
<style scoped>
 .hide {
      top: -200px; /* Adjust based on your navbar height */
    }
    .opacity{
        background-color: rgba(255, 255, 255, 0.8)!important;
    }


    .nav{
        z-index: 2000;
    }
</style>
