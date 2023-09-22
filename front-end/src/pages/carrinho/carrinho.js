import React from 'react';
import "./carrinho.css"
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import PageFooter from './PageFooter';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const Carrinho = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <div className="CarrinhoTitulo">
                <h2><strong>Carrinho de compras</strong></h2>
            </div>
            <Container fluid>
                <main id="products">
                    {cart.cartItems.length === 0 ? (
                        <>
                            <p style={{ textAlign: 'center' }} ><b>Carrinho Vazio</b></p>
                            <div className="start-shopping">
                                <Link to="/"> Pagina Inicial </Link>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div className="row" id='titulos'>
                                <h3 className="col">Produto</h3>
                                <h3 className="col">Preço</h3>
                                <h3 className="col">Quantidade</h3>
                                <h3 className="col">Total</h3>
                            </div>

                            <div className="cart-items">
                                {cart.cartItems &&
                                    cart.cartItems.map((cartItem) => (
                                        <Row className="MyProduct" key={cartItem.id}>

                                            <Col className="cart-product">
                                            <Image src={require(`../../images/${cartItem.img}`)}  id='cart-product-image' fluid />
                                                <div className='nome-remove'>
                                                    <h3 id="item-nome">{cartItem.nome}</h3>
                                                    <button id='remover'>
                                                        Remover
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col className="cart-product-price" justify-content-center > <p>$100{cartItem.price}</p></Col>

                                            <Col className="cart-product-quantity">
                                                <button>
                                                    +
                                                </button>
                                                <div className="count">{cartItem.cartQuantity}</div>
                                                <button>-</button>

                                            </Col>
                                            <Col className="cart-product-total-price">
                                                <p>R${cartItem.preço * cartItem.cartQuantity}</p>
                                            </Col>

                                        
                                        </Row>
                                    ))}
                            </div>

                            <div className='cart-summary'>
                                <button className='clear-cart'>Limpar Carrinho</button>
                                <div className='cart-comprar'>
                                    <div className='cart-total'>
                                        <span>Total</span>
                                        <span className='quantidade'>${cart.cartTotalAmount}</span>
                                    </div>
                                    <button> Finalizar Compra </button>
                                </div>
                            </div>

                        </div>
                    )}
                </main>
            </Container>
        </>
    )
}
