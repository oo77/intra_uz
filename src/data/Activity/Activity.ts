import slaughterImg from 'assets/activityImg/slaughter.jpg'
import laboratoryImg from 'assets/activityImg/labaratory.jpg'
import sternBaseImg1 from 'assets/activityImg/rabbitFeedimg1.png'
import sternBaseImg2 from 'assets/activityImg/rabbitFeedimg2.png'
import greenHouseProdimg1 from 'assets/activityImg/greenHouseProdimg1.jpg'
import greenHouseProdimg2 from 'assets/activityImg/greenHouseProdimg2.jpg'
import mineralFertimg1 from 'assets/activityImg/mineralFertimg1.jpg'
import mineralFertimg2 from 'assets/activityImg/mineralFertimg2.jpg'
import cooperationImg1 from 'assets/activityImg/cooperationImg1.jpg'

import mineralMain from 'assets/activityImg/mineralMain.jpg'
import rabbitMain from 'assets/activityImg/rabbitMain.jpg'
import greenhouseMain from 'assets/activityImg/greenhouseMain.jpg'
import slaughterMain from 'assets/activityImg/slaughterMain.jpg'
import cooperationMain from 'assets/activityImg/cooperationMain.jpg'


import activityRabbitImg from 'assets/activityImg/freed/sterns/rabbitSternMain.jpg'
import activityRabbitIcon from 'assets/activityImg/freed/rabbitIcon.svg'
import activityCowIcon from 'assets/activityImg/freed/cowIcon.svg'
import activityCowImg from 'assets/activityImg/freed/sterns/cowSternMain.jpg'
import activitySheepIcon from 'assets/activityImg/freed/sheepIcon.svg'
import activitySheepImg from 'assets/activityImg/freed/sterns/sheepSternMain.jpg'
import activityCoockIcon from 'assets/activityImg/freed/coockIcon.svg'
import activityCoockImg from 'assets/activityImg/freed/sterns/coockSternMain.jpg'


const Activity = [

  {
    name: "rabbit",
    mainImg: rabbitMain,
    rabbitBreed: {
      title: {
        ru: 'Кролиководство',
        en: 'Кролиководство',
        uz: 'Кролиководство',
      },
      content:
        {
          ru: `Мясо кролика отличается исключительно высокими питательными свойствами. По химическим, морфо-биохимическим и технологическим качествам, оно превышает мясо других животных. Например, если курица до 75%, говядина и баранина до 65% процентов усваиваются организмом, то крольчатина усваивается до 97%. <br><br> Кроличье мясо является полноценным питательным продуктом. Оно выгодно отличается от других видов мяса и содержит все основные компоненты, необходимые организму человека. <br> <br> Крольчатина содержит огромное количество полноценного белка (более 20%), в его    составе присутствует большое количество аминокислот, витаминов и микроэлементов. <br><br> Особенностью кроличьего мяса является его минеральный состав, имеющий кислую реакцию, это объясняется высоким количеством солей фосфора и калия. Стоит отметить, ещё такие полезные вещества, как аскорбиновая и никотиновая кислоты, марганец, фтор, железо, магний, кобальт, медь, цинк, пиридоксин, кобаламин, аминокислоты лизина, метионина, триптофана. <br><br> Мясо кролика является диетическим и гипоаллергенным продуктом и рекомендуется ВОЗ в качестве самого полезного и безопасного мяса при переходе от грудного вскармливания к полноценному питанию. <br> <br> Для запуска крупнейшего в мире кролиководческого кластера «Моя Мечта» были привлечены ведущие инжиниринговые европейские компании «P4ENERGY» (Италия) во время реализации проекта были учтены все факторы необходимые для правильной деятельности данного кластера по всем международным и европейским стандартам.`,
          en: `Мясо кролика отличается исключительно высокими питательными свойствами. По химическим, морфо-биохимическим и технологическим качествам, оно превышает мясо других животных. Например, если курица до 75%, говядина и баранина до 65% процентов усваиваются организмом, то крольчатина усваивается до 97%. <br><br> Кроличье мясо является полноценным питательным продуктом. Оно выгодно отличается от других видов мяса и содержит все основные компоненты, необходимые организму человека. <br> <br> Крольчатина содержит огромное количество полноценного белка (более 20%), в его    составе присутствует большое количество аминокислот, витаминов и микроэлементов. <br><br> Особенностью кроличьего мяса является его минеральный состав, имеющий кислую реакцию, это объясняется высоким количеством солей фосфора и калия. Стоит отметить, ещё такие полезные вещества, как аскорбиновая и никотиновая кислоты, марганец, фтор, железо, магний, кобальт, медь, цинк, пиридоксин, кобаламин, аминокислоты лизина, метионина, триптофана. <br><br> Мясо кролика является диетическим и гипоаллергенным продуктом и рекомендуется ВОЗ в качестве самого полезного и безопасного мяса при переходе от грудного вскармливания к полноценному питанию. <br> <br> Для запуска крупнейшего в мире кролиководческого кластера «Моя Мечта» были привлечены ведущие инжиниринговые европейские компании «P4ENERGY» (Италия) во время реализации проекта были учтены все факторы необходимые для правильной деятельности данного кластера по всем международным и европейским стандартам.`,
          uz: `Мясо кролика отличается исключительно высокими питательными свойствами. По химическим, морфо-биохимическим и технологическим качествам, оно превышает мясо других животных. Например, если курица до 75%, говядина и баранина до 65% процентов усваиваются организмом, то крольчатина усваивается до 97%. <br><br> Кроличье мясо является полноценным питательным продуктом. Оно выгодно отличается от других видов мяса и содержит все основные компоненты, необходимые организму человека. <br> <br> Крольчатина содержит огромное количество полноценного белка (более 20%), в его    составе присутствует большое количество аминокислот, витаминов и микроэлементов. <br><br> Особенностью кроличьего мяса является его минеральный состав, имеющий кислую реакцию, это объясняется высоким количеством солей фосфора и калия. Стоит отметить, ещё такие полезные вещества, как аскорбиновая и никотиновая кислоты, марганец, фтор, железо, магний, кобальт, медь, цинк, пиридоксин, кобаламин, аминокислоты лизина, метионина, триптофана. <br><br> Мясо кролика является диетическим и гипоаллергенным продуктом и рекомендуется ВОЗ в качестве самого полезного и безопасного мяса при переходе от грудного вскармливания к полноценному питанию. <br> <br> Для запуска крупнейшего в мире кролиководческого кластера «Моя Мечта» были привлечены ведущие инжиниринговые европейские компании «P4ENERGY» (Италия) во время реализации проекта были учтены все факторы необходимые для правильной деятельности данного кластера по всем международным и европейским стандартам.`,
        },

    },
    laboratory: {
      title: {
        uz: 'Лаборатория',
        ru: 'Лаборатория',
        en: 'Лаборатория'
      },
      content1: {
        uz: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии. Также, компания занимается разведением мясных пород кроликов, каждому рожденному кролику выдается индивидуальный штрих код для идентификации и отслеживанию, которое контролируется ветеринарами ANCI и соответствует всем европейским нормам и стандартам качества.<br>`,
        ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии. Также, компания занимается разведением мясных пород кроликов, каждому рожденному кролику выдается индивидуальный штрих код для идентификации и отслеживанию, которое контролируется ветеринарами ANCI и соответствует всем европейским нормам и стандартам качества.<br>`,
        en: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии. Также, компания занимается разведением мясных пород кроликов, каждому рожденному кролику выдается индивидуальный штрих код для идентификации и отслеживанию, которое контролируется ветеринарами ANCI и соответствует всем европейским нормам и стандартам качества.<br>`
      },
      content2: {
        ru: `Полное автоматизированное, инновационное и высокотехнологичное оборудование для разведения и содержания кроликов произведено и поставлено итальянской компанией “Meneghin Srl”.<br><br>Полностью обеспеченная итальянскими оборудованиями лаборатория, которая основывается на искусственном осеменении помогает реализовать кролиководство в промышленных масштабах. Наш комплекс скрещивает виды новозеландской и калифорнийских пород, являющиеся самыми полезными, ценными и мясными представителями среди других видов кроликов.<br><br>Мы выращиваем чистокровные и полезные породы кроликов, а именно породу «Итальянских белых кроликов Бианка», так как она считается одним из ценных пород мяса, именно из-за ее превосходной фертильности, полезности и продуктивности. В настоящее время выращенная порода происходит из белой породы Новой Зеландии. Данная порода отличается высокой рождаемостью и особым материнским инстинктом. Она также широко используется в производстве коммерческих репродукторов с калифорнийскими «пятнистыми» кроликами, что влияет на высокий процент их фертильности и долголетия.`,
        en: `Полное автоматизированное, инновационное и высокотехнологичное оборудование для разведения и содержания кроликов произведено и поставлено итальянской компанией “Meneghin Srl”.<br><br>Полностью обеспеченная итальянскими оборудованиями лаборатория, которая основывается на искусственном осеменении помогает реализовать кролиководство в промышленных масштабах. Наш комплекс скрещивает виды новозеландской и калифорнийских пород, являющиеся самыми полезными, ценными и мясными представителями среди других видов кроликов.<br><br>Мы выращиваем чистокровные и полезные породы кроликов, а именно породу «Итальянских белых кроликов Бианка», так как она считается одним из ценных пород мяса, именно из-за ее превосходной фертильности, полезности и продуктивности. В настоящее время выращенная порода происходит из белой породы Новой Зеландии. Данная порода отличается высокой рождаемостью и особым материнским инстинктом. Она также широко используется в производстве коммерческих репродукторов с калифорнийскими «пятнистыми» кроликами, что влияет на высокий процент их фертильности и долголетия.`,
        uz: `Полное автоматизированное, инновационное и высокотехнологичное оборудование для разведения и содержания кроликов произведено и поставлено итальянской компанией “Meneghin Srl”.<br><br>Полностью обеспеченная итальянскими оборудованиями лаборатория, которая основывается на искусственном осеменении помогает реализовать кролиководство в промышленных масштабах. Наш комплекс скрещивает виды новозеландской и калифорнийских пород, являющиеся самыми полезными, ценными и мясными представителями среди других видов кроликов.<br><br>Мы выращиваем чистокровные и полезные породы кроликов, а именно породу «Итальянских белых кроликов Бианка», так как она считается одним из ценных пород мяса, именно из-за ее превосходной фертильности, полезности и продуктивности. В настоящее время выращенная порода происходит из белой породы Новой Зеландии. Данная порода отличается высокой рождаемостью и особым материнским инстинктом. Она также широко используется в производстве коммерческих репродукторов с калифорнийскими «пятнистыми» кроликами, что влияет на высокий процент их фертильности и долголетия`,
      },

      image: laboratoryImg
    },
  },

  {
    name: "sternBase",
    title: {
      ru: 'Производство мультизлаковых кормов',
      en: 'Производство мультизлаковых кормов',
      uz: 'Производство мультизлаковых кормов',
    },
    content1: {
      ru: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами. Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,
      en: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами. Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,
      uz: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами. Всё оборудование установлено и смонтировано известной итальянской компанией «F.LLI FRAGOLA S.P.A.», которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,
    },
    content2: {
      ru: '',
      en: '',
      uz: '',
    },
    image: [sternBaseImg1, sternBaseImg2],
    typeOfsternBase: [
      {
        name: "cow",
        image: activityCowImg,
        icon: activityCowIcon,
        route: '/sternBase/cow'
      },
      {
        name: "rabbit",
        image: activityRabbitImg,
        icon: activityRabbitIcon,
        route: '/sternBase/rabbit'
      },
      {
        name: "sheep",
        image: activitySheepImg,
        icon: activitySheepIcon,
        route: '/sternBase/sheep'
      },
      {
        name: "coock",
        image: activityCoockImg,
        icon: activityCoockIcon,
        route: '/sternBase/coock'
      },
    ]
  },

  {
    name: "greenhouse",
    mainImg: greenhouseMain,
    title: {
      ru: 'Собственная теплица',
      en: 'Собственная теплица',
      uz: 'Собственная теплица',
    },
    content2: {
      ru: '',
      en: '',
      uz: '',
    },
    content1: {
      ru: 'Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейшего технологичного оборудования и отвечающим всем европейским стандартам.',
      en: 'Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейшего технологичного оборудования и отвечающим всем европейским стандартам.',
      uz: 'Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейшего технологичного оборудования и отвечающим всем европейским стандартам.',
    },
    image: [greenHouseProdimg1, greenHouseProdimg2],
  },

  {
    name: "mineralFertilizers",
    mainImg: mineralMain,
    title: {
      ru: 'Компостный завод (производство органических удобрений)',
      en: 'Компостный завод (производство органических удобрений)',
      uz: 'Компостный завод (производство органических удобрений)',
    },
    content1: {
      ru: 'Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. ',
      en: 'Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. ',
      uz: 'Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. ',
    },
    content2: {
      ru: 'Их  преимуществом является то, что в кроличьих органических удобрениях содержится большое количество витаминов, минералов, аммиака и многих других полезных веществ, благоприятно влияющих на уровень урожайности. Наша компания производит и реализовывает мультизлаковые корма для всех типов животных.',
      en: 'Их  преимуществом является то, что в кроличьих органических удобрениях содержится большое количество витаминов, минералов, аммиака и многих других полезных веществ, благоприятно влияющих на уровень урожайности. Наша компания производит и реализовывает мультизлаковые корма для всех типов животных.',
      uz: 'Их  преимуществом является то, что в кроличьих органических удобрениях содержится большое количество витаминов, минералов, аммиака и многих других полезных веществ, благоприятно влияющих на уровень урожайности. Наша компания производит и реализовывает мультизлаковые корма для всех типов животных.',
    },
    image: [mineralFertimg1, mineralFertimg2]
  },

  {
    name: 'slaughter',
    mainImg: slaughterMain,
    title: {
      uz: 'Бойня',
      ru: 'Бойня',
      en: 'Бойня'
    },
    content1: {
      uz: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.<br><br>Современный убойный цех разработан и оборудован компанией «SINT TECHNOLOGY» (Италия).<br><br>Требования касающийся правильного убоя и переработки мясных изделий, что в свою очередь гарантируются полным карантином и надлежащей очисткой и упаковкой как вакуумной, так и Skin-упаковки при этом сохраняя ценности мяса, а также минеральные вещества и витамины.<br><br>Первый контакт мясо с человеком происходит при вскрытии упаковки руках конечного потребителя тем самым обеспечивая качество и надежность кроличьего мясо.<br><br>При реализации наша Компания гарантирует, что данная продукция является бесконтактным, а значит, что первый контакт с мясом у конечного потребителя происходить вскрытии упаковки, что свою очередь обеспечивает качество нашей продукции.  `,
      ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.<br><br>Современный убойный цех разработан и оборудован компанией «SINT TECHNOLOGY» (Италия).<br><br>Требования касающийся правильного убоя и переработки мясных изделий, что в свою очередь гарантируются полным карантином и надлежащей очисткой и упаковкой как вакуумной, так и Skin-упаковки при этом сохраняя ценности мяса, а также минеральные вещества и витамины.<br><br>Первый контакт мясо с человеком происходит при вскрытии упаковки руках конечного потребителя тем самым обеспечивая качество и надежность кроличьего мясо.<br><br>При реализации наша Компания гарантирует, что данная продукция является бесконтактным, а значит, что первый контакт с мясом у конечного потребителя происходить вскрытии упаковки, что свою очередь обеспечивает качество нашей продукции.  `,
      en: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.<br><br>Современный убойный цех разработан и оборудован компанией «SINT TECHNOLOGY» (Италия).<br><br>Требования касающийся правильного убоя и переработки мясных изделий, что в свою очередь гарантируются полным карантином и надлежащей очисткой и упаковкой как вакуумной, так и Skin-упаковки при этом сохраняя ценности мяса, а также минеральные вещества и витамины.<br><br>Первый контакт мясо с человеком происходит при вскрытии упаковки руках конечного потребителя тем самым обеспечивая качество и надежность кроличьего мясо.<br><br>При реализации наша Компания гарантирует, что данная продукция является бесконтактным, а значит, что первый контакт с мясом у конечного потребителя происходить вскрытии упаковки, что свою очередь обеспечивает качество нашей продукции.  `
    },
    content2: {
      uz: '',
      ru: '',
      en: '',
    },
    image: []
  },

  {
    name: 'cooperation',
    mainImg: cooperationMain,
    title: {
      uz: 'Кооперация',
      ru: 'Кооперация',
      en: 'Кооперация'
    },
    content2: {
      uz: `Организация предоставляет полезную возможность семьям разводить кроликов для долгосрочного сотрудничества с компанией.<br><br> Средний срок выращивания кроликов – 77 дней. Заработать на инвестиции можно через 2,5 месяца после начала сотрудничества с нами. Для получения более подробной консультации свяжитесь с нашими специалистами.`,
      en: `Организация предоставляет полезную возможность семьям разводить кроликов для долгосрочного сотрудничества с компанией.<br><br> Средний срок выращивания кроликов – 77 дней. Заработать на инвестиции можно через 2,5 месяца после начала сотрудничества с нами. Для получения более подробной консультации свяжитесь с нашими специалистами.`,
      ru: `Организация предоставляет полезную возможность семьям разводить кроликов для долгосрочного сотрудничества с компанией.<br><br> Средний срок выращивания кроликов – 77 дней. Заработать на инвестиции можно через 2,5 месяца после начала сотрудничества с нами. Для получения более подробной консультации свяжитесь с нашими специалистами.`
     },
    content1: {
      uz: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов, возможности приобретения специального оборудования, самих кроликов и кормов для них.`,
      ru: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов, возможности приобретения специального оборудования, самих кроликов и кормов для них.`,
      en: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов, возможности приобретения специального оборудования, самих кроликов и кормов для них.`,
    },
    image: [cooperationImg1]
  },

]


export {
  Activity
}
