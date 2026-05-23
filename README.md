# 🌱 Wdev Digital — Site Institucional (Vue 3 + Vite)

Site institucional da **Wdev Digital**, baseado no handoff de design entregue por Claude Design.
Construído com **Vue 3 (Composition API) + Vite**, sem framework de CSS — apenas CSS custom properties e o design system do handoff.

O formulário de contato consome a API local **`api-whats`** e dispara a mensagem para o WhatsApp Business do dono do site.

---

## 📁 Estrutura

```
site-institucional/
├── public/
│   ├── favicon.svg
│   └── assets/                 # Imagens originais do handoff
│       ├── hero-campo.png
│       ├── services-dashboard.png
│       ├── services-wireframe.png
│       └── agro-collage.png
├── src/
│   ├── components/
│   │   ├── TheNav.vue
│   │   ├── HeroSection.vue
│   │   ├── ProblemSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── AgroSection.vue
│   │   ├── ProcessSection.vue
│   │   ├── WhyUsSection.vue
│   │   ├── CtaSection.vue      # Form integrado à api-whats
│   │   └── TheFooter.vue
│   ├── data/
│   │   └── copy.js             # Todos os textos do site
│   ├── services/
│   │   └── contactApi.js       # Cliente da api-whats
│   ├── styles/
│   │   └── global.css          # Design tokens + estilos do handoff
│   ├── App.vue
│   └── main.js
├── .env / .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Instalação

Pré-requisito: **Node.js 18+**.

```bash
cd site-institucional
npm install
```

Crie seu arquivo de variáveis de ambiente:

```bash
# Windows (PowerShell)
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

Conteúdo padrão (já apontando para a api-whats local):

```
VITE_API_URL=http://localhost:3000
```

---

## ▶️ Executar em desenvolvimento

```bash
npm run dev
```

Acesse: <http://localhost:5173>

## 📦 Build de produção

```bash
npm run build
npm run preview
```

A build gerada vai em `dist/`.

---

## 🔗 Integração com a api-whats

O componente `src/components/CtaSection.vue` envia um `POST` para o endpoint `/enviar` da
[`api-whats`](../api-whats/README.md), com o seguinte payload:

```json
{
  "nome": "João Silva — Fazenda São Bento",
  "email": "joao@fazenda.com.br",
  "telefone": "(18) 99999-9999",
  "mensagem": "Setor: Fazenda / Grupo agrícola\n\nPrecisamos integrar balança rodoviária com ERP..."
}
```

O setor selecionado no select é incorporado dentro do campo `mensagem` para reaproveitar o
contrato existente da API sem precisar alterá-la. A API formata a mensagem e dispara para o
número configurado em `WHATSAPP_DESTINO` (no `.env` da api-whats).

### Subir tudo junto (fluxo recomendado)

Em **dois terminais separados**:

```powershell
# Terminal 1 — API WhatsApp
cd C:\Users\pc-129-93423\Documents\api-whats
npm install        # apenas na primeira vez
npm run dev        # escaneie o QR Code no terminal
```

```powershell
# Terminal 2 — Site institucional
cd C:\Users\pc-129-93423\Documents\site-institucional
npm install        # apenas na primeira vez
npm run dev        # abre http://localhost:5173
```

Preencha o formulário em `#contato` e a mensagem chega no WhatsApp configurado.

---

## ⚙️ Variáveis de ambiente

| Variável         | Descrição                                          | Padrão                  |
| ---------------- | -------------------------------------------------- | ----------------------- |
| `VITE_API_URL`   | URL base da api-whats (sem barra final)            | `http://localhost:3000` |

Toda variável usada pelo browser **precisa** começar com `VITE_` (regra do Vite).

---

## 🎨 Personalização

- **Textos**: edite `src/data/copy.js` — o site inteiro lê dali.
- **Cores**: as design tokens estão em `:root` dentro de `src/styles/global.css`
  (variáveis `--bg`, `--green`, `--green-deep`, `--lime`, etc.).
- **Imagens**: substitua os arquivos em `public/assets/` mantendo os nomes.

---

## 🧱 Tecnologias

- [Vue 3](https://vuejs.org) com Composition API (`<script setup>`)
- [Vite](https://vitejs.dev) para dev server e build
- CSS puro + design tokens (sem Tailwind/UI lib)
- Fonts: Manrope + JetBrains Mono via Google Fonts

---

## 📜 Licença

Uso interno — Wdev Digital.
