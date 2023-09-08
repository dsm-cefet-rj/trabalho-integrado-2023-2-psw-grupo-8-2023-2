import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginIcon from '../images/login.png'
import cartIcon from '../images/cart-icon.png'
import "./header.css"

export const Header = () => {
    return (
        <div className="header">
            <Container fluid="true">
                <Row >
                    <Col className="logo" >
                        <Link to="/" >E-Tênis</Link>
                    </Col>
                    <Col  className="search" >
                        <form>
                            <input type="text" placeholder="O que está procurando na loja?" />
                            <button type="submit">Buscar</button>
                        </form>
                    </Col>
                    <Col>
                        <HeaderRightSection />
                    </Col>
                </Row>
            </Container>
            <HeaderCategories />
        </div>
    );
};

const HeaderRightSection = () => {
    return (
        <Container fluid="true">
            <Row xs="auto">
                <Col className="login">
                    <div className="loginText">
                        <p>Faça <Link to='/Login'>LOGIN</Link> ou <br /> crie seu <Link to='/Cadastro'>CADASTRO</Link></p>
                        <img src={loginIcon} id="loginImg" alt="UserIcon"></img>
                    </div>
                </Col>
                <Col >
                    <div className="cart">
                        <Link to='/'><img src={cartIcon} id="cartImg" alt="cartIcon"></img></Link>
                        <span className="cart-count">0</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const HeaderCategories = () => {
    return (
        <div className="row text-center" id="categorias">
            <div className="col">
                <Link to='/AllProducts/masculino'>Masculino</Link>
            </div>
            <div className="col">
                <Link to='/AllProducts/feminino' state={"masculino"}>Feminino</Link>
            </div>
            <div className="col">
                <Link to='/AllProducts/infantil' state={"masculino"}>Infantil</Link>
            </div>
            <div className="col">
                <Link to='/AllProducts/todos os produtos' state={"masculino"}>Todos os produtos</Link>
            </div>
        </div>
    )
}
