import React, { useState, useEffect } from 'react';
import ProdutoService from "../../services/produtos.service";
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import useCarrinhoContext from '../../hook/useCarrinhoContext';

export default function formEndereco() {

    const produtoService = new ProdutoService();
    const { formData, setFormData } = useCarrinhoContext()

    async function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        const confirmPedido = await produtoService.create(itensCarrinho, formData);
        console.log(confirmPedido.status);
        if (confirmPedido.status === 200) {
            window.location.href = "http://localhost:5173/carrinho/confirmacao";
        }
    }

    return (
        <>

            <Form onSubmit={handleSubmit} className="mt-3">
                <Row>
                    <Col>
                        <FloatingLabel
                            className="mt-3"
                            controlId="floatingName"
                            label="Digite seu nome...">

                            <Form.Control
                                type="text"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={(event) =>
                                    setFormData({
                                        ...formData,
                                        nome: event.target.value
                                    })
                                }
                                required
                            />

                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            className="mt-3"
                            controlId="floatingEmail"
                            label="Digite seu email...">

                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(event) =>
                                    setFormData({
                                        ...formData,
                                        email: event.target.value
                                    })
                                }
                                required
                            />

                        </FloatingLabel>

                    </Col>
                </Row>
                <FloatingLabel
                    className="mt-3"
                    controlId="floatingSelect"
                    label="Escolha seu estado">
                    <Form.Select
                        aria-label="Floating label select example"
                        required
                        value={formData.estado}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                estado: event.target.value
                            })
                        }
                    >
                        <option value="">Selecione o estado</option>
                        <option value="Acre">Acre</option>
                        <option value="Alagoas">Alagoas</option>
                        <option value="Amapá">Amapá</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Bahia">Bahia</option>
                        <option value="Ceará">Ceará</option>
                        <option value="Distrito Federal">Distrito Federal</option>
                        <option value="Espírito Santo">Espírito Santo</option>
                        <option value="Goiás">Goiás</option>
                        <option value="Maranhão">Maranhão</option>
                        <option value="Mato Grosso">Mato Grosso</option>
                        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Pará">Pará</option>
                        <option value="Paraíba">Paraíba</option>
                        <option value="Paraná">Paraná</option>
                        <option value="Pernambuco">Pernambuco</option>
                        <option value="Piauí">Piauí</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                        <option value="Rondônia">Rondônia</option>
                        <option value="Roraima">Roraima</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Sergipe">Sergipe</option>
                        <option value="Tocantins">Tocantins</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel
                    className="mt-3"
                    controlId="floatingsCity"
                    label="Digite sua cidade...">

                    <Form.Control
                        type="text"
                        placeholder="Cidade"
                        value={formData.cidade}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                cidade: event.target.value
                            })
                        }
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    className="mt-3"
                    controlId="floatingAddress"
                    label="Digite seu endereco...">

                    <Form.Control
                        type="text"
                        placeholder="Endereco"
                        value={formData.endereco}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                endereco: event.target.value
                            })
                        }
                        required
                    />

                </FloatingLabel>


                <FloatingLabel
                    className="mt-3"
                    controlId="floatingsCep"
                    label="Digite seu CEP...">

                    <Form.Control
                        type="text"
                        placeholder="Cep"
                        value={formData.cep}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                cep: event.target.value
                            })
                        }
                        required
                    />
                </FloatingLabel>


                <Button
                    className='btnConfirma'
                    type="submit"
                    variant="danger">
                    Confirmar Compra
                </Button>
            </Form>

        </>
    )

}