<!-- components/Recaptcha.vue -->
<template>
    <div>
        <form class="pb-3 "  @submit.prevent="executeRecaptcha"><!--style="border-left:1px solid black" -->
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
                
                <button type="submit" class="btn bg-primary flex">
                    <svg alt="email" class="w-6 mr-3 pt-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    Send
                </button>
            </div>
        </form>                





      <button class="btn bg-primary mt-8" @click="executeRecaptcha">Submit recaptcha</button>
    </div>
  </template>
  
  
 <script lang="ts" setup>
    import { defineComponent, ref } from 'vue';
    import { onMounted } from 'vue';
    import axios from 'axios';


    const response = ref('')

    const recaptchaToken = ref<string | null>(null);

    const executeRecaptcha = async () => {
      recaptchaToken.value = await (window as any).grecaptcha.execute('6LcqJQcqAAAAAOmuV7SE5lpcvauPQlaQ20lgoQ-K', { action: 'submit' });
      if (recaptchaToken.value) {
        verifyRecaptchaToken(recaptchaToken.value);
      }
    };



    const verifyRecaptchaToken = async (token: string) => {
      try {
        const response = await axios.post('http://212.47.233.240:9000/verify-recaptcha', { token });
        console.log(response.data.message);
      } catch (error) {
        console.error('Error verifying reCAPTCHA:', error.response?.data?.detail || error.message);
      }
    };

    onMounted(() => {
        (window as any).grecaptcha.ready(() => {});
    });


</script>