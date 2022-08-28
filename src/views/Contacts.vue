<template>
  <div class="flex justify-center mb-30px z-1 ">
    <q-img :src="images.contactUsMain" class="w-full min-h-fit" fit="cover"/>
    <div>
      <p class="text-center c-#39B44A text-26px font-700 mt-20px mb-20px" sm="mb-30px mt-40px text-32px">Свяжитесь с
        нами</p>
      <div class="w-90vw  max-h-600px flex items-start justify-center items-center bg-white"
           lg="flex justify-between px-20px" md=" w-70vw items-center rounded-2xl shadow-md drop-shadow-xl pa-20px">

        <q-card class="w-45% h-90% rounded-2xl shadow-md drop-shadow-md my-10px gt-sm inline-block justify-items-center"
                xl="pa-30px">
          <p class="text-center  text-26px font-800 leading-loose">Наши контакты:</p>
          <ul class="list-none grid grid-rows-2 justify-items-center gap-10px items-start mt-30px pa-0">
            <li class="flex">
              <q-icon class="mr-10px opacity-75" name="fa-solid fa-phone" size="sm"></q-icon>
              <p class="text-16px" xl="text-20px"> +998-99-849-60-33</p>
            </li>
            <li class="flex">
              <q-icon class="mr-10px  opacity-75" name="fa-solid fa-envelope" size=sm></q-icon>
              <p class="text-16px" xl="text-20px"> info@my-dream.uz</p>
            </li>
          </ul>
          <p class="px-10px text-16px" xl="text-20px">Ваша заявка будет рассмотрeна нашими специалистами.</p>
        </q-card>


        <div class="w-95% grid grid-rows-7" lg="w-50% mr-20px">
          <q-input v-model="cred.company" class="mb-10px" label="Компания:"/>
          <q-input v-model="cred.fio" class="mb-10px" label="Ф.И.О:"/>
          <q-input v-model="cred.position" class="mb-10px" label="Должность:"/>
          <q-input v-model="cred.phone" class="my-10px" label="Телефон" prefix="+998" mask="## ### ## ##"/>
          <q-input v-model="cred.contact" class="my-10px" type="email" label="Почта:"/>
          <div class="w-100% h-20px">
            <q-input
              v-model="cred.message"
              filled
              label="Сообщение"
              rows="1"
              type="textarea"
            />
          </div>

          <q-btn class="justify-self-center mt-15px h-40px bg-#39B44A rounded-10px" md="w-50%% justify-self-end"
                 @click="sendMail(cred)">
            <p class="text-16px c-white font-bold ma-0">Отправить</p>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
  <location class="mb-20px"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {images} from "src/utils/ImgLocation";
import Location from "components/Location.vue";
import {useContactsMeta} from "src/meta/contacts";

useContactsMeta()
const cred = ref({})
// @ts-ignore

function sendMail(cred: any) {
  if (!cred.phone) {
    return
  }
  cred.phone = `+998${cred.phone.replaceAll(' ','')}`
  fetch('/send', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cred)
  }).then(res=> {}).catch(err=>{
    console.warn(err)
  })
}


</script>


<style scoped>

</style>
