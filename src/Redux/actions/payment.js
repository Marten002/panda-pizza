export const handlePaymentMethod = (method) => {
    return {
        type: "SET_METHOD_PAYMENT",
        payload: method
    }
}

