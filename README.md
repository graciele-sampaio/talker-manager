<div align="center">
  <img alt="image-talker" src="https://i.imgur.com/G2TRpkP.png"/>
</div>

<h1 align="center">Talker Manager</h1>

<p align="center">Desenvolvi uma API na qual é possível cadastrar, listar, atualizare deletar palestrantes(talkers), você pode testar as requisições e verificar o response a partir da extensão "Thunder Client" disponível no Visual Studio Code, através do Postaman ou Insomnia.</p>



## Tecnologias utilizadas

[<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" title="Docker" height="25" />](https://docs.docker.com/get-started/overview/)
&nbsp;
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" title="Express" height="25" />](https://devdocs.io/express/)
&nbsp;
[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" title="Node" height="25" />](https://nodejs.org/en/docs)
&nbsp;

## Rodando com Docker

Clone o repositório 
```bash
git@github.com:graciele-sampaio/talker-manager.git
```

Entre na pasta criada:

```bash
  cd talker-manager
```

Instale as dependências
```bash
  npm install
```

Rodando o serviço do node no Docker.
```bash
  docker-compose up -d --build
```

Para executar o terminal no container:
```bash
docker exec -it talker_manager bash
```

Para executar a aplicação com o nodemon, uilize o comando:
```bash
npm run dev
```

## Rodando localmente 
- Para rodar dessa foma, obrigatoriamente você deve ter instalado em seu computador a versão 16 do node.

Clone o repositório 
```bash
git@github.com:graciele-sampaio/talker-manager.git
```

Entre na pasta criada:

```bash
  cd talker-manager
```

Instale as dependências
```bash
  npm install
```

## Documentação da API

#### Passando email, senha e retorna o token 
```http
  POST /login
```
- Formato do corpo da requisição:
```http
{
  "email": "email@email.com",
  "password": "123456"
}
```

- Token
```http
{
  "token": "7mqaVRXJSp886CGr"
}
```
##

#### Retorna um array com todos os palestrantes

```http
  GET /talker
```

##
#### Retorna um palestrante a partir do id passado como parâmetro

```http
  GET /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que você quer |

##
#### Cadastra um palestrante
```http
  POST /talker
```

- Formato do corpo da requisição:
```http
  {
  "name": "Username",
  "age": 26,
  "talk": {
    "watchedAt": "13/10/2021",
    "rate": 8
  }
}
```
##

#### Atualiza dados do palestrante a partir do id passado como parâmetro
```http
  PUT /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que você quer |

##

#### Deleta o palestrante a partir do id passado como parâmetro
```http
  DELETE /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que você quer |

##
## Tabela resumo

|  Método | Rota  |Parâmetro   |Tipo   | Descrição  |
| :------------ | :------------ | :------------ | :------------ | :------------ |
|GET    | /talker  | - - -  | - - -   | Retorna um array com todas as pessoas cadastradas   |
| GET   |/talker/:id   | id  |number   |Busca palestrante com base  no id passado como parâmetro |
| POST  |/login   |email / password   | string / string | Passando email e password, retorna um token |
| POST  |/talker   | formato json tópico: "Documentação"   |string / number   | Cadastra um palestrante a partir do id passado como parâmetro  |
|  PUT  | /talker/:id  | id  |number   | Atualiza os dados de um palestrante passando a partir do id passado como parâmetro  |
|DELETE   |/talker/:id    |id   |number   | Deleta um palestrante a partir do id passado como parâmetro   |


