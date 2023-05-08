import React, { useState, useEffect } from "react";
import { Alert, Col, Row, Button, Table } from "react-bootstrap";
import useCarrinhoContext from "../hook/useCarrinhoContext";
import ServicoStorage from "../services/servicoStorage.service";

import "./telaConfirmacao.css";

export default function telaConfirmacao() {
  const { formData, setFormData } = useCarrinhoContext();
  const [itensPedido, setItensPedido] = useState([]);
  const servicoStorage = new ServicoStorage();
  let valorTotal = 0;

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
      localStorage.removeItem("formData");
    }
    let produtos = servicoStorage.getProdutosNoLocalStorage();
    setItensPedido(produtos);
    console.log(produtos);
  }, []);

  return (
    <>
      <Row className="mb-3 pt-1 bgHeader d-flex justify-content-center">
        <Row>
          <img
            src="https://belenergy.com.br/wp-content/themes/belenergy/assets/images/svg/logo-v2.svg"
            href="/produtos"
            className="tamanhoHeaderImg"
          />
        </Row>
      </Row>
      <div className="divAlert">
        <Alert
          key="success"
          variant="success"
          className="text-center header tamamnhoAlert"
        >
          <p className="fs-4 ">Compra realizada com sucesso.</p>
        </Alert>
      </div>

      <hr />
      <div className="d-flex justify-content-center">
        <Row className="tamanhoContainer">
          <Col sm={8}>
            <Alert variant="light" key="light">
              <p className="fs-4 infoItens">1 - Informações de entrega</p>

              <Row className="d-flex justify-content-between">
                <Col sm={4} className="colunaInfoEndereco">
                  <span className="infoEndereco">
                    <p> Endereço de entrega</p>
                  </span>
                </Col>

                <Col sm={8} className="">
                  <span className="infoCliente">{formData.nome}</span>
                  <span className="infoCliente">{formData.endereco}</span>
                  <span className="infoCliente">{formData.cidade}</span>
                  <span className="infoCliente">
                    {formData.estado}, {formData.cep}
                  </span>
                </Col>
              </Row>
            </Alert>

            <Alert variant="light">
              <p className="fs-4 infoItens">2 - Produtos Comprados</p>
              <Table size="sm" className="tamanhoTable">
                <tbody>
                  {itensPedido.map((item) => {
                    valorTotal += parseFloat(item.preco);

                    return (
                      <tr key={item._id}>
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
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Alert>
          </Col>
          <Col sm={4}>
            <Alert variant="light" key="light">
              <p className="fs-4 infoItens">Resumo do Pedido</p>

              <Row className="d-flex justify-content-between">
                <Col sm={6} className="">
                  <p className="text-start">Itens: </p>
                </Col>

                <Col sm={6} className="">
                  <p className="text-end">{valorTotal.toFixed(2)}</p>
                </Col>
              </Row>
              <Row className="d-flex justify-content-between">
                <Col sm={6} className="">
                  <p className="text-start">Frete e manuseio: </p>
                </Col>

                <Col sm={6} className="">
                  <p className="text-end">20.00</p>
                </Col>
              </Row>

              <hr />

              <Row className="mt-3">
                <p className="text-end fs-6 colorPrecoFinal">
                  Valor total da compra:{" "}
                  <span className="">R${(valorTotal + 20.0).toFixed(2)}</span>
                </p>
              </Row>
            </Alert>
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btnConfirma"
          onClick={() =>
            (window.location.href = "http://localhost:5173/produtos")
          }
        >
          Voltar ao início
        </button>
      </div>
    </>
  );
}
