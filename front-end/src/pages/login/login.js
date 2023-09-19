import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addProjetoServer, updateProjetoServer, selectProjetosById } from '../ProjetosSlice'
import { projetoSchema } from '../ProjetoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { string, object, number, setLocale } from 'yup';

const Schema = object(
    {
        email: string().required().matches(/@/, 'O email deve conter o caractere "@"'),
        password: string().required().min(4, 'A senha precisa ter pelo menos 4 caracteres'),
    }
);

export const Login = () => {
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
    return (
        <section>
            <div id="log">
                <div id="content">
                    <h2>Fazer Login</h2>
                    <form className="row gy-4" onSubmit={onSubmit(handleSubmit)} >
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o enderco de e-mail"
                                {...register('email')} />
                            <div className='erro'>{msgE}</div>
                        </div>
                        <div className="col-md-8">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Digite a senha"
                                {...register('password')}
                            />
                            <div className='erro'>{msgP}</div>
                        </div>
                        <div>
                            <button type="submit" id="in">
                                Entrar
                            </button>
                        </div>{" "}
                        <hr />
                    </form>
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

