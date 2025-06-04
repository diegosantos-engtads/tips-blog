
# Blog

Este é um projeto de blog pessoal desenvolvido com foco em performance, boas práticas de código, e experiência do desenvolvedor. Criado com Next.js, TypeScript e Tailwind CSS, ele permite criar, editar, listar e excluir posts em um painel administrativo simples e funcional.

![Badge](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Tecnologias Utilizadas

- [Next.js (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [ESLint & Prettier](https://eslint.org/)
- [Vercel](https://vercel.com/)

## Funcionalidades

- ✅ Listagem de posts (públicos e administrativos)
- ✅ Criação, edição e exclusão de posts (admin)
- ✅ Marcação de post como publicado/não publicado
- ✅ Server Actions (para manipulação de dados com segurança)
- ✅ UI responsiva com Tailwind CSS
- ✅ Revalidação automática de páginas com cache (Next.js dynamic routes)

## Conceitos aplicados

- App Router (Next.js 13+)
- Revalidação de dados com \`fetch cache\` e tags
- Componentização e separação de responsabilidades
- Git versionado com commits descritivos
- Padrão de repositório para abstração da fonte de dados
- Estrutura limpa e pronta para escalar

## Como rodar localmente

\`\`\`bash
# Clone o repositório
git clone https://github.com/diegosantos-engtads/blog.git
cd blog

# Instale as dependências
npm install

# Crie e configure um arquivo .env com suas variáveis
cp .env.example .env

# Execute o projeto
npm run dev
\`\`\`

## Testes (em breve)

Planejo incluir testes unitários e de integração com:
- Jest ou Vitest
- Cypress para testes end-to-end

## Status

Em desenvolvimento. Novos recursos e melhorias estão sendo implementados continuamente.

## Autor

Desenvolvido por [Diego Santos](https://github.com/diegosantos-engtads) – apaixonado por tecnologia e café.
