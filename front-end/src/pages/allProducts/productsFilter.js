import React from 'react'
import { Link } from 'react-router-dom'


export const ProductsFilter = (props) => {
    const { id, nome, preço, img, tipo } = props.data
    console.log(props.tipo)
    if (tipo === props.tipo) {
        return (
            <Link to={`/Produto/${id}`} className='product'>
            <div className='product'>
                <div className="image-container">
                    <img className="responsive-image" src={img} fluid="true" responsive="true" alt="productImage" />
                </div>
                <div className='description'>
                    <p> <b> {nome} </b> </p>
                    <p> R${preço} </p>
                </div>
            </div>
            </Link>
        )
    }
    if (props.tipo === 'todos os produtos') {
        return (
            <Link to={`/Produto/${id}`} className='product'>
            <div className='product'>
                <div className="image-container">
                    <img className="responsive-image" src={img} fluid="true" responsive="true" alt="productImage" />
                </div>
                <div className='description'>
                    <p> <b> {nome} </b> </p>
                    <p> R${preço} </p>
                </div>
            </div>
            </Link>
        )
    }
}