import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Landmark,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { primaryButtonClass } from "../config";
import {
  EngagementStep,
  SolutionAudience,
} from "../components/cards";

export default function SolutionsPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
            Solutions
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
            Tokenization infrastructure for institutions, issuers, and strategic
            partners.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            FirstData helps organizations explore, structure, and deploy
            real-world asset tokenization programs with institutional-grade
            controls, AI-enabled workflows, and regulated-market readiness.
          </p>
        </div>

        <SolutionsHeroVisual />
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <SolutionAudience
            title="Asset Owners & Issuers"
            text="For organizations that own or manage real-world assets and want to explore tokenized access, controlled distribution, and lifecycle reporting."
            points={[
              "Prepare assets for tokenization",
              "Manage documentation and eligibility",
              "Support structured issuance workflows",
              "Improve transparency for stakeholders",
            ]}
          />

          <SolutionAudience
            title="Financial Institutions & Fintechs"
            text="For banks, fintechs, wealth platforms, and investment channels seeking tokenization infrastructure that can integrate into regulated workflows."
            points={[
              "Enable new asset access models",
              "Integrate controlled distribution",
              "Support investor onboarding logic",
              "Connect reporting and compliance processes",
            ]}
          />

          <SolutionAudience
            title="Strategic Partners"
            text="For technology, custody, advisory, and infrastructure partners that want to participate in tokenization ecosystems."
            points={[
              "Connect custody and wallet models",
              "Support platform integrations",
              "Build scalable ecosystem workflows",
              "Enable multi-provider deployment",
            ]}
          />

          <SolutionAudience
            title="Public-Sector Aligned Ecosystems"
            text="For regulated-market initiatives where transparency, supervisory visibility, asset governance, and market modernization are essential."
            points={[
              "Support sandbox-style validation",
              "Enable audit-ready reporting",
              "Align with local data requirements",
              "Design for controlled market rollout",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Institutional Value
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Tokenization turns asset programs into controlled digital market infrastructure.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              For institutions, tokenization is not only about issuing a token. It
              creates a governed operating layer for access, compliance,
              ownership records, settlement logic, and lifecycle visibility.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-black/45 p-6 shadow-2xl shadow-[#00B583]/10">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_34%,rgba(0,181,131,0.12)_50%,transparent_66%,transparent_100%)] animate-pulse" />
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#00B583]/10 blur-3xl" />

            <div className="relative z-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] border border-[#00B583]/30 bg-[#00B583]/10 p-6 md:col-span-2">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B583]">
                  Institution Benefit
                </div>
                <div className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-white">
                  More transparent, programmable, and scalable asset operations.
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#00291D]/45 p-5">
                <div className="text-2xl font-extrabold text-[#00B583]">01</div>
                <h3 className="mt-3 text-lg font-extrabold text-white">Access</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Open controlled participation models for qualified channels and investor segments.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#00291D]/45 p-5">
                <div className="text-2xl font-extrabold text-[#00B583]">02</div>
                <h3 className="mt-3 text-lg font-extrabold text-white">Efficiency</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Reduce manual friction across onboarding, issuance, transfers, and reporting.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#00291D]/45 p-5">
                <div className="text-2xl font-extrabold text-[#00B583]">03</div>
                <h3 className="mt-3 text-lg font-extrabold text-white">Control</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Embed eligibility, governance, approvals, and audit trails into the asset lifecycle.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#00291D]/45 p-5">
                <div className="text-2xl font-extrabold text-[#00B583]">04</div>
                <h3 className="mt-3 text-lg font-extrabold text-white">Visibility</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Give stakeholders clearer ownership, performance, compliance, and lifecycle data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Engagement Model
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Start with a defined use case, then scale with confidence.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              FirstData is best introduced through focused, high-value
              tokenization programs where business viability, regulatory
              readiness, and operational feasibility can be validated before
              broader rollout.
            </p>
          </div>

          <div className="grid gap-5">
            <EngagementStep
              number="01"
              title="Identify the asset opportunity"
              text="Define the target asset class, issuer profile, stakeholder needs, and commercial objective."
            />
            <EngagementStep
              number="02"
              title="Validate readiness"
              text="Review legal, compliance, data, custody, documentation, and reporting requirements."
            />
            <EngagementStep
              number="03"
              title="Configure the platform workflow"
              text="Map onboarding, token configuration, governance, distribution, and reporting flows."
            />
            <EngagementStep
              number="04"
              title="Prepare controlled launch"
              text="Move toward sandbox, pilot, partner, or phased market deployment depending on the use case."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 px-7 py-14 md:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00B583]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Talk to FirstData
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Discuss which tokenization solution fits your organization.
              </h2>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SolutionsHeroVisual() {
  return (
    <div className="relative mx-auto min-h-[340px] w-full max-w-[420px] overflow-visible lg:min-h-[430px] lg:max-w-none">
      <div className="absolute inset-0 rounded-full bg-[#00B583]/12 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[420px] -translate-x-1/2 -translate-y-1/2 scale-[0.74] overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/25 p-6 shadow-2xl shadow-[#00B583]/10 sm:scale-[0.82] lg:scale-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,181,131,0.18),transparent_42%)]" />
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#00B583]/10 blur-2xl" />
        <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-[#00B583]/8 blur-2xl" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Solution Matrix
            </div>
            <div className="h-2 w-2 rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.8)]" />
          </div>

          <div className="relative mx-auto mt-2 h-[195px] w-[285px]">
            <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-[2.25rem] border border-[#00B583]/45 bg-[#00B583]/10 text-[#00B583] shadow-[0_0_45px_rgba(0,181,131,0.14)]">
              <div className="flex h-full w-full items-center justify-center">
                <Network size={46} />
              </div>
            </div>

            <SolutionNode
              className="left-0 top-0"
              icon={<Building2 size={18} />}
              title="Issuers"
            />
            <SolutionNode
              className="right-0 top-0"
              icon={<Landmark size={18} />}
              title="Institutions"
            />
            <SolutionNode
              className="bottom-0 left-0"
              icon={<ShieldCheck size={18} />}
              title="Compliance"
            />
            <SolutionNode
              className="bottom-0 right-0"
              icon={<UsersRound size={18} />}
              title="Partners"
            />

            <div className="absolute left-[72px] top-[53px] h-px w-[72px] rotate-[24deg] bg-[#00B583]/35" />
            <div className="absolute right-[72px] top-[53px] h-px w-[72px] -rotate-[24deg] bg-[#00B583]/35" />
            <div className="absolute bottom-[53px] left-[72px] h-px w-[72px] -rotate-[24deg] bg-[#00B583]/35" />
            <div className="absolute bottom-[53px] right-[72px] h-px w-[72px] rotate-[24deg] bg-[#00B583]/35" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <SolutionMetric label="Access" value="Governed" />
            <SolutionMetric label="Rules" value="Embedded" />
            <SolutionMetric label="Scale" value="Modular" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionNode({
  className,
  icon,
  title,
}: {
  className: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div
      className={`absolute z-20 flex h-[70px] w-[112px] flex-col justify-center rounded-[1.4rem] border border-white/10 bg-black/65 px-4 backdrop-blur-xl ${className}`}
    >
      <div className="text-[#00B583]">{icon}</div>
      <div className="mt-2 text-xs font-extrabold text-white">{title}</div>
    </div>
  );
}

function SolutionMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/55 px-4 py-3 text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
        {label}
      </div>
      <div className="mt-1 text-xs font-extrabold text-white">{value}</div>
    </div>
  );
}
