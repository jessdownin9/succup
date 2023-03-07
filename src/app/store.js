import { configureStore } from '@reduxjs/toolkit';
import storeItemsSlice from '../components/StoreItem/storeItemsSlice';

export const store = configureStore({
  reducer: {
    storeItems: storeItemsSlice
  }
});
