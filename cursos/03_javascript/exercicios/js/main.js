

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.google.com"); //abre em outra aba
    window.location.href = "https://www.google.com"; //abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//funções
/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){
    //var validar;
    if(idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
console.log(validar);

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//datas
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

//estrutura de repetição com for
/*
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
}
*/

//estrutura de repetição com while
/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

//estrutura condicional e prompt (comando de saída)
/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/

//lista de dicionários
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

//dicionário
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//listas ou arrays
/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop()
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

//variáveis e saídas
/*
var nome = "Sueyvid José";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/