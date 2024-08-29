"use strict";
//Non-null Assertion Operator
//como selecionar o id que criei no html
const p = document.getElementById("paragrafo1"); //peguei o elemento que foi criado no HTML e puxei para o TS
const p2 = document.getElementById("paragrafo2");
console.log(p.innerText); //para mostrar o texto salvo na id "paragrafo1"
console.log(p2.innerText); //para mostrar o texto salvo na id "paragrafo2"
