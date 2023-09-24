import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./editProducts.css";
import Image from 'react-bootstrap/Image';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromStore, changeProductNome, changeProductPreço, changeProductDesc } from "../../features/productsSlice";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { string, object, number, setLocale } from 'yup';

const Schema = object(
    {
        nome: string().required('Campo não pode ser nulo'),
        preco: string().required('Campo não pode ser nulo').matches(/^\d+$/, 'Somente números são permitidos'),
        desc: string().required('Campo não pode ser nulo')
    }
);

export const EditProducts = () => {
    const { register, handleSubmit: onSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(Schema) });
    let msgN = '';
    let msgP = '';
    let msgD = '';
    if (errors && errors.nome && errors.nome.message) {
        msgN = errors.nome.message
    }
    if (errors && errors.preco && errors.preco.message) {
        msgP = errors.preco.message
    }
    if (errors && errors.desc && errors.desc.message) {
        msgD = errors.desc.message
    }
    const handleSubmit = (data: any) => {
        console.log(data);
    }
    const { items, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const [newNome, setNewNome] = useState("");

    const handleChangeNome = (event) => {
        setNewNome(event.target.value);
    };

    const handleChangeProductNome = (nome, id) => {
        const newProduto = { "id": id, "nome": nome }
        dispatch(changeProductNome(newProduto));
    };

    const handleRemoveFromStore = (id) => {
        dispatch(removeFromStore(id));
    };


    const [newPreço, setNewPreço] = useState("");

    const handleChangePreço = (event) => {
        setNewPreço(event.target.value);
    };

    const handleChangeProductPreço = (preço, id) => {
        const newProduto = { "id": id, "preço": preço }
        dispatch(changeProductPreço(newProduto));
    };


    const [newDesc, setNewDesc] = useState("");

    const handleChangeDesc = (event) => {
        setNewDesc(event.target.value);
    };

    const handleChangeProductDesc = (desc, id) => {
        const newProduto = { "id": id, "desc": desc }
        dispatch(changeProductDesc(newProduto));
    };


    const [editProductId, setEditProductId] = useState(null);

    const handleStartEditN = (productId) => {
        setEditProductId(productId);
        const currentName = items.find(product => product.id === productId).nome;
        setValue('nome', currentName);
    };
    const handleStartEditP = (productId) => {
        setEditProductId(productId);
        const currentPreco = items.find(product => product.id === productId).preco;
        setValue('preco', currentPreco);
    };
    const handleStartEditD = (productId) => {
        setEditProductId(productId);
        const currentDesc = items.find(product => product.id === productId).desc;
        setValue('desc', currentDesc);
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
                                        {editProductId === product.id ? (
                                            <>
                                                <form onSubmit={onSubmit(handleSubmit)}>
                                                    <input {...register('nome')} onChange={handleChangeNome} type='text' placeholder={""} value={newNome}></input>
                                                    <div className='erro'>{msgN}</div>
                                                    <Container>
                                                        <button onClick={() => handleChangeProductNome(newNome, product.id)} >Salvar Nome</button>
                                                    </Container>
                                                </form>
                                            </>
                                        ) : (
                                            <div>
                                                {product.nome}
                                                <button onClick={() => handleStartEditN(product.id)}>
                                                    Editar Nome
                                                </button>
                                            </div>
                                        )}
                                    </Container>

                                    <Container>
                                        {editProductId === product.id ? (
                                            <>
                                                <form onSubmit={onSubmit(handleSubmit)}>
                                                    <input {...register('preco')} onChange={handleChangeDesc} type='text' placeholder={""} value={newDesc}></input>
                                                    <div className='erro'>{msgD}</div>
                                                    <Container>
                                                        <button onClick={() => handleChangeProductDesc(newDesc, product.id)} >Salvar descrição</button>
                                                    </Container>
                                                </form>
                                            </>
                                        ) : (
                                            <div>
                                                {product.desc}
                                                <button onClick={() => handleStartEditD(product.id)}>
                                                    Editar Descrição
                                                </button>
                                            </div>
                                        )}
                                    </Container>

                                    <Container>
                                        <button onClick={() => handleRemoveFromStore(product.id)} id='remover' >
                                            Remover
                                        </button>
                                    </Container>
                                </div>
                            </Col>


                            <Col className="cart-product-price" >
                                {editProductId === product.id ? (
                                    <>
                                        <form onSubmit={onSubmit(handleSubmit)}>
                                            <input {...register('preco')} onChange={handleChangePreço} type='text' placeholder={""} value={newPreço}></input>
                                            <div className='erro'>{msgP}</div>
                                            <Container>
                                                <button onClick={() => handleChangeProductPreço(newPreço, product.id)}>Salvar Preço</button>
                                            </Container>
                                        </form>
                                    </>
                                ) : (
                                    <div>
                                        {product.preço}
                                        <button onClick={() => handleStartEditP(product.id)}>
                                            Editar Preço
                                        </button>
                                    </div>
                                )}
                            </Col>




                        </Row>
                    </div>)}
            </div>
        </>
    )
}