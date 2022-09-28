import {RouteLocationNormalizedLoaded} from 'vue-router'

export interface ICard {
  title: {
    uz: string
    ru: string
    en: string
    uzK: string
  }
  description: {
    uz: string
    ru: string
    en: string
    uzK: string
  }
  image: string
  to: {
    route: string | RouteLocationNormalizedLoaded
    uz: string
    ru: string
    en: string
    uzK: string
  }
}

export interface Routes {
  routeName: {
    uz: string
    ru: string
    en: string
    uzK: string
  },
  route: string
}

export interface Partners {
  name: string,
  url: string,
  logo: any,
  link: string
}
