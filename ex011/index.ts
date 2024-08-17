const primeiroNome = "Vanessa";//isso é considerado uma string 
const outroNome = 1;//pelo fato de nao ter tipo ele é uma variavel string porque estamos querendo colocar um nome, mas como ainda estamos trabalhando com o formato JS ele nao reclama em nada porque a variavel n tem um tipo entao pode ser qualquer tipo
const x = true;//boolean

//vamos criar uma funcao
function greeting (name: string){// a partir do momento que inserimos a informação que é uma string as variaveis outroNome e x nao executa por conta de nao serem strings
    console.log("Olá " + name);
}

greeting(primeiroNome);// solicitação que a função criada seja apresentada e mostre juntamente o nome guardado na variavel primeiro nome 
//greeting(outroNome);
//greeting(x);
