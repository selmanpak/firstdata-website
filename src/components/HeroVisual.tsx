import type React from "react";
import { Building2, DatabaseZap, Network, ShieldCheck } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[350px] w-full max-w-[420px] overflow-visible lg:min-h-[520px] lg:max-w-none">
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B583]/10 blur-3xl lg:right-0 lg:left-auto lg:top-8 lg:h-[440px] lg:w-[440px] lg:translate-x-0 lg:translate-y-0" />

      <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 scale-[0.74] rounded-[4rem] border border-[#00B583]/25 bg-[#00291D]/30 p-8 shadow-2xl shadow-[#00B583]/10 sm:scale-[0.82] lg:left-auto lg:right-8 lg:top-16 lg:translate-x-0 lg:translate-y-0 lg:scale-100">
        <div className="grid h-full grid-cols-2 gap-4">
          <VisualCard icon={<Building2 />} title="Real Assets" />
          <VisualCard icon={<ShieldCheck />} title="Regulated Rails" />
          <VisualCard icon={<Network />} title="Tokenization Flow" />
          <VisualCard icon={<DatabaseZap />} title="AI Intelligence" />
        </div>
      </div>

      <div className="absolute right-[58%] top-2 h-20 w-20 rounded-[2rem] border border-white/10 bg-white/[0.03] lg:right-52 lg:top-4 lg:h-24 lg:w-24" />
      <div className="absolute bottom-10 right-[8%] h-24 w-24 rounded-full border border-[#00B583]/20 lg:bottom-12 lg:right-0 lg:h-28 lg:w-28" />
    </div>
  );
}

function VisualCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/45 p-5">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00B583]/15 text-[#00B583]">
        {icon}
      </div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-4 h-1 w-16 rounded-full bg-[#00B583]/60" />
      <div className="mt-3 h-1 w-10 rounded-full bg-white/20" />
    </div>
  );
}
