/* Algoritmo para calcular a média de um aluno e sua classificação */
const nota_01 = 10;
const nota_02 = 8;
const nota_03 = 9.5;

const media = (nota_01 + nota_02 + nota_03) / 3;
console.log(media.toFixed(1))

if (media < 5) {
    console.log('Reprovado');
} else if (media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}