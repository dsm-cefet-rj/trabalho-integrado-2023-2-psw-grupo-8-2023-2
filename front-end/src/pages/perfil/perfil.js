import React, { useState, useEffect } from 'react';
import "./perfil.css"
import { Link, Navigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { string, object, number, setLocale } from 'yup';
import { useSelector } from "react-redux";
import { selectAllLogin } from "../../features/userSlice";
import { useNavigate } from 'react-router-dom';
import { updateUserServer, loginServer, deleteUserServer } from "../../features/userSlice";
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromStore, updateProduct, productsFetch, removeProduct} from "../../features/productsSlice";

/* 
const Schema = object(
    {
        nome: string().required('Campo obrigatório'),
        email: string().required('Campo obrigatório').matches(/@/, 'O email deve conter o caractere "@"'),
        password: string().required('Campo obrigatório').min(4, 'A senha precisa ter pelo menos 4 caracteres'),
        cpf: string().required('Campo obrigatório').matches(/^\d{3}-\d{3}-\d{3}-\d{2}$/,'O campo deve seguir o formato: 123-456-789-10')
    }
); 
*/
export const Perfil = () => {
    /* 
    const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Schema) });
    let msgN = '';
    let msgE = '';
    let msgP = '';
    let msgC = '';
    console.log(msgE)
    console.log(msgP)
    

    
    if (errors && errors.nome && errors.cpf.message) {
        msgN = errors.nome.message
    }
    if (errors && errors.email && errors.email.message) {
        msgE = errors.email.message
    }
    if (errors && errors.password && errors.password.message) {
        msgP = errors.password.message
    }
    if (errors && errors.cpf && errors.cpf.message) {
        msgC = errors.cpf.message
    }
    const handleSubmit = (data: any) => {
        console.log(data);
    }
    */


    const user = useSelector(selectAllLogin);




    const status = useSelector(state => state.logins.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [editingUsername, setEditingUsername] = useState(false);
    const [username, setUsername] = useState(user[0].username); // Nome de usuário inicial

    const handleEditUsername = () => {
        setEditingUsername(true);
    };

    const handleSaveUsername = () => {
        setEditingUsername(false);
        dispatch(updateUserServer({ "username": username, "id": user[0].id }));
        // Lógica para salvar as alterações (pode incluir um dispatch se estiver usando Redux)
    };
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };


    const [editingEmail, setEditingEmail] = useState(false);
    const [email, setEmail] = useState(user[0].email); // Nome de usuário inicial

    const handleEditEmail = () => {
        setEditingEmail(true);
    };

    const handleSaveEmail = () => {
        setEditingEmail(false);
        dispatch(updateUserServer({ "email": email, "id": user[0].id }));
        // Lógica para salvar as alterações (pode incluir um dispatch se estiver usando Redux)
    };
    const handleInputChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    

    const handleExcluirConta = () => {
        const superId = user[0].id
        console.log(superId)
        if(status1 !== null) {
            items.filter(product => product.userId === user[0].id).map((product, key) => {
                dispatch(removeProduct({"id":product.id}));
            })
        }
        dispatch(deleteUserServer({"id": superId}));
        navigate('/')

    }

    const { items, status1 } = useSelector((state) => state.products);




    if (status !== "logged_in") {
        return <Navigate to="/Login" />;
    } else {
        return (
            <main>
                <div className="perfil">
                    <form id="profile-form" >
                        <div>
                            <p>Nome de usuário: {username}</p>
                            {editingUsername ? (
                                <div>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={handleInputChange}
                                    />
                                    <button onClick={handleSaveUsername}>Salvar</button>
                                </div>
                            ) : (
                                <button onClick={handleEditUsername}>Alterar nome de usuário</button>
                            )}
                        </div>




                        <div>
                            <p>Endereço do email: {email}</p>
                            {editingEmail ? (
                                <div>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={handleInputChangeEmail}
                                    />
                                    <button onClick={handleSaveEmail}>Salvar</button>
                                </div>
                            ) : (
                                <button onClick={handleEditEmail}>Alterar endereço de Email</button>
                            )}
                        </div>

                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder={user ? user[0].cpf : 'Usuario nao carregado'}
                            required=""
                        />

                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="*******"
                            required=""
                        />

                        <button onClick={handleExcluirConta}>Excluir minha conta</button>

                    </form>
                    <div className="produtos">
                        <a href="adicionarVenda.html">
                            <Link to="/AdicionarVenda"><button>Adicionar produtos a venda</button></Link>
                        </a>
                        <a href="#">
                            <Link to="/MeusProdutos"><button>Ver meus produtos</button></Link>
                        </a>
                    </div>
                </div>
            </main>
        )
    }


}