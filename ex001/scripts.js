// 1º var, let e const 

//Quando utilizamos var para declarar uma variavel acabamos manchando o escopo do código, como no caso abaixo apesar de redefinirmos a var dentro de um bloco ela muda o valor num todo e nao apenas dentro do if. Ao invés de apresentar 5 e 10, apresenta no console 5 e 5. É alterado o escopo global por conta do bloco if. 

var x = 10;
var y = 15;

if(y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

//Quando utilizamos let para declarar uma variavel ele consegue isolar o valor da variavel local e global. Ou seja da variavel que esta dentro e fora do bloco if e consegue separar, podemos observar no console que a variavel terão um escopo de bloco dentro do bloco das chaves. 

let a = 10;
let b = 15;

if(b>10){
    let a = 5;
    console.log(a);
}

console.log(a);

//for

let i = 100;//esse i nao sera alterado 

for(let i = 0; i<5; i++){//criamos uma variavel temporária que será apenas executada durante o looping 
    console.log(i);
}

console.log(i);// aqui sera apresentada a variavel i = 100 porque o mesmo nao esta dentro da funcao para entao nao sera executada ou seja o i do for nao alterou em nada o valor dele. 

//const 

function logName(){// tudo o que abrir chaves cria um novo bloco no nosso código e as variáveis tem o escopo desse bloco
    const name = "Matheus";
    console.log(name);
}

const name = "Pedro"; // lembrando que eu nao posso redefinir o valor de uma constante

logName();

console.log(name);