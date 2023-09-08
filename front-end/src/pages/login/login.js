import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <section>
            <div id="log">
                <div id="content">
                    <h2>Fazer Login</h2>
                    <form className="row gy-4">
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o enderco de e-mail"
                            />
                        </div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite a senha"
                            />
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

