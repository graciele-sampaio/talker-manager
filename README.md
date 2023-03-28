<div align="center">
  <img alt="image-talker" src="https://i.imgur.com/G2TRpkP.png"/>
</div>


# Talker Manager 
Desenvolvi uma API na qual é possível cadastrar, listar, atualizare deletar palestrantes(talkers).


## Tecnologias utilizadas

[<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" title="Docker" height="25" />](https://docs.docker.com/get-started/overview/)
&nbsp;
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" title="Express" height="25" />](https://devdocs.io/express/)
&nbsp;
[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" title="Node" height="25" />](https://nodejs.org/en/docs)
&nbsp;

## Instalação

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

Rodando O serviço do node no Docker.
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
## Documentação da API

#### Passando email, senha e retorna o token 
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
#### Retorna um palestrante a partir do id

```http
  GET /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que você quer |

##
#### Cadastra um palestrante
- Formato do corpo da requisição:
```http
  POST /talker
```
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
#### Atualiza dados do palestrante a partir do id
```http
  PUT /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que você quer |

##

#### Deleta o palestrante a partir do id
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
| GET   |/talker/:id   | id  |number   |Busca palestrante com base no id passado  |
| POST  |/login   |email / password   | string / string | Passando email e password, retorna um token |
| POST  |/talker   | formato json tópico Documentação)   |string / number   | Cadastra um palestrante  |
|  PUT  | /talker/:id  | id  |number   | Atualiza os dados de um palestrante passando o seu id  |
|DELETE   |/talker/:id    |id   |number   | Deleta um palestrante passando o seu id   |


