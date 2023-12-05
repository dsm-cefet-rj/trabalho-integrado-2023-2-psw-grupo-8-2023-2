import "./cadastro.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { addUserServer } from "../../features/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newCpf, setNewCpf] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUsername = (event) => {
        setNewUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setNewPassword(event.target.value);
    };

    const handleEmail = (event) => {
        setNewEmail(event.target.value);
    };

    const handleCpf = (event) => {
        setNewCpf(event.target.value);
    };

    const handleCadastro = () => {
        if (!newUsername || !newPassword || !newEmail || !newCpf) {
            setError("Todos os campos são obrigatórios");
            return;
        }

        dispatch(addUserServer({ "username": newUsername, "password": newPassword, "email": newEmail, "cpf": newCpf }));
        navigate('/Login');
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
                                placeholder="Nome de usuário*"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <input
                                onChange={handleEmail}
                                type="email"
                                className="form-control"
                                placeholder="Endereco de E-mail*"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                onChange={handleCpf}
                                type="text"
                                className="form-control"
                                placeholder="CPF*"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                onChange={handlePassword}
                                type="password"
                                className="form-control"
                                placeholder="Senha*"
                                required
                            />
                        </div>
                        <p id="field">(*) Campos Obrigatórios</p>
                        <hr />
                        <div id="botao">
                            <button onClick={handleCadastro} type="button" id="out">
                                CADASTRAR-SE
                            </button>
                            <p>{error && <span style={{ color: 'red' }}>{error}</span>}</p>
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
    );
};

export default Cadastro;
