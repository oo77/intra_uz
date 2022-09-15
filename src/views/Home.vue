<template>
  <div class="container q-mx-auto">
    <PhotoSlider/>
    <AboutSection class="mb-50px"/>
    <TypesOfActivity class="md:mb-20px"/>
    <StatisticCounter class="mb-50px md:mb-80px z-100"/>
    <Partners class="mb-50px"/>
    <Gallery/>
    <Locations class="mb-20px"/>
  </div>


</template>


<script lang="ts" setup>
import PhotoSlider from "components/slidersComponent/PhotoSlider.vue";
import AboutSection from "components/AboutSection.vue";
import TypesOfActivity from "components/TypesOfActivity.vue";
import StatisticCounter from "components/StatisticCounter.vue"
import Partners from "components/PartnersComponent.vue";
import Gallery from "components/Gallery.vue";
import Locations from "components/Location.vue";
import {useHomeMeta} from 'src/meta/home_meta'

useHomeMeta()

</script>

<style scoped>

</style>
