import {defineStore} from 'pinia'


const uz = [ 'Asia/Tashkent', 'Asia/Samarkand']
const ru = [ 'Europe/Moscow', 'Europe/Saratov', 'Europe/Samara', 'Asia/Omsk', 'Asia/Tomsk', 'Asia/Irkutsk', 'Europe/Kiev']
const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone

export const useLanguageStore = defineStore('lang', {
  state: () => ({
    prefix: uz.includes(timezone)? 'uz' : ru.includes(timezone)? 'ru' : 'en'
  }),
  getters: {
    currentPrefix: state => state.prefix
  },
  actions: {
    setLang(prefix: 'ru' | 'uz' | 'en' | 'uzK') {
      this.prefix = prefix || 'ru'
    },
    isPrefix(prefix: string):boolean| undefined {
      return this.prefix == prefix
    }
  }
})


