import React from 'react'


export const ProductsFilter = (props) => {
    const { id, nome, preço, img, tipo } = props.data
    console.log(props.tipo)
    if (tipo === props.tipo) {
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
    if (props.tipo === 'todos os produtos') {
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
}