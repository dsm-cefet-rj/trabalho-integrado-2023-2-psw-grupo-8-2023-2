import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { loginServer } from "../../features/userSlice";
import { Link } from 'react-router-dom';

/*
const Schema = object(
    {
        email: string().required('Campo obrigatório').matches(/@/, 'O email deve conter o caractere "@"'),
        password: string().required('Campo obrigatório').min(4, 'A senha precisa ter pelo menos 4 caracteres'),
    }
);
*/
export const Login = () => {
    /*
    const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Schema) });
    let msgE = '';
    let msgP = '';
    if (errors && errors.email && errors.email.message) {
        msgE = errors.email.message
    }
    if (errors && errors.password && errors.password.message) {
        msgP = errors.password.message
    }

    const handleSubmit = (data: any) => {
        console.log(data);
    }
    */

    

    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const handleLogin = (username, password) => {
        dispatch(loginServer({ "username": username, "password": password }));
        //navigate('/Perfil')
    };

    const status = useSelector(state => state.logins.status);


    useEffect(() => {
                if (status === 'logged_in' ) {
                    navigate('/Perfil');
                }
            }, [status])


    return (
        <section>
            <div id="log">
                <div id="content">
                    <h2>Fazer Login</h2>
                        <div className="col-md-8">
                            <input
                                onChange={handleUsername}
                                type="text"
                                className="form-control"
                                placeholder="Digite seu nome de usuario"
                            />

                        </div>
                        <div className="col-md-8">
                            <input
                                onChange={handlePassword}
                                type="password"
                                className="form-control"
                                placeholder="Digite a senha"

                            />

                        </div>
                        <div>
                            <button onClick={() => handleLogin(newUsername, newPassword)} type="submit" id="in">
                                Entrar
                            </button>
                        </div>{" "}
                        <hr />
                    <p id="astro">
                        Cadastre-se{" "}
                        <Link to="/Cadastro" id="cad">
                            AQUI
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

