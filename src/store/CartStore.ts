import { defineStore } from 'pinia'
type cartType = {
  [id: number]: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart_items: {} as cartType
  }),
  actions: {
    add_to_cart(payload: number) {
      if (!this.cart_items[payload]) {
        this.cart_items[payload] = 1
      } else {
        this.cart_items[payload]++
      }
    }
  },
  getters: {
    getCartItems: (state) => {
      return state.cart_items
    }
  }
})
