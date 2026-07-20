<template>
    <div>      
        <!--<form class="mt-3">
              <select id="locale-select" class="border-2 rounded-md" v-model="$i18n.locale"  @change="onChange($i18n.locale)">                
                <option value="cat">CAT</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
        </form>-->
    </div>      
</template>

<script setup >
    //const localePath = useLocalePath()
    const router = useRouter();

    async function onChange(local) {
        router.push(`/${local}`)      
    }
</script>

<style scoped>


</style>