import {defineStore} from 'pinia'


export const useLanguageStore = defineStore('lang', {
  state: () => ({
    prefix: 'ru'
  }),
  getters: {
    currentPrefix: state => state.prefix
  },
  actions: {
    setLang(prefix: 'ru' | 'uz' | 'en') {
      this.prefix = prefix || 'ru'
    },
    isPrefix(prefix: string):boolean| undefined {
      return this.prefix == prefix
    }
  }
})


