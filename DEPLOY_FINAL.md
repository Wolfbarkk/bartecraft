# 🚀 DEPLOY FINAL - COLOCAR ONLINE AGORA

## ✅ CREDENCIAIS CONFIGURADAS!

Seu Access Token já está configurado no arquivo `.env`

---

## 📦 PASSO 1: PREPARAR ARQUIVOS PARA DEPLOY

### Criar conta no GitHub (se não tiver)
1. Acesse: https://github.com
2. Clique em "Sign up"
3. Crie sua conta

### Subir código no GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `bartexcraft`
3. Marque "Public"
4. Clique em "Create repository"
5. Na página que abrir, clique em "uploading an existing file"
6. Arraste TODA a pasta `website` (incluindo backend)
7. Clique em "Commit changes"

---

## 🖥️ PASSO 2: DEPLOY DO BACKEND (Render.com)

### 2.1 - Criar conta
1. Acesse: https://render.com
2. Clique em "Get Started"
3. Faça login com GitHub

### 2.2 - Criar Web Service
1. Clique em "New +" → "Web Service"
2. Conecte seu repositório GitHub `bartexcraft`
3. Configure:

```
Name: bartexcraft-backend
Region: Oregon (US West)
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: npm start
```

### 2.3 - Adicionar Variáveis de Ambiente
Clique em "Environment" e adicione:

```
MP_ACCESS_TOKEN = APP_USR-6377999156990882-022813-e668b38c7c4e76425d6e2c0cded3930e-1463296878
MP_PUBLIC_KEY = APP_USR-1f3407ad-c708-418e-af84-a15b932aa746
PORT = 3000
```

**IMPORTANTE:** Depois do deploy, volte e adicione:
```
WEBHOOK_URL = https://SEU-BACKEND.onrender.com
SITE_URL = https://SEU-SITE.netlify.app
```

### 2.4 - Deploy
1. Clique em "Create Web Service"
2. Aguarde 3-5 minutos
3. Copie a URL: `https://bartexcraft-backend.onrender.com`

---

## 🌐 PASSO 3: DEPLOY DO FRONTEND (Netlify)

### 3.1 - Criar conta
1. Acesse: https://netlify.com
2. Clique em "Sign up"
3. Use GitHub ou email

### 3.2 - Deploy Manual
1. Clique em "Add new site" → "Deploy manually"
2. Arraste APENAS estas pastas/arquivos:
   - `css/`
   - `img/`
   - `js/`
   - `index.html`
   - `loja.html`
   - `netlify.toml`
3. Aguarde 30 segundos
4. Copie a URL: `https://random-name.netlify.app`

### 3.3 - Mudar nome do site (opcional)
1. Vá em "Site settings"
2. Clique em "Change site name"
3. Digite: `bartexcraft`
4. Agora seu site será: `https://bartexcraft.netlify.app`

---

## 🔗 PASSO 4: CONECTAR FRONTEND COM BACKEND

### 4.1 - Atualizar arquivo JS
Edite o arquivo `js/script.js` e adicione no início:

```javascript
const API_URL = 'https://SEU-BACKEND.onrender.com';
```

Substitua `SEU-BACKEND` pela URL do Render.

### 4.2 - Atualizar variáveis no Render
Volte no Render e atualize as variáveis:
```
WEBHOOK_URL = https://SEU-BACKEND.onrender.com
SITE_URL = https://bartexcraft.netlify.app
```

Clique em "Save Changes" e aguarde reiniciar.

---

## 🔔 PASSO 5: CONFIGURAR WEBHOOK NO MERCADO PAGO

1. Acesse: https://www.mercadopago.com.br/developers/panel/app
2. Clique em sua aplicação "BARTEXCRAFT VIP"
3. Vá em "Webhooks" no menu lateral
4. Clique em "Configurar notificações"
5. URL de produção: `https://SEU-BACKEND.onrender.com/webhook`
6. Eventos: Marque "Pagamentos"
7. Clique em "Salvar"

---

## ✅ CHECKLIST FINAL

- [ ] Código no GitHub
- [ ] Backend no Render.com
- [ ] Variáveis de ambiente configuradas
- [ ] Frontend no Netlify
- [ ] API_URL atualizado no JS
- [ ] Webhook configurado no Mercado Pago
- [ ] Testar pagamento

---

## 🧪 TESTAR O SISTEMA

1. Acesse seu site: `https://bartexcraft.netlify.app`
2. Clique em "Comprar VIP"
3. Preencha nick e email
4. Clique em "Comprar Agora"
5. Faça um pagamento de teste
6. Verifique se o VIP foi ativado

---

## 📊 MONITORAR

### Ver logs do backend:
1. Acesse Render.com
2. Clique em seu serviço
3. Vá em "Logs"
4. Veja pagamentos em tempo real

### Ver pagamentos:
1. Acesse: https://www.mercadopago.com.br/activities
2. Veja todos os pagamentos recebidos

---

## 🚨 PROBLEMAS COMUNS

### Backend não inicia:
- Verifique logs no Render
- Confirme que `package.json` está correto
- Verifique variáveis de ambiente

### Pagamento não funciona:
- Abra console do navegador (F12)
- Veja se há erros
- Verifique se API_URL está correto

### Webhook não recebe notificação:
- Confirme URL no Mercado Pago
- Verifique logs do Render
- Teste manualmente: `curl -X POST https://seu-backend.onrender.com/webhook`

---

## 💰 CUSTOS

- **GitHub:** GRÁTIS
- **Render.com:** GRÁTIS (750h/mês)
- **Netlify:** GRÁTIS (100GB/mês)
- **Mercado Pago:** Taxa por venda (~5%)

**Total mensal: R$ 0** 🎉

---

## 🎯 PRÓXIMOS PASSOS

Depois de tudo funcionando:

1. **Domínio próprio** (opcional):
   - Compre: `bartexcraft.com.br`
   - Conecte no Netlify
   - Custo: ~R$ 40/ano

2. **Melhorar backend**:
   - Adicionar banco de dados
   - Sistema de logs
   - Email de confirmação

3. **Divulgar**:
   - Redes sociais
   - Discord
   - Fóruns de Minecraft

---

## 📞 SUPORTE

Se precisar de ajuda:
- Documentação Render: https://render.com/docs
- Documentação Netlify: https://docs.netlify.com
- Mercado Pago: https://www.mercadopago.com.br/developers

---

**TUDO PRONTO! AGORA É SÓ FAZER O DEPLOY!** 🚀

Siga os passos acima e em 15 minutos seu sistema estará online!
