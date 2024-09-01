"use strict";
//Bigint
//Lembrando que o método Bigint é permitido apenas a partir do es2020
let n; //declarei uma variavel com o metodo bigint
//n = 1 nao podemos colocar um numero pequeno dentro de bigint pois o metodo foi criado para armazenamos numeros grandes dentro dele 
//exemplo:
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
//Symbol 
let symbolA = Symbol("a"); //declaramos e tipamos 
let symbolB = Symbol("a"); //declaramos sem tipar
//symbolA é igual a symbolB?
console.log(symbolA === symbolB);
