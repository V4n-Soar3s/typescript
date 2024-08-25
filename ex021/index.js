"use strict";
/*

Tipos de objetos

-> Podemos determinas tipos para objetos também;
-> A sintaxe é: {prop: tipo, pro2:tipo2}
-> Ou seja, estamos determinandos quais tipos as propriedades de um objeto possuem;
-> Os objetos sao derterminados por abertura e fechamento de chaves

*/
//Tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x); //o objeto coord foi passado entao precisamos acessar ele para acessar a variavel 
    console.log("Y coordinates: " + coord.y); //o objeto coord foi passado entao precisamos acessar ele para acessar a variavel 
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord); //passamos o objCoord porque ele corresponde exatamente com o que a função exige 
