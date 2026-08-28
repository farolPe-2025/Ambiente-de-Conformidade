# Ambiente de Conformidade — SEAIEE / SDEC-PE

Site estático (HTML/CSS/JS puro, sem build, sem backend) para acompanhamento e controle da
Secretaria Executiva de Atração de Investimentos e Estudos Econômicos (SEAIEE), da Secretaria
de Desenvolvimento Econômico de Pernambuco (SDEC-PE).

## Estrutura

```
index.html          Página inicial (pública): hero, login, painel geral (rolagem), núcleos, calendário
painel.html          Painel completo, com seletor Ação (Interno) / Execução (Produção)
reunioes.html         Área privada: controle de reuniões e eventos de monitoramento
contatos.html         Área privada: mailing / contatos institucionais
assets/styles.css      Design system ("Industry" — Barlow Condensed/Barlow, estilo blueprint)
assets/data.js          Dados semeados: Acompanhamento Interno de Ações
assets/data-producao.js Dados semeados: Acompanhamento de Produção + reuniões + contatos
assets/common.js        Lógica compartilhada (dados, autenticação, dashboard, nav, footer)
assets/logo-pe.png      ⚠ PENDENTE — ver "Imagens pendentes" abaixo
assets/secretaria.jpg   ⚠ PENDENTE — ver "Imagens pendentes" abaixo
```

## ⚠ Aviso importante de segurança

Este é um site **estático hospedado no GitHub Pages**. Isso significa duas coisas:

1. **O login não é uma proteção de segurança real.** Qualquer pessoa que abra o site pode ver
   o código-fonte completo (Ctrl+U / inspecionar elemento) e, com isso, as credenciais e todos
   os dados carregados na página — inclusive os da área "privada". O login serve apenas como
   uma barreira organizacional simples, para diferenciar quem edita de quem só visualiza dentro
   do time.
2. **O site publicado é público na internet**, mesmo que o repositório no GitHub esteja
   marcado como privado. Repositório privado protege o *código-fonte* de quem não tem acesso
   ao GitHub; não protege o *site publicado* via GitHub Pages, que é sempre acessível a quem
   tiver o link.

Isso foi uma decisão consciente (confirmada durante a construção do site) dado que os dados
atuais (inclusive negociações nomeadas de prospecção de investidores) foram autorizados a ir
ao ar. Se isso mudar, o caminho recomendado é: **não publicar via GitHub Pages** e distribuir
o site apenas pelo repositório privado (o time clona/baixa e abre localmente no navegador).

### Credenciais de acesso (time interno)

- **E-mail:** `admin@seaiee.pe.gov.br`
- **Senha:** `Seaiee@2026!`

Para trocar, gere os valores em base64 (ex.: no console do navegador, `btoa("novo-email")`)
e atualize `AUTH_CONFIG` em `assets/common.js`.

## Imagens pendentes

O layout já está pronto para receber:
- `assets/logo-pe.png` — brasão/logo do Governo de Pernambuco (usado na barra de navegação)
- `assets/secretaria.jpg` — foto da sede da secretaria (usada no hero da página inicial)

Enquanto esses arquivos não existirem, a página funciona normalmente com um estilo "blueprint"
neutro no lugar da foto e sem o logo na barra de navegação (o `onerror` dos `<img>` já trata
a ausência do arquivo). Basta salvar os dois arquivos com esses nomes exatos na pasta `assets/`
e commitar — nenhum código precisa mudar.

## Como os dados funcionam (sem backend)

Não há servidor: os dados iniciais vêm de `assets/data.js` e `assets/data-producao.js`
(gerados a partir de `Plan Monit Gerencial 2026.xls`). Quando alguém loga e edita algo no
Painel, na página de Reuniões ou na de Contatos, a edição fica salva **apenas no navegador
daquela pessoa** (localStorage) — ela não aparece automaticamente para os outros visitantes
do site.

Para **publicar** uma atualização para todo mundo:
1. A pessoa responsável edita os dados normalmente no site (logada).
2. Clica em "Exportar (JSON)" na página correspondente (Painel, Reuniões ou Contatos).
3. O arquivo `.json` exportado é usado para atualizar o array correspondente em
   `assets/data.js` / `assets/data-producao.js` (ou os `SEED_MEETINGS` / `SEED_CONTACTS`).
4. Commit + push no repositório → o GitHub Pages atualiza o site publicado em minutos.

Esse último passo (transformar o export em atualização do arquivo-fonte) pode ser pedido
em uma conversa com o Claude Code, anexando o `.json` exportado.

## Ativando o GitHub Pages

Settings → Pages → Source: `Deploy from a branch` → branch `main`, pasta `/ (root)` → Save.
O link fica em `https://ocaiocoutinho.github.io/Ambiente-de-Conformidade/`.
