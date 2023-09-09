import React from "react";
import { useParams } from "react-router-dom";
// import { reducer } from "../../store";
// import { userSelector} from 'react-redux';

export default function ProductDetails() {
  const { id } = useParams()
  let productData = null
  if (id == 1) {
    productData = {
      name: "T1",
      price: 10,
      image: require("../../images/tenis1.jpg"),
    }

  } else if (id == 2) {
    productData = {
      name: "T2",
      price: 20,
      image: require("../../images/tenis2.jpg"),
    }
  } else if (id == 3) {
    productData = {
      name: "T3",
      price: 30,
      image: require("../../images/tenis3.jpg"),
    }
  } else if (id == 4) {
    productData = {
      name: "T4",
      price: 40,
      image: require("../../images/tenis4.jpg"),
    }
  } else if (id == 5) {
    productData = {
      name: "T2",
      price: 50,
      image: require("../../images/tenis5.jpg"),
    }
  }

  return (<>
    <h1>{productData.name}</h1>
    <h2>O id do produto é {id}</h2>
    {
      productData != null ?
        <>
          <img src={productData.image} alt={productData.name} width="300" />
          <h2>R${productData.price}</h2>
        </>
        : <> <h1>SEM DADOS</h1></>
    }
  </>)
  // const dados = userSelector((state) => state.dados);
  // return (
  //     <div>
  //       {dados.map((item) => (
  //         <div key={item.id}>
  //           <p>Nome: {item.name}</p>
  //           <p>Preço: {item.price}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
}