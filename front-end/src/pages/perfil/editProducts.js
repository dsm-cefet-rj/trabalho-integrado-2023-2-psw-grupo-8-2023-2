import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./editProducts.css";
import Image from 'react-bootstrap/Image';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromStore, updateProduct, productsFetch, removeProduct} from "../../features/productsSlice";
import { useEffect } from 'react';
import { selectAllLogin} from "../../features/userSlice";
import { useNavigate, Navigate } from 'react-router-dom';

export const EditProducts = () => {


    const { items, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const[newNome, setNewNome] = useState("");
    const handleChangeNome = (event) => {
        setNewNome(event.target.value);
    };


    useEffect(() => {
        // Dispatch da ação quando o componente é montado
        dispatch(productsFetch());
    
        // O retorno da função de useEffect é chamado quando o componente é desmontado
        return () => {
          // Qualquer limpeza que precisa ser feita quando o componente é desmontado
        };
      }, []); 
    
    

    const user = useSelector(selectAllLogin);

    const handleChangeProductNome = (novaPropriedade,id,propriedade) => {
        const index = items.findIndex((item) => item.id === id)
        const tipo = items[index]['tipo'];
        const prop = propriedade;
        if(prop==="nome"){
            const preço = items[index]['preço'];
            const img = items[index]['img'];
            const desc = items[index]['desc'];
            const tamanho = items[index]['tamanho'];
            dispatch(updateProduct({"id":id,"nome":novaPropriedade,'tipo':tipo,'preço':preço,'img':img,'desc':desc,'tamanho':tamanho, 'userId':user[0].id}));
        }

        if(prop==="desc"){
            const preço = items[index]['preço'];
            const img = items[index]['img'];
            const nome = items[index]['nome'];
            const tamanho = items[index]['tamanho'];
            dispatch(updateProduct({"id":id,"nome":nome,'tipo':tipo,'preço':preço,'img':img,'desc':novaPropriedade,'tamanho':tamanho,'userId':user[0].id}));
        }
        if(prop==="preço"){
            const nome = items[index]['nome'];
            const img = items[index]['img'];
            const desc = items[index]['desc'];
            const tamanho = items[index]['tamanho'];
            dispatch(updateProduct({"id":id,"nome":nome,'tipo':tipo,'preço':novaPropriedade,'img':img,'desc':desc,'tamanho':tamanho, 'userId':user[0].id}));
        }
    };

    const handleRemoveFromStore = (id) => {
        dispatch(removeProduct({"id":id}));
    };

    const[newPreço, setNewPreço] = useState("");

    const handleChangePreço = (event) => {
        setNewPreço(event.target.value);
    };

    const[newDesc, setNewDesc] = useState("");

    const handleChangeDesc = (event) => {
        setNewDesc(event.target.value);
    };



    const status1 = useSelector(state => state.logins.status);

    const navigate = useNavigate();

    if (status1 !== "logged_in") {
        return <Navigate to="/Login" />;
    } else {
        return (
            <>
                <h1>MEUS PRODUTOS</h1>
                <div className="products">
                    {items.filter(product => product.userId === user[0].id).map((product, key) =>
                        <div>
                            <Row className="MyProduct" key={product.id}>
                                <Col className="cart-product">
                                    <Image src={require(`../../images/${product.img}`)} id='cart-product-image' fluid />
                                    <div className='nome-remove'>
                                        <Container>
                                        <input onChange={handleChangeNome} type='text' placeholder={product.nome}></input>
                                        <Container>
                                        <button onClick={() => handleChangeProductNome(newNome,product.id,"nome")} >Editar Nome</button>
                                        </Container>
                                        </Container>
                                        <Container>
                                        <textarea onChange={handleChangeDesc} class="wideInput" id="descrição" >{product.desc}</textarea>
                                        </Container>
                                        <Container>
                                        <button onClick={() => handleChangeProductNome(newDesc,product.id,"desc")} >Editar descrição</button>
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
                                    <button onClick={() => handleChangeProductNome(newPreço,product.id,"preço")}>Editar Preço</button>
                                </Col>
    
    
                            </Row>
                        </div>)}
                </div>
            </>
        )
    }
}