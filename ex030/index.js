"use strict";
//Narrowing 
//Typeof type guard
//criaremos uma função e ireamos utilizar union types utilizar dois tipos no caso number e string
function soma(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
soma("4", "59"); // serão somadas duas strings 
soma(12, 42.3); // será somado dois numbers
soma("5", 6); // n é possivel calcular
