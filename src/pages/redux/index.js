// import { createStore } from 'redux'
// import { cardReducer } from '../reducer/card'

// export const store = createStore(cardReducer)

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../redux/card';

const rootReducer = {
  cart: CartReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
