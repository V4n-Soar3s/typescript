//4 Inference e Annotation 

//vamos criar uma variavel 
const ann: string = "Teste";//estamos informando ao leitor de código que isso aqui é uma annotation 

//a inferencia acontece de maneira bem similar, exemplo:
let inf = "Teste"; // porém é omitida a parte de tipo de dados, porém o programa entende mesmo sem a tipagem que se trata de um valor de string, isso e inferencia

inf = 1; /// n é permitido alterar a variavel para um numero pois, foi definido na inferencia que a mesma se trata de uma string 



