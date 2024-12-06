# 📚 Kobo Highlight Export Web App Roadmap (with pnpm)

## 🛠️ Project Setup
- [ ] Initialize project repositories:
  - [ ] Set up GitHub/GitLab repository.
  - [ ] Define folder structure for frontend, backend, and database scripts.
- [ ] Configure development environment:
  - [ ] Install `pnpm` globally 
  - [ ] Install Node.js (LTS version).
  - [ ] Set up PostgreSQL locally.
- [ ] Initialize the project:
  - [ ] Run `pnpm init` to create a `package.json` file.
  - [ ] Create separate workspaces for **frontend** and **backend** using pnpm's monorepo support:
    ```bash
    pnpm init
    mkdir frontend backend
    cd frontend && pnpm init
    cd ../backend && pnpm init
    ```
  - [ ] Add `pnpm-workspace.yaml` for workspace management:
    ```yaml
    packages:
      - 'frontend'
      - 'backend'
    ```

---

## 🔗 Backend Development
### Phase 1: API Foundation
- [ ] Set up the backend:
  - [ ] Install dependencies:
    ```bash
    cd backend
    pnpm add express pg dotenv
    pnpm add -D typescript @types/node @types/express ts-node nodemon
    ```
  - [ ] Initialize TypeScript:
    ```bash
    pnpm tsc --init
    ```
  - [ ] Configure a `nodemon.json` for live reloading during development.
  - [ ] Write a basic Express server in `src/index.ts`.

- [ ] Set up PostgreSQL connection:
  - [ ] Install PostgreSQL client library: `pnpm add pg`.
  - [ ] Create a `.env` file for database credentials.
  - [ ] Write a simple query to test the connection.

- [ ] Define REST API structure:
  - [ ] **POST** `/upload`: Endpoint to upload `koboreader.sqlite`.
  - [ ] **GET** `/highlights`: Fetch parsed highlights from the database.
  - [ ] **GET** `/books`: Fetch list of books with highlights.
  - [ ] **DELETE** `/highlights/:id`: Delete specific highlight.

### Phase 2: SQLite Parsing and Data Ingestion
- [ ] Install SQLite parser library (`pnpm add better-sqlite3`).
- [ ] Write logic to:
  - [ ] Extract highlights from `koboreader.sqlite`.
  - [ ] Normalize and map data to database schema.
  - [ ] Insert parsed highlights into PostgreSQL tables.
- [ ] Handle file validation and error cases (e.g., unsupported formats).

### Phase 3: Data Export and Advanced Features
- [ ] Add export endpoints:
  - [ ] **GET** `/export/csv`: Export highlights as CSV.
  - [ ] **GET** `/export/json`: Export highlights as JSON.
  - [ ] **GET** `/export/markdown`: Export highlights as Markdown.
- [ ] Add search and filtering support:
  - [ ] Query highlights by book, keyword, or timestamp.
  - [ ] Paginate large result sets.

---

## 🎨 Frontend Development
### Phase 1: Basic Setup
- [ ] Set up React with Vite:
  ```bash
  cd frontend
  pnpm create vite .