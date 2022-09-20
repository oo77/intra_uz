<template>
  <div class="row  bg-white shadow-md shadow-slate py-20px q-mx-auto container md:px-20px "
       md="mt-30px rounded-xl mt-50px">

    <div class="col  grid  items-center">
      <p class="text-center c-slate-600 font-600 c-slate  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px"
         v-html="'+'+ count3"/>

      <span class="lg:text-32px xl:text-32px text-16px col text-center font-600" v-html="countName.products[lang.prefix]"/>
    </div>

    <div class="col grid  items-center">
      <p class="text-center c-slate-600 font-600 c-slate  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px"
         v-html="'+'+ count2"/>
      <span class="lg:text-32px xl:text-32px text-16px col text-center font-600" v-html="countName.partners[lang.prefix]"/>
    </div>

    <div class="col grid  items-center">
      <p class="text-center c-slate-600 font-600 c-slate  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px"
         v-html="'+'+ count1"/>
      <span class="lg:text-32px xl:text-32px text-16px col text-center font-600" v-html="countName.staff[lang.prefix]"/>
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
    ru: 'Продукции',
    uz: 'Продукции',
    en: 'Продукции',
  },
  partners: {
    ru: 'Партнеры',
    uz: 'Партнеры',
    en: 'Партнеры',
  },
  staff: {
    ru: 'Сотрудники',
    uz: 'Сотрудники',
    en: 'Сотрудники',
  },
}


onMounted(() => {
  let counter = 0
  const int = setInterval(() => {
    counter++
    counter < 401 ? count1.value = counter : clearInterval(int)
    counter < 16 ? count2.value = counter : null
    counter < 51 ? count3.value = counter : null
  }, 10)
})
</script>
<style scoped>
.zmax {
  z-index: 1000;
}
</style>
