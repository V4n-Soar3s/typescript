// 3 - Filter (Método de array para filtrar dados)

const arr = [1, 2, 3, 4, 5];//criamos um array, array sempre estão entre colchetes [] e chaves {} definem funções 
const numerosAltos = arr.filter/*podemos add a variavel . o nome do método*/((n) =>{
    if(n >= 3){
        return n;
    }
})

console.log(arr);//o array original nao é modificado
console.log(numerosAltos);//mas a constante numeros altos só ira apresentar os elementos citados dentro do bloco numeros altos. 

//vamos criar um array de objetos
const usuarios = [{name: "Matheus", available: true}, 
                  {name: "Pedro", available: false}, 
                  {name: "João", available: false}, 
                  {name: "Roberto", available: true}, 
                  {name: "Carlos", available: true},
                 ]


//se eu quiser apresentar os usuários que estao disponiveis                 
const availableUsers = usuarios.filter((user) => user.available);// quando usamos esse código de uma linha só o return ja esta incluso então não é necessário add ele ao código

//se eu quiser apresentar os que não estão disponiveis 
const notAvailableUsers = usuarios.filter((user) => !user.available);//adicionamos o sinal de negação "!" e solicitamos que seja apresentado no console

console.log(availableUsers);//aqui sera apresentados os que retornaram com o valor true
console.log(notAvailableUsers);// e aqui os que retornaram com o valor false


