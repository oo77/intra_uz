<template>

  <div class="carousel gt-sm">
      <div class="slider transparent w-100%">
        <div class="slide-track transparent ">
          <a v-for="partner in partners" :href="partner.link" class="w-450px flex items-center mx-50px">
            <q-img :src="partner.logo" class="transparent h-fit" fit="contain"/>
          </a>
        </div>
      </div>
  </div>
  <q-intersection
    once
    transition="scale"
  >
    <div class="grid gap-10px mx-5% grid-cols-2 lt-md">
      <a v-for="partner in PartnersInfo" target="_blank" >
        <q-img
          :src="partner.logo"
          class="min-w-100px border-1 border-#39B44A rounded-xl h-200px transparent"
          fit="contain"
        />
      </a>

    </div>
  </q-intersection>

</template>

<script lang="ts" setup>
import {PartnersInfo} from "src/data/Home/partners";

const partners = [...PartnersInfo, ...PartnersInfo, ...PartnersInfo, ...PartnersInfo, ...PartnersInfo]

</script>

<style lang="scss" scoped>
.carousel {
  align-items: center;
  display: flex;
  justify-content: center;
}


$animationSpeed: 100s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-450px * 8 * 5))
  }
}


// Styling
.slider {
  display: flex;
  background: white;
  height: fit-content;
  align-items: center;
  margin: auto;
  overflow: hidden;
  position: relative;


  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(450px * 8 * 5);
  }
}
</style>
