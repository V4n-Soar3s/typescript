var primeiroNome = "Vanessa"; //isso é considerado uma string 
var outroNome = 1; //pelo fato de nao ter tipo ele é uma variavel string porque estamos querendo colocar um nome, mas como ainda estamos trabalhando com o formato JS ele nao reclama em nada porque a variavel n tem um tipo entao pode ser qualquer tipo
var x = true; //boolean
//vamos criar uma funcao
function greeting(name) {
    console.log("Olá " + name);
}
greeting(primeiroNome); // solicitação que a função criada seja apresentada e mostre juntamente o nome guardado na variavel primeiro nome 
//greeting(outroNome);
//greeting(x);
