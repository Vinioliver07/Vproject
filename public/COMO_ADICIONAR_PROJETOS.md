# 📸 Como Adicionar Screenshots dos Projetos

## 🎯 Passo a Passo

### 1. Prepare as Screenshots

**Especificações Recomendadas:**
- ✅ Formato: JPG ou PNG
- ✅ Dimensões ideais: **Mobile (375x812px)** ou similar (proporção de tela de celular)
- ✅ Peso: Menor que 500KB cada
- ✅ Qualidade: Alta resolução, mas otimizada

**Dicas para Capturar Screenshots:**
- 📱 Abra o projeto no navegador em modo mobile (F12 → Toggle Device)
- 📐 Use dimensões de iPhone 12/13 (375x812px)
- 🖼️ Capture a tela inteira do projeto
- ✂️ Corte apenas a parte relevante (sem barra de ferramentas)

---

### 2. Otimize as Imagens (Importante!)

**Comprimir para Performance:**
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

**Meta:** Cada imagem com menos de 300KB

---

### 3. Adicione as Imagens ao Projeto

**Nomeie os arquivos exatamente assim:**
```
dr-lauane.jpg       → Screenshot da Dra. Lauane
mateus-silva.jpg    → Screenshot do Mateus Silva
cortevip.jpg        → Screenshot do CorteVip
```

**Coloque na pasta:** `public/projects/`

```
public/
└── projects/
    ├── dr-lauane.jpg
    ├── mateus-silva.jpg
    └── cortevip.jpg
```

---

### 4. Configure a URL do CorteVip

Se o projeto CorteVip já estiver online, atualize em `App.tsx`:

**Linha ~31:**
```tsx
{
  id: '3',
  title: 'CorteVip',
  category: 'Site para Barbearia',
  description: 'Plataforma de agendamento online moderna para barbearias...',
  url: 'https://cortevip.com.br', // ← Coloque a URL real aqui
  image: '/projects/cortevip.jpg',
  ...
}
```

---

### 5. Testar Localmente

```bash
# Rode o projeto
npm run dev

# Acesse: http://localhost:3000
# Role até "Projetos Recentes"
# Verifique se as screenshots aparecem dentro do mockup do celular
```

---

### 6. Deploy

```bash
# Commit e push
git add public/projects/
git add App.tsx
git commit -m "feat: adicionar screenshots reais dos projetos"
git push origin main

# Deploy automático na Vercel (~2 min)
```

---

## 🎨 Como Ficará

Cada projeto terá:
- ✅ Screenshot REAL dentro do mockup de celular
- ✅ Botão "Ver Projeto Real" sobreposto na parte inferior
- ✅ Efeito hover que levanta o card
- ✅ Fallback: se a imagem não carregar, mostra o design de gradiente original

---

## 📋 Checklist

- [ ] Capturar 3 screenshots (mobile view)
- [ ] Otimizar imagens (< 300KB cada)
- [ ] Renomear: `dr-lauane.jpg`, `mateus-silva.jpg`, `cortevip.jpg`
- [ ] Criar pasta: `public/projects/`
- [ ] Adicionar imagens na pasta
- [ ] Atualizar URL do CorteVip (se online)
- [ ] Testar localmente
- [ ] Commit e push

---

## ⚠️ Troubleshooting

**Imagens não aparecem:**
- Verifique os nomes dos arquivos (case-sensitive!)
- Confirme que estão em `public/projects/`
- Limpe o cache: Ctrl + Shift + R

**Imagens distorcidas:**
- Use proporção vertical (celular): 375x812px ou similar
- Não use imagens muito largas (desktop)

**Site lento:**
- Comprima as imagens! Use TinyPNG
- Meta: < 300KB por imagem

---

## 🚀 Resultado

Seus projetos reais aparecerão de forma profissional, com screenshots ao vivo dentro do mockup de celular! 📱✨
