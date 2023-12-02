import React from "react";
import "./adicionarVenda.css"
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { addToStore, addNewProduct, productsFetch } from "../../features/productsSlice";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectAllLogin } from "../../features/userSlice";



export const AdicionarVenda = () => {

  const { items, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [newNome, setNewNome] = useState("");

  const handleChangeNome = (event) => {
    setNewNome(event.target.value);
  };

  const handleChangePreço = (event) => {
    setNewPreço(event.target.value);
  };


  const [newPreço, setNewPreço] = useState(0);


  const user = useSelector(selectAllLogin);

  const handleAddToStore = (nome, preço, tipo, tamanho, desc) => {
    const newTenis = { "nome": nome, "tipo": tipo, "preço": preço, "tamanho": tamanho, "desc": desc, "img": "tenis5.jpg", "userId": user[0].id }
    dispatch(addNewProduct(newTenis));
  };



  const [newTipo, setNewTipo] = useState("masculino");

  const handleChangeTipo = (event) => {
    setNewTipo(event.target.value);
  };

  const [newTamanho, setNewTamanho] = useState(0);

  const handleChangeTamanho = (event) => {
    setNewTamanho(event.target.value);
  };

  const [newDesc, setNewDesc] = useState(0);

  const handleChangeDesc = (event) => {
    setNewDesc(event.target.value);
  };


  const status1 = useSelector(state => state.logins.status);

  if (status1 !== "logged_in") {
    return <Navigate to="/Login" />;
  } else {
    return (
      <>
        <main>
          <div className="adicionarVenda">
            <form id="shoe-form">
              <label htmlFor="images" className="drop-container" id="dropcontainer">
                Fotos do tênis
                <span className="drop-title">Drop files here</span>
                or
                <input type="file" id="images" accept="image/*" required="" />
              </label>
  
  
              <label htmlFor="shoe-name">Nome do Tênis:</label>
              <input
                onChange={handleChangeNome}
                type="text"
                id="shoe-name"
                name="shoe-name"
                placeholder="Nome do tênis"
                required=""
              />
  
              <label htmlFor="shoe-color">Preço do produto:</label>
              <input
                onChange={handleChangePreço}
                type="text"
                id="shoe-color"
                name="shoe-color"
                placeholder="Preço"
                required=""
              />
              <label htmlFor="shoe-color">Tamanho do calçado:</label>
              <input
                onChange={handleChangeTamanho}
                type="text"
                id="shoe-size"
                name="shoe-size"
                placeholder="Tamanho do produto"
                required=""
              />
  
              <label htmlFor="shoe-color">Descrição do produto:</label>
              <input
                onChange={handleChangeDesc}
                type="text"
                id="shoe-size"
                name="shoe-size"
                placeholder="Descrição do produto"
                required=""
              />
  
              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" name="tipo" onChange={handleChangeTipo}>
                <option value="">Selecione o tipo</option>
                <option value="infantil">Infantil</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                {/* Adicione mais opções conforme necessário */}
              </select>
              <Link to="/MeusProdutos" > <button onClick={() => handleAddToStore(newNome, newPreço, newTipo, newTamanho, newDesc)} >Adicionar Tênis</button> </Link>
            </form>
          </div>
        </main>
  
  
      </>
  
    )
  }

}