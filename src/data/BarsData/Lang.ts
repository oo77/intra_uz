import {Routes} from '../types'
import logoBlack from 'assets/logoBlack.png'
import logo from 'assets/DreamLogo.png'

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
  company1: "ООО QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS",
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
      icon: "fa-brands fa-instagram",
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
    uz: "Моя Мечта: «Всего за три года мы смогли пройти большой путь от смелой идеи до органического Агро Комплекса на 250 Га земли»",
    ru: "Моя Мечта: «Всего за три года мы смогли пройти большой путь от смелой идеи до органического Агро Комплекса на 250 Га земли»",
    en: "Моя Мечта: «Всего за три года мы смогли пройти большой путь от смелой идеи до органического Агро Комплекса на 250 Га земли»",
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

