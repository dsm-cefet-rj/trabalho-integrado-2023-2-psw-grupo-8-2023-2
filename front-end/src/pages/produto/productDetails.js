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


      <Container fluid="true">
        <div class="container-fluid">
          <div class="buy d-block">
            <div class="text-center">
              <Link to="/Carrinho" ><button onClick={() => handleAddToCart(product)} type="button">ADICIONAR AO CARRINHO</button></Link>
            </div>
          </div>
        </div>
      </Container>


      <Container fluid="true">
        <div class="container-fluid">
          <h3>Tamanho: {product.tamanho}</h3>
          <h3>Descrição do Produto</h3>
          <h1> </h1>
          <p>{product.desc}</p>
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
                <Row key={index} style={{ border: "2px solid #000", padding: "10px", marginBottom: "10px", borderRadius: "10px", marginTop: "5px"}}>
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
                      <div style={{overflowWrap:"break-word"}}>
                        {comment}
                        {/* <button onClick={() => handleEdit(index)}>Editar</button> */}
                      </div>
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