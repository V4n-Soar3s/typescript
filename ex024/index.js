"use strict";
/*

Type alias

-> Type alias é um recurso que permite criar um tipo e determinar o que ele verifica;
-> Desta maneira temos uma maneira mais fácil de chamá-lo em vez de criar expressões complexas com union types, por  exemplo;

*/
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("Vanessa");
//utilizando alias ao inves de pip
