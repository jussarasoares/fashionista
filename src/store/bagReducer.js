const INITIAL_BAG = {
  data: [],
  quantity: 0,
};

function bag(state = INITIAL_BAG, action) {
  switch (action.type) {
    case 'ADD_ITEM_BAG':
      let newProduct = true;
      const list = state.data.map((p) => {
        if (isEqualProduct(p, action.payload)) {
          newProduct = false;
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      if (newProduct) {
        return {
          ...state,
          data: [...state.data, action.payload],
          quantity: counterBag([...state.data, action.payload]),
        };
      }

      return {
        ...state,
        data: list,
        quantity: counterBag(list),
      };
    case 'REMOVE_ITEM_BAG':
      const newBag = state.data.map((p) => {
        if (isEqualProduct(p, action.payload)) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });

      return { ...state, data: newBag, quantity: counterBag(newBag) };
    case 'REMOVE_FULL_ITEM_BAG':
      const newList = state.data.filter((p) => {
        return !isEqualProduct(p, action.payload);
      });

      return { ...state, data: newList, quantity: counterBag(newList) };
    default:
      return state;
  }
}

function isEqualProduct(product1, product2) {
  return product1.name === product2.name && product1.size === product2.size;
}

export function counterBag(bag) {
  return bag.reduce((total, item) => total + item.quantity, 0);
}

export default bag;
