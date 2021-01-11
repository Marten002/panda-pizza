const initialState = {
    items: [],
    isLoaded: false,
}

const cards = (state = initialState, action) => {
    if (action.type === 'LOAD_CARDS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state
}

export default cards
