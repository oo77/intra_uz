<template>
  <q-layout >
    <q-header>

      <navbar/>

    </q-header>

    <q-page-container>
      <q-img :src="images.typeProdBack"
             class="absolute w-100vw top-200 md:top-250 max-h-90"
             fit="fill"/>
      <router-view/>

      <Footer/>

      <q-page-scroller :offset="[18, 18]"
                       :scroll-offset="150"
                       position="bottom-right">
        <q-btn
          class="animate-bounce z-max fixed bg-white right-30px bottom-30px"
          hover="c-green"
          icon="fa-solid fa-chevron-up"
          padding="md"
          round
        />

      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>


<script lang="ts" setup>
import {images} from "src/utils/ImgLocation";
import Navbar from "components/Bars/Navbar.vue";
import Footer from "components/Bars/Footer.vue";
</script>


<style scoped>
.z-max {
  z-index: 1000;
}
</style>
