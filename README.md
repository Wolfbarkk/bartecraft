# Website BartexCraft

Website moderno e responsivo para servidor de Minecraft.

## 🚀 Recursos

- Design moderno com gradientes e animações
- Totalmente responsivo (mobile, tablet, desktop)
- Efeito glitch no título
- Partículas animadas no background
- Sistema de cópia de IP
- Seções: Home, Recursos, VIP, Staff
- Integração com redes sociais
- Animações suaves ao scroll
- Menu hambúrguer para mobile

## 📁 Estrutura

```
website/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos
├── js/
│   └── script.js      # Scripts e interações
└── img/               # Imagens (adicione suas imagens aqui)
```

## 🎨 Personalização

### Alterar IP do Servidor
Edite no `index.html` linha 35:
```html
<span id="server-ip">play.bartexcraft.com.br</span>
```

### Alterar Link da Loja
Procure por `#loja` e substitua pelo link real da sua loja.

### Alterar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary: #6c5ce7;      /* Cor primária */
    --secondary: #00b894;    /* Cor secundária */
    --dark: #0a0e27;         /* Fundo escuro */
    --darker: #050814;       /* Fundo mais escuro */
}
```

### Adicionar Imagens
Coloque suas imagens na pasta `img/` e atualize os caminhos no HTML.

### Configurar Status do Servidor
No arquivo `script.js`, linha 75, substitua pela API real:
```javascript
const response = await fetch('https://api.mcsrvstat.us/2/SEU_IP_AQUI');
```

## 🌐 Deploy

### Opção 1: GitHub Pages (Grátis)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Seu site estará em: `https://seuusuario.github.io/nome-repo`

### Opção 2: Netlify (Grátis)
1. Acesse netlify.com
2. Arraste a pasta `website` para o site
3. Pronto! Site no ar em segundos

### Opção 3: Vercel (Grátis)
1. Acesse vercel.com
2. Importe o projeto
3. Deploy automático

### Opção 4: Hospedagem Própria
1. Faça upload via FTP para seu servidor
2. Configure o domínio
3. Certifique-se que o servidor suporta HTML/CSS/JS

## 📱 Redes Sociais

Atualize os links das redes sociais no `index.html` (linha 200+):
```html
<a href="https://discord.gg/seu-servidor"><i class="fab fa-discord"></i></a>
<a href="https://youtube.com/seu-canal"><i class="fab fa-youtube"></i></a>
```

## 🎯 Planos VIP

Edite os preços e benefícios no `index.html` (seção VIP):
- VIP: R$ 19,90/mês
- VIP+: R$ 34,90/mês
- VIP++: R$ 49,90/mês

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- Font Awesome (Ícones)

## 📝 Licença

Livre para uso e modificação.

## 💡 Dicas

1. **SEO**: Adicione meta tags no `<head>` para melhor indexação
2. **Analytics**: Adicione Google Analytics para monitorar visitas
3. **Performance**: Otimize imagens antes de fazer upload
4. **SSL**: Use HTTPS para segurança (GitHub Pages e Netlify já incluem)

## 🐛 Suporte

Para dúvidas ou problemas, entre em contato.

---

**Desenvolvido para BartexCraft** 🎮
