<template>
  <q-carousel
    v-model="slide"
    :autoplay="true"
    :navigation="$q.screen.gt.sm"
    :swipeable="true"
    animated
    arrows
    class="rounded-0 sm:rounded-3  min-h-50px h-30 md:h-70 lg:h-100 w-100% pa-0"
    control-color="primary"
    infinite
    md="mx-0"
    no-route-fullscreen-exit
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide v-for="img in PhotoMainList.length"
                      :img-src="PhotoMainList[img-1]"
                      :name="img"
                      class="rounded-0 lg:rounded-3 min-h-50px h-30 md:h-60 lg:h-80 pa-0">
    </q-carousel-slide>

  </q-carousel>



</template>


<script lang="ts" setup>
import {ref} from 'vue'
import {PhotoMainList} from "src/data/Home/PhotoList";


const show = ref(true)
setTimeout(() => {
  show.value = false
}, 100)


let slide = ref(1)
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

