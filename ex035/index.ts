/**
 * Generic Functions 
 * 
 * é uma estrategia para quando o tipo de retorno é relacionado ao tipo do argumento;
 * Por exemplo: um item de um array, pode ser string, boolean ou number;
 * Normalmente são utilizadas letras como T ou U para definir os generics, é uma convenção;
 * 
 */

//vamos ter uma função que irá criar o primeiro elemento de um array
function firstElement<T>(arr: T[]): T{
    return arr[0]
}