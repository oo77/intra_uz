import laboratoryImg from 'assets/activityImg/labaratory.jpg'
import sternBaseImg1 from 'assets/activityImg/rabbitFeedimg1.jpg'
import sternBaseImg2 from 'assets/activityImg/rabbitFeedimg2.jpg'
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
        en: 'Rabbit breeding',
        uz: 'Quyonchilik',
      },
      content:
        {
          uz: `Quyon go&#39;shti juda yuqori ozuqaviy xususiyatlarga ega. Kimyoviy, morfo-biokimyoviy va texnologik sifatlari bo&#39;yicha quyon goʻshti boshqa hayvonlarning go&#39;shtidan ustun turadi. Misol uchun, organizmda tovuq go&#39;shti 75% gacha, mol va qo&#39;zichoq go&#39;shti 65% gacha so&#39;rilsa, quyon go&#39;shti 97% gacha so&#39;riladi.<br><br>Quyon go&#39;shti to&#39;liq to&#39;yimli oziq-ovqat hisoblanadi. Uning go&#39;shti boshqa turdagi go&#39;sht maxsulotlaridan ajralib turadi va inson tanasi uchun zarur bo&#39;lgan barcha asosiy komponentlarni o&#39;z ichiga oladi. <br> <br> Quyon go&#39;shti juda ko&#39;p miqdorda oqsil(20% dan ortiq), aminokislotalar, vitaminlar va mikroelementlarni o&#39;z ichiga oladi.<br><br>Quyon go&#39;shtining o&#39;ziga xos xususiyati bu kislotali reaktsiyaga ega bo&#39;lgan mineral tarkibidir. Bu fosfor va kaliy tuzlarining yuqori miqdori bilan bog&#39;liq. Shuningdek, askorbin va nikotin kislotalari, marganets, ftor, temir, magniy, kobalt, mis, sink, piridoksin, kobalamin, lizin aminokislotalari, metionin, triptofan kabi foydali moddalar ham mavjud. <br><br> Quyon go&#39;shti diyetik va gipoallergen mahsulot bo&#39;lib, JSST tomonidan emizishdan toʻliq ovqatlanishga o&#39;tishda eng sog&#39;lom va xavfsiz go&#39;sht sifatida tavsiya etiladi. <br> <br>Dunyodagi eng yirik «Моя Мечта» quyonchilik klasterini ishga tushirish uchun Yevropaning yetakchi muhandislik <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a>  kompaniyalari jalb qilindi (Italiya). Loyihani amalga oshirish jarayonida ushbu klasterning barcha xalqaro va Yevropa standartlariga muvofiq to‘g‘ri ishlashi uchun barcha omillar hisobga olindi.`,


          en: `Rabbit meat contains exceptionally high nutritional properties. In terms of chemical, morpho-biochemical and technological qualities, it exceeds the meat of other animals. As an instance, if chicken, beef and lamb are absorbed by the body up to 75 and 65 percent respectively, rabbit meat is absorbed up to 97 percent. <br><br> Rabbit meat is considered as a complete nutritious food. It favorably differs from other types of meat and consists of all the main components vital for the human body. <br> <br> Rabbit meat contains a huge proportion of complete protein (more than 20%), it contains a large amount of amino acids, vitamins and trace elements. <br><br> A peculiarity of rabbit meat is its mineral composition, which has an acidic reaction. This is due to the high amount of phosphorus and potassium salts. It must be mentioned that there are wholesome substances, such as ascorbic and nicotinic acids, manganese, fluorine, iron, magnesium, cobalt, copper, zinc, pyridoxine, cobalamin, amino acids of lysine, methionine, tryptophan. <br><br> Rabbit meat is a dietary and hypoallergenic product and is recommended by WHO as the healthiest and safest meat in the transition from breastfeeding to full nutrition.  <br> <br> In order to launch the world’s biggest rabbit-breeding cluster «My Dream», leading engineering European companies as <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a>  (Italy) were involved. During the project realization, all factors of the proper operation of this cluster were taken into account in accordance with all international and European standards.`,

          ru: `Мясо кролика отличается исключительно высокими питательными свойствами. По химическим, морфо-биохимическим и технологическим качествам, оно превышает мясо других животных. Например, если курица до 75%, говядина и баранина до 65% процентов усваиваются организмом, то крольчатина усваивается до 97%. <br><br> Кроличье мясо является полноценным питательным продуктом. Оно выгодно отличается от других видов мяса и содержит все основные компоненты, необходимые организму человека. <br> <br> Крольчатина содержит огромное количество полноценного белка (более 20%), в его    составе присутствует большое количество аминокислот, витаминов и микроэлементов. <br><br> Особенностью кроличьего мяса является его минеральный состав, имеющий кислую реакцию, это объясняется высоким количеством солей фосфора и калия. Стоит отметить, ещё такие полезные вещества, как аскорбиновая и никотиновая кислоты, марганец, фтор, железо, магний, кобальт, медь, цинк, пиридоксин, кобаламин, аминокислоты лизина, метионина, триптофана. <br><br> Мясо кролика является диетическим и гипоаллергенным продуктом и рекомендуется ВОЗ в качестве самого полезного и безопасного мяса при переходе от грудного вскармливания к полноценному питанию. <br> <br> Для запуска крупнейшего в мире кролиководческого кластера «Моя Мечта» были привлечены ведущие инжиниринговые европейские компании <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a> (Италия) во время реализации проекта были учтены все факторы необходимые для правильной деятельности данного кластера по всем международным и европейским стандартам.`,
        },

    },
    laboratory: {
      title: {
        uz: 'Laboratoriya',
        ru: 'Лаборатория',
        en: 'Laboratory'
      },
      content1: {
        uz: `Bizning genetik markaz Italiyadagi ANCI genetik markazi bilan onlayn ish faoliyatini olib boradi. Shuningdek, kompaniya quyonlarning go‘shtli zotlarini ham yetishtirish bilan shugʻullanadi. Har bir tug&#39;ilgan quyonga identifikatsiya qilish va kuzatish uchun individual shtrix-kod beriladi, bu ANCI veterinariya shifokorlari tomonidan nazorat qilinadi va barcha Yevropa me&#39;yorlari va sifat standartlariga javob beradi.<br>`,
        ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии. Также, компания занимается разведением мясных пород кроликов, каждому рожденному кролику выдается индивидуальный штрих код для идентификации и отслеживанию, которое контролируется ветеринарами ANCI и соответствует всем европейским нормам и стандартам качества.<br>`,
        en: `The genetical center functions online along with the ANCI genetical center in Italy. Besides, the company is engaged in breeding meat species of rabbits. Each of newly born rabbit is given an individual barcode for identification and tracking, which is controlled by ANCI veterinarians and meets all European requirements and quality standards.<br>`
      },
      content2: {
        ru: `Полное автоматизированное, инновационное и высокотехнологичное оборудование для разведения и содержания кроликов произведено и поставлено итальянской компанией <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a>.<br><br>Полностью обеспеченная итальянскими оборудованиями лаборатория, которая основывается на искусственном осеменении помогает реализовать кролиководство в промышленных масштабах. Наш комплекс скрещивает виды новозеландской и калифорнийских пород, являющиеся самыми полезными, ценными и мясными представителями среди других видов кроликов.<br><br>Мы выращиваем чистокровные и полезные породы кроликов, а именно породу «Итальянских белых кроликов Бианка», так как она считается одним из ценных пород мяса, именно из-за ее превосходной фертильности, полезности и продуктивности. В настоящее время выращенная порода происходит из белой породы Новой Зеландии. Данная порода отличается высокой рождаемостью и особым материнским инстинктом. Она также широко используется в производстве коммерческих репродукторов с калифорнийскими «пятнистыми» кроликами, что влияет на высокий процент их фертильности и долголетия.`,

        en: `Entirely automatic, innovative and high-tech equipment for breeding and keeping rabbits is produced and supplied by the Italian company <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a>. <br><br>A laboratory, completely supplied by Italian machinery, which is also based on artificial insemination, helps to conduct rabbit breeding on an industrial scale. The complex interbreeds the species of New Zealand and California, which are indeed the most fruitful, valuable meat representatives among other types of rabbits. <br><br>We raise purebred and wholesome breeds of rabbits, namely the breed of "Italian white rabbits Bianca", as it is considered to be one of the precious breeds of meat. This is due to its excellent fertility, usefulness and productivity. Currently the raised breed comes from the white breed of New Zealand. This very breed excels at birth rate and has a special maternal instinct. Furthermore, it is widely applied in the production of commercial reproducers with California spotted rabbits, which affects their high fertility rate and longevity.`,

        uz: `Klasterimizda Italiyaning mashxur <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a> kompaniyasi tomonidan ishlab chiqarilgan va yetkazib berilgan quyonlarni ko&#39;paytirish va boqish uchun to&#39;liq avtomatlashtirilgan, innovatsion va yuqori texnologiyali uskunalardan foydalaniladi.<br><br>Italiya uskunalari bilan to‘liq jihozlangan, sun’iy urug‘lantirishga asoslangan laboratoriya quyonchilikni sanoat miqyosida yo‘lga qo‘yishga xizmat qilmoqda. Bizning kompleksimiz Yangi Zelandiya va Kaliforniya quyon zotlarini chatishtirish bilan shug&#39;ullanadi. Bunday quyon zotlari boshqa turdagi quyonlar orasida eng foydali, go&#39;shtli va qimmatbaho hisoblanadi.<br><br>Biz quyonlarning sof va foydali zotlarini, ya’ni «Italiya Bianka oq quyonlari» zotini boqib, ko‘paytiramiz. Ushbu zot ajoyib unumdorligi va foydaliligi tufayli go&#39;shtning qimmatbaho zotlaridan biri hisoblanadi. Hozirgi kunda yetishtirilayotgan quyon zotlari Yangi Zellandiiya oq quyon zotlari avlodlari sanaladi. Bu zot yuqori tug&#39;ilish darajasi va onalik instinktiga ega. Bundan tashqari, ushbu zot Kaliforniya dog&#39;li quyonlari bilan tijorat ko&#39;payishida keng qo&#39;llaniladi, bu esa ularning tug&#39;ilish va uzoq umr ko&#39;rishning yuqori foiziga hissa qo&#39;shadi.`,
      },

      image: laboratoryImg
    },
  },
  {
    name: "sternBase",
    title: {
      ru: 'Производство мультизлаковых кормов',
      en: 'Production of multi-grain feed',
      uz: 'Yuqori sifatli yem ishlab chiqarish',
    },
    content1: {
      ru: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами. Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,
      en: `The rabbits that we raise consume combined dry food, prepared in accordance with a special recipe developed by leading European experts. All equipment is installed and assembled by well-known Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is considered to be one of the leading companies in the production of feed lines in the world for all types of animals.`,
      uz: `Bizning quyonlarimiz Yevropaning yetakchi mutaxassislari tomonidan ishlab chiqilgan maxsus retsept bo‘yicha tayyorlangan aralash, quruq yemishni iste’mol qiladi. Barcha jihozlar Italiyaning mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> kompaniyasi tomonidan oʻrnatilgan. Ushbu kompaniya barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish boʻyicha dunyodagi yetakchi kompaniyalardan biri hisoblanadi.`,
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
      en: 'Greenhouse',
      uz: 'Issiqxona',
    },
    content2: {
      ru: '',
      en: '',
      uz: '',
    },
    content1: {
      ru: 'Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейшего технологичного оборудования и отвечающим всем европейским стандартам.',
      en: 'Totally automatic high-yield glass greenhouse with an area of   10 hectares utilizes the latest technological machinery and is in accord with all European standards.',
      uz: `Eng yangi texnologik uskunalardan foydalangan holda va barcha Yevropa standartlariga javob beradigan 10 gektar maydonga ega to&#39;liq avtomatlashtirilgan yuqori hosildorlikdagi shisha issiqxona.`,
    },
    image: [greenHouseProdimg1, greenHouseProdimg2],
  },

  {
    name: "mineralFertilizers",
    mainImg: mineralMain,
    title: {
      ru: 'Компостный завод (производство органических удобрений)',
      en: 'Compost factory (production of organic fertilizers)',
      uz: `Kompost zavodi (organik o'g'itlar ishlab chiqarish)`,
    },
    content1: {
      ru: 'Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. ',

      en: 'The only factory throughout Uzbekistan for the processing of rabbit waste with the aim of manufacturing organic fertilizers. By the help of it, we help gardeners, farmers and other interested parties to analyze the land. This analysis allows to indicate which mineral particles lack in the soil and introduce the best options for achieving high yields.',

      uz: `O&#39;zbekistonda quyon chiqindilarini qayta ishlash bo&#39;yicha organik o&#39;g&#39;itlar ishlab chiqaradigan yagona zavod. U bilan bog‘bonlar, fermerlar va boshqa manfaatdor shaxslarga yerni tahlil qilishda yordam beramiz. Ushbu tahlil tufayli tuproqda qaysi minerallar yetishmayotganligini hisoblash va yuqori hosilga erishish uchun eng optimal variantlarni taklif qilish mumkin. `,
    },
    content2: {
      ru: 'Их  преимуществом является то, что в кроличьих органических удобрениях содержится большое количество витаминов, минералов, аммиака и многих других полезных веществ, благоприятно влияющих на уровень урожайности. Наша компания производит и реализовывает мультизлаковые корма для всех типов животных.',

      uz: `Ularning afzalligi shundaki, organik quyon o&#39;g&#39;itlari ko&#39;p miqdorda hosildorlikka ijobiy ta&#39;sir qiladigan vitaminlar, minerallar, ammiak va boshqa ko&#39;plab foydali moddalarni o&#39;z ichiga oladi. Kompaniyamiz barcha turdagi hayvonlar uchun ko&#39;p donli ozuqa ishlab chiqaradi va sotadi.`,

      en: `The advantageous feature is that organic rabbit fertilizers contain a big proportion of vitamins, minerals, ammonia and many other fruitful substances that favorably affect the yield level. Our company both produces and sells multi-grain feed for all kinds of animals.`,
    },
    image: [mineralFertimg1, mineralFertimg2]
  },

  {
    name: 'slaughter',
    mainImg: slaughterMain,
    title: {
      uz: 'Qushxona',
      ru: 'Бойня',
      en: 'Slaughterhouse '
    },
    content1: {
      uz: `Kompaniya o&#39;zining hududida maxsus, yuqori samaradorlikka ega va yangi zamonaviy texnologiyalar bilan jihozlangan kushxonasiga ega bo’lib, natijada quyonlarini bu majmuaga yetkazishda quyon organizmida paydo boladigan stress holatni kamaytiradi va quyon go&#39;shtini sifatini saqalab qolishga erishiladi.<br><br>Zamonaviy kushxona <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a>  (Italiya) kompaniyasi tomonidan loyihalashtirilgan va jihozlangan. <br><br>Go&#39;sht mahsulotlarini to&#39;g&#39;ri so&#39;yish va qayta ishlash talablariga hamda vakuum va &quot;Skin&quot; qadoqlash talablariga to&#39;liq javob beradi. Shu bilan birga, go&#39;shtning foydali xususiyatlari, shuningdek, minerallar va vitaminlar saqlanib qoladi.Shu bilan birga, go&#39;shtning foydali xususiyatlari, shuningdek, minerallar va vitaminlar saqlanib qoladi.<br><br>Mahsulotlarni sotishda kompaniyamiz ularning kontaktsiz ekanligiga kafolat beradi, ya&#39;ni oxirgi iste&#39;molchining go&#39;sht bilan birinchi aloqasi qadoq ochilganda sodir bo&#39;ladi. Bu, o‘z navbatida, mahsulotlarimiz sifatini ta’minlaydi. `,

      ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.<br><br>Современный убойный цех разработан и оборудован компанией <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a> (Италия).<br><br>Требования касающийся правильного убоя и переработки мясных изделий, что в свою очередь гарантируются полным карантином и надлежащей очисткой и упаковкой как вакуумной, так и Skin-упаковки при этом сохраняя ценности мяса, а также минеральные вещества и витамины. Первый контакт мясо с человеком происходит при вскрытии упаковки руках конечного потребителя тем самым обеспечивая качество и надежность кроличьего мясо.<br><br>При реализации наша Компания гарантирует, что данная продукция является бесконтактным, а значит, что первый контакт с мясом у конечного потребителя происходить вскрытии упаковки, что свою очередь обеспечивает качество нашей продукции.  `,

      en: `Our own, entirely automatic slaughterhouse is located throughout the production site, so that the rabbits do not experience the stress of transportation to the slaughter site<br><br>The slaughterhouse of high modernity is designed and equipped by <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a> company (Italy).<br><br> The requirements concerning a proper slaughter and meat processing, in turn, are guaranteed by a complete quarantine and vacuum packaging, as well as Skin-packaging, whilst preserving the quality of meat, its minerals and vitamins.<br><br>During the realization and goods provision, our Company ensures that these specific products are non-contact, which means that the first contact with meat for the end consumer occurs when the package is opened, which in turn ensures the quality of our products.`
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
      uz: 'Kooperatsiya',
      ru: 'Кооперация',
      en: 'Cooperation'
    },
    content2: {
      uz: `Tashkilotimiz oilalarga biz bilan uzoq muddatli hamkorlik qilish va quyon boqish uchun foydali imkoniyat yaratadi.<br><br>Quyonlarni yetishtirishning o&#39;rtacha muddati bu 77 kun. Biz bilan hamkorlikni boshlaganingizdan keyin 2,5 oy ichida investitsiyalardan daromad olishingiz mumkin. Batafsil ma’lumot uchun mutaxasislarimizga murojaat qiling.`,
      en: `The organization introduces a wholesome opportunity for families to breed rabbits for long-term cooperation with company.<br><br> An average period of raising rabbits numbers 77 days. Earning from investment is possible in 2,5 months after beginning a cooperation with us. For further information contact our specialists.`,
      ru: `Организация предоставляет полезную возможность семьям разводить кроликов для долгосрочного сотрудничества с компанией.<br><br> Средний срок выращивания кроликов – 77 дней. Заработать на инвестиции можно через 2,5 месяца после начала сотрудничества с нами. Для получения более подробной консультации свяжитесь с нашими специалистами.`
     },
    content1: {
      uz: `«Моя мечта» kompaniyasi har kimga qo&#39;shimcha daromadga ega boʻlish imkoniyatini qo&#39;lga kiritishda yordam beradi. Biz sizga quyonlarni yetishtirish texnologiyasi, maxsus jihozlarni sotib olish imkoniyati, quyonlarning o&#39;zlari va ular uchun ozuqa boʻyicha maslahat beramiz.`,
      ru: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов, возможности приобретения специального оборудования, самих кроликов и кормов для них.`,
      en: `«My Dream» company enables everyone with the chance to earn extra income. We are eager to consult you in terms of rabbit breeding technologies, opportunities to purchase special equipment, rabbits themselves and food for them.`,
    },
    image: [cooperationImg1]
  },

]


export {
  Activity
}
