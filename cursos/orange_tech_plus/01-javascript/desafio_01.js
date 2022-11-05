/* Algoritmo para calcular o valor gasto em combustível de uma viagem */
const preco_combustivel_reais = 5.79;
const km_por_litro = 12;
const distancia_km = 1580;

const combustivel_consumido_litro = distancia_km / km_por_litro;
const gasto_total_reais = combustivel_consumido_litro * preco_combustivel_reais;

console.log(gasto_total_reais.toFixed(2), 'reais');