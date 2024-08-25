//Tipp de parâmetro de funções 
//Podemos setar o tipo de parâmetro que uma função irá receber 

function soma (a: number, b: number){
    console.log(a + b)
}

soma(4, 5); //quando chamamos a função os parametros a serem passados devem corresponder a tipagem definida se inserirmos aqui dois valores que informem strings a função não será executada e o TS informará o erro da nossa sintaxe