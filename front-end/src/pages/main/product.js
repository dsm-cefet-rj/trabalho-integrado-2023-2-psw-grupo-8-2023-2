import React from 'react'
import { Link } from 'react-router-dom'

export const Product = (props) => {
  const { id, nome, preço, img, tamanho } = props.data

  return (
    <Link to={`/Produto/${id}`}>
    <div className='product'>
      <div className="image-container">
        <img className="responsive-image" src={require(`../../images/${img}`)} fluid="true" responsive="true" alt="productImage" />
      </div>
      <div className='description'>
        <p> <b> {nome} </b> </p>
        <p> R${preço}</p>
        <p>Tamanho: {tamanho}</p>
      </div>
    </div>
    </Link>
  )
}