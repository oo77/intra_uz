<template>
  <q-img :src="PartnersMain"
         class="w-full min-h-fit"
         fit="cover"/>

  <div class="container q-mx-auto my-10">

  <div class="mx-3%">
    <TextContentStyle :content="PartnersContent.description1[lang.prefix]"
                      :title="PartnersContent.title[lang.prefix]"/>
    <div class="grid gap-10px grid-cols-2 md:grid-cols- lg:grid-cols-4">
      <a v-for="partner in PartnersInfo" :href="partner.link" target="_blank">
        <q-img
          :src="partner.logo"
          class="border-1 border-#39B44A rounded-xl h-40 md:h-60 lg:h-80 transparent px-15px"
          fit="contain"
        />
      </a>
    </div>
    <subscribe/>
  </div>
  </div>
</template>

<script lang="ts" setup>
import {useLanguageStore} from "stores/lang";
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {useOurPartnersMeta} from "src/meta/our_partners";
import {PartnersContent, PartnersMain} from "src/data/Partners/partners";
import {PartnersInfo} from "src/data/Home/partners";
import Subscribe from 'components/slidersComponent/subscribe.vue'
import {onActivated, watch} from "vue";

const lang = useLanguageStore()
useOurPartnersMeta(lang.prefix)
onActivated(()=>{
  watch(lang, () => useOurPartnersMeta(lang.prefix))
})
</script>

<style scoped>

</style>
