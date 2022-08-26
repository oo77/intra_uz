<template>
  <div class="z-1">
    <q-img :src="images.aboutCompanyMain" class="w-full min-h-fit" fit="cover"/>
      <div class="container q-mx-auto my-30px" lg="mt-50px">
        <text-content-style :title="'aboutCompanyTitle'" :content="'aboutCompanyContent'"/>
        <AboutUsSlider class="mb-20px q-mx-auto" lg="mb-70px"/>

        <text-content-style :title="'valueOfCompanyTitle'" :content="'valueOfCompanyContent'"/>

        <p class="text-center c-#39B44A text-26px font-700 ma-0 mt-30px mb-10px" lg="mt-50px text-32px">
          {{ lang.translate['prideOfCompany'] }}</p>
        <div class="mb-50px">
          <ul v-for="p in prides" class="list-none border-b-1 border-slate-200 pa-0 flex justify-center items-center text-center" lg="justify-between text-left">
            <div class="w-80% text-16px" lg="text-20px">
              <li><p class="font-bold">{{ lang.translate[p.prideBold] }}</p></li>
              <li><p class="font-200"> {{ lang.translate[p.pride] }}</p></li>
            </div>
            <q-img :src="proudPNG" class="w-70px h-70px gt-sm"/>
          </ul>
        </div>

        <text-content-style :title="'partnersTitle'" :content="'partnersContent'" />
        <PartnersSlide />
      </div>
  </div>
</template>

<script lang="ts" setup>
import AboutUsSlider from "components/slidersComponent/AboutUsSlider.vue";
import PartnersSlide from 'components/slidersComponent/PartnersSlide.vue';
import {images} from "src/utils/ImgLocation";
import {useLanguageStore} from "stores/lang";
import proudPNG from 'assets/icons/proudTrue.png'
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'

const lang = useLanguageStore()

const prides = [
  {id: 1, prideBold: 'prideof1', pride: 'prideof11'},
  {id: 2, prideBold: 'prideof2', pride: 'prideof22'},
  {id: 3, prideBold: 'prideof3', pride: 'prideof33'},
  {id: 4, prideBold: 'prideof4', pride: 'prideof44'},
  {id: 5, prideBold: 'prideof5', pride: 'prideof55'},
  {id: 6, prideBold: 'prideof6', pride: 'prideof66'},
]

</script>

