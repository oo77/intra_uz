<template>
  <div class="row  bg-primary shadow-24 shadow-primary py-20px q-mx-auto container md:px-20px "
       md="mt-30px mt-50px">

    <div class="col  grid  items-center">
      <p class="text-center c-white-600 font-600 c-white  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px"
         v-html="'+'+ count3"/>

      <span class="lg:text-32px sm:text-16px text-12px col text-center font-600 c-white" v-html="countName.products[lang.prefix]"/>
    </div>

    <div class="col grid  items-center">
      <p class="text-center c-white-600 font-600 c-white  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px"
         v-html="'+'+ count2"/>
      <span class="lg:text-32px sm:text-16px text-12px col text-center font-600 c-white"  v-html="countName.partners[lang.prefix]"/>
    </div>

    <div class="col grid  items-center">
      <p class="text-center c-white-600 font-600 c-white  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px"
        >+{{count1}} <small class="text-50px">млн.</small></p>
      <span class="lg:text-32px  sm:text-16px text-12px col text-center font-600 c-white" v-html="countName.staff[lang.prefix]"/>
    </div>

  </div>

</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useLanguageStore} from "stores/lang";

const lang = useLanguageStore()
let count1 = ref(0);
let count2 = ref(0);
let count3 = ref(0);

const countName = {
  products: {
    ru: 'Проекты',
    uz: 'Maxsulotlar',
    uzK: 'Махсулотлар',
    en: 'Products',
  },
  partners: {
    ru: 'Партнеры',
    uz: 'Hamkorlarimiz',
    uzK: 'Ҳамкорларимиз',
    en: 'Partners',
  },
  staff: {
    ru: 'Гранты',
    uz: 'Xodimlar',
    uzK: 'Ходимлар',
    en: 'Staff',
  },
}


onMounted(() => {
  let counter = 0
  const int = setInterval(() => {
    counter++
    counter < 1001 ? count1.value = counter : clearInterval(int)
    counter < 16 ? count2.value = counter : null
    counter < 11 ? count3.value = counter : null
  }, 10)
})
</script>
<style scoped>
.zmax {
  z-index: 1000;
}
</style>
