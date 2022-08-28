<template>
  <nav class="w-100vw flex justify-around items-center py-2 bg-white z-1000" sm="py-4">
    <!-- Menu Dropdown -->
    <q-btn-dropdown
      class="lt-md c-black"
      content-class="w-50 rounded-xl h-hit"
      rounded
      dropdown-icon="menu"
      size="md"
      no-icon-animation
      stack
      unelevated
    >
      <q-list>
        <q-item v-for="link in links"
                v-close-popup
                :to="link.url"
                clickable
                class="pa-10px"
                hover="cursor-pointer bg-#39B44A c-white"
        >
          {{ lang.translate[link.title] }}
        </q-item>
      </q-list>
    </q-btn-dropdown>

    <!-- nav icon-->
    <router-link to="/">
      <q-img :src="images.logo" class="w-25vw max-w-174px" fit="contain"/>
    </router-link>

    <!--    nav menu XS and SM  hidden-->
    <div class="flex flex-row gap-5 gt-sm">
      <q-btn v-for="link in links" :class="{'bg-primary c-white drop-shadow-lg':active(link.url)}"
             :to="link.url"
             class="normal-case text-18px rounded-lg transition-duration-500 c-black"
             hover="bg-#39B44A opacity-70 c-white shadow-12 transition-duration-100 "
             dense
             unelevated>
        {{ lang.getLang(link.title) }}
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
    >
      <q-list class="pa-0 w-100%">
        <q-item class="pa-0 flex justify-center">
          <q-icon name="language" size="md"/>
        </q-item>

        <q-item v-for="i in ['uz', 'ru', 'en']" :active="lang.isPrefix(i.toString())"
                clickable
                hover="cursor-pointer bg-#39B44A c-white"
                @click="lang.setLang(i.toString())"
        >
          <p class="text-center ma-0 q-mx-auto"> {{ i.toUpperCase() }}</p>
        </q-item>
      </q-list>

    </q-btn-dropdown>

  </nav>

</template>

<script lang="ts" setup>

import {useLanguageStore} from 'stores/lang'
import {images} from 'src/utils/ImgLocation'
import {useRoute} from 'vue-router'

const lang = useLanguageStore()

const route = useRoute()

const links = [
  {url: '/', title: 'home'},
  {url: '/aboutUs', title: 'aboutUs'},
  {url: '/products', title: 'products'},
  {url: '/partners', title: 'partners'},
  {url: '/contacts', title: 'contacts'},
]

const active = (path: string) => {
  return route.path == path
}

function test() {
  console.log('test')
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
