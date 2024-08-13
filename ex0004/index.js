//Method Map - Baseado na condição nós podemos modificar alguma coisa nos itens, o map serve para percorrer cada um dos itens 

//criei um array de produtos 
const products = [
    {name: 'Camisa', price:10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price:49.99, category: 'Eletro'},
    {name: 'Fogão', price:400, category: 'Eletro'},
    {name: 'Calça', price:59.99, category: 'Roupas'},
]

//iremos criar um método map para que todos os itens que sejam roupas fiquem em promoção 
products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true;//adicionei uma propriedade nesse produto que quer dizer que esta na promoção 
    }
}) 

console.log(products);// a partir do momento que dermos esse comando vamos ter o dado modificado informando que o products que pertence a categoria selecionada estao em promoção no nosso site


