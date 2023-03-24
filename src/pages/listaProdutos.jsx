import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillBagPlusFill, BsCart } from "react-icons/bs";
import './listaProdutos.css';
import ProdutoService from "../services/produtos.service";


export default function listaProdutos() {
    var chaveLocalStorage = 1;
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
        localStorage.setItem(chaveLocalStorage, teste)
        chaveLocalStorage += 1
    }

    return (
        <>
            <Row className='mb-3 pt-4 bg d-flex align-items-center'>
                <Col className="">
                    <img src="https://belenergy.com.br/wp-content/themes/belenergy/assets/images/svg/logo-v2.svg" />
                </Col>
                <Col>
                    <p className="text-center mt-2 fs-1 header">
                        Produtos
                    </p>
                </Col>
                <Col className=" d-flex justify-content-center">
                    <div href="/carrinho" variant="danger" className=" carrinho text-center">
                        <BsCart className="carrinho" />
                    </div>
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
                                    <article class="card">
                                        <div class="card__inner">
                                            <div class="card__body card__body--front">
                                                <Card.Img variant="top" src={produto.imagem} className='tamanhoImagem' />
                                            </div >
                                            <div class="card__body card__body--back">
                                                <h6 class="card__title">
                                                    A BelEenergy, empresa pioneira no desenvolvimento de tecnologias no mercado de eficiência energética,
                                                    tem interesse em fornecer mais um produto que contribui para a neutralização de CO2 e inova o conceito de consumo de energia.
                                                </h6>
                                            </div>
                                        </div>
                                    </article>
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
