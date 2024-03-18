# Country-info

### Neste projeto foi utilizado:

1. React.js
2. TypeScript
3. Tailwind
4. Axios

### O que é o country-info
Country-Info é um projeto onde o foco é a utilização do React.JS, junto a manipulação de states, props e componetização.

O projeto atualmente possui uma UI simples e intuitiva.

Ao buscar uma país é utilizado o Axios para fazer a requisição, e o retorno desta requisição
traz informações sobre o pais selecionado, como bandeira, nome, moeda etc, podendo alterar
entre a visualização em cards ou em tabela.

A cada busca fica salvo um histórico no seu LocalStorage, onde é exibido abaixo do resultado da busca
em forma de tabela, mostrando os países já pesquisados e também um link direto para a busca do país armazenado no histórico.

Este histórico esta disponível para download em CSV.

! A aplicação não esta totalmente adaptada para mobile !

## Instalando
Para instalar o <country-info> basta clonar o repositório 
```
SSH: git@github.com:CaioImbroisi/country-info.git
```
e executar o comando:
```
npm install
```
Em seguida inicie-o localmnete utilizando o comando:
```
npm start
```
ou
```
npm run dev
```
O projeto provavelmente será iniciado na porta 3000 (http://localhost:3000).

## Problemas?
Em caso de problemas para executar localmente, verifique se existe algum caractere após "http://localhost:3000" e remova-o, mantendo apenas ""http://localhost:3000".

Fique atento ao console em caso existam problemas na porta 3000, a aplicação tentará utilizar outra porta.
