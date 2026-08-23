middleware.ts: usa o middleware do Clerk para proteger rotas privadas.

entrar/[[...sign-in]]/page.tsx: tela de login controlada pelo Clerk.

cadastro/[[...sign-up]]/page.tsx: tela de cadastro controlada pelo Clerk.

app/api/webhooks/clerk/route.ts: recebe eventos do Clerk, como usuário criado, atualizado ou removido.

app/api/users/me/route.ts: retorna o perfil local do usuário logado.

auth-provider.tsx: envolve o app com o provider do Clerk.

user-menu.tsx: menu de conta, logout e acesso ao perfil.

lib/auth/clerk.ts: helpers para ler usuário/sessão do Clerk no server side.

lib/auth/permissions.ts: permissões internas do seu sistema, separadas do login.

lib/auth/guards.ts: helpers como requireUser e requireRole.

lib/auth/user-sync.ts: mapeia usuário Clerk para usuário/perfil local.

modules/users/sync-user-from-clerk.service.ts: mantém o banco local sincronizado via webhook.

packages/db/schema/user-profiles.schema.ts: dados próprios do produto: nome profissional, telefone, preferências, status etc.

packages/db/schema/external-auth-accounts.schema.ts: vínculo entre clerkUserId e o usuário local.