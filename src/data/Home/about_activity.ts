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
    en: `Rabbit breeding`
  },
  description: {
    uz: `«Моя Мечта» agrokompleksi Toshkent viloyatining ekologik toza zonasida joylashgan dunyodagi eng yirik quyonchilik klasteri bo'lib...`,
    ru: `Агрокомплекс «Моя Мечта» является крупнейшим в мире кролиководческим кластером, расположенный в экологически чистой зоне Ташкентской области...`,
    en: `Agricultural complex «Мy Dream» is the worldwide largest rabbit-breeding cluster located in ecologically friendly and clean zone of Tashkent region and...`,
  },
  to: {
    route: '/activity?name=rabbit',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
  }
}

const laboratory: ICard = {
  image: Laboratory,
  title: {
    uz: `Laboratoriya`,
    ru: `Лаборатория`,
    en: `Laboratory`
  },
  description: {
    ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.Также, компания занимается разведением мясных пород кроликов...`,
    uz: `Bizning genetik markaz Italiyadagi ANCI genetik markazi bilan onlayn ish faoliyatini olib boradi. Shuningdek, kompaniya...`,
    en: `The genetical center functions online along with the ANCI genetical center in Italy. Besides, the company is engaged in...`,
  },
  to: {
    route: '/activity?name=laboratory',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
  }
}

const mineralFertilizers: ICard = {
  image: MineralFertilizers,
  title: {
    uz: "O'g'itlar",
    ru: `Удобрения`,
    en: `Fertilizers`
  },
  description: {
    uz: `O&#39;zbekistonda quyon chiqindilarini qayta ishlash bo&#39;yicha organik o&#39;g&#39;itlar ishlab chiqaradigan yagona zavod. U bilan bog‘bonlar, fermerlar va ...`,
    en: `The only factory throughout Uzbekistan for the processing of rabbit waste with the aim of manufacturing organic fertilizers. By the help...`,
    ru: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам и ...`,
  },
  to: {
    route: '/activity?name=mineralFertilizers',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
  }
}

const sternBase: ICard = {
  image: SternBase,
  title: {
    uz: 'Yem ishlab chiqarish',
    ru: 'Корма',
    en: 'Feed'
  },
  description: {
    uz: `Bizning quyonlarimiz Evropaning etakchi mutaxassislari tomonidan ishlab chiqilgan maxsus retsept bo'yicha tayyorlangan kombinatsiyalangan quruq ozuqa bilan oziqlanadi...`,
    ru: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами...`,
    en: `Our rabbits eat combined dry food prepared according to a special recipe developed by leading European specialists...`,
  },
  to: {
    route: '/activity?name=sternBase',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
  }
}

const greenhouse: ICard = {
  image: Greenhouse,
  title: {
    uz: 'Issiqxona',
    ru: 'Теплица',
    en: 'Greenhouse'
  },
  description: {
    uz: `Eng yangi texnologik uskunalardan foydalangan holda va barcha Yevropa standartlariga javob beradigan 10 gektar maydonga ega to&#39;liq avtomatlashtirilgan...`,
    ru: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудования...`,
    en: `Totally automatic high-yield glass greenhouse with an area of   10 hectares utilizes the latest technological machinery and is in accord with all European standards...`,
  },
  to: {
    route: '/activity?name=greenhouse',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
  }
}

const slaughter: ICard = {
  image: Slaughter,
  title: {
    uz: 'Qushxona',
    ru: 'Бойня',
    en: 'Slaughter'
  },
  description: {
    uz: `Kompaniya o&#39;zining hududida maxsus, yuqori samaradorlikka ega va yangi zamonaviy texnologiyalar bilan jihozlangan qushxonasiga ega bo’lib...`,
    ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя...`,
    en: `Our own, entirely automatic slaughterhouse is located throughout the production site, so that the rabbits do not experience the stress...`,
  },
  to: {
    route: '/activity?name=slaughter',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
  }
}

const cooperation: ICard = {
  image: Cooperation,
  title: {
    uz: 'Kooperatsiya',
    ru: 'Кооперация',
    en: 'Cooperation '
  },
  description: {
    uz: `«Моя мечта» kompaniyasi har kimga qo&#39;shimcha daromadga ega boʻlish imkoniyatini qo&#39;lga kiritishda yordam beradi. Biz sizga quyonlarni yetishtirish texnologiyasi...`,
    ru: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов...`,
    en: `«Мy Dream» company enables everyone with the chance to earn extra income. We are eager to consult you in terms of rabbit breeding...`,
  },
  to: {
    route: '/activity?name=cooperation',
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'More',
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
      en: `Rabbit breeding`
    },
  },
  {
    image: SternBase,
    route: '/activity?name=sternBase',
    title: {
      uz: 'Yem ishlab chiqarish',
      ru: 'Корма',
      en: 'Feed'
    },
  },
  {
    image: Greenhouse,
    route: '/activity?name=greenhouse',
    title: {
      uz: 'Issiqxona',
      ru: 'Теплица',
      en: 'Greenhouse'
    },
  },
  {
    image: MineralFertilizers,
    route: '/activity?name=mineralFertilizers',
    title: {
      uz: "O'g'itlar",
      ru: `Удобрения`,
      en: `Fertilizers`
    },
  },
  {
    image: Slaughter,
    route: '/activity?name=slaughter',
    title: {
      uz: 'Qushxona',
      ru: 'Бойня',
      en: 'Slaughter'
    },
  },
  {
    image: Cooperation,
    route: '/activity?name=cooperation',
    title: {
      uz: 'Kooperatsiya',
      ru: 'Кооперация',
      en: 'Cooperation '
    },
  },
]


export {
  TypesOfActivtyCard,
  AboutActivity,
}
