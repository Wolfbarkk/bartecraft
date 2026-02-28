# 🚀 COLOCAR SERVIDOR ONLINE - GUIA RÁPIDO

## ✅ PASSO 1: PEGAR ACCESS TOKEN DO MERCADO PAGO

1. Acesse: https://www.mercadopago.com.br/developers/panel/app
2. Faça login
3. Clique em "Criar aplicação"
4. Nome: "BartexCraft VIP"
5. Vá em "Credenciais" → "Credenciais de produção"
6. Copie o **Access Token** (começa com `APP_USR-...`)

---

## 🌐 PASSO 2: COLOCAR BACKEND ONLINE (Render.com - GRÁTIS)

### 2.1 - Criar conta no Render
1. Acesse: https://render.com
2. Clique em "Get Started"
3. Faça login com GitHub (ou email)

### 2.2 - Fazer Deploy do Backend
1. No Render, clique em "New +" → "Web Service"
2. Escolha "Build and deploy from a Git repository"
3. Clique em "Public Git Repository"
4. Cole a URL do seu repositório (vamos criar)

**OU MAIS FÁCIL - Upload Manual:**

1. Clique em "New +" → "Web Service"
2. Conecte seu GitHub
3. Ou use "Deploy from GitHub" depois de subir o código

### 2.3 - Configurar o Serviço
```
Name: bartexcraft-backend
Environment: Node
Build Command: cd backend && npm install
Start Command: cd backend && npm start
```

### 2.4 - Adicionar Variáveis de Ambiente
No Render, vá em "Environment" e adicione:

```
MP_ACCESS_TOKEN = seu_token_aqui
WEBHOOK_URL = https://bartexcraft-backend.onrender.com
SITE_URL = https://seu-site.netlify.app
PORT = 3000
```

### 2.5 - Deploy
1. Clique em "Create Web Service"
2. Aguarde 2-3 minutos
3. Seu backend estará em: `https://bartexcraft-backend.onrender.com`

---

## 🎨 PASSO 3: COLOCAR FRONTEND ONLINE (Netlify - GRÁTIS)

### 3.1 - Criar conta no Netlify
1. Acesse: https://netlify.com
2. Clique em "Sign up"
3. Use GitHub ou email

### 3.2 - Deploy Manual (MAIS RÁPIDO)
1. Clique em "Add new site" → "Deploy manually"
2. Arraste a pasta `website/` (SEM a pasta backend)
3. Aguarde 30 segundos
4. Pronto! Site online!

### 3.3 - Atualizar URL do Backend
Edite o arquivo `js/script.js` e troque:
```javascript
const API_URL = 'https://bartexcraft-backend.onrender.com';
```

---

## 📝 PASSO 4: CONFIGURAR WEBHOOK NO MERCADO PAGO

1. Acesse: https://www.mercadopago.com.br/developers/panel/app
2. Vá em sua aplicação
3. Clique em "Webhooks"
4. Adicione a URL: `https://bartexcraft-backend.onrender.com/webhook`
5. Selecione eventos: "Pagamentos"
6. Salve

---

## ✅ CHECKLIST COMPLETO

- [ ] Pegar Access Token do Mercado Pago
- [ ] Criar conta no Render.com
- [ ] Fazer deploy do backend no Render
- [ ] Configurar variáveis de ambiente
- [ ] Criar conta no Netlify
- [ ] Fazer deploy do frontend no Netlify
- [ ] Atualizar URL da API no código
- [ ] Configurar webhook no Mercado Pago
- [ ] Testar pagamento

---

## 🎯 RESUMO RÁPIDO

**Backend (Render.com):**
- URL: `https://bartexcraft-backend.onrender.com`
- Processa pagamentos
- Ativa VIP automaticamente

**Frontend (Netlify):**
- URL: `https://seu-site.netlify.app`
- Site público
- Interface de compra

---

## 💰 CUSTOS

- Render.com: **GRÁTIS** (500h/mês)
- Netlify: **GRÁTIS** (100GB/mês)
- Mercado Pago: **Taxa por venda** (~5%)

**Total: R$ 0/mês** 🎉

---

## 🚨 IMPORTANTE

⚠️ O Render.com GRÁTIS "dorme" após 15 minutos sem uso.
- Primeira requisição pode demorar 30 segundos
- Depois funciona normal
- Para evitar: use plano pago ($7/mês) ou serviço de "ping"

---

## 📞 PRECISA DE AJUDA?

Me avise que eu configuro tudo para você! 🚀
