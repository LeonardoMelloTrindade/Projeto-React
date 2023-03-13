import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillBagPlusFill } from "react-icons/bs";
import './listaProdutos.css';
import ProdutoService from "../services/produtos.service";


export default function listaProdutos() {
    const arrayTeste = [1, 2, 3, 4, 5];
    const [produtos, setProdutos] = []
    const produtoService = new ProdutoService();

    useEffect(() => {
        produtoService.get('Modulo').then((res) => {
            console.log(res.data.data)
          })
    }, [])
    

    const addItemCarrinho = (teste) => {
        localStorage.setItem(teste, 'oi')
    }

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
                            <Form.Check
                                type='radio'
                                id='radio1'
                                label='Todos'
                                name='categoria'
                            />
                            <Form.Check
                                type='radio'
                                id='radio2'
                                label='Módulos'
                                name='categoria'
                            />

                            <Form.Check

                                type='radio'
                                id='radio3'
                                label='Estação de Recarga'
                                name='categoria'
                            />
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
                                        <div className="d-flex justify-content-between">

                                            <Col className="">
                                                <Button onClick={() => addItemCarrinho(teste)}   variant="danger">
                                                    <BsFillBagPlusFill />
                                                </Button>
                                            </Col>
                                            <Col>
                                                <p>Valor: R$ 199,99</p>
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
