/*

Tipos de objetos

-> Podemos determinas tipos para objetos também; 
-> A sintaxe é: {prop: tipo, pro2:tipo2}
-> Ou seja, estamos determinandos quais tipos as propriedades de um objeto possuem;
-> Os objetos sao derterminados por abertura e fechamento de chaves

*/

//Tipos de objeto
function passCoordinates(coord: {x: number, y:number}){
    console.log("X coordinates: " + coord.x);//o objeto coord foi passado entao precisamos acessar ele para acessar a variavel 
    console.log("Y coordinates: " + coord.y); //o objeto coord foi passado entao precisamos acessar ele para acessar a variavel 
}

const objCoord = {x: 329, y: 84.2};

passCoordinates(objCoord);//passamos o objCoord porque ele corresponde exatamente com o que a função exige 

const pessoaObj:{nome: string, surname: string} = {nome: "Vanessa", surname:"Soares"}

/*
Propriedades opcionais 

-> Nem sempre os ob objetos possuems todas as propriedades que poderiam possuir; 
-> Por isso temos as propriedades opcionais; 
-> Para ter esse resultado devemos colocar uma interrogação: {nome: string, sobrenome?:string} 

*/

function exibaNumeros (a: number, b:number, c?:number){//vamos supor que o c é opcional no caso iremos inserir uma interrogação antes da definição da tipagem
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
    if(c){
        console.log("C: " + c); 
    }
}

exibaNumeros(1, 2, 3);
//exibaNumeros(4, 5) -> isso daria erro pq eu so coloquei tres valores e aqui estou pedindo para exibir apenas dois
exibaNumeros(4,5); //aqui apos inserir o ponto de interrogação sera possivel exibir porque o C se tornou um valor que não é obrigatorio de ser definido
//exibaNumeros(6);
