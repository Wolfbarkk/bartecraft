# Sistema VIP Automático GRATUITO
## Google Forms + Google Sheets + Discord Webhook

### PASSO 1: Criar Google Form
1. Acesse: https://forms.google.com
2. Crie novo formulário: "Compra VIP BartexCraft"
3. Adicione campos:
   - Nick no Servidor (texto curto, obrigatório)
   - Email (email, obrigatório)
   - Método de Pagamento (múltipla escolha: PIX, Cartão, Boleto)
   - Upload do Comprovante (upload de arquivo)

### PASSO 2: Configurar Google Sheets
1. No formulário, clique em "Respostas" > Ícone do Sheets
2. Cria planilha automática com respostas
3. Anote o ID da planilha (está na URL)

### PASSO 3: Criar Discord Webhook
1. No seu Discord, vá em Configurações do Canal > Integrações > Webhooks
2. Criar Webhook
3. Copie a URL do webhook

### PASSO 4: Automatizar com Google Apps Script
1. Na planilha, vá em Extensões > Apps Script
2. Cole o código abaixo
3. Substitua WEBHOOK_URL pela sua URL
4. Salve e autorize

```javascript
function onFormSubmit(e) {
  const WEBHOOK_URL = "SUA_WEBHOOK_URL_AQUI";
  
  const values = e.values;
  const timestamp = values[0];
  const nick = values[1];
  const email = values[2];
  const metodo = values[3];
  const comprovante = values[4];
  
  const embed = {
    "embeds": [{
      "title": "🎉 Nova Compra VIP!",
      "color": 6750207,
      "fields": [
        {"name": "Nick", "value": nick, "inline": true},
        {"name": "Email", "value": email, "inline": true},
        {"name": "Método", "value": metodo, "inline": true},
        {"name": "Comprovante", "value": comprovante || "Não enviado"}
      ],
      "footer": {"text": "BartexCraft VIP System"},
      "timestamp": new Date().toISOString()
    }]
  };
  
  UrlFetchApp.fetch(WEBHOOK_URL, {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(embed)
  });
}
```

5. Adicionar gatilho: Executar > onFormSubmit > Ao enviar formulário

### PASSO 5: Integrar no Site
Substitua o formulário atual por um iframe do Google Forms ou redirecione para o form.

### VANTAGENS:
✅ 100% Gratuito
✅ Notificação instantânea no Discord
✅ Histórico automático no Sheets
✅ Aceita upload de comprovante
✅ Fácil de gerenciar

### LIMITAÇÕES:
❌ Ainda precisa ativar VIP manualmente no servidor
❌ Não processa pagamento automaticamente

---

## **Opção 2: Mercado Pago API (Grátis, só paga taxa por venda)**

Para pagamento TOTALMENTE automático:
1. Criar conta Mercado Pago (grátis)
2. Usar API gratuita
3. Webhook notifica quando pago
4. Plugin ativa VIP automaticamente

Taxa: 4.99% + R$ 0,49 por venda
Exemplo: Venda de R$ 20,00 = você recebe R$ 18,51

Quer que eu implemente qual opção?
