<template>
  <q-img :src="typeOfBreed.image"
         class="z-10"
  >

    <div
      class="z-20 w-20% h-30% bottom-0 rounded-xl flex items-center justify-center opacity-100 duration-1500 rounded-md backdrop-blur-md hover:h-100% hover:w-100% )"
      @mouseenter="active=true"
      @mouseleave="active=false">

      <q-icon :class="{'opacity-100 duration-1000 cursor-pointer fill-red-500':active}"
              :name="'img:'+typeOfBreed.icon"
              class="h-90%  w-90% duration-1000 fill-red-500"
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
