<template>

  <div class="container q-mx-auto r">
    <p class="text-center  text-26px c-[rgb(22,46,130)] mt-3 sm:mt-10 font-600"
       md="text-32px"
       v-html="Titles.location[lang.prefix]"/>
    <iframe
      class="q-mx-auto border-4 b-[rgb(22,46,130)]  "
      height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4492.6681189271085!2d69.28089302736635!3d41.27630391442127!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1666001689945!5m2!1sru!2s"
      width="100%"

    ></iframe>


  </div>

</template>

<script lang="ts" setup>
import {useLanguageStore} from 'stores/lang'
import {Titles} from "src/data/Home/Titles";
import {ref} from "vue";

const dialogLocation = ref(false)
const lang = useLanguageStore()
</script>

<style scoped>


</style>
