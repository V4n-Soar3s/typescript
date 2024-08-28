"use strict";
/*

Introdução às interfaces

-> Uma outra maneira de nomear um tipo de objeto;
-> Podemos determinar um nome para o tipo;
-> E também escolher quais as propriedades e seus tipos;

*/
function showCoords(obj) {
    console.log(`X:${obj.x}, Y:${obj.y}, Z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
