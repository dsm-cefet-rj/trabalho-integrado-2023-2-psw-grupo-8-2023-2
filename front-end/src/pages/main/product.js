import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data';

export const Product = (props) => {
  const { id, nome, preço, img } = props.data

  return (
    <Link to={`/Produto/${id}`}>
    <div className='product'>
      <div className="image-container">
        <img className="responsive-image" src={require(`../../images/${img}`)} fluid="true" responsive="true" alt="productImage" />
      </div>
      <div className='description'>
        <p> <b> {nome} </b> </p>
        <p> R${preço}</p>
      </div>
    </div>
    </Link>
  )
}