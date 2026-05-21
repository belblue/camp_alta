<template>
    <div class="overflow-x-hidden">
    <div id="screen" class="">
        <section class="hero bg-[url('/header/back.webp')] bg-cover">
        </section>
    </div>

    <!--to top-->
    <span id="top"></span>
    <ToTop/>
    <div class="">
        <div class="p-0 absolute top-0 w-full z-10">
            <Navbar-lakeside/>
            <div class="h-[30vh] flex flex-col justify-center items-center text-center">
                <p class="title text-white lg:text-9xl">- Book Your Stay -</p>
                <p class=" text-xl font-bold text-white">Select the date range and category for which you want to obtain availability.</p>
              </div>
        </div>
    </div>

    <section class="content" style="top: 35vh;">
        <span id="top"></span>
        <NuxtLink id="to-top" href="#screen">
            <svg width="32px" class="ml-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path style="fill:#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </svg>
        </NuxtLink>
        <div class="px-4 lg:px-10 pb-10">
            <ClientOnly>
                <div v-if="loading" class="flex justify-center items-center py-20">
                    <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-primary"></div>
                </div>
                <div v-if="error" class="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-6 my-10 text-center">
                    <p class="text-xl font-bold mb-2">Booking system temporarily unavailable</p>
                    <p class="text-gray-700">Sorry, it looks like there is a problem with our booking provider. You can contact us at <a href="mailto:info@campalta.se" class="text-primary font-bold underline">info@campalta.se</a> with your booking request. Sorry for the inconvenience.</p>
                </div>
                <div ref="widgetContainer"></div>
            </ClientOnly>
        </div>
        <Footer/>
    </section>
    </div>
  </template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

useHead({
  link: [{ rel: 'preconnect', href: 'https://secured.sirvoy.com' }],
})

useSeo({
  title: 'Book Lakeside Aurora Cabins | Camp Alta Kiruna',
  description: 'Book your stay at the Lakeside Aurora Cabins at Camp Alta Kiruna. Premium lakefront cabins with stunning Northern Lights views on Lake Altajärvi in Swedish Lapland.',
  path: '/Booking-lakeside',
  image: '/lakeside/general/gen_9.webp',
})

const loading = ref(true)
const error = ref(false)
const widgetContainer = ref<HTMLElement | null>(null)
let fallbackTimer: number | undefined
let observer: MutationObserver | undefined

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
      trackClarity('booking_widget_loaded_lakeside')
    }

    const fail = () => {
      loading.value = false
      error.value = true
      observer?.disconnect()
      if (fallbackTimer) clearTimeout(fallbackTimer)
      trackClarity('booking_widget_failed_lakeside')
    }

    const checkIframe = () => {
      const iframe = container.querySelector('iframe') as HTMLIFrameElement | null
      if (!iframe) return false
      if (iframe.contentDocument?.readyState === 'complete') {
        finish()
      } else {
        iframe.addEventListener('load', finish, { once: true })
        observer?.disconnect()
      }
      return true
    }

    observer = new MutationObserver(() => { checkIframe() })
    observer.observe(container, { childList: true, subtree: true })

    const script = document.createElement('script')
    script.src = 'https://secured.sirvoy.com/widget/sirvoy.js'
    script.async = true
    script.setAttribute('data-form-id', '80bf61cb7ac6ed2e')
    script.onerror = fail
    container.appendChild(script)

    requestAnimationFrame(() => { checkIframe() })

    fallbackTimer = window.setTimeout(() => {
      if (!checkIframe()) fail()
    }, 15000)
  })
})

onBeforeUnmount(() => {
  if (fallbackTimer) clearTimeout(fallbackTimer)
  observer?.disconnect()
})
</script>