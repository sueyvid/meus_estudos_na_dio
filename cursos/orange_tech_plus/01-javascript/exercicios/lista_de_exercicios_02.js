/* Algoritmo do cálculo e classificação do IMC */
const peso_kg = 62.8;
const altura_m = 1.70;

const imc = peso_kg / Math.pow(altura_m, 2);
console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc < 25) {
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('Acima do peso');
} else if (imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}