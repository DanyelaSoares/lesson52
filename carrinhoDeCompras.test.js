// carrinhoDeCompras.test.js
const CarrinhoDeCompras = require('./carrinhoDeCompras');

describe('CarrinhoDeCompras', () => {
  let carrinho;

  beforeEach(() => {
    carrinho = new CarrinhoDeCompras();
  });

  test('deve adicionar produtos ao carrinho', () => {
    carrinho.adicionarProduto('Produto A', 10, 2);
    carrinho.adicionarProduto('Produto B', 20, 1);

    const produtos = carrinho.listarProdutos();
    expect(produtos).toHaveLength(2);
    expect(produtos[0]).toEqual({ nome: 'Produto A', preco: 10, quantidade: 2 });
    expect(produtos[1]).toEqual({ nome: 'Produto B', preco: 20, quantidade: 1 });
  });

  test('deve incrementar a quantidade de um produto existente no carrinho', () => {
    carrinho.adicionarProduto('Produto A', 10, 2);
    carrinho.adicionarProduto('Produto A', 10, 3);

    const produtos = carrinho.listarProdutos();
    expect(produtos).toHaveLength(1);
    expect(produtos[0]).toEqual({ nome: 'Produto A', preco: 10, quantidade: 5 });
  });

  test('deve remover um produto do carrinho', () => {
    carrinho.adicionarProduto('Produto A', 10, 2);
    carrinho.removerProduto('Produto A');

    const produtos = carrinho.listarProdutos();
    expect(produtos).toHaveLength(0);
  });

  test('deve lançar um erro ao tentar remover um produto que não existe', () => {
    carrinho.adicionarProduto('Produto A', 10, 2);
    expect(() => carrinho.removerProduto('Produto B')).toThrow('Produto não encontrado no carrinho');
  });

  test('deve calcular o total corretamente', () => {
    carrinho.adicionarProduto('Produto A', 10, 2);
    carrinho.adicionarProduto('Produto B', 20, 1);

    const total = carrinho.calcularTotal();
    expect(total).toBe(40); // (10*2) + (20*1) = 40
  });

  test('deve listar os produtos corretamente', () => {
    carrinho.adicionarProduto('Produto A', 10, 2);
    carrinho.adicionarProduto('Produto B', 20, 1);

    const produtos = carrinho.listarProdutos();
    expect(produtos).toEqual([
      { nome: 'Produto A', preco: 10, quantidade: 2 },
      { nome: 'Produto B', preco: 20, quantidade: 1 }
    ]);
  });
});
