import { SITE, QUALIFICACAO } from "./content";

export type Funcionarios = "1-5" | "6-20" | "21-100" | "+100";
export type Situacao =
  | "processo-ativo"
  | "demiti"
  | "prevenir"
  | "duvida-contrato";
export type Localizacao = "brasilia" | "outro";

export type LeadAnswers = {
  funcionarios?: Funcionarios;
  situacao?: Situacao;
  localizacao?: Localizacao;
};

const labelOf = <T extends { value: string; label: string }>(
  opcoes: readonly T[],
  value?: string,
): string | undefined => opcoes.find((o) => o.value === value)?.label;

function getNumber(): string {
  if (typeof process !== "undefined") {
    const env = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (env && /^\d{10,15}$/.test(env)) return env;
  }
  return SITE.whatsappFallback;
}

export function buildWhatsAppMessage(answers: LeadAnswers): string {
  const partes: string[] = ["Olá! Vim do site de Thiago Brito Advogados."];

  const funcionarios = labelOf(
    QUALIFICACAO.perguntas.funcionarios.opcoes,
    answers.funcionarios,
  );
  const situacao = labelOf(
    QUALIFICACAO.perguntas.situacao.opcoes,
    answers.situacao,
  );
  const localizacao = labelOf(
    QUALIFICACAO.perguntas.localizacao.opcoes,
    answers.localizacao,
  );

  const respondidas = [funcionarios, situacao, localizacao].filter(Boolean);

  if (respondidas.length === 3) {
    partes.push("");
    partes.push("Resumo das respostas:");
    if (funcionarios) partes.push(`• Funcionários: ${funcionarios}`);
    if (situacao) partes.push(`• Situação: ${situacao}`);
    if (localizacao) partes.push(`• Localização: ${localizacao}`);
    partes.push("");
    partes.push("Aguardando contato para agendar o diagnóstico de 30 min.");
  } else {
    partes.push("Gostaria de agendar o diagnóstico gratuito de 30 minutos.");
  }

  return partes.join("\n");
}

export function buildWhatsAppLink(answers: LeadAnswers = {}): string {
  const numero = getNumber();
  const texto = buildWhatsAppMessage(answers);
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}
