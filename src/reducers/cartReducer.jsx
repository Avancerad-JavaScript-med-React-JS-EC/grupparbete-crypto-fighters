let initialState = {
    event: {}
}
    
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CART':
            return {
                event: action.payload
            }
        default:
            return state;    
    }
}
