/*

Introdução às interfaces

-> Uma outra maneira de nomear um tipo de objeto;
-> Podemos determinar um nome para o tipo;
-> E também escolher quais as propriedades e seus tipos;

*/

//interface (é mais utilizado pelos programadores de TS)//INTERFACE É DE USO BEM PECULIAR PARA OBJECTS,assim como o alias é melhor no quesito de mudanças no union types o interface é melhor para complementar objetos e deixar mais organizado, exemplo: 

interface Point{
    x: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log(`X:${obj.x}, Y:${obj.y}, Z:${obj.z}`)
}

const coordObj: Point= {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj);


