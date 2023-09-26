import "./finalizarCompra.css"
import React from "react";
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
export const FinalizarCompra = () => {
    const cart = useSelector((state) => state.cart);


    return (
        <div className="container-compra">
            <h1>Selecionar Método de Pagamento</h1>
            <div className="payment-options">
                <div className="payment-option">
                    <div className="payment-icon">
                        {/* Ícone de cartão de crédito, você pode usar uma imagem aqui */}
                        <Image src={require(`../../images/cartao.png`)} alt="Cartão de Crédito" fluid />
                    </div>
                    <div className="payment-title">Cartão de Crédito</div>
                </div>
                <div className="payment-option">
                    <div className="payment-icon">
                        {/* Ícone do PayPal, você pode usar uma imagem aqui */}
                        <Image src={require(`../../images/paypal.png`)} alt="PayPal" fluid />
                    </div>
                    <div className="payment-title">PayPal</div>
                </div>
                <div className="payment-option">
                    <div className="payment-icon">
                        {/* Ícone do PayPal, você pode usar uma imagem aqui */}
                        <Image src={require(`../../images/pix.png`)} alt="PayPal" fluid />

                    </div>
                    <div className="payment-title">Pix</div>
                </div>

            </div>
            <div className="cart-items">
                {cart.cartItems &&
                    cart.cartItems.map((cartItem) => (
                        <Row className="FinalizarCompra" key={cartItem.id}>

                            <Col className="compra-product">
                                <div className='compra-nome'>
                                    <h3 id="item-nome">{cartItem.nome}</h3>
                                </div>
                            </Col>
                            <Col className="compra-product-price" justify-content-center > <p>R${cartItem.preço}</p></Col>

                            <Col className="compra-product-quantity">
                                <div className="count">{cartItem.cartQuantity}</div>

                            </Col>
                            <Col className="compra-product-total-price">
                                <p>R${cartItem.preço * cartItem.cartQuantity}</p>
                            </Col>


                        </Row>
                    ))}
            </div>
            <div className='compra-total'>
                <span>Total </span>
                <span className='quantidade'>R$:{cart.cartTotalAmount}</span>
            </div>
            <div>
            <Button variant="dark">FINALIZAR COMPRA</Button>
            </div>
        </div>


    )
}