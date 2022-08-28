import {useMeta} from 'quasar'
import {MetaOptions} from 'quasar/dist/types/meta'

const HomeMeta: MetaOptions = {
  title: 'Агрокомплекс МОЯ МЕЧТА',
  meta: {
    title: {
      name: "title",
      content: "Агрокомплекс МОЯ МЕЧТА"
    },
    description: {name: 'description', content: 'Page 1'},
    keywords: {name: 'keywords', content: 'Quasar website'},
    equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title'
    },
  }
}

export function useHomeMeta() {
  useMeta(HomeMeta)
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
