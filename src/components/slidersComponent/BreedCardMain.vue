<template>
  <q-img :src="typeOfBreed.image"
         class="z-10"
         @mouseenter="active=true"
         @mouseleave="active=false"
  >

    <div
      class="z-20 w-full h-full bottom-0 rounded-xl flex items-center justify-center opacity-100 duration-500 rounded-md  backdrop-blur-3"
      :class="{'w-30% h-50% backdrop-blur-1':!active}"
      >

      <q-icon :class="{'opacity-100 duration-1000 cursor-pointer':active}"
              :name=" 'img:'+typeOfBreed.icon"
              class="h-100% w-100% duration-1000"
              style="color:red"
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
