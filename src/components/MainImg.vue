<template>
  <q-carousel
    v-model="slide"
    :autoplay="autoplay"
    animated
    arrows
    class="container h-90 q-mx-auto rounded-2xl gt-sm mt-20"
    control-color="primary"
    infinite
    navigation
    swipeable
  >
    <q-carousel-slide v-for="i in 4" :img-src="images[`mainImgSlyad${i}`]" :name="i"
                      class="h-hit max-h-90 rounded-2xl"/>
  </q-carousel>
  <q-img :src="images.mainImgSlyad1" class="w-full h-130% lt-md"/>
</template>


<script setup>
import {ref} from 'vue'
import {images} from 'src/utils/ImgLocation'

let slide = ref(1)
let autoplay = ref(true)


</script>


<style lang="scss" scoped>
.carousel {
  align-items: center;
  display: flex;
  justify-content: center;
}

$animationSpeed: 600s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1400px * 10))
  }
}


// Styling
.slider {
  display: flex;
  background: white;
  height: 100px;
  align-items: center;
  overflow: hidden;
  position: relative;


  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(1300px * 10);
  }
}
</style>

