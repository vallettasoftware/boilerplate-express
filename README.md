# Boilerplate: Node.js Web API service by express framework
# CI/CD: deployment as Docker Container

A multifunctional enterprise HTTP API project template based on modern approaches and the latest version of express framework.

CI/CD configured using BitBucket:
- runs linting and tests
- creates a Docker image and places it in the registry.
- the application is deployed and launched in Docker Container

*Change `BoilerplateApi` to your project name.*

## Features Summary:

- TypeScript
- [express](https://expressjs.com/) framework 
- Linting by [eslint](https://eslint.org/)
- Tests by [jest](https://jestjs.io/)
- Docker

Install locally:

```bash
npm ci
```

Run linter:

```bash
npm run lint-fix
```

Run unit tests:

```bash
npm run test
```

Run locally:

```bash
npm run dev
```

Run in Docker container:

```bash
docker-compose up
```

Open in browser:

```url
http://localhost:3000
```

