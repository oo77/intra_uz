<template>
  <q-img :src="AboutCompanyMainImg"
         class="w-full min-h-fit"
         fit="cover"/>

  <div class="container q-mx-auto my-10">

    <div class="mx-3%">
      <div>
        <p ref="me" class="text-center c-#39B44A text-26px font-700 mb-3 " lg="text-32px" v-html="aboutCompany.title[lang.prefix]"/>
        <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 " v-html="aboutCompany.description[lang.prefix]"/>
      </div>

      <AboutUsSlider class="mb-10 q-mx-auto"/>

      <p class="text-center c-#39B44A text-26px font-700 ma-0 mt-30px mb-10px"
         lg="mt-50px text-32px"
         v-html="pride.title[lang.prefix]"/>

      <div class="mb-50px mx-8%">

        <div v-for="p in pride.prides.length"
             class="list-none border-b-1 border-slate-200 pa-0 flex justify-left text-left"
             lg="justify-between text-left">

          <p class="w-90% text-16px flex items-center ma-0 my-2"
             lg="text-20px my-0"
             v-html="pride.prides[p-1][lang.prefix]"/>
          <q-img :src="proudPNG" class="w-70px h-70px gt-sm"/>
        </div>

      </div>
      <div>
        <p ref="me" class="text-center c-#39B44A text-26px font-700 mb-3 " lg="text-32px" v-html="partners.title[lang.prefix]"/>
        <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 " v-html="partners.description[lang.prefix]"/>
      </div>

      <PartnersSlide/>

      <p class="text-justify text-16px mt-5" sm="text-20px  mx-0"
         v-html="PartnersContent.description2[lang.prefix]"/>

      <Subscribe/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {aboutCompany, AboutCompanyMainImg, partners, pride} from "src/data/AboutUS/AboutUs";
import AboutUsSlider from "components/slidersComponent/GallerySlider.vue";
import PartnersSlide from 'components/slidersComponent/PartnersSlide.vue';
import {useLanguageStore} from "stores/lang";
import proudPNG from 'assets/icons/proudTrue.png'
import {useAboutCompanyMeta} from "src/meta/about_company";
import {PartnersContent} from "src/data/Partners/partners";
import Subscribe from "components/slidersComponent/subscribe.vue";
import {onActivated, watch} from "vue";

const lang = useLanguageStore()

useAboutCompanyMeta(lang.prefix)
onActivated(() => {
  watch(lang, () => useAboutCompanyMeta(lang.prefix))
})

</script>

