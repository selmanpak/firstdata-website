import { DifferentiatorCard } from "../../components/cards";

export function HomeWhyFirstDataSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
            Why FirstData
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Built for regulated markets with institutional controls.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
            FirstData combines tokenization infrastructure, AI-enabled
            workflows, custody-aware architecture, and Saudi-native market
            understanding to support institutional-grade real-world asset
            programs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <DifferentiatorCard
            title="Saudi-native design"
            text="Engineered with Saudi market modernization, regulatory alignment, and real-world asset opportunity in mind."
          />
          <DifferentiatorCard
            title="Regulatory-first"
            text="Designed around controlled deployment, auditability, role-based access, and compliance workflows."
          />
          <DifferentiatorCard
            title="AI-integrated"
            text="Uses AI-enabled workflows to support review, reporting, advisory, and operational intelligence."
          />
          <DifferentiatorCard
            title="Multi-asset ready"
            text="Starts with real estate and can scale toward broader tokenized real-world asset classes."
          />
        </div>
      </div>
    </section>
  );
}
