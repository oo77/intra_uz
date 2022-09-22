<template>
  <div class="z-1">
    <q-img :src="AboutCompanyMainImg"
           class="w-full min-h-fit"
           fit="cover"/>

    <div
      class="container q-mx-auto my-10">

      <div class="mx-3%">
        <text-content-style :content="Content.aboutCompany.description[lang.prefix]"
                            :title="Content.aboutCompany.title[lang.prefix]"/>

        <AboutUsSlider class="mb-10 q-mx-auto"/>

        <p class="text-center c-#39B44A text-26px font-700 ma-0 mt-30px mb-10px"
           lg="mt-50px text-32px"
           v-html="Content.pride.title[lang.prefix]"/>

        <div class="mb-50px mx-8%">

          <ul v-for="p in prides"
              class="list-none border-b-1 border-slate-200 pa-0 flex justify-left text-left"
              lg="justify-between text-left">

            <li class="w-90% text-16px flex items-center"
                lg="text-20px"
                v-html="p[lang.prefix]"/>
            <q-img :src="proudPNG" class="w-70px h-70px gt-sm"/>
          </ul>

        </div>

        <text-content-style :content="Content.partners.description[lang.prefix]"
                            :title="Content.partners.title[lang.prefix]"/>

        <PartnersSlide/>

        <p class="text-justify text-16px mt-5" sm="text-20px  mx-0"
           v-html="PartnersContent.description2[lang.prefix]"/>

        <Subscribe/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {AboutCompanyMainImg, Content} from "src/data/AboutUS/AboutUs";
import AboutUsSlider from "components/slidersComponent/GallerySlider.vue";
import PartnersSlide from 'components/slidersComponent/PartnersSlide.vue';
import {useLanguageStore} from "stores/lang";
import proudPNG from 'assets/icons/proudTrue.png'
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {useAboutCompanyMeta} from "src/meta/about_company";
import {PartnersContent} from "src/data/Partners/partners";
import Subscribe from "components/slidersComponent/subscribe.vue";

const prides = Content.pride.prides
useAboutCompanyMeta()
const lang = useLanguageStore()

</script>

