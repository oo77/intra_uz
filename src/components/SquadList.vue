<template>
  <div>
    <p class="text-center  text-26px c-[rgb(22,46,130)] mb-20px font-600 leading-tight" md=" mb-30px text-32px"> Наша команда </p>>
    <div class="grid grid-cols-4 gap-5" >
      <SquadCard v-for="person in squadList" :person="person"/>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {squadList} from 'src/data/Home/squad_Data'
import SquadCard from 'src/components/slidersComponent/squadCard.vue'


</script>

<style scoped>

</style>
