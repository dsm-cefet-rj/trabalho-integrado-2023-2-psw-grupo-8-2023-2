import "./cadastro.css"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { addUserServer } from "../../features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


export const  Cadastro = () => {

    const [newUsername, setNewUsername] = useState("");
    const handleUsername = (event) => {
        setNewUsername(event.target.value);
        console.log(newUsername)
    };

    const [newPassword, setNewPassword] = useState("");
    const handlePassword = (event) => {
        setNewPassword(event.target.value);
        console.log(newPassword)
    };

    const [newEmail, setNewEmail] = useState("");
    const handleEmail = (event) => {
        setNewEmail(event.target.value);
        console.log(newEmail)
    };
    
    const [newCpf, setNewCpf] = useState("");
    const handleCpf = (event) => {
        setNewCpf(event.target.value);
        console.log(newCpf)
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCadastro = (username, password, email, cpf) => {
        dispatch(addUserServer({ "username": username, "password": password, "email":email, "cpf":cpf }));
        navigate('/Login')
        //navigate('/Perfil')
    };



    return (
        <section>
            <div className="container">
                <h2>Fazer Cadastro</h2>
                <hr />
                <div id="cade">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input
                                onChange={handleUsername}
                                type="text"
                                className="form-control"
                                placeholder="Nome de usuário*" required
                            />
                        </div>
                        <div className="col-12">
                            <input
                                onChange={handleEmail}
                                type="email"
                                className="form-control"
                                placeholder="Endereco de E-mail*" required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                onChange={handleCpf}
                                type="text"
                                className="form-control"
                                placeholder="CPF*" required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                onChange={handlePassword}
                                type="password"
                                className="form-control"
                                placeholder="Senha*" required
                            />
                        </div>
                        <p id="field">(*) Campos Obrigatórios</p>
                        <hr />
                        <div id="botao">
                            <button onClick={() => handleCadastro(newUsername, newPassword, newEmail, newCpf)} type="submit" id="out">
                                CADASTRAR-SE
                            </button>
                            <p>
                                Já é cadastrado?{" "}
                                <Link to="/Login" id="ent">
                                    ENTRAR
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Cadastro