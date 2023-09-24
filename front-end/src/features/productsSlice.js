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
    reducers: {
        addToStore(state,action) {
            console.log(action.payload);
            const lastId = state.items.length + 1;
            const newTenis = action.payload;
            newTenis['id'] = lastId;
            newTenis['img'] = "tenis4.jpg";
            state.items.push(newTenis);
        },
        removeFromStore(state,action){
            const nextItems = state.items.filter(
                item => item.id !== action.payload.id
            )
            state.items = nextItems;
    
        }
    },
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

export const { addToStore, removeFromStore } = productsSlice.actions;
export default productsSlice.reducer;