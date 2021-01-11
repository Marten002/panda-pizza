import { combineReducers } from 'redux'

import cardsReducer from './cards'
import cartReducer from './cart'
import deliveryReducer from "./delivery"
import paymentReducer from "./payment"
import clientReducer from "./client"

const rootReducer = combineReducers({
    cards: cardsReducer,
    cart: cartReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
    client: clientReducer
})

export default rootReducer
