<template>
  <div class="h-hit bg-primary w-full max flex justify-center items-start">

    <div class="container pt-30px flex items-start justify-center gap-20px border-b-1 border-white gt-sm z-0">
      <div class="col ml-5vw">
        <div class="h-30% w-150px my-10px">
          <img :src="logoLongNegative" alt="logo" class="w-80 my-2 h-fit gt-sm"/>
<!--          <q-icon :name="'img:'+ (lang.prefix=='en'? logoWhiteEn : logoWhiteRu)" class="w-100% h-15"/>-->
        </div>
        <ul class="list-none pa-0 mt-5px flex gap-15px q-mx-auto">
          <li v-for="link in column.socialLink">
            <a :href="link.url" target="_blank">
              <q-icon :name="link.icon" class="c-white" size="sm" hover="color-yellow"/>
            </a>
          </li>
        </ul>
      </div>

      <div class="col gt-xs">
        <p class="text-14px c-white font-600" v-html="about.title[lang.prefix]"/>
        <p class="text-12px c-white opacity-70" v-html="about.description[lang.prefix]"/>
      </div>

      <div class="col gt-sm">
        <p class="text-14px c-white font-600" v-html="contactUs.title[lang.prefix]"/>
        <ul class="list-none pa-0 col items-start c-white">
          <li v-for="con in contactUs.contact" class="flex row">
            <q-icon
              :name="con.icon"
              class="mr-10px c-white"
              size="sm"
            ></q-icon>
            <p class="text-14px opacity-70" v-html="con.text[lang.prefix]"/>
          </li>
        </ul>
      </div>

      <div class="col gt-md">
        <div class="absolute">
          <p class="text-14px c-white font-600">{{ chapter[lang.prefix] }}</p>
          <ul class="list-none pa-0 items-start c-white">
            <li v-for="link in Links" class="flex">
              <p class="text-14px  mb-5px  cursor-pointer opacity-70 transition-duration-200"
                 hover="text-18px opacity-100 transition-duration-200"
                 @click="route(link.route)"
                 v-html="link.routeName[lang.prefix]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="px-30px col border-b-1 border-white py-10px lt-md">
<!--      <q-icon :name="'img:'+ (lang.prefix=='en'? logoWhiteEn : logoWhiteRu)" class="h-30% w-120px mb-20px q-mx-auto block"/>-->
      <p class="text-16px c-white text-center" v-html="column.company1[lang.prefix]"/>
      <p class="text-16px c-white text-center" v-html="column.company2[lang.prefix]"/>

      <ul class="list-none pa-0 ma-0 block opacity-70">
        <li v-for="con in contactUs.contact" class="text-12px c-white text-center my-10px" v-html="con.text[lang.prefix]"/>
      </ul>

      <ul class="q-mx-auto list-none ma-0 pa-0 flex justify-center gap-15px">
        <li v-for="link in column.socialLink">
          <q-icon :name="link.icon" color="white" size="sm"/>
        </li>
      </ul>
    </div>

    <div class="w-full flex justify-center">
      <a class="no-underline c-slate-200 text-center text-8px py-10px q-mx-auto"
         href="https://uztech.uz/"
         md="text-10px"
         tag="div"
         target="_blank"
      >
        {{copyRight[lang.prefix]}}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {about, column, contactUs, Links, chapter, copyRight} from "src/data/BarsData/Lang"
import logoLongNegative from 'assets/logoLongNegative.png'
import {useLanguageStore} from "stores/lang";
import {useRouter} from "vue-router";

const router = useRouter();
const lang = useLanguageStore();

const route = (url:any) => {
  router.push(url);
};
</script>

<style scoped>
* {
  font-size: 20px;
}
</style>
