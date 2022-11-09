/* Algoritmo para calcular gasto com combustível em uma viagem, com condição */
function gastoDeCombustivel(preco_combustivel_reais, km_por_litro, distancia_km){
    const combustivel_consumido_litro = distancia_km / km_por_litro;
    return combustivel_consumido_litro * preco_combustivel_reais;
}

(function () {
    const preco_etanol_reais = 5.79;
    const preco_gasolina_reais = 6.66;
    const tipo_de_combustivel = 'etanol'
    const km_por_litro = 10;
    const distancia_km = 100;

    let gasto_total_reais = 0;
    if (tipo_de_combustivel === 'gasolina'){
        gasto_total_reais = gastoDeCombustivel(preco_gasolina_reais, km_por_litro, distancia_km);
    } else {
        gasto_total_reais = gastoDeCombustivel(preco_etanol_reais, km_por_litro, distancia_km);
    }
    console.log(gasto_total_reais.toFixed(2), 'reais');
})()