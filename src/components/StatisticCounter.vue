<template>
  <div class="zmax row  bg-white shadow-md shadow-slate py-20px q-mx-auto w-100vw max-w-1200px md:px-20px "
       md="mt-30px rounded-xl mt-50px">

    <div class="col  grid  items-center">
      <p class="text-center c-slate-600 font-600 c-slate  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px">
        +{{ count3 }}</p>
      <span class="lg:text-32px xl:text-32px text-16px col text-center font-600">{{
          lang.getLang('products')
        }}</span>
    </div>

    <div class="col grid  items-center">
      <p class="text-center c-slate-600 font-600 c-slate  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px">
        +{{ count2 }}</p>
      <span class="lg:text-32px xl:text-32px text-16px col text-center font-600">{{
          lang.getLang('partners')
        }}</span>
    </div>

    <div class="col grid  items-center">
      <p class="text-center c-slate-600 font-600 c-slate  ma-10px xl:text-100px lg:text-100px md:text-50px text-32px">
        +{{ count1 }}</p>
      <span class="lg:text-32px xl:text-32px text-16px col text-center font-600">{{
          lang.getLang('staff')
        }}</span>
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

onMounted(() => {
  let counter = 0
  const int = setInterval(() => {
    counter++
    counter < 126 ? count1.value = counter : clearInterval(int)
    counter < 16 ? count2.value = counter : null
    counter < 76 ? count3.value = counter : null
  }, 20)
})
</script>
<style scoped>
.zmax {
  z-index: 1000;
}
</style>
