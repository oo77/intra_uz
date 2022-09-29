import {useMeta} from 'quasar'
import {MetaOptions} from 'quasar/dist/types/meta'

export function useContactsMeta(lang:any = 'uz') {
  const title:any = {
    uz: "Bog'lanish",
    ru: "Контакты",
    en: "Contacts",
    uzK: "Боғланиш"
  }

  const Contacts: MetaOptions = {
    title: title[lang],
    meta: {
      title: {
        name: title[lang],
        content: "Свяжитесь с нами"
      },
      description: {name: 'description', content: 'Page 3'},
      keywords: {name: 'Кролиководствоб', content: 'Кролиководство'},
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        property: 'og:title'
      },
    }
  }

  useMeta(Contacts)
}

