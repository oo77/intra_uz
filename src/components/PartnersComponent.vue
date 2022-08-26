<template>
    <section class="mx-5%">
        <p class="text-center  text-26px c-#39B44A mb-20px font-600 leading-tight" md=" mb-30px text-32px">
          {{ lang.translate['partnersTitle'] }}
        </p>
       <PartnersSlide/>
    </section>
</template>

<script setup lang="ts">
import {useLanguageStore} from 'stores/lang'
import PartnersSlide from 'src/components/slidersComponent/PartnersSlide.vue'

const lang = useLanguageStore()
</script>

