# MACC

Landing page da MACC em Next.js com App Router, TypeScript e Tailwind CSS.

## Desenvolvimento

Use Node.js 20.9 ou superior.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Abra http://localhost:3000.

## Configuração comercial

Preencha `NEXT_PUBLIC_WHATSAPP_NUMBER` com o número oficial em formato internacional, apenas dígitos, incluindo código do país e DDD. O número é público e aparece nos links da página. Até configurá-lo, os botões levam ao aviso de configuração pendente.

Preencha `NEXT_PUBLIC_SITE_URL` com a URL pública canônica, incluindo protocolo. Ela habilita a indexação, as URLs de compartilhamento e a entrada do sitemap. Defina ambas as variáveis antes de gerar a build de produção.

## Verificação e execução

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Textos e listas ficam em `lib/content.ts`. Configurações e mensagens gerais ficam em `lib/site.ts`. As imagens industriais em `public/visual` são ilustrativas. Os arquivos originais da marca ficam em `images`.
