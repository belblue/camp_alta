// Shared shapes for the data-driven cabin pages
// (pages/cabins/[slug].vue and pages/cabins-lakeside/[slug].vue)

export interface CabinImage {
  src: string
  alt: string
  /** Exact class attribute of the <img>, kept verbatim from the original markup */
  imgClass: string
}

export interface GallerySlide {
  /** 1 image = plain slide, 2 images = side-by-side grid slide */
  images: CabinImage[]
  caption?: string
}

export interface InfoItem {
  /** Bold label including the trailing colon, e.g. 'Accommodates:' */
  label: string
  /** Text after the label, verbatim (leading space included) */
  text: string
  /** Area lines render a trailing <span class="superscript">2</span> */
  superscript?: true
}

export interface CabinJsonLd {
  name: string
  description: string
  occupancy: number
  floorSizeM2: number
  amenities: string[]
}

export interface CabinBase {
  /** Exact URL segment (case matters for canonicals), e.g. 'Cabin-13a' */
  slug: string
  heading: string
  titleLineClass: string
  intro: string[]
  infoLeft: InfoItem[]
  infoRight: InfoItem[]
  bookCtaLabel: string
  bookCtaTo: string
  /** Paragraphs after the booking CTA (linen / cleaning) */
  outro: string[]
  galleryDesktop: GallerySlide[]
  galleryMobile: GallerySlide[]
  seo: { title: string; description: string; image: string }
  jsonLd: CabinJsonLd
}

export interface CampCabin extends CabinBase {
  heroImage: CabinImage
  /** Override for the hero <img> wrapper div class (default 'mt-4 flex  justify-center') */
  heroWrapperClass?: string
}

export interface LakesideCabin extends CabinBase {
  heroCarousel: { id: string; images: CabinImage[] }
  bookCtaClass: string
  extrasCta?: { label: string; to: string; class: string }
  gettingHere: { mapsUrl: string; mapsLinkClass: string }
}
