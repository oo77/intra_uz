<template>
  <q-img :src="images.contactUsMain" class="w-full min-h-fit" fit="cover" />

  <div class="text-center font-600 text-26px sm:text-32px c-#39B44A my-8">
    Свяжитесь с нами
  </div>

  <q-card class="container rounded-xl ma-4" md="mx-auto">
    <q-card-section class="grid grid-cols-1 gap-x-10" md="grid-cols-2">
      <q-card class="rounded-xl my-4 mx-2" sm="my-15% mx-10%">
        <q-card-section
          class="text-center flex column justify-evenly h-100% gap-y-5"
          sm="gap-y-10"
        >
          <div class="text-26px md:text-32px font-600">Наши контакты:</div>
          <div class="text-16px md:text-20px font-200">
            <q-icon
              class="mr-10px opacity-75"
              name="fa-solid fa-phone"
              size="sm"
            ></q-icon>
            +998-99-849-60-33
          </div>
          <div class="text-16px md:text-20px font-200">
            <q-icon
              class="mr-10px opacity-75"
              name="fa-solid fa-envelope"
              size="sm"
            ></q-icon>
            info@my-dream.uz
          </div>
          <div class="text-16px md:text-20px font-200">
            Ваша заявка будет рассмотрена нашими специалистами.
          </div>
        </q-card-section>
      </q-card>
      <q-card class="shadow-0">
        <q-card-section>
          <q-form ref="form">
            <q-input
              v-model="cred.company"
              :rules="[
                max('Название компании не может быть больше 32 символов', 32),
              ]"
              label="Компания:"
              lazy-rules
            />
            <q-input
              v-model="cred.fio"
              :rules="[
                min('Ф.И.О не может быть меньше 3 символов', 3),
                max('Ф.И.О не может быть больше 32 символов', 32),
              ]"
              label="Ф.И.О:"
              lazy-rules
            />

            <q-input
              v-model="cred.position"
              :rules="[max('Должность не может быть больше 32 символов', 32)]"
              label="Должность:"
              lazy-rules
            />
   

            <q-input
              v-model="cred.contact"
              label="Почта:"
              lazy-rules
              :rules="[emailLazy('incorrect Email')]"
            />
            <q-select
              v-if="!currentCountry"
              v-model="currentCountry"
              :options="countryOptions"
              option-label="name"
              label="Код страны:"
              clearable
              use-input
              @filter="filterFn"
            />

            <q-input
              v-else
              autofocus
              v-model="cred.phone"
              label="Телефон:"
              :prefix="currentCountry.code"
              lazy-rules
              :mask="currentCountry.mask"
            >
              <template v-slot:append class="gap-5">
                <q-icon @click="currentCountry=null" name="fa-solid fa-circle-xmark" size="xs"/>
                <q-avatar>
                  <img :src="currentCountry.flag" />
                </q-avatar>
              </template>
            </q-input>


            <q-input
              v-model="cred.message"
              :rules="[
                min('Сообщение не может быть меньше 0 символов', 0),
                max('Сообщение не может быть больше 191 символов', 191),
              ]"
              label="Сообщение"
              lazy-rules
              rows="1"
              type="textarea"
              class="mt-10px"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="flex justify-center" md="justify-end">
          <q-btn
            class="py-5 px-20 rounded-10px normal-case"
            color="#39B44A"
            @click="sendMail(cred)"
            >Отправить
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-card-section>
  </q-card>

  <q-dialog v-model="openDialog" class="" persistent transition-duration="500">
    <q-card class="text-center bg-white c-white rounded-md">
      <q-card-section class="q-pt-none text-26px" md="text-36px">
        <p class="px-10px text-16px c-black pt-30px" xl="text-20px">
          Ваша заявка будет рассмотрeна нашими специалистами.
        </p>
      </q-card-section>
      <q-card-section class="q-pt-none text-h7" md="text-20px">
        <q-btn
          class="justify-self-center mt-15px h-40px bg-#39B44A rounded-10px"
          md="w-50%% justify-self-end"
          @click="openDialog = false"
        >
          <p class="text-16px c-white font-bold ma-0">Спасибо</p>
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
  <location class="my-5" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useContactsMeta } from "src/meta/contacts";
import { images } from "src/utils/ImgLocation";
import Location from "components/Location.vue";
import countries from "countries-phone-masks";

const currentCountry = ref();

useContactsMeta();
let openDialog = ref(false);
const cred = ref({
  company: "",
  fio: "",
  position: "",
  phone: "",
  contact: "",
  message: "",
});
const form = ref(null);
const countryOptions = ref(null);

function test() {}

function filterFn(val, update, abort) {
  update(() => {
    if (val === "") {
      return (countryOptions.value = countries);
    }
    const tmp = val.toLowerCase()
    countryOptions.value = countries.filter(
      ({ name, code, iso }) => name.toLowerCase().includes(tmp) || code.toLowerCase().includes(tmp) || iso.toLowerCase().includes(tmp)
    );
  });
}

function length(message: string, len: number) {
  return (value: string) => {
    if (value?.replaceAll(" ", "")?.length != len) {
      return message;
    }
    return true;
  };
}

function emailLazy(message: string) {
  return (value: string) => {
    if (!value) {
      return true;
    }

    const isValid =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );

    return isValid || message;
  };
}

function min(message: string, len: number) {
  return (value: string) => {
    if (value?.replaceAll(" ", "")?.length < len) {
      return message;
    }
    return true;
  };
}

function max(message: string, len: number) {
  return (value: string) => {
    if (value?.replaceAll(" ", "")?.length > len) {
      return message;
    }
    return true;
  };
}

async function sendMail(cred: any) {
  //@ts-ignore
  const valid = await form.value.validate();
  if (!valid || currentCountry.value ) {
    return;
  }

cred.country = currentCountry.value.name  
  await fetch("/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cred),
  })
    .then((res) => {})
    .catch((err) => {
      console.warn(err);
    }).finally(()=>{
      (openDialog.value = true),
    (cred.company = null),
    (cred.fio = null),
    (cred.position = null),
    (cred.phone = null),
    (cred.contact = null),
    (cred.message = null);
    });
  
}
</script>
