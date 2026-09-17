# STUDIO BROS FITNESS — Website Oficial

> Website institucional e comercial de alto padrão (padrão de agência R$ 10.000+) desenvolvido sob medida para o **Studio Bros Fitness — Personal Trainer**, localizado no Carandá Bosque, Campo Grande / MS.

---

## 🏛️ Identidade & Posicionamento

O **Studio Bros Fitness** não é uma academia convencional de rede. É um estúdio boutique exclusivo de treinamento personalizado, operando com agendamento prévio, capacidade estritamente controlada, avaliação física conduzida por especialista em fisiologia do exercício e acompanhamento de personal trainer do primeiro ao último minuto do treino.

### Dados Oficiais Verificados (Receita Federal / JUCEMS / Redes Oficiais)
- **Razão Social:** E. Lidio de Oliveira Santos e Cia Ltda - ME
- **CNPJ:** `55.298.299/0001-02` (Abertura: 27/05/2024)
- **Sócios:** Elton Lidio de Oliveira Santos (Responsável Técnico) & Vitor Rogerio de Oliveira Moura
- **Endereço:** Rua Vitório Zeolla, 891 - Carandá Bosque, Campo Grande/MS - CEP 79032-360
- **Telefone Fixo:** (67) 3253-2353
- **WhatsApp:** (67) 99249-3221
- **Convênio Oficial Credenciado:** Unisaúde MS
- **Instagram Oficial:** [@brosfitnesscg](https://www.instagram.com/brosfitnesscg/)

---

## 🚀 Arquitetura Tecnológica

- **Framework:** Next.js 15 (App Router, Server Components por padrão)
- **Linguagem:** TypeScript com tipagem estrita
- **Estilização:** Tailwind CSS com Design Tokens OKLCH calibrados para interfaces de luxo escuro (Obsidian `#080C0D`, Dark Slate `#0F1516`, Bros Teal `#14B8A6`/`#2DD4BF`, Emerald `#10B981`)
- **Fotografia:** 100% fotos originais e autênticas da estrutura física e da equipe real (zero ilustrações genéricas de IA)
- **SEO & Dados Estruturados:** Metadata completa, OpenGraph, Twitter Cards, Geo-tags (Campo Grande/MS) e Schema.org JSON-LD (`ExerciseGym`, `HealthClub`, `LocalBusiness`)
- **Acessibilidade:** Alvos de toque mobile mínimos de 44x44px, contraste auditado, navegação por teclado e respeito a `prefers-reduced-motion`.

---

## 📂 Estrutura do Projeto

```
BROSS FITNESS/
├── public/
│   ├── assets/images/         # 130 fotos originais e autênticas do estúdio
│   └── screenshots/           # Capturas de auditoria em Desktop, Tablet e Mobile
├── src/
│   ├── app/
│   │   ├── globals.css        # Variáveis CSS OKLCH, micro-interações táteis e resets
│   │   ├── layout.tsx         # Fontes Google, SEO, OpenGraph e Schema.org JSON-LD
│   │   └── page.tsx           # Montagem editorial completa de todas as seções
│   ├── components/
│   │   ├── BrosLogo.tsx       # Reprodução vetorial exata da marca Bros Fitness
│   │   ├── Header.tsx         # Cabeçalho fixo com vidro fosco, status bar e drawer mobile
│   │   ├── Hero.tsx           # Seção de impacto com foto real do uniforme Bros e badges de prova
│   │   ├── Manifesto.tsx      # Filosofia de marca e tabela comparativa Academia vs Studio Bros
│   │   ├── Methodology.tsx    # Pilar científico com Prof. Elton Lidio (Fisiologia do Exercício)
│   │   ├── Services.tsx       # 4 modalidades com mensagens contextuais de WhatsApp
│   │   ├── GalleryStructure.tsx# Grid bento com fotos reais do espaço e 6 diferenciais boutique
│   │   ├── TeamSection.tsx    # Corpo docente completo com foto 4K do jardim vertical
│   │   ├── UnisaudeSection.tsx# Destaque do plano credenciado Unisaúde MS
│   │   ├── Testimonials.tsx   # Depoimentos reais de alunos e nota 5.0 Google
│   │   ├── GoalSimulator.tsx  # Simulador interativo de rotina gerando mensagem pronta para o WhatsApp
│   │   ├── LocationSection.tsx# Fachada física, contatos e mapa tático interativo com rotas Maps/Waze
│   │   ├── FaqSection.tsx     # Accordion de dúvidas frequentes com respostas claras
│   │   ├── Footer.tsx         # Rodapé institucional com CNPJ, NAP, links e sitemap
│   │   ├── FloatingWhatsApp.tsx# Botão flutuante de WhatsApp com radar de pulso e tooltip
│   │   └── Icons.tsx          # Ícones vetoriais otimizados
│   └── data/
│       └── studioData.ts      # FONTE ÚNICA DA VERDADE (altere contatos, equipe e dados aqui)
├── tailwind.config.ts         # Tokens de cor, sombras de brilho e tipografia
└── tsconfig.json              # Configuração TypeScript
```

---

## 🛠️ Como Editar Informações

Todas as informações de negócio estão centralizadas em um único arquivo:
👉 **`src/data/studioData.ts`**

Para alterar qualquer informação:
1. **WhatsApp ou Telefone:** Edite `phoneWhatsApp`, `whatsappRaw` ou `phoneLandline`.
2. **Horários:** Edite o objeto `hours`.
3. **Membros da Equipe:** Adicione, remova ou edite nomes, bios e fotos no array `trainers`.
4. **Modalidades & Programas:** Altere descrições e títulos no array `services`.
5. **Perguntas Frequentes:** Atualize ou adicione itens no array `faqs`.
6. **Depoimentos:** Edite ou adicione relatos de alunos no array `testimonials`.

---

## 💻 Comandos para Execução

### Instalação de Dependências
```bash
npm install
```

### Modo de Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000`.

### Build de Produção (GitHub Pages Static Export)
```bash
npm run build
```
O build estático é gerado no diretório `out/`, com prefixo `/StudioBrosFitness/` pronto para o GitHub Pages.

### URL Pública de Produção
🌐 **[https://joaowehner.github.io/StudioBrosFitness/](https://joaowehner.github.io/StudioBrosFitness/)**

---

## 🎨 Paleta de Cores e Tokens

| Nome | Hex | Uso Principal |
|---|---|---|
| **Obsidian Dark** | `#080C0D` | Fundo principal da página |
| **Dark Slate** | `#0F1516` | Fundo secundário e cards |
| **Card Surface** | `#141D1E` | Superfícies elevadas e modais |
| **Bros Teal** | `#14B8A6` | Cor primária da marca e destaques |
| **Bros Teal Light** | `#2DD4BF` | Hover, gradientes e bordas ativas |
| **Biophilic Emerald** | `#10B981` | Acentos naturais e selos de credenciamento |
| **Pure White** | `#FFFFFF` | Títulos e elementos de máximo contraste |
