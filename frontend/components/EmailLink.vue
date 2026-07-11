<template>
  <a
    :href="href"
    :class="linkClass"
    :aria-label="mounted ? address : 'email address'"
    @click="reveal"
  >{{ display }}</a>
</template>

<script setup lang="ts">
/**
 * Renders the contact email without ever placing the literal address in the
 * server-rendered HTML, so it cannot be harvested by scrapers reading raw
 * markup. The address is assembled from parts on the client after hydration.
 */
const props = withDefaults(
  defineProps<{
    /** Local part before the @, defaults to the shared contact inbox. */
    user?: string
    /** Domain after the @. */
    domain?: string
    /** Classes applied to the anchor. */
    linkClass?: string
  }>(),
  {
    user: 'info',
    domain: 'campalta.se',
    linkClass: '',
  }
)

const mounted = ref(false)

// Full address, only ever built in the browser.
const address = computed(() =>
  mounted.value ? `${props.user}@${props.domain}` : ''
)

// href stays inert until mounted so SSR output carries no mailto: target.
const href = computed(() =>
  mounted.value ? `mailto:${address.value}` : undefined
)

// Human-readable placeholder for SSR / no-JS; replaced on hydration.
const display = computed(() =>
  mounted.value ? address.value : `${props.user} [at] ${props.domain}`
)

onMounted(() => {
  mounted.value = true
})

// Safety net: assemble on interaction even if hydration was delayed.
function reveal(event: MouseEvent) {
  if (!mounted.value) {
    mounted.value = true
    const target = event.currentTarget as HTMLAnchorElement
    target.setAttribute('href', `mailto:${props.user}@${props.domain}`)
  }
}
</script>
