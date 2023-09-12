import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../allProducts/allProducts.css"


export default function ProductDetails() {
  const { id } = useParams()
  const idInt = parseInt(id, 10)

  return (<>
  <br></br>
  <Container fluid="true">
    <div className='product'>
      <div className="image-container">
        <img className="responsive-image" src={PRODUCTS[(idInt - 1)].img} fluid="true" responsive="true" alt="productImage" />
      </div>
      <div className='description'>
        <p> <b> {PRODUCTS[(idInt - 1)].nome} </b> </p>
        <p><h4>R${PRODUCTS[(idInt - 1)].preço}</h4></p>
        <p><h4>Tipo: {PRODUCTS[(idInt - 1)].tipo}</h4></p>
        <h4>Id: {PRODUCTS[(idInt - 1)].id}</h4>
      </div>
    </div>
    </Container>
  </>)
}