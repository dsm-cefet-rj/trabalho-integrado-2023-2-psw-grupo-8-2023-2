import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './productDetails.css';

export default function ProductDetails() {
  const { id } = useParams()
  const product = PRODUCTS.find((element) => element.id == id);

  return (<>
    <Container>
      <h3><b>{product.nome}</b></h3>
    </Container>

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={product.img} fluid="true"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={product.img} fluid="true"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={product.img} fluid="true"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container fluid="true" className="ac">
      <h3 className="justify-content-md-center align-items-center">Tamanhos</h3>
      <Row>
        <Col><button className="tamanho-button m-2">34</button></Col>
        <Col><button className="tamanho-button m-2">35</button></Col>
        <Col><button className="tamanho-button m-2">36</button></Col>
      </Row>
      <Row>
        <Col><button className="tamanho-button m-2">39</button></Col>
        <Col><button className="tamanho-button m-2">39,5</button></Col>
        <Col><button className="tamanho-button m-2">40</button></Col>
      </Row>
      <Row>
        <Col><button className="tamanho-button m-2">41</button></Col>
        <Col><button className="tamanho-button m-2">41,5</button></Col>
        <Col><button className="tamanho-button m-2">42</button></Col>
      </Row>
    </Container>

    <Container fluid="true" className="ac">
      <h3>Cores</h3>
      <Row>
        <Col><p>Preto</p>
          <input type="button" id="black" /></Col>
        <Col><p>Vermelho</p>
          <input type="button" id="red" /></Col>
        <Col><p>Verde</p>
          <input type="button" id="green" /></Col>
      </Row>
      <Row>
        <Col className=""><p>Azul</p>
          <input type="button" id="blue" /></Col>
        <Col><p>Branco</p>
          <input type="button" id="white" /></Col>
        <Col><p>Amarelo</p>
          <input type="button" id="yellow" /></Col>
      </Row>
      <Row>
        <Col><p>Rosa</p>
          <input type="button" id="pink" /></Col>
        <Col><p>Roxo</p>
          <input type="button" id="purple" /></Col>
        <Col><p>Laranja</p>
          <input type="button" id="orange" /></Col>
      </Row>
    </Container>

    <Container fluid="true">
      <div class="container-fluid">
        <div class="buy d-block">
          <div class="text-center">
            <button type="button">COMPRAR AGORA</button>
            <button type="button">ADICIONAR AO CARRINHO</button>
          </div>
        </div>
      </div>
    </Container>


    <Container fluid="true">
      <div class="container-fluid">
        <h3>Descrição do Produto</h3>
        <p>{product.desc}</p>
      </div>
    </Container>
  </>)
}