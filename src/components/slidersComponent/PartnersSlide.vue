<template>

  <div class="carousel gt-sm">
    <q-intersection
      once
      transition="scale"
    >
      <div class="slider transparent">
        <div class="slide-track transparent">
          <div v-for="img in Links" class="w-550px flex items-center mx-50px">
            <q-img :src="img.url" fit="contain " class="transparent"/>
          </div>
          <div v-for="img in Links" class="slide w-550px flex items-center mx-50px">
            <q-img :src="img.url" fit="contain"/>
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
        v-for="img in Links"
        :src="img.url"
        class="min-w-100px border-1 border-#39B44A rounded-xl h-200px transparent"
        fit="contain"
      />
    </div>
  </q-intersection>

</template>

<script setup>
import {images} from "src/utils/ImgLocation";

const Links = [
  {url: images.anaPartner,},
  {url: images.CIROCALABRIApartner},
  {url: images.FRAGOLApartner},
  {url: images.MeneghinPArtner},
  {url: images.PrimeranoPartner},
  {url: images.SintPartner},
]
</script>

<style lang="scss" scoped>
.carousel {
  align-items: center;
  display: flex;
  justify-content: center;
}


$animationSpeed: 20s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 6))
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
    width: calc(250px * 15);
  }
}
</style>
