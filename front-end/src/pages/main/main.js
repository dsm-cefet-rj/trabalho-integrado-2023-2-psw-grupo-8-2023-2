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
        dispatch(productsFetch());
      }, [items]);

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
