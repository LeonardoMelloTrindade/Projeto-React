import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillBagPlusFill } from "react-icons/bs";
import './listaProdutos.css';
import ProdutoService from "../services/produtos.service";


export default function listaProdutos() {
    
    const [produtos, setProdutos] = useState([]);
    const produtoService = new ProdutoService();

    useEffect(() => {
        produtoService.get().then((res) => {
            console.log(res.data.data);
            setProdutos(res.data.data);
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
                            defaultChecked
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
                        {produtos.map(produto => {
                            return (
                                <Card style={{ width: '18rem' }} className='cards' key={produto._id}>
                                    <Card.Img variant="top" src={produto.imagem} className='tamanhoImagem'/>
                                    <Card.Body>
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Text>
                                            {produto.codigo}
                                        </Card.Text>
                                        <hr />
                                        <div className="d-flex justify-content-between">

                                            <Col className="">
                                                <Button onClick={() => addItemCarrinho(produto)} variant="danger">
                                                    <BsFillBagPlusFill />
                                                </Button>
                                            </Col>
                                            <Col>
                                                <p>Valor: R$ {produto.preco}</p>
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
