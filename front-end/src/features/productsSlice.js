import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    items: [],
    status: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
            const response = await (await fetch('http://localhost:3004/meusProdutos')).json();
            return response   
    }
);



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
});

export default productsSlice.reducer;