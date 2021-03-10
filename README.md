## :bookmark: Projeto BackEnd NodeJs

Aplicação proposta como teste da empresa Seven.
Aplicação criada com NodeJs, utilizando o framework Express para facilitar e otimizar recursos na criação das requisições web.
Foi utilizado o typeORM para mapear objetos e entidades da aplicação para a Base de Dados(SQlite).

## A aplicação consiste em 5 rotas:

- GET /employees - Lista todos os empregados
- GET / employees /{id} - Busca um empregado por id
- POST / employees - Cria um novo empregado
- PUT / employees /{id} - Edita um empregado
- DELETE / employees /{id} - Deleta um empregado

## Padrão e estrutura do projeto

Foi utilizado o padrão MVC para estrutrar o projeto para facilitar a 
troca de informações entre a interface do usuário ao dados no banco, 
fazendo com que as respostas sejam mais rápidas e dinâmicas.

- Model: gerencia e controla a forma como os dados se comportam por meio das funções, lógica e regras de negócios estabelecidas. 
- Conttroler: intermedia as requisições enviadas pela View com as respostas fornecidas pelo Model.
- View: apresenta as informações de forma visual ao usuário.


## Tecnologias Utilizadas

-  [Express](https://expressjs.com/)
-  [TypeORM](http://knexjs.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Typescript](https://www.typescriptlang.org/)
-  [SQLite](https://www.sqlite.org/)

## Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/EduardoMoreira26/seven-inc.git
```

2. Executando a Aplicação:

```sh
  # Instalando as dependências do projeto.
  $ yarn install # ou npm install

  # CONFIGURANDO O BANCO DE DADOS E A CRIAÇÃO DE TABELAS.
  $ yarn typeorm migration:run  # ou npm run typeorm migration:run 
  
  # Inicie a API
  $ yarn dev # ou npm dev
```
