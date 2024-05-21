# ChallengeXII - Fabio - Versão backend

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/fabusilva/ChallengeXII-Fabio-backend.git
```

2. Navegue até o diretório do projeto:

```bash
cd challengexii
```

3. Instale as dependências do projeto:

```bash
npm install
```
## Variaveis de ambiente

renomei o arquivo .env.copy para .env para se conectar ao banco de dados

## Execução do Prisma

1. Instale o Prisma CLI globalmente usando npm

```bash
npm install -g prisma
```

2. Inicie um novo projeto Prisma usandos comandos

```bash
prisma init nome-do-projeto
```

```bash
npx prisma generate
```

```bash
npx prisma migrate dev --name init
```

## Executando Docker

### IMPORTANTE: Na hora de testa meu dockerfile, minha maquina travou bastante então não tenho certeza que o docker está funcionando corretamente

construir a imagem Docker

```bash
docker build -t challengexii.
```

executar um contêiner Docker

```bash
docker run -p 5000:5000 meu-aplicativo-node
```

## Executando a Aplicação local

```bash
npm run start
```

## Executando em Modo de Desenvolvimento

```bash
npm run start:dev
```

## Executando em JavaScript

```bash
node dist/main
```