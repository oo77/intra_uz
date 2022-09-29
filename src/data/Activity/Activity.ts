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
        uzK: 'Қуёнчилик'
      },
      content:
        {
          uz: `Quyon goʻshti oʻzining yuqori ozuqaviy xossalari bilan ajralib turadi. Kimyoviy, morfo-biokimyoviy va texnologik sifatlari boʻyicha u boshqa hayvonlarning goʻshtidan ustun turadi. Misol uchun, agar organizmda tovuq goʻshti 75% gacha, mol va qoʻzichoq goʻshti 65% gacha hazm boʻlsa, quyon goʻshti 97% gacha hazm boʻladi.<br><br>Quyon goʻshti toʻlaqonli ozuqa mahsuloti hisoblanadi. Bu goʻsht boshqa turlaridan farq qiladi va inson organizmi uchun zarur boʻlgan barcha asosiy tarkibiy qismlarni oʻz ichiga oladi. <br> <br>Quyon goʻshti juda koʻp miqdordagi toʻlaqonli oqsilni (20% dan ortiq) oʻz ichiga oladi, uning tarkibida koʻp miqdorda aminokislotalar, vitaminlar va mikroelementlar mavjud.<br><br>Quyon goʻshtining oʻziga xos xususiyati uning mineral tarkibi boʻlib, u kislotali reaksiyaga ega, bu fosfor va kaliy tuzlarining yuqori miqdori bilan izohlanadi. Shuningdek yana askorbin va nikotin kislotalari, marganes, ftor, temir, magniy, kobalt, mis, rux, piridoksin, kobalamin (vitamin B12), lizin, metionin, triptofan aminokislotalari kabi foydali moddalarni ham taʼkidlab oʻtish joiz. <br><br> Quyon goʻshti parhezli va gipoalergen mahsulot hisoblanadi va JSST tomonidan emizishdan toʻliq ovqatlanishga oʻtishda eng sogʻlom va xavfsiz goʻsht sifatida tavsiya etiladi.<br> <br>Dunyodagi eng yirik «Моя Мечта» quyonchilik klasterini ishga tushirish uchun Yevropaning yetakchi <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a> (Italiya) injiniring kompaniyalari jalb etildi, loyihani amalga oshirish vaqtida ushbu klasterning barcha xalqaro va Yevropa standartlariga muvofiq toʻgʻri faoliyat koʻrsatishi uchun zarur boʻlgan barcha omillar hisobga olindi.`,


          en: `Rabbit meat has exceptionally high nutritional properties. In terms of chemical, morpho-biochemical and technological qualities, it exceeds the meat of other animals. For example, if chicken up to 75%, beef and lamb up to 65% percent are absorbed by the body, then rabbit meat is absorbed up to 97%. <br><br> Rabbit meat is a full-fledged nutritious product. It compares favorably with other types of meat and contains all the main components necessary for the human body. <br> <br>Rabbit meat contains a huge amount of high-grade protein (more than 20%), it contains a large number of amino acids, vitamins and trace elements.<br><br> The peculiarity of rabbit meat is its mineral composition, which has an acidic reaction, this is due to the high amount of phosphorus salts and potassium. It is worth noting such useful substances as ascorbic and nicotinic acids, manganese, fluorine, iron, magnesium, cobalt, copper, zinc, pyridoxine, cobalamine, amino acids lysine, methionine, tryptophane.<br><br> Rabbit meat is a dietary and hypoallergenic product and is recommended by WHO as the healthiest and safest meat in the transition from breastfeeding to full nutrition. <br> <br> Leading European engineering companies <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a> (Italy) were involved in the launch of the world's largest rabbit breeding cluster "My Dream" during the project implementation, all the factors necessary for the proper operation of this cluster in accordance with all international and European standards were considered.`,

          ru: `Мясо кролика отличается исключительно высокими питательными свойствами. По химическим, морфо-биохимическим и технологическим качествам, оно превышает мясо других животных. Например, если курица до 75%, говядина и баранина до 65% процентов усваиваются организмом, то крольчатина усваивается до 97%. <br><br> Кроличье мясо является полноценным питательным продуктом. Оно выгодно отличается от других видов мяса и содержит все основные компоненты, необходимые организму человека. <br> <br> Крольчатина содержит огромное количество полноценного белка (более 20%), в его    составе присутствует большое количество аминокислот, витаминов и микроэлементов. <br><br> Особенностью кроличьего мяса является его минеральный состав, имеющий кислую реакцию, это объясняется высоким количеством солей фосфора и калия. Стоит отметить, ещё такие полезные вещества, как аскорбиновая и никотиновая кислоты, марганец, фтор, железо, магний, кобальт, медь, цинк, пиридоксин, кобаламин, аминокислоты лизина, метионина, триптофана. <br><br> Мясо кролика является диетическим и гипоаллергенным продуктом и рекомендуется ВОЗ в качестве самого полезного и безопасного мяса при переходе от грудного вскармливания к полноценному питанию. <br> <br> Для запуска крупнейшего в мире кролиководческого кластера «Моя Мечта» были привлечены ведущие инжиниринговые европейские компании <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a> (Италия) во время реализации проекта были учтены все факторы необходимые для правильной деятельности данного кластера по всем международным и европейским стандартам.`,

          uzK: `Қуён гўшти ўзининг юқори озуқавий хоссалари билан ажралиб туради. Кимёвий, морфо-биокимёвий ва технологик сифатлари бўйича у бошқа ҳайвонларнинг гўштидан устун туради. Мисол учун, агар организмда товуқ гўшти 75% гача, мол ва қўзичоқ гўшти 65% гача ҳазм бўлса, қуён гўшти 97% гача ҳазм бўлади.<br><br>Қуён гўшти тўлақонли озуқа маҳсулоти ҳисобланади. Бу гўшт бошқа турларидан фарқ қилади ва инсон организми учун зарур бўлган барча асосий таркибий қисмларни ўз ичига олади. <br> <br>Қуён гўшти жуда кўп миқдордаги тўлақонли оқсилни (20% дан ортиқ) ўз ичига олади, унинг таркибида кўп миқдорда аминокислоталар, витаминлар ва микроэлементлар мавжуд.<br><br>Қуён гўштининг ўзига хос хусусияти унинг минерал таркиби бўлиб, у кислотали реакцияга эга, бу фосфор ва калий тузларининг юқори миқдори билан изоҳланади. Шунингдек яна аскорбин ва никотин кислоталари, марганец, фтор, темир, магний, кобальт, мис, рух, пиридоксин, кобаламин (витамин B12), лизин, метионин, триптофан аминокислоталари каби фойдали моддаларни ҳам таъкидлаб ўтиш жоиз. <br><br>Қуён гўшти парҳезли ва гипоалерген маҳсулот ҳисобланади ва ЖССТ томонидан эмизишдан тўлиқ овқатланишга ўтишда энг соғлом ва хавфсиз гўшт сифатида тавсия этилади.<br> <br>Дунёдаги энг йирик “Моя Мечта” қуёнчилик кластерини ишга тушириш учун Европанинг етакчи <a href="http://www.p4energy.it/" target="_blank">«P4ENERGY»</a> (Италия) инжиниринг компаниялари жалб этилди, лойиҳани амалга ошириш вақтида ушбу кластернинг барча халқаро ва Европа стандартларига мувофиқ тўғри фаолият кўрсатиши учун зарур бўлган барча омиллар ҳисобга олинди.`,
        },

    },
    laboratory: {
      title: {
        uz: 'Laboratoriya',
        ru: 'Лаборатория',
        en: 'Laboratory',
        uzK: 'Лаборатория'
      },
      content1: {
        uz: `Genetika markazi Italiyaning ANCI genetik markazi bilan onlayn rejimida ishlaydi. Shuningdek, kompaniya quyonlarning goʻshtli zotlarini koʻpaytirish bilan shugʻullanadi. Har bir tugʻilgan quyonga identifikatsiya va kuzatish uchun shaxsiy shtrix-kod beriladi, bu ANCI veterinarlari tomonidan nazorat qilinadi va barcha Yevropa meʼyorlari va sifat standartlariga javob beradi.<br>`,

        ru: `Генетический центр работает в режиме онлайн с генетическим центром ANCI в Италии. Также, компания занимается разведением мясных пород кроликов, каждому рожденному кролику выдается индивидуальный штрих код для идентификации и отслеживанию, которое контролируется ветеринарами ANCI и соответствует всем европейским нормам и стандартам качества.<br>`,

        en: `The Genetic Center works online with the ANCI Genetic Center in Italy. Also, the company is engaged in breeding meat species of rabbits, each rabbit born is given an individual barcode for identification and tracking, which is controlled by ANCI veterinarians and complies with all European norms and quality standards. <br>`,

        uzK: `Генетика маркази Италиянинг ANCI генетик маркази билан онлайн режимида ишлайди. Шунингдек, компания қуёнларнинг гўштли зотларини кўпайтириш билан шуғулланади. Ҳар бир туғилган қуёнга идентификация ва кузатиш учун шахсий штрих-код берилади, бу ANCI ветеринарлари томонидан назорат қилинади ва барча Европа меъёрлари ва сифат стандартларига жавоб беради.<br>`,

      },
      content2: {
        ru: `Полное автоматизированное, инновационное и высокотехнологичное оборудование для разведения и содержания кроликов произведено и поставлено итальянской компанией <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a>.<br><br>Полностью обеспеченная итальянскими оборудованиями лаборатория, которая основывается на искусственном осеменении помогает реализовать кролиководство в промышленных масштабах. Наш комплекс скрещивает виды новозеландской и калифорнийских пород, являющиеся самыми полезными, ценными и мясными представителями среди других видов кроликов.<br><br>Мы выращиваем чистокровные и полезные породы кроликов, а именно породу «Итальянских белых кроликов Бианка», так как она считается одним из ценных пород мяса, именно из-за ее превосходной фертильности, полезности и продуктивности. В настоящее время выращенная порода происходит из белой породы Новой Зеландии. Данная порода отличается высокой рождаемостью и особым материнским инстинктом. Она также широко используется в производстве коммерческих репродукторов с калифорнийскими «пятнистыми» кроликами, что влияет на высокий процент их фертильности и долголетия.`,

        en: `Complete automated, innovative and high-tech equipment for breeding and keeping rabbits is manufactured and supplied by the Italian company <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a> . <br><br>Fully equipped with Italian equipment, the laboratory, which is based on artificial insemination, helps to realize rabbit breeding on an industrial scale. Our complex interbreeds species of New Zealand and California breeds, which are the most useful, valuable and meat representatives among other rabbit species <br><br>We grow purebred and healthy breeds of rabbits, namely the breed of "Italian white rabbits Bianca", as it is considered one of the valuable breeds of meat, precisely because of its excellent fertility, healthfulness and productivity. Currently, the breed grown comes from the white breed of New Zealand. This breed has a high birth rate and a special maternal instinct. It is also widely used in the production of commercial reproducers with California "spotted" rabbits, which affects a high percentage of their fertility and longevity.`,

        uz: `Quyonlarni koʻpaytirish va boqish uchun toʻliq avtomatlashtirilgan, innovatsion va yuqori texnologiyali uskunalar Italiyaning <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a> kompaniyasi tomonidan ishlab chiqarilgan va yetkazib berilgan.<br><br>Italyan uskunalari bilan toʻliq jihozlangan sunʼiy urugʻlantirishga asoslangan laboratoriya quyonchilikni sanoat miqyosida amalga oshirishga yordam beradi. Bizning kompleksimiz quyonlarning boshqa turlari orasidagi eng foydali, qimmatli va goʻshtli vakillari boʻlgan Yangi Zelandiya va Kaliforniya zotlarining turlarini chatishtiradi.<br><br>Biz quyonlarning asl va foydali zotlarini, xususan “ Italiya Bianka oq quyonlari» zotlarini yetishtiramiz. Chunki bu quyonlar aynan oʻzining yuqori unumdorligi, foydaliligi va mahsuldorligi tufayli qimmatbaho goʻsht navlaridan biri hisoblanadi. Hozirgi vaqtda yetishtirilgan zot Yangi Zelandiyaning oq zotidan kelib chiqqan. Bu zot yuqori tugʻilish darajasi va maxsus onalik instinkti bilan ajralib turadi. U shuningdek kaliforniyalik “olachipor” quyonlariga ega tijorat reproduktorlarini ishlab chiqarishda keng qoʻllaniladi, bu esa ularning unumdorligi yuqori foizga chiqishiga va uzoq yashashiga taʼsir qiladi.`,

        uzK: `Қуёнларни кўпайтириш ва боқиш учун тўлиқ автоматлаштирилган, инновацион ва юқори технологияли ускуналар Италиянинг <a href="https://www.meneghin.it/ita/" target="_blank">«Meneghin Srl»</a> компанияси томонидан ишлаб чиқарилган ва етказиб берилган.<br><br>Итальян ускуналари билан тўлиқ жиҳозланган сунъий уруғлантиришга асосланган лаборатория қуёнчиликни саноат миқёсида амалга оширишга ёрдам беради. Бизнинг комплексимиз қуёнларнинг бошқа турлари орасидаги энг фойдали, қимматли ва гўштли вакиллари бўлган Янги Зеландия ва Калифорния зотларининг турларини чатиштиради.<br><br>Биз қуёнларнинг асл ва фойдали зотларини, хусусан "Италия Бианка оқ қуёнлари" зотларини етиштирамиз. Чунки бу қуёнлар айнан ўзининг юқори унумдорлиги, фойдалилиги ва маҳсулдорлиги туфайли қимматбаҳо гўшт навларидан бири ҳисобланади. Ҳозирги вақтда етиштирилган зот Янги Зеландиянинг оқ зотидан келиб чиққан. Бу зот юқори туғилиш даражаси ва махсус оналик инстинкти билан ажралиб туради. У шунингдек калифорниялик «олачипор» қуёнларига эга тижорат репродукторларини ишлаб чиқаришда кенг қўлланилади, бу эса уларнинг унумдорлиги юқори фоизга чиқишига ва узоқ яшашига таъсир қилади.`,
      },

      image: laboratoryImg
    },
  },

  {
    name: "sternBase",
    title: {
      ru: 'Производство мультизлаковых кормов',
      en: 'Production of multi-grain feed',
      uz: 'Koʻp boshoqli yem mahsulotlari ishlab chiqarish',
      uzK: 'Кўп бошоқли ем маҳсулотлари ишлаб чиқариш',
    },
    content1: {
      ru: `Наши кролики питаются комбинированными сухими кормами, приготовленными по специальной рецептуре, разработанной ведущими европейскими специалистами. Всё оборудование установлено и смонтировано известной итальянской компанией <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, которая является одной из ведущих компаний в области производства комбикормовых линий в мире для всех типов животных.`,

      en: `Our rabbits eat combined dry food prepared according to a special recipe developed by leading European specialists. All equipment is installed and assembled by the famous Italian company <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a>, which is one of the leading companies in the field of production of feed lines in the world for all types of animals.`,

      uz: `Bizning quyonlarimiz Yevropaning yetakchi mutaxassislari tomonidan ishlab chiqilgan maxsus retseptura boʻyicha tayyorlangan aralash quruq yem bilan oziqlanadi. Hamma uskunalar barcha turdagi hayvonlar uchun ozuqa liniyalari ishlab chiqarish sohasida dunyodagi yetakchi kompaniyalardan biri hisoblanadigan mashhur <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> italyan kompaniyasi tomonidan ishlab chiqarilgan va oʻrnatilgan.`,

      uzK: `Бизнинг қуёнларимиз Европанинг етакчи мутахассислари томонидан ишлаб чиқилган махсус рецептура бўйича тайёрланган аралаш қуруқ ем билан озиқланади. Ҳамма ускуналар барча турдаги ҳайвонлар учун озуқа линиялари ишлаб чиқариш соҳасида дунёдаги етакчи компаниялардан бири ҳисобланадиган машҳур <a href="https://www.fragolaspa.com"  target="_blank">«F.LLI FRAGOLA S.P.A.»</a> итальян компанияси томонидан ишлаб чиқарилган ва  ўрнатилган.`,
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
      uzK: 'Иссиқхона',
    },
    content2: {
      ru: '',
      en: '',
      uz: '',
    },
    content1: {
      ru: 'Полностью автоматизированная стеклянная теплица высокой урожайности площадью 10га с использованием новейшего технологичного оборудования и отвечающим всем европейским стандартам.',

      en: 'Fully automated glass greenhouse of high yield with an area of 10 hectares using the latest technological equipment and meeting all European standards.',

      uz: `10 gektar maydonga ega yuqori mahsuldor boʻlgan toʻliq avtomatlashtirilgan shishali issiqxonada eng yangi va barcha Yevropa standartlariga javob beradigan texnologik uskunalardan foydalanilgan.`,

      uzK: `10 гектар майдонга эга юқори маҳсулдор бўлган тўлиқ автоматлаштирилган шишали иссиқхонада энг янги ва барча Европа стандартларига жавоб берадиган технологик ускуналардан фойдаланилган.`,
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
      uzK: `Kомпост заводи (органик ўғитлар ишлаб чиқариш)`,
    },
    content1: {
      ru: 'Единственный в Узбекистане завод по переработке кроличьих отходов для изготовления органических удобрений. С его помощью, мы помогаем садоводам, фермерам и другим заинтересованным лицам проводить анализ земли, благодаря      которому можно вычислить, каких минеральных веществ не хватает почве и предложить оптимальные варианты для достижения высокой урожайности. ',

      en: 'The only plant in Uzbekistan for the processing of rabbit waste for the manufacture of organic fertilizers. With its help, we help gardeners, farmers and other interested parties to analyze the land, thanks to which it is possible to calculate what minerals the soil is lacking and suggest the best options for achieving high crop yields.',

      uz: `Organik oʻgʻitlar ishlab chiqarish uchun quyon chiqindilarini qayta ishlash boʻyicha Oʻzbekistonda yagona zavod. Uning yordami bilan biz bogʻbonlarga, fermerlarga va boshqa manfaatdor shaxslarga yerning tahlilini oʻtkazishda yordam beramiz. Buning natijasida tuproqda qanday minerallar yetishmayotganini hisoblash va yuqori hosildorlikka erishish uchun eng maqbul variantlarni taklif qilish mumkin.`,

      uzK: `Органик ўғитлар ишлаб чиқариш учун қуён чиқиндиларини қайта ишлаш бўйича Ўзбекистонда ягона завод. Унинг ёрдами билан биз боғбонларга, фермерларга ва бошқа манфаатдор шахсларга ернинг таҳлилини ўтказишда ёрдам берамиз. Бунинг натижасида тупроқда қандай минераллар етишмаётганини ҳисоблаш ва юқори ҳосилдорликка эришиш учун энг мақбул вариантларни таклиф қилиш мумкин.`,
    },

    content2: {
      ru: 'Их  преимуществом является то, что в кроличьих органических удобрениях содержится большое количество витаминов, минералов, аммиака и многих других полезных веществ, благоприятно влияющих на уровень урожайности. Наша компания производит и реализовывает мультизлаковые корма для всех типов животных.',

      uz: `Ularning afzalligi shundaki, quyonlarning organik oʻgʻitlari tarkibida koʻp miqdorda hosildorlik darajasiga ijobiy taʼsir qiluvchi vitaminlar, minerallar, ammiak va boshqa koʻplab foydali moddalar mavjud. Bizning kompaniyamiz barcha turdagi hayvonlar uchun koʻpboshoqli yem mahsulotlari ishlab chiqaradi va sotadi.`,

      en: `Their advantage is that organic rabbit fertilizers contain a large amount of vitamins, minerals, ammonia and many other useful substances that favorably affect the yield level. Our company produces and sells multi-grain feed for all types of animals.`,

      uzK: `Уларнинг афзаллиги шундаки, қуёнларнинг органик ўғитлари таркибида кўп миқдорда ҳосилдорлик даражасига ижобий таъсир қилувчи витаминлар, минераллар, аммиак ва бошқа кўплаб фойдали моддалар мавжуд. Бизнинг компаниямиз барча турдаги ҳайвонлар учун кўпбошоқли ем маҳсулотлари ишлаб чиқаради ва сотади.`,

    },
    image: [mineralFertimg1, mineralFertimg2]
  },

  {
    name: 'slaughter',
    mainImg: slaughterMain,
    title: {
      uz: 'Qassobxona',
      ru: 'Бойня',
      en: 'Slaughter',
      uzK: 'Қассобхона',
    },
    content1: {
      uz: `Shaxsiy, toʻliq avtomatlashtirilgan qassoblik sexi ishlab chiqarish hududida joylashgan. Shuning uchun quyonlar soʻyish joyiga yetkazish mobaynida hayajonlanish hissini boshdan kechirmaydi.<br><br>Zamonaviy qassoblik sexi <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a> (Italiya) kompaniyasi tomonidan ishlab chiqilgan va jihozlangan.<br><br>Quyonlarni toʻgʻri soʻyish va goʻsht mahsulotlarini qayta ishlashga taalluqli talablar, oʻz navbatida toʻliq karantin, ham vakuumli, ham Skin-qadoqlarni lozim darajada tozalash va qadoqlash ishlari amalga oshiriladi. Bunda goʻshtning qiymatini, shuningdek, minerallar va vitaminlarni saqlab qolishga erishiladi.<br><br>Sotishda bizning Kompaniyamiz ushbu mahsulotlarning aloqasizligini kafolatlaydi, Yaʼni oxirgi isteʼmolchining goʻsht bilan birinchi aloqasi oʻram ochilganda yuz beradi, bu esa, oʻz navbatida mahsulotimizning sifatini buzilmasligini taʼminlaydi.`,

      ru: `Собственный, полностью автоматизированный убойный цех располагается на территории производства, поэтому кролики не испытывают стресса от транспортировки до места убоя.<br><br>Современный убойный цех разработан и оборудован компанией <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a> (Италия).<br><br>Требования касающийся правильного убоя и переработки мясных изделий, что в свою очередь гарантируются полным карантином и надлежащей очисткой и упаковкой как вакуумной, так и Skin-упаковки при этом сохраняя ценности мяса, а также минеральные вещества и витамины. Первый контакт мясо с человеком происходит при вскрытии упаковки руках конечного потребителя тем самым обеспечивая качество и надежность кроличьего мясо.<br><br>При реализации наша Компания гарантирует, что данная продукция является бесконтактным, а значит, что первый контакт с мясом у конечного потребителя происходить вскрытии упаковки, что свою очередь обеспечивает качество нашей продукции.`,

      en: `Our own fully automated slaughterhouse is located on the production area, so rabbits do not experience stress from transportation to the slaughter site.<br><br>The modern slaughterhouse is designed and equipped by the company <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a>  (Italy).<br><br>The requirements concerning the proper slaughter and processing of meat products guarantee complete quarantine and proper cleaning and packaging of both vacuum and Skin-packaging, while preserving the worths of meat, as well as minerals and vitamins.<br><br>When selling, our Company guarantees that these products are contactless, which means that the first contact with meat for the end consumer occurs when opening the package, which in turn ensures the quality of our products.`,

      uzK: `Шахсий, тўлиқ автоматлаштирилган қассоблик цехи ишлаб чиқариш ҳудудида жойлашган. Шунинг учун қуёнлар сўйиш жойига етказиш мобайнида ҳаяжонланиш ҳиссини бошдан кечирмайди.<br><br>Замонавий қассоблик цехи <a href="https://www.sinttecnologie.com/" target="_blank">«SINT TECHNOLOGY»</a> (Италия) компанияси томонидан ишлаб чиқилган ва жиҳозланган.<br><br>Қуёнларни тўғри сўйиш ва гўшт маҳсулотларини қайта ишлашга тааллуқли талаблар, ўз навбатида тўлиқ карантин, ҳам вакуумли, ҳам Skin-қадоқларни лозим даражада тозалаш ва қадоқлаш ишлари амалга оширилади. Бунда гўштнинг қийматини, шунингдек, минераллар ва витаминларни сақлаб қолишга эришилади.<br><br>Сотишда бизнинг Компаниямиз ушбу маҳсулотларнинг алоқасизлигини кафолатлайди, Яъни охирги истеъмолчининг гўшт билан биринчи алоқаси ўрам очилганда юз беради, бу эса, ўз навбатида маҳсулотимизнинг сифатини бузилмаслигини таъминлайди.`,
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
      en: 'Cooperation',
      uzK: 'Кооперация'
    },
    content2: {
      uz: `Tashkilot oilalarga kompaniya bilan uzoq muddatli hamkorlik qilish uchun quyon koʻpaytirish boʻyicha foydali imkoniyat yaratadi. <br><br>Quyon yetishtirishning oʻrtacha muddati - 77 kun. Biz bilan hamkorlik boshlangandan keyin 2,5 oy ichida sarmoyadan daromad olishingiz mumkin. Batafsil maslahat olish uchun bizning mutaxassislarimiz bilan bogʻlaning.`,

      en: `The organization provides a useful opportunity for families to breed rabbits for long-term cooperation with the company.<br><br>The average period for rearing rabbits is 77 days. You can earn on investments in 2.5 months after the start of cooperation with us. For more detailed information, please contact our specialists.`,

      ru: `Организация предоставляет полезную возможность семьям разводить кроликов для долгосрочного сотрудничества с компанией.<br><br> Средний срок выращивания кроликов – 77 дней. Заработать на инвестиции можно через 2,5 месяца после начала сотрудничества с нами. Для получения более подробной консультации свяжитесь с нашими специалистами.`,

      uzK: `Ташкилот оилаларга компания билан узоқ муддатли ҳамкорлик қилиш учун қуён кўпайтириш бўйича фойдали имконият яратади.<br><br> Қуён етиштиришнинг ўртача муддати - 77 кун. Биз билан ҳамкорлик бошлангандан кейин 2,5 ой ичида сармоядан даромад олишингиз мумкин. Батафсил маслаҳат олиш учун бизнинг мутахассисларимиз билан боғланинг.`,

     },
    content1: {
      uz: `«Моя Мечта» kompaniyasi har kimga qoʻshimcha daromad olish imkoniyatini qoʻlga kiritishda yordam beradi. Biz sizga quyonlarni yetishtirish texnologiyasi, maxsus uskunalarni, quyonlarning oʻzini va ular uchun yem mahsulotlari sotib olish imkoniyati haqida maslahat beramiz.`,

      ru: `Компания «Моя мечта» помогает каждому получить возможность дополнительного дохода. Мы проконсультируем вас по технологии выращивания кроликов, возможности приобретения специального оборудования, самих кроликов и кормов для них.`,

      en: `The company "My Dream" helps everyone to get the opportunity of additional income. We will advise you on the technology of raising rabbits, the possibility of acquiring special equipment, the rabbits themselves and feed for them.`,

      uzK: `“Моя Мечта” компанияси ҳар кимга қўшимча даромад олиш имкониятини қўлга киритишда ёрдам беради. Биз сизга қуёнларни етиштириш технологияси, махсус ускуналарни, қуёнларнинг ўзини ва улар учун ем маҳсулотлари сотиб олиш имконияти ҳақида маслаҳат берамиз.`,
    },
    image: [cooperationImg1]
  },

]


export {
  Activity
}
