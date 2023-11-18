import React from "react";
import "./perfil.css"
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { string, object, number, setLocale } from 'yup';
import { useSelector } from "react-redux";
import { selectAllLogin} from "../../features/userSlice";


const Schema = object(
    {
        nome: string().required('Campo obrigatório'),
        email: string().required('Campo obrigatório').matches(/@/, 'O email deve conter o caractere "@"'),
        password: string().required('Campo obrigatório').min(4, 'A senha precisa ter pelo menos 4 caracteres'),
        cpf: string().required('Campo obrigatório').matches(/^\d{3}-\d{3}-\d{3}-\d{2}$/,'O campo deve seguir o formato: 123-456-789-10')
    }
); 
export const Perfil = () => {
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

    
    const user = useSelector(selectAllLogin);
    console.log(user[0].cpf)
    console.log(user[0].id)


    return (
        <main>
            <div className="perfil">
                <form id="profile-form" onSubmit={onSubmit(handleSubmit)}>
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder={user[0].username}
                        required=""
                        {...register('nome')}
                    />
                    <div className='erro'>{msgN}</div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder={user[0].email}
                        required=""
                        {...register('email')}
                    />
                    <div className='erro'>{msgE}</div>

                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder={user[0].cpf}
                        required=""
                        {...register('cpf')}
                    />
                    <div className='erro'>{msgC}</div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*******"
                        required=""
                        {...register('password')}
                    />
                    <div className='erro'>{msgP}</div>
                    <button type="submit">Atualizar Dados</button>
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