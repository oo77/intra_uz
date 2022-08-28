<template>
<!--  <div class="mt-100px">-->
  <MainImg class="mb-50px"/>
  <AboutSection class="mb-50px"/>
  <TypesOfActivity class="md:mb-20px"/>
  <StatisticCounter class="mb-50px md:mb-80px z-100"/>
  <Partners class="mb-50px"/>
  <Gallery/>
  <Locations class="mb-20px"/>
<!--  </div>-->
</template>

<script setup lang="ts">
import {useHomeMeta} from  'src/meta/home_meta'
import {images} from 'src/utils/ImgLocation'
import MainImg from "components/MainImg.vue";
import AboutSection from "components/AboutSection.vue";
import TypesOfActivity from "components/TypesOfActivity.vue";
import Partners from "components/PartnersComponent.vue";
import Locations from "components/Location.vue";
import Gallery1 from "components/Gallery.vue";
import StatisticCounter from "components/StatisticCounter.vue"
import Gallery from "components/Gallery.vue";

useHomeMeta()

</script>

<style scoped>

</style>
