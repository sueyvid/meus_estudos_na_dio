/* Pessoa que diz seu IMC */
class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso_kg, altura_m) {
        this.nome = nome;
        this.peso = peso_kg;
        this.altura = altura_m;
        this.imc = peso_kg / (altura_m * altura_m);
    }

    informa_imc() {
        return this.imc;
    }

    classifica_imc() {
        const imc = this.imc;
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc < 25) {
            return ('Peso normal');
        } else if (imc < 30) {
            return ('Acima do peso');
        } else if (imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classifica_imc());
const sueyvid = new Pessoa('Sueyvid', 61, 1.75);
console.log(sueyvid.classifica_imc());