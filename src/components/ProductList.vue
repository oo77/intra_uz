<template>
  <!--  Razlichniye producti   -->
  <q-intersection class="mb-20px" once transition="slide-up">
    <p
      class="c-#39B44A text-center text-26px mt-50px font-600 text-center px-5%"
      md="text-left pa-0 text-32px"
      v-html="title[lang.prefix]"
    />

    <div v-if="slide && $q.screen.gt.sm" class="slider transparent ma-0">
      <div class="slide-track transparent">
        <product-card v-for="prod in products" :product="prod" @target="dialog"/>
        <product-card v-for="prod in products" :product="prod" @target="dialog"/>
        <product-card v-for="prod in products" :product="prod" @target="dialog"/>
      </div>
    </div>

    <div v-else class="grid grid-cols-1 gap-10" sm="grid-cols-2" xl="grid-cols-4">
      <product-card v-for="prod in products" :product="prod" @target="dialog"/>
    </div>

  </q-intersection>

  <!--    Dialogiviy okno -->
  <q-dialog v-model="openDialog" persistent transition-duration="500">
    <q-card :square="false" class="text-center bg-#39B44A c-white rounded-10">
      <q-card-section class="pa-0 w-full h-100">
        <q-icon
          class="absolute right-0 c-black opacity-70 z-20"
          name="close"
          size="xl"
          @click="openDialog = false"
        ></q-icon>
        <q-img :src="currentProd.image" fit="contain" class="bg-white h-100% w-100% z-10"/>
      </q-card-section>

      <q-card-section class="">
        <div class="text-h7 font-600"
             md="text-32px"
             v-html="currentProd.title[lang.prefix]"/>

      </q-card-section>

      <q-card-section class="q-pt-none text-h7"
                      md="text-20px"
                      v-html="currentProd.description[lang.prefix]"/>
    </q-card>
  </q-dialog>
</template>

<script setup>
import {ref} from "vue";
import {useLanguageStore} from "stores/lang";
import ProductCard from "components/slidersComponent/ProductCard.vue";

const {products, title, slide} = defineProps(['products', 'title', 'slide']);

const lang = useLanguageStore();

const currentProd = ref({});
let openDialog = ref(false);

const dialog = (product) => {
  currentProd.value = product;
  openDialog.value = true;
};
</script>

<style lang="scss" scoped>
.none {
  width: 0px;
  height: 4px;
  background-color: black;
  transition-duration: 1s;
}

.active {
  height: 4px;
  background-color: black;
  width: 100%;
}


.carousel {
  align-items: center;
  display: flex;
  justify-content: center;
}


$animationSpeed: 600s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100%))
  }
}


// Styling
.slider {
  display: flex;
  background: white;
  align-items: center;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: fit-content;


  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    height: fit-content;
  }
}


</style>


