<template>
  <p class="text-center c-#39B44A text-26px font-700 mb-10px " lg=" text-32px">
    {{ lang.getLang(title) }}</p>
  <p class="text-justify text-16px mx-5% mb-30px" lg="text-20px  mx-0 ">{{ lang.getLang(content) }}</p>
</template>

<script setup>
import {defineProps} from "vue";
import {useLanguageStore} from "stores/lang";

const lang = useLanguageStore()
const {props} = defineProps({title:String, content: String})
</script>

