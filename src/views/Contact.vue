<template>
  <q-img :src="ContactUsMain"
         class="w-full min-h-fit"
         fit="cover"/>

  <div class="text-center font-600 text-26px sm:text-32px c-#39B44A my-8"
       v-html="Contacts.title[lang.prefix]"/>

  <q-card class="container rounded-xl ma-4"
          md="mx-auto">
    <q-card-section class="grid grid-cols-1 gap-x-10 items-center h-fit"
                    md="grid-cols-2">
      <q-card class="rounded-xl my-4 mx-2"
              sm="my-15% mx-10%">
        <q-card-section
          class="text-center flex column justify-evenly h-100% gap-y-5"
          sm="gap-y-10"
        >
          <div class="text-26px md:text-32px font-600  c-#39B44A"
               v-html="Contacts.subtitle[lang.prefix]"/>

          <div v-for="c in Contacts.contact"
               class="text-16px md:text-20px font-200">
            <q-icon
              :name="c.icon"
              class="mr-10px opacity-75"
              size="sm"/>
            {{ c.text }}
          </div>

          <div class="text-16px md:text-20px font-200"
               v-html="Contacts.subText[lang.prefix]"/>

          <ul class="list-none pa-0 mt-5px flex gap-15px q-mx-auto">
            <li v-for="link in Contacts.socialLink">

              <q-icon :name="link.icon"
                      class="c-black opacity-75"
                      size="sm"/>
            </li>
          </ul>

        </q-card-section>

      </q-card>


      <q-card class="shadow-0">
        <q-card-section>
          <q-form ref="form">
            <q-input
              v-model="cred.company"
              :label="labels.company[lang.prefix]"
              :rules="[
                max('Название компании не может быть больше 32 символов', 32),
              ]"
              lazy-rules
            />
            <q-input
              v-model="cred.fio"
              :label="labels.name[lang.prefix]"
              :rules="[
                min(labels.incorrectName[lang.prefix], 3),
                max('Ф.И.О не может быть больше 32 символов', 32),
              ]"
              lazy-rules
            />

            <q-input
              v-model="cred.position"
              :label="labels.job[lang.prefix]"
              :rules="[max('Должность не может быть больше 32 символов', 32)]"
              lazy-rules
            />

            <q-input
              v-model="cred.contact"
              :label="labels.mail[lang.prefix]"
              :rules="[emailLazy(labels.incorrectMail[lang.prefix])]"
              lazy-rules
            />
            <q-select
              v-if="!currentCountry"
              v-model="currentCountry"
              :label="labels.stateCode[lang.prefix]"
              :options="countryOptions"
              clearable
              option-label="name"
              use-input
              @filter="filterFn"
            />

            <q-input
              v-else
              v-model="cred.phone"
              :label="labels.phone[lang.prefix]"
              :mask="currentCountry.mask"
              :prefix="currentCountry.code"
              autofocus
              lazy-rules
            >
              <template v-slot:append class="gap-5">
                <q-icon name="fa-solid fa-circle-xmark"
                        size="xs"
                        @click="currentCountry=null"/>
                <q-avatar>
                  <img :src="currentCountry.flag" alt=""/>
                </q-avatar>
              </template>
            </q-input>


            <q-input
              v-model="cred.message"
              :label="labels.message[lang.prefix]"
              :rules="[
                min('Сообщение не может быть меньше 0 символов', 0),
                max('Сообщение не может быть больше 191 символов', 191),
              ]"
              class="mt-10px"
              lazy-rules
              rows="1"
              type="textarea"
            />
          </q-form>
        </q-card-section>

        <q-card-actions class="flex justify-center" md="justify-end">
          <q-btn
            class="py-5 px-20 rounded-10px normal-case"
            color="#39B44A"
            @click="sendMail(cred)"
          >{{ labels.send[lang.prefix].toUpperCase() }}
          </q-btn>
        </q-card-actions>

      </q-card>
    </q-card-section>
  </q-card>

  <q-dialog v-model="openDialog"
            persistent
            transition-duration="500">

    <q-card class="text-center bg-white c-white rounded-md">

      <q-card-section class="q-pt-none text-26px"
                      md="text-36px">
        <p class="px-10px text-16px c-black pt-30px"
           xl="text-20px"
           v-html="Contacts.labels.attantion[lang.prefix]"/>
      </q-card-section>

      <q-card-section class="q-pt-none text-h7" md="text-20px">

        <q-btn
          class="justify-self-center mt-15px h-40px bg-#39B44A rounded-10px"
          md="w-50%% justify-self-end"
          @click="openDialog = false"
        >
          <p class="text-16px c-white font-bold ma-0"
             v-html="Contacts.labels.thanks[lang.prefix]"/>
        </q-btn>

      </q-card-section>
    </q-card>
  </q-dialog>
  <location class="my-5"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useContactsMeta} from "src/meta/contacts";
import {Contacts, ContactUsMain} from 'src/data/Contacts/contacts'
import {useLanguageStore} from "stores/lang";
import Location from "components/Location.vue";
//@ts-ignore
import countries from "countries-phone-masks";

const labels = Contacts.labels

const currentCountry = ref();
const lang = useLanguageStore()
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

//@ts-ignore
function filterFn(val, update, abort) {
  update(() => {
    if (val === "") {
      return (countryOptions.value = countries);
    }
    const tmp = val.toLowerCase()
    countryOptions.value = countries.filter(
      ({
         name,
         code,
         iso
       }) => name.toLowerCase().includes(tmp) || code.toLowerCase().includes(tmp) || iso.toLowerCase().includes(tmp)
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
  if (!valid || !currentCountry.value) {
    console.log(valid, currentCountry.value)
    return;
  }

  cred.country = currentCountry.value.name

  cred.phone = `${currentCountry.value.code}${cred.phone.replaceAll(/(\)|\(|\-| )/g, "")}`

  await fetch("/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cred),
  })
    .then((res) => {
    })
    .catch((err) => {
      console.warn(err);
    }).finally(() => {
      openDialog.value = true
      cred.company = null
      cred.fio = null
      cred.position = null
      cred.phone = null
      cred.contact = null
      cred.message = null
      currentCountry.value = null
    });

}
</script>
