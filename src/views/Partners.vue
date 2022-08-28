<template>
  <q-img class="w-full min-h-fit" fit="cover" :src="images.partnersMain"/>
  <div class="container q-mx-auto mt-30px" md="mt-50px">
      <TextContentStyle :title="'partnersTitle'" :content="'partnersContent'"/>
      <PartnersSlide/>
      <p class="text-justify text-16px mx-5% mt-20px" sm="text-20px  mx-0">
        {{ lang.getLang('partnersContent2') }}
      </p>
    <div class="w-100% flex justify-center items-center animate-pulse my-30px">
      <p class="ma-0 mx-10px font-600 ">ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?</p>
      <q-btn to="/contacts" label="Нажмите!" class="normal-case font-600 bg-#39B44A rounded-xl c-white"/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import PartnersSlide from 'src/components/slidersComponent/PartnersSlide.vue'
import {images} from "src/utils/ImgLocation";
import {useLanguageStore} from "stores/lang";
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {useOurPartnersMeta} from "src/meta/our_partners";
const lang = useLanguageStore()
useOurPartnersMeta()
</script>

<style scoped>

</style>
