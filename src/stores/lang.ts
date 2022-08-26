import {defineStore} from 'pinia'
import {useLang} from "src/lang"

export const useLanguageStore = defineStore('lang', {
  state: () => ({
    lang: useLang("ru"),
    prefix: 'ru'
  }),
  getters: {
    translate: state => state.lang
  },
  actions: {
    setLang(prefix: 'ru' | 'uz' | 'en') {
      this.prefix = prefix
      const currentLang = useLang(prefix)
      this.lang = currentLang || useLang('ru')
    },
    getLang(key: string) {
      //@ts-ignore
      return this.translate[key] || key
    },
    isPrefix(prefix: string):boolean| undefined {
      return this.prefix == prefix
    }
  }

})


