<template>
  <section class="container  q-mx-auto">
    <q-carousel
      v-model="slide"
      :autoplay="auto"
      animated
      arrows
      swipeable
      class=" w-90% min-h-450px  q-mx-auto transparent"
      infinite
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-carousel-slide v-for="item in contentList" :name="item.id"
                        class=" grid lg:grid-cols-2 md:grid-cols-1 items-center gap-y-3 overflow-hidden justify-between leading-tight  ">
        <q-img :src="item.imgUrl" class="min-w-150px min-h-150px w-100% h-100% q-mx-auto" fit="contain" lg="w-70% h-70%"/>
        <div grid >
          <p class=" text-center my-0 text-26px c-#39B44A mb-5px font-600 leading-tight" lg="text-left mb-30px text-32px">
            {{ lang.getLang(item.title) }}</p>
          <p class="content xl:text-20px text-16px lg:text-left xl:text-left text-justify lg:text-left ">
            {{ filter(lang.getLang(item.content), 18) }}</p>
          <q-btn @click="path(item)" class="normal-case text-20px rounded-lg c-#39B44A w-30% justify-self-end transition-duration-400" hover="bg-white shadow-sm shadow-#39B44A font-600 transition-duration-400" unelevated>{{lang.getLang('more')}}</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useLanguageStore} from 'stores/lang'
import {images} from 'src/utils/ImgLocation'
import {useRouter} from 'vue-router'

const router = useRouter();

const lang = useLanguageStore()
let slide = ref(1)
let auto = ref(true)

const contentList = [
  {id: 1, pathName: 'rabbitBreed', title: 'rabbitBreed', content: 'rabbitBreedDes', imgUrl: images.mainAboutCompanyImg1},
  {id: 2, pathName: 'rabbitBreed', title: 'labaratory', content: 'labaratoryContent', imgUrl: images.mainAboutCompanyImg2},
  {id: 3, pathName: 'rabbitFeed', title: 'rabbitFeed', content: 'rabbitFeedDes', imgUrl: images.mainAboutCompanyImg3},
  {id: 4,  pathName: 'mineralFert',title: 'mineralFert', content: 'mineralFertDes', imgUrl: images.mainAboutCompanyImg4},
  {id: 5,  pathName: 'greenHouseProd',title: 'greenHouseProd', content: 'greenHouseProdDes', imgUrl: images.mainAboutCompanyImg5},
  {id: 6,  pathName: 'rabbitBreed',title: 'slaughter', content: 'slaughterContent', imgUrl: images.mainAboutCompanyImg6},
]


function filter(value: string, len: 5) {
  const index = value.indexOf(' ', 200)
  if (index==-1) {
    return `${value}...`
  }
  return `${value.slice(0, index)}...`
}
//@ts-ignore
const path = (prod) => {
  router.push('/activty?name=' + prod.pathName)
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
