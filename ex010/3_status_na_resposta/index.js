//primeira api

//chamar o express
const express = require('express');
//iniciar o express
const app  = express();
//ler a requisição em json
app.use(
     express.urlencoded({
        extended: true
     })
)

app.use(express.json())

//agora vamos criar nossas rotas conhecidas tambem como endpoints, são muito utilizados para determinar a funcionalidade da api

//criaremos uma simulação de cadastro de produtos
app.post('/createproduct', (req, res)=> {
    //vamos ter que pegar dois parametros dentro do post
    const name = req.body.name;
    const price = req.body.price;

    //respostas de erro
    if(!name){
        res.status(422).json({message: 'O campo nome é obrigatório!'})
        return//para parar a execução quando apresenta esse erro
    }

    console.log(name);//sera exibido no console
    console.log(price);//sera exibido no console

    //enviar uma resposta com status definido 
    res.status(201).json({message:`O produto ${name} foi criado com sucesso!`})
})

app.get('/', (req, res) => {//estou inicializando uma rota get para o express
    res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)// até esse ponto é o minimo setup que nós vamos ter para criar uma api 