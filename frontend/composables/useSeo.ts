export function useSeo(options: {
  title: string
  description: string
  path: string
  image?: string
  type?: string
}) {
  const baseUrl = 'https://campalta.net'
  const canonicalUrl = `${baseUrl}${options.path}`
  const image = options.image
    ? `${baseUrl}${options.image}`
    : 'https://campalta.net/index/index_3.webp'

  useHead({
    title: options.title,
    link: [
      { rel: 'canonical', href: canonicalUrl, key: 'canonical' }
    ],
  })

  useSeoMeta({
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: canonicalUrl,
    ogImage: image,
    ogType: options.type || 'website',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
  })
}
