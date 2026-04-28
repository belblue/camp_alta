<template>
  <div
    v-if="showBanner"
    class="fixed bottom-0 left-0 right-0 bg-[#f6f5eee0] text-gray-800 p-4 shadow-lg z-50"
  >
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
      <div>
        <h3 class="text-lg font-semibold mb-2 text-gray-900">Cookie Consent</h3>
        <p class="text-lg text-gray-700">
          We use cookies to enhance your experience and analyze website traffic.
          This includes Google Analytics and Microsoft Clarity to help us
          understand how visitors use our site.
          <NuxtLink
            to="/docs/Cookies"
            class="underline text-primary hover:text-secondary"
          >
            Learn more about our cookie policy
          </NuxtLink>
        </p>
      </div>
      <div class="flex flex-row gap-4">
        <button
          @click="rejectCookies"
          class="btn bg-gray-600 hover:bg-gray-700 text-white whitespace-nowrap"
        >
          Reject
        </button>
        <button
          @click="acceptCookies"
          class="btn bg-primary hover:bg-primary/90 text-white whitespace-nowrap"
        >
          Accept All
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showBanner = ref(false);

const CLARITY_PROJECT_ID = "wiojla23ok";

const loadClarity = () => {
  if (typeof window === "undefined" || window.clarity) return;
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
};

const setCookieConsent = (consent) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cookie-consent", consent);
    const event = new CustomEvent("cookie-consent-changed", {
      detail: { consent },
    });
    window.dispatchEvent(event);
  }
};

const acceptCookies = () => {
  setCookieConsent("accepted");
  showBanner.value = false;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
  }

  loadClarity();
};

const rejectCookies = () => {
  setCookieConsent("rejected");
  showBanner.value = false;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      showBanner.value = true;
    } else if (consent === "accepted") {
      loadClarity();
    }
  }
});
</script>
