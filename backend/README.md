### Sobre:

- Aplicação para armazenar projetos utilizando Express.

---

### Ferramentas utilizadas:

- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Insomnia](https://insomnia.rest/)
- [Uuidv4](https://www.npmjs.com/package/uuidv4)
- [Cors](https://enable-cors.org/index.html)

---

### Como rodar:

- Primeiro clone o repositório ou faça download;
- Abra a pasta do projeto e rode no terminal:

  `$ yarn`

  `$ yarn dev`

- No insomnia, crie uma requisição (get, post, put, delete) e basta copiar as seguintes rotas:

  Método GET (listar projetos): http://localhost:3333/projects

  Método DELETE (deletar projeto): http://localhost:3333/projects/1

  Método POST (criar projeto): http://localhost:3333/projects,
      		Colocar no body: 
          {
      				"title": "Novo projeto",
              "owner": "Novo proprietário"
      		}

  Método PUT (atualizar projeto): http://localhost:3333/projects/1,
      		Colocar no body: 
          {
      				"title": "altera titulo",
              "owner": "altera proprietário"
      		}

---

### Comandos utilizados na instalação:

#### Instalando a biblioteca express

yarn add express

#### Instalando a biblioteca nodemon -D <desenvolvimento>

yarn add nodemon -D

#### Instalando a biblioteca uuidv4

yarn add uuidv4

#### Instalando a biblioteca cors

yarn add cors