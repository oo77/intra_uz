import {Routes} from '../types'
import logoBlack from 'assets/logoBlack.png'
import logo from 'assets/DreamLogo.png'
import instagram from 'assets/icons/instagaramIcon.svg'

const home: Routes = {
  routeName: {
    uz: "Главная",
    ru: "Главная",
    en: "Главная"
  },
  route: '/'
}
const aboutUs: Routes = {
  routeName: {
    uz: "О компании",
    ru: "О компании",
    en: "О компании"
  },
  route: '/aboutUs'
}
const products: Routes = {
  routeName: {
    uz: "Продукция",
    ru: "Продукция",
    en: "Продукция"
  },
  route: '/products'
}
const partners: Routes = {
  routeName: {
    uz: "Партнеры",
    ru: "Партнеры",
    en: "Партнеры"
  },
  route: '/partners'
}
const contacts: Routes = {
  routeName: {
    uz: "Контакты",
    ru: "Контакты",
    en: "Контакты"
  },
  route: '/contacts'
}
const Links = [
  home,
  aboutUs,
  products,
  partners,
  contacts,
]


const column = {
  company1: `ООО "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"`,
  company2: "СП ООО “INTERTRADE HOLDING”",
  socialLink: [
    {
      socialName: "facebook",
      icon: "fa-brands fa-facebook",
    },
    {
      socialName: "youtube",
      icon: "fa-brands fa-youtube",
    },
    {
      socialName: "instagram",
      icon: "img:" +instagram,
    },
    {
      socialName: "telegram",
      icon: "fa-brands fa-telegram",
    },
  ],
};
const about = {
  title: {
    uz: "О нас",
    ru: "О нас",
    en: "О нас",
  },
  description: {
    uz: "Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области, спроектированный итальянскими специалистами по передовым технологиям, отвечающим всем европейским стандартам.",
    ru: "Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области, спроектированный итальянскими специалистами по передовым технологиям, отвечающим всем европейским стандартам.",
    en: "Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области, спроектированный итальянскими специалистами по передовым технологиям, отвечающим всем европейским стандартам.",
  }
};
const contactUs = {
  title: {
    uz: "Контакты",
    ru: "Контакты",
    en: "Контакты",
  },
  contact: [
    {
      icon: "fa-solid fa-location-dot",
      text: `110907, Республика Узбекистан,<br/> Ташкентская область,
              <br/>Куйичирчикский район, Беруний`
    },
    {
      icon:"fa-solid fa-phone",
      text: "+998-99-849-60-33",
    },
    {
      icon: "fa-solid fa-envelope",
      text: "info@my-dream.uz"
    }
  ]
}

export {
  Links,
  logo,
  logoBlack,
  column,
  about,
  contactUs
}

