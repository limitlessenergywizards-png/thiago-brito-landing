import { FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-petroleo py-10 text-white/60">
      <div className="mx-auto max-w-content px-5 text-sm sm:px-8">
        <p className="font-semibold text-white">{FOOTER.escritorio}</p>
        <p className="mt-1">{FOOTER.endereco}</p>
        <p className="mt-4 text-xs">{FOOTER.responsavel}</p>
        <p className="mt-1 text-xs">{FOOTER.oab}</p>
        <p className="mt-1 text-xs">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
