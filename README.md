# Parque Ilha Bela – MRV | Funil de Captura

Projeto React + Vite + Tailwind com **3 páginas sequenciais** para máxima conversão.

## 🚀 Como publicar no Vercel

### Opção 1 – Vercel CLI (mais rápido)
```bash
npm install
npm run build
npx vercel --prod
```

### Opção 2 – GitHub + Vercel
1. Suba este repositório no GitHub
2. Acesse vercel.com → New Project → importe o repo
3. Framework: **Vite** (detectado automaticamente)
4. Build command: `npm run build`
5. Output dir: `dist`
6. Clique **Deploy**

## ✏️ Personalização obrigatória

Abra `src/pages/Page3Apresentacao.jsx` e troque na linha de config:

```js
const WPP = '5522999999999' // ← SEU número (DDI 55 + DDD + número, sem espaços ou +)
```

## 📦 Estrutura
```
src/
  assets/images.js   ← imagens reais do empreendimento em base64
  pages/
    Page1Despertar.jsx    ← Página 1: gancho emocional
    Page2Revelacao.jsx    ← Página 2: produto + fotos reais
    Page3Apresentacao.jsx ← Página 3: galeria + FAQ + formulário
  App.jsx            ← gerencia fluxo entre páginas
  main.jsx
  index.css
```

## 🔗 Integração com Supabase (CRM)
No `Page3Apresentacao.jsx`, descomente o bloco `fetch` dentro de `handleSubmit` e preencha:
- `SEU_PROJETO.supabase.co` → URL do seu projeto
- `SUA_ANON_KEY` → chave anon do Supabase

## 📞 Contato
Consultor Pedro · MRV · Campos dos Goytacazes
