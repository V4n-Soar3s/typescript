"use strict";
// Union type
/*
Union Types

-> O UNION TYPE é uma alternativa melhor do que o any;
-> Onde podemos determinar dois tipos para um dado;
-> A sintaxe: number | string
-> Union type é exclusivo do typescript;

*/
//vamos criar um parametro de funcao que tenha dois tipos
function showBalance(balance) {
    console.log(`O saldo da conta é ${balance}`);
}
showBalance(100);
showBalance("500");
