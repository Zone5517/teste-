<<<<<<< HEAD
# teste-
=======
# Sistema de Gerenciamento Escolar Infantil - Backend

## 📁 Estrutura do Repositório

- `APP/` - Código-fonte do backend (Node.js + Express + Sequelize)
- `Docs/` - Documentos do projeto (MER e DFD)
- `Dockerfile.app` - Dockerfile da aplicação backend
- `Dockerfile.db` - Dockerfile do banco de dados
- `init.sql` - Script SQL para criação das tabelas
- `docker-compose.yml` - Orquestração dos serviços (app, db, nginx)

## 🚀 Como Executar

1. **Clonar o repositório e acessar a pasta**

```bash
git clone <repo-url>
cd escola-unifaat-backend
```

2. **Subir os containers com Docker Compose**

```bash
docker-compose up --build
```

3. **Testar API**

- Listar alunos: `GET http://localhost/alunos`
- Criar aluno: `POST http://localhost/alunos` com JSON:
```json
{
  "nome": "Maria",
  "data_nascimento": "2019-05-10",
  "responsavel": "João"
}
```

## 🗂️ Estrutura da Pasta APP

- `index.js` – ponto de entrada
- `config/database.js` – configuração do Sequelize
- `models/` – definição dos modelos
- `controllers/` – lógica de negócio
- `routes/` – rotas da API
>>>>>>> 252902d (primeiro commit)
