import React from 'react'
import "./cadastro.css"
import { Link } from 'react-router-dom'

export const  Cadastro = () => {
    return (
        <section>
            <div className="container">
                <h2>Fazer Cadastro</h2>
                <hr />
                <div id="cade">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome Completo*" required
                            />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="CPF*" required/>
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Data de Nascimento*" required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefone Celular*" required
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Endereco de E-mail*" required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Crie sua senha*" required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirme sua senha*" required
                            />
                        </div>
                        <p id="field">(*) Campos Obrigatórios</p>
                        <hr />
                        <div id="botao">
                            <button type="submit" id="out">
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