//Tipp de parâmetro de funções 
//Podemos setar o tipo de parâmetro que uma função irá receber 

function soma (a: number, b: number){
    console.log(a + b)
}

soma(4, 5); //quando chamamos a função os parametros a serem passados devem corresponder a tipagem definida se inserirmos aqui dois valores que informem strings a função não será executada e o TS informará o erro da nossa sintaxe

/*
Tipo de Retorno de Funções 

-> Funções geralmente tem o return;
-> Os retornos também podem ser definidos por nós;
-> Para isso utilizamos a sintaxe: function myFunction():number{}
-> Esta função retorna um número; 

*/

function saudacao(name:string):string{// quando colocamos essa sintaxe bloqueamos o erro de retorno, ele nao aceita o retorno de numero pois nao satisfaz o tipo de string 
    return `Olá ${name}`// solicitei que seja retornado o valor quando invocada a função 
}

console.log(saudacao("Vanessa"));// invoquei a funcao e solicitei que seja apresentado um valor 

/*Funções anônimas em TS 

-> O TS consegue nos ajudar também em funções anônimas;
-> Fazendo uma validação do códgio digitado, nos fornecendo dicas de possíveis problemas; 
-> Exemplo: métodos não existentes;*/

setTimeout(function(){//setTimeout permite colocar uma função anonima como argumento
    const salario:number = 1000;
    //console.log(salario)

    //console.log(parseFloat(salario)); - se utilizarmos isso seremos informados que o argumento number nao serve pois nao é uma string ou seja esse método parseFloat é utilizado para converter uma string em um float e nao um number em um float, entao nos temos um ajuste em TS que não permite que seja utilizado algo errado
}, 2000)// quando defino esse 2k no final é solicitando que ela aguarde 2s e execute alguma coisa