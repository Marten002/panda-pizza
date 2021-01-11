const initialState = {
    method: 'pickup',
}

const delivery = (state = initialState, action) => {
    if (action.type === 'SET_METHOD_DELIVERY') {
        return {
            ...state,
            method: action.payload
        }
    }
    return state
}

export default delivery
