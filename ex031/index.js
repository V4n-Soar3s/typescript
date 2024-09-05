"use strict";
//instance of (podemos utilizar instaceof para verificar se um dado pertence a uma determinada classe)
//criamos uma classe de usuario
class User {
    //vamos criar dentro da classe um objeto construtor
    constructor(name) {
        this.name = name;
    }
}
//vamos criar uma classe chamda SUPERUSER que irá extender o user ou seja fazer uma herança, herdando as propriedades e métodos existentes em user
class SuperUser extends User {
    constructor(name) {
        super(name); //esse constructor ira enviar o nome para a classe pai 
    }
}
const jhon = new User("Jhon"); // criamos um user
const paul = new SuperUser("Paul"); //criamos um super usuario
console.log(jhon); //usuario
console.log(paul); //super usuario 
function userGreeting(user) {
    if (user instanceof SuperUser) { //aqui iremos fazer um teste se o usuario que recebemos no parametros é um superUser
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}.`);
    }
}
userGreeting(jhon);
userGreeting(paul);
