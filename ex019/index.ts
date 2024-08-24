//Tipo Any (evitar utilizar, pois, vai contra os principios de TS)

//iremos criar um array de vários tipos 
const arr1: any = [1, "teste", 2, true, [], {nome: "Vanessa"}]; //quando utilizamos o tipo any damos permissao ao ts para aceitar qualquer tipo dentro do array

console.log(arr1);// solicitamos que seja apresentado o array no console

arr1.push([1, 2, 3]);// tbm podemos adicionar um outro array dentro do array sem que ele reclame 

console.log(arr1);// solicitamos que seja apresentado novamente com o novo array no console 

