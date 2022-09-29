import {useMeta} from 'quasar'
import {MetaOptions} from 'quasar/dist/types/meta'


export function useAboutCompanyMeta(lang:any = 'uz') {
  const title: any = {
    uz: "Kompaniya",
    ru: "Компания",
    en: "Сompany",
    uzK: "Компания ҳақида"
  }

  const AboutCompany: MetaOptions = {
    title: title[lang],
    meta: {
      title: {
        name: title[lang],
        content: "О компании"
      },
      description: {name: 'description', content: 'Page 2'},
      keywords: {name: 'Кролиководствоб', content: 'Кролиководство'},
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        property: 'og:title'
      },
    }
  }

  useMeta(AboutCompany)
}
