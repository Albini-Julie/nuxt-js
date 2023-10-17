import {defineStore} from  'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 0,
        cart: []
    }),
    getters: {
            isInCart: (state) => {
                return(id) => state.cart.includes(id)
            }
        },
    actions: {
        increment () {
            this.count++
        },
        addToCart (id){
            if (!this.cart.includes(id)){
            this.cart.push(id)
            }
        },
        removeFromCart(id) {
            let id2 = this.cart.findIndex(item => item === id);
            this.cart.splice(id2, 1)
        },
    }
})