let initialState = {
    product: {}
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            return {
                product: action.payload
            }
        default:
            return state;
    }
}
