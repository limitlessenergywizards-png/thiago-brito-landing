# Landing Page — Thiago Brito Advogados (Trabalhista Empresarial)

Landing page de qualificação para o funil **Meta/Google Ads → LP → WhatsApp** do escritório Thiago Brito Advogados, conforme estratégia Buma (`estrategia_buma_thiago_brito.docx`, seção 5).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS com paleta da identidade visual do escritório
- Inter via `next/font` (sem chamada externa em runtime)
- Tracking opcional: Meta Pixel + Google Tag Manager (no-op se não configurado)

## Rotas

| URL                       | Ação                                   |
| ------------------------- | -------------------------------------- |
| `/`                       | Redireciona 308 para `/trabalhista-empresas` |
| `/trabalhista-empresas`   | Landing page principal (5 seções)      |

## Estrutura de seções

1. **Hero** — fundo escuro, headline em duas linhas, 3 stat blocks (TST 2024), CTA vermelho que rola até a qualificação.
2. **Identificação** — 4 cards de situações de risco; fechamento com call-out de risco.
3. **Autoridade** — bio do Dr. Thiago + 3 blocos descrevendo a atuação do escritório (sem depoimento individualizado, em conformidade com a TED/SP 2024 mencionada na seção 7.5 da estratégia).
4. **Qualificação** — formulário multi-step com 3 perguntas (`useState`). Após responder, gera deep link `wa.me` com texto pré-preenchido contendo o resumo das respostas.
5. **CTA Final** — botão WhatsApp como fallback caso o usuário não preencha o form.

## Setup

```bash
cd landing
cp .env.example .env.local   # editar valores
npm install
npm run dev                  # http://localhost:3000
```

### Variáveis de ambiente

| Variável                       | Obrigatório | Default                    | Descrição                                                |
| ------------------------------ | ----------- | -------------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | Não         | `5561985944887`            | Número internacional sem `+`, sem espaços.               |
| `NEXT_PUBLIC_META_PIXEL_ID`    | Não         | (vazio)                    | Sem isso, eventos do Pixel não disparam (no-op).         |
| `NEXT_PUBLIC_GTM_ID`           | Não         | (vazio)                    | Formato `GTM-XXXXXXX`. Sem isso, dataLayer fica vazio.   |
| `NEXT_PUBLIC_SITE_URL`         | Não         | `https://thiagobrito.adv.br` | Usado em meta tags Open Graph / canonical.             |

## Build de produção

```bash
npm run build
npm run start    # serve em http://localhost:3000
```

## Onde editar conteúdo

Todo o copy da página vive em [`lib/content.ts`](lib/content.ts) — um único arquivo, sem texto hardcoded nos componentes. Para ajustar headline, bullets, CTAs, etc., edite ali.

## Conformidade OAB (Provimento 205/2021)

Validações já aplicadas:

- ✅ Sem promessa de resultado em qualquer parte do copy
- ✅ Sem depoimento de cliente concreto (substituído por descrição da atuação)
- ✅ Sem preço de honorários — apenas "diagnóstico gratuito de 30 min"
- ✅ Dados estatísticos com fonte (TST, Serasa, CNJ — 2024)

Antes de publicar com modificações, revise a [seção 7.5 da estratégia](../estrategia_buma_thiago_brito.docx) com o Dr. Thiago.

## Deep link do WhatsApp

A função `buildWhatsAppLink({funcionarios, situacao, localizacao})` em [`lib/whatsapp.ts`](lib/whatsapp.ts) gera URLs assim:

```
https://wa.me/5561985944887?text=
  Olá! Vim do site de Thiago Brito Advogados.
  
  Resumo das respostas:
  • Funcionários: 6 a 20 funcionários
  • Situação: Demiti um funcionário nos últimos 6 meses
  • Localização: Brasília — DF
  
  Aguardando contato para agendar o diagnóstico de 30 min.
```

Isso entrega o lead já classificado (Tier 1/2/3) para quem atender.

## Checklist antes de publicar

- [ ] Substituir `public/og-image.png` por arte definitiva (1200x630)
- [ ] Substituir avatar `TB` em `Autoridade.tsx` por foto profissional do Dr. Thiago
- [ ] Configurar `NEXT_PUBLIC_META_PIXEL_ID` e `NEXT_PUBLIC_GTM_ID`
- [ ] Validar `NEXT_PUBLIC_WHATSAPP_NUMBER` (atual: 5561985944887 — Brasília)
- [ ] Lighthouse mobile > 90 (Performance, SEO, Best Practices)
- [ ] Revisão final do copy com o Dr. Thiago
- [ ] Apontar domínio `thiagobrito.adv.br/trabalhista-empresas`

## Deploy

Recomendado: Vercel (zero-config para Next.js). Alternativa: qualquer host que rode Node 18+ com `npm run build && npm run start`.
