<template>
  <q-img :src="typeOfBreed.image"
         class="z-10"
         @mouseenter="active=true"
         @mouseleave="active=false">

    <div :class="{'transition-1000 opacity-100 backdrop-blur-sm':active}"
         class="w-100% h-100% z-20 flex items-center justify-center opacity-0 transition-1000 fill-red-500">

            <q-img :src="typeOfBreed.icon"
                   class="w-20 h-20 duration-500"
                   :class="{'w-30% h-90% opacity-100 duration-500 c-white cursor-pointer':active}"
                   fit="contain"
                   @click="$emit('goToPage', typeOfBreed)"/>

    </div>
  </q-img>
</template>

<script lang="ts" setup>
import {defineProps, ref} from "vue";
import {useRouter} from 'vue-router'

const router = useRouter()
const active = ref(false)
const {typeOfBreed} = defineProps(['typeOfBreed'])


</script>

<style scoped>

</style>
