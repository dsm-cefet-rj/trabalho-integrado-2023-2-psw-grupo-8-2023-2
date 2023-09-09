import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data";

export default function ProductDetails() {
  const { id } = useParams()
  const idInt = parseInt(id, 10)

  return (<>
    <div className='product'>
      <div className="image-container">
        <img className="responsive-image" src={PRODUCTS[(idInt - 1)].img} fluid="true" responsive="true" alt="productImage" />
      </div>
      <div className='description'>
        <p> <b> <h3>{PRODUCTS[(idInt - 1)].nome} </h3></b> </p>
        <p> <h4>R${PRODUCTS[(idInt - 1)].preço}</h4> </p>
        <p> <h4>Tipo: {PRODUCTS[(idInt - 1)].tipo}</h4> </p>
        <p> <h4>Id: {PRODUCTS[(idInt - 1)].id}</h4> </p>
      </div>
    </div>
  </>)
}