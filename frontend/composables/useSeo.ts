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
    ogImageAlt: options.title,
    ogType: options.type || 'website',
    ogSiteName: 'Camp Alta Kiruna',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: options.title,
  })
}
