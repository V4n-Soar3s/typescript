//Spread Operator

//iremos criar dois arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//vamos unir os dois primeiros arrays na nossa variavel a3, como podemos fazer isso de maneira fácil utilizando o spread operator:
const a3 =[...a1, ...a2];// a sintaxe dele é e pontinhos (...), isso fará com que os dois primeiros arrays estejam no a3

console.log(a3);

//tambem posso criar um novo array que ja tenha alguns elementos dentro e jogar o valor de outro array dentro dele, exemplo:
const a4 = [0, ...a1, 4];

console.log(a4)

//Utilizando Spread operator com objetos:
const carName = {name: 'Gol'};//objeto com o nome do carro
const carBrand = {brand: 'VW'}//objeto que so tem a marca do carro
const otherInfos = {km: 100000, price: 49000}//outras informações como kilometragem e preço

//como colocar tudo isso em um unico objeto utilizando spread operator?
const car = {...carName, ...carBrand, ...otherInfos, wheels: 4};

console.log(car);// quando eu for imprimir terei o objeto completo e com todas as outras propridades que eu ja havia criado em outros objetos em um só 
