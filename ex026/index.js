"use strict";
/*
DIFERENÇA ENTRE TYPES ALIAS E INTERFACES

-> Na maioria das vezes podemos optar entre qualquer um dos recursos sem problemas;
-> A unica diferença é que a interface pode ser alterada ao longo do código, já o aliás não;
-> Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a interface;
*/
//Vamos criar uma variavel tipar ela como person e colocar os parametros dentro dela name e age
const somePerson = { name: "Vanessa", age: 28 };
console.log(somePerson); //invocamos a constante 
//solicitamos que seja implementado no alias porem sera apresentado erro informando que o identificador esta duplicado, ou seja nao é possivel implementar ou modificar o alias
/*type personType ={
    age: number
}*/ 
