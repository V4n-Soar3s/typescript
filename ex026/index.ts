/*
DIFERENÇA ENTRE TYPES ALIAS E INTERFACES

-> Na maioria das vezes podemos optar entre qualquer um dos recursos sem problemas;
-> A unica diferença é que a interface pode ser alterada ao longo do código, já o aliás não;
-> Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a interface;
*/

//INTERFACE x TYPE ALIAS

//criamos uma interface
interface Person{
    name: string
}
//implementamos a interface com mais um dado
interface Person{
    age: number
}

//Vamos criar uma variavel tipar ela como person e colocar os parametros dentro dela name e age
const somePerson: Person = {name: "Vanessa", age: 28}

console.log(somePerson);//invocamos a constante 

//objeto com type alias

//criamos um alias
type personType ={
    name: string
}
//solicitamos que seja implementado no alias porem sera apresentado erro informando que o identificador esta duplicado, ou seja nao é possivel implementar ou modificar o alias
/*type personType ={
    age: number
}*/