type Props = {
  numero: string;
  label: string;
  variant?: "dark" | "forest";
};

export function StatBlock({ numero, label, variant = "dark" }: Props) {
  const bg =
    variant === "forest"
      ? "bg-white/5 border-mint/30"
      : "bg-white/5 border-white/10";
  const numColor = variant === "forest" ? "text-mint" : "text-ambar";

  return (
    <div
      className={`rounded-xl border ${bg} p-5 backdrop-blur-sm sm:p-6`}
    >
      <div className={`text-2xl font-bold sm:text-3xl ${numColor}`}>
        {numero}
      </div>
      <div className="mt-2 text-sm leading-snug text-white/80 sm:text-base">
        {label}
      </div>
    </div>
  );
}
