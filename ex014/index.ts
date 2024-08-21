//Fundamentos TS - TIPO STRING 

//String
const firstName:string = "Vanessa";//primeiro nome 

console.log(firstName.toUpperCase());//solicitei que seja apresentada minha string com letra maiuscula utilizando o método toUpperCase 

//podemos criar uma variavel sem valor ex:
let fullName:string;// tipando ela pq previnimos que n seja inserido valor errado (nome completo)

const lastName:string ="Soares";// sobrenome

fullName = firstName + " " + lastName;// juntei as duas variaveis ja definidas para dar um valor ao nome completo inserindo um espaço entre elas

console.log(fullName);// solicitei que seja exibido
console.log(typeof fullName);// conferi o tipo da variavel