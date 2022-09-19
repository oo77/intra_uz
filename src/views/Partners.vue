<template>
  <q-img :src="PartnersMain"
         class="w-full min-h-fit"
         fit="cover"/>

  <div class="container q-mx-auto mt-30px"
       md="mt-50px">

    <TextContentStyle :content="PartnersContent.description1[lang.prefix]"
                      :title="PartnersContent.title[lang.prefix]"/>
    <div class="grid gap-10px mx-5% grid-cols-2 md:grid-cols- lg:grid-cols-4">
      <q-img
        v-for="partner in PartnersInfo"
        :src="partner.logo"
        class="border-1 border-#39B44A rounded-xl h-40 md:h-60 lg:h-80 transparent px-15px"
        fit="contain"
      />

    </div>

    <p class="text-justify text-16px mx-5% mt-20px" sm="text-20px  mx-0"
       v-html="PartnersContent.description2[lang.prefix]"/>

    <div class="w-100% flex justify-center items-center animate-pulse my-30px">
      <p class="ma-0 mx-10px font-600 "
         v-html="PartnersContent.subscribe[lang.prefix]"/>

      <q-btn v-html="PartnersContent.press[lang.prefix].toUpperCase()"
             class="normal-case font-600 bg-#39B44A rounded-xl c-white"
             to="/contacts"/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import PartnersSlide from 'src/components/slidersComponent/PartnersSlide.vue'
import {useLanguageStore} from "stores/lang";
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {useOurPartnersMeta} from "src/meta/our_partners";
import {PartnersContent, PartnersMain} from "src/data/Partners/partners";
import {PartnersInfo} from "src/data/Home/partners";

const lang = useLanguageStore()
useOurPartnersMeta()
</script>

<style scoped>

</style>
