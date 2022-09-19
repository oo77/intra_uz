<template>
  <q-carousel
    v-model="slide"
    :autoplay="true"
    :navigation="$q.screen.gt.sm"
    :swipeable="true"
    animated
    arrows
    class="rounded-10px h-50 md:h-80 lg:h-100 w-100%"
    control-color="primary"
    infinite
    md="rounded-40px mx-0"
    no-route-fullscreen-exit
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide v-for="img in PhotoGalleryList.length"
                      :name="img"
                      class="rounded-10px md:rounded-40px"
                      :img-src="PhotoGalleryList[img-1]"
    >
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
