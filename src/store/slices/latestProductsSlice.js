import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLatestProducts = createAsyncThunk("fetchLatestProducts", async (API) => {
    const response = await fetch(API);
    return await response.json();
}) 

const latestProductsSlice = createSlice({
    name: "latestProductsSlice",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchLatestProducts.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchLatestProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = [...action.payload];
        })
        builder.addCase(fetchLatestProducts.rejected, (state, action)=>{
            console.log(`Error: ${action.payload}`);
            state.isError = true;
        })
    }

}) 

export default latestProductsSlice.reducer;