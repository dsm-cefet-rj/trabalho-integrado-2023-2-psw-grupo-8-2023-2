import React from 'react'
import Container from 'react-bootstrap/Container';
import { ProductsFilter } from "./productsFilter"
import { useParams } from 'react-router-dom';
import "./allProducts.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { productsFetch } from "../../features/productsSlice";

export const AllProducts = () => {
    const tipo = useParams().tipo
    const { items, status } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch da ação quando o componente é montado
        dispatch(productsFetch());
    
        // O retorno da função de useEffect é chamado quando o componente é desmontado
        return () => {
          // Qualquer limpeza que precisa ser feita quando o componente é desmontado
        };
      }, []); 


    return (
        <Container fluid="true">
            <h1>{tipo.toUpperCase()}</h1>
            <div className="products">
                {items.map((product, key) => <ProductsFilter data={product} tipo={tipo}/>)}
            </div>
        </Container>
    );
}