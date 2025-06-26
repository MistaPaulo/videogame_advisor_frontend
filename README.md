# Chatbot de Recomendação de Videojogos – Frontend (React)

Interface Web que permite ao utilizador interagir com o chatbot de recomendações de videojogos.

## Pré‑requisitos

* Node.js **≥ 18** (inclui npm)
* Backend da API a correr localmente ou acessível via URL pública

## Instalação

```bash
git clone https://github.com/MistaPaulo/videogame_advisor_frontend.git
cd frontend
npm install
```

## Configuração

Cria um ficheiro **`.env`** na raiz do _frontend_ com:

```
REACT_APP_BACKEND_URL=http://127.0.0.1:8000
```

> Ajusta a URL se o backend estiver noutro domínio/porta.

## Execução em modo desenvolvimento

```bash
npm start
```

* A aplicação abre em <http://localhost:3000>
* Qualquer alteração em `src/` faz recarregamento automático (HMR).

## Build para produção

```bash
npm run build
```

* Gera a pasta `build/` com ficheiros estáticos otimizados (HTML, JS, CSS, imagens).

## Deploy

Serviços de _static hosting_ compatíveis (Render Static Site, Netlify, Vercel, etc.) precisam apenas da pasta **build/**.

Exemplo Render:
1. **Novo Static Site** → repositorio `frontend`
2. _Build Command_: `npm install && npm run build`
3. _Publish Directory_: `build`
4. Variável de ambiente `REACT_APP_BACKEND_URL` com a URL do backend ativo
