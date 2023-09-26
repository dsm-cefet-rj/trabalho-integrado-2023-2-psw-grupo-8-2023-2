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
    

    const handleAddToStore = (nome, preço, tipo, tamanho, desc) => {
        const newTenis = {"nome":nome, "tipo":tipo, "preço":preço, "tamanho":tamanho, "desc":desc}
        dispatch(addToStore(newTenis));
    };

    const[newTipo, setNewTipo] = useState("masculino");

    const handleChangeTipo = (event) => {
      setNewTipo(event.target.value);
  };

  const[newTamanho, setNewTamanho] = useState(0);

    const handleChangeTamanho = (event) => {
      setNewTamanho(event.target.value);
  };

  const[newDesc, setNewDesc] = useState(0);

    const handleChangeDesc = (event) => {
      setNewDesc(event.target.value);
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
      <Link to="/" > <button onClick={() => handleAddToStore(newNome,newPreço, newTipo, newTamanho, newDesc)} >Adicionar Tênis</button> </Link>
    </form>
  </div>
</main>

        
        </>

    )
}