<template>
  <section class="section">
    <div class="container q-mx-auto">
      <p class="c-#39B44A text-26px ma-0 font-600 text-center" md="mb-30px text-32px">
        {{ lang.getLang('areasOfActivity') }}</p>

      <div class="grid grid-cols-2 mx-10% gap-40px  gt-sm" xl="mx-0 grid-cols-4">
        <q-card v-for="act in typeActivty" class="transparent q-mx-auto b-0 shadow-0 w-80% h-90 transition-duration-100 "
                hover="border-black border-b-5px  transition-duration-100 "
                @click="path(act)">
          <q-img :src="act.url" class="h-60% animate-bounce pa-10%" fit="contain"/>
          <p class=" text-26px font-600 text-center pt-30px">{{ lang.getLang(act.name) }}</p>
        </q-card>
      </div>

      <q-carousel
        v-model="slide"
        :autoplay="auto"
        animated
        arrows
        class="h-fit bg-transparent q-mx-auto lt-md"
        infinite
        swipeable
        transition-duration="500"
        transition-next="slide-left"
        transition-prev="slide-right"
      >
        <q-carousel-slide v-for="act in typeActivty" :name="act.id" class="flex justify-center h-fit">

          <q-card class="transparent w-330px h-300px flex justify-center overflow-hidden shadow-0"
                  @click="path(act)">
            <q-img :src="act.url" class="h-60% w-90% mt-30px animate-bounce" fit="contain"/>
            <p class="text-26px font-600 mt-20px text-center">{{ lang.getLang(act.name) }}</p>

          </q-card>

        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {useLanguageStore} from 'stores/lang'
import {images} from 'src/utils/ImgLocation'
import {useRouter} from 'vue-router'

const router = useRouter();

const lang = useLanguageStore()
let slide = ref(1)
let auto = ref(true)

const typeActivty = [
  {id: 1, url: images.rabbitS, name: 'rabbitBreed'},
  {id: 2, url: images.RabbitFeed, name: 'rabbitFeed'},
  {id: 3, url: images.green1, name: 'greenHouseProd'},
  {id: 4, url: images.MineralFeed, name: 'mineralFert'}
]

const path = (prod) => {
  router.push('/activty?name=' + prod.name)
}


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
