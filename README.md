# spider-nodejs

## Setup inicial

### Node.js

* Instale o node.js pelo site:
* https://nodejs.org/en/download/

## Instalação

* No repositório do projeto, rode o comando:
* ```npm install```

## Execução

* Para iniciar o spider, execute o comando:
* ```npm start```

## Utilização

* Ao inicar o spider, utilize ou o Postman ou um navegador web.
* O spider roda pela porta 3000 por default.
* Para começar a fazer o crawl, digite na barra de busca do seu navegador:
* ```localhost:3000/spider/search/:termo_de_pesquisa/limit/:limite_de_paginas```
* O ```:termo_de_pesquisa``` é o termo a ser pesquisado no google, e será a página inicial para o spider começar.
* O ```:limite_de_paginas``` é o número máximo de páginas que o spider vai salvar na pasta ```/pageDump``` na raiz do projeto.
* Exemplo de entrada:
* ```localhost:3000/spider/search/unb/limit/100000```
* Nesse exemplo, o spider começará seu crawl na página ```https://www.google.com.br/search?q=unb``` e salvará 100000 páginas na pasta ```/pageDump```
