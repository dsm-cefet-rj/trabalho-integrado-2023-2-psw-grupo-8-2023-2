import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageFooter = () => {
    return (
        <>
            <footer>
                <div id="sla">
                    <div id="abs">
                        <label for="">
                            <h2 id="barra">Selecione o Endereco</h2>
                        </label>
                    </div>
                    <div id="Cep">
                        <input type="text" placeholder="Inserir o CEP" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"/>
                        <Button as="input" type="submit" value="Submit" variant="light" />{' '}
                    </div>
                </div>
                <div id="price">
                    <div>
                        <p className="end">Produtos</p>
                        <p className="end">Total</p>
                    </div>
                    <div id="numeros">
                        <p className="end">(num.)</p>
                        <p className="end">R$</p>
                    </div>
                </div>
                <div className="fc">
                    <button type="submit" className="botao1">Finalizar Compra</button> <br/>
                    <button type="submit" className="botao1"><Link to='/'>Continuar Comprando</Link></button>
                </div>
            </footer>
        </>
    )
}

export default PageFooter;
