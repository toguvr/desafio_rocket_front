<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Desafio Rocketseat Frontend</h3>
</p>

<!-- TABLE OF CONTENTS

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato) -->

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto consiste em uma aplicação web de e-commerce em que seus usuários podem estar acessando tanto pelo browser de suas máquinas quanto por seus dispositivos móveis. Sendo assim uma aplicação responsiva.

<img src="./src/assets/desktop.gif"/>
<img src="./src/assets/responsivo.gif"/>

Mais imagens do projeto ao final.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [NextJs](https://pt-br.reactjs.org/) - Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React;
- [Typescript](https://www.typescriptlang.org/) - TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem;
- [Styled-Components](https://styled-components.com/) - Styled-components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. Eles são escritos em uma mistura de JavaScript com CSS.
- [GraphQl](https://graphql.org/) - GraphQL é considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API;
- [Cypress](https://www.cypress.io/) - O Cypress.io é um framework de testes automatizados end-to-end usando JavaScript;
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;
- [@testing-library/react](https://testing-library.com/) - Lib para fazer testes unitários, fiz como exemplo testes em componentes, hooks e em página;

## <!-- GETTING STARTED -->

---

### Instalação

1. Para instalar e utilizar a api, basta clonar o projeto utilizando o comando:

```sh
git clone https://github.com/Rocketseat/frontend-challenge.git
```

2. Depois da api clonada você pode entrar na pasta "api" do projeto e dar o comando `yarn` para instalar as dependências, após isto basta rodar `yarn start` para iniciar .

1. Para instalar e utilizar o front em nextjs, o processo é bem simples, basta clonar o projeto utilizando o comando:

```sh
git clone https://github.com/toguvr/desafio_rocket_front.git
```

2. Depois do projeto clonado você pode entrar na pasta raiz e dar o comando `yarn` para instalar as dependências, após isto basta colocar no arquivo ".env.local" (Se nao existir basta criar na raíz), NEXT_PUBLIC_API_URL= (http://localhost:3333 **ou utilizar a api disponibilizada https://rocketseat-frontend-challenge.herokuapp.com, mas até o momento 23/07 esta dando cors** rodar `yarn dev` para iniciar o front.

---

### Teste e2e com Cypress

Criado teste e2e com cypress para garantir que o usuário consiga clicar no produto escolhido, ir para página de detalhe do produto, clicar para adicionar ao carrinho, clicar na "bag" para ir para página do carrinho, finalizar a compra e aparecer a mensagem de sucesso, tudo em tamanho desktop e mobile para também garantir as funcionalidades no responsivo.

Para rodar o teste:

```sh
yarn cypress run
```

<img src="./src/assets/e2e.png"/>

---

### Testes unitários

Criado testes unitários de componente (Criei do Dialog e da paginação para demonstração), hook (Criei do cart, pois acredito ser o componente mais importante da aplicação) e páginas (Teste da renderização correta do carrinho e inclusive testando o staticPaths e staticProps da página de detalhe do produto) .

Para rodar o teste:

```sh
yarn jest
```

<img src="./src/assets/unitarios.png"/>

---

### Deploy na vercel

**funcionando com apenas os primeiros 12 itens da home e todos as páginas de detalhes de itens devido ao cache realizado com o getStaticProps do next, uma vez que em produção a api esta dando cors**

[![Live app](https://vercel.com/button)](https://desafio-rocket-front.vercel.app)

---

### Observações

1- Visando melhor performance e SEO para a home e as páginas dos produtos utilizei umas das maiores vantagens do next que é o poder de criar páginas estáticas (cache) com o next "getStaticProps" e já gerando para cada produto com o "getStaticPaths".

2- Utilizei o componente Image do próprio next da atualização 10 para melhor desempenho nas imagens que vem do back com sua cdn própria.

3- O componente "organizar por" tem as opções novidades e mais vendidos, porém a api nao tem estas opções dentro dos produtos. E ao ordenar todos itens por preço do menor para o maior a api esta trazendo errado, como na imagem:

<img src="./src/assets/studiograph.png"/>

4- O "Procurar" é para puxar por nome, mas o filtro name só busca o nome exato da forma como esta escrito na api e a mesma não tem um "like name" para puxar todos que contenham os produtos com nome com caracteres digitados. Sobre onde é mostrado a busca eu criei um slide a baixo para não atrapalhar a navegação e voltar a página inicial em toda busca (uma vez que o componente buscar aparece em todas as telas), buscando melhorar ux.

5- No Carrinho os itens vem com um select com a quantidade, mas no protótipo não vem mostrando as opções de dentro do select, mas não acredito que seria uma boa prática, uma vez que assim estaria limitando o usuário à comprar até "x" itens e nossa api não tem estoque. Para isto criei como "plus" um "+" e um "-" ao lado da quantidade em vez do select. Acredito ser uma melhor prática para ux. Mas segue uma foto também do app feito da forma antiga com o select como mandava o protótipo.

<img src="./src/assets/cartSelect.png"/>

6- A api pública "https://rocketseat-frontend-challenge.herokuapp.com" esta dando cors em local e em produção no deploy que fiz, veja <a target="_blank" rel="noopener noreferrer" href="https://desafio-rocket-front.vercel.app">clicando aqui</a>

7- Os testes unitários, fiz apenas de alguns componentes, um do hook do carrinho (por acreditar ter as funcionalidades mais importantes do e-commerce) e de páginas fiz do carrinho e da página de produto (este realizando o teste na parte de cache do next, testando o staticPaths e staticProps) para demonstrar o conhecimento já que é um desafio extra.

8- Coloquei um Toast ao adicionar ao carrinho e um dialog que abre ao excluir um item do carrinho para confirmar a ação, coloquei navegação no título dos itens do carrinho, todos para melhorar ux.

9- Ao digitar algo no buscar, apenas é realizada a query na api se o usuário ficar mais que 1 segundo sem digitar para melhorar a performance.

10- Utilizei alguns hooks a mais como useMemo e useCallback em componentes "pais" que para quantidade de itens em tela talvez não fizesse sentido para performance, mas coloquei para demonstrar o conhecimento sobre.

11- Ao finalizar a compra, uma vez que não tem nada no protótipo, eu criei um dialog que abre avisando o usuário dizendo que realizou a compra com número do pedido (gerado randomicamente).

<img src="./src/assets/finalizar.png"/>

12- Conseguindo com tudo citado atingir performance, boas práticas, acessibilidade e SEO bons (todos a cima de 90), sendo que melhores práticas poderia melhorar quando liberar o cors, porque os erros no console afetaram (medido com a extensão do lighthouse já em ambiente de produção na vercel).

<img src="./src/assets/lighthouse.png"/>

---

### Telas do projeto para desktop

<img src="./src/assets/home.png"/>
<img src="./src/assets/produto.png"/>
<img src="./src/assets/carrinho.png"/>

---

### Telas do projeto para mobile

<img src="./src/assets/homeMobile.png"/>
<img src="./src/assets/produtoMobile.png"/>
<img src="./src/assets/carrinhoMobile.png"/>

---

<!-- CONTACT -->

## Contato

Augusto Telles - [Github](https://github.com/toguvr) - **augustotf93@gmail.com**
