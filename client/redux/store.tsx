"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer, { RootState } from "@/redux/rootReducers";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
export const ReduxProvider = ({ children }: { children: any }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={true} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
