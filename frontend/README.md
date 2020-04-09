### Sobre:

- Aplicação frontend utilizando React, Babel e Webpack.

---

### Ferramentas utilizadas:

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)

---

### Comandos utilizados na instalação:

#### Instalando a biblioteca do react e react-dom: 

 yarn add react react-dom 

#### Instalando as bibliotecas do babel e webpack:

 yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli 

#### Instalando a funcionalidade para transpilar os arquivos:

 yarn add @babel/cli 

#### Transpilando a aplicação:

 yarn babel src/index.js --out-file public/bundle.js

#### Instalando o pacote para ser utilizado no webpack:

 yarn add babel-loader

#### Instalando a funcionalidade do webpack de servidor:

 yarn add webpack-dev-server -D

#### Executando o servidor:

 yarn webpack-dev-server --mode development

---


### Conceitos

Babel: Converter (transpilar) código do React para um código que o browser entenda.

Webpack: Para cada tipo de arquivo (.js, .css, .png), irá converter o código de uma maneira diferente.
 
(utilizado pelo webpack)

Loaders: babel-loader, css-loader, image-loader, etc.


JSX: HTML dentro do Javascript (Javascript XML)


