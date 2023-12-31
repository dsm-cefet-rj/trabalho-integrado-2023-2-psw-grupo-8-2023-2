import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginIcon from '../images/login.png'
import cartIcon from '../images/cart-icon.png'
import "./header.css"
import { useState } from "react";
import { PRODUCTS } from "../data";
import { useSelector } from "react-redux";
import { selectAllLogin} from "../features/userSlice";

export const Header = () => {
    return (
        <div className="header">
            <Container fluid="true">
                <Row >
                    <Col className="logo" >
                        <Link to="/" >E-Tênis</Link>
                    </Col>
                    <Col  xs={5} className="search" >
                        <SearchBar />
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

    const cart = useSelector((state) => state.cart);
    let totalAmount = 0;
    cart.cartItems.map((cartItem) => 
    totalAmount = totalAmount + cartItem.cartQuantity
    );
    
    const status = useSelector(state => state.logins.status);
    const user = useSelector(selectAllLogin);

    return (
        <Container fluid="true">
            <Row xs="auto">
                <Col className="login">
                    <div className="loginText">

                    {status === 'logged_in' ? (<Link to='/Perfil'><p>Bem Vindo<br></br>{user[0].username}</p></Link>) : (<p>Faça <Link to='/Login'>LOGIN</Link> ou <br /> crie seu <Link to='/Cadastro'>CADASTRO</Link></p>)}
                        {status === 'logged_in' ? (<Link to='/Perfil'> <img src={loginIcon} id="loginImg" alt="UserIcon"></img> </Link>) : (<Link to='/Login'> <img src={loginIcon} id="loginImg" alt="UserIcon"></img> </Link>)}

                    </div>
                </Col>
                <Col >
                    <div className="cart">
                        <Link to='/Carrinho'><img src={cartIcon} id="cartImg" alt="cartIcon"></img></Link>
                        <span className="cart-count">{totalAmount}</span>
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
        </div>
    )
}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { items, status } = useSelector((state) => state.products);

    return (
        <div className="searchResults">
          <input type="text" placeholder='O que você procura?' onChange={event => { setSearchTerm(event.target.value) }} />
          {items.filter((val) => {
            if (searchTerm === "") {
              return ""
            } else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
            <Link to={`/Produto/${val.id}`}>< div> {val.nome} </div></Link>
            )
          })}
        </div>
      );
}
