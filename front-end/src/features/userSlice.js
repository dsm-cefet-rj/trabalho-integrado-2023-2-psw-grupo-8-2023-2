import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpPost, httpPut, httpDelete} from '../utils'

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});


export const loginServer = createAsyncThunk('/users/loginserver', async (login) => {
    return await httpPost(`http://localhost:3004/usuario/login`, login);
});

export const addUserServer = createAsyncThunk('user/addUserServer', async (cadastro) => {
    return await httpPost(`http://localhost:3004/usuario/signup`, cadastro);
});

export const updateUserServer = createAsyncThunk('user/updateUserServer', async (user, {getState}) => {
    return await httpPut(`http://localhost:3004/usuario/update`, user, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});


export const deleteUserServer = createAsyncThunk('user/deleteUserServer', async (user,{getState}) => {
    return await httpDelete(`http://localhost:3004/usuario/deleteUser`, user, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});





export const loginSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
       [loginServer.pending]: (state, action) => {state.status = 'trying_login'},
       [loginServer.fulfilled]: (state, action) => {state.status = 'logged_in'; loginAdapter.addOne(state, action.payload); state.currentToken = action.payload.token },
       [updateUserServer.fulfilled]: (state, action) => {state.status = 'logged_in';loginAdapter.upsertOne(state, action.payload);},
       [deleteUserServer.fulfilled]: (state, action) => {state.status = 'not_loaded'; loginAdapter.removeAll(state, action.payload); state.currentToken = null}
       
    },
})


export const {
    selectAll: selectAllLogin,
} = loginAdapter.getSelectors((state) => state.logins);

export default loginSlice.reducer