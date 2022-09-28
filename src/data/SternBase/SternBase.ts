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
      uzK: `Йирик қорамол емиши`
    },
    content1: {
      ru: `Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,

      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,

      uz: `Hamma uskunalar barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish sohasida dunyodagi yetakchi kompaniyalardan biri hisoblanadigan mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> italyan kompaniyasi tomonidan ishlab chiqarilgan va oʻrnatilgan.`,

      uzK: ``

    },
    content2: {
      ru: `Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.`,

      en: `The feed produced by us, according to the Italian recipe in accordance with the requirements of the European Economic Community (EEC), meets all quality standards. Additionally, our company has the ability to produce feed according to any necessary recipe, according to the wishes and requirements of the client.
`,

      uz: `Biz ishlab chiqarayotgan yem mahsulotlari, italyancha retsept boʻyicha, Yevropa Ittifoqi (EES) talablariga muvofiq, barcha sifat standartlariga javob beradi. Qoʻshimcha ravishda, bizning kompaniyamiz mijozning xohish va talabiga koʻra, istalgan retsept boʻyicha yem mahsuloti ishlab chiqarish imkoniyatiga ega .
`,

      uzK: `Биз ишлаб чиқараётган ем маҳсулотлари, итальянча рецепт бўйича, Европа Иттифоқи (EЭС) талабларига мувофиқ, барча сифат стандартларига жавоб беради. Қўшимча равишда, бизнинг компаниямиз мижознинг хоҳиш ва талабига кўра, исталган рецепт бўйича ем маҳсулоти  ишлаб чиқариш имкониятига эга.
`,

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
      ru: `Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,

      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,

      uz: `Hamma uskunalar barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish sohasida dunyodagi yetakchi kompaniyalardan biri hisoblanadigan mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> italyan kompaniyasi tomonidan ishlab chiqarilgan va oʻrnatilgan.`,

      uzK: `Ҳамма ускуналар барча турдаги ҳайвонлар учун озуқа линиялари ишлаб чиқариш соҳасида дунёдаги етакчи компаниялардан бири ҳисобланадиган машҳур <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> итальян компанияси томонидан ишлаб чиқарилган ва  ўрнатилган.
`

    },
    content2: {
      ru: `Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.`,

      en: `The feed produced by us, according to the Italian recipe in accordance with the requirements of the European Economic Community (EEC), meets all quality standards. Additionally, our company has the ability to produce feed according to any necessary recipe, according to the wishes and requirements of the client.
`,

      uz: `Biz ishlab chiqarayotgan yem mahsulotlari, italyancha retsept boʻyicha, Yevropa Ittifoqi (EES) talablariga muvofiq, barcha sifat standartlariga javob beradi. Qoʻshimcha ravishda, bizning kompaniyamiz mijozning xohish va talabiga koʻra, istalgan retsept boʻyicha yem mahsuloti ishlab chiqarish imkoniyatiga ega .
`,

      uzK: `Биз ишлаб чиқараётган ем маҳсулотлари, итальянча рецепт бўйича, Европа Иттифоқи (EЭС) талабларига мувофиқ, барча сифат стандартларига жавоб беради. Қўшимча равишда, бизнинг компаниямиз мижознинг хоҳиш ва талабига кўра, исталган рецепт бўйича ем маҳсулоти  ишлаб чиқариш имкониятига эга.
`,

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
    }, content1: {
      ru: `Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,

      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,

      uz: `Hamma uskunalar barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish sohasida dunyodagi yetakchi kompaniyalardan biri hisoblanadigan mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> italyan kompaniyasi tomonidan ishlab chiqarilgan va oʻrnatilgan.`,

      uzK: `Ҳамма ускуналар барча турдаги ҳайвонлар учун озуқа линиялари ишлаб чиқариш соҳасида дунёдаги етакчи компаниялардан бири ҳисобланадиган машҳур <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> итальян компанияси томонидан ишлаб чиқарилган ва  ўрнатилган.
`

    },
    content2: {
      ru: `Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.`,

      en: `The feed produced by us, according to the Italian recipe in accordance with the requirements of the European Economic Community (EEC), meets all quality standards. Additionally, our company has the ability to produce feed according to any necessary recipe, according to the wishes and requirements of the client.
`,

      uz: `Biz ishlab chiqarayotgan yem mahsulotlari, italyancha retsept boʻyicha, Yevropa Ittifoqi (EES) talablariga muvofiq, barcha sifat standartlariga javob beradi. Qoʻshimcha ravishda, bizning kompaniyamiz mijozning xohish va talabiga koʻra, istalgan retsept boʻyicha yem mahsuloti ishlab chiqarish imkoniyatiga ega .
`,

      uzK: `Биз ишлаб чиқараётган ем маҳсулотлари, итальянча рецепт бўйича, Европа Иттифоқи (EЭС) талабларига мувофиқ, барча сифат стандартларига жавоб беради. Қўшимча равишда, бизнинг компаниямиз мижознинг хоҳиш ва талабига кўра, исталган рецепт бўйича ем маҳсулоти  ишлаб чиқариш имкониятига эга.
`,

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
    }, content1: {
      ru: `Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,

      en: `All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,

      uz: `Hamma uskunalar barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish sohasida dunyodagi yetakchi kompaniyalardan biri hisoblanadigan mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> italyan kompaniyasi tomonidan ishlab chiqarilgan va oʻrnatilgan.`,

      uzK: `Ҳамма ускуналар барча турдаги ҳайвонлар учун озуқа линиялари ишлаб чиқариш соҳасида дунёдаги етакчи компаниялардан бири ҳисобланадиган машҳур <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> итальян компанияси томонидан ишлаб чиқарилган ва  ўрнатилган.
`

    },

    content2: {
      ru: `Производимые нами корма, по итальянскому рецепту в соответствии с требованиями Европейского союза (ЕЭС) отвечающие всем стандартам качества. Дополнительно, наша компания имеет возможность производство кормов по любому необходимому рецепту, согласно пожеланию и требованию клиента.`,

      en: `The feed produced by us, according to the Italian recipe in accordance with the requirements of the European Economic Community (EEC), meets all quality standards. Additionally, our company has the ability to produce feed according to any necessary recipe, according to the wishes and requirements of the client.
`,

      uz: `Biz ishlab chiqarayotgan yem mahsulotlari, italyancha retsept boʻyicha, Yevropa Ittifoqi (EES) talablariga muvofiq, barcha sifat standartlariga javob beradi. Qoʻshimcha ravishda, bizning kompaniyamiz mijozning xohish va talabiga koʻra, istalgan retsept boʻyicha yem mahsuloti ishlab chiqarish imkoniyatiga ega .
`,

      uzK: `Биз ишлаб чиқараётган ем маҳсулотлари, итальянча рецепт бўйича, Европа Иттифоқи (EЭС) талабларига мувофиқ, барча сифат стандартларига жавоб беради. Қўшимча равишда, бизнинг компаниямиз мижознинг хоҳиш ва талабига кўра, исталган рецепт бўйича ем маҳсулоти  ишлаб чиқариш имкониятига эга.
`,

    },
    images: [coock1, coock2]
  },
]

export {
  TypeOfsternBase
}
