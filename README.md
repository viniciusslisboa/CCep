<h1 align="center">
    <img alt="Node API" src="./assets/nodejs-icon.svg"  width="200px" >
</h1>


# Sobre

=> Utilizando express no node como base para criar um servidor e axios para consumir a API JSON Placeholder no back-end e usando FETCH da API viaCep no front-end.

# Back-end 

=> Para o back-end a tecnologia utilizada foi o Node.js, utilizei o express para criar o servidor, 
axios para fazer a requisição da API externa e o cors para liberar a comunicação do meu servidor.

=> Declarei as váriaveis e requisitei as dependencias necessárias com o REQUIRE. Ex.:"const express = require('express')".

=> Criei a rota e utilizei uma função asíncrona para fazer a requisição da API JSON placeholder, que retorna uma promisse.

=> Retornei a resposta da API em formato de JSON.

# Front-end 

=> No front-end utilizei do FETCH para fazer as requisições, só que utilizando outra API externa (viaCep), 
mas também poderia requisitar minha própria API, que estaria consumindo indiretamenta a API JSON placeholder, 
só que pelo servidor local.

=> Pegando o valor do input (Cep fornecido pelo usuário), inicio um TRY/CATCH e novamente utilizo uma função asíncrona, 
capturo o RESPONSE em uma váriavel e depois o armazeno em outra váriavel só que agora transformando em JSON.

=> Chamo a função showContent com DATA como parâmetro, e na função showContent uso a estrura de repetição WHILE transformo DATA em array e 
utilizo interpolação para ajudar na apresentação dos dados em tela.

# Tecnologias 

=> Javascript
=> Node.js
=> JSON
=> HTML5
=> CSS3


# Dependências

=>  "axios": "^0.21.1",
=>  "cors": "^2.8.5",
=>  "express": "^4.17.1",
=>  "nodemon": "^2.0.12"