const addToCart = (product) => {
    return {
        type: 'SET_CART',
        payload: product
    }
}

export default addToCart;