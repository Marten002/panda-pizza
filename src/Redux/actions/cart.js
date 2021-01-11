export const handleAddCard = (item) => {
    return {
        type: "SET_ITEMS",
        payload: item
    }
}

export const handleRemoveCard = (item) => {
    return {
        type: "SET_ITEMS_REMOVE",
        payload: item
    }
}
