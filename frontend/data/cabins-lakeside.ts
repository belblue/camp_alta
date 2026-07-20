// Data for the Lakeside Aurora cabin pages, rendered by pages/cabins-lakeside/[slug].vue.
// All strings are transcribed verbatim from the original per-cabin pages.
import type { LakesideCabin } from '~/types/cabin'

// Lakeside fragment: Cabin-4e, Cabin-4f, Cabin-6d, Cabin-8b
//
// ============================================================================
// COMMON LAKESIDE SKELETON (section order, identical in all four pages):
//   <Navbar-lakeside /> -> <span id="top"> + <ToTop /> ->
//   1. Title block: div.bg-bg1 lg:px-10 pb-5 lg:pb-20 pt-10
//      - <p class="title lg:text-8xl text-center pb-4">Cabin XX</p>
//      - divider wrapper div.flex justify-center pb-8 with <p class="line w-1/2 lg:w-1/6">
//      - grid lg:grid-cols-2 grid-cols-1 justify-center:
//        left: div.lg:mr-10 text-left px-2 with intro <p class="text-xl mt-4"> paragraphs
//        right: div.mt-4 flex justify-center with the EXTERIOR AUTOPLAY SWIPER
//   2. Info section: div.bg-bg1 px-2 lg:px-10 pb-5 lg:pb-20
//      - <p class="title-info">Information about the cabin:</p>
//      - <p class="line w-2/3 lg:w-1/3 ml-2">
//      - grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center with two <ul>
//        (left ul class "ml-10 lg:ml-16 pt-4", right ul class "ml-10 lg:ml-16 lg:pt-4 md:pt-4")
//      - "linen included" + self-cleaning paragraphs in div.lg:mr-10 text-left px-2
//        (these come BEFORE the CTA — stored below as preCtaParagraphs; the `outro`
//        field holds only paragraphs AFTER the CTA, which exist only on Cabin-4f)
//      - Book here CTA in div.grid justify-center mt-10, NuxtLink to /Booking-lakeside
//   3. Desktop gallery: div.bg-bg1 lg:px-10 pb-5 lg:pb-20 hidden lg:block
//      (captionless swiper; single-image slides wrap img in div.flex justify-center,
//       two-image slides wrap in div.grid lg:grid-cols-2 with two flex-centred divs;
//       img class "h-screen", loading="lazy")
//   4. Phone gallery: div.bg-bg1 lg:px-10 pb-5 lg:pb-20 lg:hidden block
//      (all single-image slides in div.flex justify-center h-[90vh]; img class "object-cover")
//   5. Getting here / help section: div.bg-bg1 lg:px-10 pb-10 lg:pb-20
//      - "Getting here": address para with Google-Maps NuxtLink, reception para with a
//        SECOND Google-Maps NuxtLink (captured as extra field receptionMapsUrl), shuttle
//        para, "Book shuttle" CTA to /booking/Booking-LSextras in div.grid justify-center my-5,
//        summer para <p class="text-xl mt-8 ml-2">
//      - "Need help with the booking?" with <EmailLink />
//   <Footer />
//
// EXTERIOR SWIPER (reference page Cabin-4e; identical props on all four):
//   <swiper id="XX-ext-swiper" class="z-0 w-full"
//     :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
//     :rewind="true" :lazy="true" :navigation="true"
//     :autoplay="{ delay: 4000, disableOnInteraction: true }"
//     :keyboard="{ enabled: true }"
//     :pagination="{ dynamicBullets: true, clickable: true }">
//   Slides are bare <img ... loading="lazy"> (no wrapper div, no caption).
//
// GALLERY SWIPERS (desktop AND mobile, all four pages): class="z-0", same modules array
//   as the exterior swiper, :rewind="true" :lazy="true" :navigation="true"
//   :keyboard="{ enabled: true }" :pagination="{ dynamicBullets: true, clickable: true }"
//   — NO :autoplay prop (only the exterior swiper autoplays). No captions on any slide.
//
// PER-PAGE <style> BLOCK (only content in every page's style block; digit escaped in CSS):
//   /* Exterior carousel styles */
//   #\3X x-ext-swiper { width: 100%; }              (e.g. #\34 e-ext-swiper for 4e,
//   #\3X x-ext-swiper .swiper-slide {                #\34 f, #\36 d, #\38 b)
//     display: flex; justify-content: center; align-items: center; }
//
// SCRIPT (all four): useSeo + useHead JSON-LD (LodgingBusiness > containsPlace
//   Accommodation), then swiper imports and empty onMounted. 4e/4f use double quotes
//   in imports; 6d/8b use single quotes (formatting only).
// ============================================================================

export const lakesideCabins: LakesideCabin[] = [
  // DEVIATION (Cabin-4e): exterior-swiper imgs use class "w-full object-cover" —
  //   NO aspect-[6/4.5] (the other three pages have "w-full aspect-[6/4.5] object-cover").
  // DEVIATION (Cabin-4e): bookCtaClass ends with "font-bold" — the other three
  //   "Book here" CTAs have no font-bold (and 4f additionally reorders the classes).
  // DEVIATION (Cabin-4e): both interior galleries END with an exterior image
  //   (4e_ext2.webp, alt "Cabin exterior") — the other three pages' galleries are
  //   interior-only.
  // DEVIATION (Cabin-4e): desktop gallery skips 4e_9.webp; mobile includes it.
  // DEVIATION (Cabin-4e): intro paragraph 2 contains the verbatim typo
  //   "a sofa bed in the living room located in the living room".
  // DEVIATION (Cabin-4e): JSON-LD amenities include 'Private bathroom' (7 items).
  {
    slug: 'Cabin-4e',
    heading: 'Cabin 4E',
    titleLineClass: 'line w-1/2 lg:w-1/6',
    intro: [
      "Welcome to this charming cabin, offering breathtaking views of Lake Alttajärvi. Unwind on your private balcony and immerse yourself in the tranquil beauty of Swedish Lapland with a hot drink. It's the perfect escape.",
      'This cozy cabin is suitable for up to 4 guests. It features a bunk bed in the bedroom and a sofa bed in the living room located in the living room that can sleep two additional guests. A compact kitchen is equipped with a microwave, fridge, freezer, stovetop, toaster, and a french press, as well as pots, pans and all necessary kitchen utensils. This cabin has its own bathroom with toilet and shower inside the cabin.',
      "With a lovely balcony, guests can relax and enjoy the picturesque view of the lake, providing a charming spot to enjoy a cup of coffee while admiring the peaceful lake views. Whether it's bathed in sunshine or covered in snow. The accommodation also provides a wood-fired sauna and fireplace.",
      'Located in a remote area, this cabin provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Lakeside Aurora cabins.',
    ],
    heroCarousel: {
      id: '4e-ext-swiper',
      images: [
        { src: '/lakeside/cabins/4e/4e_ext2.webp', alt: 'Cabin exterior', imgClass: 'w-full object-cover' },
        { src: '/lakeside/cabins/4e/4e_ext4.webp', alt: 'Cabin exterior', imgClass: 'w-full object-cover' },
        { src: '/lakeside/cabins/4e/4e_ext5.webp', alt: 'Cabin exterior', imgClass: 'w-full object-cover' },
      ],
    },
    infoLeft: [
      { label: 'Accommodates:', text: ' 4 guests' },
      { label: 'Area:', text: ' 22m', superscript: true as const },
      { label: 'Bedrooms:', text: ' The cabin has one bedroom which has a bunk bed and a living room which has a sofa that doubles into a sofa bed, which can sleep two other guests.' },
      { label: 'Cabin amenities:', text: ' Refrigerator, water kettle, coffee maker, cable TV, electric heater, microwave, cutlery, pots and pans.' },
      { label: 'Shower & WC:', text: ' Inside the cabin.' },
      { label: 'Kitchen:', text: ' Inside the cabin.' },
    ],
    infoRight: [
      { label: 'WIFI:', text: ' Available in the cabin.' },
      { label: 'Parking:', text: ' Available free of charge.' },
      { label: 'Pet policy:', text: ' Unfortunately, we cannot allow pets in the cabin due to allergy concerns.' },
      { label: 'Check in:', text: ' 15:00 pm' },
      { label: 'Latest Check out:', text: ' 11:00 am' },
    ],
    // Rendered between the info grid and the Book-here CTA (see skeleton note above)
    preCtaParagraphs: [
      'Bed linen and towels are included in the price of the cabin.',
      'To maintain affordable prices and to make our accommodation accessible to everyone, we are a self-cleaning accommodation. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 540 SEK. Cleaning products are provided in the cabin.',
    ],
    bookCtaLabel: 'Book here',
    bookCtaTo: '/Booking-lakeside',
    bookCtaClass: 'btn bg-tertiary text-white mt-6 mb-6 text-xl py-2 px-20 font-bold',
    outro: [],
    extrasCta: {
      label: 'Book shuttle',
      to: '/booking/Booking-LSextras',
      class: 'btn bg-tertiary text-white mt-6 text-xl py-2 px-20 font-bold',
    },
    galleryDesktop: [
      { images: [{ src: '/lakeside/cabins/4e/4e_3.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [
        { src: '/lakeside/cabins/4e/4e_1.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/4e/4e_2.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
      { images: [{ src: '/lakeside/cabins/4e/4e_4.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_5.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_6.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [
        { src: '/lakeside/cabins/4e/4e_7.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/4e/4e_8.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
      { images: [
        { src: '/lakeside/cabins/4e/4e_10.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/4e/4e_11.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
      { images: [{ src: '/lakeside/cabins/4e/4e_ext2.webp', alt: 'Cabin exterior', imgClass: 'h-screen' }] },
    ],
    galleryMobile: [
      { images: [{ src: '/lakeside/cabins/4e/4e_1.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_2.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_3.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_4.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_5.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_6.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_7.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_8.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_9.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_10.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_11.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4e/4e_ext2.webp', alt: 'Cabin exterior', imgClass: 'object-cover' }] },
    ],
    gettingHere: {
      mapsUrl: 'https://maps.app.goo.gl/HDNHRPZfkkJxdeja9',
      receptionMapsUrl: 'https://maps.app.goo.gl/DMWccF29NXfUd7Xb7',
      mapsLinkClass: 'text-tertiary font-bold',
    },
    seo: {
      title: 'Cabin 4E - Lakeside Aurora - 22m2, Sleeps 4 | Camp Alta Kiruna',
      description: 'Charming lakeside cabin with breathtaking views of Lake Altajarvi. Features a bunk bed, sofa bed, private bathroom, fully equipped kitchen and balcony. Sleeps 4 guests at Lakeside Aurora, Camp Alta Kiruna.',
      image: '/lakeside/cabins/4e/4e_ext2.webp',
    },
    jsonLd: {
      name: 'Cabin 4E - Lakeside Aurora',
      description: 'Charming lakeside cabin with breathtaking views of Lake Altajarvi. Features a bunk bed, sofa bed, private bathroom, fully equipped kitchen and balcony. Sleeps 4 guests at Lakeside Aurora, Camp Alta Kiruna.',
      occupancy: 4,
      floorSizeM2: 22,
      amenities: ['WiFi', 'Heating', 'Fridge', 'Microwave', 'TV', 'Kitchen', 'Private bathroom'],
    },
  },

  // DEVIATION (Cabin-4f): intro wrapper div has an extra id attribute: id="intro-4f"
  //   (<div class="lg:mr-10 text-left px-2" id="intro-4f">) — unique to this page.
  // DEVIATION (Cabin-4f): the intro contains a large HTML comment block (commented-out
  //   old camp-style paragraphs mentioning "110 SEK" firewood etc.) — not rendered.
  // DEVIATION (Cabin-4f): bookCtaClass has different class ORDER and no font-bold:
  //   "btn bg-tertiary mt-6 mb-6 text-white text-xl py-2 px-20".
  // DEVIATION (Cabin-4f): ONLY page with content AFTER the Book-here CTA — a duplicated
  //   linen/self-cleaning block in a wrapper WITHOUT px-2 (<div class="lg:mr-10 text-left">);
  //   its second paragraph says "our camp accessible to everyone, we are a self-cleaning
  //   camp" instead of "accommodation" (captured in `outro`).
  // DEVIATION (Cabin-4f): infoLeft says "Accommodates: 2 guests" while SEO/JSON-LD say
  //   sleeps 4 — transcribed verbatim.
  // DEVIATION (Cabin-4f): bed item label is "Bed:" (not "Bedrooms:"); "WC & showers:"
  //   text is lowercase and unterminated (" situated 10 meters from the cabin").
  // DEVIATION (Cabin-4f): infoRight has an extra leading "Heating:" item (6 items), and
  //   WIFI / Parking / Pet policy items have NO trailing full stop (unlike 4e/6d/8b).
  // DEVIATION (Cabin-4f): exterior swiper has 7 slides (most of the four); imgs use
  //   aspect-[6/4.5] ("w-full aspect-[6/4.5] object-cover").
  // DEVIATION (Cabin-4f): JSON-LD amenities are only the base 6 (no Private bathroom /
  //   Sauna etc.).
  {
    slug: 'Cabin-4f',
    heading: 'Cabin 4F',
    titleLineClass: 'line w-1/2 lg:w-1/6',
    intro: [
      "Welcome to this charming cabin, offering breathtaking views of Lake Alttajärvi. Unwind on your private balcony and immerse yourself in the tranquil beauty of Swedish Lapland with a hot drink. It's the perfect escape.",
      'This cozy cabin is suitable for up to 4 guests. It features a double bed in the bedroom and a sofa bed in the living room where two additional guests can sleep. A compact kitchen is equipped with a microwave, fridge, freezer, stovetop, toaster, and a french press, as well as pots, pans and all necessary kitchen utensils. A private bathroom and toilet dedicated to this cabin is located only 10 meters from the cabin.',
      "With a lovely balcony, guests can relax and enjoy the picturesque view of the lake, providing a charming spot to enjoy a cup of coffee while admiring the peaceful lake views. Whether it's bathed in sunshine or covered in snow. The accommodation also provides a wood-fired sauna and fireplace.",
      'Located in a remote area, this cabin provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Lakeside Aurora cabins.',
    ],
    heroCarousel: {
      id: '4f-ext-swiper',
      images: [
        { src: '/lakeside/cabins/4f/4f_main.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/4f/4f_ext1.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/4f/4f_ext2.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/4f/4f_ext3.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/4f/4f_ext4.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/4f/4f_ext5.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/4f/4f_ext6.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
      ],
    },
    infoLeft: [
      { label: 'Accommodates:', text: ' 2 guests' },
      { label: 'Area:', text: ' 22m', superscript: true as const },
      { label: 'Bed:', text: ' The cabin has one bedroom which has a double bed and a living room which has a sofa that doubles into a sofa bed, which can sleep two other guests.' },
      { label: 'Cabin amenities:', text: ' Refrigerator, water kettle, coffee maker, cable TV, electric heater, microwave, cutlery, pots and pans.' },
      { label: 'WC & showers:', text: ' situated 10 meters from the cabin' },
      { label: 'Kitchen:', text: ' Inside the cabin.' },
    ],
    infoRight: [
      { label: 'Heating:', text: ' The cabin is heated by electric heating, this ensures a comfortable stay all year round.' },
      { label: 'WIFI:', text: ' Available in the cabin' },
      { label: 'Parking:', text: ' Available free of charge' },
      { label: 'Pet policy:', text: ' Unfortunately, we cannot allow pets in the cabin due to allergy concerns' },
      { label: 'Check in:', text: ' 15:00 pm' },
      { label: 'Latest Check out:', text: ' 11:00 am' },
    ],
    preCtaParagraphs: [
      'Bed linen and towels are included in the price of the cabin.',
      'To maintain affordable prices and to make our accommodation accessible to everyone, we are a self-cleaning accommodation. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 540 SEK. Cleaning products are provided in the cabin.',
    ],
    bookCtaLabel: 'Book here',
    bookCtaTo: '/Booking-lakeside',
    bookCtaClass: 'btn bg-tertiary mt-6 mb-6 text-white text-xl py-2 px-20',
    // Rendered AFTER the CTA in wrapper <div class="lg:mr-10 text-left"> (no px-2)
    outro: [
      'Bed linen and towels are included in the price of the cabin.',
      'To maintain affordable prices and to make our camp accessible to everyone, we are a self-cleaning camp. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 540 SEK. Cleaning products are provided in the cabin.',
    ],
    extrasCta: {
      label: 'Book shuttle',
      to: '/booking/Booking-LSextras',
      class: 'btn bg-tertiary text-white mt-6 text-xl py-2 px-20 font-bold',
    },
    galleryDesktop: [
      { images: [{ src: '/lakeside/cabins/4f/4f_1.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_2.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_3.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_4.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_5.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_6.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [
        { src: '/lakeside/cabins/4f/4f_7.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/4f/4f_8.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
      { images: [
        { src: '/lakeside/cabins/4f/4f_9.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/4f/4f_10.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
      { images: [{ src: '/lakeside/cabins/4f/4f_11.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
    ],
    galleryMobile: [
      { images: [{ src: '/lakeside/cabins/4f/4f_1.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_2.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_3.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_4.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_5.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_6.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_7.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_8.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_9.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_10.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/4f/4f_11.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
    ],
    gettingHere: {
      mapsUrl: 'https://maps.app.goo.gl/HDNHRPZfkkJxdeja9',
      receptionMapsUrl: 'https://maps.app.goo.gl/DMWccF29NXfUd7Xb7',
      mapsLinkClass: 'text-tertiary font-bold',
    },
    seo: {
      title: 'Cabin 4F - Lakeside Aurora - 22m2, Sleeps 4 | Camp Alta Kiruna',
      description: 'Charming lakeside cabin with breathtaking views of Lake Altajarvi. Features a double bed, sofa bed, fully equipped kitchen and private balcony. Sleeps up to 4 guests at Lakeside Aurora, Camp Alta Kiruna.',
      image: '/lakeside/cabins/4f/4f_main.webp',
    },
    jsonLd: {
      name: 'Cabin 4F - Lakeside Aurora',
      description: 'Charming lakeside cabin with breathtaking views of Lake Altajarvi. Features a double bed, sofa bed, fully equipped kitchen and private balcony. Sleeps up to 4 guests at Lakeside Aurora, Camp Alta Kiruna.',
      occupancy: 4,
      floorSizeM2: 22,
      amenities: ['WiFi', 'Heating', 'Fridge', 'Microwave', 'TV', 'Kitchen'],
    },
  },

  // DEVIATION (Cabin-6d): older single-line formatting with DOUBLE SPACES inside some
  //   class attributes: title section div class "bg-bg1  lg:px-10 pb-5 lg:pb-20 pt-10"
  //   and title p class "title lg:text-8xl  text-center pb-4"; left info ul class has a
  //   trailing space ("ml-10 lg:ml-16 pt-4 "); Getting-here paragraphs use class
  //   "text-xl pt-4 ml-2 " (trailing space); "Need help with the booking? " heading has
  //   a trailing space; summer paragraph is <p class="text-xl mt-8 ml-2" > with a
  //   leading space in its text (" During the summer months, ...").
  // DEVIATION (Cabin-6d): Google-Maps links use class "text-primary font-bold"
  //   (all other three pages use "text-tertiary font-bold").
  // DEVIATION (Cabin-6d): infoLeft has 7 items — separate "Shower:" and "WC:" items
  //   instead of a combined "Shower & WC:"; "WC:" text has the verbatim typo
  //   " situated adjacent to the cabin.s".
  // DEVIATION (Cabin-6d): cleaning fee is 790 SEK.
  // DEVIATION (Cabin-6d): interior gallery images are named 6d_insideN and SKIP
  //   6d_inside3 (desktop: 14 singles + final pair inside16/17; mobile: 16 singles).
  // DEVIATION (Cabin-6d): jsonLd description differs from seo description — it drops
  //   the trailing ", Swedish Lapland" (ends "...Camp Alta Kiruna.").
  // DEVIATION (Cabin-6d): JSON-LD amenities add 'Sauna' (7 items).
  {
    slug: 'Cabin-6d',
    heading: 'Cabin 6D',
    titleLineClass: 'line w-1/2 lg:w-1/6',
    intro: [
      "This cabin is located in a stunning setting by Lake Alttajärvi, offering tranquility and beautiful views all year round. With room for up to 6 guests, it's ideal for families or groups who want comfort, nature and authentic Lapland charm.",
      'The cabin has a spacious open-plan lounge and kitchen area which is furnished with a dining table, comfortable sofa that doubles into a bed, and a TV. The kitchen provides all necessary amenities, including pots, pans, plates, kitchen utensils, a microwave, fridge, freezer, and coffee maker. The sleeping arrangements include one bunk bed, a double bed and a sofa bed that can comfortably accommodate two guests.',
      "With a lovely balcony, guests can relax and enjoy the picturesque view of the lake, providing a charming spot to enjoy a cup of coffee while admiring the peaceful lake views. Whether it's bathed in sunshine or covered in snow. The cabin also has a sauna inside the cabin.",
      'Located in a remote area, this cabin provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Lakeside Aurora cabins.',
    ],
    heroCarousel: {
      id: '6d-ext-swiper',
      images: [
        { src: '/lakeside/cabins/6d/6d_main.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/6d/6d_ext1.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/6d/6d_ext2.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/6d/6d_ext3.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/6d/6d_ext4.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
      ],
    },
    infoLeft: [
      { label: 'Accommodates:', text: ' 6 guests' },
      { label: 'Area:', text: ' 50m', superscript: true as const },
      { label: 'Bedrooms:', text: ' The cabin has an open space layout with one bunk bed, a double bed and a sofa bed that can comfortably accommodate two guests.' },
      { label: 'Cabin amenities:', text: ' Sauna, Refrigerator, water kettle, coffee maker, cable TV, electric heater, microwave, cutlery, pots and pans.' },
      { label: 'Shower:', text: ' Inside the cabin, alongside the sauna.' },
      { label: 'WC:', text: ' situated adjacent to the cabin.s' },
      { label: 'Kitchen:', text: ' Inside the cabin.' },
    ],
    infoRight: [
      { label: 'WIFI:', text: ' Available in the cabin.' },
      { label: 'Parking:', text: ' Available free of charge.' },
      { label: 'Pet policy:', text: ' Unfortunately, we cannot allow pets in the cabin due to allergy concerns.' },
      { label: 'Check in:', text: ' 15:00 pm' },
      { label: 'Latest Check out:', text: ' 11:00 am' },
    ],
    preCtaParagraphs: [
      'Bed linen and towels are included in the price of the cabin.',
      'To maintain affordable prices and to make our accommodation accessible to everyone, we are a self-cleaning accommodation. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 790 SEK. Cleaning products are provided in the cabin.',
    ],
    bookCtaLabel: 'Book here',
    bookCtaTo: '/Booking-lakeside',
    bookCtaClass: 'btn bg-tertiary text-white mt-6 mb-6 text-xl py-2 px-20',
    outro: [],
    extrasCta: {
      label: 'Book shuttle',
      to: '/booking/Booking-LSextras',
      class: 'btn bg-tertiary text-white mt-6 text-xl py-2 px-20 font-bold',
    },
    galleryDesktop: [
      { images: [{ src: '/lakeside/cabins/6d/6d_inside1.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside2.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside4.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside5.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside6.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside7.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside8.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside9.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside10.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside11.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside12.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside13.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside14.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside15.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [
        { src: '/lakeside/cabins/6d/6d_inside16.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/6d/6d_inside17.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
    ],
    galleryMobile: [
      { images: [{ src: '/lakeside/cabins/6d/6d_inside1.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside2.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside4.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside5.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside6.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside7.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside8.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside9.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside10.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside11.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside12.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside13.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside14.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside15.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside16.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/6d/6d_inside17.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
    ],
    gettingHere: {
      mapsUrl: 'https://maps.app.goo.gl/HDNHRPZfkkJxdeja9',
      receptionMapsUrl: 'https://maps.app.goo.gl/DMWccF29NXfUd7Xb7',
      mapsLinkClass: 'text-primary font-bold',
    },
    seo: {
      title: 'Cabin 6D - Lakeside Aurora - 50m2, Sleeps 6 | Camp Alta Kiruna',
      description: 'Spacious lakeside cabin by Lake Altajarvi with sauna, fully equipped kitchen, bunk bed, double bed and sofa bed. Sleeps up to 6 guests at Lakeside Aurora, Camp Alta Kiruna, Swedish Lapland.',
      image: '/lakeside/cabins/6d/6d_main.webp',
    },
    jsonLd: {
      name: 'Cabin 6D - Lakeside Aurora',
      description: 'Spacious lakeside cabin by Lake Altajarvi with sauna, fully equipped kitchen, bunk bed, double bed and sofa bed. Sleeps up to 6 guests at Lakeside Aurora, Camp Alta Kiruna.',
      occupancy: 6,
      floorSizeM2: 50,
      amenities: ['WiFi', 'Heating', 'Fridge', 'Microwave', 'TV', 'Kitchen', 'Sauna'],
    },
  },

  // DEVIATION (Cabin-8b): same older formatting quirks as Cabin-6d — double spaces in
  //   "bg-bg1  lg:px-10 pb-5 lg:pb-20 pt-10" and "title lg:text-8xl  text-center pb-4",
  //   trailing space in left info ul class ("ml-10 lg:ml-16 pt-4 "), Getting-here
  //   paragraph classes "text-xl pt-4 ml-2 ", "Need help with the booking? " heading
  //   trailing space, and summer paragraph <p class="text-xl mt-8 ml-2" > with leading
  //   space in text — but maps links here are the standard "text-tertiary font-bold".
  // DEVIATION (Cabin-8b): intro paragraph 4 ends "at Lakeside aurora cabins."
  //   (lowercase "aurora") — verbatim.
  // DEVIATION (Cabin-8b): Bedrooms item has verbatim spacing "two bunk beds , Bedroom 3".
  // DEVIATION (Cabin-8b): infoRight has the extra leading "Heating:" item (6 items,
  //   like 4f but WITH trailing full stops on WIFI/Parking/Pet policy).
  // DEVIATION (Cabin-8b): Cabin amenities include "oven".
  // DEVIATION (Cabin-8b): cleaning fee is 880 SEK.
  // DEVIATION (Cabin-8b): galleries use 8b_inN images and SKIP 8b_in7 (desktop: 10
  //   singles + final pair in12/in13; mobile: 12 singles).
  // DEVIATION (Cabin-8b): jsonLd description drops the trailing ", Swedish Lapland"
  //   present in the seo description (same pattern as 6d).
  // DEVIATION (Cabin-8b): largest JSON-LD amenity list (10 items) incl. Private
  //   bathroom, Fireplace, Sauna, Oven.
  {
    slug: 'Cabin-8b',
    heading: 'Cabin 8B',
    titleLineClass: 'line w-1/2 lg:w-1/6',
    intro: [
      "This spacious cabin is located in a stunning setting by Lake Alttajärvi, offering tranquility and beautiful views all year round. With room for up to 8 guests, it's ideal for families or groups who want comfort, nature and authentic Lapland charm.",
      'The cabin features three bedrooms, a living room, a dining area, and its own bathroom with a toilet and shower. The fully equipped kitchen includes pots, pans, plates, and all necessary kitchen utensils, such as a microwave, oven, fridge, freezer, and coffee maker. The first bedroom has one bunk bed, the second bedroom has two bunk beds and the third bedroom has one bunk bed. The spacious open-plan lounge and kitchen area includes a dining table, comfortable sofa, wood-burning fireplace, and a TV.',
      "With a lovely balcony, guests can relax and enjoy the picturesque view of the lake, whether it's bathed in sunshine or covered in snow. The accommodation also provides a wood-fired sauna and fireplace.",
      'Located in a remote area, this cabin provides a perfect opportunity to witness the breathtaking Northern Lights in the winter or the enchanting Midnight Sun in the summer. Come and enjoy a tranquil retreat in nature at Lakeside aurora cabins.',
    ],
    heroCarousel: {
      id: '8b-ext-swiper',
      images: [
        { src: '/lakeside/cabins/8b/8b_main.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/8b/8b_ext1.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/8b/8b_ext2.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/8b/8b_ext3.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/8b/8b_ext4.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
        { src: '/lakeside/cabins/8b/8b_ext5.webp', alt: 'Cabin exterior', imgClass: 'w-full aspect-[6/4.5] object-cover' },
      ],
    },
    infoLeft: [
      { label: 'Accommodates:', text: ' 8 guests' },
      { label: 'Area:', text: ' 80m', superscript: true as const },
      { label: 'Bedrooms:', text: ' The cabin has 3 bedrooms, Bedroom 1 has one bunk bed, Bedroom 2 has two bunk beds , Bedroom 3 has one bunk bed.' },
      { label: 'Cabin amenities:', text: ' Refrigerator, water kettle, coffee maker, cable TV, electric heater, microwave, oven, cutlery, pots and pans.' },
      { label: 'Shower & WC:', text: ' Inside the cabin.' },
      { label: 'Kitchen:', text: ' Inside the cabin.' },
    ],
    infoRight: [
      { label: 'Heating:', text: ' The cabin is heated by electric heating, this ensures a comfortable stay all year round.' },
      { label: 'WIFI:', text: ' Available in the cabin.' },
      { label: 'Parking:', text: ' Available free of charge.' },
      { label: 'Pet policy:', text: ' Unfortunately, we cannot allow pets in the cabin due to allergy concerns.' },
      { label: 'Check in:', text: ' 15:00 pm' },
      { label: 'Latest Check out:', text: ' 11:00 am' },
    ],
    preCtaParagraphs: [
      'Bed linen and towels are included in the price of the cabin.',
      'To maintain affordable prices and to make our accommodation accessible to everyone, we are a self-cleaning accommodation. You are expected to restore your cabin to the same condition you found it in at your arrival or, alternatively, you can order our cleaning service for a fee of 880 SEK. Cleaning products are provided in the cabin.',
    ],
    bookCtaLabel: 'Book here',
    bookCtaTo: '/Booking-lakeside',
    bookCtaClass: 'btn bg-tertiary text-white mt-6 mb-6 text-xl py-2 px-20',
    outro: [],
    extrasCta: {
      label: 'Book shuttle',
      to: '/booking/Booking-LSextras',
      class: 'btn bg-tertiary text-white mt-6 text-xl py-2 px-20 font-bold',
    },
    galleryDesktop: [
      { images: [{ src: '/lakeside/cabins/8b/8b_in1.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in2.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in3.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in4.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in5.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in6.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in8.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in9.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in10.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in11.webp', alt: 'Cabin interior', imgClass: 'h-screen' }] },
      { images: [
        { src: '/lakeside/cabins/8b/8b_in12.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
        { src: '/lakeside/cabins/8b/8b_in13.webp', alt: 'Cabin interior', imgClass: 'h-screen' },
      ] },
    ],
    galleryMobile: [
      { images: [{ src: '/lakeside/cabins/8b/8b_in1.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in2.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in3.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in4.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in5.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in6.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in8.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in9.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in10.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in11.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in12.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
      { images: [{ src: '/lakeside/cabins/8b/8b_in13.webp', alt: 'Cabin interior', imgClass: 'object-cover' }] },
    ],
    gettingHere: {
      mapsUrl: 'https://maps.app.goo.gl/HDNHRPZfkkJxdeja9',
      receptionMapsUrl: 'https://maps.app.goo.gl/DMWccF29NXfUd7Xb7',
      mapsLinkClass: 'text-tertiary font-bold',
    },
    seo: {
      title: 'Cabin 8B - Lakeside Aurora - 80m2, Sleeps 8 | Camp Alta Kiruna',
      description: 'Spacious lakeside cabin with 3 bedrooms, private bathroom, fully equipped kitchen with oven, wood-burning fireplace and sauna. Sleeps up to 8 guests at Lakeside Aurora, Camp Alta Kiruna, Swedish Lapland.',
      image: '/lakeside/cabins/8b/8b_main.webp',
    },
    jsonLd: {
      name: 'Cabin 8B - Lakeside Aurora',
      description: 'Spacious lakeside cabin with 3 bedrooms, private bathroom, fully equipped kitchen with oven, wood-burning fireplace and sauna. Sleeps up to 8 guests at Lakeside Aurora, Camp Alta Kiruna.',
      occupancy: 8,
      floorSizeM2: 80,
      amenities: ['WiFi', 'Heating', 'Fridge', 'Microwave', 'TV', 'Kitchen', 'Private bathroom', 'Fireplace', 'Sauna', 'Oven'],
    },
  },
]
