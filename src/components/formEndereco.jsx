import React, { useState, useEffect, createContext } from 'react';
import ProdutoService from "../services/produtos.service";
import { Form, Button } from 'react-bootstrap';

export const Endereco = createContext();

export default function formEndereco() {

    const produtoService = new ProdutoService();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: ''
    });

    async function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('endereco', formData)
        const confirmPedido = await produtoService.create(itensCarrinho, formData);
        console.log(confirmPedido.status);
        if (confirmPedido.status === 200) {
          window.location.href = "http://localhost:5173/carrinho/confirmacao";
        }
      }

    return (
        <>

            <Endereco.Consumer value={formData}>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome completo"
                            defaultValue={formData.nome}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    nome: event.target.value
                                })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o email"
                            defaultValue={formData.email}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    email: event.target.value
                                })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o endereço completo"
                            defaultValue={formData.endereco}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    endereco: event.target.value
                                })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a cidade"
                            defaultValue={formData.cidade}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    cidade: event.target.value
                                })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o estado"
                            defaultValue={formData.estado}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    estado: event.target.value
                                })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicZip">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Digite o CEP"
                            defaultValue={formData.cep}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    cep: event.target.value
                                })
                            }
                            required
                        />
                    </Form.Group>
                    <Button type="submit" variant="danger">
                        Confirmar Compra
                    </Button>
                </Form>
            </Endereco.Consumer>

        </>
    )

}