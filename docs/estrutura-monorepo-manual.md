# Manual da Estrutura do Projeto

Este arquivo documenta a estrutura atual do repositorio para acomodar a evolucao do projeto com `Next.js`, `Vercel`, `npm`, padrao `MVC`, uso de `DTOs` e separacao de `types`.

## Estado atual

- a raiz agora funciona como workspace `npm`
- a aplicacao web principal foi migrada para `apps/web`
- o lockfile de `pnpm` foi removido
- a antiga estrutura solta da raiz foi consolidada dentro do app workspace

## Visao geral da estrutura

```text
/
├─ apps/
│  └─ web/
│     ├─ components.json
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ public/
│     ├─ src/
│     │  ├─ app/
│     │  ├─ components/
│     │  ├─ hooks/
│     │  ├─ lib/
│     │  ├─ middleware/
│     │  ├─ modules/
│     │  ├─ types/
│     │  └─ views/
│     └─ tsconfig.json
├─ docs/
├─ packages/
│  ├─ config/
│  ├─ db/
│  └─ shared/
├─ package-lock.json
├─ package.json
├─ README.md
└─ tsconfig.json
```

## Raiz do repositorio

### `/`

Funcao:
- concentrar a configuracao do monorepo
- servir como ponto de entrada do `npm`
- manter scripts globais e documentacao

Arquivos que devem existir aqui:
- `package.json`: configuracao principal do workspace
- `package-lock.json`: lockfile oficial do projeto
- `tsconfig.json`: base TypeScript compartilhada
- `.gitignore`: regras globais
- `README.md`: visao geral do projeto

### `package.json`

Responsabilidade:
- definir `workspaces`
- expor scripts globais como `dev`, `build` e `start`
- delegar a execucao principal para `apps/web`

### `package-lock.json`

Responsabilidade:
- travar as versoes reais das dependencias do monorepo
- manter a instalacao consistente em outras maquinas e no deploy

### `tsconfig.json`

Responsabilidade:
- servir como base comum para os workspaces
- evitar duplicacao de configuracao TypeScript

## Apps

### `apps/`

Funcao:
- agrupar todas as aplicacoes deployaveis do repositorio

### `apps/web/`

Funcao:
- abrigar a aplicacao web principal
- concentrar frontend e entrypoints do backend via `app/api`

Arquivos existentes ou esperados:
- `package.json`
- `tsconfig.json`
- `next.config.mjs`
- `postcss.config.mjs`
- `components.json`
- `next-env.d.ts`
- `middleware.ts` quando houver middleware global

### `apps/web/package.json`

Responsabilidade:
- conter as dependencias reais do app web
- expor scripts do `Next.js`

### `apps/web/tsconfig.json`

Responsabilidade:
- extender a base da raiz
- configurar o alias `@/*` apontando para `src/*`
- registrar o plugin do Next

### `apps/web/next.config.mjs`

Responsabilidade:
- manter configuracoes especificas do Next para o app web

### `apps/web/postcss.config.mjs`

Responsabilidade:
- carregar o pipeline de estilos do app

### `apps/web/components.json`

Responsabilidade:
- configurar aliases e paths do shadcn/ui

## Assets publicos

### `apps/web/public/`

Funcao:
- armazenar arquivos publicos servidos pelo Next

Arquivos que podem existir aqui:
- icones
- logos
- placeholders
- imagens de marketing
- favicons

Subpastas recomendadas quando o volume crescer:
- `icons/`
- `images/`
- `branding/`
- `placeholders/`

## Codigo fonte do app

### `apps/web/src/`

Funcao:
- centralizar todo o codigo TypeScript/React do app

### `apps/web/src/app/`

Funcao:
- ser a camada de roteamento do `Next.js App Router`
- receber layouts, paginas, `route.ts`, paginas de erro e segmentos de rota

Arquivos que podem existir aqui:
- `layout.tsx`
- `page.tsx`
- `globals.css`
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `route.ts`

Regra de uso:
- evitar regra de negocio pesada aqui
- `route.ts` deve ser apenas a porta de entrada HTTP

### `apps/web/src/app/(marketing)/`

Funcao:
- agrupar as rotas publicas e institucionais

Estado atual:
- a home principal esta em `src/app/(marketing)/page.tsx`

Arquivos esperados:
- `page.tsx`
- `layout.tsx`

### `apps/web/src/app/(auth)/`

Funcao:
- agrupar as rotas de autenticacao

Subpastas atuais:
- `entrar/`
- `cadastro/`
- `recuperar-senha/`
- `redefinir-senha/`

Arquivos esperados:
- `page.tsx`
- `loading.tsx`
- `actions.ts` quando houver server actions especificas da tela

### `apps/web/src/app/(dashboard)/`

Funcao:
- agrupar rotas autenticadas do painel do usuario

Subpastas atuais:
- `agendamentos/`
- `pagamentos/`
- `perfil/`
- `conta/`

Arquivos esperados:
- `page.tsx`
- `layout.tsx`
- `loading.tsx`
- `error.tsx`

### `apps/web/src/app/api/`

Funcao:
- concentrar entrypoints HTTP do backend via `route.ts`

Subpastas atuais:
- `auth/`
- `users/`
- `bookings/`
- `payments/`
- `webhooks/`
- `cron/`

Arquivos esperados:
- `route.ts`

Responsabilidade:
- receber request
- validar entrada inicial
- chamar o controller
- devolver response

## Views e componentes

### `apps/web/src/views/`

Funcao:
- concentrar composicoes visuais maiores
- representar a camada mais proxima de `View` dentro do padrao que voce ja usa

Subpastas atuais:
- `marketing/`
- `auth/`
- `dashboard/`

Estado atual:
- as secoes da landing page ja foram movidas para `views/marketing`

Arquivos que hoje fazem sentido aqui:
- `header.tsx`
- `hero.tsx`
- `about.tsx`
- `services.tsx`
- `benefits.tsx`
- `materials.tsx`
- `cta.tsx`
- `faq.tsx`
- `footer.tsx`

Arquivos futuros:
- views de pagina
- composicoes de dashboard
- containers de autenticacao

### `apps/web/src/components/`

Funcao:
- guardar componentes reutilizaveis do app

Subpastas atuais:
- `ui/`
- `shared/`
- `forms/`
- `providers/`

### `apps/web/src/components/ui/`

Funcao:
- primitives de interface e wrappers de bibliotecas

Arquivos esperados:
- `button.tsx`
- `input.tsx`
- `card.tsx`
- `dialog.tsx`
- `toast.tsx`

Observacao:
- os hooks duplicados que estavam dentro de `ui` foram removidos
- hooks reutilizaveis agora ficam em `src/hooks`

### `apps/web/src/components/shared/`

Funcao:
- abrigar componentes transversais usados por varias telas

Arquivos futuros sugeridos:
- `section-title.tsx`
- `empty-state.tsx`
- `page-shell.tsx`

### `apps/web/src/components/forms/`

Funcao:
- concentrar componentes de formulario mais especializados

Arquivos futuros sugeridos:
- `login-form.tsx`
- `booking-form.tsx`
- `payment-method-form.tsx`

### `apps/web/src/components/providers/`

Funcao:
- concentrar providers React e wrappers de contexto

Estado atual:
- `theme-provider.tsx` ja esta aqui

Arquivos futuros sugeridos:
- `query-provider.tsx`
- `session-provider.tsx`

### `apps/web/src/hooks/`

Funcao:
- concentrar hooks reutilizaveis do app
- evitar misturar hooks com componentes visuais

Estado atual:
- `use-mobile.ts`
- `use-toast.ts`

Arquivos futuros sugeridos:
- `use-session.ts`
- `use-bookings-filter.ts`

## Infraestrutura utilitaria

### `apps/web/src/lib/`

Funcao:
- concentrar infraestrutura compartilhada do app
- abrigar utilitarios tecnicos que nao pertencem a um modulo de negocio

Subpastas atuais:
- `auth/`
- `db/`
- `env/`
- `http/`
- `utils/`

### `apps/web/src/lib/auth/`

Arquivos futuros sugeridos:
- `session.ts`
- `permissions.ts`
- `password.ts`

### `apps/web/src/lib/db/`

Arquivos futuros sugeridos:
- `client.ts`
- `transaction.ts`

### `apps/web/src/lib/env/`

Arquivos futuros sugeridos:
- `server-env.ts`
- `public-env.ts`

### `apps/web/src/lib/http/`

Arquivos futuros sugeridos:
- `api-response.ts`
- `http-error.ts`
- `fetcher.ts`

### `apps/web/src/lib/utils/`

Funcao:
- agrupar utilitarios genericos

Estado atual:
- `index.ts` concentra o helper `cn`

Arquivos futuros sugeridos:
- `format-date.ts`
- `format-currency.ts`
- `string.ts`

## Tipos

### `apps/web/src/types/`

Funcao:
- armazenar apenas tipos realmente globais

Arquivos futuros sugeridos:
- `api.ts`
- `pagination.ts`
- `common.ts`

Regra de uso:
- tipos de dominio devem preferencialmente ficar dentro de cada modulo

## Middleware auxiliar

### `apps/web/src/middleware/`

Funcao:
- concentrar auxiliares que suportam `middleware.ts`

Arquivos futuros sugeridos:
- `auth-guard.ts`
- `matcher.ts`
- `session-cookie.ts`

## Modulos de dominio

### `apps/web/src/modules/`

Funcao:
- organizar a regra de negocio por dominio
- aproximar a estrutura do padrao `MVC + DTO`

Modulos atuais:
- `auth/`
- `users/`
- `bookings/`
- `payments/`

Cada modulo segue a mesma estrutura base.

### `apps/web/src/modules/<dominio>/controllers/`

Funcao:
- receber chamadas da camada de rota ou actions
- coordenar DTOs, services e responses

Arquivos futuros sugeridos:
- `sign-in.controller.ts`
- `create-booking.controller.ts`
- `create-payment.controller.ts`

### `apps/web/src/modules/<dominio>/dtos/`

Funcao:
- padronizar contratos de entrada e saida

Subpastas:
- `params/`
- `queries/`
- `responses/`

#### `dtos/params/`

Funcao:
- definir parametros de rota e identificadores

Exemplos:
- `booking-id.params.ts`
- `user-id.params.ts`

#### `dtos/queries/`

Funcao:
- definir filtros, paginacao e query strings

Exemplos:
- `list-bookings.query.ts`
- `search-users.query.ts`

#### `dtos/responses/`

Funcao:
- definir o formato de resposta dos controllers e endpoints

Exemplos:
- `booking.response.ts`
- `payment.response.ts`
- `session.response.ts`

### `apps/web/src/modules/<dominio>/models/`

Funcao:
- representar objetos e regras de dominio

Exemplos:
- `user.model.ts`
- `booking.model.ts`
- `payment.model.ts`

### `apps/web/src/modules/<dominio>/repositories/`

Funcao:
- encapsular acesso a dados

Exemplos:
- `users.repository.ts`
- `bookings.repository.ts`
- `payments.repository.ts`

### `apps/web/src/modules/<dominio>/services/`

Funcao:
- concentrar os casos de uso e regras de negocio

Exemplos:
- `create-account.service.ts`
- `schedule-booking.service.ts`
- `process-payment.service.ts`

### `apps/web/src/modules/<dominio>/types/`

Funcao:
- guardar tipos especificos do dominio

Exemplos:
- `booking-status.type.ts`
- `payment-status.type.ts`
- `user-role.type.ts`

### `apps/web/src/modules/<dominio>/validators/`

Funcao:
- centralizar validacoes e schemas por dominio

Exemplos:
- `sign-in.validator.ts`
- `booking.validator.ts`
- `payment.validator.ts`

## Pacotes compartilhados

### `packages/`

Funcao:
- agrupar codigo reutilizavel entre apps

### `packages/db/`

Funcao:
- centralizar a camada de banco de dados

Subpastas atuais:
- `migrations/`
- `schema/`
- `seeds/`
- `src/client/`
- `src/models/`
- `src/repositories/`

Arquivos futuros sugeridos:
- schema do ORM
- migracoes versionadas
- seeds de desenvolvimento
- cliente do banco
- repositories baseados no ORM

### `packages/config/`

Funcao:
- compartilhar configuracoes tecnicas entre apps e pacotes

Subpastas atuais:
- `eslint/`
- `typescript/`

Arquivos futuros sugeridos:
- `eslint/base.js`
- `typescript/base.json`
- `typescript/nextjs.json`

### `packages/shared/`

Funcao:
- guardar utilitarios, erros, constantes e tipos realmente compartilhados

Subpastas atuais:
- `src/constants/`
- `src/errors/`
- `src/types/`
- `src/utils/`

Arquivos futuros sugeridos:
- `constants/routes.ts`
- `errors/domain-error.ts`
- `types/result.ts`
- `utils/money.ts`

## Como as features futuras se encaixam

### Sistema de contas

Pastas principais:
- `src/app/(auth)/`
- `src/app/api/auth/`
- `src/modules/auth/`
- `src/modules/users/`
- `src/lib/auth/`

### Sistema de agendamentos

Pastas principais:
- `src/app/(dashboard)/agendamentos/`
- `src/app/api/bookings/`
- `src/modules/bookings/`
- `packages/db/`

### Processamento de pagamentos

Pastas principais:
- `src/app/(dashboard)/pagamentos/`
- `src/app/api/payments/`
- `src/app/api/webhooks/`
- `src/modules/payments/`

### Tarefas agendadas e manutencao

Pastas principais:
- `src/app/api/cron/`
- `src/modules/bookings/`
- `src/modules/payments/`

## Convencoes recomendadas

- manter `route.ts` enxuto e sem regra de negocio
- usar `controllers` como porta de entrada da regra
- usar `services` para os casos de uso
- usar `repositories` para acesso a dados
- manter `DTOs` nas fronteiras de entrada e saida
- evitar jogar todos os tipos em `src/types`
- preferir tipos perto do dominio
- manter `views` separadas de `components`
- colocar hooks em `src/hooks`, nao em `components/ui`

## Proximos passos recomendados

1. manter as paginas publicas em `src/app/(marketing)` e `src/views/marketing`
2. iniciar os modulos `auth`, `bookings`, `payments` e `users`
3. criar a camada de persistencia real em `packages/db`
4. adicionar `route.ts` em `src/app/api/*` conforme as features entrarem
5. conectar middleware, sessao e protecao de rotas quando o fluxo de contas for iniciado
