"use strict";
//Tipp de parâmetro de funções 
//Podemos setar o tipo de parâmetro que uma função irá receber 
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5); //quando chamamos a função os parametros a serem passados devem corresponder a tipagem definida se inserirmos aqui dois valores que informem strings a função não será executada e o TS informará o erro da nossa sintaxe
/*
Tipo de Retorno de Funções

-> Funções geralmente tem o return;
-> Os retornos também podem ser definidos por nós;
-> Para isso utilizamos a sintaxe: function myFunction():number{}
-> Esta função retorna um número;

*/
function saudacao(name) {
    return `Olá ${name}`; // solicitei que seja retornado o valor quando invocada a função 
}
console.log(saudacao("Vanessa")); // invoquei a funcao e solicitei que seja apresentado um valor 
