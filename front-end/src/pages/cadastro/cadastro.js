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
                                placeholder="Nome Completo*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="CPF*" />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Data de Nascimento*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefone Celular*"
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Endereco de E-mail*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Crie sua senha*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirme sua senha*"
                            />
                        </div>
                        <p id="field">(*) Campos Obrigatorios</p>
                        <hr />
                        <div id="botao">
                            <button type="submit" id="out">
                                CADASTRAR-SE
                            </button>
                            <p>
                                Ja e cadastrado?{" "}
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