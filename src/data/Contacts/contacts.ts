import ContactUsMain from "assets/ContactUsMain.jpg"
import instagram  from "assets/icons/instagaramIconBlack.svg"

const Contacts = {
  title: {
    ru: 'Свяжитесь с нами',
    en: 'Contact us',
    uz: `Biz bilan bog'laning`,
    uzK: `Биз билан боғланинг`,
  },
  subtitle: {
    ru: 'Агрокомплекс <br> «Моя Мечта»',
    uz: '«Моя Мечта» <br> Agrokompleksi' ,
    en: 'Agrocomplex <br> «My Dream»',
    uzK: '«Моя Мечта» <br> Агрокомплекси' ,
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
      text: "+998-99-849-60-33",
    },
    {
      icon: "fa-solid fa-envelope",
      text: "info@my-dream.uz"
    }
  ],
  socialLink: [
    {
      socialName: "facebook",
      icon: "fa-brands fa-facebook",
    },
    {
      socialName: "youtube",
      icon: "fa-brands fa-youtube",
    },
    {
      socialName: "instagram",
      icon: "img:"+instagram,
    },
    {
      socialName: "telegram",
      icon: "fa-brands fa-telegram",
    },
  ],
  labels: {
    company: {
      ru: 'Компания:',
      en: 'Company:',
      uz: 'Tashkilot nomi:',
      uzK: 'Ташкилот номи:',
    },
    name:{
      ru: 'Ф.И.О:',
      en: 'Name:',
      uz: 'F.I.SH:',
      uzK: 'Ф.И.Ш',
    },
    incorrectName:{
      ru: 'Ф.И.О не может быть меньше 3 символов',
      en: 'Name cannot be less than 3 characters',
      uz: `F.I.SH 3 belgidan kam bo'lishi mumkin emas`,
      uzK: 'Ф.И.Ш 3 белгидан кам бўлиши мумкин емас',
    },
    job:{
      ru: 'Должность:',
      en: 'Job:',
      uz: 'Lavozim:',
      uzK: 'Лавозим',
    },
    mail:{
      ru: 'Почта:',
      en: 'Mail:',
      uz: 'Pochta:',
      uzK: 'Почта',
    },
    incorrectMail:{
      ru: 'Почта введена неправильно',
      en: 'Mail entered incorrectly',
      uz: `Pochta noto'g'ri kiritilgan`,
      uzK: 'Почта нотўғри киритилган',
    },
    stateCode:{
      ru: 'Код страны:',
      en: 'Country code:',
      uz: 'Mamlakat kodi:',
      uzK: 'Мамлакат коди:',
    },
    phone:{
      ru: 'Телефон:',
      en: 'Phone:',
      uz: 'Telefon raqam:',
      uzK: 'Teлeфoн рақам:',
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
