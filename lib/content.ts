/**
 * Single source of truth para todo o copy da landing page.
 * Textos extraídos do estrategia_buma_thiago_brito.docx (seção 5).
 * Compliance OAB Provimento 205/2021 validado.
 */

export const SITE = {
  /**
   * Razão social conforme cartão CNPJ 59.016.254/0001-40, natureza jurídica
   * 232-1 (Sociedade Individual de Advocacia). Era "Thiago Brito & Advogados
   * Associados" até 02/09/2026 — descrevia sociedade pluripessoal inexistente,
   * o que o CED art. 44 não admite. Rende no rodapé, no copyright e no
   * `name` do JSON-LD de `app/layout.tsx`, então o erro saía nos três.
   */
  escritorio: "Thiago Brito Sociedade Individual de Advocacia",
  cidade: "Brasília — DF",
  /** Inscrição do responsável — publicação obrigatória (CED art. 44). */
  oabResponsavel: "OAB/DF 41.205",
  whatsappFallback: "5561985944887",
  url: "https://thiagobrito.adv.br",
} as const;

export const HERO = {
  headlineLinha1: "Sua empresa tem funcionários?",
  headlineLinha2: "Você pode ter passivo trabalhista sem saber.",
  subtitulo:
    "Em 2024, 74% das ações trabalhistas deram ganho ao funcionário. O erro já foi cometido — a questão é se você vai descobrir antes ou depois da notificação chegar.",
  stats: [
    { numero: "R$ 48,7 bi", label: "pagos por empresas em 2024" },
    { numero: "2,1 milhões", label: "novas ações trabalhistas em 2024" },
    { numero: "74%", label: "ganho para o trabalhador" },
  ],
  ctaPrimario: "Fazer diagnóstico gratuito agora",
  fonte: "Fontes: TST, Serasa Experian, CNJ — 2024",
} as const;

export const IDENTIFICACAO = {
  titulo: "Você se reconhece em alguma destas situações?",
  subtitulo:
    "Cada item abaixo representa um risco real de ação trabalhista. Marque mentalmente os que se aplicam à sua empresa.",
  itens: [
    {
      icone: "demissao",
      texto:
        "Fez uma demissão nos últimos 12 meses e não tem certeza se tudo foi feito certo",
    },
    {
      icone: "horas",
      texto:
        "Tem funcionários com horas extras pagas “no acerto” sem controle formal",
    },
    {
      icone: "notificacao",
      texto:
        "Recebeu uma notificação ou sabe que um ex-funcionário quer entrar na Justiça",
    },
    {
      icone: "auditoria",
      texto:
        "Nunca fez uma auditoria trabalhista desde que abriu a empresa",
    },
  ],
  fechamento:
    "Se você marcou ao menos 1, seu negócio está em risco real agora.",
} as const;

export const AUTORIDADE = {
  titulo: "Quem vai te atender",
  nome: "Dr. Thiago Brito",
  especialidade: "Advogado Trabalhista Empresarial · Brasília",
  credenciais: [
    "Especialista em defesa de empresas em reclamações trabalhistas",
    "Auditorias preventivas e estruturação de contratos CLT",
    "Pós-graduado em Direito do Trabalho — ILB, IDP, INFOC",
    "Atuação focada em PMEs do Distrito Federal",
  ],
  atuacaoTitulo: "Como o escritório atua",
  atuacao: [
    {
      titulo: "Diagnóstico antes de qualquer proposta",
      texto:
        "Toda primeira conversa é uma análise da sua situação. Sem pitch, sem pressão. Você sai sabendo onde está exposto e o que pode ser feito.",
    },
    {
      titulo: "Foco em prevenção, não só em defesa",
      texto:
        "Auditoria de contratos, processos de demissão e práticas de RH. O objetivo é reduzir o risco antes da ação chegar.",
    },
    {
      titulo: "Comunicação direta com o empresário",
      texto:
        "Sem juridiquês. Você entende cada decisão, cada documento e cada próximo passo do processo.",
    },
  ],
} as const;

export const QUALIFICACAO = {
  titulo: "Antes de falar com o Dr. Thiago",
  subtitulo:
    "Responda 3 perguntas rápidas para ele chegar preparado na sua conversa.",
  perguntas: {
    funcionarios: {
      label: "Quantos funcionários sua empresa tem hoje?",
      opcoes: [
        { value: "1-5", label: "1 a 5 funcionários" },
        { value: "6-20", label: "6 a 20 funcionários" },
        { value: "21-100", label: "21 a 100 funcionários" },
        { value: "+100", label: "Mais de 100 funcionários" },
      ],
    },
    situacao: {
      label: "Qual a sua situação atual?",
      opcoes: [
        {
          value: "processo-ativo",
          label: "Já recebi notificação ou ação trabalhista",
          tier: 1 as const,
        },
        {
          value: "demiti",
          label: "Demiti um funcionário nos últimos 6 meses",
          tier: 2 as const,
        },
        {
          value: "prevenir",
          label: "Quero fazer auditoria preventiva",
          tier: 3 as const,
        },
        {
          value: "duvida-contrato",
          label: "Tenho dúvida sobre um contrato ou demissão futura",
          tier: 3 as const,
        },
      ],
    },
    localizacao: {
      label: "Onde sua empresa está localizada?",
      opcoes: [
        { value: "brasilia", label: "Brasília — DF" },
        { value: "outro", label: "Outro estado (atendimento online)" },
      ],
    },
  },
  sucesso: {
    titulo: "Pronto. As informações vão para o Dr. Thiago.",
    subtitulo:
      "Agora fale diretamente com o escritório no WhatsApp. A assistente confirma 2 horários para o seu diagnóstico.",
    botao: "Falar no WhatsApp →",
  },
} as const;

export const CTA_FINAL = {
  titulo: "Fale agora com o escritório",
  subtitulo:
    "Diagnóstico gratuito de 30 minutos. Sem compromisso. Resposta em até 2 horas úteis.",
  botao: "Falar no WhatsApp →",
  microcopy:
    "Ao clicar, você será atendido inicialmente pela nossa assistente, que vai preparar seu atendimento com o Dr. Thiago.",
} as const;

export const FOOTER = {
  escritorio: SITE.escritorio,
  endereco: "Brasília — DF",
  /**
   * Antes citava só o Provimento 205. Citar a norma não cumpre a norma: o
   * CED art. 44 exige o nome e o **número de inscrição** do responsável na
   * peça. É o mesmo padrão de `pre-sell/lib/ferramentas.ts` (RESPONSAVEL).
   */
  responsavel: `Responsável técnico: Thiago Brito — ${SITE.oabResponsavel}`,
  oab: "Atuação conforme Provimento OAB 205/2021. Este site não promete resultados.",
  copyright: `© ${new Date().getFullYear()} ${SITE.escritorio}. Todos os direitos reservados.`,
} as const;

export const SEO = {
  title:
    "Advogado Trabalhista para Empresas em Brasília | Thiago Brito Advogados",
  description:
    "74% das ações trabalhistas dão ganho ao funcionário. Auditoria preventiva e defesa empresarial em Brasília. Diagnóstico gratuito de 30 min.",
  ogImage: "/og-image.png",
} as const;
