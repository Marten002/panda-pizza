// работа с корзиной покупателя
export const saveCart = cartItems => localStorage.setItem('cart', JSON.stringify(cartItems))
export const saveCartLength = (length = 0) => localStorage.setItem('cartLength', length)
export const getCartLength = () => localStorage.getItem('cartLength')
export const getCart = () => JSON.parse(localStorage.getItem('cart'))
export const saveCartTotal = total => localStorage.setItem('totalPrice', total)
export const getCartTotal = () => Number(localStorage.getItem('totalPrice'))
export const clearCart = () => {
    localStorage.removeItem('cart')
    localStorage.removeItem('totalPrice')
    localStorage.removeItem('cartLength')
}
