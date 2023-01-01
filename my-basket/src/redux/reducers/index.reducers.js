// reducers içerisine kesinlikle initial state oluşturulur

import SHOP_DATA from '../../shop-data'

const initial_state = {
    productList: SHOP_DATA, 
    basket: [] //sepetimiz başlangıçta boş array
}

export const reducer = (state=initial_state, action) => {
    switch(action.type) {
        case "ADD_BASKET":
            return {...state, basket: [...state.basket, action.payload]}

            default:
                return state
    }
}
