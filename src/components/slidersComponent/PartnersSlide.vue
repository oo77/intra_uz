<template>

  <div class="carousel gt-sm">
    <q-intersection
      once
      transition="scale"
    >
      <div class="slider transparent">
        <div class="slide-track transparent">
            <div v-for="partner in partners" class="w-180px flex items-center mx-50px">
              <q-img :src="partner.logo" fit="contain" class="transparent"/>
            </div>
        </div>
      </div>
    </q-intersection>
  </div>
  <q-intersection
    once
    transition="scale"
  >
    <div class="grid gap-10px mx-5% grid-cols-2 lt-md">
      <q-img
        v-for="partner in PartnersInfo"
        :src="partner.logo"
        class="min-w-100px border-1 border-#39B44A rounded-xl h-200px transparent"
        fit="contain"
      />
    </div>
  </q-intersection>

</template>

<script setup lang="ts">
import {PartnersInfo} from "src/data/Home/partners";

const partners = [...PartnersInfo, ...PartnersInfo,...PartnersInfo,...PartnersInfo]

</script>

<style lang="scss" scoped>
.carousel {
  align-items: center;
  display: flex;
  justify-content: center;
}


$animationSpeed: 120s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 30))
  }
}


// Styling
.slider {
  display: flex;
  background: white;
  height: 300px;
  align-items: center;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 1000px;


  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 30);
  }
}
</style>
