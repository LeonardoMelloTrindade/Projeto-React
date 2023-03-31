import React, { useState, useEffect } from 'react';
import ProdutoService from "../services/produtos.service";
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import useCarrinhoContext from '../hook/useCarrinhoContext';

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
                    controlId="floatingsState"
                    label="Digite seu estado...">

                    <Form.Control
                        type="text"
                        placeholder="Estado"
                        value={formData.estado}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                estado: event.target.value
                            })
                        }
                        required
                    />

                </FloatingLabel>

                <FloatingLabel
                    className="mt-3"
                    controlId="floatingsCity"
                    label="Digite seu cidade...">

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
                    controlId="floatingsCep"
                    label="Digite seu Cep...">

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
                    type="submit"
                    variant="danger">
                    Confirmar Compra
                </Button>
            </Form>

        </>
    )

}