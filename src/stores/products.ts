import {defineStore} from 'pinia'
import {images} from "src/utils/ImgLocation";

export const useProducts = defineStore('products', {
  state: () => ({
      freezeProducts:
        [
          {
            id: 1,
            //@ts-ignore
            url: images.freez1,
            title: 'freezeProduct1',
            description: "freezeProductDes1"
          },
          {
            id: 2,
            //@ts-ignore
            url: images.freez2,
            title: 'freezeProduct2',
            description: "freezeProductDes2"
          },
          {
            id: 3,
            //@ts-ignore
            url: images.freez3,
            title: 'freezeProduct3',
            description: "freezeProductDes3"
          },
          {
            id: 4,
            //@ts-ignore
            url: images.freez4,
            title: 'freezeProduct4',
            description: "freezeProductDes4"
          },

        ],
      semiProducts:
        [
          {
            id: 1,
            //@ts-ignore
            url: images.semi1,
            title: 'semiProduct1',
            description: "semiProductDes1"
          },
          {
            id: 2,
            //@ts-ignore
            url: images.semi2,
            title: 'semiProduct2',
            description: "semiProductDes2"
          },
          {
            id: 3,
            //@ts-ignore
            url: images.semi3,
            title: 'semiProduct3',
            description: "semiProductDes3"
          },
          {
            id: 4,
            //@ts-ignore
            url: images.semi4,
            title: 'semiProduct4',
            description: "semiProductDes4"
          }
        ],
      subProducts:
        [
          {
            id: 1,
            //@ts-ignore
            url: images.sub1,
            title: 'subProduct1',
            description: "subProductDes1"
          },
          {
            id: 2,
            //@ts-ignore
            url: images.sub2,
            title: 'subProduct2',
            description: "subProductDes2"
          },
          {
            id: 3,
            //@ts-ignore
            url: images.sub3,
            title: 'subProduct3',
            description: "subProductDes3"
          },
          {
            id: 4,
            //@ts-ignore
            url: images.sub4,
            title: 'subProduct4',
            description: "subProductDes4"
          }
        ],
    }


  ),
  getters: {
    getFreezeProducts: state => state.freezeProducts,
    getSemiProducts: state => state.semiProducts,
    getSubProducts: state => state.subProducts,
  },
  actions: {}

})


