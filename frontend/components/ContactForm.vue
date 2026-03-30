<template>
    <div >
        <form class="pb-3 "  @submit.prevent="submitForm" id="demo-form"><!--style="border-left:1px solid black" -->
            <div class="grid lg:grid-cols-2 md:grid-cols-2">
                <div class="lg:mx-12 mx-2">
                    <label for="name" class="text-xl pl-1">Name</label><br>
                    <input type="text" name="name" id="name" v-model="form.name"  class="w-full mt-2 rounded-2xl shadow hover:border-[1px] hover:border-[#007984] outline-0 px-3 py-1">
                </div>
                <div class="lg:mx-12 mx-2">
                    <label for="email" class="text-xl pl-1">Email</label><br>
                    <input type="text" name="email" id="email" v-model="form.email"  class="w-full mt-2 rounded-2xl border-black shadow hover:border-[1px] hover:border-[#007984] outline-0 px-3 py-1">

                </div>
            </div>      
            <div class="lg:mx-12  mt-6 mx-2">
                <label for="message" class="text-xl pl-1">Message</label><br>
                <textarea name="message" id="message" cols="30" rows="10" required v-model="form.message" class="w-full mt-2 rounded-2xl shadow  hover:border-[1px] hover:border-[#007984] outline-0 px-3 py-1"></textarea>
            </div>                 
            <div class="grid justify-center mt-4">
                <button v-if="contactForm=='sending'" class="btn flex cursor-not-allowed bg-primary bg-opacity-50" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 animate-spin mr-3 "><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --><path fill="#fff" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>
                    Sending
                </button> 
                <div v-else-if="contactForm=='error'" class=" text-red-700 flex text-lg text-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 mr-3"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --><path fill="#c12b2b" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>                    
                    Error sending the form, refresh the page and try again.
                </div> 
                <div v-else-if="contactForm=='sent'" class=" text-primary flex text-xl" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 mr-3"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --><path fill="#017984" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg>                
                    Form submitted successfully!
                </div> 
                <button v-else type="submit" class="btn bg-primary flex">
                    <svg alt="email" class="w-6 mr-3 pt-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    Send
                </button>
            </div>
        </form>                
    </div>
  </template>
  
  <script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import qs from 'qs'
    import { useNuxtApp } from '#app'
    import axios from 'axios';

    const RECAPTCHA_SITE_KEY = '6LdCqfspAAAAAH_yeMciO1jpmZgfWh01NkJSxIVw';

    interface Form {
        name: string
        email: string
        message: string
    }

    const form = ref<Form>({
        name: '',
        email: '',
        message: ''
    })

    const contactForm = ref('')
    const recaptchaLoaded = ref(false)

    // Dynamically load reCAPTCHA script
    const loadRecaptcha = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (recaptchaLoaded.value || (window as any).grecaptcha) {
          recaptchaLoaded.value = true;
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          recaptchaLoaded.value = true;
          resolve();
        };

        script.onerror = () => {
          reject(new Error('Failed to load reCAPTCHA'));
        };

        document.head.appendChild(script);
      });
    };

    const submitForm = async () => {
        contactForm.value = 'sending';
        try {
            // Ensure reCAPTCHA is loaded before executing
            if (!(window as any).grecaptcha) {
              await loadRecaptcha();
              // Wait for grecaptcha to be ready
              await new Promise<void>((resolve) => {
                (window as any).grecaptcha.ready(() => resolve());
              });
            }

            const recaptchaToken = await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
            const formData = {
                name: form.value.name,
                email: form.value.email,
                message: form.value.message,
                recaptchaToken: recaptchaToken
            }
            const response = await axios.post('/api/contact', formData)
            if (response.data.result === 'error') {
                contactForm.value = 'error';
            } else {
                contactForm.value = 'sent';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            contactForm.value = 'error';
        }
    }

    onMounted(() => {
      // Preload reCAPTCHA when user interacts with the form
      const formElement = document.getElementById('demo-form');
      if (formElement) {
        const loadOnInteraction = () => {
          loadRecaptcha();
          formElement.removeEventListener('focusin', loadOnInteraction);
          formElement.removeEventListener('mouseover', loadOnInteraction);
        };
        formElement.addEventListener('focusin', loadOnInteraction, { once: true });
        formElement.addEventListener('mouseover', loadOnInteraction, { once: true });
      }
    });

  </script>
  
  <style scoped>

  
  .success-message {
    margin-top: 1rem;
    color: green;
  }
  </style>
  