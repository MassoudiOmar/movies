import { configureStore } from "@reduxjs/toolkit";
import MainPage from "./main-page";
import description from "./description";
import search from "./search";
export const store = configureStore({
  reducer: {
    MainPage,
    description,
    search,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
