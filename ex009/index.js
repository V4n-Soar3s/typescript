//Herança

class Produto {
    constructor(name, price) {//add o método chamado constructor que a cada objeto criado no nosso código ele vai ser ativado automaticamente 
        this.name = name;//ele esta informando que o name desse objeto que foi criado agora é igual ao name passado pelo constructor
        this.price = price; //ele esta informando que o price desse objeto que foi criado agora é igual ao price passado pelo constructor
    }

    //vamos criar um metodo, faremos isso criando o nome dele
    produtoComDesconto(desconto) {
        return this.price * ((100 - desconto) / 100);// desconto de 10%
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


//iremos criar uma classe onde automaticamente estaremos pegando os produtos com desconto e tambem as propriedades de nome e preço  
class ProdutoComAtributos extends Produto {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors;
    }
    //vamos criar um metodo
    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color);
        })//vamos criar um looping onde podemos fazer o que quisermos
    }
}

//vamos criar um novo produto, pois foi criada uma classe com mais atributos 
const chapeu = new ProdutoComAtributos("Chapéu", 29.99, ["Preto", "Azul", "Vermelho"]);

console.log(chapeu.name, chapeu.price)

console.log(chapeu.produtoComDesconto(50));

chapeu.showColors()