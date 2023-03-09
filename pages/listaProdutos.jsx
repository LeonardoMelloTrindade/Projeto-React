import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillBagPlusFill } from "react-icons/bs";
import './listaProdutos.css';


export default function listaProdutos() {
    const arrayTeste = [1, 2, 3, 4, 5]

    

    return (
        <>
            <Row className='mb-3 pt-4'>
                <Col>
                    <p className="text-center fs-1">
                        Nossos Produtos
                    </p>
                </Col>
            </Row>
            <hr />
            <Row >
                <Col md='4' className='m-5'>

                    <p className=" fs-1">Categoria</p>

                    <Form>
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type='checkbox'
                                id='default-checkbox'
                                label='Módulos'
                            />

                            <Form.Check

                                type='checkbox'
                                id='default-checkbox'
                                label='Inversores'
                            />
                        </div>
                    </Form>

                </Col>
                <Col md='6'>
                    <Row className='flex-wrap mt-4 p-2'>
                        {arrayTeste.map(teste => {
                            return (
                                <Card style={{ width: '18rem' }} className='cards' key={teste}>
                                    <Card.Img variant="top" src="https://belenergy.com.br/wp-content/uploads/2022/09/CARREGADOR-1-244x300.png.webp" />
                                    <Card.Body>
                                        <Card.Title>Estação de Recarga Veicular BelEnergy BelCharger 7,4KW</Card.Title>
                                        <Card.Text>
                                            Código: CVBEC-MO-220V-7.4KW
                                        </Card.Text>
                                        <hr />
                                        <div className="d-flex">

                                        <Col> <Button className='' variant="info"><BsFillBagPlusFill /></Button></Col>
                                        <Col>
                                            <button className="botaoCarrinho">-</button>
                                            <input type="text" disabled className="quantidadeCarrinho" />
                                            <button className="botaoCarrinho">+</button>
                                        </Col>

                                        </div>
                                        
                                    </Card.Body>
                                </Card>
                            )
                        })}

                    </Row>
                </Col>
            </Row>
        </>
    )
}
