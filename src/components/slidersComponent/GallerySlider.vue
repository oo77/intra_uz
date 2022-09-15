<template>
  <q-carousel
    v-model="slide"
    :autoplay="true"
    :swipeable="true"
    :navigation="$q.screen.gt.sm"
    animated
    arrows
    class="rounded-10px h-100 w-95%"
    control-color="primary"
    infinite
    md="rounded-40px mx-0"
    no-route-fullscreen-exit
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide v-for="img in PhotoGalleryList.length"
                      :name="img"
                      :img-src="PhotoGalleryList[img-1]"
                      class="rounded-10px md:rounded-40px h-100">
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts" setup>
import {useLanguageStore} from 'stores/lang'
import {PhotoGalleryList} from "src/data/Home/PhotoList";
import {ref} from 'vue'


const slide = ref(1)
const lang = useLanguageStore()

</script>
