<template>
  <div class="gap-30px grid grid-cols-4 gt-sm">

    <div v-for="prod in typeProd" class="bg-white h-hit">
      <div class="w-330px min-w-15vh h-450px border-0 hover:shadow-1 flex justify-center">
        <q-img :src="prod.url" class="w-80% h-60% mt-10px" fit="contain"/>
        <p class="text-26px font-600 mt-50px text-center">{{ lang.translate[prod.name] }}</p>
      </div>
    </div>

  </div>

  <div class="flex justify-center lt-md bg-transparent">
    <q-carousel
      v-model="slide"
      :autoplay="auto"
      animated
      arrows
      class="h-fit bg-transparent"
      infinite
      transition-duration="500"
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-carousel-slide v-for="prod in typeProd" :name="prod.id" class="flex justify-center h-fit">
        <q-card class="w-90vw max-w-400px h-500px flex justify-center">
          <q-img :src="prod.url" class="h-60% w-90% mt-30px" fit="contain"/>
          <q-card-section>
            <p class="text-26px font-600 mt-50px text-center">{{ lang.translate[prod.name] }}</p>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
export default {
  name: "IndustriesInfo"
}
</script>

<style scoped>

</style>
