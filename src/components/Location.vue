<template>
  <q-intersection
    once
    transition="fade"
  >
    <div class="container q-mx-auto flex justify-center">
      <p class="text-center  text-26px c-#39B44A mb-10px font-600"
         md="mb-30px text-32px"
         v-html="Titles.location[lang.prefix]"/>

      <q-img :src="location"
             class="rounded-10px  w-100%"
             fit="cover"
             md="rounded-40px mx-0"
             @click="dialogLocation=true"/>

      <q-dialog v-model="dialogLocation">
        <q-card class="">
          <iframe
            allowfullscreen=""
            height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2419.3575398305848!2d69.13015961987797!3d40.99345397179043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JrQsNC50YDQsNGCINGC0LDRiNC60LXQvdGC!5e1!3m2!1sru!2s!4v1661105103512!5m2!1sru!2s"
            style="border:0;"
            width="400"></iframe>
        </q-card>
      </q-dialog>

    </div>
  </q-intersection>
</template>

<script lang="ts" setup>
import {useLanguageStore} from 'stores/lang'
import {location} from "src/data/Home/PhotoList";
import {Titles} from "src/data/Home/Titles";
import {ref} from "vue";

const dialogLocation = ref(false)
const lang = useLanguageStore()
</script>

<style scoped>


</style>
