//Arrays sao determinados por colchetes []

//Criando um array numérico 
let numeros: number[] = [1, 2, 3];//se inserirmos um dado de tipo string vai ser apresentado erro, pois, estamos lidando com um array do tipo number, nao podemos mudar o tipo de dados aqui 

numeros.push(5);//aqui adicionamos mais um valor numérico no array 

console.log(numeros);//apresentamos o array com o numero 5 que adicionamos 
console.log(numeros[2]); // solicitamos que seja apresentado o numero que esta no indice 2 no console 

//array de texto 

const nomes: string[] = ["Vanessa", "Bruna", "Julia"];

nomes.push("Ana"); //aqui adicionamos o nome ana no array utilizando push 

console.log(nomes); 

//Sintaxe alternativa de arrays - Array<number> (antiga)

const num: Array<number> = [100, 200, 300]; //sintaxe de array antiga

num.push(400);//adicionei o numero 400 ao array 
console.log(num);// solicitei que seja apresentado no console o array num já com o numero do push adicionado  





