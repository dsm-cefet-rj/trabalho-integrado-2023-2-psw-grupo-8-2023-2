import React from 'react'

export const Product = (props) => {
  const { id, nome, preço, img } = props.data
  return (
    <div className='product'>
      <div className="image-container">
        <img className="responsive-image" src={img} fluid="true" responsive="true" alt="productImage" />
      </div>
      <div className='description'>
        <p> <b> {nome} </b> </p>
        <p> R${preço} </p>
      </div>
    </div>
  )
}