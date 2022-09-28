import PartnersMain from 'assets/icons/BackPartner.png'
import {Partners} from "src/data/types";
import anaPartner from 'assets/partners/anaPartner.png'
import CIROCALABRIApartner from 'assets/partners/CIROCALABRIApartner.png'
import FRAGOLApartner from 'assets/partners/FRAGOLApartner.png'
import MeneghinPArtner from 'assets/partners/MeneghinPArtner.png'
import PrimeranoPartner from 'assets/partners/PrimeranoPartner.png'
import SintPartner from 'assets/partners/SintPartner.png'
import P4energyPartner from 'assets/partners/P4energyPartner.png'
import AiaPartner from 'assets/partners/AiaPartner.png'



const PartnersInfo: Partners[] = [
  {
    name: 'Ana',
    url: '#',
    logo:anaPartner,
    link: 'https://www.anci-aia.it/'
  },
  {
    name: ':CIROCALABRI',
    url: '#',
    logo:CIROCALABRIApartner,
    link:'https://aziendacalabria.com/'
  },
  {
    name: 'Ana',
    url: '#',
    logo:FRAGOLApartner,
    link: 'https://www.fragolaspa.com'
  },
  {
    name: 'Meneghin',
    url: '#',
    logo:MeneghinPArtner,
    link:'https://www.meneghin.it/ita/'
  },
  {
    name: 'Primerano',
    url: '#',
    logo:PrimeranoPartner,
    link: 'http://www.primeranosrl.eu/'
  },
  {
    name: 'Sint',
    url: '#',
    logo:SintPartner,
    link: 'https://www.sinttecnologie.com/'
  },
  {
    name: 'P4energy',
    url: '#',
    logo: P4energyPartner,
    link: 'http://www.p4energy.it/'
  },
  {
    name: 'AIA',
    url: '#',
    logo: AiaPartner,
    link: 'http://www.aia.it'
  },
]

const PartnersContent = {
  title: {
    ru: 'Наши партнеры',
    en: 'Our partners',
    uz: 'Bizning hamkorlarimiz',
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
