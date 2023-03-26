import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import { BsFillBagPlusFill, BsCart } from "react-icons/bs";
import ProdutoService from "../services/produtos.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './listaProdutos.css';


export default function listaProdutos() {
    var chaveLocalStorage = 1;
    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState('');
    const produtoService = new ProdutoService();
    const notify = () => toast.success("Item adicionado ao carrinho!");

    useEffect(() => {
        produtoService.get(categoria).then((res) => {
            console.log(res.data.data);
            setProdutos(res.data.data);
        })
    }, [categoria])


    const addItemCarrinho = (teste) => {
        localStorage.setItem(chaveLocalStorage, teste)
        notify();
        chaveLocalStorage += 1
    }

    return (
        <>
            <Row className='mb-3 pt-4 bg d-flex align-items-center'>
                <Col>
                    <img src="https://belenergy.com.br/wp-content/themes/belenergy/assets/images/svg/logo-v2.svg" href='/produtos'/>
                </Col>
                <Col>
                    <p className="text-center mt-2 fs-1 header">
                        Produtos
                    </p>
                </Col>
                <Col className=" d-flex justify-content-center mr-5">
                    <div href="/carrinho" variant="danger">
                        <BsCart className="carrinho" onClick={() => window.location.href = "http://localhost:5173/carrinho"} />
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md='2' className='m-4 boxCategoria'>

                    <p className="fs-1 categoria">Categoria</p>
                    <hr />
                    <Form>
                        <Form.Check
                            defaultChecked
                            type='radio'
                            id='radio1'
                            className="selectCategoria"
                            label='Todos'
                            name='categoria'
                            onClick={() => setCategoria('Todos')}
                        />
                        <Form.Check
                            type='radio'
                            id='radio2'
                            className="selectCategoria"
                            label='Módulos'
                            name='categoria'
                            onClick={() => setCategoria('Modulo')}
                        />

                        <Form.Check

                            type='radio'
                            id='radio3'
                            className="selectCategoria"
                            label='Estação de Recarga'
                            name='categoria'
                            onClick={() => setCategoria('EstacaoDeRecarga')}
                        />
                        <Form.Check

                            type='radio'
                            id='radio4'
                            className="selectCategoria"
                            label='Cabos'
                            name='categoria'
                            onClick={() => setCategoria('Cabos')}
                        />
                    </Form>

                </Col>
                <Col md='9'>
                    <Row className='flex-wrap mt-4 p-2'>
                        {produtos.map(produto => {
                            return (
                                <Card style={{ width: '18rem' }} className='cards' key={produto._id}>
                                    <Card.Img variant="top" src={produto.imagem} className='tamanhoImagem' />
                                    <Card.Body>
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Text className="cardCodigo">
                                            Código: {produto.codigo}
                                        </Card.Text>
                                        <hr />
                                        <div className="d-flex justify-content-between">

                                            <Col onClick={() => addItemCarrinho(JSON.stringify(produto))}>
                                                <BsFillBagPlusFill className="btnAddCarrinho" />
                                            </Col>
                                            <Col>
                                                <div className="preco">Valor:</div>
                                                <div className="preco">R${produto.preco}</div>
                                            </Col>

                                        </div>

                                    </Card.Body>
                                </Card>
                            )
                        })}

                        <ToastContainer
                            position="bottom-right"
                            autoClose={3500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />

                    </Row>
                </Col>
            </Row>
        </>
    )
}
