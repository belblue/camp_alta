<template>
  <div id="screen">
    <section class="hero bg-[url('/tours/northern/northern_8.webp')] bg-cover">
      <!--bg-[url('/tours/northern/northern_8.webp')]-->
    </section>

    <!--to top-->
    <span id="top"></span>
    <ToTop />
    <div class="">
      <div class="p-0 absolute top-0 h-[50vh] w-full z-10">
        <Navbar />
        <div
          class="h-[60vh] flex flex-col justify-center items-center text-center"
        >
          <p class="title md:text-8xl text-white">
            Northern lights tour to Abisko
          </p>
        </div>
      </div>
    </div>
    <section class="content-cabins">
      <div class="bg-bg1 px-2 lg:px-10 pb-10">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center mt-4">
          <div class="lg:mr-10 md:pt-10">
            <p class="text-xl lg:mt-8 text-left">
              Join us on an exciting night hunt for one of the world’s most
              extraordinary natural phenomena!
            </p>
            <p class="text-xl lg:mt-8 text-left mt-4">
              Spend an unforgettable evening under the Northern Lights in Abisko
              National Park, one of the best places on Earth to witness the
              Aurora Borealis. Our experienced guides will take you to prime
              viewing spots where you'll have a high chance of seeing the
              magical lights dance across the sky in vibrant hues of green,
              pink, and purple.
            </p>
            <div class="md:hidden my-4 flex justify-center">
              <img
                src="/tours/northern/northern_12.webp"
                alt="Spectacular Northern Lights Aurora Borealis dancing over snow-covered landscape in Abisko National Park"
                class=""
              />
            </div>
            <p class="text-xl lg:mt-8 text-left">
              Throughout the tour, our guides will share fascinating insights
              into the science and folklore of the Northern Lights, adding an
              educational dimension to your experience. They’ll also make sure
              to capture your special moments on camera, providing high-quality
              photos after the tour. As you explore Abisko’s unique
              landscapes—snow-covered forests, frozen lakes, and breathtaking
              mountain views—you’ll be fully immersed in the natural beauty of
              the Arctic night.
            </p>
            <p class="text-xl lg:mt-8 text-left">
              We take care of every detail, from transportation and professional
              winter gear to snacks and warm drinks, so you can relax and focus
              on the wonders around you.
            </p>
          </div>
          <div class="mt-4 hidden md:flex justify-center w-full h-full">
            <img
              src="/tours/northern/northern_2.webp"
              alt="Tourists experiencing Northern Lights tour in Swedish Lapland with professional guide and winter equipment"
              class="object-cover"
            />
          </div>
          <div class="mt-4 md:hidden flex justify-center w-full h-[70vh]">
            <img
              src="/tours/northern/northern_8.webp"
              alt="Abisko National Park winter landscape during Northern Lights hunting expedition from Camp Alta Kiruna"
              class="object-cover"
            />
          </div>
        </div>
      </div>

      <div class="bg-bg2 px-2 lg:px-10 pb-10">
        <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
          <div
            class="lg:flex md:hidden hidden mt-4 justify-center w-full h-full"
          >
            <img
              src="/tours/northern/northern_6.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <!--<div class="lg:flex mt-4 hidden  justify-center">
                            <img src="/tours/northern/northern_6.webp" alt="" class="">
                        </div>-->
          <div class="lg:ml-10 md:pt-10">
            <p class="title-info pl-0">Tour details</p>
            <p class="line w-1/2"></p>
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Starting point:</span> Camp Alta
              (Jullebovägen 2, Kiruna)
            </p>
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Time: </span>Everyday at 6:00 PM – 1:00 AM
            </p>
            <!--<p class="text-lg text-left">*from the 10th of March, the tour starts at 7:30 PM</p>-->
            <p class="text-xl mt-4 text-left">
              <span class="font-bold">Duration: </span>6+ hours (depending on
              conditions)
            </p>
            <p class="text-xl mt-4 text-left font-bold">Prices per person:</p>
            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">Adult: 1600 SEK per person</li>
              <li class="list-disc text-xl">Child: 800 SEK (6-12 years old)</li>
            </ul>
            <p class="text-xl mt-4 text-left">
              For larger groups, please contact us for special arrangements.
            </p>
            <div class="grid justify-center mt-5">
              <NuxtLink
                to="/booking/Booking-tours"
                class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20"
                >Book here</NuxtLink
              >
            </div>
          </div>
          <div
            class="md:flex lg:hidden hidden mt-4 justify-center w-full h-full"
          >
            <img
              src="/tours/northern/northern_6.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="md:hidden mt-4 flex justify-center">
            <img src="/tours/northern/northern_16.webp" alt="" class="" />
          </div>

          <!-- <div class="md:flex lg:hidden mt-4 hidden  justify-center  w-full h-full">
                            <img src="/tours/northern/northern_6.webp" alt="" class="object-cover">
                        </div>
                        <div class="mt-4 flex md:hidden justify-center my-4">
                            <img src="/tours/northern/northern_16.webp" alt="" class="max-h-screen">
                        </div>-->
        </div>
      </div>
      <div class="bg-bg1 px-2 lg:px-10 pb-10">
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center pt-4">
          <div class="lg:mr-10">
            <p class="title-info pl-0">Additional information</p>
            <p class="line w-1/2"></p>
            <p class="text-xl mt-4 text-left font-bold">
              Included in the price of the tour:
            </p>
            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">
                Transportation from Camp Alta to Abisko and back with several
                stops on the way in a mini-van or a big bus (depending on the
                number of people)
              </li>
              <li class="list-disc text-xl">
                Pick-up and drop-off in Kiruna (if hosted outside of Camp Alta)
              </li>
              <li class="list-disc text-xl">
                Warm winter clothes (winter overall, boots, hats, mittens)
              </li>
              <li class="list-disc text-xl">
                Snacks and warm drinks provided during the tour
              </li>
              <li class="list-disc text-xl">
                Professional guide and high-quality photos
              </li>
              <li class="list-disc text-xl">
                Permit to operate in Abisko National Park
              </li>
            </ul>
            <p class="text-xl mt-4 text-left font-bold">What to Bring:</p>

            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">Snacks, water, warm drinks</li>
              <li class="list-disc text-xl">Headlamp</li>
              <li class="list-disc text-xl">
                Contact lenses instead of glasses are recommended
              </li>
              <li class="list-disc text-xl">
                Warm base layer clothing (thermoactive underwear, warm socks)
              </li>
              <li class="list-disc text-xl">
                A good camera if you have access to one
              </li>
            </ul>
            <p class="text-xl mt-4 text-left">
              Due to the unpredictable nature of the Northern Lights, some tours
              may require extended periods of waiting outdoors and still we can
              never guarantee Aurora sightings during the tour. We reserve the
              right to cancel the tour at any time due to a low number of
              participants (min. 3 guests is required to run the tour), Force
              Majeure, or unfavorable weather conditions.
            </p>
          </div>
          <div class="mt-4 flex md:hidden justify-center">
            <img src="/tours/northern/northern_13.webp" alt="" class="" />
          </div>
          <div class="mt-4 md:flex hidden justify-center w-full h-full">
            <img
              src="/tours/northern/northern_4.webp"
              alt=""
              class="object-cover"
            />
          </div>
        </div>
      </div>
      <div class="bg-bg2 px-2 lg:px-10 pb-5">
        <!--<p class="title-pages text-center text-black">- All you need to know -</p>-->
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center">
          <div class="lg:flex mt-4 hidden justify-center w-full h-full">
            <img
              src="/tours/northern/northern_8.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="lg:ml-10 md:pt-10">
            <p class="title-info pl-0">Transport options</p>
            <p class="line w-2/3"></p>
            <p class="text-xl mt-8 text-left">
              <span class="font-bold">Self-Drive:</span> Camp Alta Kiruna,
              Jullebovägen 2 (approximately a 15-minute drive from Kiruna).
              Please check in at least 10 minutes before the tour starts.
            </p>
            <p class="text-xl mt-8 text-left">
              <span class="font-bold">Shuttle Service:</span> We offer
              round-trip transfers from/to Kiruna with our shuttle services.
              Please be ready 10 minutes before the pick-up time.
            </p>
            <p class="text-xl mt-4 text-left font-bold">Times:</p>
            <ul class="ml-10 lg:ml-16 pt-4">
              <li class="list-disc text-xl">
                17:30 from Tourist Office (Kiruna new city center)
              </li>
            </ul>
            <p class="text-xl mt-4 text-left">
              Please make sure to indicate your preferred pick up location when
              booking the trip. For further information or to make any special
              arrangements, please contact us by email or call.
            </p>

            <div class="grid justify-center mt-5">
              <NuxtLink
                to="/booking/Booking-tours"
                class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20"
                >Book here
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!--phone-->
      <div class="bg-bg1 px-2 lg:px-10 pb-10 block lg:hidden pt-4">
        <swiper
          class="z-0"
          :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
          :rewind="true"
          :lazy="true"
          :navigation="true"
          :keyboard="{
            enabled: true,
          }"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
          }"
        >
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_11.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_3.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_10.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_7.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_4.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_1.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_9.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_15.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center w-full h-[70vh]">
              <img
                src="/tours/northern/northern_13.webp"
                alt=""
                class="object-cover"
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bg-bg2 px-2 lg:px-10 pb-10">
        <p class="title-info pl-0 md:pt-10">Terms and conditions</p>
        <p class="line w-2/3"></p>
        <p class="text-xl mt-8 text-left">
          Your safety and the safety of others is an essential aspect for the
          organizer of this tour and for us. For this reason, they have the
          following guidelines and restrictions:
        </p>
        <ul class="ml-10 lg:ml-16 pt-4">
          <ul>
            <li class="list-disc text-xl">
              All participants must arrive on time, as all our tours are guided
              and you’ll be most likely joining a bigger group.
            </li>
            <li class="list-disc text-xl">The tour is guided in English.</li>
            <li class="list-disc text-xl">
              Participants are required to follow the instructions of the guide
              for safety reasons.
            </li>
            <li class="list-disc text-xl">
              The guides will take high-quality photos during the tour and share
              them with all participants via a Google Drive link sent to the
              email provided during registration, within 3 days after the tour.
              By participating in the tour, all guests consent to their photos
              being shared with other participants from the same tour and to the
              use of these photos for the company’s marketing purposes. The
              organizer reserves the right to delete the photos from the Drive
              after sharing them with guests, so participants are advised to
              download any photos they wish to keep.
            </li>
            <li class="list-disc text-xl">
              We provide snowsuits, insulated snow boots, hats and mittens free
              of charge. Participants must return all rented gear at the end of
              the tour.
            </li>
            <li class="list-disc text-xl">
              Depending on the number of participants, this tour may be
              organised with a minivan or a big bus.
            </li>
            <li class="list-disc text-xl">
              The minimum number of participants required to start the tour is 3
              people. We reserve the right to cancel the tour in case there is
              less than 3 participants.
            </li>
            <li class="list-disc text-xl">
              By joining this tour, participants acknowledge the inherent risks
              of the activity, including but not limited to, adverse weather
              conditions, hiking on slippery terrain, and being outdoors in
              extreme cold. Participants understand that they are joining the
              tour at their own risk. The organizer is not liable for any
              accidents or damages (including injury or death) that occur during
              the tour. We strongly recommend having travel insurance for your
              participation in this tour.
            </li>
            <li class="list-disc text-xl">
              Participants must be in good health and prepared to spend 4+ hours
              in typical Arctic winter conditions (cold, snow, and wind), with
              the ability to walk and hike on uneven, snowy, slippery terrain at
              night. All guests are required to inform the organizer of any
              pre-existing medical conditions to ensure appropriate assistance
              can be provided in case of an emergency.
            </li>
            <li class="list-disc text-xl">
              The minimum age for participation is 6 years old (weather
              permitting). Due to the late-night hours, darkness, extreme
              weather conditions, and hiking involved, this tour is not suitable
              for children under the age of 6.
            </li>
            <li class="list-disc text-xl">
              Children must be accompanied by an adult at all times.
            </li>
            <li class="list-disc text-xl">
              The Aurora Borealis is a natural phenomenon, so we cannot
              guarantee Northern Lights sightings during the tour and we do not
              offer refunds if the Northern Lights are not visible.
            </li>
            <li class="list-disc text-xl">
              Due to the unpredictable nature of the Northern Lights, some tours
              may require extended periods of waiting outdoors, and participants
              should be prepared for this possibility. For this reason, we
              cannot guarantee that the tour will conclude by the originally
              scheduled time.
            </li>
            <li class="list-disc text-xl">
              Camp Alta takes a 5% deposit at the moment of the booking. This 5%
              is non-refundable once you complete the reservation, unless the
              tour is canceled by the organizer.
            </li>
            <li class="list-disc text-xl">
              Northern Lights tours have a 24-hour cancellation policy. 24 hours
              before the start of the tour, you will receive an email with a
              reminder to pay the rest of the booking. If the payment is not
              concluded 24 hours prior to the trip, the payment will be
              automatically charged to the credit card you use while
              registering. If we cannot collect the payment, we will contact you
              to have the transaction finalized. If you fail to pay on time, we
              reserve the right to cancel your booking.
            </li>
            <li class="list-disc text-xl">
              You can cancel your booking yourself up to 24 hours before the
              start of the tour. If the cancellation is made less than 24 hours
              before, you will be charged 100% of the total amount.
            </li>
            <li class="list-disc text-xl">
              The organizer reserves the right to cancel the tour at any time
              due to a low number of participants, Force Majeure, or unfavorable
              weather conditions, such as strong winds, snowstorms, icy
              conditions, extreme temperatures, or impassable roads, which may
              hinder travel, make the tour unsafe. In such cases, participants
              will receive a full refund, including the 5% deposit fee.
            </li>
            <li class="list-disc text-xl">
              If you indicate that you’re flexible to change the date of the
              tour, we will contact you to reschedule the tour in case it’s
              canceled on the day of your original booking. In case, you still
              won’t be able to participate or we cancel the tour again, you will
              receive a full refund, including the 5% deposit fee.
            </li>
            <li class="list-disc text-xl">
              Please check your email regularly, including your spam folder, for
              any important updates or changes to your tour.
            </li>
            <li class="list-disc text-xl">
              The organizer cannot accept liability for failure when the
              improper performance is due to the actions of our guests, someone
              else not connected with the provision of our services, or
              unusual/unforeseeable circumstances beyond our control.
            </li>
            <li class="list-disc text-xl">
              The organizer is not liable for any failure or delay in providing
              the tour due to causes beyond its control, including but not
              limited to natural disasters, strikes, or government restrictions.
            </li>
            <li class="list-disc text-xl">
              Participants must report any discrepancies and complaints to our
              guides at the soonest practicable opportunity so we have an
              opportunity to rectify the problem.
            </li>
            <li class="list-disc text-xl">
              We reserve the right to deny participation to any individual, who
              does not comply with our terms and conditions.
            </li>
          </ul>
        </ul>
        <p class="text-2xl mt-8 text-center">
          Don’t miss the chance to experience one of nature’s most magical
          shows!
        </p>
        <div class="grid justify-center pt-10">
          <NuxtLink
            to="/booking/Booking-tours"
            class="btn bg-primary mt-6 mb-6 text-xl py-2 px-20"
            >Book here
          </NuxtLink>
        </div>
      </div>
      <!--desktop-->
      <div class="bg-bg1 px-2 lg:px-10 pb-10 hidden lg:block pt-4">
        <swiper
          class="z-0"
          :modules="[Keyboard, Navigation, Autoplay, Pagination, Lazy]"
          :rewind="true"
          :lazy="true"
          :navigation="true"
          :keyboard="{
            enabled: true,
          }"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
          }"
        >
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_11.webp"
                alt=""
                class=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_3.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_10.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_7.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_4.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_1.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_9.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_15.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center h-screen">
              <img
                src="/tours/northern/northern_13.webp"
                alt=""
                loading="lazy"
              />
              <!--w-auto -->
            </div>
            <p class="text-center mt-3 mb-6 text-2xl">Tour</p>
          </swiper-slide>
        </swiper>
      </div>
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Northern Lights Tour to Abisko from Kiruna | Camp Alta',
  description: 'Join a 6+ hour Northern Lights tour to Abisko National Park from Kiruna. Professional guides, winter gear, snacks, and photos included. 1650 SEK per person.',
  path: '/tours/Northern-lights-tour',
  image: '/tours/northern/northern_8.webp',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Northern Lights Tour to Abisko National Park',
      description: 'Evening aurora hunting trip to Abisko National Park, one of the best places on Earth to see the Northern Lights. 6+ hours with professional guides.',
      touristType: 'Nature Tourism',
      provider: { '@type': 'LodgingBusiness', name: 'Camp Alta Kiruna', url: 'https://campalta.net' },
      offers: [
        { '@type': 'Offer', name: 'Northern Lights Tour (6+ hours)', price: '1600', priceCurrency: 'SEK', availability: 'https://schema.org/InStock' },
      ],
      location: { '@type': 'Place', name: 'Abisko National Park', address: { '@type': 'PostalAddress', addressLocality: 'Abisko', addressCountry: 'SE' } },
    }),
  }],
})

import { onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Keyboard, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});
</script>
