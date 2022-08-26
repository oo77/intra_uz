<template>
  <q-card class="shadow-0 h-85 flex justify-center mx-10% content-between border-slate-200 b-1px rounded-xl pa-20px" sm=" pa-20px b-0" focus="bg-red" md="mx-0"  @click="$emit('target', prod)" @mouseenter="hover=!hover"
          @mouseleave="hover=!hover">
    <q-card-section class="w-80 order-2" sm="order-1">
      <q-img :src="prod.url" fit="contain" />
    </q-card-section>
    <q-card-section class="pa-0 order-1 " sm="order-2">
      <p class="font-600 text-22px text-center ma-0 pb-10px" sm="border-t-3px border-slate-400">{{ lang.getLang(prod.title) }}</p>
      <div :class="{'active':hover}" class="q-mx-auto none"></div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import {useLanguageStore} from 'stores/lang'
import {defineProps, ref} from 'vue'


const lang = useLanguageStore()
const hover = ref(false)
const {prod} = defineProps({prod: Object})
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
