export function addItemBagAction(payload) {
  return { type: 'ADD_ITEM_BAG', payload };
}

export function removeItemBagAction(payload) {
  return { type: 'REMOVE_ITEM_BAG', payload };
}

export function removeFullItemBagAction(payload) {
  return { type: 'REMOVE_FULL_ITEM_BAG', payload };
}
