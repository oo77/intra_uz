<template>
  <q-card class="shadow-0 h-fit flex justify-center mx-10% content-between border-slate-200 b-1px rounded-xl pa-20px"
          focus="bg-red"
          md="mx-0"
          sm=" pa-20px b-0"
          @click="$emit('target', product)"
          @mouseenter="hover=!hover"
          @mouseleave="hover=!hover">

    <q-card-section class="w-80 order-2"
                    sm="order-1">

      <q-img :src="product.image"
             fit="contain"/>

    </q-card-section>

    <q-card-section class="pa-0 order-1 " sm="order-2">

      <p class="font-600 text-22px text-center ma-0 pb-10px w-75"
         sm="border-t-3px border-slate-400"
         v-html="product.title[lang.prefix]"
      />
      <div :class="{'active':hover}"
           class="q-mx-auto none">
      </div>

    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import {useLanguageStore} from 'stores/lang'
import {defineProps, ref} from 'vue'


const lang = useLanguageStore()
const hover = ref(false)
const {product} = defineProps({
  product: Object
})
</script>


<style lang="css" scoped>
.none {
  width: 0;
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
