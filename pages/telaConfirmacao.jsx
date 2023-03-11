import React from 'react'
import { Alert, Col, Row, Table, Form, Button } from 'react-bootstrap';

export default function telaConfirmacao() {
    return (
        <>
            <Row>
                <Alert key='success' variant='success' className='text-center'>
                    <h2>Compra realizada com sucesso.</h2>
                </Alert>
            </Row>

            <Row>
                <Col>
                    <h3>Endereço de entrega</h3>

                    <h4>Nome: </h4>
                    <p>Leonardo Mello</p>

                    <h4>Email: </h4>
                    <p>leo11madara@gmail.com</p>

                    <h4>Endereço: </h4>
                    <p>Rua José Francisco</p>

                    <h4>Cidade: </h4>
                    <p>Arraial do Cabo</p>

                    <h4>Estado: </h4>
                    <p>Rio de Janeiro</p>

                    <h4>Endereço: </h4>
                    <p>Rua José Francisco</p>

                    <h4>CEP: </h4>
                    <p>28930-000</p>
                </Col>
                <Col>
                    <h3>Endereço de entrega</h3>

                    <h4>Nome: </h4>
                    <p>Leonardo Mello</p>

                    <h4>Email: </h4>
                    <p>leo11madara@gmail.com</p>

                    <h4>Endereço: </h4>
                    <p>Rua José Francisco</p>

                    <h4>Cidade: </h4>
                    <p>Arraial do Cabo</p>

                    <h4>Estado: </h4>
                    <p>Rio de Janeiro</p>

                    <h4>Endereço: </h4>
                    <p>Rua José Francisco</p>

                    <h4>CEP: </h4>
                    <p>28930-000</p>
                </Col>


            </Row>
        </>
    )
}
