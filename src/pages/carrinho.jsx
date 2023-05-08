import React, { useState, useEffect } from "react";
import { Col, Row, Table, Form, Button, FloatingLabel } from "react-bootstrap";
import useCarrinhoContext from "../hook/useCarrinhoContext";
import { BsArrowLeftCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import allActions from "../actions";
import { useSelector, useDispatch } from "react-redux";
import ServicoStorage from "../services/servicoStorage.service";
import "./carrinho.css";

export default function carrinho() {
  let valorTotal = 0;
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const servicoStorage = new ServicoStorage();

  const deleteItemCarrinho = (id) => {
    const itemIndex = itensCarrinho.findIndex((item) => item._id === id);
    if (itemIndex !== -1) {
      const novoArray = [...itensCarrinho];
      novoArray.splice(itemIndex, 1);
      dispatch(allActions.counterCartActions.setCart(novoArray.length));

      const produtos = servicoStorage.getProdutosNoLocalStorage()
      produtos.splice(itemIndex, 1);
      servicoStorage.salvarProdutosNoLocalStorage(produtos)
      setItensCarrinho(produtos);
    }
  };

  useEffect(() => {
    let produtos = servicoStorage.getProdutosNoLocalStorage()
    setItensCarrinho(produtos);
    console.log(produtos);
  }, []);

  return (
    <>
      <Row className="mb-3 pt-4 bgHeader d-flex align-items-center">
        <Col className="d-flex justify-content-center">
          <div href="/carrinho" variant="danger">
            <NavLink to="/">
              <BsArrowLeftCircle
                className="carrinho"
              />
            </NavLink>
          </div>
        </Col>
        <Col className=" d-flex justify-content-center mr-5">
          <p className="text-center mt-2 fs-1 header">Carrinho</p>
        </Col>
        <Col>
          <img
            src="https://belenergy.com.br/wp-content/themes/belenergy/assets/images/svg/logo-v2.svg"
            href="/produtos"
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Row className="containerPrincipal d-flex justify-content-center">
          <Row className="mb-3 pt-4 headerItens">
            <Col>
              <p className="text-center fs-5 header">
                Itens Adicionado ao carrinho
              </p>
            </Col>
          </Row>

          {itensCarrinho.length === 0 ? (
            <>
              <div className="text-center mt-3">
                <p className="fs-3">O seu carrinho está vazio.</p>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btnConfirma"
                  onClick={() =>
                    (window.location.href =
                      "http://localhost:5173/produtos")
                  }
                >
                  Ver produtos
                </button>
              </div>
            </>
          ) : (
            <>
              <Table size="sm" className="tamanhoTable" variant="light">
                <tbody>
                  {itensCarrinho.map((item, index) => {
                    valorTotal += parseFloat(item.preco);
                    return (
                      <tr key={index}>
                        <td
                          key={item._id}
                          className="botaoApagar centralizandoTds"
                        >
                          <Button
                            variant="danger"
                            onClick={() => deleteItemCarrinho(item._id)}
                          >
                            X
                          </Button>
                        </td>
                        <td key={item.nome} className="centralizandoTds">
                          <Row>
                            <Col className="tamamnhoTdImagem">
                              <img
                                className="imagemCarrinho"
                                src={item.imagem}
                              />
                            </Col>
                            <Col className="tamamnhoTdImagem">
                              <p className="tableNomeProduto">{item.nome}</p>
                            </Col>
                          </Row>
                        </td>
                        <td
                          key={item.preco}
                          className="centralizandoTds colorPreco"
                        >
                          R${item.preco}
                        </td>
                        <td key={item.tipo} className="centralizandoTds">
                          <Row className="m-2 selectQuantidade">
                            <FloatingLabel
                              className="mt-3"
                              controlId="floatingSelect"
                              label="Escolha a quantidade"
                            >
                              <Form.Select aria-label="Floating label select example">
                                {" "}
                                <option value="1">1</option>
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
                    );
                  })}
                </tbody>
              </Table>
              <Row className="d-flex justify-content-end">
                <p className="text-end valorTotal fs-5">
                  Valor total: R${valorTotal.toFixed(2)}
                </p>
              </Row>
              <div className="d-flex justify-content-center">
                <button
                  className="btnConfirma"
                  onClick={() =>
                    (window.location.href =
                      "http://localhost:5173/carrinho/infoCLientes")
                  }
                >
                  Confirmar produto
                </button>
              </div>
            </>
          )}
        </Row>
      </div>
    </>
  );
}
