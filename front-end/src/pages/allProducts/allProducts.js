import React from 'react'
import Container from 'react-bootstrap/Container';
import { ProductsFilter } from "./productsFilter"
import { useParams } from 'react-router-dom';
import "./allProducts.css"
import { useSelector } from "react-redux";


export const AllProducts = () => {
    const tipo = useParams().tipo
    const { items, status } = useSelector((state) => state.products);
    return (
        <Container fluid="true">
            <h1>{tipo.toUpperCase()}</h1>
            <div className="products">
                {items.map((product, key) => <ProductsFilter data={product} tipo={tipo}/>)}
            </div>
        </Container>
    );
}