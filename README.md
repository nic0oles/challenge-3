# Projeto de Vídeos

Este projeto é uma aplicação para gerenciar vídeos, com funcionalidades para listar vídeos, adicionar novos vídeos, editar vídeos e excluir vídeos. A aplicação é construída com React para o frontend e utiliza um servidor JSON simulado para armazenar os dados dos vídeos.

## Funcionalidades

- Exibição de vídeos em uma lista com categorias.
- Adição de novos vídeos.
- Edição e exclusão de vídeos existentes.
- Modal para editar vídeos.
- Navegação entre as páginas da aplicação com React Router.

## Tecnologias Utilizadas

- React
- React Router
- JSON Server
- CSS para estilização

## Pré-requisitos

Antes de rodar o projeto, você precisará ter o *Node.js* e o *npm* (ou *yarn*) instalados. Caso não tenha, instale-os através do [site oficial do Node.js](https://nodejs.org/).

### 1. Rodando o Frontend (React)

Para rodar o frontend, siga as etapas abaixo:

1. Clone o repositório:

   bash
   git clone https://github.com/nic0oles/challenge-3.git
   cd challenge-3
   

2. Instale as dependências:

   Se estiver usando *npm*:

   bash
   npm install
   

   Ou, se estiver usando *yarn*:

   bash
   yarn install
   

3. Inicie o servidor de desenvolvimento:

   Se estiver usando *npm*:

   bash
   npm start
   

   Ou, se estiver usando *yarn*:

   bash
   yarn start
   

   Isso abrirá o frontend React no navegador, normalmente acessível em http://localhost:3000.

### 2. Rodando o Servidor JSON

Este projeto usa o *JSON Server* para simular um banco de dados. Para rodá-lo, siga as etapas abaixo:

1. Se você ainda não tiver o *JSON Server* instalado, instale-o globalmente:

   bash
   npm install -g json-server
   

2. No diretório do projeto, crie um arquivo db.json com a seguinte estrutura para simular os dados dos vídeos:

   json
   {
     "videos": [],
     "categories": [
       { "id": 1, "name": "Frontend" },
       { "id": 2, "name": "Backend" },
       { "id": 3, "name": "Mobile" }
     ]
   }
   

3. Inicie o servidor JSON com o seguinte comando:

   bash
   json-server --watch db.json --port 3001
   

   Isso fará com que o servidor JSON fique disponível em http://localhost:3001, e ele simulará uma API REST para os vídeos e categorias.

### 3. Observação sobre a Funcionalidade de Edição

A funcionalidade de *edição de vídeos* está funcionando, mas apresenta um pequeno problema em relação à responsividade do botão "Salvar". Atualmente:

- O vídeo é editado corretamente no banco de dados quando o botão "Salvar" é clicado.
- Contudo, a página precisa ser recarregada manualmente para visualizar as mudanças feitas.
