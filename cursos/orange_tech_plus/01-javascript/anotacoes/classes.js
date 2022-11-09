class Pessoa{
    nome;
    idade;
    
    constructor(){
        this.nome = 'teste';
        this.idade = 20;
    }
    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const Sueyvid = new Pessoa();
Sueyvid.nome = 'Sueyvid José';
Sueyvid.idade = 20;

console.log(Sueyvid);
Sueyvid.descrever()