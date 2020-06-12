import { createStore, combineReducers } from 'redux';

import products from './productReducer';
import bag from './bagReducer';

const rootReducer = combineReducers({
  products,
  bag,
});
const store = createStore(rootReducer);

export default store;
