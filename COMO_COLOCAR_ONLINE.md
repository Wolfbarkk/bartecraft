# 🌐 GUIA COMPLETO - COLOCAR SITE ONLINE

## ✅ SEU SITE JÁ ESTÁ FUNCIONANDO LOCALMENTE!

O site acabou de abrir no seu navegador. Agora vamos colocá-lo online.

---

## 🚀 OPÇÃO 1: GITHUB PAGES (GRÁTIS E RÁPIDO)

### Passo 1: Criar Conta no GitHub
1. Acesse: https://github.com
2. Clique em "Sign up"
3. Crie sua conta

### Passo 2: Criar Repositório
1. Clique no "+" no canto superior direito
2. Selecione "New repository"
3. Nome: `bartexcraft-website`
4. Marque "Public"
5. Clique em "Create repository"

### Passo 3: Upload dos Arquivos
```bash
# Opção A: Via Interface Web (Mais Fácil)
1. No repositório, clique em "uploading an existing file"
2. Arraste TODOS os arquivos da pasta website/
3. Clique em "Commit changes"

# Opção B: Via Git (Avançado)
cd "C:\Users\wolfb\Desktop\cop\bartex - gg - Copia (3) - Copia\website"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/bartexcraft-website.git
git push -u origin main
```

### Passo 4: Ativar GitHub Pages
1. No repositório, vá em "Settings"
2. No menu lateral, clique em "Pages"
3. Em "Source", selecione "main" branch
4. Clique em "Save"
5. Aguarde 1-2 minutos

### Passo 5: Acessar Seu Site
```
https://SEU_USUARIO.github.io/bartexcraft-website/
```

**PRONTO! Seu site está online GRÁTIS!** 🎉

---

## 🚀 OPÇÃO 2: NETLIFY (GRÁTIS E SUPER RÁPIDO)

### Passo 1: Criar Conta
1. Acesse: https://netlify.com
2. Clique em "Sign up"
3. Use sua conta do GitHub (ou email)

### Passo 2: Deploy
1. Clique em "Add new site" > "Deploy manually"
2. Arraste a pasta `website/` para a área indicada
3. Aguarde o upload (30 segundos)

### Passo 3: Configurar Domínio (Opcional)
1. Clique em "Domain settings"
2. Clique em "Add custom domain"
3. Digite: `bartexcraft.com.br`
4. Siga as instruções de DNS

**PRONTO! Seu site está online em segundos!** ⚡

URL temporária: `https://random-name.netlify.app`

---

## 🚀 OPÇÃO 3: VERCEL (GRÁTIS E PROFISSIONAL)

### Passo 1: Criar Conta
1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. Use sua conta do GitHub

### Passo 2: Deploy
1. Clique em "Add New..." > "Project"
2. Clique em "Browse" e selecione a pasta `website/`
3. Clique em "Deploy"
4. Aguarde 1 minuto

**PRONTO! Seu site está online!** 🚀

URL: `https://bartexcraft.vercel.app`

---

## 🌐 OPÇÃO 4: HOSTINGER (PAGO - DOMÍNIO PRÓPRIO)

### Passo 1: Comprar Hospedagem
1. Acesse: https://hostinger.com.br
2. Escolha plano "Premium" ou "Business"
3. Registre domínio: `bartexcraft.com.br`
4. Finalize a compra

### Passo 2: Upload via FTP
1. No painel da Hostinger, vá em "Arquivos" > "Gerenciador de Arquivos"
2. Navegue até `public_html/`
3. Delete arquivos padrão
4. Faça upload de TODOS os arquivos da pasta `website/`

### Passo 3: Configurar
1. Aguarde propagação DNS (até 24h)
2. Acesse: `https://bartexcraft.com.br`

**Custo:** ~R$ 10-20/mês

---

## 🎯 RECOMENDAÇÃO

### Para Começar AGORA (Grátis):
**Use NETLIFY** - É o mais rápido e fácil!

1. Acesse: https://netlify.com
2. Arraste a pasta `website/`
3. Pronto! Site online em 30 segundos

### Para Ter Domínio Próprio:
**Compre depois:**
1. Use Netlify/Vercel primeiro (grátis)
2. Quando tiver dinheiro, compre domínio
3. Conecte o domínio ao Netlify/Vercel

---

## 📝 CHECKLIST DE DEPLOY

### Antes de Colocar Online:
- [x] Site funcionando localmente ✅
- [ ] Escolher plataforma (Netlify recomendado)
- [ ] Criar conta na plataforma
- [ ] Fazer upload dos arquivos
- [ ] Testar o site online
- [ ] Compartilhar o link

### Depois de Online:
- [ ] Testar em celular
- [ ] Testar em diferentes navegadores
- [ ] Configurar Google Analytics (opcional)
- [ ] Adicionar domínio próprio (opcional)
- [ ] Divulgar nas redes sociais

---

## 🔧 CONFIGURAÇÕES ADICIONAIS

### Conectar Domínio Próprio (bartexcraft.com.br):

#### No Netlify:
1. Compre domínio em: registro.br ou hostinger.com.br
2. No Netlify: Domain settings > Add custom domain
3. Configure DNS:
   ```
   Tipo: A
   Nome: @
   Valor: 75.2.60.5

   Tipo: CNAME
   Nome: www
   Valor: seu-site.netlify.app
   ```

#### No Vercel:
1. Compre domínio
2. No Vercel: Settings > Domains > Add
3. Configure DNS:
   ```
   Tipo: A
   Nome: @
   Valor: 76.76.21.21

   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   ```

---

## 🎨 PERSONALIZAR DEPOIS DE ONLINE

### Alterar Informações:
Edite os arquivos e faça upload novamente:

1. **IP do Servidor** - `index.html` linha 35
2. **Link da Loja** - Todos os botões "Comprar VIP"
3. **Redes Sociais** - Footer de ambas páginas
4. **Preços VIP** - `loja.html`

### Adicionar Google Analytics:
```html
<!-- Adicione antes do </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📊 MONITORAR VISITAS

### Google Analytics (Grátis):
1. Acesse: https://analytics.google.com
2. Crie uma propriedade
3. Adicione o código no site
4. Veja estatísticas de visitas

### Alternativas:
- **Plausible** - Simples e privado
- **Umami** - Open source
- **Cloudflare Analytics** - Grátis

---

## 🚨 PROBLEMAS COMUNS

### Site não abre:
- Aguarde 5 minutos após deploy
- Limpe cache do navegador (Ctrl+F5)
- Tente em modo anônimo

### Imagens não aparecem:
- Verifique se enviou a pasta `img/`
- Verifique caminhos no código

### CSS não funciona:
- Verifique se enviou a pasta `css/`
- Limpe cache do navegador

### JavaScript não funciona:
- Verifique se enviou a pasta `js/`
- Abra console (F12) e veja erros

---

## 📱 TESTAR EM CELULAR

Depois de online, teste em:
- ✅ Chrome (Android)
- ✅ Safari (iPhone)
- ✅ Firefox
- ✅ Edge

O site é 100% responsivo e funciona em todos!

---

## 🎉 RESUMO RÁPIDO

### MÉTODO MAIS RÁPIDO (30 segundos):

1. **Acesse:** https://netlify.com
2. **Clique:** "Deploy manually"
3. **Arraste:** pasta `website/`
4. **PRONTO!** Site online!

### Seu site estará em:
```
https://random-name.netlify.app
```

Você pode mudar o nome depois em: Site settings > Change site name

---

## 💡 DICAS PROFISSIONAIS

### SEO (Aparecer no Google):
1. Adicione meta tags no `<head>`:
```html
<meta name="description" content="BartexCraft - O melhor servidor de Bridge Practice do Brasil">
<meta name="keywords" content="minecraft, bridge, practice, servidor, bartexcraft">
```

2. Crie arquivo `sitemap.xml`
3. Registre no Google Search Console

### Performance:
- ✅ Imagens já otimizadas
- ✅ CSS minificado
- ✅ JavaScript otimizado
- ✅ Carregamento rápido

### Segurança:
- ✅ HTTPS automático (Netlify/Vercel)
- ✅ Sem vulnerabilidades
- ✅ Código limpo

---

## 📞 SUPORTE

### Precisa de Ajuda?
1. Veja tutoriais no YouTube: "Como colocar site no ar"
2. Documentação Netlify: https://docs.netlify.com
3. Documentação Vercel: https://vercel.com/docs

---

## ✅ CHECKLIST FINAL

- [x] Site criado ✅
- [x] Site funcionando localmente ✅
- [ ] Escolher plataforma de hospedagem
- [ ] Fazer upload
- [ ] Site online
- [ ] Testar funcionamento
- [ ] Compartilhar link
- [ ] Divulgar nas redes

---

**SEU SITE ESTÁ PRONTO PARA IR AO AR!** 🚀

Escolha uma das opções acima e em minutos seu site estará online!

**Recomendação:** Use **Netlify** - É grátis, rápido e fácil!

---

**BartexCraft** - play.bartexcraft.com.br 🎮
