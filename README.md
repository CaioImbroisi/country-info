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

## Instalando
Para instalar o <country-info> basta clonar o repositório e após isso utilize o comando:
```
npm install
```
Em seguida inicie-o localmnete utilizando o comando:
```
npm start
```
ou
```
npm run devs
```
