import {useMeta} from 'quasar'
import {MetaOptions} from 'quasar/dist/types/meta'


export function useHomeMeta(lang: any = 'uz') {

  const title: any = {
    uz: "Asosiy",
    ru: "Главная",
    en: "Home",
    uzK: "Асосий"
  }
  const HomeMeta: MetaOptions = {
    title: title[lang],
    meta: {
      title: {
        name: title[lang],
        content: "Инновационный Транспорт"
      },
      description: {name: 'description', content: 'Page 1'},
      keywords: {name: 'keywords', content: 'Quasar website'},
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        property: 'og:title'
      },
    }
  }
  useMeta(HomeMeta)
}
