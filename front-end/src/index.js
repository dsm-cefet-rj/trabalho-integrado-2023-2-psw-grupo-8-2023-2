
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer, { productsFetch } from './features/productsSlice';
import cartReducer, { getTotal } from './features/cartSlice';
import commentsReducer from './pages/comentario/comentario.js'
import loginReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    comment: commentsReducer,
    logins: loginReducer,
  },
});

store.dispatch(productsFetch())
store.dispatch(getTotal())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

