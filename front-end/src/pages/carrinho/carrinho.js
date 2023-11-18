import React from 'react';
import "./carrinho.css"
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { clearCart, decreaseCart, getTotal, increaseCart, removeFromCart, addNovaCompra } from '../../features/cartSlice';
import { useEffect } from 'react';
import { selectAllLogin} from "../../features/userSlice";


export const Carrinho = () => {
    const user = useSelector(selectAllLogin);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    },[cart]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    } 

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(increaseCart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    

    const handleAddNovaCompra = () => {
        let itemsComprados = []
        cart.cartItems.map((item) => {
            let novoItem = {productId: item.id, quantidade: item.cartQuantity, preço: item.preço}
            itemsComprados.push(novoItem);
        })
        /* 
        items: [
            {
              productId: 'ID_DO_PRODUTO', // Substitua pelo ID real do produto
              quantidade: 3,
              preço: 29.99,
            },
            // Adicione mais itens, se necessário
          ],
          total: 89.97,
          */
        
       
        const novaCompra = {
            userId: user[0].id,
            items: itemsComprados,
            total: cart.cartTotalAmount,
        };
        console.log(novaCompra)
        dispatch(addNovaCompra(novaCompra));
      };

      const status = useSelector(state => state.logins.status);


    return (
        <>
            <div className="CarrinhoTitulo">
                <h2><strong>Carrinho de compras</strong></h2>
            </div>
            <Container fluid>
                <main id="products">
                    {cart.cartItems.length === 0 ? (
                        <>
                            <p id='empty-cart'style={{ textAlign: 'center' }} ><b>Carrinho Vazio</b></p>
                            <div className="start-shopping" style={{ textAlign: 'center' }}>
                            
                                <Link to="/" style={{ font_weight: 'bold' }}> PAGINA INICIAL </Link>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div className="row" id='titulos'>
                                <h3 className="col">Produto</h3>
                                <h3 className="col">Preço</h3>
                                <h3 className="col">Quantidade</h3>
                                <h3 className="col">Total</h3>
                            </div>

                            <div className="cart-items">
                                {cart.cartItems &&
                                    cart.cartItems.map((cartItem) => (
                                        <Row className="MyProduct" key={cartItem.id}>

                                            <Col className="cart-product">
                                            <Image src={require(`../../images/${cartItem.img}`)}  id='cart-product-image' fluid />
                                            
                                                <div className='nome-remove'>
                                                    <h3 id="item-nome">{cartItem.nome}</h3>
                                                    <h3 id="item-nome">Tamanho: {cartItem.tamanho}</h3>
                                                    <button id='remover' onClick= {( ) => handleRemoveFromCart(cartItem)}>
                                                        Remover
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col className="cart-product-price" justify-content-center > <p>R${cartItem.preço}</p></Col>

                                            <Col className="cart-product-quantity">
                                                <button onClick={() => handleIncreaseCart(cartItem)}>
                                                    +
                                                </button>
                                                <div className="count">{cartItem.cartQuantity}</div>
                                                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>

                                            </Col>
                                            <Col className="cart-product-total-price">
                                                <p>R${cartItem.preço * cartItem.cartQuantity}</p>
                                            </Col>

                                        
                                        </Row>
                                    ))}
                            </div>

                            <div className='cart-summary'>
                            <Button onClick={() => handleClearCart()}id="clear-cart" variant="dark">LIMPAR CARRINHO</Button>

                                <div className='cart-comprar'>
                                    <div className='cart-total'>
                                        <span>Total </span>
                                        <span className='quantidade'>R$:{cart.cartTotalAmount}</span>
                                    </div>
                                    <Link to="/"><Button style={{marginRight:"10px"}} variant='dark'>CONTINUAR COMPRANDO</Button></Link>

                                    {status === 'logged_in' ? (<Link to="/FinalizarCompra"><Button onClick={() => handleAddNovaCompra()}variant="dark">FINALIZAR COMPRA</Button></Link>) : (<Link to ="/Login"><Button variant ="dark"> FAZER LOGIN</Button></Link>)}
                                    
                                </div>
                            </div>

                        </div>
                    )}
                </main>
            </Container>
        </>
    )
}
