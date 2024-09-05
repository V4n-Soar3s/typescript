"use strict";
//Operador in em narrowing 
//vamos criar uma classe que contenha nome e raça
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed; //iremos criar um check para breed devido a mesma ser opcional, se ela vier será a breed do cão 
        }
    }
}
//faremos uma variavel sem raça e uma com raça, exemplo:
const maya = new Dog("Maya"); //cachorro sem raça
const bob = new Dog("Bob", "Pastor Alemão"); //cachorro com raça 
function showDogDetails(dog) {
    if ('breed' in dog) { //se a raça existe em cachorro
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é um SRD`);
    }
}
showDogDetails(maya);
showDogDetails(bob);
//criar uma funcao que receba review de usuarios
function reviewUsers(avaliacao) {
    if (avaliacao === 1) {
        console.log(`A nota da avaliação foi 1`);
    }
    else if (avaliacao === 2) {
        console.log(`A nota da avaliação foi 2`);
    }
    else if (avaliacao === 3) {
        console.log(`A nota da avaliação foi 3`);
    }
    else if (avaliacao === 4) {
        console.log(`A nota da avaliação foi 4`);
    }
    else if (avaliacao === 5) {
        console.log(`A nota da avaliação foi 5`);
    }
    else {
        console.log(`false`);
    }
}
reviewUsers(4);
function showUserReview(review) {
    if (!review) {
        console.log("Você não avaliou o produto");
        return;
    }
    console.log(`A nota que você deu foi: ${review}, obrigado`);
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
