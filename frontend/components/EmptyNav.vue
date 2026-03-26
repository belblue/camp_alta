<template>
    <div>
        <div class="flex bg-white  w-full z-10 shadow-md py-1 px-4">
            <NuxtLink class="lg:block hidden"  title="volver a la pagina principal de camp alta ">            
                <img src="/logo.svg" alt="logo camp alta" class="w-36">
            </NuxtLink>
            <NuxtLink class="block lg:hidden" title="back to main page of camp alta">            
                <img src="/logo.svg" alt="logo camp alta" class="w-36">
            </NuxtLink>   
            <div class="ml-auto">
                <NuxtLink class="flex p-2.5 text-xl mr-8 rounded-lg hover:bg-tertiary" ><img src="/arrow.svg" alt="" class="w-4 mr-2"> Atrás </NuxtLink> 
            </div>
            <LangSwitcher/>
        </div>
    </div>
</template>
<script setup lang="ts">



</script>            
