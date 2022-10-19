<template>

  <q-card class="h-fit duration-500 h-110"
          hover="bg-[rgb(22,46,130)] c-white -top-10px duration-500 cursor-pointer"
          @click="dialog=true">
    <q-card-section class="ma-0 pa-0 h-100">
      <q-img :src="person.img" class="h-100%"/>
    </q-card-section>
    <q-card-actions class="flex justify-center h-40">
      <p class="text-20px text-center pa-0 ma-0">{{ person.name }}</p>
      <p class="ma-0 pa-0 text-center w-full">{{ person.position }}</p>
      <ul class="list-none pa-0 mt-5px flex gap-15px q-mx-auto">
        <li v-for="link in Contacts.socialLink">
          <q-icon :name="link.icon"
                  size="sm"/>
        </li>
      </ul>
    </q-card-actions>
  </q-card>

  <q-dialog v-model="dialog" class="w-full">
    <q-card class="h-400px w-1200px duration-500 flex">

      <q-card-section class="pa-0 w-40% h-100%">
        <q-img :src="person.img" class="w-100% h-100%" fit="cover"/>
      </q-card-section>
      <q-card-section class="pa-2 w-60% grid place-content-between">
        <div class="grid gap-0 grid-cols-1 items-start">
          <p class="pa-0 text-26px c-[rgb(22,46,130)] font-bold">{{ person.name }}</p>
          <p class="font-bold text-20px">{{ person.position }}</p><br/>
          <p class=" text-20px">{{ person.job }}</p>
        </div>
        <div>
          <p class="pa-0 ma-0 font-bold">Контакты:</p>
          <p class="pa-0 ma-0">Телефон: {{person.contact}}</p>
          <p class="pa-0 ma-0">Почта: {{person.mail}}</p>
          <ul class="list-none pa-0 mt-5px flex gap-15px q-mx-auto">
            <li v-for="link in Contacts.socialLink">
              <q-icon :name="link.icon"
                      size="sm"/>
            </li>
          </ul>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import {defineProps, ref} from "vue";
import {Contacts} from "src/data/Contacts/contacts";

let dialog = ref(false)
const {person} = defineProps({
  person: {
    type: Object
  }
})

</script>

<style scoped>

</style>
