import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './productsStore.jsx';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};



const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {cart:persistedReducer},
});

export let persistor = persistStore(store);
