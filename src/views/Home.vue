<template>
  <div class="container q-mx-auto">
    <PhotoSlider/>
    <TypesOfActivity class="md:mb-20px"/>
    <AboutSection class="mb-50px"/>

  </div>
  <StatisticCounter class="mb-50px md:mb-80px z-100"/>
  <div class="container q-mx-auto">
    <Partners class="mb-50px"/>
    <SquadList/>

    <Locations class="mb-20px"/>
  </div>



</template>


<script lang="ts" setup>
import PhotoSlider from "components/slidersComponent/PhotoSlider.vue";
import AboutSection from "components/AboutSection.vue";
import TypesOfActivity from "components/TypesOfActivity.vue";
import StatisticCounter from "components/StatisticCounter.vue"
import Partners from "components/PartnersComponent.vue";
import Locations from "components/Location.vue";
import {useHomeMeta} from 'src/meta/home_meta'
import {onActivated, watch} from "vue";
import {useLanguageStore} from "stores/lang";
import SquadList from "src/components/SquadList.vue"

const lang = useLanguageStore()
useHomeMeta(lang.prefix)
onActivated(()=>{
  watch(lang, () => useHomeMeta(lang.prefix))
})




</script>

<style scoped>

</style>
