/* Coleção dinâmica de chave-valor */
const Sueyvid = {
    nome: 'Sueyvid José',
    idade: 20,

    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
};

/* Atribuir fora do objeto */
Sueyvid.altura = 1.75;

/* Acessar atributos */
Sueyvid['altura'] = 1.73;
console.log(Sueyvid['altura']);

/* Impressões */
console.log(Sueyvid);
Sueyvid.descrever();
