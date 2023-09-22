import React from 'react';
import "./carrinho.css"
import Productinfo from './Productinfo';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import PageFooter from './PageFooter';

let initialState = [];   

export const Carrinho = () => {
    const [produtos, setProdutos] = useState(initialState);

    function delProdutos(nome){
        const prodFiltrados = produtos.filter(produto => produto.nome !== nome);
        setProdutos([...prodFiltrados]);
    }

    function addProdutos (e){
        e.preventDefault();

        const produto = [<Productinfo />];
        setProdutos([...produtos, {...produto}]);
    }

    return (
        <>
            <section>
                <div className="mais2">
                    <h2><strong>Carrinho de compras</strong></h2>
                </div>
                <Container fluid>
                    <main id="products">
                        <button type='submit' onClick={addProdutos}>Adicionar produto</button> <br/>
                        {produtos.map(item => (<Productinfo />))}
                        {produtos.length === 0 && <><p style={{textAlign : 'center'}} ><b>Carrinho Vazio</b></p> </>}
                        <br/> <button type='submit' onClick={() => delProdutos(produtos.nome)}>Excluir produto</button>
                    </main>
                </Container>
            </section>
            <PageFooter />
        </>
    )

}
