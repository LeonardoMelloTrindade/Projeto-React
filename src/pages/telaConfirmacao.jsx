import React, { useState, useEffect } from 'react'
import { Alert, Col, Row, Button, Container } from 'react-bootstrap';
import useCarrinhoContext from '../hook/useCarrinhoContext';
import './telaConfirmacao.css'

export default function telaConfirmacao() {

    const { formData, setFormData } = useCarrinhoContext()
    const [itensPedido, setItensPedido] = useState([]);
    let valorTotal = 0;

    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        const itensStorage = JSON.parse(localStorage.getItem('itensPedido'));
        if (savedFormData) {
            setFormData(savedFormData);
            localStorage.removeItem('formData')
        }
        if (itensStorage) {
            setItensPedido(itensStorage);
            localStorage.removeItem('itensPedido')
        }
    }, []);

    return (
        <>
            <Row className='mb-3 pt-1 bgHeader d-flex justify-content-center'>
                <Row>
                    <img src="https://belenergy.com.br/wp-content/themes/belenergy/assets/images/svg/logo-v2.svg" href='/produtos' className='tamanhoHeaderImg' />
                </Row>
            </Row>
            <div className='divAlert'>
                <Alert key='success' variant='success' className='text-center header tamamnhoAlert'>
                    <p className='fs-4 '>Compra realizada com sucesso.</p>
                </Alert>
            </div>

           <hr />

            <Row className='d-flex justify-content-between'>
                <Col>
                    <h3 className=''>informações de entrega</h3>
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
                    <Alert variant='info' key='info'>
                        <ol type='I'>
                            {itensPedido.map(item => {
                                valorTotal += parseFloat(item.preco);
                                return (
                                    <li key={item._id} className='p-3'>{item.nome}: <span className='colorPreco'>R${item.preco}</span></li>
                                )

                            })}

                        </ol>
                        <hr />

                        <Row className='mt-3'>
                            <h4 className='text-end'>Valor total da compra: <span className='colorPreco'>R${valorTotal.toFixed(2)}</span></h4>
                        </Row>
                    </Alert>

                </Col>


            </Row>
        </>
    )
}
