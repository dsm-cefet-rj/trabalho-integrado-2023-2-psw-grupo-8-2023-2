import React from "react";
import { Product } from "./product"
import "./main.css"
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { productsFetch } from "../../features/productsSlice";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";


export const Main = () => {
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
        <>
            <Container fluid="true">
                <h1>TODOS OS PRODUTOS</h1>
                <div className="products">
                    {items.map((product, key) => <Product data={product} />)}
                </div>
            </Container>
        </>
    );
}
