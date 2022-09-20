import activityRabbitImg from 'assets/activityImg/freed/sterns/rabbitSternMain.jpg'
import activityRabbitIcon from 'assets/activityImg/freed/rabbitIcon.png'
import activityCowIcon from 'assets/activityImg/freed/cowIcon.png'
import activityCowImg from 'assets/activityImg/freed/sterns/cowSternMain.jpg'
import activitySheepIcon from 'assets/activityImg/freed/sheepIcon.png'
import activitySheepImg from 'assets/activityImg/freed/sterns/sheepSternMain.jpg'
import activityCoockIcon from 'assets/activityImg/freed/coockIcon.png'
import activityCoockImg from 'assets/activityImg/freed/sterns/coockSternMain.jpg'

import cow1 from 'assets/activityImg/freed/sterns/cowSternImg1.jpg'
import cow2 from 'assets/activityImg/freed/sterns/cowSternImg2.jpg'
import coock1 from 'assets/activityImg/freed/sterns/coockSternImg1.jpg'
import coock2 from 'assets/activityImg/freed/sterns/coockSternImg2.jpg'
import sheep1 from 'assets/activityImg/freed/sterns/sheepSternImg1.jpg'
import sheep2 from 'assets/activityImg/freed/sterns/sheepSternImg2.jpg'
import rabbit1 from 'assets/activityImg/freed/sterns/rabbitSternImg1.jpg'
import rabbit2 from 'assets/activityImg/freed/sterns/rabbitSternImg2.jpg'


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
