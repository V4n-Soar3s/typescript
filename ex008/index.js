//Classes

//Como criamos uma classe?
class Produto{
    constructor(name, price){//add o método chamado constructor que a cada objeto criado no nosso código ele vai ser ativado automaticamente 
        this.name = name;//ele esta informando que o name desse objeto que foi criado agora é igual ao name passado pelo constructor
        this.price = price; //ele esta informando que o price desse objeto que foi criado agora é igual ao price passado pelo constructor
    }
    
    //vamos criar um metodo, faremos isso criando o nome dele
    produtoComDesconto(desconto){
        return this.price * ((100 - desconto)/100);// desconto de 10%
    }
} 

//como instanciar um objeto para essa classe?
const camisa = new Produto("Camisa gola v", 20);// aqui eu instaciei a camisa e o valor dela para dentro da classe produto

console.log(camisa.name, camisa.price);// aqui foi solicitado que seja impresso o nome e valor do produto 

// tambem podemos passar o nosso desconto que seria o uso do nosso method
console.log(camisa.produtoComDesconto(5));//produto com 5% de desconto
console.log(camisa.produtoComDesconto(50));//produto com 50% de desconto 

const tenis = new Produto("Tênis Vans", 299.99);

console.log(tenis.name, tenis.price);
console.log(tenis.produtoComDesconto(30));
console.log(tenis.produtoComDesconto(45));


