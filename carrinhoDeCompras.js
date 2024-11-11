// carrinhoDeCompras.js
class CarrinhoDeCompras {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(nome, preco, quantidade) {
      const produtoExistente = this.produtos.find(produto => produto.nome === nome);
      if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
      } else {
        this.produtos.push({ nome, preco, quantidade });
      }
    }
  
    removerProduto(nome) {
      const indiceProduto = this.produtos.findIndex(produto => produto.nome === nome);
      if (indiceProduto === -1) {
        throw new Error('Produto não encontrado no carrinho');
      }
      this.produtos.splice(indiceProduto, 1);
    }
  
    calcularTotal() {
      return this.produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
    }
  
    listarProdutos() {
      return this.produtos;
    }
  }
  
  module.exports = CarrinhoDeCompras;

  

  