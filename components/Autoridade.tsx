import { AUTORIDADE } from "@/lib/content";

export function Autoridade() {
  return (
    <section className="bg-forest py-16 text-white sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-mint">
          {AUTORIDADE.titulo}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <div
                className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-mint/20 text-3xl font-bold text-mint sm:h-24 sm:w-24"
                aria-hidden
              >
                TB
              </div>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {AUTORIDADE.nome}
                </h2>
                <p className="mt-1 text-sm text-white/70 sm:text-base">
                  {AUTORIDADE.especialidade}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {AUTORIDADE.credenciais.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm text-white/85 sm:text-base"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint"
                    aria-hidden
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-mint sm:text-2xl">
              {AUTORIDADE.atuacaoTitulo}
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {AUTORIDADE.atuacao.map((a) => (
                <div
                  key={a.titulo}
                  className="rounded-xl border border-mint/20 bg-white/5 p-5"
                >
                  <h4 className="text-base font-semibold text-mint sm:text-lg">
                    {a.titulo}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                    {a.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
