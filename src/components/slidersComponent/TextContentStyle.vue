<template>
  <p class="text-center c-#39B44A text-26px font-700 mb-10px " lg=" text-32px" v-html="title"/>
  <p class="text-justify text-16px mx-5% mb-30px" lg="text-20px  mx-0 " v-html="content"/>
</template>

<script setup>
import {defineProps} from "vue";
const {title, content} = defineProps({title:String, content: String})
</script>

