/* Algoritmo para calcular o valor gasto em combustível de uma viagem */
function gastoDeCombustivel(preco_combustivel_reais, km_por_litro, distancia_km){
    const combustivel_consumido_litro = distancia_km / km_por_litro;
    return combustivel_consumido_litro * preco_combustivel_reais;
}

(function () {
    const preco_combustivel_reais = 5.79;
    const km_por_litro = 12;
    const distancia_km = 1580;

    console.log(gastoDeCombustivel(preco_combustivel_reais, km_por_litro, distancia_km).toFixed(2), 'reais');
})();

