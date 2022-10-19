import PartnersMain from 'assets/icons/BackPartner.png'
import {Partners} from "src/data/types";

import partner1 from 'assets/partners/1.png'
import partner2 from 'assets/partners/2.png'
import partner3 from 'assets/partners/3.png'
import partner4 from 'assets/partners/4.png'
import partner5 from 'assets/partners/5.png'
import partner6 from 'assets/partners/6.png'
import partner7 from 'assets/partners/7.png'
import partner8 from 'assets/partners/8.png'



const PartnersInfo: Partners[] = [
  {
    name: 'Partner1',
    url: '#',
    logo: partner1,
    link: '#'
  },  {
    name: 'partner2',
    url: '#',
    logo:partner2,
    link: '#'
  },  {
    name: 'partner3',
    url: '#',
    logo:partner3,
    link: '#'
  },  {
    name: 'partner4',
    url: '#',
    logo:partner4,
    link: '#'
  },  {
    name: 'partner5',
    url: '#',
    logo:partner5,
    link: '#'
  },  {
    name: 'partner6',
    url: '#',
    logo:partner6,
    link: '#'
  },{
    name: 'partner7',
    url: '#',
    logo:partner7,
    link: '#'
  },{
    name: 'partner8',
    url: '#',
    logo:partner8,
    link: '#'
  },

]

const PartnersContent = {
  title: {
    ru: 'Наши партнеры',
    en: 'Our partners',
    uz: 'Bizning hamkorlarimiz',
    uzK: 'Бизнинг ҳамкорларимиз',
  },
  description1: {
    ru: '',
    en: '',
    uz: '',
  },
  description2: {
    ru: `Агрокомплекс «Моя Мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
    en: `Agrocomplex "My Dream" offers long-term and mutually beneficial cooperation. Do not miss the opportunity to get a reliable supplier with a guarantee of uninterrupted supplies.`,
    uz: `«Моя Мечта» agrokompleksi uzoq muddatli va o'zaro manfaatli hamkorlikni taklif etadi. Uzluksiz hamda ishonchli etkazib beruvchi hamkor bilan aloqa qilish imkoniyatini boy bermang.`,
    uzK: `"Моя Мечта" агрокомплекси узоқ муддатли ва ўзаро манфаатли ҳамкорликни таклиф етади. Узлуксиз ҳамда ишончли етказиб берувчи ҳамкор билан алоқа қилиш имкониятини бой берманг.`
  },
  subscribe: {
    ru: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
    en: `DO YOU WANT TO COOPERATE WITH US?`,
    uz: `BIZ BILAN HAMKORLIK QILISHNI XOHLAYSIZMI?`,
    uzK: `БИЗ БИЛАН ҲАМКОРЛИК ҚИЛИШНИ ХОҲЛАЙСИЗМИ?`,
  },
  press: {
    ru: `Нажмите`,
    en: `Click`,
    uz: `Bosing`,
    uzK: `Босинг`,
  }
}

export {
  PartnersInfo,
  PartnersContent,
  PartnersMain
}
