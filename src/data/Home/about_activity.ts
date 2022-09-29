import {ICard} from '../types'

import Rabbit from 'assets/aboutImg/img1.png'
import Laboratory from 'assets/aboutImg/img2.png'
import SternBase from 'assets/aboutImg/img3.png'
import MineralFertilizers from 'assets/aboutImg/img4.png'
import Greenhouse from 'assets/aboutImg/img5.png'
import Slaughter from 'assets/aboutImg/img6.png'
import Cooperation from 'assets/aboutImg/img7.png'


const rabbit: ICard = {
  image: Rabbit,
  title: {
    uz: `Quyonchilik`,
    ru: `Кролиководство`,
    en: `Rabbit breeding`,
    uzK: `Қуёнчилик`
  },
  description: {
    uz: `«Моя Мечта» agrokompleksi Toshkent viloyatining ekologik toza zonasida joylashgan, italiyalik mutaxassislar tomonidan butun Yevropa standartlariga javob beradigan...`,

    ru: `Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области...`,

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
  image: Laboratory,
  title: {
    uz: `Laboratoriya`,
    ru: `Лаборатория`,
    en: `Laboratory`,
    uzK: `Лаборатория`
  },
  description: {
    ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.Также, компания занимается разведением мясных пород кроликов...`,
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
  image: MineralFertilizers,
  title: {
    uz: "O'g'itlar",
    ru: `Удобрения`,
    en: `Fertilizers`,
    uzK: `Ўғитлар`
  },
  description: {
    uz: `Organik oʻgʻitlar ishlab chiqarish uchun quyon chiqindilarini qayta ishlash boʻyicha Oʻzbekistonda yagona zavod. Uning yordami bilan biz bogʻbonlarga, fermerlarga va...`,
    en: `The only plant in Uzbekistan for the processing of rabbit waste for the manufacture of organic fertilizers. With its help, we help gardeners, farmers and other interested parties to analyze the land...`,
    ru: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам и...`,
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
  image: SternBase,
  title: {
    uz: 'Yem ishlab chiqarish',
    ru: 'Корма',
    en: 'Feed',
    uzK: `Ем ишлаб чиқариш`
  },
  description: {
    uz: `Bizning quyonlarimiz Yevropaning yetakchi mutaxassislari tomonidan ishlab chiqilgan maxsus retseptura boʻyicha tayyorlangan aralash quruq yem bilan oziqlanadi...`,
    ru: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами...`,
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
  image: Greenhouse,
  title: {
    uz: 'Issiqxona',
    ru: 'Теплица',
    en: 'Greenhouse',
    uzK: `Иссиқхона`
  },
  description: {
    uz: `10 gektar maydonga ega yuqori mahsuldor boʻlgan toʻliq avtomatlashtirilgan shishali issiqxonada eng yangi va barcha Yevropa standartlariga javob beradigan texnologik uskunalardan foydalanilgan...`,

    ru: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудования...`,

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

const slaughter: ICard = {
  image: Slaughter,
  title: {
    uz: 'Qassobxona',
    ru: 'Бойня',
    en: 'Slaughter',
    uzK: `Қассобхона`
  },
  description: {
    uz: `Shaxsiy, toʻliq avtomatlashtirilgan qassoblik sexi ishlab chiqarish hududida joylashgan. Shuning uchun quyonlar soʻyish joyiga yetkazish mobaynida hayajonlanish hissini boshdan kechirmaydi...`,

    ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя...`,

    en: `Our own fully automated slaughterhouse is located on the production area, so rabbits do not experience stress from transportation to the slaughter site...`,

    uzK: `Шахсий, тўлиқ автоматлаштирилган қассоблик сехи ишлаб чиқариш ҳудудида жойлашган. Шунинг учун қуёнлар сўйиш жойига етказиш мобайнида ҳаяжонланиш ҳиссини бошдан кечирмайди...`
  },
  to: {
    route: '/activity?name=slaughter',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
    uzK: `Батафсил`
  }
}

const cooperation: ICard = {
  image: Cooperation,
  title: {
    uz: 'Kooperatsiya',
    ru: 'Кооперация',
    en: 'Cooperation ',
    uzK: `Кооперация`
  },
  description: {
    uz: `«Моя Мечта» kompaniyasi har kimga qoʻshimcha daromad olish imkoniyatini qoʻlga kiritishda yordam beradi. Biz sizga quyonlarni yetishtirish texnologiyasi...`,

    ru: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов...`,

    en: `The company "My Dream" helps everyone to get the opportunity of additional income. We will advise you on the technology of raising rabbits, the possibility of acquiring...`,

    uzK: `"Моя Мечта" компанияси ҳар кимга қўшимча даромад олиш имкониятини қўлга киритишда ёрдам беради. Биз сизга қуёнларни етиштириш технологияси...`
  },
  to: {
    route: '/activity?name=cooperation',
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
  cooperation,
  slaughter
] as ICard[]

const TypesOfActivtyCard = [

  {
    image: Rabbit,
    route: '/activity?name=rabbit',
    title: {
      uz: `Quyonchilik`,
      ru: `Кролиководство`,
      en: `Rabbit breeding`,
      uzK: `Қуёнчилик`
    },
  },
  {
    image: SternBase,
    route: '/activity?name=sternBase',
    title: {
      uz: 'Yem ishlab chiqarish',
      ru: 'Корма',
      en: 'Feed',
      uzK: `Ем ишлаб чиқариш`
    },
  },
  {
    image: Greenhouse,
    route: '/activity?name=greenhouse',
    title: {
      uz: 'Issiqxona',
      ru: 'Теплица',
      en: 'Greenhouse',
      uzK: `Иссиқхона`
    },
  },
  {
    image: MineralFertilizers,
    route: '/activity?name=mineralFertilizers',
    title: {
      uz: "O'g'itlar",
      ru: `Удобрения`,
      en: `Fertilizers`,
      uzK: `Ўғитлар`
    },
  },
  {
    image: Slaughter,
    route: '/activity?name=slaughter',
    title: {
      uz: 'Qassobxona',
      ru: 'Бойня',
      en: 'Slaughter',
      uzK: `Қассобхона`
    },
  },
  {
    image: Cooperation,
    route: '/activity?name=cooperation',
    title: {
      uz: 'Kooperatsiya',
      ru: 'Кооперация',
      en: 'Cooperation ',
      uzK: `Кооперация`
    },
  },
]


export {
  TypesOfActivtyCard,
  AboutActivity,
}
