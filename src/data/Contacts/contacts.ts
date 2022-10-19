import ContactUsMain from "assets/intra/MainImages/contacts.jpg"
import instagram  from "assets/icons/instagaramIconBlack.svg"

const Contacts = {
  title: {
    ru: 'Свяжитесь с нами',
    en: 'Contact us',
    uz: `Biz bilan bog'laning`,
    uzK: `Биз билан боғланинг`,
  },
  subtitle: {
    ru: 'Инновацинный <br> Транспорт',
    uz: 'Инновацинный <br> Транспорт' ,
    en: 'Инновацинный <br> Транспорт',
    uzK: 'Инновацинный <br> Транспорт' ,
  },
  subText: {
    ru: 'Ваша заявка будет рассмотрена нашими специалистами.',
    en: 'Your application will be considered by our specialists.',
    uz: `Sizning arizangiz mutaxassislarimiz tomonidan ko'rib chiqiladi`,
    uzK: `Сизнинг аризангиз мутахассисларимиз томонидан кўриб чиқилади`,
  },
  contact: [
    {
      icon: "fa-solid fa-phone",
      text: "+ (99871) 299-00-01",
    },
    {
      icon: "fa-solid fa-envelope",
      text: "tstu_rektorat@tstu.ru"
    }
  ],
  socialLink: [
    {
      socialName: "facebook",
      icon: "fa-brands fa-facebook",
      url: 'https://www.facebook.com/groups/innovativetransport'
    },
    {
      socialName: "youtube",
      icon: "fa-brands fa-youtube",
      url: 'https://www.youtube.com/channel/UCNoccNpALAz-M6qLSNMrifQ'
    },
    {
      socialName: "instagram",
      icon: 'fa-brands fa-linkedin',
      url: "https://t.me/logkaleidoscope"
    },
    {
      socialName: "telegram",
      icon: "fa-brands fa-telegram",
      url: 'https://t.me/logkaleidoscope'
    },
  ],
  labels: {
    company: {
      ru: 'Компания',
      en: 'Company',
      uz: 'Tashkilot nomi',
      uzK: 'Ташкилот номи',
    },
    name:{
      ru: 'Ф.И.О',
      en: 'Name',
      uz: 'F.I.SH',
      uzK: 'Ф.И.Ш',
    },
    incorrectName:{
      ru: 'Ф.И.О не может быть меньше 3 символов',
      en: 'Name cannot be less than 3 characters',
      uz: `F.I.SH 3 belgidan kam bo'lishi mumkin emas`,
      uzK: 'Ф.И.Ш 3 белгидан кам бўлиши мумкин емас',
    },
    job:{
      ru: 'Должность',
      en: 'Job',
      uz: 'Lavozim',
      uzK: 'Лавозим',
    },
    mail:{
      ru: 'Почта',
      en: 'Mail',
      uz: 'Pochta',
      uzK: 'Почта',
    },
    incorrectMail:{
      ru: 'Почта введена неправильно',
      en: 'Mail entered incorrectly',
      uz: `Pochta noto'g'ri kiritilgan`,
      uzK: 'Почта нотўғри киритилган',
    },
    stateCode:{
      ru: 'Код страны',
      en: 'Country code',
      uz: 'Mamlakat kodi',
      uzK: 'Мамлакат коди',
    },
    phone:{
      ru: 'Телефон',
      en: 'Phone',
      uz: 'Telefon raqam',
      uzK: 'Teлeфoн рақам',
    },
    message:{
      ru: 'Сообщение',
      en: 'Message',
      uz: 'Xabaringiz',
      uzK: 'Хабарингиз',
    },
    send: {
      ru: 'Отправить',
      en: 'Send',
      uz: 'Yuborish',
      uzK: 'Юбориш',
    },
    thanks: {
      ru: 'Спасибо',
      en: 'Thank you',
      uz: 'Raxmat',
      uzK: 'Рахмат',
    },
    attantion:{
      ru: 'Ваша заявка будет рассмотрена нашими специалистами.',
      en: 'Your application will be considered by our specialists.',
      uz: `Sizning arizangiz mutaxassislarimiz tomonidan ko'rib chiqiladi`,
      uzK: 'Сизнинг аризангиз мутахассисларимиз томонидан кўриб чиқилади',
    }
  }

}

export {
  Contacts,
  ContactUsMain
}
