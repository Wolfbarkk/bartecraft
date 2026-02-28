const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurar Mercado Pago
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

// Criar pagamento
app.post('/api/create-payment', async (req, res) => {
  const { nick, email } = req.body;
  
  try {
    const preference = {
      items: [{
        title: 'VIP Vitalício - BartexCraft',
        unit_price: 25.00,
        quantity: 1,
        description: `VIP para ${nick}`
      }],
      payer: {
        email: email
      },
      external_reference: nick,
      notification_url: `${process.env.WEBHOOK_URL}/webhook`,
      back_urls: {
        success: `${process.env.SITE_URL}?payment=success`,
        failure: `${process.env.SITE_URL}?payment=failure`,
        pending: `${process.env.SITE_URL}?payment=pending`
      },
      auto_return: 'approved'
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar pagamento' });
  }
});

// Webhook - Recebe notificação quando pagamento é aprovado
app.post('/webhook', async (req, res) => {
  const { type, data } = req.body;
  
  if (type === 'payment') {
    try {
      const payment = await mercadopago.payment.findById(data.id);
      
      if (payment.body.status === 'approved') {
        const nick = payment.body.external_reference;
        
        // Ativar VIP no servidor Minecraft
        await activateVIP(nick);
        
        // Enviar email de confirmação (opcional)
        console.log(`VIP ativado para: ${nick}`);
      }
    } catch (error) {
      console.error('Erro no webhook:', error);
    }
  }
  
  res.sendStatus(200);
});

// Função para ativar VIP no Minecraft
async function activateVIP(nick) {
  try {
    // Opção 1: Via RCON (requer plugin RCON no servidor)
    // Opção 2: Via API REST do plugin (recomendado)
    await fetch(`http://localhost:8080/api/vip/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nick: nick })
    });
  } catch (error) {
    console.error('Erro ao ativar VIP:', error);
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
