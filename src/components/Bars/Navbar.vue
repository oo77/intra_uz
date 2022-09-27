<template>
  <nav class="w-100vw flex justify-around items-center bg-white z-1000" sm="py-4">
    <!-- Menu Dropdown -->
    <q-btn-dropdown
      class="lt-md c-black h-50px"
      content-class="w-fit rounded-xl h-hit"
      rounded
      dropdown-icon="menu"
      size="md"
      no-icon-animation
      stack
      unelevated
    >
      <q-list>
        <q-item v-for="link in Links"
                v-close-popup
                :to="link.route"
                clickable
                class="pa-10px"
                hover="cursor-pointer bg-#39B44A c-white"
                v-html="link.routeName[lang.prefix]"
        />
      </q-list>
    </q-btn-dropdown>

    <!-- nav icon-->
    <router-link to="/">
      <q-icon :name="'img:'+(lang.isPrefix('en')? logoen : logo)" class=" py-3 w-10rem h-5rem"/>
    </router-link>

    <!--    nav menu XS and SM  hidden-->
    <div class="flex flex-row gap-5 gt-sm">
      <q-btn v-for="link in Links" :class="{'bg-primary c-white drop-shadow-lg':active(link.route)}"
             :to="link.route"
             class="normal-case text-18px rounded-lg transition-duration-500 c-black"
             hover="bg-#39B44A opacity-70 c-white shadow-12 transition-duration-100 "
             dense
             unelevated>
        {{ link.routeName[lang.prefix] }}
      </q-btn>
    </div>

    <!--lang Globs Icon-->
    <q-btn-dropdown
      class=" rounded-20px c-black"
      content-class="flex justify-center drop-shadow-xl rounded-20px h-hit pt-10px pa-0 text-center"
      cover
      size="md"
      dropdown-icon="language"
      no-icon-animation
      unelevated
      auto-close
    >
      <q-list class="pa-0 w-100%">
        <q-item class="pa-0 flex justify-center">
          <q-icon name="language" size="md"/>
        </q-item>

        <q-item v-for="i in ['uz', 'ru', 'en']" :active="lang.isPrefix(i)"
                clickable
                hover="cursor-pointer bg-#39B44A c-white"
                @click="lang.setLang(i)"
        >
          <p class="text-center ma-0 q-mx-auto"> {{ i.toUpperCase() }}</p>
        </q-item>
      </q-list>

    </q-btn-dropdown>

  </nav>

</template>

<script lang="ts" setup>
import {Links} from "src/data/BarsData/Lang";
import logoen from 'assets/logoEn.svg'
import logo from 'assets/logo.svg'
import {useRoute} from 'vue-router'
import {useLanguageStore} from "stores/lang";

const lang = useLanguageStore()
const route = useRoute()
const active = (path: string) => {
  return route.path == path
}


</script>

<style lang="scss" scoped>
* {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}

</style>
