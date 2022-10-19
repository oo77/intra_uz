<template>
  <div class="container" >
    <q-carousel
      v-model="slide"
      :autoplay="true"
      animated
      arrows
      class="h-130 lg:h-100 q-mx-auto transparent mt-10"
      infinite
      swipeable
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-carousel-slide v-for="item in AboutActivity.length" :name="item"
                        class="flex items-center gap-y-3 overflow-visible justify-between leading-tight h-fit">
        <q-img :src="AboutActivity[item-1].image"
               class="col w-60 h-60 lg:w-80 lg:h-80 q-mx-auto"
               fit="contain"
        />

        <div class="col grid h-fit">
          <p class="content xl:text-26px sm:text-22px text-18px lg:text-left xl:text-left text-justify lg:text-left "
             v-html="AboutActivity[item-1].description[lang.prefix]"/>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useLanguageStore} from 'src/stores/lang'
import {useRouter} from 'vue-router'
import {AboutActivity} from "src/data/Home/about_activity";

const lang = useLanguageStore()
const router = useRouter();
let slide = ref(1)

function goTo(item: any) {
  router.push(item.to.route)
}


</script>

<style lang="css" scoped>
.title {
  font-weight: 600;
  color: #292D95;
}

.content {
  font-weight: 400;
  line-height: 30px;
  color: #222222;
}
</style>
