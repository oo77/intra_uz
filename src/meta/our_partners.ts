import {useMeta} from 'quasar'
import {MetaOptions} from 'quasar/dist/types/meta'

const OurPartners: MetaOptions = {
  title: 'Наши партнеры',
  meta: {
    title: {
      name: "title",
      content: "Наши партнеры"
    },
    description: {name: 'description', content: 'Page 4'},
    keywords: {name: 'Кролиководство', content: 'Кролиководство'},
    equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title'
    },
  }
}

export function useOurPartnersMeta() {
  useMeta(OurPartners)
}

//   <!-- Primary Meta Tags -->
// <title>Агрокомплекс МОЯ МЕЧТА</title>
// <meta name="title" content="Агрокомплекс МОЯ МЕЧТА">
// <meta name="description" content="Агрокомплекс «МОЯ МЕЧТА» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области">
//
//   <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://staging-mydream.uztech.uz/">
// <meta property="og:title" content="Агрокомплекс МОЯ МЕЧТА">
// <meta property="og:description" content="Агрокомплекс «МОЯ МЕЧТА» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области">
// <meta property="og:image" content="">
//
// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://staging-mydream.uztech.uz/">
// <meta property="twitter:title" content="Агрокомплекс МОЯ МЕЧТА">
// <meta property="twitter:description" content="Агрокомплекс «МОЯ МЕЧТА» – крупнейший кролиководческий холдинг, расположенный в незапятнанной и экологически чистой зоне Ташкентской Области">
// <meta property="twitter:image" content="">
