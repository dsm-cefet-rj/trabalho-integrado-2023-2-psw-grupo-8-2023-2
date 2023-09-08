import React from 'react'
import { PRODUCTS } from '../../data';
import Container from 'react-bootstrap/Container';
import { ProductsFilter } from "./productsFilter"
import { useParams } from 'react-router-dom';
import "./allProducts.css"

export const AllProducts = () => {
    const tipo = useParams().tipo
    
    return (
        <Container fluid="true">
            <h1>{tipo.toUpperCase()}</h1>
            <div className="products">
                {PRODUCTS.map((product, key) => <ProductsFilter data={product} tipo={tipo}/>)}
            </div>
        </Container>
    );
}