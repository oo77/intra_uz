<template>

  <div v-if="isSternBase">
    <div class="grid grid-cols-4 mx-5 gap-2 q-mx-auto lt-sm mt-5">
      <div v-for="stern of typeOfsternBase" class="flex justify-center gap-3">
        <q-icon
          :name=" 'img:'+stern.icon"
          class="w-50px h-50px cursor-pointer rounded-50% border-2 border-#39B44A pa-1"
          @click="goTo(stern)"/>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-0 gt-xs">

      <BreedCardMain v-for="stern of typeOfsternBase"
                     :typeOfBreed="stern"
                     @goToPage="goTo"
      />
    </div>

  </div>

  <q-img v-else :src="activity.mainImg"
         class="w-full min-h-fit"
         fit="cover"/>

  <div class="container q-mx-auto mt-10 ">
    <div class="mx-3%">

      <div v-if="isRabbit">
        <TextContentStyle :content="activity.rabbitBreed.content[lang.prefix]"
                          :title="activity.rabbitBreed.title[lang.prefix]"/>

        <TextContentStyle :content="activity.laboratory.content1[lang.prefix]" :title="activity.laboratory.title[lang.prefix]"
                          @isLab="goToLab"
        />

        <q-img :src="activity.laboratory.image"
               class="rounded-0 sm:rounded-3 w-100% min-h-fit mb-30px"
               fit="cover"/>
        <p class="text-justify text-16px ma-0"
           lg="text-20px  mx-0"
           v-html="activity.laboratory.content2[lang.prefix]"/>


        <ProductList :products="Products.freezeProducts" :title="ProductsTitle.freezeProducts"/>
        <ProductList :products="Products.subProducts" :title="ProductsTitle.subProducts"/>
        <ProductList :products="Products.semiProducts" :title="ProductsTitle.semiProducts"/>

      </div>

      <div v-else>

        <TextContentStyle :content="activity.content1[lang.prefix]"
                          :title="activity.title[lang.prefix]"/>

        <q-img v-if="activity.image[0]"
               :src="activity.image[0]"
               class="rounded-0 sm:rounded-3 w-100% min-h-fit"
               fit="contain"/>

        <p class="text-justify text-16px my-5"
           lg="text-20px"
           v-html="activity.content2[lang.prefix]"/>

        <q-img v-if="activity.image[1]"
               :src="activity.image[1]"
               class="rounded-0 sm:rounded-3 w-100% min-h-fit mb-30px"
               fit="contain"/>

        <Subscribe v-if="isCooperation"/>
      </div>
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
import Subscribe from "components/slidersComponent/subscribe.vue";
import {scroll} from 'quasar'

const {getScrollTarget, setVerticalScrollPosition} = scroll
const lang = useLanguageStore()
const route = useRoute()
const router = useRouter()

let name = route.query.name

if (route.query.name == 'rabbit' || route.query.name == 'laboratory') {
  name = 'rabbit'
}

const activity = Activity.find((act) => act.name == name)
const isSternBase = name == 'sternBase'
const isRabbit = name == 'rabbit'
const isCooperation = name == 'cooperation'
const typeOfsternBase = Activity.find((act) => act.name == 'sternBase')?.typeOfsternBase

function goTo(stern: any) {
  router.push(stern.route)
}

function goToLab(lab: any) {
  if (route.query.name == 'laboratory') {
    setTimeout(() => {
      const target = getScrollTarget(lab)
      const offset = lab.offsetTop
      const duration = 1000
      setVerticalScrollPosition(target, offset, duration)
    }, 100)
  }
}

</script>

