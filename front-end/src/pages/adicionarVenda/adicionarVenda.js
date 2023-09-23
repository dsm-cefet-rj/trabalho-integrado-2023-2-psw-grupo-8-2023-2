import React from "react";
import "./adicionarVenda.css"
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { addToStore } from "../../features/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const AdicionarVenda = () => {

    const dispatch = useDispatch();
    const[newNome, setNewNome] = useState("");

    const handleChangeNome = (event) => {
        setNewNome(event.target.value);
    };

    const handleChangePreço = (event) => {
        setNewPreço(event.target.value);
    };


    const[newPreço, setNewPreço] = useState(0);
    const[newTipo, setNewTipo] = useState("masculino");

    const handleAddToStore = (nome, preço) => {
        const newTenis = {"nome":nome, "tipo":"masculino", "preço":preço}
        dispatch(addToStore(newTenis));
    };

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
      <label htmlFor="tipo">Tipo:</label>
      <select id="tipo" name="tipo">
        <option value="unissex">Infantil</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
      <Link to="/" > <button onClick={() => handleAddToStore(newNome,newPreço)} >Adicionar Tênis</button> </Link>
    </form>
  </div>
</main>

        
        </>

    )
}