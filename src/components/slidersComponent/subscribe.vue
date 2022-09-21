<template>
  <div class="w-100% flex justify-center gap-2 items-center animate-pulse my-30px">
    <p class="ma-0 mx-10px font-600 text-center"
       v-html="PartnersContent.subscribe[lang.prefix]"/>

    <q-btn class=" py-1 px-3 rounded-10px"
           color="#39B44A"
           to="/contacts">
      {{ PartnersContent.press[lang.prefix].toUpperCase() }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import {useLanguageStore} from "stores/lang";
import {PartnersContent, PartnersMain} from "src/data/Partners/partners";

const lang = useLanguageStore()
</script>

<style scoped>

</style>
