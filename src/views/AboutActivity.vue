<template>
  <q-img :src="act.mainImgUrl" class="w-full min-h-fit" fit="cover"/>
  <div class="container q-mx-auto mt-30px" md="mt-50px">

    <div v-if="isRabbit">
      <TextContentStyle :content="act.content" :title="act.title"/>

      <TextContentStyle :content="'labaratoryContent'" :title="'labaratory'" class="col text-center"/>
      <q-img :src="images.mainImgSlyad16" class="rounded-30px mx-3% w-94% min-h-fit mb-30px" fit="cover"/>

      <TextContentStyle :content="'slaughterContent'" :title="'slaughter'"/>
      <q-img :src="images.mainImgSlyad14" class="rounded-30px mx-3% w-94% min-h-fit mb-30px" fit="cover"/>
      <ProductList :products="products.getFreezeProducts" title="freezeProducts"/>
      <ProductList :products="products.getSemiProducts" title="semiProducts"/>
      <ProductList :products="products.getSubProducts" title="subProducts"/>
    </div>

    <div v-else>
      <TextContentStyle :content="act.content1" :title="act.title"/>
      <q-img :src="act.img1" class="rounded-30px mx-3% w-94% min-h-fit mb-30px" fit="contain"/>
      <p class="text-justify text-16px ma-0 mx-5%" lg="text-20px  mx-0">{{ lang.getLang(act.content2) }}</p>
      <q-img :src="act.img2" class=" rounded-30px mx-3% w-94% min-h-fit my-30px" fit="contain"/>
    </div>
  </div>

</template>

<script setup>
import {images} from "src/utils/ImgLocation";
import {onMounted} from "vue";
import {useRoute} from 'vue-router'
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import ProductList from "components/ProductList.vue"
import {useProducts} from 'stores/products'
import {useLanguageStore} from "stores/lang";

const lang = useLanguageStore()
const products = useProducts()
const route = useRoute()


const typeActivty = [
  {id: 1, name: 'rabbitBreed', title: 'rabbitBreed', content: 'rabbitBreedContent', mainImgUrl: images.rabbitFeedMain},
  {
    id: 2,
    name: 'rabbitFeed',
    title: 'rabbitFeed',
    content1: 'rabbitFeedContent1',
    content2: 'rabbitFeedContent2',
    img1: images.rabbitFeedimg1,
    img2: images.rabbitFeedimg2,
    mainImgUrl: images.rabbitBreed
  },
  {
    id: 3,
    name: 'greenHouseProd',
    title: 'greenHouseProd',
    content1: 'greenHouseProdContent1',
    content2: 'greenHouseProdContent2',
    img1: images.greenHouseProdimg1,
    img2: images.greenHouseProdimg2,
    mainImgUrl: images.greenHouse
  },
  {
    id: 4,
    name: 'mineralFert',
    title: 'mineralFert',
    content1: 'mineralFertContent1',
    content2: 'mineralFertContent2',
    img1: images.mineralFertimg1,
    img2: images.mineralFertimg2,
    mainImgUrl: images.rabbitBoynya
  },
]


const act = typeActivty.find((act) => act.name == route.query.name)
const isRabbit = route.query.name == 'rabbitBreed'


onMounted(() => {
  console.log(act)
})

</script>

