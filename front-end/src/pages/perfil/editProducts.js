import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./editProducts.css";
import Image from 'react-bootstrap/Image';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromStore, changeProductNome, changeProductPreço, changeProductDesc  } from "../../features/productsSlice";


export const EditProducts = () => {
    const { items, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const[newNome, setNewNome] = useState("");
    const handleChangeNome = (event) => {
        setNewNome(event.target.value);
    };
    const handleChangeProductNome = (nome,id) => {
        const newProduto = {"id":id,"nome":nome}
        dispatch(changeProductNome(newProduto));
    };
    const handleRemoveFromStore = (id) => {
        dispatch(removeFromStore(id));
    };


    const[newPreço, setNewPreço] = useState("");

    const handleChangePreço = (event) => {
        setNewPreço(event.target.value);
    };

    const handleChangeProductPreço = (preço,id) => {
        const newProduto = {"id":id,"preço":preço}
        dispatch(changeProductPreço(newProduto));
    };


    const[newDesc, setNewDesc] = useState("");

    const handleChangeDesc = (event) => {
        setNewDesc(event.target.value);
    };

    const handleChangeProductDesc = (desc,id) => {
        const newProduto = {"id":id,"desc":desc}
        dispatch(changeProductDesc(newProduto));
    };




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
                                    <input onChange={handleChangeNome} type='text' placeholder={product.nome}></input>
                                    <Container>
                                    <button onClick={() => handleChangeProductNome(newNome,product.id)} >Editar Nome</button>
                                    </Container>
                                    </Container>
                                    <Container>
                                    <textarea onChange={handleChangeDesc} class="wideInput" id="descrição" >{product.desc}</textarea>
                                    </Container>
                                    <Container>
                                    <button onClick={() => handleChangeProductDesc(newDesc,product.id)} >Editar descrição</button>
                                    </Container>

                                    <Container>
                                    <button onClick={() => handleRemoveFromStore(product.id)} id='remover' >
                                        Remover
                                    </button>
                                    </Container>
                                </div>
                            </Col>

                            <Col className="cart-product-price" >
                                <input onChange={handleChangePreço} type='text' placeholder={product.preço}></input>
                                <button onClick={() => handleChangeProductPreço(newPreço,product.id)}>Editar Preço</button>
                            </Col>


                        </Row>
                    </div>)}
            </div>
        </>
    )
}