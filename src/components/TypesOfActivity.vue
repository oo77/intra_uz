<template>
  <section class="section">
    <div class="container q-mx-auto">

      <p class="c-#39B44A text-26px ma-0 font-600 text-center mx-3%"
         md="mb-30px text-32px"
         v-html="Titles.typeOfActivity[lang.prefix]"
      />

      <div class="grid grid-cols-2 mx-10% gap-20px gt-xs"
           md="mx-0 grid-cols-3"
           xl="mx-0 grid-cols-6">

        <q-card v-for="act in TypesOfActivtyCard.length"
                class="transparent b-0 shadow-0 h-75 transition-duration-100 "
                hover="border-black border-b-5px  transition-duration-100 cursor-pointer"
                @click="router.push(TypesOfActivtyCard[act-1].route)"
        >
         <div class="flex w-50 h-50 q-mx-auto">
           <q-img :src="TypesOfActivtyCard[act-1].image"
                  class="h-90% w-90% animate-bounce q-mx-auto"
                  fit="contain"/>
         </div>

          <p class=" text-26px font-600 text-center pt-15px"
             v-html="TypesOfActivtyCard[act-1].title[lang.prefix]"/>

        </q-card>

      </div>

      <q-carousel
        v-model="slide"
        animated
        arrows
        :autoplay="true"
        class="h-fit bg-transparent q-mx-auto lt-sm"
        infinite
        :swipeable="true"
        transition-duration="500"
        transition-next="slide-left"
        transition-prev="slide-right"
      >

        <q-carousel-slide
          v-for="act in TypesOfActivtyCard.length"
          :name="act"
          class="flex justify-center h-fit">

          <q-card class="transparent w-330px h-300px flex justify-center overflow-hidden shadow-0"
                  @click="router.push(TypesOfActivtyCard[act-1].route)">
            <q-img :src="TypesOfActivtyCard[act-1].image"
                   class="h-60% w-90% mt-30px animate-bounce"
                   fit="contain"
            />
            <p class="text-26px font-600 text-center"
               v-html="TypesOfActivtyCard[act-1].title[lang.prefix]"
            />

          </q-card>

        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {TypesOfActivtyCard} from "src/data/Home/about_activity"
import {Titles} from "src/data/Home/Titles";
import {ref} from 'vue'
import {useLanguageStore} from 'stores/lang'
import {useRouter} from 'vue-router'

const router = useRouter();
const lang = useLanguageStore()
let slide = ref(1)

</script>

<style scoped>
.borderC {
  border-bottom: 5px dashed slategray;
}

@keyframes bounce {
  0%, 100% {
    -webkit-transform: translateY(-2%);
    transform: translateY(-2%);
    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@-webkit-keyframes bounce {
  0%, 100% {
    -webkit-transform: translateY(-2%);
    transform: translateY(-2%);
    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;
}
</style>
