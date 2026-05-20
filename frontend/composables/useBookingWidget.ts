import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

type CheckfrontOptions = {
  provider: 'checkfront'
  trackingTag: string
  widgetOptions: Record<string, string>
}

type SirvoyOptions = {
  provider: 'sirvoy'
  trackingTag: string
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

  const setupDataLayerBridge = () => {
    const w = window as any
    if (w.__clarityDataLayerBridge) return
    w.__clarityDataLayerBridge = true

    w.dataLayer = w.dataLayer || []

    const ECOMM_EVENTS = new Set([
      'view_item',
      'add_to_cart',
      'select_item',
      'begin_checkout',
      'add_payment_info',
      'purchase',
    ])

    const forward = (entry: any) => {
      if (!entry || typeof entry !== 'object') return
      const name = entry.event
      if (!ECOMM_EVENTS.has(name)) return
      if (typeof w.clarity !== 'function') return

      w.clarity('event', `checkfront_${name}`)

      const ecom = entry.ecommerce || {}
      if (ecom.value != null) w.clarity('set', 'booking_value', String(ecom.value))
      if (ecom.currency) w.clarity('set', 'booking_currency', String(ecom.currency))
      if (ecom.transaction_id) w.clarity('set', 'booking_id', String(ecom.transaction_id))
      const firstItem = Array.isArray(ecom.items) ? ecom.items[0] : undefined
      if (firstItem?.item_name) w.clarity('set', 'booking_item', String(firstItem.item_name))

      if (name === 'purchase' && ecom.transaction_id) {
        w.clarity(
          'identify',
          String(ecom.transaction_id),
          null,
          null,
          `booking_${ecom.transaction_id}`
        )
      }
    }

    w.dataLayer.forEach(forward)

    const origPush = w.dataLayer.push.bind(w.dataLayer)
    w.dataLayer.push = (...args: any[]) => {
      args.forEach(forward)
      return origPush(...args)
    }
  }

  onMounted(() => {
    setupDataLayerBridge()
    nextTick(() => {
      const container = widgetContainer.value
      if (!container) return

      const finish = () => {
        loading.value = false
        observer?.disconnect()
        if (fallbackTimer) clearTimeout(fallbackTimer)
        trackClarity(`${opts.trackingTag}_loaded`)
      }

      const fail = () => {
        loading.value = false
        error.value = true
        observer?.disconnect()
        if (fallbackTimer) clearTimeout(fallbackTimer)
        trackClarity(`${opts.trackingTag}_failed`)
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

      if (opts.provider === 'sirvoy') {
        const script = document.createElement('script')
        script.src = 'https://secured.sirvoy.com/widget/sirvoy.js'
        script.async = true
        script.setAttribute('data-form-id', opts.formId)
        if (opts.dataWidget) script.setAttribute('data-widget', opts.dataWidget)
        script.onerror = fail
        container.appendChild(script)
        requestAnimationFrame(() => { checkContent() })
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
            requestAnimationFrame(() => { checkContent() })
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
