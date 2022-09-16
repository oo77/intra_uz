<template>
  <div class="z-1">
    <q-img :src="AboutCompanyMainImg"
           class="w-full min-h-fit"
           fit="cover"/>

    <div
      class="container q-mx-auto my-30px"
      lg="mt-50px">

      <text-content-style :content="Content.aboutCompany.description[lang.prefix]"
                          :title="Content.aboutCompany.title[lang.prefix]"/>

      <AboutUsSlider class="mb-20px q-mx-auto"
                     lg="mb-50px"/>

      <p class="text-center c-#39B44A text-26px font-700 ma-0 mt-30px mb-10px"
         lg="mt-50px text-32px"
         v-html="Content.pride.title[lang.prefix]"/>

      <div class="mb-50px">

        <ul v-for="p in prides"
            class="list-none border-b-1 border-slate-200 pa-0 flex justify-center items-center text-center"
            lg="justify-between text-left">

          <li class="w-80% text-16px"
               lg="text-20px"
               v-html="p[lang.prefix]"/>
          <q-img :src="proudPNG" class="w-70px h-70px gt-sm"/>
        </ul>

      </div>

      <text-content-style :title="Content.partners.title[lang.prefix]" :content="Content.partners.description[lang.prefix]"/>
      <PartnersSlide/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Content, AboutCompanyMainImg} from "src/data/AboutUS/AboutUs";
import AboutUsSlider from "components/slidersComponent/GallerySlider.vue";
import PartnersSlide from 'components/slidersComponent/PartnersSlide.vue';
import {useLanguageStore} from "stores/lang";
import proudPNG from 'assets/icons/proudTrue.png'
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {useAboutCompanyMeta} from "src/meta/about_company";

const prides = Content.pride.prides
useAboutCompanyMeta()
const lang = useLanguageStore()

</script>

