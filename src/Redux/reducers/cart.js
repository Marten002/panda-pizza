import { handleGetItemsCount } from "../functions/handleGetItemsCount"

const initialState = {
    items: {},
    itemsPrice: 0,
    itemsCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
        {
            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: currentItems.reduce((sum, obj) => obj.price + sum, 0),
                },
            }

            const itemsCount = handleGetItemsCount(newItems, 'items.length')

            return {
                ...state,
                items: newItems,
                itemsCount: itemsCount,
                itemsPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, obj) => obj.totalPrice + sum, 0)
            }
        }

        case 'SET_ITEMS_REMOVE':
            const itemsOld = state.items[action.payload].items
            const itemsNew = itemsOld.length > 1 ? state.items[action.payload].items.slice(1) : state.items[action.payload].items.slice(1)

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: itemsNew,
                    totalPrice: itemsOld.length > 1 ? itemsNew.reduce((sum, obj) => obj.price + sum, 0) : delete state.items[action.payload].totalPrice
                }
            }

            const itemsCount = handleGetItemsCount(newItems, 'items.length')

            return {
                ...state,
                items: newItems,
                itemsCount: itemsCount,
                itemsPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, obj) => obj.totalPrice + sum, 0)
            }

        default:
            return state
    }
}

export default cart
