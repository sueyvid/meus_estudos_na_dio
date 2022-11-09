/* Algoritmo para calcular gasto com combustível em uma viagem, com condição */
const preco_etanol_reais = 5.79;
const preco_gasolina_reais = 6.66;
const tipo_de_combustivel = 'gasolina'
const km_por_litro = 10;
const distancia_km = 100;

const combustivel_consumido_litro = distancia_km / km_por_litro
let gasto_total_reais = 0;
if (tipo_de_combustivel === 'gasolina') {
    gasto_total_reais = combustivel_consumido_litro * preco_gasolina_reais
}
else {
    gasto_total_reais = combustivel_consumido_litro * preco_etanol_reais
}

console.log(gasto_total_reais.toFixed(2), 'reais')