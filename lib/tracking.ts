/**
 * Tracking helpers — no-op silencioso quando IDs não estão configurados.
 * Eventos seguem padrão Meta Pixel: PageView (auto), Lead, CompleteRegistration, Contact.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function fbq(event: string, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  if (data) window.fbq("track", event, data);
  else window.fbq("track", event);
}

function gtmPush(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (!Array.isArray(window.dataLayer)) return;
  window.dataLayer.push(payload);
}

export function trackFormStart(): void {
  fbq("Lead", { content_name: "qualificacao_inicio" });
  gtmPush({ event: "form_start", form_name: "qualificacao" });
}

export function trackFormComplete(answers: {
  funcionarios?: string;
  situacao?: string;
  localizacao?: string;
}): void {
  fbq("CompleteRegistration", {
    content_name: "qualificacao_completa",
    funcionarios: answers.funcionarios,
    situacao: answers.situacao,
    localizacao: answers.localizacao,
  });
  gtmPush({
    event: "form_complete",
    form_name: "qualificacao",
    ...answers,
  });
}

export function trackWhatsAppClick(origin: "hero" | "qualificacao" | "cta_final"): void {
  fbq("Contact", { content_name: `whatsapp_${origin}` });
  gtmPush({ event: "whatsapp_click", origin });
}
