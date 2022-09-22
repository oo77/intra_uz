import {ICard} from '../types'

import Rabbit from 'assets/aboutImg/img1.png'
import Laboratory from 'assets/aboutImg/img2.png'
import SternBase from 'assets/aboutImg/img3.png'
import MineralFertilizers from 'assets/aboutImg/img4.png'
import Greenhouse from 'assets/aboutImg/img5.png'
import Slaughter from 'assets/aboutImg/img6.png'
import Cooperation from 'assets/aboutImg/img7.png'

import RabbitCard from 'assets/typeOfActivty/rabbitS.png'
import SternBaseCard from 'assets/typeOfActivty/RabbitFeed.png'
import GreenhouseCard from 'assets/typeOfActivty/green1.png'
import MineralFertilizersCard from 'assets/typeOfActivty/MineralFeed.png'


const rabbit: ICard = {
  image: Rabbit,
  title: {
    uz: `Кролиководство`,
    ru: `Кролиководство`,
    en: `Кролиководство`
  },
  description: {
    uz: `Агрокомплекс «Моя мечта» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области...`,
    ru: `Агрокомплекс «Моя мечта» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области...`,
    en: `Агрокомплекс «Моя мечта» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области...`,
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
    uz: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.Также, компания занимается разведением мясных пород кроликов...`,
    ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.Также, компания занимается разведением мясных пород кроликов...`,
    en: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии.Также, компания занимается разведением мясных пород кроликов...`,
  },
  to: {
    route: '/activity?name=laboratory',
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
    uz: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам и ...`,
    en: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам и ...`,
    ru: `Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам и ...`,
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
    uz: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя...`,
    ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя...`,
    en: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя...`,
  },
  to: {
    route: '/activity?name=sternBase',
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
    uz: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудований...`,
    ru: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудований...`,
    en: `Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейших технологичных оборудований...`,
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

const cooperation: ICard = {
  image: Cooperation,
  title: {
    uz: 'Кооперация',
    ru: 'Кооперация',
    en: 'Кооперация'
  },
  description: {
    uz: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов...`,
    ru: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов...`,
    en: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов...`,
  },
  to: {
    route: '/activity?name=cooperation',
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
  greenhouse,
  cooperation
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
  },
  {
    image: Slaughter,
    route: '/activity?name=slaughter',
    title: {
      uz: 'Бойня',
      ru: 'Бойня',
      en: 'Бойня'
    },
  },
  {
    image: Cooperation,
    route: '/activity?name=cooperation',
    title: {
      uz: 'Кооперация',
      ru: 'Кооперация',
      en: 'Кооперация'
    },
  },
]


export {
  TypesOfActivtyCard,
  AboutActivity,
}
