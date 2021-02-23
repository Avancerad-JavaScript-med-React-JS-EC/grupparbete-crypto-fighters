let initialState = {
    event: {}
}
    
export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ORDER':
            return {
                event: action.payload
            }
        default:
            return state;    
    }
}

