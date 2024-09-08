// callback como argumento 

//criaremos uma função de saudação para ser executada
function greeting(name:string):string{
    return `Olá ${name}`
}

//criaremos uma função de pré saudação onde teremos como callback uma função representada por f
function preGreeting(f: (name:string) => string, userName: string){//vamos tipar os argumento dentros dos parenteses e depois iremos tipar a saida 
    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)

}

preGreeting(greeting, "Vanessa");//estamos chamando a função pre saudação e logo após a função de saudacao
preGreeting(greeting, "Luiz");
preGreeting(greeting, "Julia");
preGreeting(greeting, "Bruna");
