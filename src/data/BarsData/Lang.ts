import {Routes} from '../types'
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
    ru: "О центре",
    en: "Сompany",
    uzK: "Компания ҳақида"
  },
  route: '/aboutUs'
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
  partners,
  contacts,
]


const column = {
  company1: {
    uz: ``,
    ru: `Инновационный Транспорт`,
    en: ``,
    uzK: ``
  },
  company2: {
    uz: ``,
    ru: ``,
    en: ``,
    uzK: ``
  },
  socialLink: [
    {
      socialName: "facebook",
      icon: "fa-brands fa-facebook",
      url: 'https://www.facebook.com/groups/innovativetransport'
    },
    {
      socialName: "youtube",
      icon: "fa-brands fa-youtube",
      url: 'https://www.youtube.com/channel/UCNoccNpALAz-M6qLSNMrifQ'
    },
    {
      socialName: "instagram",
      icon: 'fa-brands fa-linkedin',
      url: "https://t.me/logkaleidoscope"
    },
    {
      socialName: "telegram",
      icon: "fa-brands fa-telegram",
      url: 'https://t.me/logkaleidoscope'
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
    uz: `Значительная часть научно-исследовательского потенциала НИЦ направлена на интеграцию образования, науки и практики, расширение диапазона научно-исследовательской работы, а также развитие сферы транспортной логистики.`,

    uzK: `Значительная часть научно-исследовательского потенциала НИЦ направлена на интеграцию образования, науки и практики, расширение диапазона научно-исследовательской работы, а также развитие сферы транспортной логистики.`,

    ru: "Значительная часть научно-исследовательского потенциала НИЦ направлена на интеграцию образования, науки и практики, расширение диапазона научно-исследовательской работы, а также развитие сферы транспортной логистики.",

    en: `Значительная часть научно-исследовательского потенциала НИЦ направлена на интеграцию образования, науки и практики, расширение диапазона научно-исследовательской работы, а также развитие сферы транспортной логистики.`,
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
        ru: `100167, г. Ташкент, Мирабадский район, <br> улица Темирйулчилар 1`,
        uz: `110907, O‘zbekiston Respublikasi, <br> Toshkent viloyati, <br> Quyichirchiq tumani, Beruniy`,
        en: `110907, Republic of Uzbekistan,<br> Tashkent region, <br>Kuyichirchik district, Beruniy`,
        uzK: `110907, Ўзбекистон Республикаси,<br> Тошкент вилояти,<br> Қуйичирчиқ тумани, Беруний`
      }
    },
    {
      icon: "fa-solid fa-phone",
      text: {
        ru: "+ (99871) 299-00-01",
        uz: "+ (99871) 299-00-01",
        en: "+ (99871) 299-00-01",
        uzK: "+ (99871) 299-00-01",
      },
    },
    {
      icon: "fa-solid fa-envelope",
      text: {
        ru: "tstu_rektorat@tstu.ru",
        uz: "tstu_rektorat@tstu.ru",
        en: "tstu_rektorat@tstu.ru",
        uzK: "tstu_rektorat@tstu.ru",
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
  column,
  about,
  contactUs,
  chapter,
  copyRight
}

