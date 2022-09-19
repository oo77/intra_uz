<template>

  <div class="grid grid-cols-4 mx-5 gap-2 q-mx-auto lt-sm mt-5">
    <div v-for="stern of typeOfsternBase" class="flex justify-center gap-3">
      <q-icon
        :name=" 'img:'+stern.icon"
        class="w-50px h-50px cursor-pointer rounded-50% border-2 border-#39B44A pa-1"
        style="color:red"
        @click="goTo(stern)"/>
    </div>
  </div>

  <div v-if="isSternBase"
       class="grid grid-cols-2 gap-0 gt-xs">

    <BreedCardMain v-for="stern of typeOfsternBase"
                   :typeOfBreed="stern"
                   @goToPage="goTo"
    />
  </div>

  <q-img v-else :src="activity.mainImg"
         class="w-full min-h-fit"
         fit="cover"/>

  <div class="container q-mx-auto mt-30px"
       md="mt-50px">

    <div v-if="isRabbit">
      <TextContentStyle :content="activity.rabbitBreed.content[lang.prefix]"
                        :title="activity.rabbitBreed.title[lang.prefix]"/>

      <TextContentStyle :content="activity.laboratory.content[lang.prefix]"
                        :title="activity.laboratory.title[lang.prefix]"
      />

      <q-img :src="activity.laboratory.image"
             class="rounded-30px mx-3% w-94% min-h-fit mb-30px"
             fit="cover"/>

      <TextContentStyle :content="activity.slaughter.content[lang.prefix]"
                        :title="activity.slaughter.title[lang.prefix]"/>

      <q-img :src="activity.slaughter.image"
             class="rounded-30px mx-3% w-94% min-h-fit mb-30px"
             fit="cover"/>

      <ProductList :products="Products.freezeProducts" :title="ProductsTitle.freezeProducts"/>
      <ProductList :products="Products.subProducts" :title="ProductsTitle.subProducts"/>
      <ProductList :products="Products.semiProducts" :title="ProductsTitle.semiProducts"/>

    </div>

    <div v-else>
      <TextContentStyle :content="activity.content1[lang.prefix]"
                        :title="activity.title[lang.prefix]"/>
      <q-img :src="activity.image[0]"
             class="rounded-30px mx-3% w-94% min-h-fit mb-30px"
             fit="contain"/>
      <p class="text-justify text-16px ma-0 mx-5%"
         lg="text-20px  mx-0"
         v-html="activity.content2[lang.prefix]"/>

      <q-img :src="activity.image[1]"
             class=" rounded-30px mx-3% w-94% min-h-fit my-30px"
             fit="contain"/>
    </div>

  </div>

</template>

<script lang="ts" setup>
import ProductList from "components/ProductList.vue"
import BreedCardMain from "components/slidersComponent/BreedCardMain.vue";
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {Activity} from 'src/data/Activity/Activity'
import {Products, ProductsTitle} from "src/data/Products/Products";
import {useLanguageStore} from "stores/lang";
import {useRoute, useRouter} from 'vue-router'


const lang = useLanguageStore()
const route = useRoute()
const router = useRouter()
const activity = Activity.find((act) => act.name == route.query.name)
const isSternBase = route.query.name == 'sternBase'
const isRabbit = route.query.name == 'rabbit'
const typeOfsternBase = Activity.find((act) => act.name == 'sternBase').typeOfsternBase

function goTo(stern: any) {
  router.push(stern.route)
}

</script>

