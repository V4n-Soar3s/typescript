//Funções que nao retornam em nada 
/**
 * Podemnos ter funções que não retornam em valores
 * Qual seria o tipo de dado indicado para essa situação?
 * Neste caso utilizamos void
 * Ele vai dizer ao TS que não temos um valor de retorno.
 * Veja abaixo na pratica:
 */

//Void(tipo de retorno para as funções que nao retornam nada)

function withoutReturn():void {//utilizamos o void para nao retornar nada
    console.log("Está função não tem retorno!")
    return 1//isso vai dar erro pq nao tem retorno essa é a regra do void
}

//vamos executar a função e nao ira retornar nada no navegador
withoutReturn()