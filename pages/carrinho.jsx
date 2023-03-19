import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Form, Button } from 'react-bootstrap';
import ProdutoService from "../services/produtos.service";
import './carrinho.css'

export default function carrinho() {

  const [quantidade, setQuantidade] = useState(1);
  const [quantidadeDisponivel, setQuantidadeDisponivel] = useState(999);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const produtoService = new ProdutoService();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: ''
  });

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

  async function handleSubmit(event) {
    event.preventDefault();
    const confirmPedido = await produtoService.create(itensCarrinho, formData);
    console.log(confirmPedido)
  }

  const handleSubmitAndRedirect = (event) => {
    event.preventDefault();
    const form = event.target.form;
      form.submit();
      window.location.href = "/carrinho/confirmacao";
  }

  useEffect(() => {
    const itens = [];
    let i = 1;
    while (localStorage.getItem(i)) {
      const item = JSON.parse(localStorage.getItem(i));
      itens.push(item);
      i++;
    }
    setItensCarrinho(itens);
  }, []);

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
          {itensCarrinho.map(item => {
            return (
              <tr key={item._id}>
                <td className='botaoApagar centralizandoTds'>
                  <button>X</button>
                </td>
                <td key={item.nome}>
                  <img className='imagemCarrinho' src={item.imagem} />
                  <p>{item.nome}</p>
                </td>
                <td key={item.preco} className='centralizandoTds'>
                  R${item.preco}
                </td>
                <td className='centralizandoTds'>
                  <Row>
                    Quantidade disponível: {quantidadeDisponivel}
                    <Col>
                      <button className="botaoCarrinho" onClick={decrementarQuantidade}>-</button>
                      <input type="text" className="quantidadeCarrinho" value={quantidade} />
                      <button className="botaoCarrinho" onClick={incrementarQuantidade}>+</button>
                    </Col>

                  </Row>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>


      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome completo"
            value={formData.nome}
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
            value={formData.email}
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
            value={formData.endereco}
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
            value={formData.cidade}
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
            value={formData.estado}
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
            value={formData.cep}
            onChange={(event) =>
              setFormData({
                ...formData,
                cep: event.target.value
              })
            }
            required
          />
        </Form.Group>
        <Button type="submit" variant="danger" onClick={handleSubmitAndRedirect}>
          Confirmar Compra
        </Button>
      </Form>
    </>
  )
}
