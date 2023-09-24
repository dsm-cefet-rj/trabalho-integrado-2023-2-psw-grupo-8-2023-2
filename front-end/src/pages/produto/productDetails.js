import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './productDetails.css';
import Image from 'react-bootstrap/Image';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import { productsFetch } from "../../features/productsSlice";
import { addComment, removeComment } from "../comentario/comentario";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  // const {newComment,setNewComment} = useState('');
  const msg = useSelector((state) => state.comment.comments)
  console.log(msg)
  const [comment, setComment] = useState(""); // Inicializa o estado do input com uma string vazia

  console.log(status);

  const { id } = useParams()
  const product = items.find((element) => element.id == id);

  const handleCommentChange = (e) => {
    setComment(e.target.value); // Atualiza o estado do input com o valor do campo de texto
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode despachar a action para adicionar a mensagem ao estado do Redux,
    // incluindo o id do produto associado.
    dispatch(addComment({ productId: product.id, comment }));
    setComment("");
  };

  const handleRemoveComment = (productId, index) => {
    // Aqui você pode despachar uma ação para remover o comentário do estado do Redux.
    dispatch(removeComment({ productId, index }));
  };

  // const handleEditComment = (productId, index) => {
  //   // Aqui você pode despachar uma ação para editar o comentário do estado do Redux.
  //   dispatch(editComment({ productId, index, editedComment }));
  // };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedComment, setEditedComment] = useState("");

  // const handleEdit = (index) => {
  //   setEditingIndex(index);
  //   setEditedComment(msg[index]);
  // };

  // const handleSaveEdit = (index) => {
  //   // Aqui você pode despachar uma ação para editar o comentário no estado Redux.
  //   dispatch(editComment({ index, editedComment }));
  //   setEditingIndex(-1);
  //   setEditedComment("");
  // };

  if (status === "pending" || status == "null") {
    return (<div>LOADING</div>)
  } else {
    return (<>
      <Container>
        <h3><b>{product.nome}</b></h3>
      </Container>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Image src={require(`../../images/${product.img}`)} fluid />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={require(`../../images/${product.img}`)} fluid />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={require(`../../images/${product.img}`)} fluid />
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
              <Link to="/Carrinho"><button onClick={() => handleAddToCart(product)} type="button">ADICIONAR AO CARRINHO</button></Link>
            </div>
          </div>
        </div>
      </Container>


      <Container fluid="true">
        <div class="container-fluid">
          <h3>Descrição do Produto</h3>
          <p>{product.desc}</p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        </div>
      </Container>

      <Container fluid="true">
        <h3>Avaliações</h3>
        <form onSubmit={handleSubmit}>
          <h4>Adicione um comentário!</h4>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
          />
          <button type="submit">Enviar</button>
        </form>

        <Container fluid="true">
          <div>
            <Col>
              {msg[product.id] && msg[product.id].map((comment, index) => (
                <Row key={index} style={{ border: "2px solid #000", padding: "10px", marginBottom: "10px" }}>
                  {index === editingIndex ? (
                    <>
                      {/* <input
                      type="text"
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                    />
                    <button onClick={() => handleSaveEdit(index)}>Salvar</button> */}
                    </>
                  ) : (
                    <>
                      {comment}
                      {/* <button onClick={() => handleEdit(index)}>Editar</button> */}
                    </>
                  )}
                  <button onClick={() => handleRemoveComment(product.id, index)}>Remover</button>
                </Row>
              ))}
            </Col>
          </div>
        </Container>
      </Container>
    </>)
  }
}