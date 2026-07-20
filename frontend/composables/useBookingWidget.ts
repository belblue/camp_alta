import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

type BaseOptions = {
  trackingTag: string
  /** Override the Clarity event names (defaults: `${trackingTag}_loaded` / `${trackingTag}_failed`) */
  events?: { loaded: string; failed: string }
}

type CheckfrontOptions = BaseOptions & {
  provider: 'checkfront'
  widgetOptions: Record<string, string>
}

type SirvoyOptions = BaseOptions & {
  provider: 'sirvoy'
  formId: string
  dataWidget?: string
}

type WidgetOptions = CheckfrontOptions | SirvoyOptions

declare const DROPLET: any

export function useBookingWidget(opts: WidgetOptions) {
  const loading = ref(true)
  const error = ref(false)
  const widgetContainer = ref<HTMLElement | null>(null)
  let fallbackTimer: number | undefined
  let observer: MutationObserver | undefined

  const trackClarity = (event: string) => {
    const w = window as any
    if (typeof w.clarity === 'function') {
      w.clarity('event', event)
      w.clarity('set', 'last_booking_event', event)
    }
  }

  onMounted(() => {
    nextTick(() => {
      const container = widgetContainer.value
      if (!container) return

      const finish = () => {
        loading.value = false
        observer?.disconnect()
        if (fallbackTimer) clearTimeout(fallbackTimer)
        trackClarity(opts.events?.loaded ?? `${opts.trackingTag}_loaded`)
      }

      const fail = () => {
        loading.value = false
        error.value = true
        observer?.disconnect()
        if (fallbackTimer) clearTimeout(fallbackTimer)
        trackClarity(opts.events?.failed ?? `${opts.trackingTag}_failed`)
      }

      // Checkfront renders inline content into the container
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

      // Sirvoy renders an iframe; wait for it to finish loading
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

      const checkReady = opts.provider === 'sirvoy' ? checkIframe : checkContent

      observer = new MutationObserver(() => { checkReady() })
      observer.observe(container, { childList: true, subtree: true })

      fallbackTimer = window.setTimeout(() => {
        if (!checkReady()) fail()
      }, 15000)

      if (opts.provider === 'sirvoy') {
        const script = document.createElement('script')
        script.src = 'https://secured.sirvoy.com/widget/sirvoy.js'
        script.async = true
        script.setAttribute('data-form-id', opts.formId)
        if (opts.dataWidget) script.setAttribute('data-widget', opts.dataWidget)
        script.onerror = fail
        container.appendChild(script)
        requestAnimationFrame(() => { checkReady() })
      } else {
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
              ...opts.widgetOptions,
            }).render()
            requestAnimationFrame(() => { checkReady() })
          } catch (e) {
            fail()
          }
        }
        document.head.appendChild(script)
      }
    })
  })

  onBeforeUnmount(() => {
    if (fallbackTimer) clearTimeout(fallbackTimer)
    observer?.disconnect()
  })

  return { loading, error, widgetContainer }
}
