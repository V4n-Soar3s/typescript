//Destructuring 

//criei um array de frutas
const frutas = ["Maçã", "Laranja", "Pêssego", "Uva"];

//agora vamos colocar cada uma dessas frutas em uma variavel, isso é o destructuring em arrays: 
const [f1, f2, f3, f4] = frutas;

console.log(f4);//se eu solicitar pra imprimir no console o valor o indice da uva sera exibido 
console.log(f2);//se eu solicitar pra imprimir no console o valor o indice da laranja sera exibido 

//Destructuring em objetos
const produtosDetalhes = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = produtosDetalhes;//aqui eu vou dar "novos nomes aos elementos dentro da variavel produtos detalhes"
console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`);




