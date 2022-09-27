import AboutUsMain from 'assets/icons/BackProd.jpg'
import freez1 from "assets/products/freez1.png"
import freez2 from "assets/products/freez2.png"
import freez3 from "assets/products/freez3.png"
import freez4 from "assets/products/freez4.png"
import sub1 from "assets/products/sub1.png"
import sub2 from "assets/products/sub2.png"
import sub3 from "assets/products/sub3.png"
import sub4 from "assets/products/sub4.png"
import semi1 from "assets/products/semi1.png"
import semi2 from "assets/products/semi2.png"
import semi3 from "assets/products/semi3.png"
import semi4 from "assets/products/semi4.png"

const Products = {
  freezeProducts:
    [
      {
        name: 'Ножки кролика',
        image: freez1,
        title: {
          ru: 'Ножки кролика',
          en: 'Rabbit legs',
          uz: 'Quyon oyoqlari',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 18 суток Пищевая ценность: Белок - 21 г., жир - 13 г.,  Энергетическая ценность: 199 ккал.',
          en: 'Expiration date: by t from +2°C to +4°C - 18 days Nutritional Value: Protein - 21 г., fat - 13 g.,  Energy value: 199 kcal.',
           uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 18 kun Oziqlanish qiymati: oqsil - 21 g, yog ' - 13 g, energiya qiymati: 199 kkal.`,
        }
      },
      {
        name: 'Полутушка кролика',
        image: freez2,
        title: {
          ru: 'Полутушка кролика',
          en: `Rabbit 's half - shell`,
          uz: `Quyonning yarim qobig'i`,
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 18 суток Пищевая ценность: Белок - 21 г., жир - 13 г.,  Энергетическая ценность: 199 ккал.',
          en: 'Expiration date: by t from +2°C to +4°C - 18 days Nutritional Value: Protein - 21 г., fat - 13 g.,  Energy value: 199 kcal.',
           uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 18 kun Oziqlanish qiymati: oqsil - 21 g, yog ' - 13 g, energiya qiymati: 199 kkal.`,
        }
      },
      {
        name: 'Спинка кролика',
        image: freez3,
        title: {
          ru: 'Спинка кролика',
          en: `Rabbit's back`,
          uz: 'Quyonning orqa tomoni',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 18 суток Пищевая ценность: Белок - 19 г., жир - 13 г.,  Энергетическая ценность: 173 ккал.',
          en: 'Expiration date: by t from +2°C to +4°C - 18 days Nutritional Value: Protein - 19 г., fat - 13 g.,  Energy value: 173 kcal.',
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 18 kun Oziqlanish qiymati: oqsil - 19 g, yog ' - 13 g, energiya qiymati: 173 kkal.`,
        }
      },
      {
        name: 'Филе кролика',
        image: freez4,
        title: {
          ru: 'Филе кролика',
          en: 'Rabbit fillet',
          uz: 'Quyon filesi',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 18 суток Пищевая ценность: Белок - 21 г., жир - 13 г.,  Энергетическая ценность: 199 ккал.',
          en: 'Expiration date: by t from +2°C to +4°C - 18 days Nutritional Value: Protein - 21 г., fat - 13 g.,  Energy value: 199 kcal.',
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 18 kun Oziqlanish qiymati: oqsil - 21 g, yog ' - 13 g, energiya qiymati: 199 kkal.`,
        }
      }
    ],


  semiProducts:
    [
      {
        name: 'Шницель',
        image: semi1,
        title: {
          ru: 'Шницель',
          en: 'Schnitzel',
          uz: 'Shnitsel',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 5 суток Пищевая ценность: Белок - 15 г., жир - 12 г., Углеводы - 10 г. Энергетическая ценность: 206 ккал',
          en: 'Expiration date: at t from +2 °C to +4 °C - 5 days Nutritional value: Protein - 15 g., fat - 12 g., Carbohydrates - 10 g. Energy value: 206 kcal.',
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 5 kun oziqlanish qiymati: oqsil - 15 g, yog' - 12 g, uglevodlar- 10 g.energiya qiymati: 206 kkal.`,
        }
      },
      {
        name: 'Котлета',
        image: semi2,
        title: {
          ru: 'Котлета',
          en: 'Cutlet',
          uz: 'Kotlet',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 5 суток Пищевая ценность: Белок - 15 г., жир - 12 г., Углеводы - 10 г. Энергетическая ценность: 206 ккал',
          en: 'Expiration date: at t from +2 °C to +4 °C - 5 days Nutritional value: Protein - 15 g., fat - 12 g., Carbohydrates - 10 g. Energy value: 206 kcal.',
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 5 kun oziqlanish qiymati: oqsil - 15 g, yog' - 12 g, uglevodlar- 10 g.energiya qiymati: 206 kkal.`,
        }
      },
      {
        name: 'Фрикадельки',
        image: semi3,
        title: {
          ru: 'Фрикадельки',
          en: 'Meatballs',
          uz: 'Frikadelka',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 5 суток Пищевая ценность: Белок - 15 г., жир - 12 г., Углеводы - 10 г. Энергетическая ценность: 253 ккал',
          en: 'Expiration date: at t from +2 °C to +4 °C - 5 days Nutritional value: Protein - 15 g., fat - 12 g., Carbohydrates - 10 g. Energy value: 253 kcal.',
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 5 kun oziqlanish qiymati: oqsil - 15 g, yog' - 12 g, uglevodlar- 10 g.energiya qiymati: 253 kkal.`,
        }
      },
      {
        name: 'Котлета2',
        image: semi4,
        title: {
          ru: 'Котлета',
          en: 'Cutlet',
          uz: 'Kotlet',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 5 суток Пищевая ценность: Белок - 17 г., жир - 13 г., Углеводы - 2 г. Энергетическая ценность: 197 ккал.',
          en: `Expiration date: at t from +2 °C to +4 °C - 5 days Nutritional value: Protein - 17 g., fat - 13 g., Carbohydrates - 2 g. Energy value: 197 kcal.`,
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 5 kun oziqlanish qiymati: oqsil - 17 g, yog ' - 13 g, uglevodlar-2 g.energiya qiymati: 197 kkal.`,
        }
      },
    ],


  subProducts:
    [
      {
        name: 'Печень кролика',
        image: sub1,
        title: {
          ru: 'Печень кролика',
          en: 'Rabbit liver',
          uz: 'Quyon jigari',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 10 суток Пищевая ценность: Белок- 19 г., жир - 10 г.,  Энергетическая ценность: 166 ккал.',
          en: 'Expiration date: at t from +2 °C to +4 °C - 10 days Nutritional value: Protein - 19 g, fat - 10 g, Energy value: 166 kcal.',
          uz: `Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 10 kun oziqlanish qiymati: oqsil - 19 g, yog ' - 10 g, energiya qiymati: 166 kkal.`,
        }
      },
      {
        name: 'Языки кролика',
        image: sub2,
        title: {
          ru: 'Языки кролика',
          en: 'Rabbit tongues',
          uz: 'Quyon tillari',
        },
        description: {
          ru: 'Срок годности: при t -18°C - 90 суток Пищевая ценность: Белок- 21 г., жир - 7 г.,  Энергетическая ценность: 147 ккал.',
          en: 'Expiration date: at t -18 °C - 90 days Nutritional value: Protein - 21 g, fat - 7 g, Energy value: 147 kcal.',
          uz: `Yaroqlilik muddati: t -18°C da - 90 kun oziqlanish qiymati: oqsil - 21 g, yog ' - 7 g, energiya qiymati: 147 kkal.`,
        }
      },
      {
        name: 'Сердце кролика',
        image: sub3,
        title: {
          ru: 'Сердце кролика',
          en: 'Rabbit heart',
          uz: 'Quyonning yuragi',
        },
        description: {
          ru: 'Срок годности: при t от +2°C до +4°C - 10 суток Пищевая ценность: Белок- 21 г., жир - 7 г.,  Энергетическая ценность: 147 ккал.',
          en: 'Expiration date: at t from +2 °C to +4 °C - 10 days Nutritional value: Protein - 21 g, fat - 7 g, Energy value: 147 kcal.',
          uz: 'Yaroqlilik muddati: t + 2°C dan + 4°C gacha - 10 kun oziqlanish qiymati: oqsil - 21 g, yog \' - 7 g, energiya qiymati: 147 kkal.',
        }
      },
      {
        name: 'Почки кролика',
        image: sub4,
        title: {
          ru: 'Почки кролика',
          en: 'Rabbit kidneys',
          uz: 'Quyon kurtaklari',
        },
        description: {
          ru: 'Срок годности: при t -18°C - 90 суток Пищевая ценность: Белок- 19 г., жир - 8 г.,  Энергетическая ценность: 148 ккал.',
          en: 'Expiration date: at t -18 °C - 90 days Nutritional value: Protein - 19 g, fat - 8 g, Energy value: 148 kcal.',
          uz:  `Yaroqlilik muddati: t -18°C da - 90 kun oziqlanish qiymati: oqsil - 19 g, yog ' - 8 g, energiya qiymati: 148 kkal.`,
        }
      },

    ],
}

const ProductsTitle = {
  freezeProducts: {
    ru: 'Охлажденная, замороженная продукция:',
    en: 'Chilled, frozen products:',
    uz: 'Sovutilgan, muzlatilgan mahsulotlar:',
  },
  semiProducts: {
    ru: 'Полуфабрикаты охлажденные рубленные:',
    en: 'Semi-finished products, chilled, chopped:',
    uz:  `Sovutilgan tug'ralgan yarim tayyor mahsulotlar:`,
  },
  subProducts: {
    ru: 'Субпродукты:',
    uz: 'Yarim tayyor mahsulotlar:',
    en: 'By-products:',
  },
  differentProducts: {
    ru: 'Разные продукты:',
    en: 'Different products:',
    uz: 'Turli mahsulot:',
  }
}

const Content = {
  title: {
    ru: 'Продукция',
    uz: 'Mahsulotlar',
    en: 'Products',
  },
  description: {
    ru: ``,
    en: ``,
    uz: ``,

  }

}


export
{
  Products,
  ProductsTitle,
  AboutUsMain,
  Content
}
