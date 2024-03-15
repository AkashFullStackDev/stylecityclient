import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productsSlice from "./slices/productsSlice";
import modalSlice from "./slices/modalSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        modal: modalSlice
    }
})

export default store;