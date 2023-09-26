import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CompraFinalizada = () => {
    return (
        <>
          <div>
              <h1 style={{marginTop:"30px", fontSize:"100px", marginBottom:"50px"}}><b>Compra Finalizada!</b></h1>
              <p style={{textAlign:"center", fontSize:"40px"}}><b>Obrigado por comprar conosco!</b></p>
              <div style={{textAlign:"center"}}>
                  <Link to="/"><Button variant="dark">RETORNAR A PAGINA INICIAL</Button></Link>
              </div>
          </div>
        </>
    )
}