// 2 - Arrow Function 

//criamos uma função de soma que ira retornar o resultado de a+b
const soma = function(a, b){
    return a + b;
}

//criamos uma arrow function que irá nos trazer o mesmo resultado que a function, para declararmos uma arrow function declaramos uma variavel e setamos seus valores com a seguinte sintaxe abaixo:
//Quando temos uma arrow function de apenas uma linha podemos colocar tudo em uma só linha segue exemplo:
const arrowSoma = (a, b) => a + b;

//Solicitamos que seja retornado tanto o valor da função criada quanto o da arrow function
console.log(soma(5, 5));
console.log(arrowSoma(5, 5));

//Se for necessário corpo na arrow function faremos desta forma: 
const saudacao = (name) =>{
    if(name){
        return "Olá " + name + "!";
    }else{
        return "Olá!";
        }
    }

console.log(saudacao("Vanessa"));// um ira retornar a primeira mensagem concatenada com o nome digitado
console.log(saudacao());// como ficou em vazio ira retornar o valor contido no else 

//Também temos a possibilidade de quando não há argumentos na arrow function colocarmos apenas assim:

const testeArrow = () => console.log("testou!");

testeArrow();//chamamos a arrow function

//this arrow function
//iremos criar um objeto com um nome
const user = {
    name:'Theo', 
    nomeDoUsuario(){//iremos criar duas funções onde o this ira nos ajudar utilizando arrow function
        var self = this
        setTimeout(function(){//a partir daqui o nosso this é window porque nós nao estamos mais ligado ao objeto
            console.log(self);
            console.log("Username: " + self.name)
        }, 500)
    },
    nomeDoUsuarioArrow(){
        setTimeout(()=>{
            console.log(this);
            console.log('Username: '+ this.name);
        }, 700)
    },
}

user.nomeDoUsuario();
user.nomeDoUsuarioArrow();

