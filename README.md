# Semana Multi Stack - Front End

### Checklist do projeto Front-end da Semana Multi Stack TreinaWeb

🔗 [Repositório - GitHub](https://github.com/treinaweb/treinaweb-workshop-multistack-react)

## Checklist do Ambiente

- [X]  Instalar Node.js
    - 📥 [Download](https://nodejs.org/en/)
    - 🔗 [Guia de Instalação](https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux/)
- [X]  Instalar VS Code
    - 📥 [Download](https://code.visualstudio.com/)
    - 🔗 [Guia de Instalação](https://www.treinaweb.com.br/blog/instalacao-do-vs-code-no-windows-linux-e-macos/)
- [X]  Instalar extensão Styled Components

## Checklist da Criação do Projeto

- [X]  Iniciar o projeto

    `npx create-next-app ediaristas` 

- [X]  Criar arquivo de configuração do TypeScript `tsconfig.json`
- [X]  Instalar TypeScript e tipagem do React

    `npm i typescript @types/react`

- [X]  Iniciar o servidor

Em caso de erro no Windows, executar:

`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

## Checklist da Organização do Projeto

- [X]  Criar pasta `src` na raiz do projeto
- [X]  Jogar pasta `pages` em `src`
- [X]  Criar pasta `ui` e `data` em `src`
- [X]  Arrastar pasta `styles` para `ui`
- [X]  Criar pasta `components` em `ui`
- [X]  Criar pasta `themes` em `ui`
- [X]  Criar pasta `@types` em `data`
- [X]  Criar pasta `services` em `data`
- [X]  Criar pasta `hooks` em `data`
- [X]  Mudar arquivos `.js` para `.tsx`
- [X]  Apagar pasta `api`
- [X]  Simplificar caminhos no `tsconfig.json`
- [X]  Arrumar caminhos da importação em `index.tsx`
- [X]  Apagar arquivo `Home.module.css`
- [X]  Arrumar caminhos da importação em `_app.tsx`
- [X]  Jogar imagens na pasta `public`

## Checklist das Configurações do Projeto

- [X]  Instalar dependências

    `npm i @material-ui/core@next @emotion/react @emotion/styled axios react-input-mask`

- [X]  Configurar tema
- [X]  Criar arquivo do Tema
- [X]  🎨 Tema
- [X]  Adicionar Provider
- [X]  Adicionar Fonte
- [X]  Definir fonte no CSS

## Problemas comuns

- Meu VS Code está diferente
    - Isso não é um problema. A aparência do VS Code é customizável. Isso não irá influenciar na aula.
- Windows diz que não tenho permissão para executar o comando
    - Execute:
    `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
- Os comandos não funcionam
    - Verifique se digitou corretamente
    - Verifique se está dentro da pasta correta
    - Tente atualizar o NPM executando:

        `npm install -g npm@latest --force`

    - Limpe o cache com o comando:

        `npm cache clean --force`

    - Feche o terminal e abra novamente
- PORT 3000 is already in use
    - Sua porta 3000 já está sendo usada. No arquivo `package.json` altere o comando `next dev` para `next dev --port 3001` e tente acessar agora por `[http://localhost:3001](http://localhost:3001)` ou reinicie o computador
- Mensagem de erro no navegador, dizendo "Module not found"
    - Um arquivo não foi encontrado. Verifique se digitou tudo certo como está na aula, se todos os arquivos que você alterou foram salvos e se todas as pastas e arquivos estão na estrutura correta
- Meu arquivo `tsconfig.json` não foi preenchido automaticamente
    - Veja se criou ele dentro da pasta do projeto e inicie o servidor novamente
- Mensagem de Token não reconhecido
    - O PowerShell pode dar erro ao executar um comando com `@`. Coloque aspas em volta do comando:

        `npm i typescript "@types/react"`

- Minha pasta foi criada mas está vazia
    - O projeto não foi criado corretamente e nem teve sua instalação concluída. Apague a pasta e execute `npx create-next-app ediaristas` novamente



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
