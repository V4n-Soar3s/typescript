"use strict";
//Narrowing 
//1 - Typeof type guard
//criaremos uma função e ireamos utilizar union types utilizar dois tipos no caso number e string
function soma(a, b) {
    if (typeof a === "string" && typeof b === "string") { //criamos uma checagem que ira somar os valores se ambos forem strings
        console.log(parseFloat(a) + parseFloat(b)); //e ira apresentar o resultado com esse valor quando invocarmos a funcao
    }
    else if (typeof a === "number" && typeof b === "number") { //criamos uma checagem que ira somar os valores se ambos forem numbers
        console.log(a + b); //e ira apresentar o resultado com esse valor quando invocarmos a funcao
    }
    else { //criamos uma condição para caso os tipos nao sejam iguais ou fujam das tipagens impostas na função
        console.log("Impossível realizar a soma!"); // e ira retornar esse valor caso o valor digitado seja fora do padrao definido
    }
}
soma("4", "59"); // serão somadas duas strings 
soma(12, 42.3); // será somado dois numbers
soma("5", 6); // n é possivel calcular
//2 - Como checar se o valor existe? (true ou false)
//iremos criar uma funcao onde vamos esperar um array numerrico exemplo
function operations(arr, operation) {
    if (operation) { //se tiver operação iremos fazer alguma coisa
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else { //se nao tiver faremos outra
        console.log("Por favor, defina uma operação. ");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");
