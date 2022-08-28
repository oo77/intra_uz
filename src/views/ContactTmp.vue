<template>
  <q-img :src="images.contactUsMain" class="w-full min-h-fit" fit="cover"/>

  <div class="text-center text-26px sm:text-32px c-#39B44A my-8">
    Свяжитесь с нами
  </div>

  <q-card class="container rounded-xl ma-4" md="mx-auto">
    <q-card-section class="grid grid-cols-1 gap-x-10" md="grid-cols-2">
      <q-card class="rounded-xl my-4 mx-2" sm="my-15% mx-10%">
        <q-card-section class="text-center flex column justify-evenly h-100% gap-y-5" sm="gap-y-10">
          <div class="text-26px md:text-32px font-600">Наши контакты:</div>
          <div class="text-16px md:text-20px font-200">
            <q-icon class="mr-10px opacity-75" name="fa-solid fa-phone" size="sm"></q-icon>
            +998-99-849-60-33
          </div>
          <div class="text-16px md:text-20px font-200">
            <q-icon class="mr-10px  opacity-75" name="fa-solid fa-envelope" size=sm></q-icon>
            info@my-dream.uz
          </div>
          <div class="text-16px md:text-20px font-200">Ваша заявка будет рассмотрена нашими специалистами.</div>
        </q-card-section>
      </q-card>
      <q-card class="shadow-0">
        <q-card-section>
          <q-form ref="form">
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
          </q-form>
        </q-card-section>
        <q-card-actions class="flex justify-center" md="justify-end">
          <q-btn  @click="sendMail(cred)" color="#39B44A" class="py-5 px-20 rounded-10px">Отправить</q-btn>
        </q-card-actions>
      </q-card>
    </q-card-section>
  </q-card>

  <location class="my-5"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useContactsMeta} from "src/meta/contacts";
import {images} from "src/utils/ImgLocation";
import Location from "components/Location.vue";

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
