# 🚀 SISTEMA VIP AUTOMÁTICO - GUIA COMPLETO

## ✅ O QUE FOI CRIADO

Sistema 100% automático que:
1. Cliente paga via Mercado Pago (PIX, Cartão, Boleto)
2. Pagamento aprovado → Webhook notifica backend
3. Backend ativa VIP automaticamente no servidor
4. Cliente recebe VIP em segundos!

---

## 📋 PASSO 1: CRIAR CONTA MERCADO PAGO

1. Acesse: https://www.mercadopago.com.br/developers
2. Crie conta gratuita
3. Vá em "Suas integrações" > "Criar aplicação"
4. Copie o **Access Token** (Production)

**Taxas**: 4.99% + R$ 0,49 por venda
- Venda R$ 25,00 = Você recebe R$ 23,26

---

## 📋 PASSO 2: HOSPEDAR BACKEND (GRÁTIS)

### Opção A: Render.com (Recomendado)
1. Acesse: https://render.com
2. Crie conta gratuita
3. New > Web Service
4. Conecte GitHub ou faça upload da pasta `backend/`
5. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Adicione variáveis de ambiente (.env)
7. Deploy!

### Opção B: Railway.app
1. Acesse: https://railway.app
2. New Project > Deploy from GitHub
3. Selecione pasta `backend/`
4. Adicione variáveis de ambiente
5. Deploy automático!

**Ambos são GRATUITOS** (500h/mês grátis)

---

## 📋 PASSO 3: PLUGIN MINECRAFT (API REST)

Criei um plugin que expõe API REST para ativar VIP:

```
POST http://seu-servidor:8080/api/vip/add
Body: {"nick": "PlayerName"}
```

O plugin já está pronto em: `VIPSystem/`

---

## 📋 PASSO 4: CONFIGURAR WEBHOOK

1. No Mercado Pago, vá em "Webhooks"
2. Adicione URL: `https://seu-backend.render.com/webhook`
3. Selecione evento: "Pagamentos"
4. Salve

---

## 📋 PASSO 5: ATUALIZAR SITE

O site já está configurado! Só precisa:

1. Substituir URL da API no JavaScript
2. Testar pagamento

---

## 🎯 COMO FUNCIONA

```
Cliente preenche formulário
    ↓
Clica "Pagar"
    ↓
Redirecionado para Mercado Pago
    ↓
Paga via PIX/Cartão/Boleto
    ↓
Mercado Pago aprova pagamento
    ↓
Webhook notifica seu backend
    ↓
Backend chama API do plugin
    ↓
Plugin ativa VIP no servidor
    ↓
Cliente recebe VIP automaticamente!
```

---

## 💰 CUSTOS

- Backend: **GRÁTIS** (Render/Railway)
- Mercado Pago: **GRÁTIS** (só taxa por venda)
- Plugin: **GRÁTIS**
- Total: **R$ 0,00/mês**

Você só paga 4.99% + R$ 0,49 por venda!

---

## 🔧 INSTALAÇÃO RÁPIDA

```bash
# 1. Instalar dependências
cd backend
npm install

# 2. Configurar .env
cp .env.example .env
# Edite .env com suas credenciais

# 3. Testar localmente
npm start

# 4. Deploy no Render/Railway
# (seguir passos acima)
```

---

## 🎮 PLUGIN MINECRAFT

O plugin VIPSystem já tem API REST integrada!

Endpoints:
- POST /api/vip/add - Adiciona VIP
- GET /api/vip/check/:nick - Verifica VIP
- DELETE /api/vip/remove/:nick - Remove VIP

---

## 📧 SUPORTE

Dúvidas? Discord: https://discord.gg/6yb2AsJ3

---

## ⚠️ IMPORTANTE

1. Use HTTPS no backend (Render/Railway já fornece)
2. Guarde Access Token em segredo
3. Teste em modo sandbox primeiro
4. Configure firewall do servidor Minecraft

---

## 🚀 PRÓXIMOS PASSOS

1. Criar conta Mercado Pago
2. Hospedar backend no Render
3. Configurar webhook
4. Testar pagamento
5. Lucrar! 💰
