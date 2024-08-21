//Fundamentos TS - TIPO NUMBER
//1 - numbers
var x = 10; //essa é a sintaxe do TS, nós tipamos o dado utilizando :number
console.log(x);
x = 16; // com a tipagem só é possivel mudar a variavel para valores que tbm sejam numeros caso seja utilizado uma string o TS nem compila o código 
console.log(typeof x); // aqui estou solicitando que seja apresentado no console o tipo de dado que esta sendo apresentado no caso number 
var y = 15.584848; //isso tbm é considerado um number 
console.log(y); //solicitei que seja apresentada a variavel
console.log(typeof y); //pedi a verificação da tipagem 
console.log(y.toPrecision(3)); //solicitei que sejam apresentados apenas 3 casas decimais do número flutuante armazenado y 
