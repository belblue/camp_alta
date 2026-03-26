<template>
    <div class="container">
        <div class="spinner grid justify-center">      
            <img src="/spinner.svg" alt="" class="h-full flex flex-col justify-center items-center text-center" >           
        </div>
    </div>
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';

    function loadingSpinner(){
        const whiteScreen = document.querySelector(".spinner") as HTMLElement;
        setTimeout(() => {
        //to lift the element
        whiteScreen.style.top = "-100%";
        //to restore the scroll
        document.body.style.overflow = 'auto';
        }, 2000);
    }
    onMounted(() => {
    //console.log('spinner mounted');
    loadingSpinner()
    });

</script>       
<style scoped>
   .container{
      z-index: 2000;
    }
    .spinner {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        background-color: white;
        transition: top 0.5s ease-out;
    }
</style>     
