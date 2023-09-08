import React from "react";
import { Product } from "./product"
import { PRODUCTS } from '../../data';
import "./main.css"
import { Container } from "react-bootstrap";


export const Main = (props) => {
    return (
        <Container fluid="true">
            <h1>NOVIDADES</h1>
            <div className="products">
                {PRODUCTS.map((product, key) => <Product data={product} />)}
            </div>
            <h1>MAIS VENDIDOS</h1>
        </Container>
    );
}
