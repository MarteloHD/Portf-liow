# Link in Bio - Editor de Vídeo 🎬

Um site moderno e impactante estilo "link in bio" para editores de vídeo focados em YouTube, TikTok, Reels e Shorts.

## ✨ Características

- **Design Dark Neon**: Tema escuro com acentos em cyan e purple
- **Animações Suaves**: Transições e efeitos dinâmicos em toda a página
- **Responsivo**: Funciona perfeitamente em mobile e desktop
- **Performance**: Build otimizado com Vite
- **Componentes Modernos**: Hero, Portfolio, Services, CTA e Footer

## 🚀 Seções

1. **Hero** - Seção inicial impactante com CTA buttons
2. **Portfolio** - Galeria de vídeos longos e curtos com tabs
3. **Serviços** - 6 cards mostrando o que você faz
4. **CTA** - Botões de ação (WhatsApp, Portfólio, YouTube)
5. **Footer** - Links e informações

## 🛠️ Tecnologias

- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion (animações)
- Lucide React (ícones)
- Vite (build tool)

## 📦 Instalação Local

```bash
# Instalar dependências
pnpm install

# Rodar servidor de desenvolvimento
pnpm dev

# Fazer build para produção
pnpm build

# Visualizar build
pnpm preview
```

## 🌐 Deploy no GitHub Pages

### 1. Criar repositório no GitHub
- Crie um novo repositório chamado `link-in-bio` (ou outro nome)
- Clone para sua máquina local

### 2. Copiar arquivos
```bash
# Copie todos os arquivos do projeto para o repositório
cp -r /home/ubuntu/link-in-bio-editor/* seu-repo/
cd seu-repo
```

### 3. Configurar vite.config.ts
```typescript
export default defineConfig({
  base: '/link-in-bio/', // Substitua pelo nome do seu repositório
  plugins: [react(), tailwindcss()],
})
```

### 4. Fazer build
```bash
pnpm build
```

### 5. Fazer push para GitHub
```bash
git add .
git commit -m "Deploy link in bio site"
git push origin main
```

### 6. Ativar GitHub Pages
- Vá para Settings → Pages
- Selecione "Deploy from a branch"
- Escolha branch `main` e pasta `/dist`
- Clique em Save

Seu site estará disponível em: `https://seu-usuario.github.io/link-in-bio/`

## 🎨 Personalização

### Cores
Edite `tailwind.config.ts` para mudar as cores neon:
```typescript
colors: {
  cyan: '#06b6d4',
  purple: '#a855f7',
}
```

### Conteúdo
Edite os componentes em `src/components/`:
- `Hero.tsx` - Título e descrição
- `Portfolio.tsx` - Vídeos e links
- `Services.tsx` - Serviços oferecidos
- `CTA.tsx` - Botões de ação
- `Footer.tsx` - Informações de rodapé

### Links
Atualize os links em `CTA.tsx`:
```typescript
href="https://wa.me/seu-numero" // WhatsApp
href="https://youtube.com/@seu-canal" // YouTube
href="https://instagram.com/seu-perfil" // Instagram
```

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🚀 Performance

- Build size: ~541 kB (não minificado)
- Gzip: ~165 kB
- Otimizado para carregamento rápido

## 📄 Licença

Livre para usar e modificar conforme necessário.

---

**Feito com ❤️ para criadores de conteúdo**
