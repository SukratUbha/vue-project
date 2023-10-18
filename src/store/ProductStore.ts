import { defineStore } from 'pinia'
import axios from 'axios'

export type product_type = {
  id: number
  title: string
  brand: string
  category: string
  description: string
  discountPercentage: number
  images: [string]
  price: number
  rating: number
  stock: number
  thumbnail: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    all_products: [] as product_type[],
    discount_products: [] as product_type[]
  }),

  //The URL below should ideally be stored in an env file.
  actions: {
    async set_products() {
      axios.get('https://dummyjson.com/products').then((res) => {
        this.$state.all_products = res.data.products
      })
      console.log(this.$state.all_products)
    },

    async set_discount_products() {
      axios.get('https://dummyjson.com/products').then((res) => {
        const sortedProducts = res.data.products.sort(
          (a: product_type, b: product_type) => b.discountPercentage - a.discountPercentage
        )
        this.$state.discount_products = sortedProducts.slice(0, 8)
      })
    }
  },
  getters:{
    getDiscountItems: (state) =>{
      return state.discount_products
    }
  }
})
