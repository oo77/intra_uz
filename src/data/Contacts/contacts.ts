import ContactUsMain from "assets/ContactUsMain.jpg"
import instagram  from "assets/icons/instagaramIconBlack.svg"

const Contacts = {
  title: {
    ru: 'Свяжитесь с нами',
    en: 'Contact us',
    uz: `Biz bilan bog'laning`,
  },
  subtitle: {
    ru: 'Агрокомплекс <br> «Моя Мечта»',
    uz: '«Моя Мечта» <br> Agrokomleksi' ,
    en: 'Agrocomplex <br> «My Dream»',
  },
  subText: {
    ru: 'Ваша заявка будет рассмотрена нашими специалистами.',
    en: 'Your application will be considered by our specialists.',
    uz: `Sizning arizangiz mutaxassislarimiz tomonidan ko'rib chiqiladi`,
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
    },
    name:{
      ru: 'Ф.И.О:',
      en: 'Name:',
      uz: 'F.I.Sh:',
    },
    incorrectName:{
      ru: 'Ф.И.О не может быть меньше 3 символов',
      en: 'Name cannot be less than 3 characters',
      uz: `F.I.SH 3 belgidan kam bo'lishi mumkin emas`,
    },
    job:{
      ru: 'Должность:',
      en: 'Post:',
      uz: 'Lavozim:',
    },
    mail:{
      ru: 'Почта:',
      en: 'Mail:',
      uz: 'Pochta:',
    },
    incorrectMail:{
      ru: 'Почта введена неправильно',
      en: 'Mail entered incorrectly',
      uz: `Pochta noto'g'ri kiritilgan`,
    },
    stateCode:{
      ru: 'Код страны:',
      en: 'Country code:',
      uz: 'Mamlakat kodi:',
    },
    phone:{
      ru: 'Телефон:',
      en: 'Phone:',
      uz: 'Telefon raqam:',
    },
    message:{
      ru: 'Сообщение',
      en: 'Message',
      uz: 'Xabaringiz',
    },
    send: {
      ru: 'Отправить',
      en: 'Send',
      uz: 'Yuborish',
    },
    thanks: {
      ru: 'Спасибо',
      en: 'Thank you',
      uz: 'Raxmat',
    },
    attantion:{
      ru: 'Ваша заявка будет рассмотрена нашими специалистами.',
      en: 'Your application will be considered by our specialists.',
      uz: `Sizning arizangiz mutaxassislarimiz tomonidan ko'rib chiqiladi`,
    }
  }

}

export {
  Contacts,
  ContactUsMain
}
