import {Partners} from "src/data/types";
import anaPartner from 'assets/partners/anaPartner.png'
import CIROCALABRIApartner from 'assets/partners/CIROCALABRIApartner.png'
import FRAGOLApartner from 'assets/partners/FRAGOLApartner.png'
import MeneghinPArtner from 'assets/partners/MeneghinPArtner.png'
import PrimeranoPartner from 'assets/partners/PrimeranoPartner.png'
import SintPartner from 'assets/partners/SintPartner.png'
import PartnersMain from 'assets/icons/BackPartner.png'


const PartnersInfo: Partners[] = [
  {
    name: 'Ana',
    url: '#',
    logo: anaPartner
  },
  {
    name: ':CIROCALABRI',
    url: '#',
    logo: CIROCALABRIApartner
  },
  {
    name: 'Ana',
    url: '#',
    logo: FRAGOLApartner
  },
  {
    name: 'Meneghin',
    url: '#',
    logo: MeneghinPArtner
  },
  {
    name: 'Primerano',
    url: '#',
    logo: PrimeranoPartner
  },
  {
    name: 'Sint',
    url: '#',
    logo: SintPartner
  }
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
    ru: `Агрохолдинг «Моя мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
    en: `Агрохолдинг «Моя мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
    uz: `Агрохолдинг «Моя мечта» предлагает долгосрочное и взаимовыгодное сотрудничество. Не упускайте возможность получить надежного поставщика с гарантией бесперебойных поставок.`,
  },
  subscribe: {
    ru: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
    en: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
    uz: `ХОТИТЕ СОТРУДНИЧАТЬ С НАМИ?`,
  },
  press: {
    ru: 'Нажмите!',
    en: 'Нажмите!',
    uz: 'Нажмите!',
  }
}

export {
  PartnersInfo,
  PartnersContent,
  PartnersMain
}
