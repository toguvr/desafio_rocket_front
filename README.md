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

Este projeto consiste em uma aplicação web de e-commerce em que seus usuários podem estar acessando tanto pelo browser de suas máquinas quanto por seus dispositivos móveis. Sendo assim a aplicação é responsiva.

<img src="./src/assets/desktop.gif"/>
<img src="./src/assets/responsivo.gif"/>

Mais imagens do projeto ao final.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [NextJs](https://pt-br.reactjs.org/) - Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React;
- [Typescript](https://www.typescriptlang.org/) - TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem;
- [Styled-Components](https://styled-components.com/) - Não utilizei nenhuma ui, fiz tudo com css puro;
- [GraphQl](https://graphql.org/) - GraphQL é considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.;
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

<img src="./src/assets/testsautomatizados.png"/>

<!-- GETTING STARTED -->

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

2. Depois do projeto clonado você pode entrar na pasta raiz e dar o comando `yarn` para instalar as dependências, após isto basta colocar no arquivo ".env.local" (Se nao existir basta criar na raíz), NEXT_PUBLIC_API_URL= (http://localhost:3333 ou **ou utilizar a api disponibilizada https://rocketseat-frontend-challenge.herokuapp.com, mas até o momento 23/07 esta dando cors** rodar `yarn dev` para iniciar o front.

---

### Deploy na vercel

[![Live app](https://vercel.com/button)](https://desafio-rocket-front.vercel.app)

### Observações

1- Visando melhor performance e SEO para a home e as páginas dos produtos utilizei umas das maiores vantagens do next que é o poder de criar páginas estáticas com o next "getStaticProps" e já gerando para cada produto com o "getStaticPaths".

2- Utilizei o componente Image do próprio next na atualização 10 para melhor desempenho nas imagens que vem do back com sua cdn própria.

3- O componente "organizar por" tem as opções novidades e mais vendidos, porém a api nao tem estas opções dentro dos produtos. E ao ordenar todos itens por preço do menor para o maior a api esta trazendo errado, como na imagem:

<img src="./src/assets/studiograph.png"/>

4- O "Procurar" é para puxar por nome, mas o name só busca o nome exato da forma como esta na api e a api não tem um "like name" para puxar todos que contenham os caracteres. Sobre onde é mostrado a busca eu criei um slide a baixo para não atrapalhar a navegação e voltar a página inicial em toda busca, buscando melhorar ux.

5- No Carrinho os itens vem com um select com a quantidade, no protótipo não vem mostrando as opções de dentro do select, mas não acho que seria uma boa prática, uma vez que assim estaria limitando o usuário a comprar até "x" itens e nossa api não tem estoque. Para isto criei como plus um "+" e um "-" ao lado em vez do select, acredito ser uma melhor ux ? Mas segue foto também do app feito da forma antiga com o select.

<img src="./src/assets/cartSelect.png"/>

6- A api pública "https://rocketseat-frontend-challenge.herokuapp.com" esta dando cors em local e no deploy que fiz <a target="_blank" rel="noopener noreferrer" href="https://desafio-rocket-front.vercel.app">clicando aqui</a>

7- Os testes unitários, fiz apenas um de componente e um de uma página para demonstrar o conhecimento já que é um desafio extra.

8- Adicionei Toast ao adicionar ao carrinho e um dialog que abre ao excluir um item do carrinho para confirmar a ação, coloquei navegação no título dos itens do carrinho, todos para melhorar ux.

9- uscar eu apenas faço a busca se o usuário ficar mais que 1 segundo sem digitar para melhora de performance.

10- Utilizei alguns hooks a mais como useMemo em componentes pai que para quantidade de itens talvez não fizesse sentido para performance, mas coloquei para demonstrar o conhecimento sobre.

11- Ao finalizar compra, uma vez que não tem nada no protótipo, eu criei um dialog que abre avisando o usuário dizendo que realizou a compra com número do pedido (gerado randomicamente).

<img src="./src/assets/finalizar.png"/>

12- Conseguindo com tudo citado atingir uma performance, SEO e acessibilidade e boas práticas bons (todos a cima de 90), sendo que melhores práticas poderia melhorar quando liberar o cors, poque os erros no console afetaram (medido com a extensão do lighthouse já em ambiente de produção na vercel).

<img src="./src/assets/lighthouse.png"/>

### Telas do projeto para desktop e mobile

<img src="./src/assets/home.png"/>
<img style="width: 300px" src="./src/assets/homeMobile.png"/>
<img src="./src/assets/produto.png"/>
<img style="width: 300px" src="./src/assets/produtoMobile.png"/>
<img src="./src/assets/carrinho.png"/>
<img style="width: 300px" src="./src/assets/carrinhoMobile.png"/>

<!-- CONTACT -->

## Contato

Augusto Telles - [Github](https://github.com/toguvr) - **augustotf93@gmail.com**
