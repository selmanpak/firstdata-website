import type React from "react";
import { Building2, CheckCircle2, ShieldCheck } from "lucide-react";

export function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/70">
      <CheckCircle2 className="text-[#00B583]" size={18} />
      <span>{text}</span>
    </div>
  );
}

export function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
    </div>
  );
}

export function ProblemCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/35">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B583]/12 text-[#00B583]">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function FlowRailStep({
  number,
  label,
  title,
  text,
  highlighted = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div className="group relative last:[&_.flow-arrow]:hidden">
      <div className="mb-5 flex items-center gap-4 lg:flex-col lg:items-start">
        <div
          className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-sm font-extrabold tracking-[0.12em] transition ${
            highlighted
              ? "border-[#00B583] bg-[#00B583] text-black shadow-2xl shadow-[#00B583]/25"
              : "border-[#00B583]/35 bg-black text-[#00B583] group-hover:border-[#00B583]"
          }`}
        >
          {number}
        </div>
      </div>

      <div className="flow-arrow pointer-events-none absolute left-[4.35rem] right-[-1.25rem] top-7 z-20 hidden items-center justify-center overflow-hidden text-[18px] font-extrabold tracking-[0.28em] text-[#00B583]/45 lg:flex">
        <span className="translate-y-[-1px]">›››››</span>
      </div>

      <div className="flow-arrow pointer-events-none mx-0 mb-5 ml-7 mt-[-0.5rem] hidden h-8 w-px bg-gradient-to-b from-[#00B583]/45 to-transparent max-lg:block" />

      <div
        className={`min-h-[220px] rounded-[2rem] border p-6 transition group-hover:-translate-y-1 ${
          highlighted
            ? "border-[#00B583]/55 bg-[#00B583]/10"
            : "border-white/10 bg-black/35 group-hover:border-[#00B583]/35"
        }`}
      >
        <div className="mb-5 inline-flex rounded-full border border-[#00B583]/25 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
          {label}
        </div>

        <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
      </div>
    </div>
  );
}

export function DifferentiatorCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function UseCaseCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7 transition hover:-translate-y-1 hover:border-[#00B583]/40">
      <div className="mb-8 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
        {label}
      </div>
      <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function LifecycleStage({
  number,
  label,
  title,
  text,
  highlighted = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] border p-7 transition hover:-translate-y-1 ${
        highlighted
          ? "border-[#00B583]/50 bg-[#00B583]/10 shadow-2xl shadow-[#00B583]/10"
          : "border-white/10 bg-black/35 hover:border-[#00B583]/35"
      }`}
    >
      <div className="absolute right-6 top-6 text-7xl font-extrabold leading-none text-white/[0.035]">
        {number}
      </div>

      <div className="relative z-10">
        <div className="mb-8 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
          {label}
        </div>

        <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
      </div>
    </div>
  );
}

export function PlatformCapability({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function TrustBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7">
      <ShieldCheck className="mb-6 text-[#00B583]" size={28} />
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function SolutionAudience({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7 transition hover:border-[#00B583]/40">
      <div className="mb-6 h-1 w-12 rounded-full bg-[#00B583]" />
      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>

      <div className="mt-7 grid gap-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-3 text-sm text-white/65">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#00B583]" size={17} />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EngagementStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div className="mb-4 text-xs font-bold tracking-[0.2em] text-[#00B583]">
        {number}
      </div>
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function UseCaseBenefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B583]/12 text-[#00B583]">
        <Building2 size={21} />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function AssetClassCard({
  status,
  title,
  text,
}: {
  status: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7 transition hover:-translate-y-1 hover:border-[#00B583]/40">
      <div className="mb-8 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
        {status}
      </div>
      <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function UseCasePattern({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div className="mb-6 text-xs font-bold tracking-[0.2em] text-[#00B583]">
        {number}
      </div>
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function AboutValue({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-white/75">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-black/45 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#00B583]"
      />
    </label>
  );
}

export function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B583]">
        {label}
      </div>
      <div className="mt-2 text-sm leading-6 text-white/65">{value}</div>
    </div>
  );
}

export function ContactCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}
