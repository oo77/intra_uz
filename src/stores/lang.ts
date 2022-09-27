import {defineStore} from 'pinia'


export const useLanguageStore = defineStore('lang', {
  state: () => ({
    prefix: localStorage.getItem('prefix') || 'ru'
  }),
  getters: {
    currentPrefix: state => state.prefix
  },
  actions: {
    setLang(prefix: 'ru' | 'uz' | 'en') {
      this.prefix = prefix || 'ru'
      localStorage.setItem('prefix', prefix)
    },
    isPrefix(prefix: string):boolean| undefined {
      return this.prefix == prefix
    }
  }
})


