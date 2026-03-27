<template>
  <NuxtLink id="to-top" :href="props.target" :class="topClass">
    <svg
      width="32px"
      class="ml-2 mt-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        style="fill: #ffffff"
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
      />
    </svg>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    target?: string;
  }>(),
  {
    target: "#top",
  },
);

const topClass = ref("invisible");

async function topScroll() {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 200) {
    topClass.value = "visible";
    // console.log('show').
  } else {
    topClass.value = "invisible";
  }
}

// Get the button:
//let mybutton = document.getElementById("to-top") as HTMLElement;;

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

/*function scrollFunction() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.opacity = "1";
} else {
    mybutton.style.opacity = "0";
}
console.log('totop')
}*/

onMounted(async () => {
  window.addEventListener("scroll", topScroll);
  // console.log('top on')
});
</script>
<style>
.visible {
  opacity: 1;
}
.invisible {
  opacity: 0;
}
</style>
