import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./editProducts.css";
import Image from 'react-bootstrap/Image';


export const EditProducts = () => {
    const { items, status } = useSelector((state) => state.products);

    return (
        <>
            <h1>MEUS PRODUTOS</h1>
            <div className="products">
                {items.map((product, key) =>
                    <div>
                        <Row className="MyProduct" key={product.id}>
                            <Col className="cart-product">
                                <Image src={require(`../../images/${product.img}`)} id='cart-product-image' fluid />
                                <div className='nome-remove'>
                                    <Container>
                                    <input type='text' placeholder={product.nome}></input>
                                    <Container>
                                    <button>Editar Nome</button>
                                    </Container>
                                    </Container>
                                    <Container>
                                    <textarea class="wideInput" id="descrição" >{product.desc}</textarea>
                                    </Container>
                                    <Container>
                                    <button >Editar descrição</button>
                                    </Container>
                                    
                                    <Container>
                                    <button id='remover' >
                                        Remover
                                    </button>
                                    </Container>
                                </div>
                            </Col>

                            <Col className="cart-product-price" >
                                <input type='text' placeholder={product.preço}></input>
                                <button>Editar Preço</button>
                            </Col>




                        </Row>
                    </div>)}
            </div>
        </>
    )
}