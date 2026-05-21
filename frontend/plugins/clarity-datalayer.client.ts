export default defineNuxtPlugin(() => {
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
})