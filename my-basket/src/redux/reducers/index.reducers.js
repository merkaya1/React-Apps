// reducers içerisine kesinlikle initial state oluşturulur

import SHOP_DATA from '../../shop-data'

const initial_state = {
    productList: SHOP_DATA, 
    basket: [] //sepetimiz başlangıçta boş array
}

export const reducer = (state=initial_state, action) => {
   
    switch(action.type) {
        case "ADD_BASKET":
            console.log(action.payload)
            
            console.log(state.basket)
            return {...state, basket: state.basket.find(cartItem => cartItem.id === action.payload.id)? state.basket.map(cartItem => cartItem.id === action.payload.id ?{ ...cartItem, count: cartItem.count +1} : cartItem) : [...state.basket, {...action.payload, count: 1}]}

            default:
                return state 
    }
}
