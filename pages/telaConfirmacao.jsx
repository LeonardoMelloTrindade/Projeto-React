import React from 'react'
import { Alert, Col, Row, Button, Container, ListGroup } from 'react-bootstrap';

export default function telaConfirmacao() {
    return (
        <>
            <Row>
                <Alert key='success' variant='success' className='text-center'>
                    <h2>Compra realizada com sucesso.</h2>
                </Alert>
            </Row>

            <Container>
                <h3 className='text-center'>Informações da compra</h3>
                <hr />
            </Container>

            <Row className='d-flex justify-content-between'>
                <Col>
                    <h3>Endereço de entrega</h3>
                    <Alert variant='info' key='info'>

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
                    </Alert>
                </Col>
                <Col>
                    <h3>Produtos Comprados</h3>
                    <Alert variant='dark' key='dark'>
                        <ListGroup>
                            <ListGroup.Item className='p-4'>Estação de Recarga Veicular BelEnergy BelCharger 7,4KW: R$199,99</ListGroup.Item>
                            <ListGroup.Item className='p-4'>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className='p-4'>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className='p-4'>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item className='p-4'>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>

                        <Row className='mt-5'>
                            <h4 className='text-end'>Valor total da compra: R$645,43</h4>
                        </Row>
                    </Alert>

                </Col>


            </Row>
        </>
    )
}
