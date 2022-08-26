<template>

  <!--   TODO FIX CAROUSEL FLICK-->
  <q-carousel
    v-model="slide"
    animated
    arrows
    autoplay
    class="rounded-10px h-fit"
    control-color="primary"
    infinite
    md="rounded-40px mx-0"
    navigation
    no-route-fullscreen-exit
    swipeable
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide v-for="img in 12" :name="img" class="rounded-10px md:rounded-40px">
        <img :src="images[`mainImgSlyad${img+4}`]" class="rounded-10px md:rounded-40px w-full" fit="contain"/>
    </q-carousel-slide>
  </q-carousel>


</template>

<script setup>
import {useLanguageStore} from 'stores/lang'
import {images} from "src/utils/ImgLocation";
import {ref} from 'vue'

const slide = ref(1)

const lang = useLanguageStore()
const mainImgList = [
  {id: 1, url: images.GallerySlideimg1},
  {id: 2, url: images.GallerySlideimg2},
  {id: 3, url: images.GallerySlideimg3},
  {id: 4, url: images.GallerySlideimg4},
  {id: 5, url: images.GallerySlideimg5},

]
</script>
