# Ambiente de Conformidade — SEAIEE / SDEC-PE

Site estático (HTML/CSS/JS puro, sem build, sem servidor próprio) para acompanhamento e
controle da Secretaria Executiva de Atração de Investimentos e Estudos Econômicos (SEAIEE),
da Secretaria de Desenvolvimento Econômico de Pernambuco (SDEC-PE).

Repositório: `farolPe-2025/Ambiente-de-Conformidade` · Site publicado:
`https://farolpe-2025.github.io/Ambiente-de-Conformidade/`

## Estrutura

```
index.html               Página inicial (pública): hero, login, painel geral (rolagem), núcleos, calendário
painel.html               Painel completo, com seletor Ação (Interno) / Execução (Produção)
eventos.html              Área privada: controle de eventos de monitoramento
contatos.html             Área privada: mailing / contatos institucionais
assets/styles.css         Design (inspirado no FarolPE — navy + laranja, cards claros, layout amplo)
assets/data.js            Seed de fallback: Acompanhamento Interno de Ações
assets/data-producao.js   Seed de fallback: Acompanhamento de Produção + eventos + contatos
assets/common.js          Lógica compartilhada (dados, publicação, autenticação, dashboard, nav)
assets/logo-pe.png        Logo do Governo de Pernambuco (barra de navegação)
assets/secretaria.jpg     Foto da sede da secretaria (hero da página inicial)
data/interno.json         ★ Dados PUBLICADOS de Acompanhamento Interno (fonte da verdade)
data/producao.json        ★ Dados PUBLICADOS de Acompanhamento de Produção (fonte da verdade)
data/eventos.json         ★ Eventos publicados (calendário da página inicial)
data/contatos.json        ★ Contatos publicados
```

Os arquivos em `data/*.json` são o que todo mundo vê. Os arquivos `assets/data*.js` só entram
em jogo como *fallback* caso os JSON não carreguem (ex.: antes do primeiro deploy).

## Como funciona a edição e a publicação

1. A página carrega os dados de `data/*.json` (via `fetch`, ao abrir a página).
2. Uma pessoa loga e edita algo no Painel, em Eventos ou em Contatos. Essa edição vira um
   **rascunho salvo só no navegador dela** (localStorage) — ainda não é visível para mais
   ninguém.
3. Ao clicar em **"💾 Publicar alterações"**, o site pede um **token de acesso pessoal do
   GitHub** (a pessoa cola o dela, gerado em
   [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new),
   com permissão "Contents: Read and write" **apenas** neste repositório). O site então grava
   o novo `data/*.json` diretamente no repositório via API do GitHub — isso vira um commit de
   verdade, permanente, com autor e histórico.
4. Assim que o commit é feito, o GitHub Pages atualiza o site publicado (leva de alguns
   segundos a poucos minutos) e a alteração aparece para todo mundo.

O token nunca fica salvo no código do site — cada pessoa fornece o seu próprio, e ele fica
(opcionalmente) só na sessão do navegador dela (`sessionStorage`, apagado ao fechar a aba).

### Se alguém fechar a aba antes de publicar

Nada se perde: da próxima vez que essa pessoa abrir a mesma página, **no mesmo navegador**,
aparece um aviso "📝 Encontramos um rascunho não publicado" com a opção de continuar editando
e publicar, ou descartar. O rascunho só desaparece quando alguém publica de verdade ou o
descarta explicitamente.

**Importante:** o rascunho fica só naquele navegador/computador específico. Se a pessoa que
editou não voltar a abrir o site ali, ninguém mais consegue "resgatar" aquele rascunho — por
isso o ideal é sempre publicar assim que terminar de editar, em vez de deixar para depois.

## ⚠️ Sobre o login — o que ele protege e o que não protege

Este site é **100% estático**, hospedado no GitHub Pages, então:

- **O login da página não é uma proteção de segurança real.** Qualquer pessoa que abra o
  site consegue ver o código-fonte completo (Ctrl+U) e, com isso, as credenciais configuradas
  em `assets/common.js`. Ele serve só como uma barreira organizacional simples.
- **Quem realmente controla quem pode alterar os dados publicados é o GitHub**, através do
  token de acesso pessoal usado no botão "Publicar alterações". Só quem tem permissão de
  escrita no repositório (colaboradores convidados) consegue gerar um token válido — então a
  publicação de verdade *é* protegida, mesmo o login da página não sendo.

### Credenciais do login da página (organizacional, não é segurança)

- **E-mail:** `admin@seaiee.pe.gov.br`
- **Senha:** `Seaiee@2026!`

Para trocar, gere os valores em base64 (ex.: no console do navegador, `btoa("novo-email")`)
e atualize `AUTH_CONFIG` em `assets/common.js`.

## Ativando o GitHub Pages

Settings → Pages → Source: `Deploy from a branch` → branch `main`, pasta `/ (root)` → Save.
