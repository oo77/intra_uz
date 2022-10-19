import {defineStore} from 'pinia'


const uz = [ 'Asia/Tashkent', 'Asia/Samarkand']
const ru = [ 'Europe/Moscow', 'Europe/Saratov', 'Europe/Samara', 'Asia/Omsk', 'Asia/Tomsk', 'Asia/Irkutsk', 'Europe/Kiev']
const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone

export const useLanguageStore = defineStore('lang', {
  state: () => ({
    prefix: 'ru'
  }),
  getters: {
    currentPrefix: state => state.prefix
  },
  actions: {
    setLang(prefix: 'ru' | 'uz' | 'en' ) {
      this.prefix = 'ru'
      localStorage.setItem('prefix', this.prefix)
    },
    isPrefix(prefix: string):boolean| undefined {
      return this.prefix == prefix
    }
  }
})


