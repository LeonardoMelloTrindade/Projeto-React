import React, { useState, useEffect } from 'react'
import { Alert, Col, Row, Button, Container, ListGroup } from 'react-bootstrap';
import useCarrinhoContext from '../hook/useCarrinhoContext';

export default function telaConfirmacao() {

    const { formData, setFormData } = useCarrinhoContext()

    const [itensPedido, setItensPedido] = useState([]);

    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            setFormData(savedFormData);
            localStorage.removeItem('formData')
        }
        const itens = [];
        let index = 1;
        while (localStorage.getItem(index)) {
            const item = JSON.parse(localStorage.getItem(index));
            itens.push(item);
            localStorage.removeItem('index')
            index++;
        }
        setItensPedido(itens);
    }, []);

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
                        <p>{formData.nome}</p>

                        <h4>Email: </h4>
                        <p>{formData.email}</p>

                        <h4>Endereço: </h4>
                        <p>{formData.endereco}</p>

                        <h4>Cidade: </h4>
                        <p>{formData.cidade}</p>

                        <h4>Estado: </h4>
                        <p>{formData.estado}</p>

                        <h4>CEP: </h4>
                        <p>{formData.cep}</p>
                    </Alert>
                </Col>
                <Col>
                    <h3>Produtos Comprados</h3>
                    <Alert variant='dark' key='dark'>
                        <ListGroup>
                            {itensPedido.map(item => {
                                return (
                                    <ListGroup.Item key={item._id} className='p-4'>{item.nome}: R${item.preco}</ListGroup.Item>
                                )

                            })}

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
