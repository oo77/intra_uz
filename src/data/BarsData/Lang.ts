import {Routes} from '../types'
import typeProdBack from 'assets/BackGround.webp'
import instagram from 'assets/icons/instagaramIcon.svg'

const home: Routes = {
  routeName: {
    uz: "Asosiy",
    ru: "Главная",
    en: "Home",
    uzK: "Асосий"
  },
  route: '/'
}
const aboutUs: Routes = {
  routeName: {
    uz: "Kompaniya",
    ru: "Компания",
    en: "Сompany",
    uzK: "Компания ҳақида"
  },
  route: '/aboutUs'
}
const products: Routes = {
  routeName: {
    uz: "Mahsulotlar",
    ru: "Продукция",
    en: "Products",
    uzK: "Маҳсулотлар"
  },
  route: '/products'
}
const partners: Routes = {
  routeName: {
    uz: "Hamkorlar",
    ru: "Партнеры",
    en: "Partners",
    uzK: "Ҳамкорлар"
  },
  route: '/partners'
}
const contacts: Routes = {
  routeName: {
    uz: "Bog'lanish",
    ru: "Контакты",
    en: "Contacts",
    uzK: "Боғланиш"
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
  company1: {
    uz: `MCHJ "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"`,
    ru: `ООО "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"`,
    en: `LLC "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"`,
    uzK: `МЧЖ "QUYONCHILIK VA NASILCHILIK AGRO KOMPLEKS"`
  },
  company2: {
    uz: `QK MChJ "INTERTRADE HOLDING"`,
    ru: `СП ООО "INTERTRADE HOLDING"`,
    en: `JV LLC "INTERTRADE HOLDING"`,
    uzK: `КК МЧЖ "INTERTRADE HOLDING"`
  },
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
    uz: "Kompaniya haqida\n",
    uzK: "Компания ҳақида",
    ru: "О нас",
    en: "About us",

  },
  description: {
    uz: `«Моя Мечта» agrokompleksi Toshkent viloyatining ekologik toza zonasida joylashgan, italiyalik mutaxassislar tomonidan butun Yevropa standartlariga javob beradigan ilgʻor texnologiyalar boʻyicha ishlab chiqilgan, dunyodagi eng yirik quyonchilik klasteridir.`,

    uzK: `«Моя Мечта» агрокомплекси Тошкент вилоятининг экологик тоза зонасида жойлашган, италиялик мутахассислар томонидан бутун Европа стандартларига жавоб берадиган илғор технологиялар бўйича ишлаб чиқилган, дунёдаги энг йирик қуёнчилик кластеридир.`,

    ru: "Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области, спроектированный итальянскими специалистами по передовым технологиям, отвечающим всем европейским стандартам.",

    en: `Agrocomplex "My Dream" is the world's largest rabbit breeding cluster, located in an ecologically clean zone of the Tashkent region, designed by Italian specialists using advanced technologies that meet all European standards.`,
  }
};
const contactUs = {
  title: {
    uz: "Bog'lanish",
    ru: "Контакты",
    en: "Contacts",
    uzK: "Боғланиш"
  },
  contact: [
    {
      icon: "fa-solid fa-location-dot",
      text: {
        ru: `110907, Республика Узбекистан,<br> Ташкентская область, <br>Куйичирчикский район, Беруний`,
        uz: `110907, O‘zbekiston Respublikasi, <br> Toshkent viloyati, <br> Quyichirchiq tumani, Beruniy`,
        en: `110907, Republic of Uzbekistan,<br> Tashkent region, <br>Kuyichirchik district, Beruniy`,
        uzK: `110907, Ўзбекистон Республикаси,<br> Тошкент вилояти,<br> Қуйичирчиқ тумани, Беруний`
      }
    },
    {
      icon: "fa-solid fa-phone",
      text: {
        ru: "+998-99-849-60-33",
        uz: "+998-99-849-60-33",
        en: "+998-99-849-60-33",
        uzK: "+998-99-849-60-33",
      },
    },
    {
      icon: "fa-solid fa-envelope",
      text: {
        ru: "info@my-dream.uz",
        uz: "info@my-dream.uz",
        en: "info@my-dream.uz",
        uzK: "info@my-dream.uz",
      }
    }
  ]
}

const chapter = {
  en: 'Sections',
  uz: `Bo'limlar`,
  ru: `Разделы`,
  uzK: 'Булимлар',
}

const copyRight = {
  en: '2022 @UzTech, Inc. All rights reserved.',
  ru: '2022 @UzTech все права защищены',
  uz: '2022 @UzTech Barcha huquqlar himoyalangan',
  uzK: '2022 @UzTech Барча хукуклар химояланган',

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

