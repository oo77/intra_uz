<template>
  <q-img :src="images.AboutUsMain" class="w-full min-h-fit" fit="cover"/>
  <div class="container q-mx-auto z-1">
    <TypesOfActivity class="mt-20px" md="mt-50px"/>
    <ProductList :products="products.getOtherProducts" title="otherProducts"/>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {images} from "src/utils/ImgLocation";
import {useLanguageStore} from 'stores/lang'
import {useProducts} from 'stores/products'
import {useRouter} from 'vue-router'
import ProductList from "components/ProductList.vue"
import TypesOfActivity from "components/TypesOfActivity.vue"


const router = useRouter();
const path = (prod) => {
  router.push('/activty?name=' + prod.name)
}

const products = useProducts()
const lang = useLanguageStore()
let slide = ref(1)
let auto = ref(true)


</script>

