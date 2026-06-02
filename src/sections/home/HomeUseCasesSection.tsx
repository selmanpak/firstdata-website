import { UseCaseCard } from "../../components/cards";

export function HomeUseCasesSection() {
  return (
    <section className="border-y border-white/10 bg-[#00291D]/25">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Use Cases
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Real estate first. Broader real-world assets by design.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
              The platform is positioned for real-world asset tokenization
              programs where transparency, compliance, custody, and lifecycle
              control matter.
            </p>
          </div>

          <div className="relative hidden min-h-[270px] lg:block">
            <div className="absolute inset-0 rounded-full bg-[#00B583]/12 blur-3xl" />
            <div className="absolute right-0 top-1/2 h-[245px] w-[400px] -translate-y-1/2 overflow-hidden rounded-[2.75rem] border border-[#00B583]/20 bg-black/45 p-6 shadow-2xl shadow-[#00B583]/10">
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_36%,rgba(0,181,131,0.16)_49%,transparent_62%,transparent_100%)] animate-pulse" />
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00B583]/10 blur-2xl" />
              <div className="absolute -bottom-14 left-10 h-36 w-36 rounded-full bg-[#00B583]/8 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex rounded-full border border-[#00B583]/25 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
                    Primary Market
                  </div>
                  <h3 className="mt-4 text-4xl font-extrabold tracking-[-0.06em] text-white">
                    Real Estate
                  </h3>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.5)]" />
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="rounded-[1.35rem] border border-white/10 bg-[#00291D]/45 px-4 py-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
                      Next
                    </div>
                    <div className="mt-1 text-sm font-extrabold text-white">Debt</div>
                  </div>
                  <div className="text-lg font-extrabold tracking-[0.22em] text-[#00B583]/55">
                    ›››
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-[#00291D]/45 px-4 py-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
                      Next
                    </div>
                    <div className="mt-1 text-sm font-extrabold text-white">Infrastructure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <UseCaseCard
            label="Flagship Use Case"
            title="Real Estate Tokenization"
            text="Support fractionalized access, controlled distribution, asset documentation, investor eligibility, and lifecycle reporting for real estate assets."
          />
          <UseCaseCard
            label="Future Expansion"
            title="Debt & Structured Instruments"
            text="Extend tokenization workflows toward instruments requiring clear economic terms, custody controls, reporting, and compliance rules."
          />
          <UseCaseCard
            label="Infrastructure-Linked"
            title="Energy & Infrastructure Assets"
            text="Prepare for tokenized asset models connected to long-term infrastructure, yield, and strategic development opportunities."
          />
        </div>
      </div>
    </section>
  );
}
