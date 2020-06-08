export function bagReducer(state, action) {
  switch (action.type) {
    case "add":
      let newProduct = true;
      const list = state.map((p) => {
        if (isEqualProduct(p, action.payload)) {
          newProduct = false;
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      if (newProduct) {
        return [...state, action.payload];
      }

      return list;
    case "remove":
      return state.filter((p) => {
        return !isEqualProduct(p, action.payload);
      });
    default:
      throw new Error();
  }
}

function isEqualProduct(product1, product2) {
  return product1.name === product2.name && product1.size === product2.size;
}

export function numberBag(bag) {
  return bag.reduce((total, item) => total + item.quantity, 0);
}

export function totalBag(bag) {
  return bag.reduce((total, item) => {
    const price = item.actual_price.replace(",", ".").replace("R$ ", "");
    return total + parseFloat(price) * item.quantity;
  }, 0);
}
