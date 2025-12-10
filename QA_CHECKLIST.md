# 🧪 V Projects - Checklist de Validação Pré-Deploy (QA Sanity)

Este documento deve ser preenchido manualmente antes de qualquer deploy em produção.

**Versão do App:** 1.0.0
**Responsável pelo Teste:** ____________________
**Data:** __/__/____

---

## 📱 1. Responsividade & Layout (Cross-Device)
*Verifique se o layout não quebra e se não há scroll horizontal indesejado.*

| ID | Dispositivo / Resolução | O que verificar | Status |
|----|-------------------------|-----------------|--------|
| 1.1 | **Mobile Pequeno** (320px - iPhone SE) | Menu hambúrguer abre/fecha? Textos do Hero legíveis? Botões clicáveis sem zoom? | [ ] |
| 1.2 | **Mobile Padrão** (375px/390px - iPhone 12/14) | Cards do Portfólio (Mockup do celular) estão centralizados e não cortados? | [ ] |
| 1.3 | **Tablet Portrait** (768px - iPad) | Grid de Serviços muda de 1 para 2 ou 3 colunas corretamente? Padding lateral suficiente? | [ ] |
| 1.4 | **Laptop/Desktop** (1366px e 1920px) | Menu superior visível (Hambúrguer oculto)? Imagens de fundo (blobs) não cobrem texto? | [ ] |

---

## 🔗 2. Navegação & Links
*Garanta que o usuário não caia em becos sem saída.*

| ID | Teste | Critério de Aceite | Status |
|----|-------|--------------------|--------|
| 2.1 | **Links Internos** (Scroll) | Clicar em "Serviços", "Portfólio" e "Contato" faz scroll suave até a seção correta? | [ ] |
| 2.2 | **Links Externos** (Projetos) | Botão "Ver Projeto Real" abre em **nova aba** (`target="_blank"`)? | [ ] |
| 2.3 | **Redes Sociais** | Links do rodapé (Instagram/Facebook) apontam para as URLs corretas? | [ ] |
| 2.4 | **Botão WhatsApp** | Clicar no botão abre a API do WhatsApp (`wa.me`) com a mensagem predefinida? | [ ] |

---

## ♿ 3. Acessibilidade (WCAG Básica)
*O site deve ser utilizável por todos.*

| ID | Teste | Critério de Aceite | Status |
|----|-------|--------------------|--------|
| 3.1 | **Navegação por Teclado** | É possível navegar por todos os links e inputs usando apenas a tecla `TAB`? O foco é visível? | [ ] |
| 3.2 | **Contraste de Cores** | Textos cinza claro sobre fundo escuro são legíveis? (Dica: Use a extensão Lighthouse ou Axe). | [ ] |
| 3.3 | **Leitores de Tela** | As imagens possuem atributo `alt` descritivo? O menu mobile tem `aria-label`? | [ ] |

---

## ⚡ 4. Performance & Rede (Simulação 3G)
*Teste crítico para usuários em redes móveis instáveis.*

**Como testar:** Abra o DevTools (F12) > Aba Network > No dropdown "No Throttling", selecione **"Slow 3G"**.

| ID | Teste | Critério de Aceite | Status |
|----|-------|--------------------|--------|
| 4.1 | **Envio de Formulário (3G)** | Preencha o formulário e envie. O estado de "Carregando..." (Loader) aparece imediatamente? O botão fica desabilitado para evitar duplo clique? | [ ] |
| 4.2 | **Carregamento de Fontes** | O texto aparece rápido (sem flash de texto invisível)? (Graças ao `preconnect` no head). | [ ] |
| 4.3 | **Layout Shift (CLS)** | Ao carregar, os elementos "pulam" de lugar? O mockup do celular no portfólio mantém o espaço reservado? | [ ] |

---

## 🛡️ 5. Funcionalidade & Segurança
*O "caminho feliz" e as proteções básicas.*

| ID | Teste | Critério de Aceite | Status |
|----|-------|--------------------|--------|
| 5.1 | **Validação de Formulário** | Tente enviar vazio. Tente enviar email sem "@". As mensagens de erro aparecem em vermelho? | [ ] |
| 5.2 | **Honeypot (Anti-Spam)** | (DevTools) Preencha manualmente o input oculto `company_role_verification` no HTML e envie. O formulário deve fingir sucesso mas **não** enviar dados reais (Check console log). | [ ] |
| 5.3 | **SEO Dinâmico** | Role a página. O título da aba do navegador muda para "Serviços | V Project", "Contato | V Project", etc? | [ ] |

---

## 📊 6. Analytics (Data Layer)
*Verifique se estamos medindo o que importa.*

**Como testar:** Abra o console do navegador e digite `dataLayer`.

| ID | Teste | Critério de Aceite | Status |
|----|-------|--------------------|--------|
| 6.1 | **Lead Gerado** | Após enviar o formulário com sucesso, aparece um evento `{ event: 'lead_gerado' }` no dataLayer? | [ ] |
| 6.2 | **Clique WhatsApp** | Ao clicar no botão do WhatsApp, aparece um evento `{ event: 'whatsapp_click' }`? | [ ] |

---

## ✅ Conclusão

*   [ ] **APROVADO para Produção**
*   [ ] **REPROVADO** (Listar blockers abaixo)

**Observações:**
_________________________________________________________________________
