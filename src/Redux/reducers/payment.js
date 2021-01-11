const initialState = {
    method: 'cash',
}

const payment = (state = initialState, action) => {
    if (action.type === 'SET_METHOD_PAYMENT') {
        return {
            ...state,
            method: action.payload
        }
    }
    return state
}

export default payment
