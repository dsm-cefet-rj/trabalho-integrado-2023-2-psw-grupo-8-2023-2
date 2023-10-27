import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter();

const initialState = {
    items: [],
    status: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch", //`projetos/fetchProjetos
    async () => {
        const response = await (await fetch("http://localhost:3004/meusProdutos")).json()
        return response
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProductNome",
    async(produto) => {
        let response = await fetch("http://localhost:3004/meusProdutos/" + produto.id,
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(produto)
        });
        if(response.ok) {
            return produto;
        } else {
            return new Error ("Erro ao atualizar produto")
        }
    }
)

export const addNewProduct = createAsyncThunk(
    "products/addNewProduct",
    async(produto) => {
        let response = await fetch("http://localhost:3004/meusProdutos/",
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(produto)
        });
        if(response.ok) {
            return produto;
        } else {
            return new Error ("Erro ao adicionar movo produto")
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToStore(state, action) {
            const size = state.items.length;
            const lastId = state.items[size-1]['id'];

            const newTenis = action.payload;
            newTenis['id'] = lastId+1;
            newTenis['img'] = "tenis4.jpg";
            state.items.push(newTenis);
        },
        removeFromStore(state, action) {
            const nextItems = state.items.filter(
                item => item.id !== action.payload
            )
            state.items = nextItems;
        },
        changeProduct(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            state.items.splice(index,1,action.payload)
        },

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
        },
        [updateProduct.fulfilled]: (state, action) => {
            changeProduct(state,action.payload)
        },
        [addNewProduct.fulfilled]: (state, action) => {
            changeProduct(state,action.payload)
        },
    }
});

export const { addToStore, removeFromStore, changeProduct } = productsSlice.actions;
export default productsSlice.reducer;