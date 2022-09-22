<template>
  <p ref="me" class="text-center c-#39B44A text-26px font-700 mb-3 " lg=" text-32px" v-html="title"/>
  <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 " v-html="content"/>
</template>

<script setup>
import {defineProps, ref, defineEmits, onMounted} from "vue";
import {useRouter} from "vue-router";

const {title, content} = defineProps({title: String, content: String})
const router = useRouter()
const me = ref()
const emits = defineEmits(['isLab'])

onMounted(() => {
  emits('isLab', me.value)
})

</script>

