"use strict";
/*

Validação de props opcionais

-> Quando a propriedade é opcional, precisamos criar uma validação;
-> Isso acontece porque o TS não nos ajuda mais, já que ele deixa de controlar o valor que recebemos;
-> Para isto utilizamos uma condicional if, e conseguimos resolver a situação;

*/
//validando argumento opcional 
function saudacaoAvancada(primeiroNome, sobrenome) {
    //como validar com if?
    if (sobrenome !== undefined) {
        return `Olá, ${primeiroNome} ${sobrenome}, tudo bem?`;
    }
    //se nao tiver o sobrenome sera apresentada essa mensagem 
    return `Olá, ${primeiroNome}, tudo bem?`;
}
console.log(saudacaoAvancada("Vanessa", "Soares")); //invocamos a funcao 
console.log(saudacaoAvancada("Vanessa")); // invocamos a funcao sem o sobrenome 
