import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Productinfo = () => {
    function aumentaQtd(){

    }

    function diminuiQtd(){
        
    }

    return (
        <>
                <Row>
                    <Col sm>
                        <div id="iprod">
                            <img src="#" alt="Imgprod" id="prodt"/>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div id="qtd">
                            <div>
                                <br/>
                                <p><b>R$</b></p>
                            </div>
                            <div id="bran">
                                <div id="quant">
                                    Quantidade:       
                                </div>
                            </div>
                            <div>
                                <button type="button" className="minmais"><img src="menos.png" alt="menos" id="min"/></button>
                                <span>qtd</span>
                                <button type="button" className="minmais"><img src="mais3.png" alt="mais" id="mais"/></button>
                                <button type="button" className="minmais"><img src="lixopsw.png" alt="lixo" id="lxo"/></button>
                            </div>
                        </div>
                    </Col>
                    <Col sm>
                        <div id="info">
                            <p>Outras info</p>
                        </div>
                    </Col>
                </Row>
        </>
    );
};

export default Productinfo;