import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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

export const updateProductNome = createAsyncThunk(
    "products/udateProductNome",
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
            return new Error ("Erro ao atualizar nome do produto")
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToStore(state, action) {
            const lastId = state.items.length + 1;
            const newTenis = action.payload;
            newTenis['id'] = lastId;
            newTenis['img'] = "tenis4.jpg";
            state.items.push(newTenis);
        },
        removeFromStore(state, action) {
            const nextItems = state.items.filter(
                item => item.id !== action.payload
            )
            state.items = nextItems;
        },
        changeProductNome(state, action) {

            const index = state.items.findIndex((item) => item.id === action.payload.id)
            const tipo = state.items[index]['tipo'];
            const id = action.payload.id;
            const preço = state.items[index]['preço'];
            const img = state.items[index]['img'];
            const desc = state.items[index]['desc'];
            const tamanho = state.items[index]['tamanho'];
            const newTenis = {}
            newTenis['tipo'] = tipo;
            newTenis['id'] = id;
            newTenis['nome'] = action.payload.nome;
            newTenis['preço'] = preço;
            newTenis['img'] = img;
            newTenis['desc'] = desc;
            newTenis['tamanho'] = tamanho;
            state.items.splice(index,1,newTenis)
        },
        changeProductPreço(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            state.items[index]["preço"] = action.payload.preço;
        },
        changeProductDesc(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            state.items[index]["desc"] = action.payload.desc;
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
        [updateProductNome.fulfilled]: (state, action) => {
            changeProductNome(state,action.payload)
        },
    }
});

export const { addToStore, removeFromStore, changeProductNome, changeProductPreço, changeProductDesc } = productsSlice.actions;
export default productsSlice.reducer;