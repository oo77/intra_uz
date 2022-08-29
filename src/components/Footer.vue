<template>
  <div class="h-hit bg-primary w-full max flex justify-center items-start">
    <div
      class="
        pt-30px
        flex
        items-start
        justify-center
        gap-30px
        border-b-1 border-white
        gt-sm
        z-0
      "
    >
      <div class="col ml-5vw">
        <div class="h-30% w-150px my-10px">
          <q-img :src="images.logoBlack" fit="contain" />
        </div>
        <p class="text-12px c-white opacity-70 mb-5px">
          ООО "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"
        </p>
        <p class="text-12px c-white opacity-70 mb-5px">
          СП ООО “INTERTRADE HOLDING”
        </p>
        <ul class="list-none pa-0 mt-5px flex gap-15px">
          <li>
            <q-icon class="c-white" name="fa-brands fa-facebook" size="sm" />
          </li>
          <li>
            <q-icon class="c-white" name="fa-brands fa-youtube" size="sm" />
          </li>
          <li>
            <q-icon class="c-white" name="fa-brands fa-instagram" size="sm" />
          </li>
          <li>
            <q-icon class="c-white" name="fa-brands fa-telegram" size="sm" />
          </li>
        </ul>
      </div>
      <div class="col gt-xs">
        <p class="text-14px c-white font-600">О компании</p>
        <p class="text-14px c-white opacity-70">
          Моя Мечта: «Всего за три года мы смогли пройти большой путь от смелой
          идеи до органического Агро Комплекса на 250 Га земли»
        </p>
      </div>
      <div class="col gt-sm">
        <p class="text-14px c-white font-600">Контакты</p>
        <ul class="list-none pa-0 col items-start c-white">
          <li class="flex row">
            <q-icon
              class="mr-10px c-white"
              name="fa-solid fa-location-dot"
              size="sm"
            ></q-icon>
            <p class="text-14px opacity-70">
              110907, Республика Узбекистан,<br /> Ташкентская область,
              <br />Куйичирчикский район, Беруний
            </p>
          </li>
          <li class="flex row">
            <q-icon
              class="mr-10px c-white"
              name="fa-solid fa-phone"
              size="sm"
            ></q-icon>
            <p class="text-14px opacity-70">+998-99-849-60-33</p>
          </li>
          <li class="flex row">
            <q-icon
              class="mr-10px c-white"
              name="fa-solid fa-envelope"
              size="sm"
            ></q-icon>
            <p class="text-14px opacity-70">info@my-dream.uz</p>
          </li>
        </ul>
      </div>
      <div class="col gt-md">
        <div class="absolute">
          <p class="text-14px c-white font-600">Разделы</p>
          <ul class="list-none pa-0 items-start c-white">
            <li v-for="link in links" class="flex">
              <p
                class="
                  text-14px
                  mb-5px
                  cursor-pointer
                  opacity-70
                  transition-duration-200
                "
                hover="text-18px opacity-100 transition-duration-200"
                @click="route(link.url)"
              >
                {{ lang.translate[link.title] }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-30px col border-b-1 border-slate-600 py-10px lt-md">
      <q-img
        :src="images.logoBlack"
        class="h-30% w-120px mb-20px q-mx-auto block"
        fit="contain"
      />
      <p class="text-16px c-white text-center">
        ООО "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"
      </p>
      <p class="text-16px c-white text-center ma-0">
        СП ООО “INTERTRADE HOLDING”
      </p>
      <ul class="list-none pa-0 ma-0 block opacity-70">
        <li class="text-12px c-white text-center my-10px">
          110907, Республика Узбекистан, Ташкентская область, Куйичирчикский
          район, Беруний
        </li>
        <li class="text-12px c-white text-center my-10px">+998-99-849-60-33</li>
        <li class="text-12px c-white text-center my-10px">info@my-dream.uz</li>
      </ul>
      <ul class="q-mx-auto list-none ma-0 pa-0 flex justify-center gap-15px">
        <li>
          <q-icon class="c-white" name="fa-brands fa-facebook" size="sm" />
        </li>
        <li>
          <q-icon class="c-white" name="fa-brands fa-youtube" size="sm" />
        </li>
        <li>
          <q-icon class="c-white" name="fa-brands fa-instagram" size="sm" />
        </li>
        <li>
          <q-icon class="c-white" name="fa-brands fa-telegram" size="sm" />
        </li>
      </ul>
    </div>
    <div class="w-full flex justify-center">
      <a
        tag="div"
        target="_blank"
        href="https://uztech.uz/"
        class="no-underline c-slate-200 text-center text-8px py-10px q-mx-auto"
        md="text-10px"
      >
        2022 @UzTech все права защищены
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { images } from "src/utils/ImgLocation";
import { useLanguageStore } from "stores/lang";
import { useRouter } from "vue-router";

const router = useRouter();
const lang = useLanguageStore();
//@ts-ignore
const route = (url) => {
  router.push(url);
};
const links = [
  { url: "/", title: "home" },
  { url: "/aboutUs", title: "aboutUs" },
  { url: "/products", title: "products" },
  { url: "/partners", title: "partners" },
  { url: "/contacts", title: "contacts" },
];
</script>

<style scoped>
* {
  font-size: 20px;
}

.max {
  z-index: -1;
}
</style>
