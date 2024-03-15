import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async (API) => {
    console.log("Fetching...")
    const response = await fetch(API);
    return  await response.json();
}) 

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data.push(...action.payload);
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            console.log(`Error: ${action.payload}`);
            state.isError = true;
        })
    }

}) 

export default productsSlice.reducer;