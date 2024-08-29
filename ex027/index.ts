/*

LITERAL TYPES 

-> Literal types é um recurso que permite colocar valores como tipos;
-> Isso restringe o uso a não só tipos, como também os próprios valores;
-> Este recurso é muito utilizado com Union Types;

*/

//vamos iniciar uma variavel e tipar com um valor ao invés de colocar string
let test: "testando";


test = "testando";// a variavel so vai aceitar o tipo de valor testando

console.log(test)// vamos solicitar que seja exibido no console

function showDirection(direction: "left" | "right" | "center"){//criamos uma funcao com uma tipagem de direções e apenas essas direções serao aceitas
    console.log(`A direção é: ${direction}`)
}

showDirection('left');// exemplo de resultado no console, se eu solicitasse que direction fosse top nao seria exibido

//Literal types além de tipar restringe alguns valor sejam em variaveis ou em funções