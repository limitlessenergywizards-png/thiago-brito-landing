import { HERO } from "@/lib/content";
import { StatBlock } from "./StatBlock";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-petroleo text-white"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, rgba(245,166,35,0.18) 0%, rgba(15,25,35,0) 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-alerta/40 bg-alerta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-alerta sm:text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-alerta" />
          Alerta trabalhista para empresas
        </div>

        <h1 className="text-balance text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {HERO.headlineLinha1}
          <br />
          <span className="text-ambar">{HERO.headlineLinha2}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 sm:mt-6 sm:text-lg">
          {HERO.subtitulo}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {HERO.stats.map((s) => (
            <StatBlock key={s.numero} numero={s.numero} label={s.label} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#qualificacao"
            className="inline-flex items-center justify-center rounded-lg bg-alerta px-6 py-4 text-base font-semibold text-white shadow-lg shadow-alerta/30 transition hover:brightness-110 sm:text-lg"
          >
            {HERO.ctaPrimario} →
          </a>
          <span className="text-xs text-white/60 sm:text-sm">
            Sem compromisso · 30 minutos
          </span>
        </div>

        <p className="mt-6 text-xs text-white/50 sm:mt-8">{HERO.fonte}</p>
      </div>
    </section>
  );
}
