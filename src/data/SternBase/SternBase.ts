import activityRabbitImg from 'assets/activityImg/freed/sterns/rabbitSternMain.webp'
import activityRabbitIcon from 'assets/activityImg/freed/rabbitIcon.png'
import activityCowIcon from 'assets/activityImg/freed/cowIcon.png'
import activityCowImg from 'assets/activityImg/freed/sterns/cowSternMain.webp'
import activitySheepIcon from 'assets/activityImg/freed/sheepIcon.png'
import activitySheepImg from 'assets/activityImg/freed/sterns/sheepSternMain.webp'
import activityCoockIcon from 'assets/activityImg/freed/coockIcon.png'
import activityCoockImg from 'assets/activityImg/freed/sterns/coockSternMain.webp'

import cow1 from 'assets/activityImg/freed/sterns/cowSternImg1.webp'
import cow2 from 'assets/activityImg/freed/sterns/cowSternImg2.webp'
import coock1 from 'assets/activityImg/freed/sterns/coockSternImg1.webp'
import coock2 from 'assets/activityImg/freed/sterns/coockSternImg2.webp'
import sheep1 from 'assets/activityImg/freed/sterns/sheepSternImg1.webp'
import sheep2 from 'assets/activityImg/freed/sterns/sheepSternImg2.webp'
import rabbit1 from 'assets/activityImg/freed/sterns/rabbitSternImg1.webp'
import rabbit2 from 'assets/activityImg/freed/sterns/rabbitSternImg2.webp'


const TypeOfsternBase = [
  {
    name: "cow",
    image: activityCowImg,
    icon: activityCowIcon,
    route: {
      path: '/sternBase/cow',
    },
    title: {
      ru: 'Корм для крупного рогатого скота',
      en: 'Корм для крупного рогатого скота',
      uz: 'Корм для крупного рогатого скота',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      uz: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      uz: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
    },
    images: [cow1, cow2]
  },
  {
    name: "rabbit",
    image: activityRabbitImg,
    icon: activityRabbitIcon,
    route: {
      path: '/sternBase/rabbit',
    },
    title: {
      ru: 'Корм для кроликов',
      en: 'Корм для кроликов',
      uz: 'Корм для кроликов',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      uz: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      uz: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
    },
    images: [rabbit1, rabbit2]
  },
  {
    name: "sheep",
    image: activitySheepImg,
    icon: activitySheepIcon,
    route: {
      path: '/sternBase/sheep',
    },
    title: {
      ru: 'Корм для мелкого рогатого скота',
      en: 'Корм для мелкого рогатого скота',
      uz: 'Корм для мелкого рогатого скота',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      uz: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      uz: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
    },
    images: [sheep1, sheep2]
  },
  {
    name: "coock",
    image: activityCoockImg,
    icon: activityCoockIcon,
    route: {
      path: '/sternBase/coock',
    },
    title: {
      ru: 'Корм для кур',
      en: 'Корм для кур',
      uz: 'Корм для кур',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      uz: 'Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      uz: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
    },
    images: [coock1, coock2]
  },
]

export {
  TypeOfsternBase
}
