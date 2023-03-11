import axios from 'axios';

export default class ProdutoService {
    async create(nome, tipo, num) {
      return axios.post('http://localhost:3000/carrinho/', {
        nome: nome,
        tipo: tipo,
        pokedex: num
      });
    }
  
    async get(page, limit) {
      return axios.get(`http://localhost:3000/produtos`, {
        params:{
          page: page,
          limit: limit
        }
      });
    }
  
    async get() {
      return axios.get('http://localhost:3000/produtos');
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