<template>
  <section class="h-hit mt-30px mb-20px container q-mx-auto flex flex-rows-2 justify-center" md="mb-40px">
    <p class="text-center  text-26px c-#39B44A mb-10px font-600" md="mb-30px text-32px" v-html="Titles.gallery[lang.prefix]"/>
    <GallerySlider/>
  </section>
</template>

<script lang="ts" setup>
import {useLanguageStore} from 'stores/lang'
import {Titles} from "src/data/Home/Titles";
import GallerySlider from "components/slidersComponent/GallerySlider.vue";

const lang = useLanguageStore()
</script>

