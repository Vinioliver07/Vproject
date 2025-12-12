# 📸 Como Adicionar Sua Foto no Site

## 🎯 Passo a Passo

### 1. Prepare sua Foto

**Especificações Recomendadas:**
- ✅ Formato: JPG ou PNG
- ✅ Tamanho: Quadrado (1:1) - Ex: 1000x1000px ou 800x800px
- ✅ Peso: Menor que 500KB (para performance)
- ✅ Qualidade: Alta resolução, mas otimizada

**Dicas de Foto:**
- 👔 Roupa profissional (mas confortável)
- 😊 Expressão confiante e acessível
- 💡 Boa iluminação (natural é melhor)
- 🖼️ Fundo neutro ou levemente desfocado
- 📐 Enquadramento: busto ou meio corpo

---

### 2. Otimize a Foto (Opcional mas Recomendado)

**Ferramentas Online Grátis:**
- **TinyPNG:** https://tinypng.com (comprimir sem perder qualidade)
- **Squoosh:** https://squoosh.app (Google, muito bom)
- **Remove.bg:** https://remove.bg (remover fundo se necessário)

---

### 3. Adicione ao Projeto

**Opção A - Nome Padrão (Recomendado):**
1. Renomeie sua foto para: `profile.jpg`
2. Coloque na pasta: `public/`
3. Pronto! O site já está configurado para usar `profile.jpg`

**Opção B - Nome Customizado:**
1. Coloque sua foto em: `public/seu-nome.jpg`
2. Abra: `App.tsx`
3. Procure por: `{/* TODO: Adicione sua foto aqui */}`
4. Descomente e edite a linha:
```tsx
<img src="/seu-nome.jpg" alt="Desenvolvedor V Project" className="w-full h-full object-cover" />
```

---

### 4. Ativar a Foto no Código

**No arquivo `App.tsx` (linha ~254):**

**ANTES (com placeholder):**
```tsx
{/* TODO: Adicione sua foto aqui */}
{/* <img src="/profile.jpg" alt="Desenvolvedor V Project" className="w-full h-full object-cover" /> */}

{/* Placeholder enquanto não adiciona foto */}
<div className="w-full h-full bg-gradient-to-br from-brand-light/10...
```

**DEPOIS (com sua foto):**
```tsx
<img src="/profile.jpg" alt="Desenvolvedor V Project" className="w-full h-full object-cover" />
```

Basicamente:
1. Descomente a linha com `<img src...`
2. Delete o bloco do placeholder (div com "Sua foto aqui")

---

### 5. Testar Localmente

```bash
# Rode o projeto
npm run dev

# Acesse: http://localhost:3000
# Role até a seção "Sobre"
# Verifique se a foto apareceu corretamente
```

---

### 6. Fazer Deploy

```bash
# Commit e push
git add public/profile.jpg
git add App.tsx
git commit -m "feat: adicionar foto do desenvolvedor"
git push origin main

# A Vercel vai fazer deploy automático em ~2 minutos
```

---

## 🎨 Resultado Final

A foto aparecerá:
- ✅ Com bordas arredondadas elegantes
- ✅ Efeito glassmorphism ao redor
- ✅ Badge "CEO & Full Stack Developer" embaixo
- ✅ Estatísticas (50+ projetos, 100% satisfação, 5+ anos)
- ✅ Responsivo (fica perfeito no mobile também!)

---

## ⚠️ Troubleshooting

**Foto não aparece:**
- Verifique se o nome está correto: `profile.jpg`
- Confirme que está na pasta `public/`
- Limpe o cache: Ctrl + Shift + R

**Foto está distorcida:**
- Use foto quadrada (mesma largura e altura)
- Use `object-cover` na classe (já está configurado)

**Foto está muito pesada:**
- Comprima em https://tinypng.com
- Ideal: menos de 500KB

---

## 🚀 Pronto!

Sua foto estará no ar, dando um toque pessoal e profissional ao site! 📸✨
