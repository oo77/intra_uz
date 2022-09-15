<template>
  <q-carousel
    v-model="slide"
    animated
    arrows
    :autoplay="true"
    class=" w-90% min-h-130  q-mx-auto transparent"
    control-color="transparent"
    infinite
    md="min-h-100"
    :swipeable="true"
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide v-for="item in activities" :name="item.title[prefix]"
                      class=" grid lg:grid-cols-2 md:grid-cols-1 items-center gap-y-3 overflow-hidden justify-between leading-tight">
      <q-img :src="item.image"
             class="min-w-150px min-h-150px w-100% h-100% q-mx-auto"
             fit="contain"
             lg="w-70% h-70%"
      />

      <div grid>
        <p class=" text-center my-0 text-26px c-#39B44A mb-5px font-600 leading-tight" lg="text-left mb-30px text-32px"
           v-html="item.title[prefix]"/>
        <p class="content xl:text-20px text-16px lg:text-left xl:text-left text-justify lg:text-left "
           v-html="filter(item.description[prefix])"/>
        <q-btn :to="item.to.route"
               class="normal-case text-20px rounded-lg c-#39B44A w-30% justify-self-center transition-duration-400"
               hover="bg-white shadow-sm shadow-#39B44A font-600 transition-duration-400"
               md="justify-self-end"
               unelevated
               v-html="item.to[prefix]"
        />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {AboutActivity} from 'src/data/Home/about_activity'
import {useLanguageStore} from 'src/stores/lang'
import {useRouter} from 'vue-router'

const activities = ref(AboutActivity)
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
