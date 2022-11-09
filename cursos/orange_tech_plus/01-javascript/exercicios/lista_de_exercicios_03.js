/* Algoritmo do cálculo do valor de um produto a depender da forma de pagamento */

/*
Formas de pagamento:
    1 - Débito: 10% desconto
    2 - Dinheiro ou PIX: 15% desconto
    3 - Crédito (2x): preço normal
    4 - Crédito (acima 2x): 10% juros
*/

const preco_normal_produto_reais = 100;
const forma_de_pagamento = 3;

let novo_preco_reais = preco_normal_produto_reais;
if (forma_de_pagamento === 1) {
    novo_preco_reais -= (preco_normal_produto_reais * 0.1);
} else if (forma_de_pagamento === 2) {
    novo_preco_reais -= (preco_normal_produto_reais * 0.15);
} else if (forma_de_pagamento === 3) {
    novo_preco_reais = preco_normal_produto_reais;
} else {
    novo_preco_reais += (preco_normal_produto_reais * 0.1);
}

console.log(novo_preco_reais.toFixed(2), 'reais');