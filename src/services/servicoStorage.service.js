export default class ServicoStorage {
  salvarProdutosNoLocalStorage(produtos) {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  getProdutosNoLocalStorage() {
    return JSON.parse(localStorage.getItem("produtos") || "[]");
  }

  removerProdutoDoLocalStorage(id) {
    let produtos = getProdutosNoLocalStorage();
    produtos = produtos.filter((produto) => produto._id !== id);
    salvarProdutosNoLocalStorage(produtos);
  }
}
