import axios from "axios"

export const handleFetchCards = () => (dispatch) => {
    axios
        .get('./config.json')
        .then(({ data }) => {
            dispatch(handleLoadCards(data))
        })
}

export const handleLoadCards = (items) => {
    return {
        type: "LOAD_CARDS",
        payload: items
    }
}
