"use client";

import { useEffect, useState } from "react";
import { QUALIFICACAO } from "@/lib/content";
import { buildWhatsAppLink, type LeadAnswers } from "@/lib/whatsapp";
import {
  trackFormStart,
  trackFormComplete,
  trackWhatsAppClick,
} from "@/lib/tracking";

const STEPS = ["funcionarios", "situacao", "localizacao"] as const;
type StepKey = (typeof STEPS)[number];

export function Qualificacao() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<LeadAnswers>({});
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) trackFormStart();
  }, [started]);

  function pick<K extends StepKey>(
    key: K,
    value: string,
  ): void {
    if (!started) setStarted(true);
    const next = { ...answers, [key]: value } as LeadAnswers;
    setAnswers(next);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }

    setDone(true);
    trackFormComplete({
      funcionarios: next.funcionarios,
      situacao: next.situacao,
      localizacao: next.localizacao,
    });
  }

  function reset(): void {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  if (done) {
    const link = buildWhatsAppLink(answers);
    return (
      <section
        id="qualificacao"
        className="bg-petroleo py-16 text-white sm:py-24"
      >
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-mint/30 bg-white/5 p-6 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint/20 text-mint">
              <svg
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="mt-5 text-balance text-2xl font-bold sm:text-3xl">
              {QUALIFICACAO.sucesso.titulo}
            </h2>
            <p className="mt-3 text-base text-white/80 sm:text-lg">
              {QUALIFICACAO.sucesso.subtitulo}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("qualificacao")}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/30 transition hover:brightness-110 sm:w-auto sm:text-lg"
            >
              <WhatsAppIcon />
              {QUALIFICACAO.sucesso.botao}
            </a>
            <button
              type="button"
              onClick={reset}
              className="mt-4 block w-full text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
            >
              Refazer respostas
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentKey = STEPS[step];
  const pergunta = QUALIFICACAO.perguntas[currentKey];

  return (
    <section
      id="qualificacao"
      className="bg-petroleo py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-mint">
            {QUALIFICACAO.titulo}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold sm:text-3xl">
            {QUALIFICACAO.subtitulo}
          </h2>

          <div className="mt-8 flex items-center gap-2 sm:mt-10">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition ${
                  i <= step ? "bg-mint" : "bg-white/15"
                }`}
                aria-hidden
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-white/50">
            Pergunta {step + 1} de {STEPS.length}
          </p>

          <fieldset className="mt-8">
            <legend className="text-lg font-semibold sm:text-xl">
              {pergunta.label}
            </legend>
            <div className="mt-5 grid grid-cols-1 gap-3">
              {pergunta.opcoes.map((op) => (
                <button
                  key={op.value}
                  type="button"
                  onClick={() => pick(currentKey, op.value)}
                  className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-left text-base text-white transition hover:border-mint/60 hover:bg-white/10 sm:text-lg"
                >
                  <span>{op.label}</span>
                  <span
                    className="text-mint opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="mt-6 text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
            >
              ← Voltar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
