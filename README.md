# Gerenciando um Carrinho de Compras

Este é um projeto simples de um **Carrinho de Compras**, implementado em JavaScript, que permite adicionar, remover e listar produtos, além de calcular o total de compras.

## Funcionalidades

A classe `CarrinhoDeCompras` possui os seguintes métodos:

- **Adicionar produto ao carrinho**: 
    - `adicionarProduto(nome, preco, quantidade)`: Adiciona um produto ao carrinho. Se o produto já existir, a quantidade é incrementada.
  
- **Remover produto do carrinho**: 
    - `removerProduto(nome)`: Remove um produto do carrinho. Lança um erro caso o produto não exista.

- **Calcular o total**:
    - `calcularTotal()`: Retorna o valor total dos produtos no carrinho, considerando o preço e a quantidade de cada produto.

- **Listar produtos**:
    - `listarProdutos()`: Retorna uma lista com todos os produtos no carrinho, incluindo nome, preço e quantidade.

## Cenários de Teste

Os seguintes cenários de teste foram implementados para garantir a correta funcionalidade da classe `CarrinhoDeCompras`:

1. **Adicionar produtos ao carrinho**:
   - Verifica se os produtos são adicionados corretamente.
   - Verifica se a quantidade de um produto é incrementada quando ele já existe no carrinho.

2. **Remover produtos do carrinho**:
   - Verifica se um produto é removido corretamente.
   - Verifica se um erro é lançado ao tentar remover um produto que não existe.

3. **Calcular o total**:
   - Verifica se o total é calculado corretamente com diferentes produtos e quantidades.

4. **Listar produtos**:
   - Verifica se a lista de produtos retorna os valores corretos.

## Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/gerenciando-carrinho.git

