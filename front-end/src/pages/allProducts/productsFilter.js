import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { productsFetch } from "../../features/productsSlice";

export const ProductsFilter = (props) => {
    const { id, nome, preço, img, tipo, tamanho } = props.data


    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch da ação quando o componente é montado
        dispatch(productsFetch());
    
        // O retorno da função de useEffect é chamado quando o componente é desmontado
        return () => {
          // Qualquer limpeza que precisa ser feita quando o componente é desmontado
        };
      }, []); 

    
    if (tipo === props.tipo) {
        return (
            <Link to={`/Produto/${id}`}>
            <div className='product'>
                <div className="image-container">
                    <img className="responsive-image" src={require(`../../images/${img}`)} fluid="true" responsive="true" alt="productImage" />
                </div>
                <div className='description'>
                    <p> <b> {nome} </b> </p>
                    <p> R${preço} </p>
                    <p> Tamanho: {tamanho} </p>
                </div>
            </div>
            </Link>
        )
    }
    if (props.tipo === 'todos os produtos') {
        return (
            <Link to={`/Produto/${id}`}>
            <div className='product'>
                <div className="image-container">
                    <img className="responsive-image" src={require(`../../images/${img}`)} fluid="true" responsive="true" alt="productImage" />
                </div>
                <div className='description'>
                    <p> <b> {nome} </b> </p>
                    <p> R${preço} </p>
                    <p> Tamanho: {tamanho} </p>
                </div>
            </div>
            </Link>
        )
    }
}