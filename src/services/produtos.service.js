import axios from 'axios';

export default class ProdutoService {
  async create(itensPedido, endereco) {
    const novoArray = itensPedido.map(objeto => {
      const { imagem, ...novoObjeto } = objeto;
      return novoObjeto;
    });
    
    console.log(novoArray)
    return axios.post('http://localhost:3000/carrinho', {
      itensPedido: itensPedido,
      endereco: endereco
    });
  }

  async get(filter) {
    return axios.get(`http://localhost:3000/produtos`, {
      params: {
        filter: filter
      }
    });
  }


  async delete(id) {
    return axios.delete(`http://localhost:3000/carrinho/${id}`);
  }

  async edit(id, nome, tipo, num) {
    return axios.put(`http://localhost:3000/pokemon/${id}`, {
      nome: nome,
      tipo: tipo,
      pokedex: num
    });
  }
}