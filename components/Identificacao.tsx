import { IDENTIFICACAO } from "@/lib/content";

export function Identificacao() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-bold text-petroleo sm:text-4xl">
            {IDENTIFICACAO.titulo}
          </h2>
          <p className="mt-4 text-base text-petroleo/70 sm:text-lg">
            {IDENTIFICACAO.subtitulo}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {IDENTIFICACAO.itens.map((item) => (
            <li
              key={item.icone}
              className="group flex items-start gap-4 rounded-xl border border-petroleo/10 bg-white p-5 shadow-sm transition hover:border-alerta/40 hover:shadow-md sm:p-6"
            >
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-alerta/10 text-alerta">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v3a1 1 0 11-2 0V7zm1 7a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-petroleo sm:text-lg">
                {item.texto}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl border-l-4 border-alerta bg-alerta/5 p-5 sm:mt-12 sm:p-6">
          <p className="text-base font-semibold text-petroleo sm:text-lg">
            {IDENTIFICACAO.fechamento}
          </p>
        </div>
      </div>
    </section>
  );
}
