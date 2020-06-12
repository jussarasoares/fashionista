const INITIAL_PRODUCTS = {
  data: [],
};

function products(state = INITIAL_PRODUCTS, action) {
  switch (action.type) {
    case 'LIST_PRODUCTS':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default products;
