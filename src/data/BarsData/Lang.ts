import {Routes} from '../types'
import typeProdBack from 'assets/BackGround.webp'
import instagram from 'assets/icons/instagaramIcon.svg'

const home: Routes = {
  routeName: {
    uz: "Bosh sahifa",
    ru: "Главная",
    en: "Home page"
  },
  route: '/'
}
const aboutUs: Routes = {
  routeName: {
    uz: "Kompaniya haqida",
    ru: "О компании",
    en: "About company"
  },
  route: '/aboutUs'
}
const products: Routes = {
  routeName: {
    uz: "Mahsulotlar",
    ru: "Продукция",
    en: "Products"
  },
  route: '/products'
}
const partners: Routes = {
  routeName: {
    uz: "Hamkorlarimiz",
    ru: "Партнеры",
    en: "Partners"
  },
  route: '/partners'
}
const contacts: Routes = {
  routeName: {
    uz: "Bog'lanish",
    ru: "Контакты",
    en: "Contacts"
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
      icon: "img:" + instagram,
    },
    {
      socialName: "telegram",
      icon: "fa-brands fa-telegram",
    },
  ],
};
const about = {
  title: {
    uz: "Biz haqimizda",
    ru: "О нас",
    en: "About us",
  },
  description: {
    uz: `«Моя Мечта» agrokompleksi Toshkent viloyatining ekologik toza zonasida joylashgan dunyodagi eng yirik quyonchilik klasteridir. Ushbu loyiha barcha Yevropa standartlariga javob beradigan ilg&#39;or texnologiyalar bo&#39;yicha italiyalik mutaxassislar tomonidan ishlab chiqilgan.`,
    ru: "Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области, спроектированный итальянскими специалистами по передовым технологиям, отвечающим всем европейским стандартам.",
    en: `Agricultural complex «My dream» is the worldwide largest rabbit-breeding cluster located in ecologically friendly and clean zone of Tashkent region. The complex was designed by Italian specialists using advanced technology that meets all European standards and requirements. `,
  }
};
const contactUs = {
  title: {
    uz: "Bog'lanish",
    ru: "Контакты",
    en: "Contacts",
  },
  contact: [
    {
      icon: "fa-solid fa-location-dot",
      text: {
        ru: `110907, Республика Узбекистан,<br> Ташкентская область, <br>Куйичирчикский район, Беруний`,
        uz: `10907, O‘zbekiston Respublikasi, <br> Toshkent viloyati, <br> Quyichirchiq tumani, Beruniy`,
        en: `10907, Republic of Uzbekistan,<br> Tashkent region, <br>Kuyichirchik district, Beruniy`
      }
    },
    {
      icon: "fa-solid fa-phone",
      text: {
        ru: "+998-99-849-60-33",
        uz: "+998-99-849-60-33",
        en: "+998-99-849-60-33",
      },
    },
    {
      icon: "fa-solid fa-envelope",
      text: {
        ru: "info@my-dream.uz",
        uz: "info@my-dream.uz",
        en: "info@my-dream.uz",
      }
    }
  ]
}

const chapter = {
  en: 'Sections',
  uz: `Bo'limlar`,
  ru: `Разделы`
}

const copyRight = {
  en: '2022 @UzTech, Inc. All rights reserved.',
  ru: '2022 @UzTech все права защищены',
  uz: '2022 @UzTech Barcha huquqlar himoyalangan'

}

export {
  Links,
  typeProdBack,
  column,
  about,
  contactUs,
  chapter,
  copyRight
}

