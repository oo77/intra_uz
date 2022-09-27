<template>
  <div class="container" >
    <q-carousel
      v-model="slide"
      :autoplay="true"
      animated
      arrows
      class="h-120 lg:h-90 q-mx-auto transparent"
      infinite
      swipeable
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-carousel-slide v-for="item in AboutActivity.length" :name="item"
                        class="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-3 overflow-visible justify-between leading-tight h-fit">
        <q-img :src="AboutActivity[item-1].image"
               class="w-40 h-40 lg:w-60 lg:h-60 q-mx-auto"
               fit="contain"
        />

        <div class="grid h-fit">
          <p class=" text-center my-0 text-26px c-#39B44A mb-1 font-600 leading-tight"
             lg="text-left mb-30px text-32px"
             v-html="AboutActivity[item-1].title[lang.prefix]"/>
          <p class="content xl:text-20px sm:text-16px text-12px lg:text-left xl:text-left text-justify lg:text-left "
             v-html="AboutActivity[item-1].description[lang.prefix]"/>
          <q-btn class="normal-case text-20px rounded-lg c-#39B44A flex items-center justify-self-center transition-duration-400"
                 hover="bg-white shadow-sm shadow-#39B44A font-600 transition-duration-400"
                 md="justify-self-end"
                 unelevated
                 @click="goTo(AboutActivity[item-1])"
                 v-html="AboutActivity[item-1].to[lang.prefix]"
          />
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
