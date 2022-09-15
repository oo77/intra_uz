<template>
  <q-img :src="AboutUsMain"
         class="w-full min-h-fit"
         fit="cover"/>
  <div class="container q-mx-auto z-1">

    <TypesOfActivity class="my-20px"
                     md="my-30px"/>
    <TextContentStyle :content="Content.description[lang.prefix]"
                      :title="Content.title[lang.prefix]"/>
    <ProductList :products="products"
                 :slide="true"
                 :title="ProductsTitle.differentProducts[lang.prefix]"/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import ProductList from "components/ProductList.vue"
import TypesOfActivity from "components/TypesOfActivity.vue"
import {useLanguageStore} from "stores/lang";
import {AboutUsMain, Products, ProductsTitle, Content} from "src/data/Products/Products";
import {useOurProductsMeta} from "src/meta/our_products";
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'

const lang = useLanguageStore();
useOurProductsMeta()

const router = useRouter();
const products = [...Products.freezeProducts, ...Products.subProducts, ...Products.semiProducts]
let slide = ref(1)
let auto = ref(true)


</script>

