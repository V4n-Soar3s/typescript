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
app.get('/', (req, res) => {//estou inicializando uma rota get para o express
    res.json({message: 'Primeira rota criada com sucesso!'})
})



app.listen(3000)// até esse ponto é o minimo setup que nós vamos ter para criar uma api 