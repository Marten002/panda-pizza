const initialState = {
    data: {
        name: '',
        phone: '',
        address: '',
        comment: ''
    }
}

const client = (state = initialState, action) => {
    if (action.type === 'SET_CLIENT_DATA') {
        return {
            ...state,
            data: {
                name: action.payload.name,
                phone: action.payload.phone,
                address: action.payload.address,
                comment: action.payload.comment
            }
        }
    }
    return state
}

export default client
