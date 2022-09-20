<template>
  <div class="container" >
    <q-carousel
      v-model="slide"
      :autoplay="true"
      animated
      arrows
      class=" w-90% min-h-130  q-mx-auto transparent md:min-h-100"
      infinite
      swipeable
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-carousel-slide v-for="item in [0,1,2,3,4,5,6]" :name="item"
                        class="grid lg:grid-cols-2 md:grid-cols-1 items-center gap-y-3 overflow-hidden justify-between leading-tight">
        <q-img :src="AboutActivity[item].image"
               class="min-w-150px min-h-150px w-100% h-100% q-mx-auto"
               fit="contain"
               lg="w-70% h-70%"
        />

        <div class="grid">
          <p class=" text-center my-0 text-26px c-#39B44A mb-5px font-600 leading-tight"
             lg="text-left mb-30px text-32px"
             v-html="AboutActivity[item].title[prefix]"/>
          <p class="content xl:text-20px text-16px lg:text-left xl:text-left text-justify lg:text-left "
             v-html="filter(AboutActivity[item].description[prefix])"/>
          <q-btn class="normal-case text-20px rounded-lg c-#39B44A flex items-center justify-self-center transition-duration-400"
                 hover="bg-white shadow-sm shadow-#39B44A font-600 transition-duration-400"
                 md="justify-self-end"
                 unelevated
                 @click="goTo(AboutActivity[item])"
                 v-html="AboutActivity[item].to[prefix]"
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


const prefix = useLanguageStore().prefix
const router = useRouter();
let slide = ref(1)

function filter(value: string,) {
  const index = value.indexOf(' ', 200)
  if (index == -1) {
    return `${value}...`
  }
  return `${value.slice(0, index)}...`
}

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
