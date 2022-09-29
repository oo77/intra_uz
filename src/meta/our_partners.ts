import {useMeta} from 'quasar'
import {MetaOptions} from 'quasar/dist/types/meta'


export function useOurPartnersMeta(lang:any = 'uz') {
  const title:any = {
    uz: "Hamkorlar",
    ru: "Партнеры",
    en: "Partners",
    uzK: "Ҳамкорлар"
  }

  const OurPartners: MetaOptions = {
    title: title[lang],
    meta: {
      title: {
        name: title[lang],
        content: "Наши партнеры"
      },
      description: {name: 'description', content: 'Page 4'},
      keywords: {name: 'Кролиководство', content: 'Кролиководство'},
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        property: 'og:title'
      },
    }
  }
  useMeta(OurPartners)
}
