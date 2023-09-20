import React from "react";
import { Product } from "./product"
import { PRODUCTS } from '../../data';
import "./main.css"
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Main = () => {
    const { items, status } = useSelector((state) => state.products);
    
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
