import {ICard} from '../types'

import Rabbit from 'assets/aboutImg/img1.png'
import Laboratory from 'assets/aboutImg/img2.png'
import SternBase from 'assets/aboutImg/img3.png'
import MineralFertilizers from 'assets/aboutImg/img4.png'
import Greenhouse from 'assets/aboutImg/img5.png'
import Slaughter from 'assets/aboutImg/img6.png'

import RabbitCard from 'assets/typeOfActivty/rabbitS.png'
import SternBaseCard from 'assets/typeOfActivty/RabbitFeed.png'
import GreenhouseCard from 'assets/typeOfActivty/green1.png'
import MineralFertilizersCard from 'assets/typeOfActivty/MineralFeed.png'


const rabbit: ICard = {
  image: Rabbit,
  title: {
    uz: 'Кролиководство',
    ru: 'Кролиководство',
    en: 'Кролиководство'
  },
  description: {
    uz: `Агрокомплекс «Моя мечта» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области, спроектированный по итальянским технологиям. Компания занимается производством и переработкой мяса кролика и считается на сегодняшний день одним из самых крупных в мире производителей предоставленного продукта.`,
    ru: `Агрокомплекс «Моя мечта» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области, спроектированный по итальянским технологиям. Компания занимается производством и переработкой мяса кролика и считается на сегодняшний день одним из самых крупных в мире производителей предоставленного продукта.`,
    en: `Агрокомплекс «Моя мечта» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области, спроектированный по итальянским технологиям. Компания занимается производством и переработкой мяса кролика и считается на сегодняшний день одним из самых крупных в мире производителей предоставленного продукта.`,
  },
  to: {
    route: '/activity?name=rabbit',
    uz: 'Подробнее',
    ru: 'Подробнее',
    en: 'Подробнее',
  }
}

const laboratory: ICard = {
  image: Laboratory,
  title: {
    uz: `Лаборатория`,
    ru: `Лаборатория`,
    en: `Лаборатория`
  },
  description: {
    uz: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.`,
    ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.`,
    en: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.`,
  },
  to: {
    route: '/activity?name=rabbit',
    uz: 'Подробнее',
    ru: 'Подробнее',
    en: 'Подробнее',
  }
}

const mineralFertilizers: ICard = {
  image: MineralFertilizers,
  title: {
    uz: `Удобрения`,
    ru: `Удобрения`,
    en: `Удобрения`
  },
  description: {
    uz: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. `,
    en: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. `,
    ru: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. `,
  },
  to: {
    route: '/activity?name=mineralFertilizers',
    uz: 'Подробнее',
    ru: 'Подробнее',
    en: 'Подробнее',
  }
}

const sternBase: ICard = {
  image: SternBase,
  title: {
    uz: 'Корма',
    ru: 'Корма',
    en: 'Корма'
  },
  description: {
    uz: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами.`,
    ru: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами.`,
    en: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами.`,
  },
  to: {
    route: '/activity?name=rabbit',
    uz: 'Подробнее',
    ru: 'Подробнее',
    en: 'Подробнее',
  }
}

const greenhouse: ICard = {
  image: Greenhouse,
  title: {
    uz: 'Теплица',
    ru: 'Теплица',
    en: 'Теплица'
  },
  description: {
    uz: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудований, рекомендованных на лидирующих торговых площадках и отвечающим всем европейским стандартам`,
    ru: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудований, рекомендованных на лидирующих торговых площадках и отвечающим всем европейским стандартам`,
    en: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудований, рекомендованных на лидирующих торговых площадках и отвечающим всем европейским стандартам`,
  },
  to: {
    route: '/activity?name=greenhouse',
    uz: 'Подробнее',
    ru: 'Подробнее',
    en: 'Подробнее',
  }
}

const slaughter: ICard = {
  image: Slaughter,
  title: {
    uz: 'Бойня',
    ru: 'Бойня',
    en: 'Бойня'
  },
  description: {
    uz: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.`,
    ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.`,
    en: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.`,
  },
  to: {
    route: '/activity?name=slaughter',
    uz: 'Подробнее',
    ru: 'Подробнее',
    en: 'Подробнее',
  }
}


const AboutActivity = [
  slaughter,
  rabbit,
  laboratory,
  sternBase,
  mineralFertilizers,
  greenhouse
] as ICard[]

const TypesOfActivtyCard = [
  {
    image: RabbitCard,
    route: '/activity?name=rabbit',
    title: {
      uz: 'Кролиководство',
      ru: 'Кролиководство',
      en: 'Кролиководство'
    },
  },
  {
    image: SternBaseCard,
    route: '/activity?name=sternBase',
    title: {
      uz: 'Корма',
      ru: 'Корма',
      en: 'Корма'
    },
  },
  {
    image: GreenhouseCard,
    route: '/activity?name=greenhouse',
    title: {
      uz: 'Теплица',
      ru: 'Теплица',
      en: 'Теплица'
    },
  },
  {
    image: MineralFertilizersCard,
    route: '/activity?name=mineralFertilizers',
    title: {
      uz: `Удобрения`,
      ru: `Удобрения`,
      en: `Удобрения`
    },
  }
]



export {
  TypesOfActivtyCard,
  AboutActivity,
}
