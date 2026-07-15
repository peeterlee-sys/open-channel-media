# Deploy — Open Channel Media (DigitalOcean App Platform)

Site estático de arquivo único (`index.html` já contém fontes, logos e scripts embutidos).

## Opção 1 — Via GitHub (recomendada)
1. Crie um repositório no GitHub (ex.: `open-channel-media`) e envie o conteúdo desta pasta:
   ```bash
   cd deploy
   git init && git add -A && git commit -m "Site Open Channel Media"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/open-channel-media.git
   git push -u origin main
   ```
2. Edite `.do/app.yaml` e troque `SEU_USUARIO/open-channel-media` pelo seu repositório.
3. No painel da DigitalOcean: **Create → App Platform → GitHub** → escolha o repositório e a branch `main`.
4. A DO detecta o site estático automaticamente (ou usa o `.do/app.yaml`). Confirme e clique em **Create Resources**.
5. Plano **Starter (static site)** — sites estáticos têm cota gratuita por conta.

## Opção 2 — Via doctl (CLI)
```bash
doctl apps create --spec .do/app.yaml
```
(requer o repositório GitHub já configurado no spec)

## Domínio próprio
Em **Settings → Domains** do app, adicione seu domínio (ex.: `openchannelmedia.com.br`) e aponte o DNS via CNAME conforme instruído. HTTPS é automático.

## Atualizações
Qualquer `git push` na branch `main` publica automaticamente (`deploy_on_push: true`).

## Política de privacidade
Publicada em `/privacidade/` (também acessível como `/privacidade.html`). URL final: **https://openchannelmedia.com.br/privacidade** (após configurar o domínio). Para atualizar o texto, edite os dois arquivos: `privacidade/index.html` e `privacidade.html`.

## Pendências antes de divulgar
- Integrar o formulário de demonstração a um destino real (e-mail/CRM) — hoje é demonstrativo.
- Conferir e-mail, redes sociais, CNPJ e endereço no rodapé (placeholders [INSERIR …]).
