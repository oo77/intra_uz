<template>
  <q-img :src="currentStern.image"
         class="w-full min-h-fit"
         fit="cover"/>


  <div class="container q-mx-auto mt-10">
<div class="mx-3%">
  <TextContentStyle :content="currentStern.content1[lang.prefix]"
                    :title="currentStern.title[lang.prefix]"/>

  <q-img :src="currentStern.images[0]"
         class=" rounded-3 w-100% min-h-fit my-30px"
         fit="contain"/>

  <p v-if="currentStern.content2[lang.prefix] != ''"
     class="text-justify text-16px ma-0"
     lg="text-20px"
     v-html="currentStern.content2[lang.prefix]"/>

  <q-img :src="currentStern.images[1]"
         class=" rounded-3 w-100% min-h-fit my-30px"
         fit="contain"/>
</div>

  </div>
</template>

<script lang="ts" setup>
import {TypeOfsternBase} from 'src/data/SternBase/SternBase'
import TextContentStyle from 'components/slidersComponent/TextContentStyle.vue'
import {useRoute, useRouter} from 'vue-router'
import BreedCardMain from "components/slidersComponent/BreedCardMain.vue";
import {useLanguageStore} from "stores/lang";
import {ref} from 'vue'

const router = useRouter()
const route = useRoute();
const lang = useLanguageStore()

const currentStern = ref(TypeOfsternBase.find((s) => s.name == route.params.name))
const filteredStern = ref(TypeOfsternBase.filter((stern) => stern.name != route.params.name))


async function goTo(stern: any) {
  await router.push(stern.route.path)
  currentStern.value = TypeOfsternBase.find((s) => s.name == route.params.name)
  filteredStern.value = TypeOfsternBase.filter((s) => s.name != route.params.name)
}


</script>

<style scoped>

</style>
