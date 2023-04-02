import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Form, Button, FloatingLabel } from 'react-bootstrap';
import ProdutoService from "../services/produtos.service";
import useCarrinhoContext from '../hook/useCarrinhoContext';
import { BsArrowLeftCircle } from "react-icons/bs";
import { useSelector } from 'react-redux'
import './carrinho.css';

export default function carrinho() {
  let valorTotal = 0;
  const [quantidade, setQuantidade] = useState(1);
  const [quantidadeDisponivel, setQuantidadeDisponivel] = useState(10);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const { formData, setFormData } = useCarrinhoContext();
  const counter = useSelector(state => state.counter)
  const produtoService = new ProdutoService();

  const decrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
      setQuantidadeDisponivel(quantidadeDisponivel + 1);
    }
  };

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
    setQuantidadeDisponivel(quantidadeDisponivel - 1);
  };

  const deleteItemCarrinho = (id) => {
    let novoArray = itensCarrinho.filter(item => item._id !== id);
    console.log(novoArray);
    setItensCarrinho(novoArray);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('itensPedido', JSON.stringify(itensCarrinho));
    const confirmPedido = await produtoService.create(itensCarrinho, formData);
    console.log(confirmPedido.status);
    if (confirmPedido.status === 200) {
      window.location.href = "http://localhost:5173/carrinho/confirmacao";
    }
  }

  useEffect(() => {
    if (localStorage.length === 0) {
      console.log('LocalStorage está vazio');
    } else {
      let itens = [];
      let i = 0;
      while (localStorage.getItem(i)) {
        const item = JSON.parse(localStorage.getItem(i));
        itens.push(item);
        i++;
      }
      setItensCarrinho(itens);
      localStorage.clear();
    }

  }, []);

  return (
    <>
      <Row className='mb-3 pt-4 bgHeader d-flex align-items-center'>
        <Col className='d-flex justify-content-center'>
          <div href="/carrinho" variant="danger">
            <BsArrowLeftCircle className="carrinho" onClick={() => window.location.href = "http://localhost:5173/produtos"} />
          </div>
        </Col>
        <Col className=" d-flex justify-content-center mr-5">
          <p className="text-center mt-2 fs-1 header">
            Carrinho
          </p>
        </Col>
        <Col>
          <img src="https://belenergy.com.br/wp-content/themes/belenergy/assets/images/svg/logo-v2.svg" href='/produtos' />
        </Col>
      </Row>
      <div className='d-flex justify-content-center'>

        <Row className='containerPrincipal d-flex justify-content-center'>
          <Row className='mb-3 pt-4 headerItens'>
            <Col>
              <p className="text-center fs-3 header" >
                Itens Adicionado ao carrinho
              </p>
            </Col>
          </Row>

          <Table size="sm" className='tamanhoTable' >
            <tbody>
              {itensCarrinho.map(item => {
                valorTotal += parseFloat(item.preco);

                return (
                  <tr key={item._id}>
                    <td className='botaoApagar centralizandoTds'>
                      <Button variant='danger' id={item._id} onClick={() => deleteItemCarrinho(item._id)}>
                        X
                      </Button>
                    </td>
                    <td key={item.nome} className='centralizandoTds'>
                      <Row>
                        <Col className='tamamnhoTdImagem'>
                          <img className='imagemCarrinho' src={item.imagem} />
                        </Col>
                        <Col className='tamamnhoTdImagem'>
                          <p className='tableNomeProduto'>{item.nome}</p>
                        </Col>
                      </Row>
                    </td>
                    <td key={item.preco} className='centralizandoTds colorPreco'>
                      R${item.preco}
                    </td>
                    <td className='centralizandoTds'>
                      <Row className='m-2 selectQuantidade'>
                        <FloatingLabel
                          className="mt-3"
                          controlId="floatingSelect"
                          label="Escolha a quantidade">
                          <Form.Select
                            aria-label="Floating label select example"

                          > <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">+10</option>
                          </Form.Select>
                        </FloatingLabel>

                      </Row>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>

          <Row>
            <p className='text-end valorTotal'>Valor total: R${valorTotal.toFixed(2)}</p>
          </Row>
          <Row>
            <p className='text-center fs-3 header formData'>Informações do cliente</p>

          </Row>

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
              onClick={() => window.location.href = "http://localhost:5173/carrinho/infoClientes"}
              type="submit"
            >
              Confirmar Compra
            </Button>


          </Form>
        </Row>



      </div>
    </>
  )
}