import React from "react";
import "./perfil.css"
import { Link } from "react-router-dom";



export const Perfil = () => {
    return (
        <main>
            <div className="perfil">
                <form id="profile-form">
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Seu nome de usuário"
                        required=""
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Seu endereço de email"
                        required=""
                    />
                    <label htmlFor="data de nascimento">Data de nascimento:</label>
                    <input
                        type="text"
                        id="data de nascimento"
                        name="data de nascimento"
                        placeholder="Sua data de nascimento"
                        required=""
                    />
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="Seu cpf"
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