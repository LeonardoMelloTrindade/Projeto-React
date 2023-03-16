import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillBagPlusFill } from "react-icons/bs";
import './listaProdutos.css';
import ProdutoService from "../services/produtos.service";


export default function listaProdutos() {
    var chaveLocalStorage = 0;
    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState('');
    const produtoService = new ProdutoService();

    useEffect(() => {
        produtoService.get(categoria).then((res) => {
            console.log(res.data.data);
            setProdutos(res.data.data);
        })
    }, [categoria])


    const addItemCarrinho = (teste) => {
        chaveLocalStorage += 1
        console.log(chaveLocalStorage)
        localStorage.setItem(chaveLocalStorage, teste)
    }

    return (
        <>
            <Row className='mb-3 pt-4'>
                <Col>
                    <p className="text-center fs-1">
                        Nossos Produtos
                    </p>
                </Col>
                <Col>
                    <Button href="/carrinho" variant="danger">
                        <BsFillBagPlusFill />
                    </Button>
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
                            onClick={() => setCategoria('Todos')}
                        />
                        <Form.Check
                            type='radio'
                            id='radio2'
                            label='Módulos'
                            name='categoria'
                            onClick={() => setCategoria('Modulo')}
                        />

                        <Form.Check

                            type='radio'
                            id='radio3'
                            label='Estação de Recarga'
                            name='categoria'
                            onClick={() => setCategoria('EstacaoDeRecarga')}
                        />
                    </Form>

                </Col>
                <Col md='6'>
                    <Row className='flex-wrap mt-4 p-2'>
                        {produtos.map(produto => {
                            return (
                                <Card style={{ width: '18rem' }} className='cards' key={produto._id}>
                                    <Card.Img variant="top" src={produto.imagem} className='tamanhoImagem' />
                                    <Card.Body>
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Text>
                                            {produto.codigo}
                                        </Card.Text>
                                        <hr />
                                        <div className="d-flex justify-content-between">

                                            <Col className="">
                                                <Button onClick={() => addItemCarrinho(JSON.stringify(produto))} variant="danger">
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
