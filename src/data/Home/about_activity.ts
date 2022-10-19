import {ICard} from '../types'

import Target1 from 'assets/aboutImg/img1.png'
import Target2 from 'assets/aboutImg/img2.png'
import Target3 from 'assets/aboutImg/img3.png'
import Target4 from 'assets/aboutImg/img4.png'
import Target5 from 'assets/aboutImg/img5.png'
import Slaughter from 'assets/aboutImg/img6.png'
import Cooperation from 'assets/aboutImg/img7.png'


const rabbit: ICard = {
  image: Target1,
  title: {
    uz: `Quyonchilik`,
    ru: `Кролиководство`,
    en: `Rabbit breeding`,
    uzK: `Қуёнчилик`
  },
  description: {
    uz: `«Моя Мечта» agrokompleksi Toshkent viloyatining ekologik toza zonasida joylashgan, italiyalik mutaxassislar tomonidan butun Yevropa standartlariga javob beradigan...`,

    ru: `Инициирование, организация процесса участия научных-исследовательских центров и коллективное участии в научно-исследовательных проектах и повышение роли железнодорожного транспорта.`,

    en: `Agricultural complex «Мy Dream» is the worldwide largest rabbit-breeding cluster located in ecologically friendly and clean zone of Tashkent region and...`,

    uzK: `"Моя Мечта" агрокомплекси Тошкент вилоятининг екологик тоза зонасида жойлашган дунёдаги енг йирик қуёнчилик кластери бўлиб...`
  },
  to: {
    route: '/activity?name=rabbit',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
    uzK: `Батафсил`
  }
}

const laboratory: ICard = {
  image: Target2,
  title: {
    uz: `Laboratoriya`,
    ru: `Лаборатория`,
    en: `Laboratory`,
    uzK: `Лаборатория`
  },
  description: {
    ru: `Взаимодействие с транспортными перевозчиками и повышение уровня транспортной логистики и организации движения поездов с применением современных автоматизированных систем.`,
    uz: `Genetika markazi Italiyaning ANCI genetik markazi bilan onlayn rejimida ishlaydi. Shuningdek, kompaniya quyonlarning goʻshtli zotlarini koʻpaytirish bilan...`,
    en: `The Genetic Center works online with the ANCI Genetic Center in Italy. Also, the company is engaged in breeding meat species of rabbits, each rabbit born is given...`,
    uzK: `Бизнинг генетик марказ Италиядаги АНCИ генетик маркази билан онлайн иш фаолиятини олиб боради. Шунингдек, компания...`
  },
  to: {
    route: '/activity?name=laboratory',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
    uzK: `Батафсил`
  }
}

const mineralFertilizers: ICard = {
  image: Target3,
  title: {
    uz: "O'g'itlar",
    ru: `Удобрения`,
    en: `Fertilizers`,
    uzK: `Ўғитлар`
  },
  description: {
    uz: `Organik oʻgʻitlar ishlab chiqarish uchun quyon chiqindilarini qayta ishlash boʻyicha Oʻzbekistonda yagona zavod. Uning yordami bilan biz bogʻbonlarga, fermerlarga va...`,
    en: `The only plant in Uzbekistan for the processing of rabbit waste for the manufacture of organic fertilizers. With its help, we help gardeners, farmers and other interested parties to analyze the land...`,
    ru: `Oбеспечение мероприятий по организации проведения выставок, съездов, по организации участия в мероприятиях, проводимых другими организациями.`,
    uzK: `Органик ўғитлар ишлаб чиқариш учун қуён чиқиндиларини қайта ишлаш бўйича Ўзбекистонда ягона завод. Унинг ёрдами билан биз боғбонларга, фермерларга ва...`
  },
  to: {
    route: '/activity?name=mineralFertilizers',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
    uzK: `Батафсил`
  }
}

const sternBase: ICard = {
  image: Target4,
  title: {
    uz: 'Yem ishlab chiqarish',
    ru: 'Корма',
    en: 'Feed',
    uzK: `Ем ишлаб чиқариш`
  },
  description: {
    uz: `Bizning quyonlarimiz Yevropaning yetakchi mutaxassislari tomonidan ishlab chiqilgan maxsus retseptura boʻyicha tayyorlangan aralash quruq yem bilan oziqlanadi...`,
    ru: `Изучение проблем развития системы транспорта и логистики, использования транспортного потенциала республики, выработку предложений по устранению проблем.`,
    en: `Our rabbits eat combined dry food prepared according to a special recipe developed by leading European specialists.All equipment is installed and...`,
    uzK: `Бизнинг қуёнларимиз Европанинг етакчи мутахассислари томонидан ишлаб чиқилган махсус рецептура бўйича тайёрланган аралаш қуруқ ем билан озиқланади...`
  },
  to: {
    route: '/activity?name=sternBase',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
    uzK: `Батафсил`
  }
}

const greenhouse: ICard = {
  image: Target5,
  title: {
    uz: 'Issiqxona',
    ru: 'Теплица',
    en: 'Greenhouse',
    uzK: `Иссиқхона`
  },
  description: {
    uz: `10 gektar maydonga ega yuqori mahsuldor boʻlgan toʻliq avtomatlashtirilgan shishali issiqxonada eng yangi va barcha Yevropa standartlariga javob beradigan texnologik uskunalardan foydalanilgan...`,

    ru: `Повышение пропускной, провозной и перерабатывающей способности станций и перегонов и внедрение инновационных технологий и интеллектуальных транспортных систем.`,

    en: `Totally automatic high-yield glass greenhouse with an area of   10 hectares utilizes the latest technological machinery and is in accord with all European standards...`,

    uzK: `10 гектар майдонга ега юқори маҳсулдор бўлган тўлиқ автоматлаштирилган шишали иссиқхонада енг янги ва барча Европа стандартларига жавоб берадиган...`
  },
  to: {
    route: '/activity?name=greenhouse',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
    uzK: `Батафсил`
  }
}


const AboutActivity = [
  rabbit,
  laboratory,
  sternBase,
  mineralFertilizers,
  greenhouse,

] as ICard[]

const TypesOfActivtyCard = [

  {
    image: Target1,
    route: '/activity?name=rabbit',
    title: {
      uz: `Quyonchilik`,
      ru: `Кролиководство`,
      en: `Rabbit breeding`,
      uzK: `Қуёнчилик`
    },
  },
  {
    image: Target2,
    route: '/activity?name=rabbit',
    title: {
      uz: `Quyonchilik`,
      ru: `Кролиководство`,
      en: `Rabbit breeding`,
      uzK: `Қуёнчилик`
    },
  },
  {
    image: Target3,
    route: '/activity?name=sternBase',
    title: {
      uz: 'Yem ishlab chiqarish',
      ru: 'Корма',
      en: 'Feed',
      uzK: `Ем ишлаб чиқариш`
    },
  },
  {
    image: Target5,
    route: '/activity?name=greenhouse',
    title: {
      uz: 'Issiqxona',
      ru: 'Теплица',
      en: 'Greenhouse',
      uzK: `Иссиқхона`
    },
  },
  {
    image: Target4,
    route: '/activity?name=mineralFertilizers',
    title: {
      uz: "O'g'itlar",
      ru: `Удобрения`,
      en: `Fertilizers`,
      uzK: `Ўғитлар`
    },
  },
]


export {
  TypesOfActivtyCard,
  AboutActivity,
}
