import type { RouterConfig } from '@nuxt/schema'

// Scroll-to-hash behaviour for in-page anchor links (e.g. the navbar
// "Contact", "Reviews", "Cabins" links that target /Page/#Section).
//
// Nuxt's default router has no scroll-to-hash on cross-page navigation, and
// even when it did, the target element does not exist yet at the moment the
// route resolves — the destination page is still rendering. That is why those
// links previously needed a second click: the first navigated, the second
// scrolled once the section was in the DOM. Here we poll briefly for the
// element before scrolling so the first click works.
export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      const el = await waitForElement(to.hash)
      if (el) {
        return { el: to.hash, top: scrollMarginTop(el), behavior: 'smooth' }
      }
      // Element never appeared — fall back to the hash so the browser at
      // least attempts its native jump rather than staying put.
      return { el: to.hash }
    }

    // Different page, no hash: start at the top.
    if (to.path !== from.path) return { top: 0 }
  },
}

// Wait for the hash target to be rendered, retrying across a few animation
// frames. Cross-page navigation renders the destination after the route
// resolves, so the element is typically absent on the first check.
function waitForElement(hash: string, tries = 20): Promise<Element | null> {
  return new Promise((resolve) => {
    let attempts = 0
    const check = () => {
      const el = document.querySelector(hash)
      if (el || attempts >= tries) {
        resolve(el)
        return
      }
      attempts++
      requestAnimationFrame(check)
    }
    check()
  })
}

// Offset the scroll target by the fixed navbar height so the section heading
// is not hidden underneath it. Reads --nav-height if set, else a sensible default.
function scrollMarginTop(el: Element): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
  const navHeight = parseInt(raw, 10)
  return Number.isFinite(navHeight) ? navHeight : 80
}
