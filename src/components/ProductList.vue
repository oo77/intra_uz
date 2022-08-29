<template>
  <!--  Razlichniye producti   -->
  <q-intersection once transition="slide-up" class="mb-20px">
    <p class="c-#39B44A text-center  text-26px mt-50px font-600 text-center px-5%" md="text-left pa-0 mb-10px text-32px">
      {{ lang.getLang(title) }}</p>
    <div class="grid grid-cols-1 gap-10" xl="grid-cols-4" sm="grid-cols-2">
      <product-card v-for="prod in products" :prod="prod" @target="dialog"/>
    </div>
  </q-intersection>


  <!--    Dialogiviy okno -->
  <q-dialog persistent v-model="openDialog" transition-duration="500">
    <q-card square="false" class="text-center bg-#39B44A c-white rounded-xl">
      <q-icon @click="openDialog=false" class="absolute right-0 c-black opacity-70"  name="close" size="xl"></q-icon>
      <img class="bg-white" :src="currentProd.url">

      <q-card-section class="">
        <div class="text-h7 font-600" md="text-32px">{{  lang.getLang(currentProd.title) }}</div>
        <div class="q-mx-auto rounded-xl w-80px h-5px bg-white mt-5px"></div>
      </q-card-section>

      <q-card-section class="q-pt-none text-h7" md="text-20px">
        {{  lang.getLang(currentProd.description) }}

      </q-card-section>

    </q-card>
  </q-dialog>

</template>

<script setup>
import {ref} from 'vue'
import {useLanguageStore} from 'stores/lang'
import ProductCard from "components/slidersComponent/ProductCard.vue";

const {products, title} =defineProps({products: Array, title: String})

const lang = useLanguageStore()

const currentProd = ref({})
let openDialog = ref(false)

const dialog = (product) => {
  currentProd.value = product
  openDialog.value = true
}
</script>

<style lang="css" scoped>
.none {
  width: 0px;
  height: 4px;
  background-color: black;
  transition-duration: 1s;
}

.active {
  height: 4px;
  background-color: black;
  width: 100%;
}
</style>


