# Vercel Deploy Instructions

## 📧 Configure o Formulário (Web3Forms)

1. Acesse: https://web3forms.com
2. Digite seu email para receber a API key
3. Copie a chave que receber no email
4. Abra `components/ContactForm.tsx`
5. Linha 77: Substitua `YOUR_WEB3FORMS_KEY_HERE` pela sua chave

## 🚀 Deploy na Vercel

### Método 1: Via Interface Web (Recomendado)

1. Acesse: https://vercel.com
2. Clique em "Add New..." → "Project"
3. Importe o repositório: `Vinioliver07/Vproject`
4. Configure:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em "Deploy"

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## ✅ Após o Deploy

1. Seu site estará em: `https://vproject.vercel.app`
2. Configure domínio customizado (opcional):
   - Settings → Domains → Add Domain
3. Teste o formulário enviando uma mensagem!

## 🔧 Configurações Opcionais

### Adicionar variável de ambiente (para API key):

1. No dashboard Vercel → Settings → Environment Variables
2. Adicione:
   - Name: `VITE_WEB3FORMS_KEY`
   - Value: `sua_chave_aqui`
3. Redeploy o projeto

### Configurar domínio próprio:

1. Compre domínio (Google Domains, Namecheap, etc)
2. Vercel → Project Settings → Domains
3. Adicione seu domínio
4. Configure DNS conforme instruções

---

**Deploy automático:** Cada push no GitHub faz deploy automático! 🎉
