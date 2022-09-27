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
      en: 'Cattle feed',
      uz: 'Yirik qoramol yemishi',
    },
    content1: {
      ru: `Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,
      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,
      uz: `Barcha jihozlar Italiyaning mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> kompaniyasi tomonidan oʻrnatilgan. Ushbu kompaniya barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish boʻyicha dunyodagi yetakchi kompaniyalardan biri hisoblanadi.`,
    },
    content2: {
      ru: `Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.`,
      en: 'The food, produced by our company in accordance with the Italian recipe and all requirements of the European Union (EEC), entirely meets quality standards. Additionally, our company introduces the opportunity to produce the food according to any desired and required by a costumer recipe. ',
      uz: `Biz italiya retsepti bo‘yicha ishlab chiqarayotgan yemish mahsulotlari Yevropa Ittifoqi (EEC) talablariga va barcha sifat standartlariga javob beradi. Bundan tashqari, kompaniyamiz mijozning xohish va talabiga ko&#39;ra, istalgan retsept bo&#39;yicha yemish ishlab chiqarish imkoniyatiga ega.`,
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
      en: 'Rabbit feed',
      uz: 'Quyon yemishi',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,
      uz: `Barcha jihozlar Italiyaning mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> kompaniyasi tomonidan oʻrnatilgan. Ushbu kompaniya barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish boʻyicha dunyodagi yetakchi kompaniyalardan biri hisoblanadi.`,
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'The food, produced by our company in accordance with the Italian recipe and all requirements of the European Union (EEC), entirely meets quality standards. Additionally, our company introduces the opportunity to produce the food according to any desired and required by a costumer recipe. ',
      uz: `Biz italiya retsepti bo‘yicha ishlab chiqarayotgan yemish mahsulotlari Yevropa Ittifoqi (EEC) talablariga va barcha sifat standartlariga javob beradi. Bundan tashqari, kompaniyamiz mijozning xohish va talabiga ko&#39;ra, istalgan retsept bo&#39;yicha yemish ishlab chiqarish imkoniyatiga ega.`,
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
      en: 'Small cattle feed',
      uz: 'Yirik qoramol yemishi',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,
      uz: `Barcha jihozlar Italiyaning mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> kompaniyasi tomonidan oʻrnatilgan. Ushbu kompaniya barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish boʻyicha dunyodagi yetakchi kompaniyalardan biri hisoblanadi.`,
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'The food, produced by our company in accordance with the Italian recipe and all requirements of the European Union (EEC), entirely meets quality standards. Additionally, our company introduces the opportunity to produce the food according to any desired and required by a costumer recipe. ',
      uz: `Biz italiya retsepti bo‘yicha ishlab chiqarayotgan yemish mahsulotlari Yevropa Ittifoqi (EEC) talablariga va barcha sifat standartlariga javob beradi. Bundan tashqari, kompaniyamiz mijozning xohish va talabiga ko&#39;ra, istalgan retsept bo&#39;yicha yemish ishlab chiqarish imkoniyatiga ega.`,
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
      en: 'Chicken feed',
      uz: 'Tovuq yemishi',
    },
    content1: {
      ru: 'Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.',
      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,
      uz: `Barcha jihozlar Italiyaning mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> kompaniyasi tomonidan oʻrnatilgan. Ushbu kompaniya barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish boʻyicha dunyodagi yetakchi kompaniyalardan biri hisoblanadi.`,
    },
    content2: {
      ru: 'Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.',
      en: 'The food, produced by our company in accordance with the Italian recipe and all requirements of the European Union (EEC), entirely meets quality standards. Additionally, our company introduces the opportunity to produce the food according to any desired and required by a costumer recipe. ',
      uz: `Biz italiya retsepti bo‘yicha ishlab chiqarayotgan yemish mahsulotlari Yevropa Ittifoqi (EEC) talablariga va barcha sifat standartlariga javob beradi. Bundan tashqari, kompaniyamiz mijozning xohish va talabiga ko&#39;ra, istalgan retsept bo&#39;yicha yemish ishlab chiqarish imkoniyatiga ega.`,
    },
    images: [coock1, coock2]
  },
]

export {
  TypeOfsternBase
}
