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


        <q-form ref="form" class="w-95% grid grid-rows-7" lg="w-50% mr-20px">
          <q-input v-model="cred.company"
                   :rules="[min('Название компании не может быть меньше 3 символов', 3), max('Название компании не может быть больше 32 символов',32)]"
                   label="Компания:"
                   lazy-rules/>
          <q-input v-model="cred.fio"
                   :rules="[min('Ф.И.О не может быть меньше 3 символов', 3), max('Ф.И.О не может быть больше 32 символов',32)]"
                   label="Ф.И.О:"
                   lazy-rules/>
          <q-input v-model="cred.position"
                   :rules="[min('Должность не может быть меньше 3 символов', 3), max('Должность не может быть больше 32 символов',32)]"
                   label="Должность:"
                   lazy-rules/>
          <q-input v-model="cred.phone"
                   :rules="[length('Не корректный номер телефона',9)]"
                   label="Телефон"
                   lazy-rules mask="## ### ## ##"
                   prefix="+998"/>
          <q-input v-model="cred.contact"
                   :rules="[email('Не корректный почтовый адрес')]"
                   label="Почта:"
                   lazy-rules/>
          <q-input
            v-model="cred.message"
            :rules="[min('Сообщение не может быть меньше 10 символов', 10), max('Сообщение не может быть больше 191 символов',191)]"
            filled
            label="Сообщение"
            lazy-rules
            rows="1"
            type="textarea"
          />


          <q-btn class="justify-self-center mt-15px h-40px bg-#39B44A rounded-10px" md="w-50%% justify-self-end"
                 @click="sendMail(cred)">
            <p class="text-16px c-white font-bold ma-0">Отправить</p>
          </q-btn>
        </q-form>
      </div>
    </div>
  </div>
  <location class="mb-20px"/>
</template>

<!--TODO fix validator -->
<script lang="ts" setup>
import {ref} from 'vue'
import {images} from "src/utils/ImgLocation";
import Location from "components/Location.vue";
import {useContactsMeta} from "src/meta/contacts";

useContactsMeta()

const cred = ref({
  company: '',
  fio: '',
  position: '',
  phone: '',
  contact: '',
  message: '',
})
const form = ref(null)

function length(message: string, len: number) {
  return (value: string) => {
    if (value?.replaceAll(' ', '')?.length != len) {
      return message
    }
    return true
  }
}

function email(message: string) {
  return (value: string) => {
    return value && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || message
  }

}

function min(message: string, len: number) {
  return (value: string) => {
    if (value?.replaceAll(' ', '')?.length < len) {
      return message
    }
    return true
  }
}

function max(message: string, len: number) {
  return (value: string) => {
    if (value?.replaceAll(' ', '')?.length > len) {
      return message
    }
    return true
  }
}

async function sendMail(cred: any) {
  //@ts-ignore
  const valid = await form.value.validate()
  if (!valid) {
    return
  }
  cred.phone = `+998${cred.phone?.replaceAll(' ', '')}`
  fetch('/send', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cred)
  }).then(res => {
  }).catch(err => {
    console.warn(err)
  })
}


</script>


<style scoped>

</style>
