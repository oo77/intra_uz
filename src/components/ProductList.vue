<template>
  <!--  Razlichniye producti   -->
  <q-intersection once transition="slide-up" class="mb-20px">
    <p
      class="c-#39B44A text-center text-26px mt-50px font-600 text-center px-5%"
      md="text-left pa-0 mb-10px text-32px"
    >
      {{ lang.getLang(title) }}
    </p>

    <div class="slider transparent" v-if="slide && $q.screen.gt.sm">
      <div class="slide-track transparent">
        <product-card v-for="prod in products" :prod="prod" @target="dialog" />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10" xl="grid-cols-4" sm="grid-cols-2" v-else>
      <product-card v-for="prod in products" :prod="prod" @target="dialog" />
    </div>

  </q-intersection>

  <!--    Dialogiviy okno -->
  <q-dialog persistent v-model="openDialog" transition-duration="500">
    <q-card square="false" class="text-center bg-#39B44A c-white rounded-xl">
      <q-icon
        @click="openDialog = false"
        class="absolute right-0 c-black opacity-70"
        name="close"
        size="xl"
      ></q-icon>
      <img class="bg-white" :src="currentProd.url" />

      <q-card-section class="">
        <div class="text-h7 font-600" md="text-32px">
          {{ lang.getLang(currentProd.title) }}
        </div>
        <div class="q-mx-auto rounded-xl w-80px h-5px bg-white mt-5px"></div>
      </q-card-section>

      <q-card-section class="q-pt-none text-h7" md="text-20px">
        {{ lang.getLang(currentProd.description) }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useLanguageStore } from "stores/lang";
import ProductCard from "components/slidersComponent/ProductCard.vue";

const { products, title, slide } = defineProps({
  products: Array,
  title: String,
  slide: Boolean,
});

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


$animationSpeed: 100s;

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


  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
  }
}


</style>


