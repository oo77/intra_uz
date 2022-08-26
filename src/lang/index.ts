import uz from '../lang/uz'
import en from '../lang/en'
import ru from '../lang/ru'

const lang = {uz, ru, en}

export function useLang(prefix: 'ru' | 'uz' | 'en') {
  return lang[prefix] || {}
}
