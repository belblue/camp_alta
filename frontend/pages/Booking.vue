<template>
    <div id="screen">
      <section class="hero bg-[url('/header/header_aboutcamp.webp')] bg-cover bg-center" style="height: 40vh;">
      </section>
    </div>
    <div class="">
      <div class="p-0 absolute top-0 w-full z-10">
        <Navbar/>
        <div class="h-[60vh] flex flex-col justify-center items-center text-center">
          <p class="title text-white lg:text-9xl relative z-10">Booking</p>
        </div>
      </div>
    </div>
    <section class="content-cabins">
      <!-- Breadcrumbs -->
      <nav class="bg-bg2 px-4 lg:px-10 pt-4 pb-2 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-black font-semibold">Booking</span>
      </nav>

      <div class="bg-bg2 px-2 lg:px-10 pb-10 lg:pb-20 text-center">
        <p class="pt-4 font-bold text-xl">Select the date range for which you want to obtain availability.</p>
        <ClientOnly>
          <div v-if="loading" class="flex justify-center items-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-primary"></div>
          </div>
          <div v-if="error" class="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-6 my-10 text-center">
            <p class="text-xl font-bold mb-2">Booking system temporarily unavailable</p>
            <p class="text-gray-700">Sorry, it looks like there is a problem with our booking provider. You can contact us at <a href="mailto:info@campalta.se" class="text-primary font-bold underline">info@campalta.se</a> with your booking request. Sorry for the inconvenience.</p>
          </div>
          <div id="CHECKFRONT_WIDGET_01" ref="widgetContainer"></div>
        </ClientOnly>
      </div>

      <!-- Lakeside Aurora Cabins -->
      <div class="bg-bg2 px-4 lg:px-10 pb-10 text-center">
        <div class="bg-white rounded-lg shadow-md max-w-2xl mx-auto overflow-hidden md:flex">
          <img src="/lakeside/general/gen_9.webp" alt="Lakeside Aurora Cabins" class="w-full md:w-1/2 h-48 md:h-auto object-cover"/>
          <div class="p-6 flex flex-col justify-center">
            <p class="text-xl font-bold">Looking for Lakeside Aurora Cabins?</p>
            <p class="text-gray-600 mt-2">Our premium lakefront cabins have a separate booking system.</p>
            <NuxtLink to="/Booking-lakeside" class="btn bg-tertiary text-white mt-4 inline-block text-lg py-2 px-10">Book Lakeside Cabins</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Trust signals -->
      <div class="bg-bg1 px-4 lg:px-10 py-10">
        <div class="flex flex-col items-center justify-center text-center">
          <a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g189815-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg" alt="TripAdvisor" class="h-12 mb-2"/>
          </a>
          <p class="text-sm text-gray-600">Excellent reviews on TripAdvisor</p>
        </div>
      </div>

      <Footer/>
    </section>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

useSeo({
  title: 'Book Your Stay - Cabins & Tours | Camp Alta Kiruna',
  description: 'Book your stay at Camp Alta Kiruna. Browse availability for cabins, tours, caravan spots, and extra services in the heart of Swedish Lapland.',
  path: '/Booking',
  image: '/header/header_aboutcamp.webp',
})

const loading = ref(true)
const error = ref(false)
const widgetContainer = ref<HTMLElement | null>(null)
let fallbackTimer: number | undefined
let observer: MutationObserver | undefined

declare const DROPLET: any

onMounted(() => {
  nextTick(() => {
  const container = widgetContainer.value
  if (!container) return

  const trackClarity = (event: string) => {
    const w = window as any
    if (typeof w.clarity === 'function') {
      w.clarity('event', event)
      w.clarity('set', 'last_booking_event', event)
    }
  }

  const finish = () => {
    loading.value = false
    observer?.disconnect()
    if (fallbackTimer) clearTimeout(fallbackTimer)
    trackClarity('booking_widget_loaded_main')
  }

  const fail = () => {
    loading.value = false
    error.value = true
    observer?.disconnect()
    if (fallbackTimer) clearTimeout(fallbackTimer)
    trackClarity('booking_widget_failed_main')
  }

  const checkContent = () => {
    const hasContent = Array.from(container.children).some(
      (el) => el.id !== 'CHECKFRONT_LOADER' && el.tagName !== 'SCRIPT'
    )
    if (hasContent) {
      finish()
      return true
    }
    return false
  }

  observer = new MutationObserver(() => { checkContent() })
  observer.observe(container, { childList: true, subtree: true })

  fallbackTimer = window.setTimeout(() => {
    if (!checkContent()) fail()
  }, 15000)

  const script = document.createElement('script')
  script.src = '//camp-alta.checkfront.com/lib/interface--0.js'
  script.type = 'text/javascript'
  script.async = true
  script.onerror = fail
  script.onload = () => {
    try {
      new DROPLET.Widget({
        host: 'camp-alta.checkfront.com',
        target: 'CHECKFRONT_WIDGET_01',
        options: 'category_select',
        category_id: '2,3,7,6,4,9',
        provider: 'droplet',
      }).render()
      requestAnimationFrame(() => { checkContent() })
    } catch (e) {
      fail()
    }
  }
  document.head.appendChild(script)
  })
})

onBeforeUnmount(() => {
  if (fallbackTimer) clearTimeout(fallbackTimer)
  observer?.disconnect()
})
</script>
