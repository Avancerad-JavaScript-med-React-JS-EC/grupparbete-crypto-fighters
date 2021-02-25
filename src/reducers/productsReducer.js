export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        productsItems: action.payload
      };
    default:
      return state;
  }
};