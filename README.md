<div align="center">
  <h1>🚀 V Project - Portfolio & Web Solutions</h1>
  <p><strong>Transformando ideias em experiências digitais de alta performance</strong></p>
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
</div>

---

## 📋 Sobre o Projeto

**V Project** é um portfólio moderno e responsivo para um estúdio de desenvolvimento web especializado em:

- 🌐 **Websites Completos** - Sites institucionais e landing pages otimizadas para conversão
- ⚡ **Cartões Digitais** - Links na bio modernos e interativos
- 🎨 **Identidade Visual** - Design consistente e profissional

### ✨ Características Principais

- ✅ **Performance Otimizada** - Lighthouse score otimizado, Core Web Vitals
- ✅ **SEO Completo** - Meta tags, Open Graph, Schema.org, título dinâmico
- ✅ **Segurança** - Content Security Policy (CSP), Honeypot anti-spam
- ✅ **Responsivo** - Mobile-first design, breakpoints otimizados
- ✅ **Analytics Ready** - Google Tag Manager preparado, dataLayer configurado
- ✅ **TypeScript** - Código totalmente tipado
- ✅ **Acessibilidade** - WCAG básica, navegação por teclado
- ✅ **Imagens Otimizadas** - WebP com fallback, lazy loading, srcset responsivo

---

## ⚡ Otimizações de Performance

### 🖼️ Imagens
- **Formato WebP** - Conversão de PNG para WebP (economia de ~3.9MB)
- **Imagens Responsivas** - srcset com versões mobile e desktop
- **Lazy Loading** - Carregamento sob demanda
- **Fallback PNG** - Suporte para navegadores antigos

### 🎨 CSS & JavaScript
- **Font Preload** - Preload da fonte crítica Outfit
- **Async Font Loading** - Carregamento não-bloqueante com media print
- **Code Splitting** - React vendor e Lucide separados
- **Minificação Terser** - Remoção de console.log em produção

### 📊 Resultados Esperados
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Performance**: 90-100
- **Bundle Size**: ~206KB (gzipped: ~64KB)

---

## 🛠️ Tecnologias Utilizadas

- **React 19.2** - Biblioteca JavaScript para interfaces
- **TypeScript 5.8** - Superset tipado do JavaScript
- **Vite 6.2** - Build tool extremamente rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones moderna

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Vinioliver07/Vproject.git

# Entre na pasta do projeto
cd Vproject

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

### Comandos Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
```

---

## 📁 Estrutura do Projeto

```
v-project-portfolio/
├── components/          # Componentes React reutilizáveis
│   ├── Button.tsx
│   ├── ContactForm.tsx  # Formulário com validação e honeypot
│   ├── Logo.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── services/
│   └── geminiService.ts # Integração com API Gemini (opcional)
├── App.tsx              # Componente principal
├── types.ts             # Definições TypeScript
├── index.html           # HTML base com SEO
├── vite.config.ts       # Configuração do Vite
└── package.json
```

---

## 🔒 Segurança

- **Content Security Policy (CSP)** - Proteção contra XSS
- **Honeypot Anti-Spam** - Campo oculto no formulário de contato
- **Validação Client-Side** - Validação de formulários em tempo real
- **Rel Attributes** - `noopener noreferrer` em links externos

---

## 📊 SEO & Analytics

### SEO Implementado
- ✅ Meta tags otimizadas (título, descrição, keywords)
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD (ProfessionalService)
- ✅ Título dinâmico baseado na seção visível
- ✅ Sitemap e robots.txt ready

### Analytics
- Google Tag Manager preparado (configurar ID)
- DataLayer events:
  - `lead_gerado` - Quando formulário é enviado
  - `whatsapp_click` - Clique no botão WhatsApp

---

## ✅ Checklist de Deploy

Antes de fazer deploy em produção, verifique:

- [ ] Configurar ID do Google Tag Manager no `index.html`
- [ ] Atualizar informações de contato (WhatsApp, email)
- [ ] Configurar links de redes sociais (Instagram, Facebook)
- [ ] Executar `npm run build`
- [ ] Testar com Lighthouse (Performance, SEO, Accessibility)
- [ ] Seguir o checklist completo em `QA_CHECKLIST.md`

---

## 📝 Configuração Opcional

### Google Tag Manager

Edite `index.html` e substitua `GTM-XXXXXXX` pelo seu ID:

```html
<!-- Descomente e configure -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','SEU-ID-AQUI');</script>
```

### API Gemini (Opcional)

Se for usar IA no projeto:

```bash
# Configure a chave no .env.local
GEMINI_API_KEY=sua_chave_aqui
```

---

## 🎯 Projetos no Portfólio

O site apresenta projetos reais desenvolvidos:

1. **Dr. Lauane** - Cartão de visita digital para profissionais da saúde
2. **Mateus Silva** - Portfólio pessoal interativo
3. **CorteVip** - Site completo para barbearia com agendamento online

### 📸 Screenshots dos Projetos
- Imagens originais em PNG: `public/*.png`
- Versões otimizadas WebP: `public/*.webp`
- Versões mobile: `public/*-mobile.webp`

---

## 🔧 Scripts de Otimização

### Otimizar Imagens

```bash
# Converter imagens para WebP e gerar versões mobile
node optimize-images.js
```

Este script irá:
- Converter PNG para WebP (qualidade 85%)
- Gerar versões mobile com 400px de largura
- Economizar ~70-90% do tamanho original

---

## 📄 Licença

Este projeto é de propriedade de **V Project**. Todos os direitos reservados.

---

## 👨‍💻 Autor

**V Project**  
Estúdio de desenvolvimento web focado em performance e design

- 📧 Email: contatovproject@gmail.com
- 📱 WhatsApp: +55 (37) 99670-4294
- 📍 São Paulo, SP

---

<div align="center">
  <p>Desenvolvido com ❤️ por V Project</p>
  <p>© 2025 V Project. Todos os direitos reservados.</p>
</div>
