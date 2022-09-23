import PartnersMain from 'assets/icons/BackPartner.webp'
import {Partners} from "src/data/types";
import anaPartner from 'assets/partners/anaPartner.webp'
import CIROCALABRIApartner from 'assets/partners/CIROCALABRIApartner.webp'
import FRAGOLApartner from 'assets/partners/FRAGOLApartner.webp'
import MeneghinPArtner from 'assets/partners/MeneghinPArtner.webp'
import PrimeranoPartner from 'assets/partners/PrimeranoPartner.webp'
import SintPartner from 'assets/partners/SintPartner.webp'
import P4energyPartner from 'assets/partners/P4energyPartner.webp'
import AiaPartner from 'assets/partners/AiaPartner.webp'



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
    en: 'Наши партнеры',
    uz: 'Наши партнеры',
  },
  description1: {
    ru: '',
    en: '',
    uz: '',
  },
  description2: {
    ru: `Агрокомплекс «Моя Мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
    en: `Агрокомплекс «Моя Мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
    uz: `Агрокомплекс «Моя Мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
  },
  subscribe: {
    ru: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
    en: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
    uz: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
  },
  press: {
    ru: `Нажмите`,
    en: `Нажмите`,
    uz: `Нажмите`,
  }
}

export {
  PartnersInfo,
  PartnersContent,
  PartnersMain
}
