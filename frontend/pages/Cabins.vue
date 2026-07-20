<template>
  <div id="screen">
    <section
      class="hero lg:bg-[url('/cabins/walkomen.webp')] bg-[url('/cabins/main/13b.webp')] bg-cover"
    ></section>
    <section class="block lg:hidden hero hero-cabins-mob"></section>
  </div>

  <!--to top-->
  <ToTop target="#sorting-widget" />
  <div class="">
    <div class="p-0 absolute top-0 h-[50vh] w-full z-10">
      <Navbar />
      <div
        class="h-[50vh] flex flex-col justify-center items-center text-center relative"
        id="hero-text"
      >
        <div class="absolute inset-0 bg-black/40" id="filter"></div>
        <p class="title text-white lg:text-9xl relative z-10">Cabins</p>
      </div>
    </div>
  </div>
  <section class="content-cabins">
    <div class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20">
      <!-- <p class="title-pages lg:text-[5rem] text-center">Cabin Accomodation</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line lg:w-1/4 w-1/2"></p>                        
                </div>-->
      <p class="barlow text-3xl lg:text-6xl mt-8 text-center">
        Experience the beauty of nature and the magic of Swedish Lapland!
      </p>
      <p class="text-xl mt-8">
        All cabins at Camp Alta are nestled within the beautiful pine forests of
        Swedish Lapland, offering stunning views of Lake Altajärvi.
      </p>
      <p class="text-xl mt-4">
        Our accommodations range from small cozy cabins for two to spacious
        houses suitable for up to 14 guests. All our cabins are equipped with
        electricity, electric heating, refrigerator, freezer, microwave, water
        kettle, Cable TV and WiFi.
      </p>
      <p class="text-xl mt-4">
        As we are a wilderness camp, some of our cabins do not have access to
        running water, and do not feature a kitchen and bathroom inside (D1-2-3,
        2A-B, 2C, 3, 4C, 4D, 5). Guests choosing to stay in these cabins can use
        our service building, conveniently located in the heart of the Camp,
        which offers access to a common kitchen and bathrooms with toilets and
        showers, separate for men and women.
      </p>
      <p class="text-xl mt-4">
        For your convenience, we also offer several cabins with access to
        running water, as well as a private kitchen and bathroom (6A-C, 6B,
        4A-4B, 13A, 13B, 14). Our largest cabins (13A, 13B, 14) feature a
        dishwasher and a drip coffee maker in addition to all amenities.
      </p>
      <p class="text-xl mt-4">
        With a variety of options available, we hope everyone can find
        accommodation suitable for their needs, whether you are looking for
        budget-friendly choices or maximum comfort. We are looking forward to
        having you.
      </p>

      <!-- Sorting Widget -->
      <div class="flex justify-center mt-8 mb-8" id="sorting-widget">
        <div
          class="flex flex-wrap justify-center gap-4 p-4 bg-white/80 rounded-lg shadow-md w-full lg:w-1/3"
          id="sorting-widget"
        >
          <div class="flex items-center gap-2">
            <label class="text-lg font-semibold text-primary">Sort by:</label>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              @click="setSortBy('price')"
              :class="[
                'px-4 py-2 rounded-full transition-all',
                sortBy === 'price'
                  ? 'bg-primary text-white'
                  : 'bg-[#f2b84b28] text-black hover:bg-secondary',
              ]"
            >
              Price
              {{ sortBy === "price" ? (sortOrder === "asc" ? "↑" : "↓") : "" }}
            </button>
            <button
              @click="setSortBy('size')"
              :class="[
                'px-4 py-2 rounded-full transition-all',
                sortBy === 'size'
                  ? 'bg-primary text-white'
                  : 'bg-[#f2b84b28] text-black hover:bg-secondary',
              ]"
            >
              Size
              {{ sortBy === "size" ? (sortOrder === "asc" ? "↑" : "↓") : "" }}
            </button>
            <button
              @click="setSortBy('facilities')"
              :class="[
                'px-4 py-2 rounded-full transition-all',
                sortBy === 'facilities'
                  ? 'bg-primary text-white'
                  : 'bg-[#f2b84b28] text-black hover:bg-secondary',
              ]"
            >
              Amenities
              {{
                sortBy === "facilities" ? (sortOrder === "asc" ? "↑" : "↓") : ""
              }}
            </button>
          </div>
        </div>
      </div>

      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 mt-14 justify-self"
        id="cabins-list"
      >
        <!-- Error state fallback -->
        <div
          v-if="!sortedCabins || sortedCabins.length === 0"
          class="col-span-full text-center py-8"
        >
          <p class="text-gray-600 text-lg">
            Sorry, there was an issue loading the cabins. Please refresh the
            page.
          </p>
          <button
            @click="
              () => {
                sortBy = '';
                sortOrder = 'asc';
              }
            "
            class="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            Reset Filters
          </button>
        </div>

        <!-- Normal cabin list -->
        <template v-for="cabin in sortedCabins" :key="cabin?.id || 'fallback'">
          <NuxtLink
            v-if="cabin && cabin.id && cabin.name"
            class="flex justify-center mb-12 mx-2 transition-transform hover:scale-105"
            :to="`/cabins/${cabin.id}`"
          >
            <div>
              <img
                :src="cabin.image || '/cabins/main/default.webp'"
                :alt="`${cabin.name} at Camp Alta Kiruna`"
                class="z-10 object-cover"
                loading="lazy"
                @error="
                  (e) => {
                    e.target.src = '/cabin.webp';
                  }
                "
              />
              <div class="pl-3">
                <p class="text-4xl caption mt-4">{{ cabin.name || "Cabin" }}</p>
                <p class="line my-3 w-3/5"></p>
                <p class="text-xl">
                  {{ cabin.description || "Cabin details" }}
                </p>
                <button class="btn flex bg-primary mt-6">
                  Know more
                  <img
                    src="/arrow-btn.svg"
                    alt=""
                    class="w-5 mt-1 ml-3"
                    @error="
                      (e) => {
                        e.target.style.display = 'none';
                      }
                    "
                  />
                </button>
              </div>
            </div>
          </NuxtLink>

          <!-- Fallback for malformed cabin data -->
          <div
            v-else
            class="flex justify-center mb-12 mx-2 p-4 border border-gray-300 rounded"
          >
            <p class="text-gray-500">Unable to load cabin data</p>
          </div>
        </template>
      </div>
      <div class="grid justify-center">
        <NuxtLink
          to="/booking/Booking-cabins"
          class="btn bg-primary mt-6 text-2xl"
          >Book here</NuxtLink
        >
      </div>
    </div>
    <div
      class="bg-bg1 px-2 lg:px-10 pb-10 lg:pb-20 text-center"
      id="tripadvisor"
    >
      <div class="justify-center flex p-3">
        <div
          id="TA_cdsscrollingravenarrow166"
          class="TA_cdsscrollingravenarrow"
        >
          <ul id="z8xKoncgG" class="TA_links hdjGZZlt7RF">
            <li id="LnUJQIe" class="55X3NJ">
              <a
                target="_blank"
                href="https://www.tripadvisor.se/Hotel_Review-g189815-d944749-Reviews-Camp_Alta_Kiruna-Kiruna_Norrbotten_County.html"
                ><img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg"
                  alt="TripAdvisor"
                  class="widEXCIMG"
                  id="CDSWIDEXCLOGO"
              /></a>
            </li>
          </ul>
        </div>
        <div
          id="TA_cdsratingsonlynarrow792"
          class="ml-4 TA_cdsratingsonlynarrow"
        >
          <ul id="eTnZAU" class="TA_links MI9uZQF">
            <li id="D2UnYGALWlS0" class="pI2fFc6dod2c">
              <a
                target="_blank"
                href="https://www.tripadvisor.com/Hotel_Review-g189815-d944749-Reviews-Camp_Alta-Kiruna_Norrbotten_County.html"
                ><img
                  src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                  alt="TripAdvisor"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Cabins in Kiruna - Wilderness Accommodation | Camp Alta',
  description: 'Choose from 13 cozy wilderness cabins near Kiruna, Swedish Lapland. From small 2-person cabins to large houses sleeping 14. WiFi, heating, kitchen, and sauna included.',
  path: '/Cabins',
  image: '/cabins/6ac/cabin_6ac_1.webp',
})

import { onMounted, onUnmounted, ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sorting state
const sortBy = ref("");
const sortOrder = ref("asc");

// Cabins data structure
const cabins = ref([
  {
    id: "cabin-D123",
    name: "Cabin D1-2-3",
    image: "/cabins/main/d.webp",
    size: 12,
    price: 900,
    capacity: 2,
    description: "Open plan, 12m2, 1 double bed",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-2ab",
    name: "Cabin 2A-B",
    image: "/cabins/main/2ab.webp",
    size: 12,
    price: 800,
    capacity: 2,
    description: "Open plan, 12m2, 1 double bed",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-2c",
    name: "Cabin 2C",
    image: "/cabins/main/2c.webp",
    size: 12,
    price: 900,
    capacity: 2,
    description: "Open plan, 12m2, 1 double bed",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-3",
    name: "Cabin 3",
    image: "/cabins/main/3.webp",
    size: 15,
    price: 1250,
    capacity: 3,
    description: "Open plan, 15m2, 1 double bed",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-4ab",
    name: "Cabin 4A-B",
    image: "/cabins/main/4ab.webp",
    size: 24,
    price: 1740,
    capacity: 4,
    description: "1 bedroom, 24m2, 2 bunk beds",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
      "kitchen",
      "bathroom",
    ],
    facilityScore: 7,
  },
  {
    id: "cabin-4c",
    name: "Cabin 4C",
    image: "/cabins/main/4c.webp",
    size: 15,
    price: 1550,
    capacity: 4,
    description: "Open plan, 15m2, 2 bunk beds",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-4d",
    name: "Cabin 4D",
    image: "/cabins/main/4d.webp",
    size: 15,
    price: 1400,
    capacity: 4,
    description: "Open plan, 15m2, 1 double bed and 1 sofa bed",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-5",
    name: "Cabin 5",
    image: "/cabins/main/5.webp",
    size: 24,
    price: 1650,
    capacity: 5,
    description:
      "Open plan, 24m2, 1 double bed, 1 single bed and 1 sofa bed",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
    ],
    facilityScore: 5,
  },
  {
    id: "cabin-6ac",
    name: "Cabin 6A-C",
    image: "/cabins/main/6ac.webp",
    size: 40,
    price: 1780,
    capacity: 6,
    description:
      "2 bedrooms, 40m2, 1 double bed, 1 bunk bed and 1 sofa bed, kitchen, bathroom",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
      "kitchen",
      "bathroom",
    ],
    facilityScore: 7,
  },
  {
    id: "cabin-6b",
    name: "Cabin 6B",
    image: "/cabins/main/6b.webp",
    size: 33,
    price: 1740,
    capacity: 6,
    description:
      "2 bedrooms, 33m2, 1 double bed, 1 bunk bed and 1 sofa bed, kitchen, toilet",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
      "kitchen",
      "toilet",
      "fireplace",
    ],
    facilityScore: 8,
  },
  {
    id: "cabin-13a",
    name: "Cabin 13A",
    image: "/cabins/main/13a.webp",
    size: 90,
    price: 5520,
    capacity: 13,
    description:
      "3 bedrooms, 90m2, 6 bunk beds and 1 single bed, kitchen, bathroom, fireplace",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
      "kitchen",
      "bathroom",
      "fireplace",
      "dishwasher",
      "coffee maker",
    ],
    facilityScore: 10,
  },
  {
    id: "cabin-13b",
    name: "Cabin 13B",
    image: "/cabins/main/13b.webp",
    size: 110,
    price: 5520,
    capacity: 13,
    description:
      "3 bedrooms, 110m2, 2 bunk beds, 9 single beds, kitchen, bathroom, fireplace",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
      "kitchen",
      "bathroom",
      "fireplace",
      "dishwasher",
      "coffee maker",
    ],
    facilityScore: 10,
  },
  {
    id: "cabin-14",
    name: "Cabin 14",
    image: "/cabins/main/14.webp",
    size: 162,
    price: 5950,
    capacity: 14,
    description: "4 bedrooms, 162m2, 7 bunk beds, kitchen, bathroom, toilet",
    facilities: [
      "refrigerator",
      "microwave",
      "water kettle",
      "cable TV",
      "wifi",
      "kitchen",
      "bathroom",
      "toilet",
      "dishwasher",
      "coffee maker",
    ],
    facilityScore: 10,
  },
]);

// Computed property for sorted cabins
const sortedCabins = computed(() => {
  try {
    // If no sorting is selected, return cabins in original order
    if (!sortBy.value) {
      return cabins.value;
    }

    const sorted = [...cabins.value].sort((a, b) => {
      let aValue, bValue;

      switch (sortBy.value) {
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "size":
          aValue = a.size;
          bValue = b.size;
          break;
        case "facilities":
          aValue = a.facilityScore;
          bValue = b.facilityScore;
          break;
        default:
          return 0; // No sorting
      }

      // Ensure values are numbers
      if (typeof aValue !== "number" || typeof bValue !== "number") {
        console.warn("Invalid sorting values detected:", {
          aValue,
          bValue,
          sortBy: sortBy.value,
        });
        return 0;
      }

      if (sortOrder.value === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    return sorted;
  } catch (error) {
    console.error("Error in sortedCabins computed:", error);
    // Return original cabins array if sorting fails
    return cabins.value;
  }
});

// Functions
const setSortBy = (newSortBy: string) => {
  try {
    // Validate input
    if (!newSortBy || typeof newSortBy !== "string") {
      console.warn("Invalid sortBy value:", newSortBy);
      return;
    }

    // Check if it's a valid sort option
    const validSortOptions = ["price", "size", "facilities"];
    if (!validSortOptions.includes(newSortBy)) {
      console.warn("Unknown sort option:", newSortBy);
      return;
    }

    if (sortBy.value === newSortBy) {
      // If clicking the same sort type, toggle the order
      toggleSortOrder();
    } else {
      // If clicking a different sort type, set it and default to ascending
      sortBy.value = newSortBy;
      sortOrder.value = "asc";
    }
  } catch (error) {
    console.error("Error in setSortBy:", error);
    // Reset to safe state
    sortBy.value = "";
    sortOrder.value = "asc";
  }
};

const toggleSortOrder = () => {
  try {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } catch (error) {
    console.error("Error in toggleSortOrder:", error);
    // Reset to safe state
    sortOrder.value = "asc";
  }
};

let ticking = false;
function parallax() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector(".hero") as HTMLElement;
      const heroText = document.querySelector(".hero-text") as HTMLElement;

      if (heroImage != null && heroText != null) {
        heroText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        const opacity = 1 - scrollPosition / heroImage.offsetHeight;
        heroImage.style.opacity = opacity.toString();
      }
      ticking = false;
    });
    ticking = true;
  }
}

onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
  loadTripAdvisorWidgets();
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});

// Inject the TripAdvisor wejs widget scripts. Each locates its container
// div by id (#TA_cdsscrollingravenarrow166 / #TA_cdsratingsonlynarrow792),
// which exists by the time onMounted runs. The static links inside the
// containers remain as the fallback if TripAdvisor fails to load.
const TRIPADVISOR_WIDGETS = [
  "https://www.jscache.com/wejs?wtype=cdsscrollingravenarrow&uniq=166&locationId=944749&lang=sv&border=true&display_version=2",
  "https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=792&locationId=944749&lang=en_US&border=true&display_version=2",
];

const loadTripAdvisorWidgets = () => {
  for (const src of TRIPADVISOR_WIDGETS) {
    // Guard against double-injection on repeated client-side navigation
    if (document.querySelector(`script[src="${src}"]`)) continue;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = () => {
      console.warn("Failed to load TripAdvisor widget:", src);
    };
    document.body.appendChild(script);
  }
};
</script>
