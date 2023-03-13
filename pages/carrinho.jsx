import React, { useState } from 'react';
import { Col, Row, Table, Form, Button } from 'react-bootstrap';
import './carrinho.css'

export default function carrinho() {

    const [quantidade, setQuantidade] = useState(1);
    const [quantidadeDisponivel, setQuantidadeDisponivel] = useState(999);

    const decrementarQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
            setQuantidadeDisponivel(quantidadeDisponivel + 1)
        }
    };

    const incrementarQuantidade = () => {
        setQuantidade(quantidade + 1);
        setQuantidadeDisponivel(quantidadeDisponivel - 1)
    };

    return (
        <>

            <Row className='mb-3 pt-4'>
                <Col>
                    <p className="text-start fs-1">
                        Itens Adicionado ao carrinho
                    </p>
                </Col>
            </Row>
            <Table striped size="sm" className='tamanhoTable' bordered hover>
                <tbody>
                    <tr>
                        <td className='botaoApagar centralizandoTds'>
                            <button>X</button>
                        </td>
                        <td>
                            <img className='imagemCarrinho' src='https://belenergy.com.br/wp-content/uploads/2022/09/CARREGADOR-1-244x300.png.webp' />
                            <p>Estação de Recarga Veicular BelEnergy BelCharger 7,4KW</p>
                        </td>
                        <td className='centralizandoTds'>
                            R$100,00
                        </td>
                        <td className='centralizandoTds'>
                            <Row>
                                Quantidade disponível: {quantidadeDisponivel}
                                <Col>
                                    <button className="botaoCarrinho" onClick={decrementarQuantidade}>-</button>
                                    <input type="text" disabled className="quantidadeCarrinho" value={quantidade}  />
                                    <button className="botaoCarrinho" onClick={incrementarQuantidade}>+</button>
                                </Col>

                            </Row>
                        </td>
                    </tr>
                </tbody>
            </Table>


            <Form className="delivery-form">
                <h2>Para seguir, defina um endereço de entrega:</h2>
                <hr />
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required type="text" placeholder="Digite o nome completo" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Digite o email" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control required type="text" placeholder="Digite o endereço completo" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="formBasicCity">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control required type="text" placeholder="Digite a cidade" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formBasicState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control required type="text" placeholder="Digite o estado" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formBasicZip">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control required type="text" placeholder="Digite o CEP" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            <div className='d-flex justify-content-center mt-5'>
                <Button href='/confirmacao' variant="danger">Confirmar Compra</Button>
            </div>

        </>
    )
}
