import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productsSlice from "./slices/productsSlice";
import modalSlice from "./slices/modalSlice";
import latestProductsSlice from "./slices/latestProductsSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        latestProducts: latestProductsSlice,
        modal: modalSlice
    }
})

export default store;