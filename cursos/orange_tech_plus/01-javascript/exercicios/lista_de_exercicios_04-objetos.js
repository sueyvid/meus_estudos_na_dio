/* classe Carro com o método de calcular o valor gasto em uma viagem */
class Carros {
    marca;
    cor;
    litros_por_km;

    constructor(marca, cor, litros_por_km) {
        this.marca = marca;
        this.cor = cor;
        this.litros_por_km = litros_por_km;
    }

    gasto_reais(distancia_km, preco_combustivel_reais) {
        return distancia_km * this.litros_por_km * preco_combustivel_reais;
    }
}

const vectra = new Carros('Chevrolet', 'Preto', 1 / 10);
console.log(vectra.gasto_reais(70, 5));